import Link from "next/link";
import React from "react";

const HeaderNav = () => {
  return (
    <div>
      <ul className="flex p-4 place-content-between font-bold h-15 bg-stone-900 text-white ">
        <li className="hover:text-yellow-400">
          <Link href={"/"}>Home</Link>
        </li>
        <li className="hover:text-yellow-400">
          <Link href={"/"}>Categories</Link>
        </li>
        <li className="hover:text-yellow-400">
          <Link href={"/"}>About</Link>
        </li>
        <li className="hover:text-yellow-400">
          <Link href={"/"}>Contact</Link>
        </li>
      </ul>
    </div>
  );
};

export default HeaderNav;
