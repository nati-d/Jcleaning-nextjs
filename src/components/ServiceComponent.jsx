import Image from "next/image";
import * as React from "react";


const services = [
  {
    imageSrc: "/Home.png",
    alt: "House Cleaning",
    title: "Basic House Cleaning",
    description: "Offering thorough house cleaning services for all areas, including kitchen, lounge, bathroom, and bedroom.",
  },
  {
    imageSrc: "/Star.png",
    alt: "Office Cleaning",
    title: "Deep Cleaning",
    description: "A comprehensive deep clean surpassing basic services, including handwashing cabinets, vacuuming upholstery, polishing wood, cleaning the oven, ceiling fan blades, and more.",
  },
  {
    imageSrc: "/Send.png",
    alt: "Toilet Cleaning",
    title: "Sanitization Services",
    description: "Squeaky Clean House excels in meeting the increased demand for thorough sanitization in homes and offices, ensuring a safe and healthy environment with specialized cleaning services.",
  },
  {
    imageSrc: "/Delete.png",
    alt: "Window Cleaning",
    title: "School Cleaning",
    description: "Cleaning services offered to private and public schools, including cleaning floors, classrooms, desks, tables, and bathrooms.",
  },
];

function ServiceComponent() {
  return (
    <div className="flex justify-center items-center self-stretch px-16 py-12 mt-32 w-full bg-slate-100 ">
      <div className="flex flex-col mt-20 mb-28 w-full  ">
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
        <div className="mx-9 lg:mx-0 mt-32 ">
          <div className="flex flex-col flex-wrap lg:flex-row">
            {services.map((service, index) => (
              <div key={index} className="flex py-5 flex-col w-full lg:w-1/4 hover:bg-sky-200 rounded-xl p-5">
                <div className="flex flex-col grow tracking-wide max-md:mt-10 items-center ">
                  <Image
                    loading="lazy"
                    src={service.imageSrc}
                    className="self-center aspect-[0.96] w-[55px]"
                    width={55}
                    height={57}
                    alt={service.alt}
                  />
                  <div className="mt-12 text-2xl font-semibold leading-6 text-center text-neutral-700 max-md:mt-10">
                    {service.title}
                  </div>
                  <div className="mt-10 text-base leading-7 text-center  text-neutral-700">
                    {service.description}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default ServiceComponent;