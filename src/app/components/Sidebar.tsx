"use client";
import Link from "next/link";
import React from "react";
import { FaUserCircle } from "react-icons/fa";
import { FaClipboardUser, FaUserGraduate } from "react-icons/fa6";
import { AiFillProject } from "react-icons/ai";
import clsx from "clsx";
import { usePathname } from "next/navigation";

const menus = [
  { href: "/profile", icon: <FaUserCircle />, text: "Profile" },
  {
    href: "/profile/education",
    icon: <FaUserGraduate />,
    text: "Education",
  },
  {
    href: "/profile/experience",
    icon: <FaClipboardUser />,
    text: "Experience",
  },
  { href: "/profile/project", icon: <AiFillProject />, text: "Project" },
];

const Sidebar = () => {
  const pathname = usePathname();
  return (
    <>
      {menus.map((menu, idx) => (
        <Link href={menu.href} key={idx}>
          <p className="flex flex-col items-center transition-all">
            <span
              className={clsx("lg:text-3xl text-xl text-blue-300", {
                "text-blue-600": pathname === menu.href,
              })}
            >
              {menu.icon}
            </span>
            <span
              className={clsx("text-xs transition-all", {
                "font-bold": pathname === menu.href,
              })}
            >
              {menu.text}
            </span>
          </p>
        </Link>
      ))}
    </>
  );
};

export default Sidebar;
