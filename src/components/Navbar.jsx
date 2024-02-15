"use client"
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

const Navbar = () => {
  const links = [
    {
      name: "Home",
      path: "/",
    },
    {
      name: "About",
      path: "/about",
    },
    {
      name: "Services",
      path: "/services",
    },
    {
      name: "Contact",
      path: "/contact",
    },
  ];
  const paths = usePathname();
  return (
    <div className="w-full bg-transparent py-4 md:px-20 flex justify-between items-center z-100">
      <h1 className="text-4xl font-semibold text-sky-600">J CLEANING LLC</h1>
      <div className="hidden md:flex gap-5 justify-between items-center text-regular font-medium text-neutral-900">
        {links.map((link) => (

          <Link href={link.path} key={link.name} className={` ${link.path===paths ? 'text-blue-500 font-semibold' : 'text-black hover:text-gray-400'} `}  >
            {link.name}
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Navbar;
