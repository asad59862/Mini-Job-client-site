import React, { useContext, useState } from "react";
import { Link, useNavigate, useLocation } from "react-router";
import toast, { Toaster } from "react-hot-toast";
import { AuthContext } from "../Context/AuthContext";
import lotiLogin from "../assets/loti/Login (1).json";
import Lottie from "react-lottie";

const LoginPage = () => {
  const navigate = useNavigate();
  const location = useLocation(); // capture previous route
  const { login, loginWithGoogle } = useContext(AuthContext);

  const [formData, setFormData] = useState({ email: "", password: "" });
  const from = location.state?.from?.pathname || "/"; // redirect target

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const { email, password } = formData;
    try {
      await login(email, password);
      toast.success("Login successful!");
      navigate(from, { replace: true });
    } catch (error) {
      toast.error(error.message);
    }
  };

  const handleGoogleLogin = async () => {
    try {
      await loginWithGoogle();
      toast.success("Logged in with Google!");
      navigate(from, { replace: true });
    } catch (error) {
      toast.error(error.message);
    }
  };

  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: lotiLogin,
    rendererSettings: { preserveAspectRatio: "xMidYMid slice" },
  };

  return (
    <div className="min-h-screen bg-base-200 dark:bg-gray-900 flex flex-col items-center justify-center p-4">
      <Toaster />

      {/* Top Lottie Animation */}
      <div className="w-full max-w-md mb-8 flex justify-center">
        <Lottie options={defaultOptions} height={250} width={250} />
      </div>

      {/* Login Form */}
      <div className="w-full max-w-md bg-white dark:bg-gray-800 p-6 rounded-2xl shadow-lg text-black">
        <h2 className="text-3xl font-bold mb-6 text-center text-gray-900 dark:text-gray-100">
          Login
        </h2>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block mb-1 font-medium text-gray-700 dark:text-gray-200">
              Email
            </label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Enter your email"
              className="w-full border border-gray-300 dark:border-gray-600 p-2 rounded-md focus:outline-none focus:ring focus:ring-blue-400 dark:bg-gray-700 dark:text-gray-100"
              required
            />
          </div>

          <div>
            <label className="block mb-1 font-medium text-gray-700 dark:text-gray-200">
              Password
            </label>
            <input
              type="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              placeholder="Enter your password"
              className="w-full border border-gray-300 dark:border-gray-600 p-2 rounded-md focus:outline-none focus:ring focus:ring-blue-900 dark:bg-gray-700 dark:text-black "
              required
            />
          </div>

          <button
            type="submit"
            className="w-full bg-blue-600 dark:bg-blue-500 text-white py-2 rounded-lg font-semibold hover:bg-blue-700 dark:hover:bg-blue-600 transition"
          >
            Login
          </button>
        </form>

        <button
          onClick={handleGoogleLogin}
          className="w-full mt-4 bg-red-500 dark:bg-red-600 text-white py-2 rounded-lg font-semibold hover:bg-red-600 dark:hover:bg-red-500 transition flex justify-center items-center"
        >
          Login with Google
        </button>

        <p className="mt-4 text-center text-gray-600 dark:text-gray-300">
          Don't have an account?{" "}
          <Link
            to="/register"
            className="text-blue-600 dark:text-blue-400 font-medium hover:underline"
          >
            Register
          </Link>
        </p>
      </div>
    </div>
  );
};

export default LoginPage;
