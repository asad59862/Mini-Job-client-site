import React from "react";
import { useNavigate } from "react-router-dom";

const SingleTask = ({ task, index }) => {
  const navigate = useNavigate();

  const handleDetails = () => {
    navigate(`/task/${task._id}` ); // send task via state
  };

  return (
    <tr className="border-b text-center hover:bg-gray-50">
      <td className="px-4 py-2 text-center">{index + 1}</td>
      <td className="px-4 py-2">{task.title}</td>
      <td className="px-4 py-2">{task.deadline}</td>
      <td className="px-4 py-2">${task.budget}</td>
      <td className="px-4 py-2 text-center">
        <button
          onClick={handleDetails}
          className="bg-blue-500 text-white px-3 py-1 rounded-lg hover:bg-blue-600"
        >
          Details
        </button>
      </td>
    </tr>
  );
};

export default SingleTask;
