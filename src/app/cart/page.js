import Link from "next/link";
import React from "react";
 

const Cart = () => {
  //Cart Page

  return (
    <div className="flex h-screen justify-center">
      <div className="lg:p-10 md:p-8 sm:p-8 p-2 flex flex-col justify-left h-[70%] lx:w-[1280px] lg:w-[1080px] md:w-[786px] sm:w-[600px] sm:mx-auto mx-2">
        <div className="mb-5 ">
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
        <div className="mb-8">
          <h2 className="text-xl lg:text-3xl md:text-3xl sm:text-2xl font-medium">Cart Page</h2>
        </div>
        <div className="w-full h-full flex flex-col items-center">
          <div className="grid grid-cols-6 gap-2 lg:text-lg sm:text-base text-xs font-medium text-black text-center items-center justify-between w-full lg:px-4 md:px-4 sm:px-3 px-1">
            <h5 className="text-left">Product</h5>
            <h5>Name</h5>
            <h5>Price</h5>
            <h5>Quantity</h5>
            <h5>Subtotal</h5>
            <h5>Remove</h5>
          </div>
          <div className="grid grid-cols-6 mt-5 gap-2 py-3 text-center items-center bg-[#ececec] justify-between w-full border-1 rounded-sm border-gray-200 lg:px-4 md:px-4 sm:px-3 px-1">
            <div className="flex text-center  justify-left gap-3 items-center">
              <img
                src="\public\food1.jpg"
                alt=""
                className="lg:w-20 md:w-15 sm:w-10 w-10"
              />
            </div>
            <div>
              <span className="font-medium lg:text-base sm:text-sm text-xs ">
                {" "}
                Chicken Wraps Recipe
              </span>
            </div>
            <div className="text-center">
              <span className="font-medium lg:text-lg sm:text-base text-sm">
                ₤50
              </span>
            </div>
            <div className="flex justify-center items-center">
              <button className="border-1 lg:px-2 md:px-2 sm:px-2 px-1 pb-1 lg:text-base sm:text-sm text-xs font-medium cursor-pointer bg-[#f8f8f8]">
                -
              </button>
              <button className="border-b-1 border-t-1 lg:px-2 md:px-2 sm:px-2 px-1 pb-1 lg:text-base sm:text-sm text-xs font-medium cursor-pointer bg-[#f8f8f8]">
                2
              </button>
              <button className="border-1 lg:px-2 md:px-2 sm:px-2 px-1 pb-1 lg:text-base sm:text-sm text-xs font-medium cursor-pointer bg-[#f8f8f8]">
                +
              </button>
            </div>
            <div>
              <span className="font-medium lg:text-lg sm:text-base text-sm">
                ₤50
              </span>
            </div>
            <div>
              <button type="button" className="cursor-pointer">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="lg:w-[26px] md:w-[24px] sm:w-[22px] w-[20px]"
                  viewBox="0 0 24 24"
                >
                  <path
                    fill="#ff1010"
                    fillRule="evenodd"
                    d="M9.774 5L3.758 3.94l.174-.986a.5.5 0 0 1 .58-.405L18.411 5h.088h-.087l1.855.327a.5.5 0 0 1 .406.58l-.174.984l-2.09-.368l-.8 13.594A2 2 0 0 1 15.615 22H8.386a2 2 0 0 1-1.997-1.883L5.59 6.5h12.69zH5.5zM9 9l.5 9H11l-.4-9zm4.5 0l-.5 9h1.5l.5-9zm-2.646-7.871l3.94.694a.5.5 0 0 1 .405.58l-.174.984l-4.924-.868l.174-.985a.5.5 0 0 1 .58-.405z"
                  />
                </svg>
              </button>
            </div>
          </div>


          <div className="flex mt-18 pb-20 flex-col justify-left w-full">
            <h1 className="xl:text-2xl lg:text-2xl md:text-xl sm:text-lg text-lg font-medium">
              Cart Totals
            </h1>
            <div className="grid grid-cols-4 py-1 border-b-1 text-black border-gray-300 mt-4 font-medium">
              <h4 className="lg:col-span-1 md:col-span-1 sm:col-span-1 col-span-3 lg:text-lg md:text:base sm:text-base text-sm">
                Subtotal :
              </h4>
              <h4 className="lg:col-span-3 md:col-span-3 sm:col-span-3 col-span-1 lg:text-lg md:text:base sm:text-base text-sm lg:text-left md:text-left sm:text-left text-center">
                ₤50
              </h4>
            </div>
            <div className="grid grid-cols-4 py-1 border-b-1 text-black border-gray-300 mt-4 font-medium">
              <h4 className="lg:col-span-1 md:col-span-1 sm:col-span-1 col-span-3 lg:text-lg md:text:base sm:text-base text-sm">
                Total :
              </h4>
              <h4 className="lg:col-span-3 md:col-span-3 sm:col-span-3 col-span-1 lg:text-lg md:text:base sm:text-base text-sm lg:text-left md:text-left sm:text-left text-center">
                ₤50
              </h4>
            </div>
            <div>
              <Link href="/my-address">
                <button
                  type="button"
                  className="bg-red-600 mt-6 lg:text-sm text-xs rounded-4xl text-white font-medium py-2 px-5 cursor-pointer hover:bg-black"
                >
                  Proceed To Checkout
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
