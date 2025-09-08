import React from "react";
import { useNavigate } from "react-router-dom";

const MyPostedSingleJob = ({ task, index }) => {
  const navigate = useNavigate();

  const handleDetails = () => {
    navigate(`/task/${task._id}`);
  };

  return (
    <tr className="border-b border-base-300 bg-base-100 text-base-content hover:bg-base-200">
      <td className="px-4 py-2 text-center">{index + 1}</td>
      <td className="px-4 py-2">{task.title}</td>
      <td className="px-4 py-2">{task.deadline}</td>
      <td className="px-4 py-2">${task.budget}</td>
      <td className="px-4 py-2 text-center">
        <button onClick={handleDetails} className="btn btn-primary btn-sm">
          Details
        </button>
      </td>
    </tr>
  );
};

export default MyPostedSingleJob;
