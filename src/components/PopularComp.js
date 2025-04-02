"use client"
import React, { useEffect } from "react";
import { FaCartShopping } from "react-icons/fa6";
import { CiHeart } from "react-icons/ci";
import Glide from "@glidejs/glide";
import { motion } from "framer-motion";
import Image from "next/image";
import { assets } from "@/assets/assets";
import { productData } from "@/menuData";

const PopularComp = () => {
  useEffect(() => {
    const slider = new Glide(".glide-04", {
      type: "carousel",
      focusAt: 0,
      perView: 4,
      autoplay: 3000,
      animationDuration: 700,
      gap: 24,
      classNames: {
        nav: {
          active: "[&>*]:bg-wuiSlate-700",
        },
      },
      breakpoints: {
        1600: {
          perView: 3,
        },
        1024: {
          perView: 2,
        },
        787: {
          perView: 2,
        },
        640: {
          perView: 1,
        },
      },
    }).mount();

    return () => {
      slider.destroy();
    };
  }, []);

  return (
    <>
      <div className="relative mt-10">
        <motion.div
          className="absolute shape-mockup lg:top-[10%] md:top-[10%] sm:top-[10%] top-[-2%] left-[3%] jump d-lg-block"
          
          animate={{ y: [0, -40, 0] }} // Moves up and down
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
        >
          <Image src={assets.cherry_1} alt="shape" className="lg:w-[80px] md:w-[70px] sm:w-[60px] w-[60px]"/>
        </motion.div>
        <div className="2xl:w-[1500px] lx:w-[1280px] lg:w-[1080px] md:w-[786px] sm:w-[600px] sm:mx-auto mx-4 my-14">
          <div className="text-center mb-5">
            <p className="text-[18px] font-[500 montserrat">Our Most</p>
            <h2 className="text-[34px] font-[900]">Popular Product </h2>
          </div>

          {/*<!-- Component: Carousel with indicators & controls inside --> */}
          <div className="glide-04 relative w-[80%] mx-auto">
            {/*    <!-- Slides --> */}
            <div className="overflow-hidden" data-glide-el="track">
              <ul className="whitespace-wrap flex-wrap [backface-visibility: hidden] [transform-style: preserve-3d] [touch-action: pan-Y] [will-change: transform] relative flex w-full overflow-hidden p-0">
                {productData.map((data, index) => (
                  <li
                    className="border-[1px] flex flex-col justify-between  bg-white border-gray-300 p-2 rounded-[6px]"
                    key={index}
                  >
                    <Image
                      src={data.image}
                      alt={data.name}
                      width={300}
                      height={300}
                      className="rounded-[6px]"
                    />
                    <div className="mt-2 px-3">
                      <h2 className="text-[16px] font-[500 montserrat">
                        {data.name}
                      </h2>
                      <p className="text-[12px] font-[400] text-gray-400 montserrat">
                        {data.desc}
                      </p>
                      <h3 className="font-[600] montserrat">{data.price}</h3>
                    </div>
                    <div className="flex items-centeer justify-between w-full mt-3 gap-3 montserrat px-3 pb-2">
                      <button className="flex justify-center items-center gap-1 cursor-pointer w-4/5 transition-all bg-red-600 text-white py-2 px-5 rounded-[20px] items-center text-[13px]">
                        <span>
                          <FaCartShopping />
                        </span>
                        <span className="pl-1">
                        Add To Cart
                        </span>
                      </button>
                      <button className="border-[1px] px-6 w-1/5 cursor-pointer border-red-500 transition-all hover:bg-red-500 hover:text-white w-[30px] flex justify-center items-center text-center rounded-[20px]">
                        <span>
                          <CiHeart />
                        </span>
                      </button>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
            {/*    <!-- Controls --> */}
            <div
              className="absolute top-1/2 flex h-0 w-full items-center  px-4 "
              data-glide-el="controls"
            >
              <button
                className="absolute lg:left-[-5%] md:left-[-8%] sm:left-[-9%] left-[-14%] cursor-pointer hover:bg-gray-200 inline-flex h-8 w-8 items-center justify-center rounded-full border border-slate-700 bg-white/20 text-slate-700 transition duration-300 hover:border-slate-900 hover:text-slate-900 focus-visible:outline-none md:h-10 md:w-10 lg:h-12 lg:w-12"
                data-glide-dir="<"
                aria-label="prev slide"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  className="h-5 w-5"
                >
                  <title>prev slide</title>
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M6.75 15.75L3 12m0 0l3.75-3.75M3 12h18"
                  />
                </svg>
              </button>
              <button
                className="absolute lg:right-[-5%] md:right-[-8%] sm:right-[-9%] right-[-14%] cursor-pointer hover:bg-gray-200 inline-flex h-8 w-8 items-center justify-center rounded-full border border-slate-700 bg-white/20 text-slate-700 transition duration-300 hover:border-slate-900 hover:text-slate-900 focus-visible:outline-none md:h-10 md:w-10 lg:h-12 lg:w-12"
                data-glide-dir=">"
                aria-label="next slide"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  className="h-5 w-5"
                >
                  <title>next slide</title>
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3"
                  />
                </svg>
              </button>
            </div>
            {/*    <!-- Indicators --> */}
            <div
              className="absolute bottom-[-50px] flex w-full items-center justify-center"
              data-glide-el="controls[nav]"
            >
              <button
                className="group p-2"
                data-glide-dir="=0"
                aria-label="goto slide 1"
              >
                <span className="block h-2 w-2 rounded-full bg-white/20 ring-1 ring-slate-700 transition-colors duration-300 focus:outline-none"></span>
              </button>
              <button
                className="group p-2"
                data-glide-dir="=1"
                aria-label="goto slide 2"
              >
                <span className="block h-2 w-2 rounded-full bg-white/20 ring-1 ring-slate-700 transition-colors duration-300 focus:outline-none"></span>
              </button>
              <button
                className="group p-2"
                data-glide-dir="=2"
                aria-label="goto slide 3"
              >
                <span className="block h-2 w-2 rounded-full bg-white/20 ring-1 ring-slate-700 transition-colors duration-300 focus:outline-none"></span>
              </button>
              <button
                className="group p-2"
                data-glide-dir="=3"
                aria-label="goto slide 4"
              >
                <span className="block h-2 w-2 rounded-full bg-white/20 ring-1 ring-slate-700 transition-colors duration-300 focus:outline-none"></span>
              </button>
            </div>
          </div>
          {/*<!-- End Carousel with indicators & controls inside --> */}
          <motion.div
          className="absolute shape-mockup jump d-lg-block sm:bottom-[-2%] sm:right-[3%] bottom-[-6%] right-[1%]"
          
          animate={{ y: [0, -40, 0] }} // Moves up and down
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
        >
          <Image src={assets.shape_5} alt="shape" className="sm:w-[80px] w-[50px]" />
        </motion.div>
        </div>
      </div>
    </>
  );
};



export default PopularComp;
