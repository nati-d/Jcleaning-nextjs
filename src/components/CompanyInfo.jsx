import Image from "next/image";

function CompanyInfo() {
  return (
    <div className="mt-36 w-full px-10 max-w-[1199px] m-auto border">
      <div className="flex gap-5 flex-col lg:flex-row">
        <div className="flex flex-col w-full lg:w-[59%] ">
        <Image
            loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/fc631ca236185a2502386c84cabe08423d6221c5c356b0a600f9910e6a246dc6?apiKey=2d54b9a4fac9494c8ef151df24863964&width=1200"
            alt="Company Image"
            className="grow mt-1.5 w-full aspect-[1.15] max-md:mt-9 "
            width={1200}
            height={1035} 
          />
        </div>
        <div className="flex flex-col ml-5 w-full lg:w-[42%] ">
          <div className="flex flex-col grow ">
            <div className="flex flex-col pl-3.5 tracking-wide text-zinc-800 ">
              <h1 className="text-center lg:text-left text-4xl font-semibold leading-10 ">
                We Are Very Experienced In Cleaning Services
              </h1>
              <div className="mt-8 text-lg text-left tracking-wide leading-7 text-zinc-800 ">
                Lorem ipsum dolor sit amet, consectetur dipiscing elit eius mod
                tempor incididunt ut labore{" "}
              </div>
            </div>
            <div className="flex flex-col pr-14 pl-3.5 mt-9 max-md:pr-5 ">
              <div className="flex gap-5 justify-between text-2xl font-medium tracking-wide leading-6 text-zinc-800 max-md:flex-wrap ">
                <div className="flex-auto my-auto text-center md:text-left">We are Commited</div>
              </div>
              <div className="flex gap-3 ">
                <img
                  loading="lazy"
                  src="/check.png"
                  className="my-auto aspect-[1] stroke-[2px] stroke-sky-600 w-[30px]"
                />
                <div className="self-end mt-3.5 text-lg tracking-wide leading-7  text-zinc-800">
                  Lorem ipsum dolor sit amet, consectetur dipiscing elit eiusmod
                  tempor incididunt
                </div>
              </div>
            </div>
            <div className="flex flex-col pr-14 pl-3.5 mt-9 max-md:pr-5 ">
              <div className="flex gap-5 justify-between text-2xl font-medium tracking-wide leading-6 text-zinc-800 max-md:flex-wrap ">
                <div className="flex-auto my-auto text-center md:text-left">Trusted Professionals</div>
              </div>
              <div className="flex gap-3">
                <img
                  loading="lazy"
                  src="/check.png"
                  className="my-auto aspect-[1] stroke-[2px] stroke-sky-600 w-[30px]"
                />
                <div className="self-end mt-3.5 text-lg tracking-wide leading-7 text-zinc-800">
                  Lorem ipsum dolor sit amet, consectetur dipiscing elit eiusmod
                  tempor incididunt
                </div>
              </div>
            </div>
            <div className="flex gap-5 items-start self-start mt-3 ml-3.5 max-md:flex-wrap ">
              <div className="flex flex-col flex-1 mt-2">
                <div className="text-2xl font-medium tracking-wide leading-6 text-zinc-800 text-center md:text-left">
                  Highly Rated Cleaning
                </div>
                <div className="flex gap-3">
                  <img
                    loading="lazy"
                    src="/check.png"
                    className="my-auto aspect-[1] stroke-[2px] stroke-sky-600 w-[30px]"
                  />
                  <div className="self-end mt-3.5 text-lg tracking-wide leading-7 text-zinc-800">
                    Lorem ipsum dolor sit amet, consectetur dipiscing elit
                    eiusmod tempor incididunt
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CompanyInfo;
