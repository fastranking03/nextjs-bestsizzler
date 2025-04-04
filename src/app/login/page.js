"use client";

import React, { useState, useContext } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import Image from "next/image";
import { assets } from "@/assets/assets";
import { UserAuthContext } from "@/context/userContext.js";

const Login = () => {
  const [showPassword, setShowPassword] = useState(false);
  const { loginHandler, setEmail, setPassword, email, password, error } =
    useContext(UserAuthContext);

  return (
    <div className="relative py-12 m-0">
      {/* <Image
        className="absolute top-0 right-0 lg:w-[15%] md:w-[25%] sm:w-[25%] w-[33%]"
        src="public/rectangle.png"
        alt=""
        width={200}
        height={200}
      /> */}
      <div className="flex w-full px-4 md:px-15 h-auto justify-center items-center">
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
        <div className="w-full flex justify-center bg-white rounded-4xl shadow-md">
          <div className="hidden lg:flex w-[50%] items-center">
            <Image src={assets.signup} alt="signupImage" className="w-[100%]" />
          </div>
          <div className="w-[90%] lg:w-[50%] flex flex-col items-center justify-center">
            <div className="w-full flex flex-col gap-2 items-center">
              <Image
                src={assets.logo}
                alt="Logo"
                className="w-[160px] mt-6 sm:mt-0 md:w-[200px] h-[100px]"
              />
              <h1 className="w-full px-1 font-[600] text-[32px] md:text-[40px] mb-3 text-left lg:text-center">
                Login
              </h1>
            </div>
            <form onSubmit={loginHandler} className="w-[95%] lg:w-[70%]">
              <div className="flex flex-col gap-1 mb-5">
                <label
                  className="font-base text-[#4D5765] text-base md:text-lg"
                  htmlFor="email"
                >
                  Email ID
                </label>
                <input
                  id="email"
                  name="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="border border-gray-400 px-3 py-[5px] lg:py-[10px] rounded-md bg-[#f3f3f3] w-full pr-10"
                  type="email"
                  placeholder="Enter your email..."
                  required
                />
              </div>
              <div className="flex flex-col gap-1 relative">
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
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className="border border-gray-400 px-3 py-[5px] lg:py-[10px] rounded-md bg-[#f3f3f3] w-full pr-10"
                    type={showPassword ? "text" : "password"}
                    placeholder="Enter your password..."
                    required
                  />
                  <svg
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute right-3 top-1/2 transform -translate-y-1/2 cursor-pointer"
                    width="18"
                    height="12"
                    viewBox="0 0 18 12"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M9 1.6C11.9286 1.6 14.5405 3.304 15.8155 6C14.5405 8.696 11.9286 10.4 9 10.4C6.07136 10.4 3.45955 8.696 2.18455 6C3.45955 3.304 6.07136 1.6 9 1.6ZM9 0C5.13636 0 1.83682 2.488 0.5 6C1.83682 9.512 5.13636 12 9 12C12.8636 12 16.1632 9.512 17.5 6C16.1632 2.488 12.8636 0 9 0ZM9 4C10.0664 4 10.9318 4.896 10.9318 6C10.9318 7.104 10.0664 8 9 8C7.93364 8 7.06818 7.104 7.06818 6C7.06818 4.896 7.93364 4 9 4ZM9 2.4C7.08364 2.4 5.52273 4.016 5.52273 6C5.52273 7.984 7.08364 9.6 9 9.6C10.9164 9.6 12.4773 7.984 12.4773 6C12.4773 4.016 10.9164 2.4 9 2.4Z"
                      fill={showPassword ? "#007BFF" : "black"}
                    />
                  </svg>
                </div>
              </div>

              {error && <p className="text-red-500 mt-3">{error}</p>}
              <div className="w-full flex justify-between items-center pt-2">
                <div className="flex gap-2 items-center">
                  <input
                    type="checkbox"
                    name="remember_me"
                    className="cursor-pointer"
                  />
                  <span className="text-[#888888]">Remember me</span>
                </div>
                <Link href="/forgot-password">
                  <button type="button" className="cursor-pointer">
                    <span className="font-medium text-[#DA0025]">
                      Forgot Password?
                    </span>
                  </button>
                </Link>
              </div>
              <div className="w-full mt-8">
                <button
                  type="submit"
                  className="font-medium flex justify-center text-white items-center gap-1 bg-[#DA0025] rounded-[50px] py-2 lg:py-3 w-full hover:bg-black transition cursor-pointer"
                >
                  Login
                </button>
              </div>
              <div className="w-full">
                <button
                  type="button"
                  className="font-medium flex justify-center text-[#4B5768] items-center gap-1 bg-[#E4E7EB] rounded-[50px] mt-5 py-2 lg:py-2 w-full hover:bg-gray-300 transition cursor-pointer"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="lg:w-[32px] lg:h-[32px] w-[23px] h-[23px]"
                    viewBox="0 0 48 48"
                  >
                    <path
                      fill="#ffc107"
                      d="M43.611 20.083H42V20H24v8h11.303c-1.649 4.657-6.08 8-11.303 8c-6.627 0-12-5.373-12-12s5.373-12 12-12c3.059 0 5.842 1.154 7.961 3.039l5.657-5.657C34.046 6.053 29.268 4 24 4C12.955 4 4 12.955 4 24s8.955 20 20 20s20-8.955 20-20c0-1.341-.138-2.65-.389-3.917"
                    />
                    <path
                      fill="#ff3d00"
                      d="m6.306 14.691l6.571 4.819C14.655 15.108 18.961 12 24 12c3.059 0 5.842 1.154 7.961 3.039l5.657-5.657C34.046 6.053 29.268 4 24 4C16.318 4 9.656 8.337 6.306 14.691"
                    />
                    <path
                      fill="#4caf50"
                      d="M24 44c5.166 0 9.86-1.977 13.409-5.192l-6.19-5.238A11.9 11.9 0 0 1 24 36c-5.202 0-9.619-3.317-11.283-7.946l-6.522 5.025C9.505 39.556 16.227 44 24 44"
                    />
                    <path
                      fill="#1976d2"
                      d="M43.611 20.083H42V20H24v8h11.303a12.04 12.04 0 0 1-4.087 5.571l.003-.002l6.19 5.238C36.971 39.205 44 34 44 24c0-1.341-.138-2.65-.389-3.917"
                    />
                  </svg>
                  <span>Continue with Google</span>
                </button>
              </div>
            </form>
            <div className="flex items-center w-[95%] lg:w-[65%] py-3 border-t-1 border-[#dddddd] mt-6 justify-between">
              <div>
                <p className="text-[#8f8f8f] text-sm md:text-base">
                  Don't have an account?
                </p>
                <span className="font-medium text-xl md:text-2xl">Sign up</span>
              </div>
              <Link href="/signup">
                <div className="rounded-[50px] p-3 cursor-pointer">
                  <svg
                    className="lg:h-[50px] lg:w-[51px] h-[40px] w-[41px]"
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

export default Login;
