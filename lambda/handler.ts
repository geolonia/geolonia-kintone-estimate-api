import { APIGatewayProxyHandler } from 'aws-lambda'

export const handler: APIGatewayProxyHandler = async (event) => {
  const id = event.queryStringParameters?.id
  return {
    statusCode: 200,
    body: `Hello ${id}`,
  }
}
