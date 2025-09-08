import React, { useState, useEffect } from "react";
import { useAuth } from "../Hook/authHook";
import Loading from "../sharedComponent/Loading";
import MyPostedSingleJob from "./MyPostedSingleJob";

const MypostedAllJob = () => {
  const { user, loading } = useAuth();
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    if (!user?.email) return; // wait until user is loaded

    fetch(`${import.meta.env.VITE_BaseUrl}/myJob?email=${user.email}`)
      .then((res) => res.json())
      .then((data) => setTasks(data))
      .catch((err) => console.error("Error fetching tasks:", err));
  }, [user?.email]);

  if (loading) return <Loading />;

  return (
    <div className="overflow-x-auto p-4">
      {tasks.length > 0 ? (
        <table className="table-auto w-full border border-base-300 border-collapse">
          <thead className="bg-base-200 text-base-content text-center">
            <tr>
              <th className="px-4 py-2">No</th>
              <th className="px-4 py-2">Title</th>
              <th className="px-4 py-2">Deadline</th>
              <th className="px-4 py-2">Budget</th>
              <th className="px-4 py-2">Action</th>
            </tr>
          </thead>
          <tbody>
            {tasks.map((task, index) => (
              <MyPostedSingleJob key={task._id} task={task} index={index} />
            ))}
          </tbody>
        </table>
      ) : (
        <p className="text-center py-4 text-base-content">No tasks found</p>
      )}
    </div>
  );
};

export default MypostedAllJob;
