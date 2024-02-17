"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";
import React, { useState } from "react";

import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";

const Navbar = () => {
  const [nav, setNav] = useState(false);

  const handleNav = () => {
    setNav(!nav);
  };
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
    <>
      <div className="w-full bg-slate-100 py-4 md:px-20 flex justify-between px-6 items-center z-100">
        <h1 className="text-4xl font-semibold text-sky-600">J CLEANING LLC</h1>
        <div className="hidden md:flex gap-5 justify-between items-center text-regular font-medium text-neutral-900">
          {links.map((link) => (
            <Link
              href={link.path}
              key={link.name}
              className={` ${
                link.path === paths
                  ? "py-2 px-4 rounded-xl font-semibold bg-sky-600 text-white"
                  : "hover:text-sky-600  "
              } `}
            >
              {link.name}
            </Link>
          ))}
        </div>

        <Sheet className="flex md:hidden ">
          <SheetTrigger asChild >
            <Button className="flex md:hidden"><AiOutlineMenu size={30}/></Button>
          </SheetTrigger>
          <SheetContent className="bg-slate-100" side = "left">
            {/* <SheetHeader>
              <SheetTitle>J CLEANING LLC</SheetTitle>
            </SheetHeader> */}
            <div className="grid gap-4 py-4">
              <div className="grid grid-cols-4 items-center gap-4"></div>
              <div className="flex flex-col  gap-8 text-lg font-medium text-neutral-900">
                {links.map((link) => (
                  <Link
                    href={link.path}
                    key={link.name}
                    className={` ${
                      link.path === paths
                        ? "py-6 px-4 rounded-xl text-lg font-semibold bg-sky-600 text-white"
                        : "hover:text-sky-600  "
                    } `}
                  >
                    {link.name}
                  </Link>
                ))}
              </div>
            </div>
          </SheetContent>
        </Sheet>
      </div>
    </>
  );
};

export default Navbar;
