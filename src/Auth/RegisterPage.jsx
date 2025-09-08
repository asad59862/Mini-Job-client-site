import lotiRegister from "../assets/loti/Register.json";
import { useAuth } from "../Hook/authHook";
import { Link, useNavigate, useLocation } from "react-router";
import { useState } from "react";
import toast, { Toaster } from "react-hot-toast";
import { uploadImage } from "../ImageUpload/imageUpload";
import Lottie from "react-lottie";

const RegisterPage = () => {
  const navigate = useNavigate();
  const location = useLocation(); // ✅ capture previous route
  const { register, loginWithGoogle } = useAuth();

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    profilePhoto: null,
  });

  const from = location.state?.from?.pathname || "/"; // ✅ redirect target

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    if (name === "profilePhoto") {
      setFormData({ ...formData, profilePhoto: files[0] });
    } else {
      setFormData({ ...formData, [name]: value });
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const { name, email, password, profilePhoto } = formData;

    const passwordRegex =
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{6,}$/;
    if (!passwordRegex.test(password)) {
      toast.error(
        "Password must be at least 6 characters and include uppercase, lowercase, number, and special character"
      );
      return;
    }

    try {
      let photoURL = null;
      if (profilePhoto) {
        toast("Uploading image...", { icon: "⏳" });
        photoURL = await uploadImage(profilePhoto);
        if (!photoURL) {
          toast.error("Image upload failed");
          return;
        }
      }

      await register(email, password, name, photoURL);
      toast.success("Registration successful!");
      navigate(from, { replace: true }); // ✅ redirect to original page
    } catch (error) {
      toast.error(error.message);
    }
  };

  const handleGoogleRegister = async () => {
    try {
      await loginWithGoogle();
      toast.success("Registered with Google!");
      navigate(from, { replace: true }); // ✅ same for Google
    } catch (error) {
      toast.error(error.message);
    }
  };

  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: lotiRegister,
    rendererSettings: { preserveAspectRatio: "xMidYMid slice" },
  };

  return (
    <div className="min-h-screen bg-base-200 flex flex-col items-center justify-center p-4">
      <Toaster />

      <div className="w-full max-w-md mb-8 flex justify-center">
        <Lottie options={defaultOptions} height={300} width={300} />
      </div>

      <div className="w-full max-w-md text-black bg-white p-6 rounded-2xl shadow-lg">
        <h2 className="text-3xl font-bold mb-6 text-center">Register</h2>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block mb-1 font-medium">Name</label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Enter your name"
              className="w-full border p-2 rounded-md focus:outline-none focus:ring"
              required
            />
          </div>

          <div>
            <label className="block mb-1 font-medium">Email</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Enter your email"
              className="w-full border p-2 rounded-md focus:outline-none focus:ring"
              required
            />
          </div>

          <div>
            <label className="block mb-1 font-medium">Password</label>
            <input
              type="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              placeholder="Enter your password"
              className="w-full border p-2 rounded-md focus:outline-none focus:ring"
              required
            />
          </div>

          <div>
            <label className="block mb-1 font-medium">Profile Photo</label>
            <input
              type="file"
              name="profilePhoto"
              accept="image/*"
              onChange={handleChange}
              className="w-full border p-2 rounded-md focus:outline-none focus:ring"
            />
          </div>

          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-2 rounded-lg font-semibold hover:bg-blue-700 transition"
          >
            Register
          </button>
        </form>

        <button
          onClick={handleGoogleRegister}
          className="w-full mt-4 bg-red-500 text-white py-2 rounded-lg font-semibold hover:bg-red-600 transition flex justify-center items-center"
        >
          Register with Google
        </button>

        <p className="mt-4 text-center text-gray-600">
          Already have an account?{" "}
          <Link
            to="/login"
            className="text-blue-600 font-medium hover:underline"
          >
            Login
          </Link>
        </p>
      </div>
    </div>
  );
};

export default RegisterPage;
