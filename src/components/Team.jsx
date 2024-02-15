import Image from "next/image";
import * as React from "react";

function Team() {
  return (
    <>
      <section className="flex gap-5 justify-between items-start px-5 mt-32 w-full max-w-[1200px] m-auto  max-md:flex-wrap max-md:mt-10 max-md:max-w-full">
        <header className="flex-auto text-5xl font-semibold tracking-wide leading-10 text-neutral-900 max-md:max-w-full max-md:text-4xl">
          Our Best Team Ever
        </header>
        <div className="flex flex-col flex-1 mt-1.5 text-base max-md:max-w-full">
          <div className="tracking-wide leading-7 text-gray-700 max-md:max-w-full">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore{" "}
          </div>
          <h2 className="mt-4 font-semibold tracking-wide text-sky-600 leading-[100%] max-md:max-w-full">
            Meet Our Professional Team
          </h2>
        </div>
      </section>
        <section className="w-full max-w-[1200px] h-max flex gap-4 m-auto mt-16 justify-around">
          <div>
            <Image
              src="https://images.pexels.com/photos/6196684/pexels-photo-6196684.jpeg?auto=compress&cs=tinysrgb&w=600"
              alt="team"
              height={400}
              width={400}
            />
          </div>
          <div>
            <Image
              src="https://images.pexels.com/photos/9462636/pexels-photo-9462636.jpeg?auto=compress&cs=tinysrgb&w=600"
              alt="team"
              height={400}
              width={400}
            />
          </div>
          <div>
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
