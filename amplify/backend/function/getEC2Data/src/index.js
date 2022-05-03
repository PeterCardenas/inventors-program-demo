const AWS = require("aws-sdk");

/**
 * @type {import('@types/aws-lambda').APIGatewayProxyHandler}
 */
exports.handler = async (event) => {
  console.log(`EVENT: ${JSON.stringify(event)}`);
  AWS.config.region = "us-east-1";
  AWS.config.credentials.accessKeyId = "AKIA2LIHVK5UQVZO5MYJ";
  AWS.config.credentials.secretAccessKey =
    "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";
  const ec2 = new AWS.EC2();
  const params = {
    InstanceIds: ["i-029b9c543383c0a06"],
    DryRun: true,
  };
  const response = await new Promise((resolve) => {
    ec2.monitorInstances(params, (err, data) => {
      if (err) {
        resolve(err);
      } else {
        resolve(data);
      }
    });
  });
  return {
    statusCode: 200,
    //  Uncomment below to enable CORS requests
    headers: {
      "Access-Control-Allow-Origin": "*",
      "Access-Control-Allow-Headers": "*",
    },
    body: JSON.stringify(response),
  };
};
