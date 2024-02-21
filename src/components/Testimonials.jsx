import React from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

const testimonials = [
  {
    name: "Celine Dion",
    role: "Cafe Owner",
    image:
      "https://cdn.builder.io/api/v1/image/assets/TEMP/8984ec9593d117d6665124c86e0d9040189ec6b8ef7040fb6b94387fd77d7fb1?apiKey=2d54b9a4fac9494c8ef151df24863964&width=200",
    quote:
      "Increase product sales and increase the amount of cash that comes in for further development.",
  },
  {
    name: "Riana Madiva",
    role: "CEO Founder",
    image:
      "https://cdn.builder.io/api/v1/image/assets/TEMP/85bb4882d71a56534c12a8a6028507ef05f2b28f8bfb22bd1f571a527e0104b9?apiKey=2d54b9a4fac9494c8ef151df24863964&width=200",
    quote:
      "The increase in product sales is exponential and takes place gradually, it's really a very good job.",
  },
  {
    name: "John Melon",
    role: "Freelancer",
    image:
      "https://cdn.builder.io/api/v1/image/assets/TEMP/f312d135ab25e523541e1397e469c2b249e6fa2449a156d41c370463a682529d?apiKey=2d54b9a4fac9494c8ef151df24863964&width=200",
    quote:
      "As a business engaged in the field of digital artists and content creators, we are greatly helped.",
  },
];

function Testimonial() {
  return (
    <>
      <section className="px-4 mt-10 md:mt-20 lg:mt-32 w-full m-auto">
        <div className="flex gap-5 flex-col md:flex-row  ">
          <div className="flex flex-col w-full lg:w-[56%] ">
            <h1 className="text-4xl lg:text-6xl text-center md:text-left font-semibold text-gray-700 ">
              They Satisfied With Our Service
            </h1>
          </div>
          <div className="flex flex-col  w-full lg:w-[44%] ">
            <div className="flex flex-col tracking-wide ">
              <h2 className="text-3xl text-center md:text-left font-semibold text-orange-400 ">
                Testimonials
              </h2>
              <p className="mt-6 text-lg text-center md:text-left leading-7 text-gray-600 ">
                Have many related needs, we present a suitable package for your
                needs
              </p>
            </div>
          </div>
        </div>
      </section>
      <div className="mt-10 md:mt-16 lg:mt-24 w-full mx-auto ">
        <div className="flex gap-5 ">
          <Carousel>
            <CarouselContent className="">
              {testimonials.map((testimonial, index) => (
                <CarouselItem
                  key={index}
                  className="sm:basis-full md:basis-1/2 lg:basis-1/3"
                >
                  <SEO
                    title={testimonial.role}
                    description={testimonial.quote}
                    url="https://jcleaning.netlify.app/"
                  />

                  <section className="flex flex-col w-full ">
                    <div className="flex flex-col grow px-8 py-10 mx-auto w-full bg-slate-100 rounded-[32px] max-md:px-5 max-md:mt-8">
                      <div className="flex gap-3 justify-between">
                        <img
                          loading="lazy"
                          src={testimonial.image}
                          alt={`${testimonial.name}'s image`}
                          className="aspect-square w-[72px]"
                        />
                        <div className="flex flex-col flex-1 my-auto">
                          <div className="text-xl font-semibold text-gray-700">
                            {testimonial.name}
                          </div>
                          <div className="mt-5 text-base text-gray-500 whitespace-nowrap">
                            {testimonial.role}
                          </div>
                        </div>
                      </div>

                      <div className="mt-6 text-lg italic font-light leading-8 text-gray-600">
                        {testimonial.quote}
                      </div>
                    </div>
                  </section>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious />
            <CarouselNext />
          </Carousel>
        </div>
      </div>
    </>
  );
}

export default Testimonial;
