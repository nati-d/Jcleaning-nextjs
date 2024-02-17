"use client"
import React from "react";
import { useFormik } from 'formik';
import * as Yup from 'yup';

function Contact() {
  const validationSchema = Yup.object().shape({
    firstName: Yup.string().required('First Name is required'),
    lastName: Yup.string().required('Last Name is required'),
    email: Yup.string().email('Invalid email').required('Email is required'),
    phoneNumber: Yup.string().required('Phone Number is required'),
    message: Yup.string().required('Message is required'),
  });

  const formik = useFormik({
    initialValues: {
      firstName: '',
      lastName: '',
      email: '',
      phoneNumber: '',
      message: '',
    },
    validationSchema: validationSchema,
    onSubmit: (values) => {
      console.log(values);
    },
  });

  return (
    <div className="w-full py-6 px-8 bg-white rounded-xl max-md:px-4 max-md:py-4">
      <form onSubmit={formik.handleSubmit}>
        <div className="flex flex-col lg:flex-row gap-8">
          <div className="flex flex-col w-full lg:w-1/2">
            <div className="flex flex-col bg-slate-100 rounded-xl p-8">
              <h1 className="text-3xl font-semibold text-black mb-6">Contact Information</h1>
              <p className="text-lg text-black mb-8">Say something to start and lets chat!</p>
              
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

          <div className="flex flex-col w-full lg:w-1/2">
            <div className="flex flex-col font-medium mt-8 md:mt-0">
              <div className="flex flex-col lg:flex-row lg:gap-5 mb-6">
                <div className="flex flex-col flex-1">
                  <label className="text-xs leading-5 text-black">First Name</label>
                  <input
                    type="text"
                    className={`border py-2 h-10 rounded-xl mt-3 px-3 focus:outline-none focus:ring-1 focus:ring-sky-600 ${formik.touched.firstName && formik.errors.firstName ? 'border-red-500' : ''}`}
                    placeholder="Abebe"
                    name="firstName"
                    value={formik.values.firstName}
                    onChange={formik.handleChange}
                  />
                  {formik.touched.firstName && formik.errors.firstName ? (
                    <div className="text-red-500 text-xs mt-1">{formik.errors.firstName}</div>
                  ) : null}
                </div>

                <div className="flex flex-col flex-1">
                  <label className="text-xs leading-5 text-black">Last Name</label>
                  <input
                    type="text"
                    className={`border py-2 h-10 rounded-xl mt-3 px-3 focus:outline-none focus:ring-1 focus:ring-sky-600 ${formik.touched.lastName && formik.errors.lastName ? 'border-red-500' : ''}`}
                    placeholder="Abebe"
                    name="lastName"
                    value={formik.values.lastName}
                    onChange={formik.handleChange}
                  />
                  {formik.touched.lastName && formik.errors.lastName ? (
                    <div className="text-red-500 text-xs mt-1">{formik.errors.lastName}</div>
                  ) : null}
                </div>
              </div>

              <div className="flex flex-col md:flex-row gap-5 mb-6">
                <div className="flex flex-col flex-1">
                  <label className="text-xs leading-5 text-black">Email</label>
                  <input
                    type="text"
                    className={`border py-2 h-10 rounded-xl mt-3 px-3 focus:outline-none focus:ring-1 focus:ring-sky-600 ${formik.touched.email && formik.errors.email ? 'border-red-500' : ''}`}
                    placeholder="example@gmail.com"
                    name="email"
                    value={formik.values.email}
                    onChange={formik.handleChange}
                  />
                  {formik.touched.email && formik.errors.email ? (
                    <div className="text-red-500 text-xs mt-1">{formik.errors.email}</div>
                  ) : null}
                </div>

                <div className="flex flex-col flex-1">
                  <label className="text-xs leading-5 text-black">Phone Number</label>
                  <input
                    type="text"
                    className={`border h-10 py-2 rounded-xl mt-3 px-3 focus:outline-none focus:ring-1 focus:ring-sky-600 ${formik.touched.phoneNumber && formik.errors.phoneNumber ? 'border-red-500' : ''}`}
                    placeholder="+123456789"
                    name="phoneNumber"
                    value={formik.values.phoneNumber}
                    onChange={formik.handleChange}
                  />
                  {formik.touched.phoneNumber && formik.errors.phoneNumber ? (
                    <div className="text-red-500 text-xs mt-1">{formik.errors.phoneNumber}</div>
                  ) : null}
                </div>
              </div>

              <div className="flex flex-col flex-1">
                <label className="text-xs leading-5 text-black">Message</label>
                <textarea
                  className={`h-40 border mt-3.5 text-sm leading-5 text-neutral-400 rounded-xl resize-vertical p-3 focus:outline-none focus:ring-1 focus:ring-sky-600 ${formik.touched.message && formik.errors.message ? 'border-red-500' : ''}`}
                  placeholder="Write your message..."
                  name="message"
                  value={formik.values.message}
                  onChange={formik.handleChange}
                ></textarea>
                {formik.touched.message && formik.errors.message ? (
                  <div className="text-red-500 text-xs mt-1">{formik.errors.message}</div>
                ) : null}
              </div>

              <button type="submit" className="justify-center self-end px-8 py-4 mt-6 text-base text-center text-white bg-amber-400 rounded-xl shadow-sm cursor-pointer">
                Send Message
              </button>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
}

export default Contact;
