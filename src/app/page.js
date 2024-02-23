import CompanyInfo from "@/components/CompanyInfo";
import Faq from "@/components/FAQ";
import Hero from "@/components/Hero";
import RequestQuoteForm from "@/components/RequestQuoteForm";
import SEO from "@/components/SEO";
import ServiceComponent from "@/components/ServiceComponent";
import Team from "@/components/Team";
import Testimonial from "@/components/Testimonials";
import WorkWithUs from "@/components/WorkWithUs";
import React from "react";

const page = () => {
  return (
    <div className="w-full lg:max-w-[1500px] m-auto overflow-hidden">
      {/* Seo Optimized */}
      <SEO
        title="J Cleaning Solutions - Expert Residential and Commercial Cleaning Services"
        description="Experience top-notch residential and commercial cleaning services with J Cleaning Solutions. Our mission is to deliver exceptional cleanliness, build lasting connections, and exceed your expectations."
        url="https://jcleaning.netlify.app/"
      />
      <Hero />
      <CompanyInfo />
      <ServiceComponent />
      <Team />
      {/* <Package/> */}
      <RequestQuoteForm />
      <Testimonial />
      <Faq/>
      <WorkWithUs />
    </div>
  );
};

export default page;
