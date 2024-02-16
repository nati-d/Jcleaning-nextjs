import Image from "next/image";
import * as React from "react";

function Team() {
  return (
    <>
      <section className="flex flex-col lg:flex-row gap-5 justify-between items-start px-5 mt-32 w-full max-w-[1200px] m-auto  ">
        <header className="text-center w-full lg:w-1/2 lg:text-left text-5xl font-semibold tracking-wide leading-10 text-neutral-900 ">
          Our Best Team Ever
        </header>
        <div className="flex flex-col w-full lg:w-1/2 flex-1 mt-1.5 text-base ">
          <div className="tracking-wide leading-7 text-gray-700  text-center lg:text-left">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore{" "}
          </div>
          <h2 className="mt-4 font-semibold tracking-wide text-sky-600 leading-[100%]  text-center lg:text-left">
            Meet Our Professional Team
          </h2>
        </div>
      </section>
        <section className="w-full max-w-[1200px] h-max px-10 flex gap-4 m-auto mt-16 flex-col md:flex-row items-center justify-center md:justify-around">
          <div className="overflow-hidden rounded-md border">
            <Image
              src="https://images.pexels.com/photos/6196684/pexels-photo-6196684.jpeg?auto=compress&cs=tinysrgb&w=600"
              alt="team"
              height={400}
              width={400}
            />
          </div>
          <div className="overflow-hidden rounded-md">
            <Image
              src="https://images.pexels.com/photos/9462636/pexels-photo-9462636.jpeg?auto=compress&cs=tinysrgb&w=600"
              alt="team"
              height={400}
              width={400}
            />
          </div>
          <div className="overflow-hidden rounded-md">
            <Image
              src="https://images.pexels.com/photos/9462338/pexels-photo-9462338.jpeg?auto=compress&cs=tinysrgb&w=600"
              alt="team"
              height={400}
              width={400}
            />
          </div>
        </section>
    </>
  );
}

export default Team;
