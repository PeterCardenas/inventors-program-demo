export type AmplifyDependentResourcesAttributes = {
    "function": {
        "getEC2Data": {
            "Name": "string",
            "Arn": "string",
            "Region": "string",
            "LambdaExecutionRole": "string"
        }
    },
    "api": {
        "getEC2Data": {
            "RootUrl": "string",
            "ApiName": "string",
            "ApiId": "string"
        }
    }
}