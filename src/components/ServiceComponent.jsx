import Image from "next/image";
import * as React from "react";

function ServiceComponent() {
  return (
    <div className="flex justify-center items-center self-stretch px-16 py-12 mt-32 w-full bg-slate-100 ">
      <div className="flex flex-col mt-20 mb-28 w-full max-w-[1194px] ">
        <div className="w-full">
          <div className="flex gap-5 flex-col lg:flex-row ">
            <div className="flex flex-col w-full lg:w-6/12 ">
              <div className="text-6xl text-center md:text-left font-semibold tracking-wide text-black leading-[64px] ">
                Always Provide The Best Service
              </div>
            </div>
            <div className="flex flex-col ml-5 w-full lg:w-6/12 ">
              <div className="flex flex-col grow self-stretch my-auto tracking-wide max-md:mt-10 ">
                <div className="text-3xl font-semibold leading-7 text-orange-400  text-center md:text-left">
                  Our Services
                </div>
                <div className="mt-8 text-xl leading-8 text-neutral-700  text-center md:text-left">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed
                  do eiusmod tempor incididunt ut labore{" "}
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="mx-9 mt-32 ">
          <div className="flex flex-col lg:flex-row gap-5 ">
            <div className="flex flex-col w-full lg:w-3/12 max-md:ml-0 max-md:w-full">
              <div className="flex flex-col grow tracking-wide max-md:mt-10 items-center justify-center">
                <Image
                  loading="lazy"
                  src="/Home.png"
                  className="self-center aspect-[0.96] w-[55px]"
                  width={55}
                  height={57} // Adjust the height according to your image aspect ratio
                  alt="House Cleaning"
                />
                <div className="mt-12 text-2xl font-semibold leading-6 whitespace-nowrap text-neutral-700 max-md:mt-10">
                  House Cleaning
                </div>
                <div className="mt-10 text-base leading-7 text-center text-neutral-700">
                  Make your product more eye-catching with a touch of
                  illustration
                </div>
              </div>
            </div>
            <div className="flex flex-col ml-5 w-full lg:w-3/12 max-md:ml-0 max-md:w-full">
              <div className="flex flex-col self-stretch my-auto tracking-wide max-md:mt-10 items-center justify-center">
                <Image
                  loading="lazy"
                  src="/Star.png"
                  className="self-center aspect-[1.05] w-[55px]"
                  width={55}
                  height={52} // Adjust the height according to your image aspect ratio
                  alt="Office Cleaning"
                />
                <div className="mt-12 text-2xl font-semibold leading-6 whitespace-nowrap text-neutral-700 max-md:mt-10">
                  Office Cleaning
                </div>
                <div className="mt-8 text-base leading-7 text-neutral-700 text-center">
                  Make your product more eye-catching with a touch of
                  illustration
                </div>
              </div>
            </div>
            <div className="flex flex-col ml-5 w-full lg:w-3/12 max-md:ml-0 max-md:w-full">
              <div className="flex flex-col self-stretch my-auto tracking-wide max-md:mt-10 items-center justify-center">
                <Image
                  loading="lazy"
                  src="/Send.png"
                  className="self-center aspect-[0.93] w-[51px]"
                  width={51}
                  height={55} // Adjust the height according to your image aspect ratio
                  alt="Toilet Cleaning"
                />

                <div className="mt-12 text-2xl font-semibold leading-6 whitespace-nowrap text-neutral-700 max-md:mt-10">
                  Toilet Cleaning
                </div>
                <div className="mt-8 text-base leading-7 text-neutral-700 text-center">
                  Make your product more eye-catching with a touch of
                  illustration
                </div>
              </div>
            </div>
            <div className="flex flex-col ml-5 w-full lg:w-3/12 max-md:ml-0 max-md:w-full">
              <div className="flex flex-col self-stretch my-auto tracking-wide max-md:mt-10 justify-center items-center">
                <Image
                  loading="lazy"
                  src="/Delete.png"
                  className="self-center aspect-square w-[55px]"
                  width={55}
                  height={55} 
                  alt="Window Cleaning"
                />
                <div className="mt-12 text-2xl font-semibold leading-6 whitespace-nowrap text-neutral-700 max-md:mt-10">
                  Window Cleaning
                </div>
                <div className="mt-8 text-base leading-7 text-neutral-700 text-center">
                  Make your product more eye-catching with a touch of
                  illustration
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ServiceComponent;
