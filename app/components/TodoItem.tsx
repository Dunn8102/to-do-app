import React from "react";
import { Task } from "../lib/type";

const todoItems = ({ task }: { task: Task }) => {
  return (
    <div className="overflow-x-auto justify-center">
      <table className="table">
        <tbody>
          <tr>
            <th>
              <input type="checkbox" className="checkbox" />
            </th>
            <td className="inline-flex ml-20">{task.id}</td>
            <td className="inline-flex ml-16">{task.name}</td>
            <td className="inline-flex ml-64">
              <button className="btn btn-ghost btn-xs bg-stone-100 text-green-600 text-sm">
                Edit
              </button>
              <button className="btn btn-ghost btn-xs bg-stone-100 text-red-600 text-sm">
                Delete
              </button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default todoItems;
