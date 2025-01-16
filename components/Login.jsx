"use client";

import { getProviders, signIn } from "next-auth/react";
import { useEffect, useState } from "react";

const Login = () => {
  const [providers, setProviders] = useState(null);
  const [form, setForm] = useState({ username: "", password: "" });

  useEffect(() => {
    const setUpProviders = async () => {
      const res = await getProviders();
      setProviders(res);
    };
    setUpProviders();
  }, []);

  const handleFormSubmit = (e) => {
    e.preventDefault();
    // Add logic for username and password authentication here
    console.log("Username:", form.username, "Password:", form.password);
    alert("Custom login logic goes here!");
  };

  return (
    <div className="flex flex-col items-center justify-center ">
      <h1 className="text-3xl font-bold mb-6">Sign In</h1>

      {/* Username and Password Login Form */}
      <form
        onSubmit={handleFormSubmit}
        className="flex flex-col items-center w-full max-w-sm bg-white p-6 rounded shadow-md"
      >
        <input
          type="text"
          placeholder="Username"
          value={form.username}
          onChange={(e) => setForm({ ...form, username: e.target.value })}
          className="mb-4 w-full px-3 py-2 border rounded focus:outline-none focus:ring focus:ring-blue-200"
        />
        <input
          type="password"
          placeholder="Password"
          value={form.password}
          onChange={(e) => setForm({ ...form, password: e.target.value })}
          className="mb-4 w-full px-3 py-2 border rounded focus:outline-none focus:ring focus:ring-blue-200"
        />
        <button
          type="submit"
          className="w-full mb-4 px-6 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
        >
          Login
        </button>
      </form>

      {/* Sign In with Google */}
      <div className="flex flex-col items-center mt-6">
        <p className="text-gray-600 mb-2">Or sign in with:</p>
        {providers &&
          Object.values(providers).map(
            (provider) =>
              provider.name === "Google" && (
                <button
                  key={provider.name}
                  onClick={() => signIn(provider.id, { callbackUrl: "/" })}
                  className="mb-4 px-6 py-2 bg-red-600 text-white rounded hover:bg-red-700"
                >
                  Sign in with Google
                </button>
              )
          )}
      </div>

      {/* Sign Up Prompt */}
      <p className="mt-6 text-gray-600">
        Don't have an account?{" "}
        <a href="/signup" className="text-blue-600 hover:underline">
          Sign up
        </a>
      </p>
    </div>
  );
};

export default Login;
