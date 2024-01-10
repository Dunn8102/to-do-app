"use client";
import React, { useState } from "react";
import { Task } from "../lib/type";
import TodoHeader from "./TodoHeader";
import TodoList from "./TodoList";
import { useTaskStore } from "../lib/hooks/useTaskStore";

const ListTasks = () => {
  const { tasks, getAllTasks, getAllDeleteTasks, getAllDoneTasks } =
    useTaskStore();

  const [tasksToList, setTasksToList] = useState(tasks);

  function getAllDeletedTasksToList() {
    setTasksToList(getAllDeleteTasks);
  }

  function getAllDoneTasksToList() {
    setTasksToList(getAllDoneTasks);
  }

  function getAllTasksToList() {
    setTasksToList(getAllTasks);
  }
  return (
    <div>
      <TodoHeader
        showTableAll={getAllTasksToList}
        showTableDone={getAllDoneTasksToList}
        showTableDelete={getAllDeletedTasksToList}
      />
      <TodoList tasksToList={tasksToList} />
    </div>
  );
};

export default ListTasks;
