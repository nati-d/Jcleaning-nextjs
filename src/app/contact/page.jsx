import React from "react";

function Contact() {
  return (
    <div className="py-6 px-8 bg-white rounded-xl max-md:px-4 max-md:py-4">
      <div className="flex flex-col md:flex-row gap-8">
        <div className="flex flex-col w-full md:w-1/2">
          <div className="flex flex-col bg-slate-100 rounded-xl p-8">
            <h1 className="text-3xl font-semibold text-black mb-6">Contact Information</h1>
            <p className="text-lg text-black mb-8">Say something to start and let's chat!</p>
            
            <div className="flex items-center gap-5 text-base text-black">
              <img
                loading="lazy"
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/16efcee12261d35860456522f48970b4da39ef461d25553ee37bea2a565d1633?apiKey=2d54b9a4fac9494c8ef151df24863964&"
                className="w-6 h-6"
              />
              <span>+1012 3456 789</span>
            </div>

            <div className="flex items-center gap-5 mt-4 text-base text-black">
              <img
                loading="lazy"
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/f33a12af71453b99485ac9031fecc220eb9409e1999afd1ffbb8eef1e6b8f8f2?apiKey=2d54b9a4fac9494c8ef151df24863964&"
                className="w-6 h-6"
              />
              <span>demo@gmail.com</span>
            </div>

            <div className="flex items-center gap-5 mt-4 text-base text-black flex-wrap">
              <img
                loading="lazy"
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/0a95236edbb272ad63891b22868a195f09637d663fca1420ca3cc4475295718e?apiKey=2d54b9a4fac9494c8ef151df24863964&"
                className="w-6 h-6"
              />
              <span>7603 Finns lane Lanham MD 20706-1219  United States</span>
            </div>
          </div>
        </div>

        <div className="flex flex-col w-full md:w-1/2">
          <div className="flex flex-col font-medium mt-8 md:mt-0">
            <div className="flex flex-col md:flex-row gap-5 mb-6">
              <div className="flex flex-col flex-1">
                <label className="text-xs leading-5 text-neutral-400">First Name</label>
                <input type="text" className="border h-10 rounded-sm mt-3 px-3" placeholder="Abebe" />
              </div>

              <div className="flex flex-col flex-1">
                <label className="text-xs leading-5 text-neutral-400">Last Name</label>
                <input type="text" className="border h-10 rounded-sm mt-3 px-3" placeholder="Abebe" />
              </div>
            </div>

            <div className="flex flex-col md:flex-row gap-5 mb-6">
              <div className="flex flex-col flex-1">
                <label className="text-xs leading-5 text-neutral-400">Email</label>
                <input type="text" className="border h-10 rounded-sm mt-3 px-3" placeholder="example@gmail.com" />
              </div>

              <div className="flex flex-col flex-1">
                <label className="text-xs leading-5 text-neutral-400">Phone Number</label>
                <input type="text" className="border h-10 rounded-sm mt-3 px-3" placeholder="+123456789" />
              </div>
            </div>

            <div className="flex flex-col flex-1">
              <label className="text-xs leading-5 text-neutral-400">Message</label>
              <textarea className="h-40 border mt-3.5 text-sm leading-5 text-neutral-400 resize-none p-3" placeholder="Write your message..."></textarea>
            </div>


            <div className="justify-center self-end px-8 py-4 mt-6 text-base text-center text-black bg-amber-400 rounded-md shadow-sm cursor-pointer">
              Send Message
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;
