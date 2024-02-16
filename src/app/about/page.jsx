import ServiceHeader from "@/components/ServiceHeader";
import React from "react";

const AboutUsPage = () => {
  return (
    <>
      <ServiceHeader />
      <div className="flex flex-col gap-16 px-5 md:px-10">
        <div className="flex flex-col md:flex-row gap-5">
          <div className="bg-slate-100 w-full md:w-1/2 my-5 rounded-lg p-3 flex flex-col justify-between">
            <div>
              <p className=" text-xl font-semibold text-orange-400 mb-5">
                How it Started
              </p>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold mb-6">
                Our Dream is Global Cleaning Transformation
              </h1>
            </div>
            <p className="text-black text-base mb-10 text-justify md:text-left">
              Maintaining a pristine and organized office environment is crucial
              for a productive workplace. Our office cleaning services encompass
              a comprehensive approach to cleanliness. Our dedicated team
              ensures thorough dusting and wiping of desks, chairs, and
              surfaces. We handle vacuuming and mopping of floors with
              precision, leaving your office space spotless. Trash removal and
              recycling are part of our routine, contributing to an eco-friendly
              workspace.
            </p>
          </div>
          <div className="w-full md:w-1/2 flex flex-col items-center my-5">
            <img
              src="https://images.pexels.com/photos/13723036/pexels-photo-13723036.jpeg?auto=compress&cs=tinysrgb&w=600"
              alt=""
              className="w-full h-[400px] object-cover rounded-lg"
            />
            <div className="flex flex-wrap mt-5 space-y-5 bg-slate-100 w-full py-10 rounded-lg">
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
              Striving to be the foremost cleaning service provider, we
              envision a future where every home and business enjoys a
              pristine and healthy environment. Our commitment lies in setting
              industry standards, ensuring customer satisfaction, and
              contributing to a cleaner, greener world.
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
              At J Cleaning LLC, our mission is to provide
              unparalleled cleaning services tailored to the unique needs of
              our clients. We are dedicated to delivering meticulous and
              eco-friendly solutions, fostering a safe and hygienic space for
              our customers. Through continuous innovation, professional
              excellence, and a commitment to sustainability, we aim to exceed
              expectations and build lasting relationships with our valued
              clients.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default AboutUsPage;
