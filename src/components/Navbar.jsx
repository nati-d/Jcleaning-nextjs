"use client"
import Link from "next/link";
import { usePathname } from "next/navigation";
import { AiOutlineClose, AiOutlineMenu } from 'react-icons/ai';
import React, {useState} from "react";

const Navbar = () => {
  const [nav, setNav] = useState(false);

  // Toggle function to handle the navbar's display
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

          <Link href={link.path} key={link.name} className={` ${link.path===paths ? 'py-2 px-4 rounded-xl font-semibold bg-sky-600 text-white' : 'hover:text-sky-600  '} `}  >
            {link.name}
          </Link>
        ))}
      </div>
    
  
        <div onClick={handleNav} className='block md:hidden'>
          {nav ? <AiOutlineClose size={30} /> : <AiOutlineMenu size={30} />}
        </div>
  
        <ul
          className={
            nav
              ? 'fixed md:hidden left-0 top-0 bottom-0 right-0 w-[80%] h-full border-r border-r-gray-900 bg-slate-100 ease-in-out duration-500'
              : 'ease-in-out w-[60%] duration-500 fixed top-0 bottom-0 left-[-100%]'
          }
        >
          <h1 className='w-full text-3xl font-bold text-sky-600 m-4'>J Cleaning LLC</h1>
  
          {links.map(link => (
            <li
            key={link.name}
              className='p-4 border-b  hover:bg-sky-600 duration-300 hover:text-white cursor-pointer border-sky-200'
            >
              <Link href={link.path}>{link.name}</Link>
              
            </li>
          ))}
        </ul>
        </div>
            </>
    );
   
};

export default Navbar;
