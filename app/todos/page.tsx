import Link from "next/link";
import React from "react";
import HeaderNav from "../components/HeaderNav";
import MyTodoApp from "../components/MyTodoApp";

const TodoAppPage = () => {
  return (
    <div>
      <HeaderNav />
      <MyTodoApp />
    </div>
  );
};

export default TodoAppPage;
