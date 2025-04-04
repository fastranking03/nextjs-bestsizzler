"use client"

import Link from "next/link";
import React, { useState } from "react";


const Address = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <div className="flex flex-col px-4 lg:flex-row md:flex-row sm:flex-col justify-center items-center w-full h-auto py-14 relative">
        <div className="flex flex-col justify-left h-[80%] lx:w-[1280px] lg:w-[1080px] md:w-[786px] sm:w-[600px]">
          <div className="mb-2 mx-4">
            <button className="rounded-4xl bg-white p-2 border-1 border-white hover:border-1 hover:border-gray-600 cursor-pointer">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="30"
                height="30"
                viewBox="0 0 24 24"
              >
                <path
                  fill="#000"
                  d="m4 10l-.707.707L2.586 10l.707-.707zm17 8a1 1 0 1 1-2 0zM8.293 15.707l-5-5l1.414-1.414l5 5zm-5-6.414l5-5l1.414 1.414l-5 5zM4 9h10v2H4zm17 7v2h-2v-2zm-7-7a7 7 0 0 1 7 7h-2a5 5 0 0 0-5-5z"
                />
              </svg>
            </button>
          </div>
          <div className="flex justify-between items-center mx-6">
            <h1 className="text-xl lg:text-3xl md:text-3xl sm:text-2xl font-medium">
              Delivery Information
            </h1>
            <button className="bg-[#fcdee3] text-black text-xs rounded-4xl font-medium py-1 px-4">
              Step - 1
            </button>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4 sm:gap-5 lg:gap-6 mt-10">
            {/* Left Box*/}
            <div className="lg:col-span-3 sm:col-span-2 col-span-1">
              <div className="p-6 bg-white rounded-md ">
                <div className="flex lg:flex-row md:flex-row sm:flex-row flex-col gap-5 w-full justify-between">
                  <div className="flex flex-col lg:w-1/2 md:w-1/2 sm:w-full w-full justify-left">
                    <label
                      htmlFor="Name"
                      className="font-medium text-gray-900 text-base mb-1"
                    >
                      Name
                    </label>
                    <input
                      type="text"
                      className="border-1 border-gray-300 rounded-sm py-1 px-2 placeholder:text-sm"
                      placeholder="Enter your name..."
                    />
                  </div>
                  <div className="flex flex-col lg:w-1/2 md:w-1/2 sm:w-full w-full justify-left">
                    <label
                      htmlFor="Name"
                      className="font-medium text-gray-900 text-base mb-1"
                    >
                      Mobile No.
                    </label>
                    <input
                      type="text"
                      className="border-1 border-gray-300 rounded-sm py-1 px-2 placeholder:text-sm"
                      placeholder="Enter your mobile no..."
                    />
                  </div>
                </div>

                <div className="flex lg:flex-row md:flex-row sm:flex-row flex-col gap-5 w-full justify-between my-5">
                  <div className="flex flex-col lg:w-1/2 md:w-1/2 sm:w-full w-full justify-left">
                    <label
                      htmlFor="Name"
                      className="font-medium text-black text-base mb-1"
                    >
                      Email
                    </label>
                    <input
                      type="text"
                      className="border-1 border-gray-300 rounded-sm py-1 px-2 placeholder:text-sm"
                      placeholder="Enter your email..."
                    />
                  </div>
                  <div className="flex flex-col lg:w-1/2 md:w-1/2 sm:w-full w-full justify-left">
                    <label
                      htmlFor="Name"
                      className="font-medium text-gray-900 text-base mb-1"
                    >
                      City
                    </label>
                    <input
                      type="text"
                      className="border-1 border-gray-300 rounded-sm py-1 px-2 placeholder:text-sm"
                      placeholder="Enter your city..."
                    />
                  </div>
                </div>

                <div className="flex lg:flex-row md:flex-row sm:flex-row flex-col gap-5 w-full justify-between">
                  <div className="flex flex-col lg:w-1/2 md:w-1/2 sm:w-full w-full justify-left">
                    <label
                      htmlFor="Name"
                      className="font-medium text-gray-900 text-base mb-1"
                    >
                      State
                    </label>
                    <div className="relative">
                      <select
                        name="state"
                        id="state"
                        className="border border-gray-300 rounded-sm py-1 px-2 pr-8 appearance-none placeholder:text-sm w-full"
                      >
                        <option value="--" selected disabled>
                          State
                        </option>
                        <option value="State1">State 1</option>
                        <option value="State2">State 2</option>
                        <option value="State3">State 3</option>
                      </select>
                      <div className="absolute text-xs text-gray-400 inset-y-0 right-2 flex items-center pointer-events-none">
                        ▼
                      </div>
                    </div>
                  </div>
                  <div className="flex flex-col lg:w-1/2 md:w-1/2 sm:w-full w-full justify-left">
                    <label
                      htmlFor="Name"
                      className="font-medium text-gray-900 text-base mb-1"
                    >
                      Post Code
                    </label>
                    <input
                      type="text"
                      className="border-1 border-gray-300 rounded-sm py-1 px-2 placeholder:text-sm"
                      placeholder="Enter your post code..."
                    />
                  </div>
                </div>

                <div className="w-full mt-5">
                  <div className="flex flex-col w-full justify-left">
                    <label
                      htmlFor="Name"
                      className="font-medium text-gray-900 text-base mb-1"
                    >
                      Message
                    </label>
                    <textarea
                      name="message"
                      id="message"
                      rows={4}
                      className="border-1 border-gray-300 rounded-sm py-1 px-2 placeholder:text-sm"
                      placeholder="Message..."
                    ></textarea>
                  </div>
                </div>

                <div className="w-full mt-5">
                  <div className="flex flex-col mb-5 gap-1">
                    <h2 className="text-2xl font-medium ">Billing Information</h2>
                    <div className="flex gap-2 mt-1">
                      <input type="checkbox" className="accent-red-500" />
                      <label htmlFor="home" className="font-normal">
                        Same as delivery address
                      </label>
                    </div>
                  </div>
                  <div className="flex flex-col w-full justify-left">
                    <h2 className="text-2xl font-medium ">Billing Type</h2>
                    <div className="flex gap-6 mt-4">
                      <div className="flex gap-2">
                        <input type="radio" className="accent-red-500" />
                        <label htmlFor="home" className="font-normal">
                          Personal
                        </label>
                      </div>
                      <div className="flex gap-2">
                        <input type="radio" className="accent-red-500" />
                        <label htmlFor="home" className="font-normal">
                          Commercial
                        </label>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="mt-5">
                <div className="bg-white py-4 rounded-md">
                  <div className="flex px-6 justify-between pt-2 pb-4  border-b-1 border-gray-200">
                    <h2 className="text-lg lg:text-xl md:text-xl sm:text-lg font-medium ">
                      Default Address
                    </h2>
                    <div className="flex gap-2 items-center">
                      <button
                        type="button"
                        className="flex gap-1 items-center py-1 px-3 border-1 border-red-500 rounded-md cursor-pointer hover:bg-[#f4f4f4] text-red-500 hover:border-slate-500"
                      >
                        <svg
                          width="13"
                          height="13"
                          viewBox="0 0 13 13"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M8 3.49985L9.5 4.99985M7 10.4998H11M3 8.49985L2.5 10.4998L4.5 9.99985L10.293 4.20685C10.4805 4.01932 10.5858 3.76501 10.5858 3.49985C10.5858 3.23468 10.4805 2.98038 10.293 2.79285L10.207 2.70685C10.0195 2.51938 9.76516 2.41406 9.5 2.41406C9.23484 2.41406 8.98053 2.51938 8.793 2.70685L3 8.49985Z"
                            stroke="#DA0025"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                        </svg>
                        <span className="text-xs font-medium ">Edit</span>
                      </button>
                      <button
                        onClick={() => setIsOpen(true)}
                        type="button"
                        className="flex gap-1 items-center py-1 px-3 border-1 border-red-500 rounded-md cursor-pointer hover:bg-[#f4f4f4] text-red-500 hover:border-slate-500"
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="13"
                          height="13"
                          viewBox="0 0 24 24"
                        >
                          <path
                            fill="#ff4a4a"
                            d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10s10-4.48 10-10S17.52 2 12 2m0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8s8 3.59 8 8s-3.59 8-8 8m4.17-5.24l-1.1-1.1c.71-1.33.53-3.01-.59-4.13A3.48 3.48 0 0 0 12 8.5c-.03 0-.06.01-.09.01L13 9.6l-1.06 1.06l-2.83-2.83L11.94 5L13 6.06l-.96.96c1.27.01 2.53.48 3.5 1.44c1.7 1.71 1.91 4.36.63 6.3m-1.28 1.41L12.06 19L11 17.94l.95-.95a4.97 4.97 0 0 1-3.48-1.46a5.006 5.006 0 0 1-.64-6.29l1.1 1.1c-.71 1.33-.53 3.01.59 4.13c.7.7 1.63 1.04 2.56 1.01L11 14.4l1.06-1.06z"
                          />
                        </svg>
                        <span className="text-xs font-medium">Change</span>
                      </button>
                    </div>
                  </div>
                  <div>
                    <div className="flex px-6 justify-between pt-4 pb-1">
                      <h2 className="text-lg lg:text-xl md:text-xl sm:text-lg font-medium ">
                        Jeremy John
                      </h2>
                      <div className="flex gap-2 items-center">
                        <input
                          type="radio"
                          checked
                          className="accent-red-500"
                        />
                        <label htmlFor="Home" className="text-xs font-medium">
                          Home
                        </label>
                      </div>
                    </div>
                    <div className="flex px-6 w-4/5 lg:w-2/3 md:w-2/3 sm:w-2/3 justify-between">
                      <p className="text-sm">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Aenean maximus pellentesque congue
                      </p>
                    </div>
                    <div className="flex flex-col px-6 justify-between py-4">
                      <h2 className="text-lg lg:text-xl md:text-xl sm:text-lg font-medium">
                        Mobile Number
                      </h2>
                      <span className="font-medium text-sm lg:text-base md:text-base sm:text-sm">
                        +44 124 1255 124
                      </span>
                    </div>
                  </div>

                  <div className="flex gap-2 items-center px-6 mt-5">
                    <svg
                      width="15"
                      height="15"
                      viewBox="0 0 17 17"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <circle cx="8.76953" cy="8.19141" r="8" fill="#DA0025" />
                    </svg>
                    <span className="lg:text-base md:text-base sm:text-medium text-sm">
                      Pay on delivery avaliable
                    </span>
                  </div>
                </div>

                <div className="bg-white py-6 mt-6 rounded-md">
                  <div className="flex justify-center gap-2 items-center">
                    <button
                      type="button"
                      className="flex gap-1 items-center py-1 px-3 rounded-md cursor-pointer"
                    >
                      <svg
                        className="lg:w-[45px] md:w-[40px] sm:w-[35px] w-[30px]  lg:h-[40px] md:h-[35px] sm:h-[30px] h-[25px]"
                        viewBox="0 0 60 61"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <rect
                          y="0.691406"
                          width="60"
                          height="60"
                          rx="30"
                          fill="#DA0025"
                        />
                        <path
                          d="M29.75 19.9414V41.4414"
                          stroke="white"
                          strokeWidth="4"
                          strokeLinecap="round"
                        />
                        <path
                          d="M40.5 30.6914L19 30.6914"
                          stroke="white"
                          strokeWidth="4"
                          strokeLinecap="round"
                        />
                      </svg>
                      <span className="text-base font-medium">
                        Add New Adderss
                      </span>
                    </button>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Box*/}
            <div className="flex flex-col lg:col-span-2 sm:col-span-2 col-span-1 rounded-md lg:mt-0 md:mt-5 sm:mt-5 mt-5">
              <div className="bg-white p-5 rounded-md">
                <div className="flex mb-3 justify-between rounded-md items-center gap-2 lg:gap-4 md:gap-4 sm:gap-4 bg-[#FFF4F6] p-3">
                  <div className="flex h-full gap-2 lg:gap-4 md:gap-4 sm:gap-4">
                    <img
                      src="\public\food1.jpg"
                      alt="foodImage"
                      className="rounded-sm lg:w-[80px] md:w-[70px] sm:w-[60px] w-[60px] lg:h-[80px] md:h-[70px] sm:h-[60px] h-[60px]"
                    />
                    <div className="flex h-full flex-col justify-left">
                      <h2 className="font-medium text-normal">
                        Chicken Wraps Recipe
                      </h2>
                      <p className="text-xs">
                        Special mix of mango, peach, strawberry
                      </p>
                      <span className="text-normal font-medium mt-1">₤550</span>
                    </div>
                  </div>
                  <div className="flex justify-center items-center">
                    <button className="border-1 px-2 pb-1 font-medium cursor-pointer">
                      -
                    </button>
                    <button className="border-b-1 border-t-1 px-2 pb-1 font-medium cursor-pointer">
                      2
                    </button>
                    <button className="border-1 px-2 pb-1 font-medium cursor-pointer">
                      +
                    </button>
                  </div>
                </div>

                <div className="border-t-1 border-b-1 border-gray-200">
                  <div className="flex justify-evenly items-center w-full">
                    <div className="grid grid-cols-4 text-sm gap-20 justify-center items-center py-1 text-black border-gray-200 mt-4 font-normal">
                      <h4 className="col-span-2">Sub Total</h4>
                      <h4 className="col-span-2">₤960.00</h4>
                    </div>
                  </div>

                  <div className="flex justify-evenly items-center w-full">
                    <div className="grid grid-cols-4 text-sm gap-20 justify-center py-1 text-black border-gray-200 font-normal">
                      <h4 className="col-span-2">Shipping</h4>
                      <h4 className="col-span-2">Free</h4>
                    </div>
                  </div>

                  <div className="flex justify-evenly items-center w-full">
                    <div className="grid grid-cols-4 text-sm gap-20 justify-center py-1 text-black border-gray-200 font-normal">
                      <h4 className="col-span-2">Discount</h4>
                      <h4 className="col-span-2">₤50.00</h4>
                    </div>
                  </div>

                  <div className="flex justify-evenly items-center w-full">
                    <div className="grid grid-cols-4 text-sm gap-20 justify-center py-1 text-black border-gray-200 font-normal">
                      <h4 className="col-span-2">Tax</h4>
                      <h4 className="col-span-2">₤10.00</h4>
                    </div>
                  </div>
                </div>
                <div className="flex justify-evenly items-center mt-1 w-full">
                  <div className="grid grid-cols-4 text-sm gap-20 justify-center  py-1 text-black border-gray-200 font-medium">
                    <h4 className="col-span-2">Total</h4>
                    <h4 className="col-span-2">₤1250.00</h4>
                  </div>
                </div>

                <div className="mt-3">
                  <Link href="/checkout">
                    <button className="bg-red-600 rounded-4xl w-full text-white font-medium py-2 hover:bg-black cursor-pointer">
                      Confirm Order
                    </button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Overlay (Optional, for closing on outside click) */}
        {isOpen && (
          <div
            className="fixed inset-0  bg-opacity-30 z-40"
            onClick={() => setIsOpen(false)}
          ></div>
        )}

        {/* Sliding Panel */}
        <div
          className={`fixed right-0 top-0 h-screen lg:w-[40%] md:w-[50%] sm:w-[70%] w-[95%] bg-white lg:shadow-2xl md:shadow-2xl sm:shadow-2xl shadow-xl transform transition-transform duration-300 z-50 ${
            isOpen ? "translate-x-0" : "translate-x-full"
          }`}
        >
          <div className="w-full">
            {/* Close Button */}
            <div className="flex w-full px-6 justify-end items-center pt-4 pb-1">
              <button
                onClick={() => setIsOpen(false)}
                className="text-red-500 cursor-pointer lg:text-2xl md:text-xl sm:text-xl text-lg"
              >
                 <svg className="md:w-[40px] md:h-[40px] w-[30px] h-[30px]" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect x="0.5" y="0.5" width="39" height="39" rx="19.5" fill="white"/>
                <rect x="0.5" y="0.5" width="39" height="39" rx="19.5" stroke="#636363"/>
                <path d="M14 14L26 26" stroke="#636363" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M26 14L14 26" stroke="#636363" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </button>
            </div>

            <div className="border-1 border-gray-200 mx-5 mt-2 pb-3 rounded-sm shadow-sm cursor-pointer hover:shadow-lg">
              <div className="flex w-full mb-2 py-2 px-6 bg-[#f4f4f4] justify-end border-b-1 border-gray-200">
                <button
                  type="button"
                  className="cursor-pointer text-red-500 hover:text-black"
                >
                  <span className="font-medium text-xl">Delete</span>
                </button>
              </div>
              {/* Radio and Label */}
              <div className="flex px-6 justify-between">
                <h2 className="text-lg lg:text-xl md:text-xl sm:text-lg font-medium">
                  Jeremy John
                </h2>
                <div className="flex gap-2 items-center">
                  <input type="radio" checked className="accent-red-500" />
                  <label htmlFor="Home" className="text-xs font-medium">
                    Home
                  </label>
                </div>
              </div>

              {/* Description */}
              <div className="flex px-6 w-4/5 lg:w-2/3 md:w-2/3 sm:w-2/3 justify-between">
                <p className="text-sm">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Aenean maximus pellentesque congue.
                </p>
              </div>

              {/* Mobile Number */}
              <div className="flex flex-col px-6 justify-between py-4">
                <h2 className="text-lg lg:text-xl md:text-xl sm:text-lg font-medium">
                  Mobile Number
                </h2>
                <span className="font-medium text-sm lg:text-base md:text-base sm:text-sm">
                  +44 124 1255 124
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Address;
