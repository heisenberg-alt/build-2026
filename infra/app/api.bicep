param name string
param location string = resourceGroup().location
param tags object = {}
param applicationInsightsName string
param appServicePlanId string
param appSettings object = {}
param runtimeName string
param runtimeVersion string
param serviceName string = 'api'
param storageAccountName string
param deploymentStorageContainerName string
param instanceMemoryMB int = 2048
param maximumInstanceCount int = 40
param identityId string
param identityClientId string
param allowedOrigins array = []

var applicationInsightsIdentity = 'ClientId=${identityClientId};Authorization=AAD'

resource stg 'Microsoft.Storage/storageAccounts@2023-05-01' existing = {
  name: storageAccountName
}

resource applicationInsights 'Microsoft.Insights/components@2020-02-02' existing = {
  name: applicationInsightsName
}

var baseAppSettings = {
  AzureWebJobsStorage__credential: 'managedidentity'
  AzureWebJobsStorage__clientId: identityClientId
  AzureWebJobsStorage__blobServiceUri: stg.properties.primaryEndpoints.blob
  APPLICATIONINSIGHTS_AUTHENTICATION_STRING: applicationInsightsIdentity
  APPLICATIONINSIGHTS_CONNECTION_STRING: applicationInsights.properties.ConnectionString
}

module api 'br/public:avm/res/web/site:0.15.1' = {
  name: '${serviceName}-flex-consumption'
  params: {
    kind: 'functionapp,linux'
    name: name
    location: location
    tags: union(tags, { 'azd-service-name': serviceName })
    serverFarmResourceId: appServicePlanId
    managedIdentities: {
      systemAssigned: false
      userAssignedResourceIds: [identityId]
    }
    functionAppConfig: {
      deployment: {
        storage: {
          type: 'blobContainer'
          value: '${stg.properties.primaryEndpoints.blob}${deploymentStorageContainerName}'
          authentication: {
            type: 'UserAssignedIdentity'
            userAssignedIdentityResourceId: identityId
          }
        }
      }
      scaleAndConcurrency: {
        instanceMemoryMB: instanceMemoryMB
        maximumInstanceCount: maximumInstanceCount
      }
      runtime: {
        name: runtimeName
        version: runtimeVersion
      }
    }
    siteConfig: {
      alwaysOn: false
      cors: {
        allowedOrigins: allowedOrigins
      }
    }
    appSettingsKeyValuePairs: union(appSettings, baseAppSettings)
  }
}

output SERVICE_API_NAME string = api.outputs.name
output SERVICE_API_URI string = 'https://${api.outputs.defaultHostname}'
