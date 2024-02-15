import React from "react";
import { FaFacebook, FaTwitter, FaInstagram } from "react-icons/fa";

const Footer = () => {
  return (
    <div className="bg-slate-100 text-black pt-8 pb-4 mt-16">
      <div className="w-full max-w-screen-xl px-6 sm:px-10 mx-auto flex flex-col lg:flex-row justify-between items-center">
        <div className="flex flex-col items-center lg:items-start mb-6 lg:mb-0">
          <h1 className="text-3xl font-bold mb-2">J CLEANING LLC</h1>
          <div className="flex mt-2 mb-4 -mx-2">
            <div className="mx-2 bg-white rounded-full flex items-center justify-center p-2 shadow-md">
              <FaFacebook className="h-6 w-6 text-blue-500" />
            </div>
            <div className="mx-2 bg-white rounded-full flex items-center justify-center p-2 shadow-md">
              <FaTwitter className="h-6 w-6 text-blue-400" />
            </div>
            <div className="mx-2 bg-white rounded-full flex items-center justify-center p-2 shadow-md">
              <FaInstagram className="h-6 w-6 text-pink-500" />
            </div>
          </div>
          <p className="text-gray-400 text-center lg:text-left">
            ©{new Date().getFullYear()} - J CLEANING LLC. All rights reserved.
          </p>
        </div>
        <div className="flex flex-col mt-6 lg:mt-0">
          <p className="text-black mb-2 font-medium text-lg">Services</p>
          <ul className="text-gray-800">
            <li className="my-1 hover:text-blue-500 cursor-pointer transition-all">
              Office Cleaning
            </li>
            <li className="my-1 hover:text-blue-500 cursor-pointer transition-all">
              Industrial Cleaning
            </li>
            <li className="my-1 hover:text-blue-500 cursor-pointer transition-all">
              Carpet Cleaning
            </li>
            <li className="my-1 hover:text-blue-500 cursor-pointer transition-all">
              Deep Cleaning
            </li>
          </ul>
        </div>
        <div className="flex flex-col mt-6 lg:mt-0">
          <p className="text-black mb-2 font-medium text-lg">Connect with Us</p>
          <ul className="text-gray-800">
            <li className="my-1 hover:text-blue-500 cursor-pointer transition-all">
              About Us
            </li>
            <li className="my-1 hover:text-blue-500 cursor-pointer transition-all">
              Contact
            </li>
            <li className="my-1 hover:text-blue-500 cursor-pointer transition-all">
              Testimonials
            </li>
          </ul>
        </div>
        <div className="flex flex-col mt-6 lg:mt-0">
          <p className="text-black mb-2 font-medium text-lg">Get a Quote</p>
          <ul className="text-gray-800">
            <li className="my-1 hover:text-blue-500 cursor-pointer transition-all">
              Request a Quote
            </li>
            <li className="my-1 hover:text-blue-500 cursor-pointer transition-all">
              Customer Portal
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Footer;
