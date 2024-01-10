"use client";
import React from "react";
import TodoItem from "./TodoItem";
import { Task } from "../lib/type";

const TodoList = ({ tasksToList }: { tasksToList: Task[] }) => {
  return (
    <div>
      {tasksToList.map((task: Task) => (
        <TodoItem task={task} />
      ))}
    </div>
  );
};

export default TodoList;
