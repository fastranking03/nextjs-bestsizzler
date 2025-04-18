"use client"
import React, { useEffect } from "react"
import Glide from "@glidejs/glide"
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import ResponsiveHeader from "@/components/ResponsiveHeader";
import {
  Pagination,
  Scrollbar,
  A11y,
  Autoplay,
} from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";

const TodaysSpecial = () => {
    useEffect(() => {
      const slider = new Glide(".glide-02", {
        type: "slider",
        focusAt: "center",
        perView: 1,
        autoplay: 3500,
        animationDuration: 700,
        gap: 0,
        classes: {
          nav: {
            active: "[&>*]:bg-red-500",
          },
        },
      }).mount()
  
      return () => {
        slider.destroy()
      }
    }, [])

   
  return (
      <>
          <Header />
          <ResponsiveHeader />
          {/* <div
            className="h-[300px] mb-4 bg-cover bg-center flex justify-center items-center w-full overflow-hidden"
            style={{
              backgroundImage:
                "url('https://res.cloudinary.com/dj7wogsju/image/upload/v1741711262/Group_238820_fsqqzy.png')",
            }}
            id="Hero"
          >
            <h2 className="text-center text-white text-[80px] font-[400]">MENU</h2>
          </div> */}
    
    <div className='relative'>
        <img src="https://res.cloudinary.com/dj7wogsju/image/upload/v1742561837/Mask_group_1_xnsyyu.png" alt="" />

        <h1 className='absolute text-white text-[48px] font-[600] top-20 left-120'>Today's <br className='text-[64px]'/>Special</h1>
    </div>
          <div className="xl:w-[1280px] lg:w-[1080px] md:w-[786px] sm:w-[600px] sm:mx-auto mx-4">
            <div className="grid sm:grid-cols-4 grid-cols-1 gap-5 sm:mt-20 my-10 sm:my-0">
            <div className="bg-white p-3 rounded-[12px] border-[1px] border-[#E3E3E3] hover:border-[#DA0025] ">
          <div className="relative w-full glide-02">
        {/*    <!-- Slides --> */}
        <div className="overflow-hidden" data-glide-el="track">
        <ul className="whitespace-no-wrap flex-no-wrap [backface-visibility: hidden] [transform-style: preserve-3d] [touch-action: pan-Y] [will-change: transform] relative flex w-full overflow-hidden p-0">
            <li>
              <img
                src="https://res.cloudinary.com/dj7wogsju/image/upload/v1742378693/Mask_group_d848ot.png"
                className="w-full h-[176px] rounded-[6px] m-auto"
              />
            </li>
            <li>
              <img
                src="https://res.cloudinary.com/dj7wogsju/image/upload/v1741787554/chef-presenting-a-tray-of-fresh-veggie-wraps-2024-07-08-20-56-15-utc_2_cfj2tm.png"
                className="w-full h-[176px] rounded-[6px] m-auto"
              />
            </li>
            <li>
              <img
                src="https://res.cloudinary.com/dj7wogsju/image/upload/v1742635525/Rectangle_775_1_oq8rxo.png"
                className="w-full h-[176px] rounded-[6px] m-auto"
              />
            </li>
            <li>
              <img
                src="https://res.cloudinary.com/dj7wogsju/image/upload/v1742378693/Mask_group_d848ot.png"
                className="w-full h-[176px] rounded-[6px] m-auto"
              />
            </li>
            <li>
              <img
                src="https://res.cloudinary.com/dj7wogsju/image/upload/v1741787554/chef-presenting-a-tray-of-fresh-veggie-wraps-2024-07-08-20-56-15-utc_2_cfj2tm.png"
                className="w-full h-[176px] rounded-[6px] m-auto"
              />
            </li>
          </ul>
        </div>
        {/*    <!-- Indicators --> */}
        <div
          className="absolute bottom-0 flex items-center justify-center w-full gap-2"
          data-glide-el="controls[nav]"
        >
          <button
            className="p-4 group"
            data-glide-dir="=0"
            aria-label="goto slide 1"
          >
            <span className="block w-2 h-2 transition-colors duration-300 rounded-full bg-white/20 ring-1 ring-slate-700 focus:outline-none"></span>
          </button>
          <button
            className="p-4 group"
            data-glide-dir="=1"
            aria-label="goto slide 2"
          >
            <span className="block w-2 h-2 transition-colors duration-300 rounded-full bg-white/20 ring-1 ring-slate-700 focus:outline-none"></span>
          </button>
          <button
            className="p-4 group"
            data-glide-dir="=2"
            aria-label="goto slide 3"
          >
            <span className="block w-2 h-2 transition-colors duration-300 rounded-full bg-white/20 ring-1 ring-slate-700 focus:outline-none"></span>
          </button>
          <button
            className="p-4 group"
            data-glide-dir="=3"
            aria-label="goto slide 4"
          >
            <span className="block w-2 h-2 transition-colors duration-300 rounded-full bg-white/20 ring-1 ring-slate-700 focus:outline-none"></span>
          </button>
        </div>
      </div>
            <div className="mt-4">
              <div className="flex justify-between items-center">
                <p className="sm:text-[20px] font-[600]">
                  Chicken Wraps Recipe
                </p>
                <p className="text-[16px] font-[600] flex gap-2 items-center">
                  <svg
                    width="16"
                    height="16"
                    viewBox="0 0 16 16"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M9.75174 1.25981L10.9648 3.84981C11.0677 4.06786 11.2198 4.25644 11.4078 4.39929C11.5958 4.54215 11.8142 4.63498 12.0442 4.66981L14.7664 5.07981C15.0311 5.12005 15.2798 5.2371 15.4843 5.41769C15.6888 5.59828 15.8409 5.83519 15.9234 6.10162C16.0059 6.36805 16.0155 6.65334 15.9512 6.92519C15.8868 7.19703 15.751 7.44459 15.5592 7.63981L13.5915 9.63981C13.4199 9.81246 13.2924 10.0274 13.2206 10.265C13.1489 10.5026 13.1352 10.7552 13.1808 10.9998L13.6393 13.8398C13.6834 14.1147 13.6535 14.397 13.5529 14.6551C13.4522 14.9132 13.2849 15.1368 13.0697 15.3009C12.8544 15.465 12.5998 15.563 12.3343 15.584C12.0688 15.605 11.8029 15.5482 11.5666 15.4198L9.13087 14.0598C8.92454 13.9468 8.69513 13.8878 8.46225 13.8878C8.22938 13.8878 7.99997 13.9468 7.79363 14.0598L5.35794 15.3998C5.12159 15.5282 4.85575 15.585 4.59025 15.564C4.32475 15.543 4.07009 15.445 3.85484 15.2809C3.63959 15.1168 3.47227 14.8932 3.37166 14.6351C3.27104 14.377 3.24111 14.0947 3.28522 13.8198L3.7437 10.9998C3.78435 10.7599 3.76816 10.5131 3.69655 10.2813C3.62494 10.0494 3.50011 9.83943 3.33298 9.66981L1.36532 7.66981C1.16487 7.47594 1.02148 7.22618 0.951999 6.9499C0.882522 6.67361 0.889854 6.3823 0.973133 6.11024C1.05641 5.83817 1.21218 5.59666 1.4221 5.41411C1.63202 5.23157 1.88737 5.11559 2.15812 5.07981L4.88036 4.66981C5.11029 4.63498 5.32868 4.54215 5.51671 4.39929C5.70474 4.25644 5.85678 4.06786 5.9597 3.84981L7.17277 1.25981C7.29267 1.0093 7.47679 0.798652 7.70452 0.651443C7.93225 0.504235 8.19461 0.42627 8.46225 0.42627C8.7299 0.42627 8.99226 0.504235 9.21999 0.651443C9.44772 0.798652 9.63184 1.0093 9.75174 1.25981Z"
                      fill="#F7B32B"
                    />
                  </svg>
                  4.2
                </p>
              </div>

              <p className="mt-2 text-[14px] font-[400] text-[#535353]">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry.
              </p>

              <p className="font-[600] sm:mt-5 mt-2">₤50.00</p>

              <div className="flex items-center justify-between sm:gap-3 sm:mt-6 mt-3">
                <button className="cursor-pointer text-white flex gap-2 items-center bg-[#DA0025] p-2 justify-center rounded-full w-[100%]">
                  <svg
                    width="20"
                    height="20"
                    viewBox="0 0 20 20"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M18.1848 6.19251C18.1082 6.08174 18.0058 5.9912 17.8865 5.92864C17.7672 5.86609 17.6345 5.83339 17.4998 5.83334H6.11067L5.149 3.52501C5.02328 3.22077 4.80985 2.96082 4.5359 2.77829C4.26195 2.59575 3.93987 2.49888 3.61067 2.50001H1.6665V4.16668H3.61067L7.564 13.6542C7.62733 13.806 7.73415 13.9356 7.87102 14.0268C8.0079 14.118 8.1687 14.1667 8.33317 14.1667H14.9998C15.3473 14.1667 15.6582 13.9508 15.7807 13.6267L18.2807 6.96001C18.3279 6.83386 18.3439 6.69814 18.3272 6.56447C18.3105 6.4308 18.2617 6.30317 18.1848 6.19251Z"
                      fill="white"
                    />
                    <path
                      d="M8.75 17.5C9.44036 17.5 10 16.9404 10 16.25C10 15.5596 9.44036 15 8.75 15C8.05964 15 7.5 15.5596 7.5 16.25C7.5 16.9404 8.05964 17.5 8.75 17.5Z"
                      fill="white"
                    />
                    <path
                      d="M14.5835 17.5C15.2739 17.5 15.8335 16.9404 15.8335 16.25C15.8335 15.5596 15.2739 15 14.5835 15C13.8931 15 13.3335 15.5596 13.3335 16.25C13.3335 16.9404 13.8931 17.5 14.5835 17.5Z"
                      fill="white"
                    />
                  </svg>
                  Add to Cart
                </button>
              </div>
            </div>
          </div>
    
              <div className="bg-white p-3 rounded-[12px] border-[1px] border-[#E3E3E3] hover:border-[#DA0025] ">
                <img
                  className="w-full"
                  src="https://res.cloudinary.com/dj7wogsju/image/upload/v1742378693/Mask_group_d848ot.png"
                  alt=""
                />
                <div className="mt-4">
                  <div className="flex justify-between items-center">
                    <p className="sm:text-[20px] font-[600]">
                      Chicken Wraps Recipe
                    </p>
                    <p className="text-[16px] font-[600] flex gap-2 items-center">
                      <svg
                        width="16"
                        height="16"
                        viewBox="0 0 16 16"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M9.75174 1.25981L10.9648 3.84981C11.0677 4.06786 11.2198 4.25644 11.4078 4.39929C11.5958 4.54215 11.8142 4.63498 12.0442 4.66981L14.7664 5.07981C15.0311 5.12005 15.2798 5.2371 15.4843 5.41769C15.6888 5.59828 15.8409 5.83519 15.9234 6.10162C16.0059 6.36805 16.0155 6.65334 15.9512 6.92519C15.8868 7.19703 15.751 7.44459 15.5592 7.63981L13.5915 9.63981C13.4199 9.81246 13.2924 10.0274 13.2206 10.265C13.1489 10.5026 13.1352 10.7552 13.1808 10.9998L13.6393 13.8398C13.6834 14.1147 13.6535 14.397 13.5529 14.6551C13.4522 14.9132 13.2849 15.1368 13.0697 15.3009C12.8544 15.465 12.5998 15.563 12.3343 15.584C12.0688 15.605 11.8029 15.5482 11.5666 15.4198L9.13087 14.0598C8.92454 13.9468 8.69513 13.8878 8.46225 13.8878C8.22938 13.8878 7.99997 13.9468 7.79363 14.0598L5.35794 15.3998C5.12159 15.5282 4.85575 15.585 4.59025 15.564C4.32475 15.543 4.07009 15.445 3.85484 15.2809C3.63959 15.1168 3.47227 14.8932 3.37166 14.6351C3.27104 14.377 3.24111 14.0947 3.28522 13.8198L3.7437 10.9998C3.78435 10.7599 3.76816 10.5131 3.69655 10.2813C3.62494 10.0494 3.50011 9.83943 3.33298 9.66981L1.36532 7.66981C1.16487 7.47594 1.02148 7.22618 0.951999 6.9499C0.882522 6.67361 0.889854 6.3823 0.973133 6.11024C1.05641 5.83817 1.21218 5.59666 1.4221 5.41411C1.63202 5.23157 1.88737 5.11559 2.15812 5.07981L4.88036 4.66981C5.11029 4.63498 5.32868 4.54215 5.51671 4.39929C5.70474 4.25644 5.85678 4.06786 5.9597 3.84981L7.17277 1.25981C7.29267 1.0093 7.47679 0.798652 7.70452 0.651443C7.93225 0.504235 8.19461 0.42627 8.46225 0.42627C8.7299 0.42627 8.99226 0.504235 9.21999 0.651443C9.44772 0.798652 9.63184 1.0093 9.75174 1.25981Z"
                          fill="#F7B32B"
                        />
                      </svg>
                      4.2
                    </p>
                  </div>
    
                  <p className="mt-2 text-[14px] font-[400] text-[#535353]">
                    Lorem Ipsum is simply dummy text of the printing and typesetting
                    industry.
                  </p>
    
                  <p className="font-[600] sm:mt-5 mt-2">₤50.00</p>
    
                  <div className="flex items-center justify-between sm:gap-3 sm:mt-6 mt-3">
                    <button className="cursor-pointer text-white flex gap-2 items-center bg-[#DA0025] p-2 justify-center rounded-full w-[100%]">
                      <svg
                        width="20"
                        height="20"
                        viewBox="0 0 20 20"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M18.1848 6.19251C18.1082 6.08174 18.0058 5.9912 17.8865 5.92864C17.7672 5.86609 17.6345 5.83339 17.4998 5.83334H6.11067L5.149 3.52501C5.02328 3.22077 4.80985 2.96082 4.5359 2.77829C4.26195 2.59575 3.93987 2.49888 3.61067 2.50001H1.6665V4.16668H3.61067L7.564 13.6542C7.62733 13.806 7.73415 13.9356 7.87102 14.0268C8.0079 14.118 8.1687 14.1667 8.33317 14.1667H14.9998C15.3473 14.1667 15.6582 13.9508 15.7807 13.6267L18.2807 6.96001C18.3279 6.83386 18.3439 6.69814 18.3272 6.56447C18.3105 6.4308 18.2617 6.30317 18.1848 6.19251Z"
                          fill="white"
                        />
                        <path
                          d="M8.75 17.5C9.44036 17.5 10 16.9404 10 16.25C10 15.5596 9.44036 15 8.75 15C8.05964 15 7.5 15.5596 7.5 16.25C7.5 16.9404 8.05964 17.5 8.75 17.5Z"
                          fill="white"
                        />
                        <path
                          d="M14.5835 17.5C15.2739 17.5 15.8335 16.9404 15.8335 16.25C15.8335 15.5596 15.2739 15 14.5835 15C13.8931 15 13.3335 15.5596 13.3335 16.25C13.3335 16.9404 13.8931 17.5 14.5835 17.5Z"
                          fill="white"
                        />
                      </svg>
                      Add to Cart
                    </button>
                  </div>
                </div>
              </div>
    
              <div className="bg-white p-3 rounded-[12px] border-[1px] border-[#E3E3E3] hover:border-[#DA0025] ">
                <img
                  className="w-full"
                  src="https://res.cloudinary.com/dj7wogsju/image/upload/v1742378693/Mask_group_d848ot.png"
                  alt=""
                />
                <div className="mt-4">
                  <div className="flex justify-between items-center">
                    <p className="sm:text-[20px] font-[600]">
                      Chicken Wraps Recipe
                    </p>
                    <p className="text-[16px] font-[600] flex gap-2 items-center">
                      <svg
                        width="16"
                        height="16"
                        viewBox="0 0 16 16"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M9.75174 1.25981L10.9648 3.84981C11.0677 4.06786 11.2198 4.25644 11.4078 4.39929C11.5958 4.54215 11.8142 4.63498 12.0442 4.66981L14.7664 5.07981C15.0311 5.12005 15.2798 5.2371 15.4843 5.41769C15.6888 5.59828 15.8409 5.83519 15.9234 6.10162C16.0059 6.36805 16.0155 6.65334 15.9512 6.92519C15.8868 7.19703 15.751 7.44459 15.5592 7.63981L13.5915 9.63981C13.4199 9.81246 13.2924 10.0274 13.2206 10.265C13.1489 10.5026 13.1352 10.7552 13.1808 10.9998L13.6393 13.8398C13.6834 14.1147 13.6535 14.397 13.5529 14.6551C13.4522 14.9132 13.2849 15.1368 13.0697 15.3009C12.8544 15.465 12.5998 15.563 12.3343 15.584C12.0688 15.605 11.8029 15.5482 11.5666 15.4198L9.13087 14.0598C8.92454 13.9468 8.69513 13.8878 8.46225 13.8878C8.22938 13.8878 7.99997 13.9468 7.79363 14.0598L5.35794 15.3998C5.12159 15.5282 4.85575 15.585 4.59025 15.564C4.32475 15.543 4.07009 15.445 3.85484 15.2809C3.63959 15.1168 3.47227 14.8932 3.37166 14.6351C3.27104 14.377 3.24111 14.0947 3.28522 13.8198L3.7437 10.9998C3.78435 10.7599 3.76816 10.5131 3.69655 10.2813C3.62494 10.0494 3.50011 9.83943 3.33298 9.66981L1.36532 7.66981C1.16487 7.47594 1.02148 7.22618 0.951999 6.9499C0.882522 6.67361 0.889854 6.3823 0.973133 6.11024C1.05641 5.83817 1.21218 5.59666 1.4221 5.41411C1.63202 5.23157 1.88737 5.11559 2.15812 5.07981L4.88036 4.66981C5.11029 4.63498 5.32868 4.54215 5.51671 4.39929C5.70474 4.25644 5.85678 4.06786 5.9597 3.84981L7.17277 1.25981C7.29267 1.0093 7.47679 0.798652 7.70452 0.651443C7.93225 0.504235 8.19461 0.42627 8.46225 0.42627C8.7299 0.42627 8.99226 0.504235 9.21999 0.651443C9.44772 0.798652 9.63184 1.0093 9.75174 1.25981Z"
                          fill="#F7B32B"
                        />
                      </svg>
                      4.2
                    </p>
                  </div>
    
                  <p className="mt-2 text-[14px] font-[400] text-[#535353]">
                    Lorem Ipsum is simply dummy text of the printing and typesetting
                    industry.
                  </p>
    
                  <p className="font-[600] sm:mt-5 mt-2">₤50.00</p>
    
                  <div className="flex items-center justify-between sm:gap-3 sm:mt-6 mt-3">
                    <button className="cursor-pointer text-white flex gap-2 items-center bg-[#DA0025] p-2 justify-center rounded-full w-[100%]">
                      <svg
                        width="20"
                        height="20"
                        viewBox="0 0 20 20"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M18.1848 6.19251C18.1082 6.08174 18.0058 5.9912 17.8865 5.92864C17.7672 5.86609 17.6345 5.83339 17.4998 5.83334H6.11067L5.149 3.52501C5.02328 3.22077 4.80985 2.96082 4.5359 2.77829C4.26195 2.59575 3.93987 2.49888 3.61067 2.50001H1.6665V4.16668H3.61067L7.564 13.6542C7.62733 13.806 7.73415 13.9356 7.87102 14.0268C8.0079 14.118 8.1687 14.1667 8.33317 14.1667H14.9998C15.3473 14.1667 15.6582 13.9508 15.7807 13.6267L18.2807 6.96001C18.3279 6.83386 18.3439 6.69814 18.3272 6.56447C18.3105 6.4308 18.2617 6.30317 18.1848 6.19251Z"
                          fill="white"
                        />
                        <path
                          d="M8.75 17.5C9.44036 17.5 10 16.9404 10 16.25C10 15.5596 9.44036 15 8.75 15C8.05964 15 7.5 15.5596 7.5 16.25C7.5 16.9404 8.05964 17.5 8.75 17.5Z"
                          fill="white"
                        />
                        <path
                          d="M14.5835 17.5C15.2739 17.5 15.8335 16.9404 15.8335 16.25C15.8335 15.5596 15.2739 15 14.5835 15C13.8931 15 13.3335 15.5596 13.3335 16.25C13.3335 16.9404 13.8931 17.5 14.5835 17.5Z"
                          fill="white"
                        />
                      </svg>
                      Add to Cart
                    </button>
                  </div>
                </div>
              </div>
    
              <div className="bg-white p-3 rounded-[12px] border-[1px] border-[#E3E3E3] hover:border-[#DA0025] ">
                <img
                  className="w-full"
                  src="https://res.cloudinary.com/dj7wogsju/image/upload/v1742378693/Mask_group_d848ot.png"
                  alt=""
                />
                <div className="mt-4">
                  <div className="flex justify-between items-center">
                    <p className="sm:text-[20px] font-[600]">
                      Chicken Wraps Recipe
                    </p>
                    <p className="text-[16px] font-[600] flex gap-2 items-center">
                      <svg
                        width="16"
                        height="16"
                        viewBox="0 0 16 16"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M9.75174 1.25981L10.9648 3.84981C11.0677 4.06786 11.2198 4.25644 11.4078 4.39929C11.5958 4.54215 11.8142 4.63498 12.0442 4.66981L14.7664 5.07981C15.0311 5.12005 15.2798 5.2371 15.4843 5.41769C15.6888 5.59828 15.8409 5.83519 15.9234 6.10162C16.0059 6.36805 16.0155 6.65334 15.9512 6.92519C15.8868 7.19703 15.751 7.44459 15.5592 7.63981L13.5915 9.63981C13.4199 9.81246 13.2924 10.0274 13.2206 10.265C13.1489 10.5026 13.1352 10.7552 13.1808 10.9998L13.6393 13.8398C13.6834 14.1147 13.6535 14.397 13.5529 14.6551C13.4522 14.9132 13.2849 15.1368 13.0697 15.3009C12.8544 15.465 12.5998 15.563 12.3343 15.584C12.0688 15.605 11.8029 15.5482 11.5666 15.4198L9.13087 14.0598C8.92454 13.9468 8.69513 13.8878 8.46225 13.8878C8.22938 13.8878 7.99997 13.9468 7.79363 14.0598L5.35794 15.3998C5.12159 15.5282 4.85575 15.585 4.59025 15.564C4.32475 15.543 4.07009 15.445 3.85484 15.2809C3.63959 15.1168 3.47227 14.8932 3.37166 14.6351C3.27104 14.377 3.24111 14.0947 3.28522 13.8198L3.7437 10.9998C3.78435 10.7599 3.76816 10.5131 3.69655 10.2813C3.62494 10.0494 3.50011 9.83943 3.33298 9.66981L1.36532 7.66981C1.16487 7.47594 1.02148 7.22618 0.951999 6.9499C0.882522 6.67361 0.889854 6.3823 0.973133 6.11024C1.05641 5.83817 1.21218 5.59666 1.4221 5.41411C1.63202 5.23157 1.88737 5.11559 2.15812 5.07981L4.88036 4.66981C5.11029 4.63498 5.32868 4.54215 5.51671 4.39929C5.70474 4.25644 5.85678 4.06786 5.9597 3.84981L7.17277 1.25981C7.29267 1.0093 7.47679 0.798652 7.70452 0.651443C7.93225 0.504235 8.19461 0.42627 8.46225 0.42627C8.7299 0.42627 8.99226 0.504235 9.21999 0.651443C9.44772 0.798652 9.63184 1.0093 9.75174 1.25981Z"
                          fill="#F7B32B"
                        />
                      </svg>
                      4.2
                    </p>
                  </div>
    
                  <p className="mt-2 text-[14px] font-[400] text-[#535353]">
                    Lorem Ipsum is simply dummy text of the printing and typesetting
                    industry.
                  </p>
    
                  <p className="font-[600] sm:mt-5 mt-2">₤50.00</p>
    
                  <div className="flex items-center justify-between sm:gap-3 sm:mt-6 mt-3">
                    <button className="cursor-pointer text-white flex gap-2 items-center bg-[#DA0025] p-2 justify-center rounded-full w-[100%]">
                      <svg
                        width="20"
                        height="20"
                        viewBox="0 0 20 20"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M18.1848 6.19251C18.1082 6.08174 18.0058 5.9912 17.8865 5.92864C17.7672 5.86609 17.6345 5.83339 17.4998 5.83334H6.11067L5.149 3.52501C5.02328 3.22077 4.80985 2.96082 4.5359 2.77829C4.26195 2.59575 3.93987 2.49888 3.61067 2.50001H1.6665V4.16668H3.61067L7.564 13.6542C7.62733 13.806 7.73415 13.9356 7.87102 14.0268C8.0079 14.118 8.1687 14.1667 8.33317 14.1667H14.9998C15.3473 14.1667 15.6582 13.9508 15.7807 13.6267L18.2807 6.96001C18.3279 6.83386 18.3439 6.69814 18.3272 6.56447C18.3105 6.4308 18.2617 6.30317 18.1848 6.19251Z"
                          fill="white"
                        />
                        <path
                          d="M8.75 17.5C9.44036 17.5 10 16.9404 10 16.25C10 15.5596 9.44036 15 8.75 15C8.05964 15 7.5 15.5596 7.5 16.25C7.5 16.9404 8.05964 17.5 8.75 17.5Z"
                          fill="white"
                        />
                        <path
                          d="M14.5835 17.5C15.2739 17.5 15.8335 16.9404 15.8335 16.25C15.8335 15.5596 15.2739 15 14.5835 15C13.8931 15 13.3335 15.5596 13.3335 16.25C13.3335 16.9404 13.8931 17.5 14.5835 17.5Z"
                          fill="white"
                        />
                      </svg>
                      Add to Cart
                    </button>
                  </div>
                </div>
              </div>
    
              <div className="bg-white p-3 rounded-[12px] border-[1px] border-[#E3E3E3] hover:border-[#DA0025] ">
                <img
                  className="w-full"
                  src="https://res.cloudinary.com/dj7wogsju/image/upload/v1742378693/Mask_group_d848ot.png"
                  alt=""
                />
                <div className="mt-4">
                  <div className="flex justify-between items-center">
                    <p className="sm:text-[20px] font-[600]">
                      Chicken Wraps Recipe
                    </p>
                    <p className="text-[16px] font-[600] flex gap-2 items-center">
                      <svg
                        width="16"
                        height="16"
                        viewBox="0 0 16 16"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M9.75174 1.25981L10.9648 3.84981C11.0677 4.06786 11.2198 4.25644 11.4078 4.39929C11.5958 4.54215 11.8142 4.63498 12.0442 4.66981L14.7664 5.07981C15.0311 5.12005 15.2798 5.2371 15.4843 5.41769C15.6888 5.59828 15.8409 5.83519 15.9234 6.10162C16.0059 6.36805 16.0155 6.65334 15.9512 6.92519C15.8868 7.19703 15.751 7.44459 15.5592 7.63981L13.5915 9.63981C13.4199 9.81246 13.2924 10.0274 13.2206 10.265C13.1489 10.5026 13.1352 10.7552 13.1808 10.9998L13.6393 13.8398C13.6834 14.1147 13.6535 14.397 13.5529 14.6551C13.4522 14.9132 13.2849 15.1368 13.0697 15.3009C12.8544 15.465 12.5998 15.563 12.3343 15.584C12.0688 15.605 11.8029 15.5482 11.5666 15.4198L9.13087 14.0598C8.92454 13.9468 8.69513 13.8878 8.46225 13.8878C8.22938 13.8878 7.99997 13.9468 7.79363 14.0598L5.35794 15.3998C5.12159 15.5282 4.85575 15.585 4.59025 15.564C4.32475 15.543 4.07009 15.445 3.85484 15.2809C3.63959 15.1168 3.47227 14.8932 3.37166 14.6351C3.27104 14.377 3.24111 14.0947 3.28522 13.8198L3.7437 10.9998C3.78435 10.7599 3.76816 10.5131 3.69655 10.2813C3.62494 10.0494 3.50011 9.83943 3.33298 9.66981L1.36532 7.66981C1.16487 7.47594 1.02148 7.22618 0.951999 6.9499C0.882522 6.67361 0.889854 6.3823 0.973133 6.11024C1.05641 5.83817 1.21218 5.59666 1.4221 5.41411C1.63202 5.23157 1.88737 5.11559 2.15812 5.07981L4.88036 4.66981C5.11029 4.63498 5.32868 4.54215 5.51671 4.39929C5.70474 4.25644 5.85678 4.06786 5.9597 3.84981L7.17277 1.25981C7.29267 1.0093 7.47679 0.798652 7.70452 0.651443C7.93225 0.504235 8.19461 0.42627 8.46225 0.42627C8.7299 0.42627 8.99226 0.504235 9.21999 0.651443C9.44772 0.798652 9.63184 1.0093 9.75174 1.25981Z"
                          fill="#F7B32B"
                        />
                      </svg>
                      4.2
                    </p>
                  </div>
    
                  <p className="mt-2 text-[14px] font-[400] text-[#535353]">
                    Lorem Ipsum is simply dummy text of the printing and typesetting
                    industry.
                  </p>
    
                  <p className="font-[600] sm:mt-5 mt-2">₤50.00</p>
    
                  <div className="flex items-center justify-between sm:gap-3 sm:mt-6 mt-3">
                    <button className="cursor-pointer text-white flex gap-2 items-center bg-[#DA0025] p-2 justify-center rounded-full w-[100%]">
                      <svg
                        width="20"
                        height="20"
                        viewBox="0 0 20 20"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M18.1848 6.19251C18.1082 6.08174 18.0058 5.9912 17.8865 5.92864C17.7672 5.86609 17.6345 5.83339 17.4998 5.83334H6.11067L5.149 3.52501C5.02328 3.22077 4.80985 2.96082 4.5359 2.77829C4.26195 2.59575 3.93987 2.49888 3.61067 2.50001H1.6665V4.16668H3.61067L7.564 13.6542C7.62733 13.806 7.73415 13.9356 7.87102 14.0268C8.0079 14.118 8.1687 14.1667 8.33317 14.1667H14.9998C15.3473 14.1667 15.6582 13.9508 15.7807 13.6267L18.2807 6.96001C18.3279 6.83386 18.3439 6.69814 18.3272 6.56447C18.3105 6.4308 18.2617 6.30317 18.1848 6.19251Z"
                          fill="white"
                        />
                        <path
                          d="M8.75 17.5C9.44036 17.5 10 16.9404 10 16.25C10 15.5596 9.44036 15 8.75 15C8.05964 15 7.5 15.5596 7.5 16.25C7.5 16.9404 8.05964 17.5 8.75 17.5Z"
                          fill="white"
                        />
                        <path
                          d="M14.5835 17.5C15.2739 17.5 15.8335 16.9404 15.8335 16.25C15.8335 15.5596 15.2739 15 14.5835 15C13.8931 15 13.3335 15.5596 13.3335 16.25C13.3335 16.9404 13.8931 17.5 14.5835 17.5Z"
                          fill="white"
                        />
                      </svg>
                      Add to Cart
                    </button>
                  </div>
                </div>
              </div>
    
              <div className="bg-white p-3 rounded-[12px] border-[1px] border-[#E3E3E3] hover:border-[#DA0025] ">
                <img
                  className="w-full"
                  src="https://res.cloudinary.com/dj7wogsju/image/upload/v1742378693/Mask_group_d848ot.png"
                  alt=""
                />
                <div className="mt-4">
                  <div className="flex justify-between items-center">
                    <p className="sm:text-[20px] font-[600]">
                      Chicken Wraps Recipe
                    </p>
                    <p className="text-[16px] font-[600] flex gap-2 items-center">
                      <svg
                        width="16"
                        height="16"
                        viewBox="0 0 16 16"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M9.75174 1.25981L10.9648 3.84981C11.0677 4.06786 11.2198 4.25644 11.4078 4.39929C11.5958 4.54215 11.8142 4.63498 12.0442 4.66981L14.7664 5.07981C15.0311 5.12005 15.2798 5.2371 15.4843 5.41769C15.6888 5.59828 15.8409 5.83519 15.9234 6.10162C16.0059 6.36805 16.0155 6.65334 15.9512 6.92519C15.8868 7.19703 15.751 7.44459 15.5592 7.63981L13.5915 9.63981C13.4199 9.81246 13.2924 10.0274 13.2206 10.265C13.1489 10.5026 13.1352 10.7552 13.1808 10.9998L13.6393 13.8398C13.6834 14.1147 13.6535 14.397 13.5529 14.6551C13.4522 14.9132 13.2849 15.1368 13.0697 15.3009C12.8544 15.465 12.5998 15.563 12.3343 15.584C12.0688 15.605 11.8029 15.5482 11.5666 15.4198L9.13087 14.0598C8.92454 13.9468 8.69513 13.8878 8.46225 13.8878C8.22938 13.8878 7.99997 13.9468 7.79363 14.0598L5.35794 15.3998C5.12159 15.5282 4.85575 15.585 4.59025 15.564C4.32475 15.543 4.07009 15.445 3.85484 15.2809C3.63959 15.1168 3.47227 14.8932 3.37166 14.6351C3.27104 14.377 3.24111 14.0947 3.28522 13.8198L3.7437 10.9998C3.78435 10.7599 3.76816 10.5131 3.69655 10.2813C3.62494 10.0494 3.50011 9.83943 3.33298 9.66981L1.36532 7.66981C1.16487 7.47594 1.02148 7.22618 0.951999 6.9499C0.882522 6.67361 0.889854 6.3823 0.973133 6.11024C1.05641 5.83817 1.21218 5.59666 1.4221 5.41411C1.63202 5.23157 1.88737 5.11559 2.15812 5.07981L4.88036 4.66981C5.11029 4.63498 5.32868 4.54215 5.51671 4.39929C5.70474 4.25644 5.85678 4.06786 5.9597 3.84981L7.17277 1.25981C7.29267 1.0093 7.47679 0.798652 7.70452 0.651443C7.93225 0.504235 8.19461 0.42627 8.46225 0.42627C8.7299 0.42627 8.99226 0.504235 9.21999 0.651443C9.44772 0.798652 9.63184 1.0093 9.75174 1.25981Z"
                          fill="#F7B32B"
                        />
                      </svg>
                      4.2
                    </p>
                  </div>
    
                  <p className="mt-2 text-[14px] font-[400] text-[#535353]">
                    Lorem Ipsum is simply dummy text of the printing and typesetting
                    industry.
                  </p>
    
                  <p className="font-[600] sm:mt-5 mt-2">₤50.00</p>
    
                  <div className="flex items-center justify-between sm:gap-3 sm:mt-6 mt-3">
                    <button className="cursor-pointer text-white flex gap-2 items-center bg-[#DA0025] p-2 justify-center rounded-full w-[100%]">
                      <svg
                        width="20"
                        height="20"
                        viewBox="0 0 20 20"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M18.1848 6.19251C18.1082 6.08174 18.0058 5.9912 17.8865 5.92864C17.7672 5.86609 17.6345 5.83339 17.4998 5.83334H6.11067L5.149 3.52501C5.02328 3.22077 4.80985 2.96082 4.5359 2.77829C4.26195 2.59575 3.93987 2.49888 3.61067 2.50001H1.6665V4.16668H3.61067L7.564 13.6542C7.62733 13.806 7.73415 13.9356 7.87102 14.0268C8.0079 14.118 8.1687 14.1667 8.33317 14.1667H14.9998C15.3473 14.1667 15.6582 13.9508 15.7807 13.6267L18.2807 6.96001C18.3279 6.83386 18.3439 6.69814 18.3272 6.56447C18.3105 6.4308 18.2617 6.30317 18.1848 6.19251Z"
                          fill="white"
                        />
                        <path
                          d="M8.75 17.5C9.44036 17.5 10 16.9404 10 16.25C10 15.5596 9.44036 15 8.75 15C8.05964 15 7.5 15.5596 7.5 16.25C7.5 16.9404 8.05964 17.5 8.75 17.5Z"
                          fill="white"
                        />
                        <path
                          d="M14.5835 17.5C15.2739 17.5 15.8335 16.9404 15.8335 16.25C15.8335 15.5596 15.2739 15 14.5835 15C13.8931 15 13.3335 15.5596 13.3335 16.25C13.3335 16.9404 13.8931 17.5 14.5835 17.5Z"
                          fill="white"
                        />
                      </svg>
                      Add to Cart
                    </button>
                  </div>
                </div>
              </div>
    
              <div className="bg-white p-3 rounded-[12px] border-[1px] border-[#E3E3E3] hover:border-[#DA0025] ">
                <img
                  className="w-full"
                  src="https://res.cloudinary.com/dj7wogsju/image/upload/v1742378693/Mask_group_d848ot.png"
                  alt=""
                />
                <div className="mt-4">
                  <div className="flex justify-between items-center">
                    <p className="sm:text-[20px] font-[600]">
                      Chicken Wraps Recipe
                    </p>
                    <p className="text-[16px] font-[600] flex gap-2 items-center">
                      <svg
                        width="16"
                        height="16"
                        viewBox="0 0 16 16"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M9.75174 1.25981L10.9648 3.84981C11.0677 4.06786 11.2198 4.25644 11.4078 4.39929C11.5958 4.54215 11.8142 4.63498 12.0442 4.66981L14.7664 5.07981C15.0311 5.12005 15.2798 5.2371 15.4843 5.41769C15.6888 5.59828 15.8409 5.83519 15.9234 6.10162C16.0059 6.36805 16.0155 6.65334 15.9512 6.92519C15.8868 7.19703 15.751 7.44459 15.5592 7.63981L13.5915 9.63981C13.4199 9.81246 13.2924 10.0274 13.2206 10.265C13.1489 10.5026 13.1352 10.7552 13.1808 10.9998L13.6393 13.8398C13.6834 14.1147 13.6535 14.397 13.5529 14.6551C13.4522 14.9132 13.2849 15.1368 13.0697 15.3009C12.8544 15.465 12.5998 15.563 12.3343 15.584C12.0688 15.605 11.8029 15.5482 11.5666 15.4198L9.13087 14.0598C8.92454 13.9468 8.69513 13.8878 8.46225 13.8878C8.22938 13.8878 7.99997 13.9468 7.79363 14.0598L5.35794 15.3998C5.12159 15.5282 4.85575 15.585 4.59025 15.564C4.32475 15.543 4.07009 15.445 3.85484 15.2809C3.63959 15.1168 3.47227 14.8932 3.37166 14.6351C3.27104 14.377 3.24111 14.0947 3.28522 13.8198L3.7437 10.9998C3.78435 10.7599 3.76816 10.5131 3.69655 10.2813C3.62494 10.0494 3.50011 9.83943 3.33298 9.66981L1.36532 7.66981C1.16487 7.47594 1.02148 7.22618 0.951999 6.9499C0.882522 6.67361 0.889854 6.3823 0.973133 6.11024C1.05641 5.83817 1.21218 5.59666 1.4221 5.41411C1.63202 5.23157 1.88737 5.11559 2.15812 5.07981L4.88036 4.66981C5.11029 4.63498 5.32868 4.54215 5.51671 4.39929C5.70474 4.25644 5.85678 4.06786 5.9597 3.84981L7.17277 1.25981C7.29267 1.0093 7.47679 0.798652 7.70452 0.651443C7.93225 0.504235 8.19461 0.42627 8.46225 0.42627C8.7299 0.42627 8.99226 0.504235 9.21999 0.651443C9.44772 0.798652 9.63184 1.0093 9.75174 1.25981Z"
                          fill="#F7B32B"
                        />
                      </svg>
                      4.2
                    </p>
                  </div>
    
                  <p className="mt-2 text-[14px] font-[400] text-[#535353]">
                    Lorem Ipsum is simply dummy text of the printing and typesetting
                    industry.
                  </p>
    
                  <p className="font-[600] sm:mt-5 mt-2">₤50.00</p>
    
                  <div className="flex items-center justify-between sm:gap-3 sm:mt-6 mt-3">
                    <button className="cursor-pointer text-white flex gap-2 items-center bg-[#DA0025] p-2 justify-center rounded-full w-[100%]">
                      <svg
                        width="20"
                        height="20"
                        viewBox="0 0 20 20"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M18.1848 6.19251C18.1082 6.08174 18.0058 5.9912 17.8865 5.92864C17.7672 5.86609 17.6345 5.83339 17.4998 5.83334H6.11067L5.149 3.52501C5.02328 3.22077 4.80985 2.96082 4.5359 2.77829C4.26195 2.59575 3.93987 2.49888 3.61067 2.50001H1.6665V4.16668H3.61067L7.564 13.6542C7.62733 13.806 7.73415 13.9356 7.87102 14.0268C8.0079 14.118 8.1687 14.1667 8.33317 14.1667H14.9998C15.3473 14.1667 15.6582 13.9508 15.7807 13.6267L18.2807 6.96001C18.3279 6.83386 18.3439 6.69814 18.3272 6.56447C18.3105 6.4308 18.2617 6.30317 18.1848 6.19251Z"
                          fill="white"
                        />
                        <path
                          d="M8.75 17.5C9.44036 17.5 10 16.9404 10 16.25C10 15.5596 9.44036 15 8.75 15C8.05964 15 7.5 15.5596 7.5 16.25C7.5 16.9404 8.05964 17.5 8.75 17.5Z"
                          fill="white"
                        />
                        <path
                          d="M14.5835 17.5C15.2739 17.5 15.8335 16.9404 15.8335 16.25C15.8335 15.5596 15.2739 15 14.5835 15C13.8931 15 13.3335 15.5596 13.3335 16.25C13.3335 16.9404 13.8931 17.5 14.5835 17.5Z"
                          fill="white"
                        />
                      </svg>
                      Add to Cart
                    </button>
                  </div>
                </div>
              </div>
    
              <div className="bg-white p-3 rounded-[12px] border-[1px] border-[#E3E3E3] hover:border-[#DA0025] ">
                <img
                  className="w-full"
                  src="https://res.cloudinary.com/dj7wogsju/image/upload/v1742378693/Mask_group_d848ot.png"
                  alt=""
                />
                <div className="mt-4">
                  <div className="flex justify-between items-center">
                    <p className="sm:text-[20px] font-[600]">
                      Chicken Wraps Recipe
                    </p>
                    <p className="text-[16px] font-[600] flex gap-2 items-center">
                      <svg
                        width="16"
                        height="16"
                        viewBox="0 0 16 16"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M9.75174 1.25981L10.9648 3.84981C11.0677 4.06786 11.2198 4.25644 11.4078 4.39929C11.5958 4.54215 11.8142 4.63498 12.0442 4.66981L14.7664 5.07981C15.0311 5.12005 15.2798 5.2371 15.4843 5.41769C15.6888 5.59828 15.8409 5.83519 15.9234 6.10162C16.0059 6.36805 16.0155 6.65334 15.9512 6.92519C15.8868 7.19703 15.751 7.44459 15.5592 7.63981L13.5915 9.63981C13.4199 9.81246 13.2924 10.0274 13.2206 10.265C13.1489 10.5026 13.1352 10.7552 13.1808 10.9998L13.6393 13.8398C13.6834 14.1147 13.6535 14.397 13.5529 14.6551C13.4522 14.9132 13.2849 15.1368 13.0697 15.3009C12.8544 15.465 12.5998 15.563 12.3343 15.584C12.0688 15.605 11.8029 15.5482 11.5666 15.4198L9.13087 14.0598C8.92454 13.9468 8.69513 13.8878 8.46225 13.8878C8.22938 13.8878 7.99997 13.9468 7.79363 14.0598L5.35794 15.3998C5.12159 15.5282 4.85575 15.585 4.59025 15.564C4.32475 15.543 4.07009 15.445 3.85484 15.2809C3.63959 15.1168 3.47227 14.8932 3.37166 14.6351C3.27104 14.377 3.24111 14.0947 3.28522 13.8198L3.7437 10.9998C3.78435 10.7599 3.76816 10.5131 3.69655 10.2813C3.62494 10.0494 3.50011 9.83943 3.33298 9.66981L1.36532 7.66981C1.16487 7.47594 1.02148 7.22618 0.951999 6.9499C0.882522 6.67361 0.889854 6.3823 0.973133 6.11024C1.05641 5.83817 1.21218 5.59666 1.4221 5.41411C1.63202 5.23157 1.88737 5.11559 2.15812 5.07981L4.88036 4.66981C5.11029 4.63498 5.32868 4.54215 5.51671 4.39929C5.70474 4.25644 5.85678 4.06786 5.9597 3.84981L7.17277 1.25981C7.29267 1.0093 7.47679 0.798652 7.70452 0.651443C7.93225 0.504235 8.19461 0.42627 8.46225 0.42627C8.7299 0.42627 8.99226 0.504235 9.21999 0.651443C9.44772 0.798652 9.63184 1.0093 9.75174 1.25981Z"
                          fill="#F7B32B"
                        />
                      </svg>
                      4.2
                    </p>
                  </div>
    
                  <p className="mt-2 text-[14px] font-[400] text-[#535353]">
                    Lorem Ipsum is simply dummy text of the printing and typesetting
                    industry.
                  </p>
    
                  <p className="font-[600] sm:mt-5 mt-2">₤50.00</p>
    
                  <div className="flex items-center justify-between sm:gap-3 sm:mt-6 mt-3">
                    <button className="cursor-pointer text-white flex gap-2 items-center bg-[#DA0025] p-2 justify-center rounded-full w-[100%]">
                      <svg
                        width="20"
                        height="20"
                        viewBox="0 0 20 20"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M18.1848 6.19251C18.1082 6.08174 18.0058 5.9912 17.8865 5.92864C17.7672 5.86609 17.6345 5.83339 17.4998 5.83334H6.11067L5.149 3.52501C5.02328 3.22077 4.80985 2.96082 4.5359 2.77829C4.26195 2.59575 3.93987 2.49888 3.61067 2.50001H1.6665V4.16668H3.61067L7.564 13.6542C7.62733 13.806 7.73415 13.9356 7.87102 14.0268C8.0079 14.118 8.1687 14.1667 8.33317 14.1667H14.9998C15.3473 14.1667 15.6582 13.9508 15.7807 13.6267L18.2807 6.96001C18.3279 6.83386 18.3439 6.69814 18.3272 6.56447C18.3105 6.4308 18.2617 6.30317 18.1848 6.19251Z"
                          fill="white"
                        />
                        <path
                          d="M8.75 17.5C9.44036 17.5 10 16.9404 10 16.25C10 15.5596 9.44036 15 8.75 15C8.05964 15 7.5 15.5596 7.5 16.25C7.5 16.9404 8.05964 17.5 8.75 17.5Z"
                          fill="white"
                        />
                        <path
                          d="M14.5835 17.5C15.2739 17.5 15.8335 16.9404 15.8335 16.25C15.8335 15.5596 15.2739 15 14.5835 15C13.8931 15 13.3335 15.5596 13.3335 16.25C13.3335 16.9404 13.8931 17.5 14.5835 17.5Z"
                          fill="white"
                        />
                      </svg>
                      Add to Cart
                    </button>
                  </div>
                </div>
              </div>
    
              <div className="bg-white p-3 rounded-[12px] border-[1px] border-[#E3E3E3] hover:border-[#DA0025] ">
                <img
                  className="w-full"
                  src="https://res.cloudinary.com/dj7wogsju/image/upload/v1742378693/Mask_group_d848ot.png"
                  alt=""
                />
                <div className="mt-4">
                  <div className="flex justify-between items-center">
                    <p className="sm:text-[20px] font-[600]">
                      Chicken Wraps Recipe
                    </p>
                    <p className="text-[16px] font-[600] flex gap-2 items-center">
                      <svg
                        width="16"
                        height="16"
                        viewBox="0 0 16 16"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M9.75174 1.25981L10.9648 3.84981C11.0677 4.06786 11.2198 4.25644 11.4078 4.39929C11.5958 4.54215 11.8142 4.63498 12.0442 4.66981L14.7664 5.07981C15.0311 5.12005 15.2798 5.2371 15.4843 5.41769C15.6888 5.59828 15.8409 5.83519 15.9234 6.10162C16.0059 6.36805 16.0155 6.65334 15.9512 6.92519C15.8868 7.19703 15.751 7.44459 15.5592 7.63981L13.5915 9.63981C13.4199 9.81246 13.2924 10.0274 13.2206 10.265C13.1489 10.5026 13.1352 10.7552 13.1808 10.9998L13.6393 13.8398C13.6834 14.1147 13.6535 14.397 13.5529 14.6551C13.4522 14.9132 13.2849 15.1368 13.0697 15.3009C12.8544 15.465 12.5998 15.563 12.3343 15.584C12.0688 15.605 11.8029 15.5482 11.5666 15.4198L9.13087 14.0598C8.92454 13.9468 8.69513 13.8878 8.46225 13.8878C8.22938 13.8878 7.99997 13.9468 7.79363 14.0598L5.35794 15.3998C5.12159 15.5282 4.85575 15.585 4.59025 15.564C4.32475 15.543 4.07009 15.445 3.85484 15.2809C3.63959 15.1168 3.47227 14.8932 3.37166 14.6351C3.27104 14.377 3.24111 14.0947 3.28522 13.8198L3.7437 10.9998C3.78435 10.7599 3.76816 10.5131 3.69655 10.2813C3.62494 10.0494 3.50011 9.83943 3.33298 9.66981L1.36532 7.66981C1.16487 7.47594 1.02148 7.22618 0.951999 6.9499C0.882522 6.67361 0.889854 6.3823 0.973133 6.11024C1.05641 5.83817 1.21218 5.59666 1.4221 5.41411C1.63202 5.23157 1.88737 5.11559 2.15812 5.07981L4.88036 4.66981C5.11029 4.63498 5.32868 4.54215 5.51671 4.39929C5.70474 4.25644 5.85678 4.06786 5.9597 3.84981L7.17277 1.25981C7.29267 1.0093 7.47679 0.798652 7.70452 0.651443C7.93225 0.504235 8.19461 0.42627 8.46225 0.42627C8.7299 0.42627 8.99226 0.504235 9.21999 0.651443C9.44772 0.798652 9.63184 1.0093 9.75174 1.25981Z"
                          fill="#F7B32B"
                        />
                      </svg>
                      4.2
                    </p>
                  </div>
    
                  <p className="mt-2 text-[14px] font-[400] text-[#535353]">
                    Lorem Ipsum is simply dummy text of the printing and typesetting
                    industry.
                  </p>
    
                  <p className="font-[600] sm:mt-5 mt-2">₤50.00</p>
    
                  <div className="flex items-center justify-between sm:gap-3 sm:mt-6 mt-3">
                    <button className="cursor-pointer text-white flex gap-2 items-center bg-[#DA0025] p-2 justify-center rounded-full w-[100%]">
                      <svg
                        width="20"
                        height="20"
                        viewBox="0 0 20 20"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M18.1848 6.19251C18.1082 6.08174 18.0058 5.9912 17.8865 5.92864C17.7672 5.86609 17.6345 5.83339 17.4998 5.83334H6.11067L5.149 3.52501C5.02328 3.22077 4.80985 2.96082 4.5359 2.77829C4.26195 2.59575 3.93987 2.49888 3.61067 2.50001H1.6665V4.16668H3.61067L7.564 13.6542C7.62733 13.806 7.73415 13.9356 7.87102 14.0268C8.0079 14.118 8.1687 14.1667 8.33317 14.1667H14.9998C15.3473 14.1667 15.6582 13.9508 15.7807 13.6267L18.2807 6.96001C18.3279 6.83386 18.3439 6.69814 18.3272 6.56447C18.3105 6.4308 18.2617 6.30317 18.1848 6.19251Z"
                          fill="white"
                        />
                        <path
                          d="M8.75 17.5C9.44036 17.5 10 16.9404 10 16.25C10 15.5596 9.44036 15 8.75 15C8.05964 15 7.5 15.5596 7.5 16.25C7.5 16.9404 8.05964 17.5 8.75 17.5Z"
                          fill="white"
                        />
                        <path
                          d="M14.5835 17.5C15.2739 17.5 15.8335 16.9404 15.8335 16.25C15.8335 15.5596 15.2739 15 14.5835 15C13.8931 15 13.3335 15.5596 13.3335 16.25C13.3335 16.9404 13.8931 17.5 14.5835 17.5Z"
                          fill="white"
                        />
                      </svg>
                      Add to Cart
                    </button>
                  </div>
                </div>
              </div>
              
    
             </div>
    
             
          </div>
    
          <div className="sm:block hidden">
            <div className="my-20 bg-white  rounded-[15px] pt-10 ">
              <h4 className="flex items-center justify-center gap-2 text-[18px] font-[700] text-black">
                Explore Our
              </h4>
              <h3 className="text-[39px] text-[#010F1C] font-[900] text-center">
                Gallery
              </h3>
              <div className="mt-10">
                <Swiper
                  modules={[Pagination, Scrollbar, A11y, Autoplay]} 
                  spaceBetween={20}
                  slidesPerView={7}
                  autoplay={{
                    delay: 1000,
                    disableOnInteraction: false, 
                  }}
                  loop={true} 
                  onSwiper={(swiper) => console.log(swiper)}
                  onSlideChange={() => console.log("slide change")}
                >
                  <SwiperSlide>
                    <img
                      src="https://res.cloudinary.com/dj7wogsju/image/upload/v1741772447/Frame_1000006917_nnzhbx.png"
                      alt=""
                    />
                  </SwiperSlide>
                  <SwiperSlide>
                    <img
                      src="https://res.cloudinary.com/dj7wogsju/image/upload/v1741772446/Frame_1000006916_xranwe.png"
                      alt=""
                    />
                  </SwiperSlide>
                  <SwiperSlide>
                    <img
                      src="https://res.cloudinary.com/dj7wogsju/image/upload/v1741772445/Frame_1000006915_ru4x1e.png"
                      alt=""
                    />
                  </SwiperSlide>
                  <SwiperSlide>
                    <img
                      src="https://res.cloudinary.com/dj7wogsju/image/upload/v1741772445/Frame_1000006914_adhttd.png"
                      alt=""
                    />
                  </SwiperSlide>
                  <SwiperSlide>
                    <img
                      src="https://res.cloudinary.com/dj7wogsju/image/upload/v1741772447/Frame_1000006917_nnzhbx.png"
                      alt=""
                    />
                  </SwiperSlide>
                  <SwiperSlide>
                    <img
                      src="https://res.cloudinary.com/dj7wogsju/image/upload/v1741772446/Frame_1000006916_xranwe.png"
                      alt=""
                    />
                  </SwiperSlide>
                  <SwiperSlide>
                    <img
                      src="https://res.cloudinary.com/dj7wogsju/image/upload/v1741772445/Frame_1000006915_ru4x1e.png"
                      alt=""
                    />
                  </SwiperSlide>
                  <SwiperSlide>
                    <img
                      src="https://res.cloudinary.com/dj7wogsju/image/upload/v1741772445/Frame_1000006914_adhttd.png"
                      alt=""
                    />
                  </SwiperSlide>
                  <SwiperSlide>
                    <img
                      src="https://res.cloudinary.com/dj7wogsju/image/upload/v1741772447/Frame_1000006917_nnzhbx.png"
                      alt=""
                    />
                  </SwiperSlide>
                  <SwiperSlide>
                    <img
                      src="https://res.cloudinary.com/dj7wogsju/image/upload/v1741772446/Frame_1000006916_xranwe.png"
                      alt=""
                    />
                  </SwiperSlide>
                  <SwiperSlide>
                    <img
                      src="https://res.cloudinary.com/dj7wogsju/image/upload/v1741772445/Frame_1000006915_ru4x1e.png"
                      alt=""
                    />
                  </SwiperSlide>
                  <SwiperSlide>
                    <img
                      src="https://res.cloudinary.com/dj7wogsju/image/upload/v1741772445/Frame_1000006914_adhttd.png"
                      alt=""
                    />
                  </SwiperSlide>
                </Swiper>
              </div>
            </div>
          </div>
    
          <Footer />
        </>
  )
}

export default TodaysSpecial