import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault();

    const data = { email: email, password: password };

    fetch("http://localhost:3100/api/auth/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    })
      .then(navigate("/"))
      .catch((error) => {
        console.error("Error:", error);
      });
  };

  return (
    <div class="w-screen	h-screen flex justify-center bg-cover bg-bg2">
      <div class="  flex flex-col  w-3/12 h-3/6 self-center p-16 shadow-xl rounded-lg border-slate-50 border space-y-4 bg-white">
        <div>
          <h1 class="text-2xl"> Sign In</h1>
          <p class="my-2">
            Don't have an account?{" "}
            <Link to="/register" class="text-blue-700">
              Sign Up
            </Link>
          </p>
        </div>

        <form onSubmit={handleSubmit} class="flex flex-col space-y-4 ">
          <div class="inline-block p-1.5 border rounded-lg">
            <label class="block text-xs text-gray-500">Email</label>
            <input
              class="block leading-5  outline-0 border-0 w-full p-1"
              type="text"
              value={email}
              name="email"
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>

          <div class="inline-block p-1.5 border rounded-lg ">
            <label class="block text-xs text-gray-500">Password</label>
            <input
              class="block leading-5  outline-0 border-0 w-full p-1"
              value={password}
              type="password"
              name="password"
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>

          <button
            class="p-2  bg-blue-400 rounded-md text-slate-50 shadow-md shadow-blue-300"
            type="submit"
            value="Submit"
          >
            Submit!
          </button>
        </form>
      </div>
    </div>
  );
}

export default Login;
