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
    image: "https://cdn.builder.io/api/v1/image/assets/TEMP/8984ec9593d117d6665124c86e0d9040189ec6b8ef7040fb6b94387fd77d7fb1?apiKey=2d54b9a4fac9494c8ef151df24863964&width=200",
    quote: "Increase product sales and increase the amount of cash that comes in for further development.",
  },
  {
    name: "Riana Madiva",
    role: "CEO Founder",
    image: "https://cdn.builder.io/api/v1/image/assets/TEMP/85bb4882d71a56534c12a8a6028507ef05f2b28f8bfb22bd1f571a527e0104b9?apiKey=2d54b9a4fac9494c8ef151df24863964&width=200",
    quote: "The increase in product sales is exponential and takes place gradually, it's really a very good job.",
  },
  {
    name: "John Melon",
    role: "Freelancer",
    image: "https://cdn.builder.io/api/v1/image/assets/TEMP/f312d135ab25e523541e1397e469c2b249e6fa2449a156d41c370463a682529d?apiKey=2d54b9a4fac9494c8ef151df24863964&width=200",
    quote: "As a business engaged in the field of digital artists and content creators, we are greatly helped.",
  },
];

function Testimonial() {
  return (
    <>
      <section className="px-5 mt-32 w-full max-w-[1200px] m-auto max-md:mt-10 max-md:max-w-full">
        <div className="flex gap-5 max-md:flex-col max-md:gap-0 max-md:">
          <div className="flex flex-col w-[56%] max-md:ml-0 max-md:w-full">
            <h1 className="text-6xl text-center md:text-left font-semibold text-gray-700 leading-[64px] max-md:mt-10 max-md:max-w-full max-md:text-4xl max-md:leading-[52px]">
              They Satisfied With Our Service
            </h1>
          </div>
          <div className="flex flex-col ml-5 w-[44%] max-md:ml-0 max-md:w-full">
            <div className="flex flex-col tracking-wide max-md:mt-10 max-md:max-w-full">
              <h2 className="text-3xl text-center md:text-left font-semibold text-orange-400 max-md:max-w-full">
                Testimonials
              </h2>
              <p className="mt-6 text-lg text-center md:text-left leading-7 text-gray-600 max-md:max-w-full">
                Have many related needs, we present a suitable package for your needs
              </p>
            </div>
          </div>
        </div>
      </section>
      <div className="px-20 mt-24 w-full max-w-[1200px] m-auto max-md:mt-10 max-md:max-w-full">
        <header className="flex gap-5 max-md:flex-col max-md:gap-0 max-md:">
          <Carousel>
            <CarouselContent className="w-full">
              {testimonials.map((testimonial, index) => (
                <CarouselItem key={index} className="sm:basis-full md:basis-1/2 lg:basis-1/3">
                  <section className="flex flex-col w-full max-md:ml-0 max-md:w-full">
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
        </header>
      </div>
    </>
  );
}

export default Testimonial;
