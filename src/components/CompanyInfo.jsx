
import Image from "next/image";
import SEO from "./SEO";

const companyInfoSections = [
  {
    title: "We Are Very Experienced In Cleaning Services",
    content:
      "Our company places a high emphasis on customer satisfaction, employing various strategies, loyalty programs, and quality assessments to consistently meet our objectives.",
  },
  {
    title: "Our Commitment to Accountability",
    content:
      "Embracing a culture of ownership, we empower our team to take accountability and responsibility. This ensures that every task is approached with dedication and reliability.",
  },
  {
    title: "Building Lasting Connections",
    content:
      "It's a commitment. We forge strong connections with our customers and staff, fostering trust and long-term partnerships built on a foundation of dedication and mutual respect.",
  },
  {
    title: "Professionalism and Respect in Every Interaction",
    content:
      "In our workspace, respect and professionalism are not just values; they are woven into our daily interactions. From courteous behavior to a dedication to excellence, we create an environment that reflects our commitment to positivity and professionalism.",
  },
];

function CompanyInfo() {
  return (
    <div className="mt-10 md:mt-20 lg:mt-36 w-full m-auto px-4">
      <div className="flex gap-5 flex-col lg:flex-row">
        <div className="flex flex-col w-full lg:w-[50%] ">
          <Image
            loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/fc631ca236185a2502386c84cabe08423d6221c5c356b0a600f9910e6a246dc6?apiKey=2d54b9a4fac9494c8ef151df24863964&width=1200"
            alt="Company Image"
            className="grow mt-1.5 w-full aspect-[1.15] max-md:mt-9"
            width={1200}
            height={1035}
          />
        </div>
        <div className="flex flex-col w-full lg:w-[50%] ">
          <div className="flex flex-col grow">
            {companyInfoSections.map((section, index) => (
              <div key={index} className="flex flex-col pl-3.5 tracking-wide text-zinc-800">
                <SEO title = {section.title} description={section.description} url="https://jcleaning.netlify.app/"/>
                <h1 className="text-center lg:text-left text-4xl font-semibold leading-10">
                  {section.title}
                </h1>
                <div className="mt-8 text-lg text-left tracking-wide text-zinc-800">
                  {section.content}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default CompanyInfo;
