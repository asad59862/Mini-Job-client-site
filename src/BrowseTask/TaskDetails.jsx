import { useNavigate, useParams } from "react-router";
import { useAuth } from "../Hook/authHook";
import { useEffect, useState } from "react";
import toast, { Toaster } from "react-hot-toast";
import Loading from "../sharedComponent/Loading";
import Swal from "sweetalert2";

const TaskDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { user, loading } = useAuth();
  const [task, setTask] = useState(null);
  const [isEditing, setIsEditing] = useState(false);
  const [bit, setBid] = useState(0);
  const [formData, setFormData] = useState({
    title: "",
    category: "",
    description: "",
    deadline: "",
    budget: "",
  });
  const handelBid = (e) => {
    e.preventDefault();
    const numberBid = 1;
    fetch(`${import.meta.env.VITE_BaseUrl}/bidUpdate/${id}`, {
      method: "PATCH",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ Bid: numberBid }), // ✅ convert object to JSON
    })
      .then((res) => res.json())
      .then((updated) => {
        setTask(updated);
        toast.success("Task updated successfully!");
        setIsEditing(false);
        setBid(1);
      })
      .catch(() => toast.error("Failed to update task"));
  };
  console.log("bit ", typeof bit, bit);

  // Fetch task
  useEffect(() => {
    if (!user?.email) return;
    fetch(`${import.meta.env.VITE_BaseUrl}/task/${id}`)
      .then((res) => res.json())
      .then((data) => {
        setTask(data);
        setFormData({
          title: data.title,
          category: data.category,
          description: data.description,
          deadline: data.deadline,
          budget: data.budget,
        });
      })
      .catch((err) => console.error("Error fetching task:", err));
  }, [id, user?.email]);

  if (loading) return <Loading />;
  if (!task) return <p className="p-4">Loading task details...</p>;

  // Delete task
  const handleDelete = () => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#d33",
      cancelButtonColor: "#3085d6",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`${import.meta.env.VITE_BaseUrl}/deletetask/${id}`, {
          method: "DELETE",
        })
          .then((res) => res.json())
          .then(() => {
            toast.success("Task deleted successfully!");
            navigate(-1);
          })
          .catch(() => toast.error("Failed to delete task"));
      }
    });
  };

  // Update task
  const handleUpdate = (e) => {
    e.preventDefault();
    fetch(`${import.meta.env.VITE_BaseUrl}/updatetask/${id}`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(formData),
    })
      .then((res) => res.json())
      .then((updated) => {
        setTask(updated);
        toast.success("Task updated successfully!");
        setIsEditing(false);
        navigate(`/myjob`);
      })
      .catch(() => toast.error("Failed to update task"));
  };

  return (
    <div className="p-4 max-w-lg mx-auto bg-white shadow-md rounded-lg border border-gray-200 text-black ">
      {/* Toast Container */}
      <Toaster position="top-right" reverseOrder={false} />

      {!isEditing ? (
        <>
          <h2 className="text-2xl font-bold mb-4">{task.title}</h2>
          <p>
            <strong>Category:</strong> {task.category}
          </p>
          <p>
            <strong>Description:</strong> {task.description}
          </p>
          <p>
            <strong>Deadline:</strong> {task.deadline}
          </p>
          <p>
            <strong>Budget:</strong> ${task.budget}
          </p>
          <p>
            <strong>Email:</strong> {task.email}
          </p>
          <p>
            <strong>User:</strong> {task.userName}
          </p>
          <p>
            <strong>Bid:</strong> {task.bid}
          </p>

          <div className="flex justify-between items-center mt-4">
            <button
              onClick={() => navigate(-1)}
              className="bg-gray-500 text-white px-4 py-2 rounded-lg hover:bg-gray-600"
            >
              Back
            </button>

            {user?.email === task?.email ? (
              <div className="flex gap-2">
                <button
                  onClick={() => setIsEditing(true)}
                  className="bg-green-500 text-white px-4 py-2 rounded-lg hover:bg-green-600"
                >
                  Update
                </button>
                <button
                  onClick={handleDelete}
                  className="bg-red-500 text-white px-4 py-2 rounded-lg hover:bg-red-600"
                >
                  Delete
                </button>
              </div>
            ) : (
              <button
                disabled={bit > 0}
                onClick={handelBid}
                className={`px-4 py-2 rounded-lg text-white
    ${
      bit > 0
        ? "bg-blue-500 opacity-50 cursor-not-allowed" // disabled styles
        : "bg-blue-500 hover:bg-blue-600"
    }              // enabled styles
  `}
              >
                Bid
              </button>
            )}
          </div>
        </>
      ) : (
        // Update form
        <form onSubmit={handleUpdate} className="space-y-4">
          <div>
            <label className="block font-semibold">Title</label>
            <input
              type="text"
              value={formData.title}
              onChange={(e) =>
                setFormData({ ...formData, title: e.target.value })
              }
              className="w-full border px-2 py-1 rounded"
              required
            />
          </div>
          <div>
            <label className="block font-semibold">Category</label>
            <input
              type="text"
              value={formData.category}
              onChange={(e) =>
                setFormData({ ...formData, category: e.target.value })
              }
              className="w-full border px-2 py-1 rounded"
              required
            />
          </div>
          <div>
            <label className="block font-semibold">Description</label>
            <textarea
              value={formData.description}
              onChange={(e) =>
                setFormData({ ...formData, description: e.target.value })
              }
              className="w-full border px-2 py-1 rounded"
              required
            ></textarea>
          </div>
          <div>
            <label className="block font-semibold">Deadline</label>
            <input
              type="date"
              value={formData.deadline}
              onChange={(e) =>
                setFormData({ ...formData, deadline: e.target.value })
              }
              className="w-full border px-2 py-1 rounded"
              required
            />
          </div>
          <div>
            <label className="block font-semibold">Budget</label>
            <input
              type="number"
              value={formData.budget}
              onChange={(e) =>
                setFormData({ ...formData, budget: e.target.value })
              }
              className="w-full border px-2 py-1 rounded"
              required
            />
          </div>
          <div className="flex justify-between mt-4">
            <button
              type="submit"
              className="bg-green-500 text-white px-4 py-2 rounded-lg hover:bg-green-600"
            >
              Save
            </button>
            <button
              type="button"
              onClick={() => setIsEditing(false)}
              className="bg-gray-500 text-white px-4 py-2 rounded-lg hover:bg-gray-600"
            >
              Cancel
            </button>
          </div>
        </form>
      )}
    </div>
  );
};

export default TaskDetails;
