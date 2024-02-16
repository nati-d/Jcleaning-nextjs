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
        dangerouslyAllowSVG
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
            Order Now
          </button>
          <img
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/514060022908b837eb343992a3a047e50a2a6ed6b859b7ebc38b6e93fab1e00c?apiKey=2d54b9a4fac9494c8ef151df24863964&"
                alt=""
            width={39}
            height={39}
            dangerouslyAllowSVG
          />
          <a
            href="#"
            className="tracking-wide leading-[175%] text-zinc-800"
            aria-label="Watch Demo"
            role="button"
          >
            Watch Demo
          </a>
        </div>
      </header>
    </div>
  );
}

export default WorkWithUs;
