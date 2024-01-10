"use client";
import React, { useEffect } from "react";
import AddTaskForm from "./AddTaskForm";
import ListTasks from "./ListTasks";
import { useTaskStore } from "../lib/hooks/useTaskStore";

// async function getAllTodoTasks() {
//   const res = await fetch("http://localhost:3000/api/todos", {
//     cache: "no-store",
//   });
//   if (!res.ok) {
//     throw new Error("Failed to fetch data");
//   }
//   return res.json();
// }

const MyTodoApp = async () => {
  // const todoTasks = await getAllTodoTasks();
  const { fetchData, isLoading } = useTaskStore();
  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div>
      <AddTaskForm />
      {isLoading ? (
        <div className="text-center text-lg">Loading...</div>
      ) : (
        <ListTasks />
      )}
      {/* <ListTasks tasks={todoTasks} /> */}
    </div>
  );
};
export default MyTodoApp;
