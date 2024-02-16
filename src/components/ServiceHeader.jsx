"use client"
import { usePathname } from "next/navigation";
import React from "react";

function ServiceHeader() {
  const paths = usePathname();
  return (
    <div className="flex relative -z-20 items-center justify-center  px-20 h-[30vh] md:h-[50vh] lg:h-[70vh] w-full font-semibold text-white  max-md:px-5 max-md:max-w-full">
      <img
        loading="lazy"
        srcSet="https://images.pexels.com/photos/4239007/pexels-photo-4239007.jpeg?auto=compress&cs=tinysrgb&w=600"
        className="object-cover absolute inset-0 size-full"
      />

      <header
        className="relative py-20 text-8xl font-bold whitespace-nowrap max-md:mt-10 max-md:text-4xl"
        aria-label="About Us"
      >
        {paths === "/services" ? <h1>Our Services</h1> : <h1>About Us</h1>}
      </header>
    </div>
  );
}

export default ServiceHeader;
