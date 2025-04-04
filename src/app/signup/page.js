"use client";

import React, { useContext } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import Image from "next/image";
import { assets } from "@/assets/assets";
import { UserAuthContext } from "@/context/userContext.js";

const Signup = () => {
  const { fieldData, setFieldData, handleSubmit } = useContext(UserAuthContext);

  return (
    <div className="relative py-10 m-0">
      {/* <img
        className="absolute top-0 right-0 lg:w-[15%] md:w-[25%] sm:w-[25%] w-[33%]"
        src="public/rectangle.png"
        alt=""
      /> */}
      <div className=" flex w-full px-4 md:px-15 h-auto justify-center items-center">
        <motion.div
          className="absolute shape-mockup top-[15%] right-[12%] sm:right-[7%] jump d-lg-block"
          animate={{ y: [0, -40, 0] }} // Moves up and down
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
        >
          <Image
            src={assets.cherry_1}
            alt="shape"
            className="lg:w-[80px] md:w-[70px] sm:w-[60px] w-[60px]"
          />
        </motion.div>
        <div className="w-full h-auto flex justify-center py-5 md:py-0 bg-white rounded-4xl shadow-md">
          <div className="hidden lg:flex w-[50%] items-center">
            <Image src={assets.signup} alt="signupImage" className="w-[100%]" />
          </div>
          <div className="w-[90%] lg:w-[50%] flex flex-col items-center justify-center">
            <div className="w-full flex flex-col gap-2 justify-center items-center">
              <Image
                src={assets.logo}
                alt="Logo"
                className="w-[160px] mt-6 sm:mt-0 md:w-[200px] h-[100px]"
              />
              <h1 className="w-full px-1 font-[600] text-[28px] md:text-[40px] mb-3 lg:text-center text-left">
                Welcome to Sizzler
              </h1>
            </div>
            <form onSubmit={handleSubmit} className="lg:w-[70%] w-[100%]">
              <div className="flex flex-row w-full items-center justify-between gap-3 mb-3">
                <div className="flex w-[48%] gap-1 flex-col">
                  <label
                    className="text-base md:text-lg font-base text-[#4D5765]"
                    htmlFor="email"
                  >
                    Title
                  </label>
                  <div className="relative">
                    <select
                      name="title"
                      id="title"
                      value={fieldData.title}
                      onChange={(e) =>
                        setFieldData({ ...fieldData, title: e.target.value })
                      }
                      className="border border-gray-400 px-3 py-[5px] md:py-[10px] pr-10 rounded-md bg-[#f3f3f3] appearance-none w-full cursor-pointer"
                    >
                      <option value="" disabled>
                        Select
                      </option>
                      <option value="Mr.">Mr.</option>
                      <option value="Ms.">Ms.</option>
                      <option value="Mrs.">Mrs.</option>
                    </select>
                    {/* Custom dropdown arrow */}
                    <svg
                      className="absolute right-4 top-1/2 transform -translate-y-1/2 pointer-events-none"
                      width="12"
                      height="7"
                      viewBox="0 0 14 8"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M1 1L7 7L13 1"
                        stroke="black"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </div>
                </div>
                <div className="flex w-[48%] flex-col gap-1 relative">
                  <label
                    className="font-base text-[#4D5765] text-base md:text-lg"
                    htmlFor="password"
                  >
                    First name
                  </label>
                  <div>
                    <input
                      id="first_name"
                      name="first_name"
                      value={fieldData.firstname}
                      onChange={(e) =>
                        setFieldData({
                          ...fieldData,
                          firstname: e.target.value,
                        })
                      }
                      className="border border-gray-400 px-3 py-[5px] md:py-[10px] rounded-md bg-[#f3f3f3] w-full pr-10" // Added pr-10 for spacing
                      type="text"
                      placeholder="First name..."
                      required
                    />
                  </div>
                </div>
              </div>
              <div className="flex flex-row w-full items-center justify-between gap-3 mb-3">
                <div className="flex w-[48%] gap-1 flex-col">
                  <label
                    className="font-base text-[#4D5765] text-base md:text-lg"
                    htmlFor="email"
                  >
                    Middle name
                  </label>
                  <input
                    id="middle_name"
                    name="middle_name"
                    value={fieldData.middlename}
                    onChange={(e) =>
                      setFieldData({ ...fieldData, middlename: e.target.value })
                    }
                    className="border border-gray-400 px-3 py-[5px] md:py-[10px] rounded-md bg-[#f3f3f3]"
                    type="text"
                    placeholder="Middle name..."
                  />
                </div>
                <div className="flex w-[48%] flex-col gap-1 relative">
                  <label
                    className="font-base text-[#4D5765] text-base md:text-lg"
                    htmlFor="password"
                  >
                    Last name
                  </label>
                  <div>
                    <input
                      id="last_name"
                      name="last_name"
                      value={fieldData.lastname}
                      onChange={(e) =>
                        setFieldData({ ...fieldData, lastname: e.target.value })
                      }
                      className="border border-gray-400 px-3 py-[5px] md:py-[10px] rounded-md bg-[#f3f3f3] w-full pr-10" // Added pr-10 for spacing
                      type="text"
                      placeholder="Last name..."
                    />
                  </div>
                </div>
              </div>
              <div className="flex flex-row w-full items-center justify-between gap-3 mb-3">
                <div className="flex w-[48%] gap-1 flex-col">
                  <label
                    className="font-base text-[#4D5765] text-base md:text-lg"
                    htmlFor="email"
                  >
                    Contact number
                  </label>
                  <input
                    id="contact_no"
                    name="contact_no"
                    value={fieldData.contactno}
                    onChange={(e) =>
                      setFieldData({ ...fieldData, contactno: e.target.value })
                    }
                    className="border border-gray-400 px-3 py-[5px] md:py-[10px] rounded-md bg-[#f3f3f3] [&::-webkit-inner-spin-button]:appearance-none [&::-webkit-outer-spin-button]:appearance-none [&::-moz-appearance]:textfield"
                    type="number"
                    placeholder="Your number..."
                    required
                  />
                </div>
                <div className="flex w-[48%] flex-col gap-1 relative">
                  <label
                    className="font-base text-[#4D5765] text-base md:text-lg"
                    htmlFor="password"
                  >
                    Email
                  </label>
                  <div className="relative">
                    <input
                      id="email"
                      name="email"
                      value={fieldData.email}
                      onChange={(e) =>
                        setFieldData({ ...fieldData, email: e.target.value })
                      }
                      className="border border-gray-400 px-3 py-[5px] md:py-[10px] rounded-md bg-[#f3f3f3] w-full pr-10" // Added pr-10 for spacing
                      type="email"
                      placeholder="Your email..."
                    />
                  </div>
                </div>
              </div>
              <div className="flex flex-row w-full items-center justify-between gap-3">
                <div className="flex w-[48%] flex-col gap-1 relative">
                  <label
                    className="font-base text-[#4D5765] text-base md:text-lg"
                    htmlFor="password"
                  >
                    Password
                  </label>
                  <div className="relative">
                    <input
                      id="password"
                      name="password"
                      value={fieldData.password}
                      onChange={(e) =>
                        setFieldData({ ...fieldData, password: e.target.value })
                      }
                      className="border border-gray-400 px-3 py-[5px] lg:py-[10px] rounded-md bg-[#f3f3f3] w-full pr-10"
                      placeholder="Enter your password..."
                      required
                    />
                    <svg
                      className="absolute right-3 top-1/2 transform -translate-y-1/2 cursor-pointer"
                      width="18"
                      height="12"
                      viewBox="0 0 18 12"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M9 1.6C11.9286 1.6 14.5405 3.304 15.8155 6C14.5405 8.696 11.9286 10.4 9 10.4C6.07136 10.4 3.45955 8.696 2.18455 6C3.45955 3.304 6.07136 1.6 9 1.6ZM9 0C5.13636 0 1.83682 2.488 0.5 6C1.83682 9.512 5.13636 12 9 12C12.8636 12 16.1632 9.512 17.5 6C16.1632 2.488 12.8636 0 9 0ZM9 4C10.0664 4 10.9318 4.896 10.9318 6C10.9318 7.104 10.0664 8 9 8C7.93364 8 7.06818 7.104 7.06818 6C7.06818 4.896 7.93364 4 9 4ZM9 2.4C7.08364 2.4 5.52273 4.016 5.52273 6C5.52273 7.984 7.08364 9.6 9 9.6C10.9164 9.6 12.4773 7.984 12.4773 6C12.4773 4.016 10.9164 2.4 9 2.4Z"
                        fill="black"
                      />
                    </svg>
                  </div>
                </div>
                <div className="flex w-[48%] gap-1 flex-col">
                  <label
                    className="font-base text-[#4D5765] text-base md:text-lg"
                    htmlFor="email"
                  >
                    Date of birth
                  </label>
                  <input
                    id="dob"
                    name="dob"
                    value={fieldData.dob}
                    onChange={(e) =>
                      setFieldData({ ...fieldData, dob: e.target.value })
                    }
                    className="border border-gray-400 px-3 py-[5px] md:py-[10px] rounded-md bg-[#f3f3f3] cursor-pointer"
                    type="date"
                  />
                </div>
              </div>
              {/* {error && <p className="text-red-500 mt-3">{error}</p>} */}

              <div className="w-full flex justify-center mt-5">
                <button
                  type="submit"
                  className="font-medium flex justify-center text-white items-center gap-1 bg-[#DA0025] rounded-[50px] py-2 md:py-3 w-[100%] md:w-full hover:bg-black transition cursor-pointer"
                >
                  Sign Up
                </button>
              </div>
            </form>
            <div className="flex items-center w-[95%] lg:w-[65%] py-3 border-t-1 border-[#dddddd] mt-6 justify-between">
              <div>
                <p className="text-[#8f8f8f] text-sm md:text-base">
                  Already have a account?
                </p>
                <span className="font-medium text-xl md:text-2xl">Login</span>
              </div>
              <Link href="/login">
                <div className="rounded-[50px] cursor-pointer">
                  <svg
                    className="w-[41px] lg:w-[51px] h-[40px] lg:h-[50px]"
                    viewBox="0 0 51 50"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <rect
                      x="0.5"
                      width="50"
                      height="50"
                      rx="25"
                      fill="#FFD5DC"
                    />
                    <path
                      d="M34.2071 24.2929C34.5976 24.6834 34.5976 25.3166 34.2071 25.7071L27.8431 32.0711C27.4526 32.4616 26.8195 32.4616 26.4289 32.0711C26.0384 31.6805 26.0384 31.0474 26.4289 30.6569L32.0858 25L26.4289 19.3431C26.0384 18.9526 26.0384 18.3195 26.4289 17.9289C26.8195 17.5384 27.4526 17.5384 27.8431 17.9289L34.2071 24.2929ZM17.5 26C16.9477 26 16.5 25.5523 16.5 25C16.5 24.4477 16.9477 24 17.5 24V26ZM33.5 26H17.5V24H33.5V26Z"
                      fill="#DA0025"
                    />
                  </svg>
                </div>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Signup;
