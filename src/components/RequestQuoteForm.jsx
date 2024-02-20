"use client";

import React from "react";
import { useFormik } from "formik";
import * as Yup from "yup";

function RequestQuoteForm() {
  const validationSchema = Yup.object().shape({
    name: Yup.string().required("Name is required"),
    email: Yup.string().email("Invalid email").required("Email is required"),
    phone: Yup.string().required("Phone Number is required"),
    date: Yup.date().required("Date is required"),
    message: Yup.string().required("Message is required"),
    selectedTime: Yup.string().required("Please select a time for service"),
    termsAndConditions: Yup.boolean().oneOf(
      [true],
      "Please accept the terms and conditions"
    ),
  });

  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      phone: "",
      date: "",
      message: "",
      selectedTime: "",
      termsAndConditions: false,
    },
    validationSchema: validationSchema,
    onSubmit: (values) => {
      console.log(values);
    },
  });

  return (
    <div className="max-w-[460px] py-6 px-8 text bg-white rounded-xl m-auto mt-10 border-2 border-gray-900">
      <h1 className="text-3xl w-full font-semibold  leading-7 text-black-400  text-center mb-10">
        Request Quote
      </h1>
      <form onSubmit={formik.handleSubmit}>
        <div className="flex flex-col w-full  ">
          <div className="flex flex-col font-medium mt-8 md:mt-0">
            <div className="flex flex-col  lg:gap-5 mb-6">
              <div className="flex flex-col flex-1">
                <label className="text-xs leading-5 text-black">
                  First Name
                </label>
                <input
                  type="text"
                  className={`border py-2 h-10 rounded-xl mt-3 px-3 focus:outline-none focus:ring-1 focus:ring-sky-600 ${
                    formik.touched.firstName && formik.errors.firstName
                      ? "border-red-500"
                      : ""
                  }`}
                  placeholder="Abebe"
                  name="firstName"
                  value={formik.values.firstName}
                  onChange={formik.handleChange}
                />
                {formik.touched.firstName && formik.errors.firstName ? (
                  <div className="text-red-500 text-xs mt-1">
                    {formik.errors.firstName}
                  </div>
                ) : null}
              </div>

              <div className="flex flex-col flex-1">
                <label className="text-xs leading-5 text-black">Email</label>
                <input
                  type="text"
                  className={`border py-2 h-10 rounded-xl mt-3 px-3 focus:outline-none focus:ring-1 focus:ring-sky-600 ${
                    formik.touched.email && formik.errors.email
                      ? "border-red-500"
                      : ""
                  }`}
                  placeholder="example@gmail.com"
                  name="email"
                  value={formik.values.email}
                  onChange={formik.handleChange}
                />
                {formik.touched.email && formik.errors.email ? (
                  <div className="text-red-500 text-xs mt-1">
                    {formik.errors.email}
                  </div>
                ) : null}
              </div>

              <div className="flex flex-col flex-1">
                <label className="text-xs leading-5 text-black">
                  Phone Number
                </label>
                <input
                  type="text"
                  className={`border h-10 py-2 rounded-xl mt-3 px-3 focus:outline-none focus:ring-1 focus:ring-sky-600 ${
                    formik.touched.phoneNumber && formik.errors.phoneNumber
                      ? "border-red-500"
                      : ""
                  }`}
                  placeholder="+123456789"
                  name="phoneNumber"
                  value={formik.values.phoneNumber}
                  onChange={formik.handleChange}
                />
                {formik.touched.phoneNumber && formik.errors.phoneNumber ? (
                  <div className="text-red-500 text-xs mt-1">
                    {formik.errors.phoneNumber}
                  </div>
                ) : null}
              </div>

              <div className="flex flex-col flex-1">
                <label className="text-xs leading-5 text-black">Message</label>
                <textarea
                  className={`h-40 border mt-3.5 text-sm leading-5 text-neutral-400 rounded-xl resize-vertical p-3 focus:outline-none focus:ring-1 focus:ring-sky-600 ${
                    formik.touched.message && formik.errors.message
                      ? "border-red-500"
                      : ""
                  }`}
                  placeholder="Write your message..."
                  name="message"
                  value={formik.values.message}
                  onChange={formik.handleChange}
                ></textarea>
                {formik.touched.message && formik.errors.message ? (
                  <div className="text-red-500 text-xs mt-1">
                    {formik.errors.message}
                  </div>
                ) : null}
              </div>

              <div className="flex flex-col">
                <label className="text-xs leading-5 text-black">
                  Select Good Times for Service
                </label>
                <div className="flex flex-col gap-2 mt-3.5">
                  <label classname="mr-4">
                    <input
                      type="radio"
                      name="selectedTime"
                      value="earlyMorning"
                      checked={formik.values.selectedTime === "earlyMorning"}
                      onChange={formik.handleChange}
                    />
                    Early Morning
                  </label>
                  <label classname="mr-4">
                    <input
                      type="radio"
                      name="selectedTime"
                      value="morning"
                      checked={formik.values.selectedTime === "morning"}
                      onChange={formik.handleChange}
                    />
                    Morning
                  </label>
                  <label classname="mr-4">
                    <input
                      type="radio"
                      name="selectedTime"
                      value="afternoon"
                      checked={formik.values.selectedTime === "afternoon"}
                      onChange={formik.handleChange}
                    />
                    Afternoon
                  </label>
                  <label classname="mr-4">
                    <input
                      type="radio"
                      name="selectedTime"
                      value="evening"
                      checked={formik.values.selectedTime === "evening"}
                      onChange={formik.handleChange}
                    />
                    Evening
                  </label>
                  <label classname="mr-4">
                    <input
                      type="radio"
                      name="selectedTime"
                      value="lateNight"
                      checked={formik.values.selectedTime === "lateNight"}
                      onChange={formik.handleChange}
                    />
                    Late Night
                  </label>
                </div>
                {formik.touched.selectedTime && formik.errors.selectedTime ? (
                  <div className="text-red-500 text-xs mt-1">
                    {formik.errors.selectedTime}
                  </div>
                ) : null}
              </div>

              <div className="flex items-center">
                <input
                  type="checkbox"
                  id="termsAndConditions"
                  name="termsAndConditions"
                  checked={formik.values.termsAndConditions}
                  onChange={formik.handleChange}
                />
                <label
                  htmlFor="termsAndConditions"
                  className="ml-2 text-sm text-black"
                >
                  I accept the terms and conditions
                </label>
              </div>
              {formik.touched.termsAndConditions &&
              formik.errors.termsAndConditions ? (
                <div className="text-red-500 text-xs mt-1">
                  {formik.errors.termsAndConditions}
                </div>
              ) : null}

              <button
                type="submit"
                className="justify-center  px-8 py-4 mt-6 text-base text-center text-white bg-amber-400 rounded-xl shadow-sm cursor-pointer"
              >
                Request a Quote
              </button>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
}

export default RequestQuoteForm;
