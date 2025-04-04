"use client"


import React, { useState, useEffect, useContext } from "react";
import { motion } from "framer-motion";
import Link from "next/link";

import { UserAuthContext } from "@/context/userContext.js";


const VerificationCode = () => {
  const [isResendDisabled, setIsResendDisabled] = useState(true);
  const [timer, setTimer] = useState(300); 

  const { handleVerification, handleResendOTP, verifError , otp,  setOtp, setUserEmail} = useContext(UserAuthContext);
  
  useEffect(() => {
    const storedUser = sessionStorage.getItem("user");
    if (storedUser) {
      setUserEmail(storedUser);
    }
  }, []);
 
  useEffect(() => {
    let interval;
    if (isResendDisabled) {
      interval = setInterval(() => {
        setTimer((prev) => (prev > 0 ? prev - 1 : 0));
      }, 1000);
      
    
      setTimeout(() => {
        setIsResendDisabled(false);
        clearInterval(interval);
      }, 300000); 
    }

    return () => clearInterval(interval);
  }, [isResendDisabled]);
 

  return (
    <div className="relative w-full m-0">
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
          <div className="h-[70%] flex flex-col gap-3 px-6 justify-center items-center">
            <h1 className="text-[30px] md:text-[46px] font-[500] leading-9 sm:leading-12 mb-3 md:mb-5">
              Enter Verification Code
            </h1>
            <form className="w-full" onSubmit={handleVerification}>
              <div className="w-[100%] md:gap-4 mb-1">
              <input
                type="number"
                value={otp}
                onChange={(e) => setOtp(e.target.value)}
                placeholder="Enter your OTP here..."
                className="w-full font-medium border border-gray-400 px-4 py-[7px] md:py-[15px] rounded-md bg-[#f3f3f3] appearance-none [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none"
                required
              />
              <p className="text-red-600 pt-1 text-center text-sm sm:text-base">{verifError}</p>
              </div>

              <Link href="/policy">
                <div className="text-[#9E9DA5] text-center">
                  <p className="text-[12px] sm:text-[16px]">
                    If you sign up,{" "}
                    <span className="underline">Terms & Conditions and Privacy Policy</span> apply.
                  </p>
                </div>
              </Link>
         
              <div className="w-full mt-8">
                <button
                  type="submit"
                  className="font-medium flex justify-center text-white items-center gap-1 bg-[#DA0025] rounded-[50px] py-2 lg:py-3 w-full hover:bg-black transition cursor-pointer"
                >
                  Submit
                </button>
              </div>
            </form>

            <div className="mt-4 text-center">
              <button
                onClick={handleResendOTP}
                disabled={isResendDisabled}
                className={`mt-1 sm:mt-3 px-6 py-2 rounded-lg sm:text-base text-xs ${
                  isResendDisabled ? "bg-gray-300 cursor-not-allowed" : "bg-black hover:bg-blue-700 text-white"
                }`}
              >
                {isResendDisabled ? `Resend OTP in ${Math.floor(timer / 60)}:${String(timer % 60).padStart(2, "0")}` : "Resend OTP"}
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VerificationCode;
