import React from "react";
import {
  Bars3Icon,
  ChatBubbleOvalLeftEllipsisIcon,
} from "@heroicons/react/20/solid";

const Navbar = () => {
  return (
    <nav className="flex pt-1 md:pt-6 px-6  md:px-16 justify-between">
      <ul className="flex flex-col">
        <li>
          <img alt="logo" className="h-12 md:h-20" src="../logo.png" />
        </li>
        <li className="hidden md:block pt-1">
          <button
            onClick={() => window.scrollTo({ top: 1000, behavior: "smooth" })}
            type="button"
            className="nav-btn"
          >
            Projects
          </button>
        </li>
        <li className="hidden md:block">
          <button
            onClick={() => window.scrollTo({ top: 3050, behavior: "smooth" })}
            type="button"
            className="nav-btn"
          >
            About me
          </button>
        </li>
        <li className="hidden md:block">
          <button
            onClick={() => window.scrollTo({ top: 3050, behavior: "smooth" })}
            type="button"
            className="nav-btn"
          >
            My skills
          </button>
        </li>
      </ul>
      <div
        onClick={() => window.scrollTo({ top: 4000, behavior: "smooth" })}
        className="hidden md:flex h-10 group items-center space-x-4"
      >
        <button className=" text-sm ">Contact</button>
        <div className="bg-black group-hover:text-black text-white group-hover:bg-white transition-all cursor-pointer duration-300 rounded-full h-8 w-8 items-center justify-center flex">
          <ChatBubbleOvalLeftEllipsisIcon className="w-4 h-4" />
        </div>
      </div>
      <button className="md:hidden">
        <Bars3Icon className="h-7" />
      </button>
    </nav>
  );
};

export default Navbar;
