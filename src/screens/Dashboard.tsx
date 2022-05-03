import cx from "classnames";
import {
  CartesianGrid,
  Legend,
  Line,
  LineChart,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";

type PerformanceHealth = "Healthy" | "Over-Utilized" | "Under-Utilized";

interface DashboardProps {}

const Dashboard = (props: DashboardProps) => {
  const instanceID = "i-029b9c543383c0a06";
  const performanceHealth = "Over-Utilized" as PerformanceHealth;
  const cpuUtilization = [
    { time: "00:00", utilization: 17.8 },
    { time: "00:05", utilization: 18.3 },
    { time: "00:10", utilization: 17.9 },
    { time: "00:15", utilization: 18.1 },
    { time: "00:20", utilization: 18.2 },
    { time: "00:25", utilization: 18.3 },
    { time: "00:30", utilization: 17.6 },
    { time: "00:35", utilization: 17.8 },
    { time: "00:40", utilization: 17.8 },
    { time: "00:45", utilization: 17.8 },
    { time: "00:50", utilization: 18.1 },
    { time: "00:55", utilization: 18.1 },
    { time: "01:00", utilization: 18.3 },
    { time: "01:05", utilization: 18.3 },
    { time: "01:10", utilization: 18.2 },
    { time: "01:15", utilization: 18.2 },
    { time: "01:20", utilization: 18.23 },
    { time: "01:25", utilization: 18.3 },
    { time: "01:30", utilization: 18.12 },
    { time: "01:35", utilization: 18.3 },
    { time: "01:40", utilization: 18.1 },
    { time: "01:45", utilization: 18.1 },
    { time: "01:50", utilization: 18.09 },
    { time: "01:55", utilization: 18.1 },
    { time: "02:00", utilization: 17.8 },
  ];

  const creditBalance = [
    { time: "00:00", balance: 144 },
    { time: "00:05", balance: 143.4 },
    { time: "00:10", balance: 142.8 },
    { time: "00:15", balance: 142.2 },
    { time: "00:20", balance: 141.6 },
    { time: "00:25", balance: 141 },
    { time: "00:30", balance: 140.4 },
    { time: "00:35", balance: 139.8 },
    { time: "00:40", balance: 139.2 },
    { time: "00:45", balance: 138.6 },
    { time: "00:50", balance: 138 },
    { time: "00:55", balance: 137.4 },
    { time: "01:00", balance: 136.8 },
    { time: "01:05", balance: 136.2 },
    { time: "01:10", balance: 135.6 },
    { time: "01:15", balance: 135 },
    { time: "01:20", balance: 134.4 },
    { time: "01:25", balance: 133.8 },
    { time: "01:30", balance: 133.2 },
    { time: "01:35", balance: 132.6 },
    { time: "01:40", balance: 132 },
    { time: "01:45", balance: 131.4 },
    { time: "01:50", balance: 130.8 },
    { time: "01:55", balance: 130.2 },
    { time: "02:00", balance: 129.6 },
  ];

  return (
    <div className="p-8 w-full flex flex-col">
      <h1 className="font-bold text-2xl mb-4">Dashboard</h1>
      <p className="mb-4">EC2 Instance: {instanceID}</p>
      <div className="flex justify-center mb-8">
        <div className="bg-gray-200 shadow-xl border-2 border-solid border-slate-400 w-fit p-8 rounded-2xl">
          <h3 className="text-center font-semibold text-xl">
            Performance Health
          </h3>
          <h3
            className={cx(
              "text-center font-semibold text-4xl",
              performanceHealth !== "Healthy"
                ? "text-red-400"
                : "text-green-400"
            )}
          >
            {performanceHealth}
          </h3>
        </div>
      </div>
      <div className="flex justify-center mb-8">
        <div className="bg-gray-200 shadow-xl border-2 border-solid border-slate-400 w-fit p-8 rounded-2xl">
          <h3 className="text-center font-semibold text-lg text-red-400">
            Issue
          </h3>
          <h3 className="text-center font-semibold text-2xl">
            Performance Bottleneck on CPU Type t2.micro
          </h3>
        </div>
      </div>

      <div className="flex justify-center flex-wrap space-x-8 mb-8">
        <div className="bg-gray-200 shadow-xl border-2 border-solid border-slate-400 w-fit p-4 rounded-2xl">
          <h3 className="text-center font-semibold text-lg">
            Current Credits Per Hour
          </h3>
          <h3 className="text-center font-semibold text-2xl">13.5</h3>
        </div>
        <div className="bg-gray-200 shadow-xl border-2 border-solid border-slate-400 w-fit p-4 rounded-2xl">
          <h3 className="text-center font-semibold text-lg">
            Current Credits Per Hour Supplied
          </h3>
          <h3 className="text-center font-semibold text-2xl text-red-400">6</h3>
        </div>
      </div>
      <div className="flex justify-center mb-8">
        <div className="bg-gray-200 shadow-xl border-2 border-solid border-slate-400 w-fit p-8 rounded-2xl">
          <h3 className="text-center font-semibold text-lg text-green-400">
            Suggested Fix
          </h3>
          <h3 className="text-center font-semibold text-2xl">
            Upgrade to CPU Type t2.medium
          </h3>
        </div>
      </div>
      <div className="flex justify-center flex-wrap lg:space-x-8 space-y-8">
        <div className="bg-gray-200 shadow-xl border-2 border-solid border-slate-400 w-fit p-4 rounded-2xl">
          <h3 className="text-center text-xl font-semibold">CPU Utilization</h3>
          <LineChart
            width={800}
            height={400}
            data={cpuUtilization}
            margin={{ top: 20, right: 20, bottom: 20, left: 20 }}
          >
            <CartesianGrid stroke="#f5f5f5" />
            <Legend />
            <XAxis dataKey="time" />
            <YAxis domain={[0.01, "auto"]} />
            <Tooltip />
            <Line type="monotone" dataKey="utilization" stroke="#ff7300" />
          </LineChart>
        </div>
        <div className="bg-gray-200 shadow-xl border-2 border-solid border-slate-400 w-fit p-4 rounded-2xl">
          <h3 className="text-center text-xl font-semibold">Credit Balance</h3>
          <LineChart
            width={800}
            height={400}
            data={creditBalance}
            margin={{ top: 20, right: 20, bottom: 20, left: 20 }}
          >
            <CartesianGrid stroke="#f5f5f5" />
            <Legend />
            <XAxis dataKey="time" />
            <YAxis domain={[0.01, "auto"]} />
            <Tooltip />
            <Line type="monotone" dataKey="balance" stroke="#ff7300" />
          </LineChart>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
