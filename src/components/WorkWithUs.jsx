import * as React from "react";
import Image from "next/image";
import Link from "next/link";

function WorkWithUs() {
  return (
    <div className="flex overflow-hidden relative flex-col justify-center items-start self-stretch px-4 py-12 mt-10 md:mt-20 lg:mt-32 w-full min-h-[460px] ">
      <Image
        src="/vector.svg"
        alt=""
        layout="fill"
        objectFit="cover"
        loading="lazy"
      />
      <header className="flex relative flex-col mt-16 mb-12 md:ml-14 max-w-full w-full lg:w-1/2 max-md:my-10">
        <h1 className="text-4xl lg:text-6xl font-bold text-center md:text-left tracking-wide text-gray-700 ">
          Are You Ready To Work With Us Now?
        </h1>
        <p className="mt-16 text-center md:text-left text-lg leading-7 text-gray-600 ">
          What do you think after seeing the good response from our previous
          customers
        </p>
        <div className="flex justify-center w-full m-auto md:mx-0 md:w-1/2  items-center mt-12 text-base ">
          <Link href="#requestForm">
            <button
              className="justify-center items-center px-16 py-7 font-semibold tracking-wide whitespace-nowrap bg-amber-400 leading-[100%] rounded-[30px] text-neutral-700 "
              role="button"
            >
              Request a Quote
            </button>
          </Link>
        </div>
      </header>
    </div>
  );
}

export default WorkWithUs;
