import SEO from "@/components/SEO";
import ServiceHeader from "@/components/ServiceHeader";
import React from "react";

const AboutUsPage = () => {
  return (
    <>
      <SEO
        title="About J Cleaning Solutions"
        description="Learn about our mission, vision, and commitment to delivering exceptional residential and commercial cleaning services."
        url="https://jcleaning.netlify.app/about"
      />
      <ServiceHeader />
      <div className="flex w-full lg:max-w-[1500px] m-auto overflow-hidden flex-col gap-16 px-5 md:px-10">
        <div className="flex flex-col lg:flex-row gap-5">
          <div className="bg-slate-100 w-full lg:w-1/2 my-5 rounded-xl p-3 flex flex-col justify-between">
            <div>
              <p className=" text-xl font-semibold text-orange-400 mb-5">
                How it Started
              </p>
              <h1 className="text-4xl md:text-5xl text-center md:text-left lg:text-6xl font-extrabold mb-6">
                Our Dream is Global Cleaning Transformation
              </h1>
            </div>
            <p className="text-black  text-base mb-10 text-justify ">
              Customer satisfaction stands as a central pillar of their mission,
              underscoring their commitment to excellence in residential and
              commercial cleaning services. They actively deploy customer
              service strategies, aiming to establish enduring connections with
              their clientele. By instituting innovative loyalty programs and
              conducting frequent quality assessments, their goal is to surpass
              expectations and achieve customer-centric objectives, ensuring a
              gratifying experience for all. In the realm of residential and
              commercial cleaning services, their distinct approach revolves
              around prioritizing customer satisfaction as a cornerstone
              objective. Through the thoughtful application of customer service
              strategies, the team endeavors to build and strengthen connections
              with clients. Loyalty programs and rigorous quality assessments
              are integral components of their commitment to surpassing
              expectations, ensuring a tailored and exceptional experience for
              each residential and commercial client.
            </p>
          </div>
          <div className="w-full lg:w-1/2 flex flex-col items-center my-5">
            <img
              src="https://images.pexels.com/photos/13723036/pexels-photo-13723036.jpeg?auto=compress&cs=tinysrgb&w=600"
              alt=""
              className="w-full h-[400px] object-cover rounded-xl"
            />
            <div className="flex flex-wrap mt-5 space-y-5 bg-slate-100 w-full py-10 rounded-xl">
              <div className="w-1/2 flex flex-col items-center justify-center">
                <h1 className="text-4xl font-bold">2</h1>
                <p className="text-sm text-gray-400 mt-2">
                  Years of Experience
                </p>
              </div>
              <div className="w-1/2 flex flex-col items-center justify-center">
                <h1 className="text-4xl font-bold">23</h1>
                <p className="text-sm text-gray-400 mt-2">Projects</p>
              </div>
              <div className="w-1/2 flex flex-col items-center justify-center">
                <h1 className="text-4xl font-bold">3+</h1>
                <p className="text-sm text-gray-400 mt-2">Cities</p>
              </div>
              <div className="w-1/2 flex flex-col items-center justify-center">
                <h1 className="text-4xl font-bold">15+</h1>
                <p className="text-sm text-gray-400 mt-2">Clients</p>
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-col md:flex-row gap-5">
          <div className="w-full md:w-1/2">
            <div>
              <p className="text-xl font-semibold text-orange-400 mb-5">
                Our Vision
              </p>
              <h1 className="text-2xl md:text-4xl font-extrabold">
                Pioneering a future where cleanliness matters
              </h1>
            </div>
            <p className="text-black text-base mb-10 mt-5 text-justify md:text-left">
              Our mission is to be a leading provider of residential and
              commercial cleaning services, placing customer satisfaction at the
              forefront of our endeavors. We are committed to delivering
              excellence through innovative cleaning solutions, customer-centric
              strategies, and unwavering dedication to quality. Our goal is to
              establish lasting connections with our clientele, creating a clean
              and welcoming environment that exceeds expectations.
            </p>
          </div>
          <div className="w-full md:w-1/2">
            <div>
              <p className="text-xl font-semibold text-orange-400 mb-5">
                Our Mission
              </p>
              <h1 className="text-2xl md:text-4xl font-extrabold">
                Delivering impeccable cleanliness
              </h1>
            </div>
            <p className="text-black text-base mb-10 mt-5 text-justify md:text-left">
              At J Cleaning Solutions, our mission is to provide unparalleled
              cleaning services tailored to the unique needs of our clients. We
              are dedicated to delivering meticulous and eco-friendly solutions,
              fostering a safe and hygienic space for our customers. Through
              continuous innovation, professional excellence, and a commitment
              to sustainability, we aim to exceed expectations and build lasting
              relationships with our valued clients.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default AboutUsPage;
