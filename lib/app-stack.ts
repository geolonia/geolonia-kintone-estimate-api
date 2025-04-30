import * as cdk from 'aws-cdk-lib'
import { Construct } from 'constructs'
import * as lambda from 'aws-cdk-lib/aws-lambda'
import * as apigateway from 'aws-cdk-lib/aws-apigateway'
import * as path from 'path'

export class AppStack extends cdk.Stack {
  constructor(scope: Construct, id: string, props?: cdk.StackProps) {
    super(scope, id, props)

    const stage = process.env.API_STAGE || 'dev'

    const estimateDownloadLambda = new lambda.Function(this, `EstimateDownloadHandler-${stage}`, {
      functionName: `EstimateDownloadHandler-${stage}`,
      runtime: lambda.Runtime.NODEJS_22_X,
      handler: 'handler.handler',
      code: lambda.Code.fromAsset(path.join(__dirname, '../lambda')),
      environment: {
        API_STAGE: stage,
      },
    })

    const api = new apigateway.RestApi(this, `EstimateDownloadApi-${stage}`, {
      restApiName: `EstimateDownloadApi-${stage}`,
      deployOptions: {
        stageName: stage,
      },
    })

    api.root.addMethod('GET', new apigateway.LambdaIntegration(estimateDownloadLambda), {
      authorizationType: apigateway.AuthorizationType.NONE,
    })
  }
}
