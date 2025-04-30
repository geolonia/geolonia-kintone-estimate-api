import * as cdk from 'aws-cdk-lib'
import { Construct } from 'constructs'
import * as lambda from 'aws-cdk-lib/aws-lambda'
import * as apigateway from 'aws-cdk-lib/aws-apigateway'
import * as path from 'path'

export class AppStack extends cdk.Stack {
  constructor(scope: Construct, id: string, props?: cdk.StackProps) {
    super(scope, id, props);

    const estimateDownloadLambda = new lambda.Function(this, 'EstimateDownloadHandler', {
      runtime: lambda.Runtime.NODEJS_22_X,
      handler: 'handler.handler',
      code: lambda.Code.fromAsset(path.join(__dirname, '../lambda')),
      environment: {
        API_STAGE: process.env.API_STAGE || 'dev',
      },
    })

    new apigateway.LambdaRestApi(this, 'EstimateDownloadApi', {
      handler: estimateDownloadLambda,
      proxy: false,
      defaultMethodOptions: {
        authorizationType: apigateway.AuthorizationType.NONE,
      },
    }).root.addMethod('GET')
  }
}
