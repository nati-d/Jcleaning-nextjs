import * as React from "react";

function Package() {
  return (
    <>
      <div className="px-5 mt-32 w-full max-w-[1200px] m-auto  max-md:mt-10 max-md:max-w-full">
        <div className="flex gap-5 max-md:flex-col max-md:gap-0 max-md:">
          <div className="flex flex-col w-[56%] max-md:ml-0 max-md:w-full">
            <div className="text-6xl font-semibold text-gray-700 leading-[64px] max-md:mt-10 max-md:max-w-full max-md:text-4xl max-md:leading-[52px]">
              Choose Your Best Service Package{" "}
            </div>
          </div>
          <div className="flex flex-col ml-5 w-[44%] max-md:ml-0 max-md:w-full">
            <div className="flex flex-col mt-5 tracking-wide max-md:mt-10 max-md:max-w-full">
              <div className="text-3xl font-semibold text-orange-400 max-md:max-w-full">
                Pricing List
              </div>
              <div className="mt-4 text-lg leading-7 text-gray-600 max-md:max-w-full">
                Have many related needs, we present a suitable package for you
                needs
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="px-5 mt-24 w-full max-w-[1200px] m-auto max-md:mt-10 max-md:max-w-full">
        <div className="flex gap-5 max-md:flex-col max-md:gap-0 max-md:">
          <div className="flex flex-col w-[33%] max-md:ml-0 max-md:w-full">
            <div className="flex flex-col grow py-12 pr-16 pl-8 mx-auto w-full text-xl font-light leading-8 text-gray-700 hover:bg-sky-200 rounded-[32px] max-md:px-5 max-md:mt-8">
              <div className="mt-2 text-gray-500">
                <span className="text-6xl font-semibold text-cyan-600">
                  $99
                </span>
                /Services
              </div>
              <div className="mt-9 text-2xl font-semibold">Regular</div>
              <div className="mt-6 leading-8 text-gray-600">
                Everything you need for your business identity
              </div>
              <div className="flex gap-4 justify-between mt-11 max-md:mt-10">
                <div className="self-start w-2.5 h-2.5 bg-cyan-600 rounded-3xl" />
                <div className="flex-auto">2 Bedrooms Cleaning</div>
              </div>
              <div className="flex gap-4 justify-between mt-7">
                <div className="my-auto w-2.5 h-2.5 bg-cyan-600 rounded-3xl" />
                <div className="flex-auto">Steam Service</div>
              </div>
              <div className="flex gap-4 justify-between mt-8">
                <div className="self-start w-2.5 h-2.5 bg-cyan-600 rounded-3xl" />
                <div className="flex-auto">Window Cleaning</div>
              </div>
              <div className="flex gap-4 justify-between mt-7">
                <div className="self-start w-2.5 h-2.5 bg-cyan-600 rounded-3xl" />
                <div className="flex-auto">1 Livingroom Cleaning</div>
              </div>
              <button className="justify-center self-end px-8 py-5 mt-12 tracking-wide whitespace-nowrap bg-amber-400 rounded-3xl border-solid border-[1.5px] border-amber-400 border-opacity-40 text-neutral-950 max-md:px-5 max-md:mt-10">
                Choose Package
              </button>
            </div>
          </div>
          <div className="flex flex-col ml-5 w-[33%] max-md:ml-0 max-md:w-full">
            <div className="flex flex-col py-12 pr-16 pl-8 mx-auto w-full text-xl font-light leading-8 text-gray-700 hover:bg-sky-200 bg-neutral-50 rounded-[32px] max-md:px-5 max-md:mt-8">
              <div className="text-gray-500">
                <span className="text-6xl font-semibold text-cyan-600">
                  $199
                </span>
                /Services
              </div>
              <div className="mt-11 text-2xl font-semibold max-md:mt-10">
                Deluxe
              </div>
              <div className="mt-7 leading-8 text-gray-600">
                Everything you need for your business identity
              </div>
              <div className="flex gap-4 justify-between mt-11 max-md:mt-10">
                <div className="self-start w-2.5 h-2.5 bg-cyan-600 rounded-3xl" />
                <div className="flex-auto">2 Bedrooms Cleaning</div>
              </div>
              <div className="flex gap-4 justify-between mt-7">
                <div className="my-auto w-2.5 h-2.5 bg-cyan-600 rounded-3xl" />
                <div className="flex-auto">Steam Service</div>
              </div>
              <div className="flex gap-4 justify-between mt-8">
                <div className="self-start w-2.5 h-2.5 bg-cyan-600 rounded-3xl" />
                <div className="flex-auto">Window Cleaning</div>
              </div>
              <div className="flex gap-4 justify-between mt-7">
                <div className="self-start w-2.5 h-2.5 bg-cyan-600 rounded-3xl" />
                <div className="flex-auto">2 Livingroom Cleaning</div>
              </div>
              <button className="justify-center self-end px-8 py-5 mt-12 tracking-wide whitespace-nowrap bg-amber-400 rounded-3xl border-solid border-[1.5px] border-amber-400 border-opacity-40 text-neutral-950 max-md:px-5 max-md:mt-10">
                Choose Package
              </button>
            </div>
          </div>
          <div className="flex flex-col ml-5 w-[33%] max-md:ml-0 max-md:w-full">
            <div className="flex flex-col py-12 pr-16 pl-8 mx-auto w-full text-xl font-light leading-8 text-gray-700  hover:bg-sky-200  bg-neutral-50 rounded-[32px] max-md:px-5 max-md:mt-8">
              <div className="text-gray-500">
                <span className="text-6xl font-semibold text-cyan-600">
                  $299
                </span>
                /Services
              </div>
              <div className="mt-11 text-2xl font-semibold max-md:mt-10">
                Superior
              </div>
              <div className="mt-6 leading-8 text-gray-600">
                Everything you need for your business identity
              </div>
              <div className="flex gap-4 justify-between mt-11 max-md:mt-10">
                <div className="self-start w-2.5 h-2.5 bg-cyan-600 rounded-3xl" />
                <div className="flex-auto">2 Bedrooms Cleaning</div>
              </div>
              <div className="flex gap-4 justify-between mt-7">
                <div className="my-auto w-2.5 h-2.5 bg-cyan-600 rounded-3xl" />
                <div className="flex-auto">Steam Service</div>
              </div>
              <div className="flex gap-4 justify-between mt-8">
                <div className="self-start w-2.5 h-2.5 bg-cyan-600 rounded-3xl" />
                <div className="flex-auto">Window Cleaning</div>
              </div>
              <div className="flex gap-4 justify-between mt-7">
                <div className="self-start w-2.5 h-2.5 bg-cyan-600 rounded-3xl" />
                <div className="flex-auto">3 Livingroom Cleaning</div>
              </div>
              <button className="justify-center self-end px-8 py-5 mt-12 tracking-wide whitespace-nowrap bg-amber-400 rounded-3xl border-solid border-[1.5px] border-amber-400 border-opacity-40 text-neutral-950 max-md:px-5 max-md:mt-10">
                Choose Package
              </button>
            </div>
          </div>
        </div>
      </div>
      );
    </>
  );
}
export default Package;
