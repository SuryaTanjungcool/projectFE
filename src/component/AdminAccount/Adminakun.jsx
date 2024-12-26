import React, { useState } from "react";
import { useNavigate } from "react-router-dom";  // Use useNavigate instead of useHistory

const AdminAccount = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();  // Use navigate

  const handleLogin = () => {
    // You can add authentication logic here
    if (username && password) {
      navigate("/Dashbord"); // Use navigate instead of history.push
    } else {
      alert("Please fill in both fields.");
    }
  };

  return (
    <div className="container mx-auto py-10 bg-gray-900 text-white">
      <h1 className="text-3xl font-bold mb-6">Admin Account Page</h1>
      <p>This is the admin account management page. Customize it as needed!</p>

      <div className="max-w-sm mx-auto mt-8 p-6 border rounded-lg shadow-lg bg-gray-800">
        <h2 className="text-2xl font-semibold mb-4">Login</h2>
        <div className="mb-4">
          <label className="block text-sm font-medium mb-2" htmlFor="username">
            Username
          </label>
          <input
            id="username"
            type="text"
            className="w-full p-2 border rounded-lg bg-gray-700 text-white placeholder-gray-400"
            placeholder="Enter username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        </div>

        <div className="mb-4">
          <label className="block text-sm font-medium mb-2" htmlFor="password">
            Password
          </label>
          <input
            id="password"
            type="password"
            className="w-full p-2 border rounded-lg bg-gray-700 text-white placeholder-gray-400"
            placeholder="Enter password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>

        <button
          onClick={handleLogin}
          className="w-full bg-blue-500 text-white p-2 rounded-lg hover:bg-blue-600"
        >
          Login
        </button>
      </div>
    </div>
  );
};

export default AdminAccount;
