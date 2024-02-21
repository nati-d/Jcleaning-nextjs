"use client";
import Image from "next/image";
import { usePathname } from "next/navigation";
import React, { useState } from "react";

function ServiceHeader() {
  const paths = usePathname();
 
  let pageTitle;

  if (paths === "/services") {
    pageTitle = "Our Services";
  } else if (paths === "/about") {
    pageTitle = "About Us";
  } else if (paths ==="/contact") {
    pageTitle = "Contact Us";
  }

  return (
    <div className="w-full lg:max-w-[1500px] m-auto overflow-hidden flex relative -z-20 items-center justify-center px-20 h-[30vh] md:h-[50vh] lg:h-[70vh] font-semibold text-white max-md:px-5 max-md:max-w-full">
      <Image
        loading="lazy"
        src="/header.jpg"
        className="object-cover absolute inset-0 size-full"
        fill
      />

      <header
        className="relative py-20 text-8xl font-bold whitespace-nowrap max-md:mt-10 max-md:text-4xl"
        aria-label="About Us"
      >
        <h1>{pageTitle}</h1>
      </header>
    </div>
  );
}

export default ServiceHeader;
