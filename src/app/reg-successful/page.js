"use client"

import React, { useEffect } from "react";
import { motion } from "framer-motion";
import { useRouter } from "next/navigation";
import Image from "next/image";
import { assets } from "@/assets/assets";

const RegSuccessful = () => {

  const router = useRouter();
  useEffect(() => {
    setTimeout(() => {
      router.push("/");
    }, 3200)
  },[]);
  return (
    <div className="relative w-full  m-0">
      <Image
        className="absolute top-0 right-[0%] sm:right-[18%] lg:w-[15%] md:w-[25%] sm:w-[25%] w-[38%]"
        src={assets.shape_5}
        alt="rectangle"
        width="200"
      />
      <motion.div
        className="absolute shape-mockup top-[15%] right-[10%] sm:right-[20%] jump d-lg-block"
        animate={{ y: [0, -40, 0] }} // Moves up and down
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
      >
        <Image
          src={assets.cherry_1}
          alt="shape"
          className="lg:w-[80px] md:w-[70px] sm:w-[60px] w-[60px]"
          width="80"
        />
      </motion.div>
      <div className="flex w-full h-screen px-4 md:px-15 justify-center items-center">
        <div className="w-full h-[90%] flex flex-col justify-center items-center bg-white rounded-4xl shadow-md">
          <div className="h-[70%] w-[30%] flex flex-col px-6 sm:px-14 gap-3 justify-center items-center">
            <div className="w-[100%] relative flex justify-center gap-4 mb-3">
             <Image src={assets.leaf2} className="absolute top-26" width="200" alt="Successful-registration" />
              <svg
                width="251"
                height="281"
                viewBox="0 0 251 281"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M5.32435 42.4151C5.32435 21.918 21.9405 5.30189 42.4376 5.30189H208.563C229.06 5.30189 245.677 21.918 245.677 42.4151V275.698H5.32435V42.4151Z"
                  stroke="url(#paint0_linear_575_6093)"
                  strokeWidth="10.6038"
                />
                <rect
                  opacity="0.45"
                  x="40.6699"
                  y="70.692"
                  width="167.893"
                  height="10.6038"
                  rx="3.53459"
                  fill="url(#paint1_linear_575_6093)"
                />
                <rect
                  opacity="0.3"
                  x="40.6699"
                  y="91.8993"
                  width="167.893"
                  height="10.6038"
                  rx="3.53459"
                  fill="url(#paint2_linear_575_6093)"
                />
                <rect
                  opacity="0.2"
                  x="40.6699"
                  y="113.107"
                  width="167.893"
                  height="10.6038"
                  rx="3.53459"
                  fill="url(#paint3_linear_575_6093)"
                />
                <defs>
                  <linearGradient
                    id="paint0_linear_575_6093"
                    x1="125.5"
                    y1="-55.6698"
                    x2="125.5"
                    y2="257.142"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop stopColor="#71DA00" />
                    <stop offset="1" stopColor="#291E43" stop-opacity="0" />
                  </linearGradient>
                  <linearGradient
                    id="paint1_linear_575_6093"
                    x1="106.944"
                    y1="38.8807"
                    x2="122.126"
                    y2="142.295"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop offset="0.0001" stopColor="#71DA00" />
                    <stop offset="1" stopColor="#291E43" stop-opacity="0" />
                  </linearGradient>
                  <linearGradient
                    id="paint2_linear_575_6093"
                    x1="79.5504"
                    y1="53.1955"
                    x2="105.731"
                    y2="161.989"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop offset="0.0001" stopColor="#71DA00" />
                    <stop offset="1" stopColor="#291E43" stop-opacity="0" />
                  </linearGradient>
                  <linearGradient
                    id="paint3_linear_575_6093"
                    x1="76.8995"
                    y1="89.7786"
                    x2="90.8773"
                    y2="157.963"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop offset="0.0001" stopColor="#71DA00" />
                    <stop offset="1" stopColor="#291E43" stop-opacity="0" />
                  </linearGradient>
                </defs>
              </svg>
            </div>
            <h1 className="text-[32px] sm:text-[46px] font-[500] text-center leading-11 sm:leading-13">
              You’ve Successfully Registered!
            </h1>
           
          </div>
        </div>
      </div>
    </div>
  );
};

export default RegSuccessful;
