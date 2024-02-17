import * as React from "react";
import Navbar from "./Navbar";
import Image from "next/image";

function Hero() {
  return (
    <section className="self-stretch px-20 w-full bg-slate-100  ">
      <header className="flex gap-5 flex-col lg:flex-row">
        <div className="flex flex-col w-full lg:w-[41%] ">
          <div className="flex flex-col items-center mt-11 max-md:mt-10 max-md:max-w-full">
            <div className="flex gap-3.5 self-center lg:self-start mt-12  md:mt-22 lg:mt-40 text-base font-semibold tracking-wider leading-7 text-sky-600 whitespace-nowrap">
              <Image
                loading="lazy"
                src="/check-circle.png"
                alt="Company logo"
                className="aspect-square w-[18px]"
                width={18}
                height={18}
              />
              <div className="grow  ">ESTABLISHED SINCE 2000</div>
            </div>
            <div className="mt-8 text-center lg:text-left text-6xl font-semibold tracking-tighter leading-[65px] text-neutral-900 max-md:max-w-full max-md:text-4xl max-md:leading-[52px]">
              <p>A New Solutions For Your Home Cleaning</p>
            </div>
            <div className="mt-9 text-center md:text-left text-base tracking-wide leading-7 text-zinc-800 max-md:max-w-full">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore.
            </div>
            <div className="flex gap-5 justify-between items-center mt-9 mb-10 text-base max-md:flex-wrap max-md:max-w-full">
              <button className="grow justify-center items-center self-stretch px-16 py-7 font-semibold tracking-wide whitespace-nowrap bg-amber-400 leading-[100%] rounded-[30px] text-neutral-700 max-md:px-5">
                Request a Quote
              </button>
              <Image
                loading="lazy"
                src="/play.png"
                alt="Play video"
                className="self-stretch my-auto aspect-square w-[39px] max-sm:hidden"
                width={39}
                height={39}
              />
              <div className="flex-auto self-stretch my-auto tracking-wide leading-[175%] text-zinc-800">
                <a href="#" className="link">
                  Watch Demo
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-col ml-5 w-full lg:w-[59%] ">
          <Image
            loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/b756f6bad103c0755e363d790ba1ddaaffb93e342d99fe4721c070fd70ce4b1a?apiKey=2d54b9a4fac9494c8ef151df24863964&width=1600"
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
