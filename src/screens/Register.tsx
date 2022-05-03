import { useState } from "react";
import { useNavigate } from "react-router-dom";
import loadingGifUrl from "styles/loading.gif";
import copyIconUrl from "styles/copy-icon.png";

const POLICY_DOCUMENT = `{
    "Version": "2012-10-17",
    "Statement": [
        {
            "Action": [
                "cloudwatch:Get*",
                "cloudwatch:List*",
                "ec2:Describe*",
                "tag:GetResources",
                "tag:GetTagKeys",
                "tag:GetTagValues"
              ],
            "Effect": "Allow",
            "Resource": "*"
        }
    ]
}`;

interface RegisterProps {}

const Register = (props: RegisterProps) => {
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(false);

  const register = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    const formData = new FormData(form);
    const accountID = formData.get("accountID");
    const role = "OptiSoftAWSIntegrationRole";
    setIsLoading(true);
    await new Promise((resolve) => setTimeout(resolve, 3000));
    navigate("/dashboard");
  };

  if (isLoading) {
    return (
      <div className="flex w-screen h-screen justify-center items-center">
        <img src={loadingGifUrl} alt="loading" />
      </div>
    );
  }

  return (
    <div className="p-8">
      <form onSubmit={register}>
        <h1 className="font-bold text-2xl mb-8">Register an AWS Account</h1>
        <div className="flex space-x-2 mb-4">
          <p>Enter your AWS Account ID:</p>
          <input
            name="accountID"
            type="text"
            className="border-[1px] border-solid border-black"
            required
          />
        </div>
        <div className="p-4 bg-gray-200 rounded-2xl border-2 border-solid border-slate-400 mb-4">
          <h3 className="font-semibold text-xl mb-4">Select Trusted Entity</h3>
          <div className="flex space-x-2">
            <input type="checkbox" required />
            <p>
              Navigate to the create role wizard in the AWS IAM Console{" "}
              <a
                className="text-blue-400 underline"
                href="https://us-east-1.console.aws.amazon.com/iamv2/home?region=us-east-1#/roles/create?step=selectEntities"
              >
                here
              </a>
            </p>
          </div>
          <div className="flex space-x-2">
            <input type="checkbox" required />
            <p>
              Select <code className="bg-slate-200">AWS Account</code> as the{" "}
              <code className="bg-slate-200">Trusted entity type</code>
            </p>
          </div>
          <div className="flex space-x-2">
            <input type="checkbox" required />
            <p>
              Select <code className="bg-slate-200">Another AWS account</code>{" "}
              and enter <code className="bg-slate-200">711370037097</code> as
              the as the Account ID
            </p>
          </div>
          <div className="flex space-x-2">
            <input type="checkbox" required />
            <p>
              Check the{" "}
              <code className="bg-slate-200">Require external ID</code> option
              and enter <code className="bg-slate-200">OptiSoft23</code> as the{" "}
              <code className="bg-slate-200">External ID</code>
            </p>
          </div>
          <div className="flex space-x-2">
            <input type="checkbox" required />
            <p>Make sure MFA is not checked as an option</p>
          </div>
          <div className="flex space-x-2">
            <input type="checkbox" required />
            <p>
              Click Next to the{" "}
              <code className="bg-slate-200">Add permissions</code> step
            </p>
          </div>
        </div>
        <div className="p-4 bg-gray-200 rounded-2xl border-2 border-solid border-slate-400 mb-4">
          <h3 className="font-semibold text-xl mb-4">Create New Policy</h3>
          <div className="flex space-x-2">
            <input type="checkbox" required />
            <p>
              Click the <code className="bg-slate-200">Create Policy</code>{" "}
              button, which will open up a new window
            </p>
          </div>
          <div className="flex space-x-2">
            <input type="checkbox" required />
            <p>
              Click the JSON tab in the window that just opened up, and paste
              the following policy document:
            </p>
          </div>
          <pre className="relative bg-slate-200 p-4 border-2 border-solid border-slate-500">
            <button
              className="absolute right-5 top-5"
              onClick={() => {
                navigator.clipboard.writeText(POLICY_DOCUMENT);
              }}
            >
              <img src={copyIconUrl} alt="copy" />
            </button>
            <code className="flex flex-col">
              <span>&#123;</span>
              <span>&nbsp;&nbsp;&nbsp;&nbsp;"Version": "2012-10-17",</span>
              <span>&nbsp;&nbsp;&nbsp;&nbsp;"Statement": [</span>
              <span>
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&#123;
              </span>
              <span>
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"Action":
                [
              </span>
              <span>
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"cloudwatch:Get*",
              </span>
              <span>
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"cloudwatch:List*",
              </span>
              <span>
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"ec2:Describe*",
              </span>
              <span>
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"tag:GetResources",
              </span>
              <span>
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"tag:GetTagKeys",
              </span>
              <span>
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"tag:GetTagValues"
              </span>
              <span>
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;],
              </span>
              <span>
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"Effect":
                "Allow",
              </span>
              <span>
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"Resource":
                "*"
              </span>
              <span>
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&#125;
              </span>
              <span>&nbsp;&nbsp;&nbsp;&nbsp;]</span>
              <span>&#125;</span>
            </code>
            <div></div>
          </pre>
          <div className="flex space-x-2">
            <input type="checkbox" required />
            <p>
              Click <code className="bg-slate-200">Next: Tags</code> and then{" "}
              <code className="bg-slate-200">Next: Review</code>
            </p>
          </div>
          <div className="flex space-x-2">
            <input type="checkbox" required />
            <p>
              Fill the name of the policy{" "}
              <code className="bg-slate-200">OptiSoftAWSIntegrationPolicy</code>{" "}
              and provide an appropriate description
            </p>
          </div>
          <div className="flex space-x-2">
            <input type="checkbox" required />
            <p>Click create policy, and then close the window</p>
          </div>
        </div>
        <div className="p-4 bg-gray-200 rounded-2xl border-2 border-solid border-slate-400 mb-4">
          <h3 className="font-semibold text-xl mb-4">Create New Role</h3>
          <div className="flex space-x-2">
            <input type="checkbox" required />
            <p>
              Return to the previous tab and refresh the policy listing to
              select the policy you just created.
            </p>
          </div>
          <div className="flex space-x-2">
            <input type="checkbox" required />
            <p>Check the policy to add the policy to the role.</p>
          </div>
          <div className="flex space-x-2">
            <input type="checkbox" required />
            <p>
              Click <code className="bg-slate-200">Next</code> to go to the
              final step.
            </p>
          </div>
          <div className="flex space-x-2">
            <input type="checkbox" required />
            <p>
              Name the role{" "}
              <code className="bg-slate-200">OptiSoftAWSIntegrationRole</code>{" "}
              as well as an appropriate description.
            </p>
          </div>
        </div>
        <div className="flex justify-center">
          <button type="submit" className="p-2 bg-green-200 rounded-2xl">
            Register Account
          </button>
        </div>
      </form>
    </div>
  );
};

export default Register;
