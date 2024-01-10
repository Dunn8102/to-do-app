"use client";
import React from "react";
import { FaAddressBook, FaRegRectangleList } from "react-icons/fa6/";
import { AiOutlineFileDone } from "react-icons/ai";
import { MdPlaylistRemove } from "react-icons/md";
import Link from "next/link";
import { Task } from "../lib/type";

interface TodoHeaderProps {
  showTableDelete: () => void;
  showTableAll: () => void;
  showTableDone: () => void;
}
const TodoHeader = ({
  showTableDelete,
  showTableAll,
  showTableDone,
}: TodoHeaderProps) => {
  return (
    <div>
      <div className="flex text-black my-9 justify-center gap-32 ">
        <div className="btn-ghost ">
          <Link href={"/todos"} onClick={showTableDelete}>
            <MdPlaylistRemove size="35px" />
          </Link>
          <span>Deleted</span>
        </div>
        <div className="btn-ghost">
          <Link href="/todos" onClick={showTableAll}>
            <FaRegRectangleList size="35px" />
          </Link>
          <span>All</span>
        </div>
        <div className="btn-ghost">
          <Link href="/todos" onClick={showTableDone}>
            <AiOutlineFileDone size="35px" />
          </Link>
          <span>Done</span>
        </div>
      </div>
      <div className="overflow-x-auto justify-center">
        <table className="table">
          {/* head */}
          <thead className="text-lg">
            <tr>
              <th></th>
              <th className="inline-flex ml-28">Id</th>
              <th className="inline-flex ml-16">Name</th>
              <th className="inline-flex ml-80">Action</th>
            </tr>
          </thead>
        </table>
      </div>
    </div>
  );
};

export default TodoHeader;
