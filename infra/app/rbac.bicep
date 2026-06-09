param storageAccountName string
param appInsightsName string
param managedIdentityPrincipalId string
param userIdentityPrincipalId string = ''

var roles = {
  storageBlobDataOwner: 'b7e6dc6d-f1e8-4753-8033-0f276bb0955b'
  monitoringMetricsPublisher: '3913510d-42f4-4e42-8a64-420c390055eb'
}

resource storageAccount 'Microsoft.Storage/storageAccounts@2023-05-01' existing = {
  name: storageAccountName
}

resource appInsights 'Microsoft.Insights/components@2020-02-02' existing = {
  name: appInsightsName
}

resource miBlobOwner 'Microsoft.Authorization/roleAssignments@2022-04-01' = {
  name: guid(storageAccount.id, managedIdentityPrincipalId, roles.storageBlobDataOwner)
  scope: storageAccount
  properties: {
    roleDefinitionId: subscriptionResourceId('Microsoft.Authorization/roleDefinitions', roles.storageBlobDataOwner)
    principalId: managedIdentityPrincipalId
    principalType: 'ServicePrincipal'
  }
}

resource miMetricsPublisher 'Microsoft.Authorization/roleAssignments@2022-04-01' = {
  name: guid(appInsights.id, managedIdentityPrincipalId, roles.monitoringMetricsPublisher)
  scope: appInsights
  properties: {
    roleDefinitionId: subscriptionResourceId('Microsoft.Authorization/roleDefinitions', roles.monitoringMetricsPublisher)
    principalId: managedIdentityPrincipalId
    principalType: 'ServicePrincipal'
  }
}

resource userBlobOwner 'Microsoft.Authorization/roleAssignments@2022-04-01' = if (!empty(userIdentityPrincipalId)) {
  name: guid(storageAccount.id, userIdentityPrincipalId, roles.storageBlobDataOwner)
  scope: storageAccount
  properties: {
    roleDefinitionId: subscriptionResourceId('Microsoft.Authorization/roleDefinitions', roles.storageBlobDataOwner)
    principalId: userIdentityPrincipalId
    principalType: 'User'
  }
}
