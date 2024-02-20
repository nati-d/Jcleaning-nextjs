import Image from "next/image";
import Link from "next/link";
import { FaInstagram, FaDribbble, FaTwitter, FaYoutube } from "react-icons/fa";

const Footer = () => {
  return (
    <div className="w-full px-6 lg:max-w-[1500px] m-auto overflow-hidden h-max mt-20 bg-slate-100 py-10 flex flex-col gap-10">
      <div className=" flex flex-col md:flex-row justify-between gap-10">
        <div className="flex flex-col justify-between gap-10 w-full md:w-1/3">
        <div>
          <Image src="/logo.jpg" width={150} height={150} alt=""/>
        </div>
          <div className="flex gap-5">
            <span>
              <FaInstagram size={30} />
            </span>
            <span>
              <FaDribbble size={30} />
            </span>
            <span>
              <FaTwitter size={30} />
            </span>
            <span>
              <FaYoutube size={30} />
            </span>
          </div>
        </div>

        {/* Section -2 */}
        <div className="flex flex-col md:flex-row justify-between w-full md:w-1/3 mt-5 md:mt-0 gap-10">
          <div className="flex flex-col gap-5">
            <h2 className="font-semibold text-xl">Customer Care</h2>
            <ul className="list-none space-y-2">
              <li>
                <Link href="/terms-of-service">Terms of Service</Link>
              </li>
              <li>
                <Link href="/faq">FAQ</Link>
              </li>
              <li>
                <Link href="/contact">Privacy Policy</Link>
              </li>
              <li>
                <Link href="/contact">Teams</Link>
              </li>
            </ul>
          </div>
          <div className="flex flex-col gap-5">
            <h2 className="font-semibold text-xl">Links</h2>
            <ul className="list-none space-y-2">
              <li>
                <Link href="/">Home</Link>
              </li>
              <li>
                <Link href="/services">Services</Link>
              </li>
              <li>
                <Link href="/about">About Us</Link>
              </li>
              <li>
                <Link href="/about">Testimonials</Link>
              </li>
              <li>
                <Link href="/about">Contact Us</Link>
              </li>
            </ul>
          </div>
          <div className="flex flex-col gap-5">
            <h2 className="font-semibold text-xl">Services</h2>
            <ul className="list-none space-y-2">
              <li>
                <Link href="/facebook">Home Cleaning</Link>
              </li>
              <li>
                <Link href="/instagram">Office Cleaning</Link>
              </li>
              <li>
                <Link href="/twitter">School Cleaning</Link>
              </li>
              <li>
                <Link href="/twitter">Sport Cleaning</Link>
              </li>
              <li>
                <Link href="/twitter">Deep Cleaning</Link>
              </li>
            </ul>
          </div>
        </div>
        {/* section -3 */}
        <div className="w-full flex justify-end md:w-1/3 mt-5 md:mt-0">
          <div className="flex flex-col gap-5">
            <h2 className="font-semibold text-xl">Contact Us</h2>
            <ul className="list-none space-y-2">
              <li>Email: info@jcleaningsolution.com</li>
              <li>Phone: +123 456 7890</li>
              <li>Address: 123 Cleaning Street, Cityville, State, 12345</li>
            </ul>
          </div>
        </div>

        {/* Copyright Section */}
      </div>
        <div className="w-full mt-8 text-center text-gray-500 text-sm">
        &copy; 2024 J Cleaning Solution. All rights reserved.
      </div>
    </div>
  );
};

export default Footer;
