"use client"

import React from "react";
import { motion } from "framer-motion";
import { useRouter } from "next/navigation";
const ForgotPassword = () => {

  const router = useRouter();
    const handleSubmit = (e) => {
        e.preventDefault();

        router.push("/reg-successful");
      }

  return (
    <div className="relative w-full  m-0">
      <img
        className="absolute top-0 right-[18%] lg:w-[15%] md:w-[25%] sm:w-[25%] w-[33%]"
        src="public/rectangle.png"
        alt=""
      />
        <motion.div
          className="absolute shape-mockup top-[15%] right-[20%] jump d-lg-block"
          animate={{ y: [0, -40, 0] }} // Moves up and down
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
        >
          <img
            src="../cherry_1.webp"
            alt="shape"
            className="lg:w-[80px] md:w-[70px] sm:w-[60px] w-[60px]"
          />
        </motion.div>
      <div className="flex w-full h-screen px-4 md:px-15 justify-center items-center">
        <div className="w-full h-[90%] flex flex-col justify-center items-center bg-white rounded-4xl shadow-md">
          <div className="h-[70%] flex flex-col gap-3 justify-center items-center px-6">
            <h1 className="text-[36px] sm:text-[46px] font-[500] leading-12">Reset Your Password?</h1>
            <p className="text-[#6b7480]">Enter your email for receiving OTP to reset your password.</p>
            <form onSubmit={handleSubmit} className="w-full">
            <div className="flex flex-col gap-1 mb-5">
              <label className="font-base text-[#4D5765] text-base md:text-lg" htmlFor="email">
                Email ID
              </label>
              <input
                id="email"
                name="email"
                className="border border-gray-400 px-3 py-[5px] lg:py-[10px] rounded-md bg-[#f3f3f3] w-full pr-10"
                type="email"
                placeholder="Enter your email..."
                required
              />
            </div>
            <div className="w-full mt-8">
              <button
                type="submit"
                className="font-medium flex justify-center text-white items-center gap-1 bg-[#DA0025] rounded-[50px] py-2 lg:py-3 w-full hover:bg-black transition cursor-pointer"
              >
                Send OTP
              </button>
            </div>
            </form>
          </div>
          <div className="w-2/3 sm:w-1/2 flex justify-center gap-4 ">
            <div className="border-3 border-[#DA0025] rounded-lg w-1/6 sm:w-1/8"></div>
            <div className="border-3 border-red-100 rounded-lg w-1/6 sm:w-1/8"></div>
            <div className="border-3 border-red-100 rounded-lg w-1/6 sm:w-1/8"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ForgotPassword;