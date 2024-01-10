import React from "react";

const AddTaskForm = () => {
  return (
    <div>
      {/* Add task form Begin */}
      <form action="dd" className="flex my-4 justify-center">
        <input
          type="text"
          placeholder="New Task here"
          className="input input-bordered input-success w-full max-w-xs mr-4"
        />
        <button className="btn btn-outline btn-success ml-5">
          Add New Task
        </button>
      </form>
      {/* Add task form end */}
    </div>
  );
};

export default AddTaskForm;
