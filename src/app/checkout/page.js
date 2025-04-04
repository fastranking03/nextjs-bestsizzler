"use client"
import React , { useState } from "react";
import { useRouter } from "next/router";
import Image from "next/image"; 
import  { assets } from '../../assets/assets.js'
const Checkout = () => {

 
   const [isModalOpen, setIsModalOpen] = useState(false);
 
 const handleOnClick = () => {
    const router = useRouter();
    setIsModalOpen(true);
    setTimeout(() => {
      router("/orders")
    }, 2000000000);
 }

  return (
    <div className="flex justify-center items-center w-full h-screen bg-[#f4f4f4]">
      <div className="flex flex-col justify-left h-[80%] lx:w-[1280px] lg:w-[1080px] md:w-[786px] sm:w-[600px] sm:mx-auto mx-4">
        <div className="mb-2 ">
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
        <div className="flex justify-between items-center">
          <h1 className="text-3xl font-medium">Select Payment Methods</h1>
          <button className="bg-[#fcdee3] text-black text-xs rounded-4xl font-medium py-1 px-4">
            Step - 2
          </button>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-5 mt-10">
          {/* Left Box*/}
          <div className="lg:col-span-3 sm:col-span-2 col-span-1 rounded-md">
            <div className="bg-white">
              <div className="flex w-full justify-between rounded-t-md bg-[#FFDDE3] p-5 ">
                <div className="flex items-center gap-2">
                  <input type="radio" className="accent-red-500 " />
                  <h2 className="text-lg font-medium">Credit card</h2>
                </div>
                <h3 className="font-medium text-sm text-red-600">Card logo</h3>
              </div>
              <div className="flex pt-5 pb-2 px-5 gap-5 w-full justify-between">
                <div className="flex flex-col w-1/2 justify-left">
                  <label
                    htmlFor="Name"
                    className="font-medium text-gray-900 text-sm mb-1"
                  >
                    Card Number
                  </label>
                  <input
                    type="text"
                    className="border-1 border-gray-300 rounded-sm py-1 px-2 placeholder:text-xs"
                    placeholder="Enter card number..."
                  />
                </div>
                <div className="flex flex-col w-1/2 justify-left">
                  <label
                    htmlFor="Name"
                    className="font-medium text-gray-900 text-sm mb-1"
                  >
                    Card Name
                  </label>
                  <input
                    type="text"
                    className="border-1 border-gray-300 rounded-sm py-1 px-2 placeholder:text-xs"
                    placeholder="Enter card name..."
                  />
                </div>
              </div>
              <div className="flex pb-5 px-5 gap-5 w-full justify-between">
                <div className="flex flex-col w-1/2 justify-left">
                  <label
                    htmlFor="Name"
                    className="font-medium text-gray-900 text-sm mb-1"
                  >
                    Expiry Date
                  </label>
                  <input
                    type="text"
                    className="border-1 border-gray-300 rounded-sm py-1 px-2 placeholder:text-xs"
                    placeholder="Expiration date (MM/YY)"
                  />
                </div>
                <div className="flex flex-col w-1/2 justify-left">
                  <label
                    htmlFor="Name"
                    className="font-medium text-gray-900 text-sm mb-1"
                  >
                    CVV
                  </label>
                  <input
                    type="text"
                    className="border-1 border-gray-300 rounded-sm py-1 px-2 placeholder:text-xs"
                    placeholder="CVV"
                  />
                </div>
              </div>
            </div>

            <div className="bg-white mt-4 rounded-md">
              <div className="flex w-full justify-between p-5 ">
                <div className="flex items-center gap-2">
                  <input type="radio" className="accent-red-500 " />
                  <h2 className="text-lg font-medium">Other payment methods</h2>
                </div>
                <h3 className="font-medium text-sm text-red-600">Card logo</h3>
              </div>
            </div>

            <div className="bg-white mt-4 rounded-md">
              <div className="flex w-full justify-between p-5 ">
                <div className="flex items-center gap-2">
                  <input type="radio" className="accent-red-500 " />
                  <h2 className="text-lg font-medium">Other payment methods</h2>
                </div>
                <h3 className="font-medium text-sm text-red-600">Card logo</h3>
              </div>
            </div>
          </div>

          {/* Right Box*/}
          <div className="flex flex-col lg:col-span-2 sm:col-span-2 col-span-1 rounded-md lg:mt-0 md:mt-5 sm:mt-5 mt-5">
              <div className="bg-white p-5 rounded-md">
                <div className="flex mb-3 justify-between rounded-md items-center gap-2 lg:gap-4 md:gap-4 sm:gap-4 bg-[#FFF4F6] p-3">
                  <div className="flex h-full gap-2 lg:gap-4 md:gap-4 sm:gap-4">
                    <Image
                      src={assets.menuImage2}
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
                    <button  onClick={handleOnClick} className="bg-red-600 rounded-4xl w-full text-white font-medium py-2 hover:bg-black cursor-pointer">
                      Continue to payment
                    </button>
                </div>
              </div>
            </div>


            {/* Modal */}
              {isModalOpen && (
                <div className="fixed inset-0 flex items-center justify-center z-100 bg-black/60">
                  <div className="bg-white  py-10 rounded-xl shadow-lg w-[80%] sm:w-[50%] lg:w-[30%]">
                    <div className="px-4 flex items-center flex-col mb-4 gap-5">
                      <div className="mt-2 flex justify-center items-center w-full flex-col gap-2">
                        <img src="https://res.cloudinary.com/dsy7yuvbm/image/upload/v1742907069/image_1_dyhcni.png" className="w-[80%] h-[80%]" alt="ThankyouImage"/>
                      </div>
                      <div className="text-center">
                        <h1 className="font-medium text-2xl sm:text-3xl">Thanks for your Order</h1>
                        <p className="text-gray-500 text-[14px] sm:text-[18px] mt-2">Please wait while redirecting...</p>
                      </div>
                    </div>     
                  </div>
                </div>
              )}
        </div>
      </div>
    </div>
  );
};

export default Checkout;
