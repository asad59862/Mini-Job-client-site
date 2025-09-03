import React from "react";
import { useForm } from "react-hook-form";
import { useAuth } from "../Hook/authHook";
import Loading from "../sharedComponent/Loading";
import { useNavigate } from "react-router";


const AddTask = () => {
  const { register, handleSubmit } = useForm();
  const { user, loading } = useAuth();
  const navigate = useNavigate();
  if (loading) {
    return <Loading></Loading>
  }
  
const submitHandeler = async (data) => {
  const response = await fetch(`${import.meta.env.VITE_BaseUrl}/job`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  });

  const result = await response.json();
  console.log("✅ Server response:", result);
  navigate("/myjob");

};


  return (
    <div className="max-w-xl mx-auto p-6 bg-white rounded-2xl shadow-md">
      <h2 className="text-2xl font-bold mb-4 text-center">Add New Task</h2>
      <form onSubmit={handleSubmit(submitHandeler)} className="space-y-4">
        {/* Task Title */}
        <div>
          <label className="block mb-1 font-medium">Task </label>
          <input
            type="text"
            
            {...register("title", { required: true })}
            placeholder="Enter task title"
            className="w-full border p-2 rounded-md focus:outline-none focus:ring"
          />
        </div>

        {/* Category */}
        <div>
          <label className="block mb-1 font-medium">Category</label>
          <input
            type="text"
            {...register("category", { required: true })}
            placeholder="e.g. Web Development"
            className="w-full border p-2 rounded-md focus:outline-none focus:ring"
          />
        </div>

        {/* Description */}
        <div>
          <label className="block mb-1 font-medium">Description</label>
          <textarea
            {...register("description", { required: true })}
            placeholder="Write task details..."
            className="w-full border p-2 rounded-md focus:outline-none focus:ring"
            rows="3"
          ></textarea>
        </div>

        {/* Deadline */}
        <div>
          <label className="block mb-1 font-medium">Deadline</label>
          <input
            type="date"
            {...register("deadline", { required: true })}
            className="w-full border p-2 rounded-md focus:outline-none focus:ring"
          />
        </div>

        {/* Budget */}
        <div>
          <label className="block mb-1 font-medium">Budget ($)</label>
          <input
            type="number"
            {...register("budget", { required: true })}
            placeholder="Enter budget"
            className="w-full border p-2 rounded-md focus:outline-none focus:ring"
          />
        </div>

        {/* User Email */}
        <div>
          <label className="block mb-1 font-medium">User Email</label>
          <input
            type="email"
          value={user?.email}
            {...register("email")}
            placeholder="Enter your email"
            className="w-full border p-2 rounded-md focus:outline-none focus:ring"
          />
        </div>

        {/* User Name */}
        <div>
          <label className="block mb-1 font-medium">User Name</label>
          <input
            type="text"
          value={user?.displayName}
            {...register("userName", )}
            placeholder="Enter your name"
            className="w-full border p-2 rounded-md focus:outline-none focus:ring"
          />
        </div>


        {/* Submit Button */}
        <button
          type="submit"
          className="w-full bg-blue-600 text-white py-2 rounded-lg font-semibold hover:bg-blue-700 transition"
        >
          Add Task
        </button>
      </form>
    </div>
  );
};

export default AddTask;
