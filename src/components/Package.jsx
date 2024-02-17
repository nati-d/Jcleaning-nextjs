import React from "react";

const packages = [
  {
    price: "$99",
    name: "Regular",
    description: "Everything you need for your business identity",
    features: ["2 Bedrooms Cleaning", "Steam Service", "Window Cleaning", "1 Livingroom Cleaning"],
  },
  {
    price: "$199",
    name: "Deluxe",
    description: "Everything you need for your business identity",
    features: ["2 Bedrooms Cleaning", "Steam Service", "Window Cleaning", "2 Livingroom Cleaning"],
  },
  {
    price: "$299",
    name: "Superior",
    description: "Everything you need for your business identity",
    features: ["2 Bedrooms Cleaning", "Steam Service", "Window Cleaning", "3 Livingroom Cleaning"],
  },
];

function Package() {
  return (
    <>
      <div className="px-5 mt-32 w-full max-w-[1200px] m-auto ">
        <div className="flex gap-5 flex-col md:flex-row ">
          <div className="flex flex-col w-[56%] max-md:ml-0 max-md:w-full">
            <div className="text-center md:text-left text-6xl font-semibold text-gray-700 leading-[64px]  max-md:text-4xl max-md:leading-[52px]">
              Choose Your Best Service Package
            </div>
          </div>
          <div className="flex flex-col ml-5 w-[44%] max-md:ml-0 max-md:w-full">
            <div className="flex flex-col mt-5 tracking-wide ">
              <div className="text-3xl text-center md:text-left font-semibold text-orange-400 max-md:max-w-full">
                Pricing List
              </div>
              <div className="mt-4 text-lg text-center md:text-left leading-7 text-gray-600 max-md:max-w-full">
                Have many related needs, we present a suitable package for your needs
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="px-5 mt-24 w-full max-w-[1200px] m-auto ">
        <div className="flex gap-5 flex-wrap items-center justify-center ">
          {packages.map((pkg, index) => (
            <div key={index} className={`flex flex-col w-[70%]   md:w-[48%] lg:w-[32%] `}>
              <div className="flex flex-col grow py-12 pr-16 pl-8 mx-auto w-full text-xl border border-sky-600  font-light leading-8 text-gray-700 hover:bg-sky-200 rounded-[32px] max-md:px-5 max-md:mt-8">
                <div className="mt-2 text-gray-500">
                  <span className="text-6xl font-semibold text-cyan-600">{pkg.price}</span>
                  /Services
                </div>
                <div className="mt-9 text-2xl font-semibold">{pkg.name}</div>
                <div className="mt-6 leading-8 text-gray-600">{pkg.description}</div>
                {pkg.features.map((feature, fIndex) => (
                  <div key={fIndex} className="flex gap-4 justify-between mt-11 max-md:mt-10">
                    <div className="self-start w-2.5 h-2.5 bg-cyan-600 rounded-3xl" />
                    <div className="flex-auto">{feature}</div>
                  </div>
                ))}
                <button className="w-max m-auto  md:self-end md:px-8 py-5 mt-12 tracking-wide whitespace-nowrap bg-amber-400 rounded-3xl border-solid border-[1.5px] border-amber-400 border-opacity-40 text-neutral-950 max-md:px-5 max-md:mt-10">
                  Choose Package
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default Package;
