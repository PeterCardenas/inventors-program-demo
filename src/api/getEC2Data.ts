import { API } from "aws-amplify";

const getEC2Data = async () => {
  const AWS = (window as any).AWS;
  // const result = await API.get("getEC2Data", "/getEC2Data", {
  // queryStringParameters: { name: "param" },
  // });
  AWS.config.region = "us-east-1";
  AWS.config.credentials = {
    accessKeyId: "AKIA2LIHVK5UQVZO5MYJ",
    secretAccessKey: "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",
  };
  const ec2 = new AWS.EC2();
  const params = {
    InstanceIds: ["i-029b9c543383c0a06"],
    DryRun: true,
  };
  const result = await new Promise((resolve) => {
    ec2.monitorInstances(params, (err: any, data: any) => {
      if (err) {
        resolve(err);
      } else {
        resolve(data);
      }
    });
  });
  return result;
};

export default getEC2Data;
