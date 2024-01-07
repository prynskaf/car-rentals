import { UserButton } from "@clerk/nextjs";
import Image from "next/legacy/image";
import React from "react";

const Navbar = () => {
  return (
    <div className=" flex items-center justify-between p-3 shadow-sm border-b-[1px]">
      <Image src="/logo.png" alt="logo" width={100} height={100} />
      <div className=" hidden md:flex gap-5">
        <h2 className="hover:bg-blue-500 px-5 p-2 rounded-full cursor-pointer hover:text-white">
          Home
        </h2>
        <h2 className="hover:bg-blue-500 px-3 p-2 rounded-full cursor-pointer hover:text-white">
          History
        </h2>
        <h2 className="hover:bg-blue-500 px-3 p-2 rounded-full cursor-pointer hover:text-white">
          Contact us
        </h2>
      </div>
      <UserButton afterSignOutUrl="/" />
    </div>
  );
};

export default Navbar;
