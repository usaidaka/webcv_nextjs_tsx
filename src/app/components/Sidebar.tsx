import Link from "next/link";
import React from "react";
import { FaUserCircle } from "react-icons/fa";
import { FaClipboardUser } from "react-icons/fa6";

const Sidebar = () => {
  return (
    <>
      <Link href="/profile">
        <p className="flex flex-col items-center">
          <FaUserCircle className="text-blue-300 text-2xl" />
          <span className="text-xs">Profile</span>
        </p>
      </Link>
      <Link href="/profile/experience">
        <p className="flex flex-col items-center">
          <FaClipboardUser className="text-blue-300 text-2xl" />
          <span className="text-xs">Experience</span>
        </p>
      </Link>
    </>
  );
};

export default Sidebar;
