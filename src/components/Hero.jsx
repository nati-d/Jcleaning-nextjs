import * as React from "react";
import Image from "next/image";
import Link from "next/link";
import SEO from "./SEO";

function Hero() {
  return (
    <section className=" px-4 w-full bg-slate-100  ">
      <SEO
        title="PROFESSIONAL RESIDENTIAL AND COMMERCIAL CLEANNG SERVICES"
        description="We strive to protect the health and well-being of our clients,
        hold ourselves accountable, build trust and loyalty, and promote
        respect in order to provide exceptional workspaces that cater to
        your environmental needs, nurture your team, and drive your
        success."
        url="https://jcleaning.netlify.app/"
      />
      <header className="flex gap-5 flex-col lg:flex-row">
        <div className="flex flex-col w-full lg:w-[41%] ">
          <div className="flex flex-col items-center justify-center h-full mt-11 lg:mt-0 ">
            <div className="mt-8 text-center lg:text-left text-4xl font-semibold tracking-wide  text-neutral-900">
              <p className="text-center tracking-wider">PROFESSIONAL RESIDENTIAL AND COMMERCIAL CLEANNG SERVICES </p>
            </div>
            <div className="mt-9 text-justify md:text-left text-base tracking-wide leading-7 text-zinc-800 max-md:max-w-full">
              We strive to protect the health and well-being of our clients,
              hold ourselves accountable, build trust and loyalty, and promote
              respect in order to provide exceptional workspaces that cater to
              your environmental needs, nurture your team, and drive your
              success.
            </div>
            <div className="flex gap-5 justify-center lg:justify-start w-full items-center mt-9 mb-10 text-base ">
              <Link href="#requestForm">
                <button className="justify-center lg:justify-start items-center  px-16 py-7 font-semibold tracking-wide whitespace-nowrap bg-amber-400 leading-[100%] rounded-[30px] text-neutral-700 max-md:px-5">
                  Request a Quote
                </button>
              </Link>
            </div>
          </div>
        </div>
        <div className="hidden md:flex flex-col ml-5 w-full lg:w-[59%] ">
          <Image
            loading="lazy"
            src="/hero.webp"
            alt="Cleaning services"
            className="grow w-full rounded-none aspect-[0.97]"
            width={1600}
            height={1650}
          />
        </div>
      </header>
    </section>
  );
}

export default Hero;
