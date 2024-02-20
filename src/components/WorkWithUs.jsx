import * as React from "react";
import Image from "next/image";

function WorkWithUs() {
  return (
    <div className="flex overflow-hidden relative flex-col justify-center items-start self-stretch md:px-16 py-12 mt-32 w-full min-h-[460px] max-md:px-5 max-md:mt-10 max-md:max-w-full">
      <Image
        src="/vector.svg"
        alt=""
        layout="fill"
        objectFit="cover"
        loading="lazy"
      />
      <header className="flex relative flex-col mt-16 mb-12 md:ml-14 max-w-full w-full lg:w-1/2 max-md:my-10">
        <h1 className="text-6xl font-bold text-center md:text-left tracking-wide text-gray-700 leading-[64px] max-md:max-w-full max-md:text-4xl max-md:leading-[52px]">
          Are You Ready To Work With Us Now?
        </h1>
        <p className="mt-16 text-center md:text-left text-lg leading-7 text-gray-600 max-md:mt-10 max-md:max-w-full">
          What do you think after seeing the good response from our previous
          customers
        </p>
        <div className="flex gap-5 justify-between m-auto md:mx-0 w-1/2  items-center mt-12 text-base ">
          <button
            className="grow justify-center items-center px-16 py-7 font-semibold tracking-wide whitespace-nowrap bg-amber-400 leading-[100%] rounded-[30px] text-neutral-700 max-md:px-5"
            role="button"
          >
            Request a Quote
          </button>
        </div>
      </header>
    </div>
  );
}

export default WorkWithUs;
