import * as React from "react";

function ServiceCards() {
  return (
    <div className="mt-12 w-full max-w-[1200px] m-auto max-md:max-w-full space-y-16 px-10">
      {/* First Service Section */}
      <div className="flex gap-5 max-md:flex-col max-md:gap-0 max-md:">
        <header className="flex flex-col w-full mb-10 md:mb-0 ">
          <div className="my-auto font-regular  text-zinc-800 max-md:max-w-full">
            <h1 className="text-4xl mb-4">Office Cleaning Services</h1>
            <div className="text-base  text-zinc-800 mb-6 text-justify">
              Maintaining a pristine and organized office environment is crucial
              for a productive workplace. Our office cleaning services encompass
              a comprehensive approach to cleanliness. Our dedicated team
              ensures thorough dusting and wiping of desks, chairs, and
              surfaces. We handle vacuuming and mopping of floors with
              precision, leaving your office space spotless. Trash removal and
              recycling are part of our routine, contributing to an eco-friendly
              workspace.
            </div>
            <ul className="list-none space-y-2 ml-6 text-gray-800">
              <li className="">
                <div className="flex items-center gap-3">
                  <img
                    loading="lazy"
                    src="/check.png"
                    className="my-auto aspect-[1] stroke-[2px] stroke-sky-600 w-[30px]"
                  />
                  <div className="self-end text-lg tracking-wide leading-7 text-zinc-800">
                    Dusting and wiping of desks, chairs, and surfaces.
                  </div>
                </div>
              </li>
              <li className="">
                <div className="flex items-center gap-3">
                  <img
                    loading="lazy"
                    src="/check.png"
                    className="my-auto aspect-[1] stroke-[2px] stroke-sky-600 w-[30px]"
                  />
                  <div className="self-end text-lg tracking-wide leading-7 text-zinc-800">
                    Dusting and wiping of desks, chairs, and surfaces.
                  </div>
                </div>
              </li>
              <li className="">
                <div className="flex items-center gap-3">
                  <img
                    loading="lazy"
                    src="/check.png"
                    className="my-auto aspect-[1] stroke-[2px] stroke-sky-600 w-[30px]"
                  />
                  <div className="self-end text-lg tracking-wide leading-7 text-zinc-800">
                    Dusting and wiping of desks, chairs, and surfaces.
                  </div>
                </div>
              </li>
              <li className="">
                <div className="flex items-center gap-3">
                  <img
                    loading="lazy"
                    src="/check.png"
                    className="my-auto aspect-[1] stroke-[2px] stroke-sky-600 w-[30px]"
                  />
                  <div className="self-end text-lg tracking-wide leading-7 text-zinc-800">
                    Dusting and wiping of desks, chairs, and surfaces.
                  </div>
                </div>
              </li>
            </ul>
          </div>
        </header>
        <div className="w-full overflow-hidden rounded-md h-full border">
          <img
            loading="lazy"
            src="https://images.pexels.com/photos/713297/pexels-photo-713297.jpeg?auto=compress&cs=tinysrgb&w=600"
            alt=""
            className="w-full h-full object-cover"
          />
        </div>
      </div>

      {/* Second Service Section */}
      <div className="flex flex-row-reverse gap-5 max-md:flex-col max-md:gap-0 max-md:">
        <header className="flex flex-col w-full mb-10 md:mb-0 ">
          <div className="my-auto font-regular  text-zinc-800 max-md:max-w-full">
            <h1 className="text-4xl mb-4">Commercial Carpet Cleaning</h1>
            <div className="text-base  text-zinc-800 mb-6 text-justify">
              Maintaining a pristine and organized office environment is crucial
              for a productive workplace. Our office cleaning services encompass
              a comprehensive approach to cleanliness. Our dedicated team
              ensures thorough dusting and wiping of desks, chairs, and
              surfaces. We handle vacuuming and mopping of floors with
              precision, leaving your office space spotless. Trash removal and
              recycling are part of our routine, contributing to an eco-friendly
              workspace.
            </div>
            <ul className="list-none space-y-2 ml-6 text-gray-800">
              <li className="">
                <div className="flex items-center gap-3">
                  <img
                    loading="lazy"
                    src="/check.png"
                    className="my-auto aspect-[1] stroke-[2px] stroke-sky-600 w-[30px]"
                  />
                  <div className="self-end text-lg tracking-wide leading-7 text-zinc-800">
                    Dusting and wiping of desks, chairs, and surfaces.
                  </div>
                </div>
              </li>
              <li className="">
                <div className="flex items-center gap-3">
                  <img
                    loading="lazy"
                    src="/check.png"
                    className="my-auto aspect-[1] stroke-[2px] stroke-sky-600 w-[30px]"
                  />
                  <div className="self-end text-lg tracking-wide leading-7 text-zinc-800">
                    Dusting and wiping of desks, chairs, and surfaces.
                  </div>
                </div>
              </li>
              <li className="">
                <div className="flex items-center gap-3">
                  <img
                    loading="lazy"
                    src="/check.png"
                    className="my-auto aspect-[1] stroke-[2px] stroke-sky-600 w-[30px]"
                  />
                  <div className="self-end text-lg tracking-wide leading-7 text-zinc-800">
                    Dusting and wiping of desks, chairs, and surfaces.
                  </div>
                </div>
              </li>
              <li className="">
                <div className="flex items-center gap-3">
                  <img
                    loading="lazy"
                    src="/check.png"
                    className="my-auto aspect-[1] stroke-[2px] stroke-sky-600 w-[30px]"
                  />
                  <div className="self-end text-lg tracking-wide leading-7 text-zinc-800">
                    Dusting and wiping of desks, chairs, and surfaces.
                  </div>
                </div>
              </li>
            </ul>
          </div>
        </header>
        <div className="w-full  overflow-hidden rounded-md h-[400px]">
          <img
            loading="lazy"
            src="https://images.pexels.com/photos/4107278/pexels-photo-4107278.jpeg?auto=compress&cs=tinysrgb&w=600"
            alt=""
            className="w-full h-full object-cover"
          />
        </div>
      </div>

      {/* Third Service Section */}
      <div className=" flex gap-5 max-md:flex-col max-md:gap-0 max-md:">
        <header className="flex flex-col w-full mb-10 md:mb-0">
          <div className="my-auto font-regular  text-zinc-800 max-md:max-w-full">
            <h1 className="text-4xl mb-4">Window Cleaning Services</h1>
            <div className="text-base  text-zinc-800  mb-6 text-justify">
              Maintaining a pristine and organized office environment is crucial
              for a productive workplace. Our office cleaning services encompass
              a comprehensive approach to cleanliness. Our dedicated team
              ensures thorough dusting and wiping of desks, chairs, and
              surfaces. We handle vacuuming and mopping of floors with
              precision, leaving your office space spotless. Trash removal and
              recycling are part of our routine, contributing to an eco-friendly
              workspace.
            </div>
            <ul className="list-none space-y-2 ml-6 text-gray-800">
              <li className="">
                <div className="flex items-center gap-3">
                  <img
                    loading="lazy"
                    src="/check.png"
                    className="my-auto aspect-[1] stroke-[2px] stroke-sky-600 w-[30px]"
                  />
                  <div className="self-end text-lg tracking-wide leading-7 text-zinc-800">
                    Dusting and wiping of desks, chairs, and surfaces.
                  </div>
                </div>
              </li>
              <li className="">
                <div className="flex items-center gap-3">
                  <img
                    loading="lazy"
                    src="/check.png"
                    className="my-auto aspect-[1] stroke-[2px] stroke-sky-600 w-[30px]"
                  />
                  <div className="self-end text-lg tracking-wide leading-7 text-zinc-800">
                    Dusting and wiping of desks, chairs, and surfaces.
                  </div>
                </div>
              </li>
              <li className="">
                <div className="flex items-center gap-3">
                  <img
                    loading="lazy"
                    src="/check.png"
                    className="my-auto aspect-[1] stroke-[2px] stroke-sky-600 w-[30px]"
                  />
                  <div className="self-end text-lg tracking-wide leading-7 text-zinc-800">
                    Dusting and wiping of desks, chairs, and surfaces.
                  </div>
                </div>
              </li>
              <li className="">
                <div className="flex items-center gap-3">
                  <img
                    loading="lazy"
                    src="/check.png"
                    className="my-auto aspect-[1] stroke-[2px] stroke-sky-600 w-[30px]"
                  />
                  <div className="self-end text-lg tracking-wide leading-7 text-zinc-800">
                    Dusting and wiping of desks, chairs, and surfaces.
                  </div>
                </div>
              </li>
            </ul>
          </div>
        </header>
        <div className="w-full  overflow-hidden rounded-md h-[400px]">
          <img
            loading="lazy"
            src="https://images.pexels.com/photos/6195953/pexels-photo-6195953.jpeg?auto=compress&cs=tinysrgb&w=600"
            alt=""
            className="w-full h-full object-cover"
          />
        </div>
      </div>
    </div>
  );
}

export default ServiceCards;
