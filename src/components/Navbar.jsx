"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";
import React, { useState } from "react";

import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetTrigger,
} from "@/components/ui/sheet";
import Image from "next/image";

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
      <div className="w-full lg:max-w-[1500px] m-auto bg-slate-100 py-4 px-4 flex justify-between items-center z-100">
        <div>
          <Image src="/logo.jpg" width={50} height={50} alt=""/>
        </div>
        <div className="hidden md:flex gap-5 justify-between items-center text-regular font-medium text-neutral-900">
          {links.map((link) => (
            <Link
              href={link.path}
              key={link.name}
              className={` ${
                link.path === paths
                  ? "py-2 px-4 font-semibold border-b-4 border-sky-600"
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
