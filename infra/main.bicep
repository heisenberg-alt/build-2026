targetScope = 'subscription'

@minLength(1)
@maxLength(64)
@description('Name of the environment used to generate a short unique hash for all resources.')
param environmentName string

@minLength(1)
@description('Primary location for all resources & the Flex Consumption Function App.')
param location string

@secure()
@description('GitHub PAT with Contents: Read & write on the deck repository.')
param githubPat string

@secure()
@description('Shared passcode that deck editors must supply.')
param editorPasscode string

@description('owner/repo of the deck repository.')
param githubRepo string = 'heisenberg-alt/build-2026'

@description('Branch that deck edits are committed to.')
param githubBranch string = 'main'

@description('Comma-separated origins allowed to call the proxy (CORS).')
param allowedOrigins string = 'https://heisenberg-alt.github.io,http://localhost:8080,http://127.0.0.1:8080'

param principalId string = deployer().objectId

var resourceToken = toLower(uniqueString(subscription().id, environmentName, location))
var tags = { 'azd-env-name': environmentName }
var functionAppName = 'func-deckproxy-${resourceToken}'
var deploymentStorageContainerName = 'app-package-${take(functionAppName, 32)}-${take(resourceToken, 7)}'

resource rg 'Microsoft.Resources/resourceGroups@2024-03-01' = {
  name: 'rg-${environmentName}'
  location: location
  tags: tags
}

// User-assigned identity for the function app → storage + app insights
module apiIdentity 'br/public:avm/res/managed-identity/user-assigned-identity:0.4.1' = {
  name: 'apiUserAssignedIdentity'
  scope: rg
  params: {
    name: 'id-deckproxy-${resourceToken}'
    location: location
    tags: tags
  }
}

// Flex Consumption plan
module appServicePlan 'br/public:avm/res/web/serverfarm:0.1.1' = {
  name: 'appserviceplan'
  scope: rg
  params: {
    name: 'plan-deckproxy-${resourceToken}'
    sku: { name: 'FC1', tier: 'FlexConsumption' }
    reserved: true
    location: location
    tags: tags
  }
}

// Backing storage (managed-identity only, no shared keys)
module storage 'br/public:avm/res/storage/storage-account:0.8.3' = {
  name: 'storage'
  scope: rg
  params: {
    name: 'stdeckproxy${resourceToken}'
    location: location
    tags: tags
    skuName: 'Standard_LRS'
    allowBlobPublicAccess: false
    allowSharedKeyAccess: false
    dnsEndpointType: 'Standard'
    publicNetworkAccess: 'Enabled'
    networkAcls: { defaultAction: 'Allow', bypass: 'AzureServices' }
    minimumTlsVersion: 'TLS1_2'
    blobServices: {
      containers: [{ name: deploymentStorageContainerName }]
    }
  }
}

// Monitoring
module logAnalytics 'br/public:avm/res/operational-insights/workspace:0.11.1' = {
  name: 'loganalytics'
  scope: rg
  params: {
    name: 'log-deckproxy-${resourceToken}'
    location: location
    tags: tags
    dataRetention: 30
  }
}

module appInsights 'br/public:avm/res/insights/component:0.6.0' = {
  name: 'appinsights'
  scope: rg
  params: {
    name: 'appi-deckproxy-${resourceToken}'
    location: location
    tags: tags
    workspaceResourceId: logAnalytics.outputs.resourceId
    disableLocalAuth: true
  }
}

// The Function App itself
module api 'app/api.bicep' = {
  name: 'api'
  scope: rg
  params: {
    name: functionAppName
    location: location
    tags: tags
    applicationInsightsName: appInsights.outputs.name
    appServicePlanId: appServicePlan.outputs.resourceId
    runtimeName: 'node'
    runtimeVersion: '22'
    storageAccountName: storage.outputs.name
    deploymentStorageContainerName: deploymentStorageContainerName
    identityId: apiIdentity.outputs.resourceId
    identityClientId: apiIdentity.outputs.clientId
    allowedOrigins: split(allowedOrigins, ',')
    appSettings: {
      GITHUB_PAT: githubPat
      EDITOR_PASSCODE: editorPasscode
      GITHUB_REPO: githubRepo
      GITHUB_BRANCH: githubBranch
    }
  }
}

// RBAC: function MI + deploying user → blob; MI → app insights publisher
module rbac 'app/rbac.bicep' = {
  name: 'rbacAssignments'
  scope: rg
  params: {
    storageAccountName: storage.outputs.name
    appInsightsName: appInsights.outputs.name
    managedIdentityPrincipalId: apiIdentity.outputs.principalId
    userIdentityPrincipalId: principalId
  }
}

output AZURE_LOCATION string = location
output AZURE_TENANT_ID string = tenant().tenantId
output SERVICE_API_NAME string = api.outputs.SERVICE_API_NAME
output SERVICE_API_URI string = api.outputs.SERVICE_API_URI
