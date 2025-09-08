import { useEffect, useState } from "react";
import SingleTask from "../BrowseTask/SingleTask";


const Latest_6_jobs = () => {
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    fetch(`${import.meta.env.VITE_BaseUrl}/latesttasks`)
      .then((res) => res.json())
      .then((data) => setTasks(data))
      .catch((err) => console.error("Error fetching tasks:", err));
  }, []); // run once

  return (
    <div className="overflow-x-auto  p-4">
      <h1 className="text-center font-extrabold text-4xl my-6"> Latest Task</h1>
      {tasks.length > 0 ? (
        <table className="table-auto w-full border-collapse border border-gray-300">
          <thead className="text-center">
            <tr className="">
              <th className="px-4 py-2">No</th>
              <th className="px-4 py-2">Title</th>
              <th className="px-4 py-2">Deadline</th>
              <th className="px-4 py-2">Budget</th>
              <th className="px-4 py-2">Action</th>
            </tr>
          </thead>
          <tbody>
            {tasks.map((task, index) => (
              <SingleTask key={task._id} task={task} index={index} />
            ))}
          </tbody>
        </table>
      ) : (
        <p className="text-center py-4">No tasks found</p>
      )}
    </div>
  );
};

export default Latest_6_jobs;
