import Image from "next/image";

function CompanyInfo() {
  return (
    <div className="mt-10 md:mt-20 lg:mt-36 w-full m-auto px-4   ">
      <div className="flex gap-5 flex-col lg:flex-row">
        <div className="flex flex-col w-full lg:w-[50%] ">
          <Image
            loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/fc631ca236185a2502386c84cabe08423d6221c5c356b0a600f9910e6a246dc6?apiKey=2d54b9a4fac9494c8ef151df24863964&width=1200"
            alt="Company Image"
            className="grow mt-1.5 w-full aspect-[1.15] max-md:mt-9 "
            width={1200}
            height={1035}
          />
        </div>
        <div className="flex flex-col w-full lg:w-[50%] ">
          <div className="flex flex-col grow ">
            <div className="flex flex-col pl-3.5 tracking-wide text-zinc-800 ">
              <h1 className="text-center lg:text-left text-4xl font-semibold leading-10 ">
                We Are Very Experienced In Cleaning Services
              </h1>
              <div className="mt-8 text-lg text-left tracking-wide  text-zinc-800 ">
                Our company places a high emphasis on customer satisfaction,
                employing various strategies, loyalty programs, and quality
                assessments to consistently meet our objectives.
              </div>
            </div>
            <div className="flex flex-col pr-14 pl-3.5 mt-9 max-md:pr-5 ">
              <div className="flex gap-5 justify-between text-2xl font-medium tracking-wide leading-6 text-zinc-800 max-md:flex-wrap ">
                <div className="flex-auto my-auto text-center md:text-left">
                  Our Commitment to Accountability
                </div>
              </div>
              <div className="flex gap-3 ">
                <img
                  loading="lazy"
                  src="/check.png"
                  className="my-auto aspect-[1] stroke-[2px] stroke-sky-600 w-[30px] hidden md:flex"
                />
                <div className="self-end mt-3.5 text-lg text-justify tracking-wide leading-7  text-zinc-800">
                  Embracing a culture of ownership, we empower our team to take
                  accountability and responsibility. This ensures that every
                  task is approached with dedication and reliability.
                </div>
              </div>
            </div>
            <div className="flex flex-col pr-14 pl-3.5 mt-9 max-md:pr-5 ">
              <div className="flex gap-5 justify-between text-2xl font-medium tracking-wide leading-6 text-zinc-800 max-md:flex-wrap ">
                <div className="flex-auto my-auto text-center md:text-left">
                  Building Lasting Connections
                </div>
              </div>
              <div className="flex md:gap-3">
                <img
                  loading="lazy"
                  src="/check.png"
                  className="my-auto aspect-[1] stroke-[2px] stroke-sky-600 w-[30px] hidden md:flex"
                />
                <div className="self-end mt-3.5 text-justify text-lg tracking-wide leading-7 text-zinc-800">
                  Its a commitment. We forge strong connections with our
                  customers and staff, fostering trust and long-term
                  partnerships built on a foundation of dedication and mutual
                  respect.
                </div>
              </div>
            </div>
            <div className="flex gap-5 items-start self-start mt-3 ml-3.5 max-md:flex-wrap ">
              <div className="flex flex-col flex-1 mt-2">
                <div className="text-2xl font-medium tracking-wide leading-6 text-zinc-800 text-center md:text-left">
                  Professionalism and Respect in Every Interaction
                </div>
                <div className="flex gap-3">
                  <img
                    loading="lazy"
                    src="/check.png"
                    className="my-auto aspect-[1] stroke-[2px] stroke-sky-600 w-[30px] hidden md:flex"
                  />
                  <div className="self-end mt-3.5 text-lg text-justify tracking-wide leading-7 text-zinc-800">
                    In our workspace, respect and professionalism are not just
                    values; they are woven into our daily interactions. From
                    courteous behavior to a dedication to excellence, we create
                    an environment that reflects our commitment to positivity
                    and professionalism.
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
