import Link from "next/link";
import {
  FaInstagram,
  FaDribbble,
  FaXTwitter,
  FaYoutube,
} from "react-icons/fa6";

const Footer = () => {
  const socialLinks = [
    { label: "YouTube", icon: FaYoutube },
    { label: "Instagram", icon: FaInstagram },
    { label: "Twitter", icon: FaXTwitter },
    { label: "Dribbble", icon: FaDribbble },
  ];

  const links = [
    [
      { label: "Company", key: "header-1",path:'/' },
      { label: "Home", path: "/" },
      { label: "Contact Us", path: "/contact" },
      { label: "Services", path: "/services" },
      { label: "About Us", path: "/about" },
    ],
    [
      { label: "Support", key: "header-2",path:'/' },
      { label: "Help center", path: "/" },
      { label: "Terms of service", path: "/" },
      { label: "Legal", path: "item-2-3" },
      { label: "Privacy policy", path: "/" },
      { label: "Status", path: "/" },
    ],
  ];

  return (
    <div className="app h-max mt-20 border  flex items-end justify-center font-poppins">
      <div className="py-28 grid lg:grid-cols-3 gap-20 md:grid-cols-2 sm:grid-cols-2 grid-cols-1 px-10 bg-slate-100 text-black w-full p-4 relative">
        <div className=" space-y-5  ">
          <div className="flex items-center justify-start flex-col">
            <span className="text-3xl self-start font-bold  text-black">
              J CLEANING LLC
            </span>
            <p className="mt-4">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
              eiusmod tempor incididunt ut labore
            </p>
          </div>
          <div className="infos text-gray-700">
            <span>Copyright © 2020 J CLEANING LLC.</span>
            <span>All rights reserved</span>
          </div>
        </div>
        <div className="mx-2 grid w-full py-5 sm:py-0 grid-cols-2 ">
          {links.map((col, index) => {
            return (
              <ul key={index}>
                {col.map((link, index) => {
                  return (
                    <li
                      key={link.label}
                      className={`text-gray-700 cursor-pointer ${
                        link.key === "header-1" || link.key === "header-2"
                          ? "text-2xl text-black"
                          : ""
                      }`}
                    >
                      <Link href={link.path}>{link.label}</Link>
                    </li>
                  );
                })}
              </ul>
            );
          })}
        </div>
        <div className="flex flex-col">
          <h2 className="text-2xl text-black">Connect Us:</h2>
          <div className="footer-icons flex items-center space-x-3">
            {socialLinks.map((socialLink, index) => {
              const Icon = socialLink.icon;
              return (
                <Icon
                  key={`social-${index}`}
                  className="w-14 h-14 p-2 rounded-full bg-slate-100 hover:bg-white hover:text-sky-700 cursor-pointer"
                />
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
