import { useState } from "react";
import getEC2Data from "api/getEC2Data";
import { Navigate, Route, Routes } from "react-router-dom";
import Register from "screens/Register";
import Dashboard from "screens/Dashboard";

function App() {
  const [res, setRes] = useState("");
  const callApi = async () => {
    const result = await getEC2Data();
    setRes(JSON.stringify(result));
  };

  return (
    <div className="bg-[#f5f5f5] min-h-screen">
      <Routes>
        <Route path="/" element={<Navigate to="/register" />} />
        <Route path="/register" element={<Register />} />
        <Route path="/dashboard" element={<Dashboard />} />
      </Routes>
    </div>
  );
}

export default App;
