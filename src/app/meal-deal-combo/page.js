"use client"
import React from 'react'
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import ResponsiveHeader from "@/components/ResponsiveHeader";
import {
    Navigation,
    Pagination,
    Scrollbar,
    A11y,
    Autoplay,
  } from "swiper/modules";
  import { Swiper, SwiperSlide } from "swiper/react";
  import "swiper/css";
  import Expert from "@/components/Expert";
  import "swiper/css/navigation";

const MealDeal = () => {
  return (
    <div>
        <Header/>
        <ResponsiveHeader/>
        <div
        className="h-[300px] mb-4 bg-cover bg-center flex justify-center items-center w-full overflow-hidden"
        style={{
          backgroundImage:
            "url('https://res.cloudinary.com/dj7wogsju/image/upload/v1741711262/Group_238820_fsqqzy.png')",
        }}
        id="Hero"
      >
        <h1 className="text-center text-white sm:text-[80px] text-[40px] font-[500]">
          Combo Pack
        </h1>
      </div>

      <div>
<div className="xl:w-[1280px] lg:w-[1080px] md:w-[786px] sm:w-[600px] sm:mx-auto mx-4 ">
<div className='grid grid-cols-1 sm:grid-cols-2 gap-[30px]'>

<div className='bg-white rounded-[12px] p-4 flex gap-5'>
    <div className='relative w-[40%] '>
        <img src="https://res.cloudinary.com/dj7wogsju/image/upload/v1742900108/Mask_group_1_xs4erf.png" className="h-full w-full" alt="" />
        <div className='absolute top-2 left-2 bg-white  flex items-center rounded-[70px] px-1'>

        <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M9.85174 3.78374L10.7102 5.61666C10.7831 5.77098 10.8907 5.90443 11.0237 6.00553C11.1568 6.10662 11.3113 6.17232 11.4741 6.19697L13.4006 6.48712C13.5879 6.5156 13.7639 6.59843 13.9086 6.72624C14.0534 6.85404 14.161 7.0217 14.2194 7.21025C14.2778 7.3988 14.2846 7.60069 14.239 7.79308C14.1935 7.98547 14.0974 8.16066 13.9616 8.29881L12.5691 9.7142C12.4477 9.83638 12.3574 9.98851 12.3066 10.1567C12.2559 10.3248 12.2462 10.5036 12.2785 10.6767L12.6029 12.6865C12.6341 12.8811 12.613 13.0809 12.5418 13.2635C12.4706 13.4462 12.3521 13.6044 12.1998 13.7205C12.0475 13.8366 11.8673 13.906 11.6794 13.9209C11.4915 13.9357 11.3033 13.8955 11.1361 13.8047L9.41236 12.8422C9.26634 12.7622 9.10398 12.7204 8.93918 12.7204C8.77438 12.7204 8.61203 12.7622 8.46601 12.8422L6.74229 13.7905C6.57502 13.8813 6.38689 13.9216 6.199 13.9067C6.0111 13.8919 5.83088 13.8225 5.67855 13.7064C5.52622 13.5903 5.40781 13.432 5.33661 13.2494C5.2654 13.0667 5.24422 12.8669 5.27543 12.6724L5.5999 10.6767C5.62866 10.5068 5.61721 10.3322 5.56653 10.1681C5.51586 10.004 5.42751 9.85547 5.30923 9.73543L3.91674 8.32004C3.77488 8.18285 3.6734 8.00609 3.62423 7.81057C3.57506 7.61505 3.58025 7.40889 3.63919 7.21635C3.69813 7.02381 3.80836 6.85289 3.95692 6.72371C4.10548 6.59452 4.28619 6.51244 4.47779 6.48712L6.4043 6.19697C6.56702 6.17232 6.72158 6.10662 6.85465 6.00553C6.98771 5.90443 7.09531 5.77098 7.16815 5.61666L8.02663 3.78374C8.11148 3.60645 8.24178 3.45738 8.40294 3.3532C8.5641 3.24902 8.74977 3.19385 8.93918 3.19385C9.12859 3.19385 9.31426 3.24902 9.47543 3.3532C9.63659 3.45738 9.76689 3.60645 9.85174 3.78374Z" fill="#F7B32B"/>
</svg>
<p className='font-[600] text-[12px]'>
    4.2
</p>
        </div>
    </div>
<div className='w-[60%]'>
<h4 className='text-[18px] font-semibold'>Family Meal Deal</h4>
<ul className='mt-3'>
    <li className='text-[14px] font-[500] text-[#535353] flex items-center gap-1'><span className='text-[#DA0025] mb-1'>(1pc)</span>  Whole Chicken (flavored choice)</li>
    <li className='text-[14px] font-[500] text-[#535353] flex items-center gap-1'><span className='text-[#DA0025] mb-1'>(3pc)</span>  Reg. Chips</li>
    <li className='text-[14px] font-[500] text-[#535353] flex items-center gap-1'><span className='text-[#DA0025] mb-1'>(1pc)</span>  Tub Coleslaw</li>
    <li className='text-[14px] font-[500] text-[#535353] flex items-center gap-1'><span className='text-[#DA0025]'>(2pc)</span>  Bottle of drink</li>
</ul>
<div className='text-[18px] font-semibold mt-3'>
₤14.99
</div>

<button className='mt-7 bg-[#DA0025] text-white flex items-center gap-2 rounded-full p-3 justify-center w-full'>
    
<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M18.1853 6.19251C18.1087 6.08174 18.0063 5.9912 17.887 5.92864C17.7677 5.86609 17.635 5.83339 17.5003 5.83334H6.11116L5.14949 3.52501C5.02377 3.22077 4.81034 2.96082 4.53639 2.77829C4.26244 2.59575 3.94035 2.49888 3.61116 2.50001H1.66699V4.16668H3.61116L7.56449 13.6542C7.62781 13.806 7.73464 13.9356 7.87151 14.0268C8.00839 14.118 8.16919 14.1667 8.33366 14.1667H15.0003C15.3478 14.1667 15.6587 13.9508 15.7812 13.6267L18.2812 6.96001C18.3284 6.83386 18.3444 6.69814 18.3277 6.56447C18.311 6.4308 18.2621 6.30317 18.1853 6.19251Z" fill="white"/>
<path d="M8.75 17.5C9.44036 17.5 10 16.9404 10 16.25C10 15.5596 9.44036 15 8.75 15C8.05964 15 7.5 15.5596 7.5 16.25C7.5 16.9404 8.05964 17.5 8.75 17.5Z" fill="white"/>
<path d="M14.583 17.5C15.2734 17.5 15.833 16.9404 15.833 16.25C15.833 15.5596 15.2734 15 14.583 15C13.8927 15 13.333 15.5596 13.333 16.25C13.333 16.9404 13.8927 17.5 14.583 17.5Z" fill="white"/>
</svg>
<p className='font-semibold'>Add to Cart</p>

</button>
</div>
</div>

<div className='bg-white rounded-[12px] p-4 flex gap-5'>
    <div className='relative w-[40%] '>
        <img src="https://res.cloudinary.com/dj7wogsju/image/upload/v1742900108/Mask_group_1_xs4erf.png" className="h-full w-full" alt="" />
        <div className='absolute top-2 left-2 bg-white  flex items-center rounded-[70px] px-1'>

        <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M9.85174 3.78374L10.7102 5.61666C10.7831 5.77098 10.8907 5.90443 11.0237 6.00553C11.1568 6.10662 11.3113 6.17232 11.4741 6.19697L13.4006 6.48712C13.5879 6.5156 13.7639 6.59843 13.9086 6.72624C14.0534 6.85404 14.161 7.0217 14.2194 7.21025C14.2778 7.3988 14.2846 7.60069 14.239 7.79308C14.1935 7.98547 14.0974 8.16066 13.9616 8.29881L12.5691 9.7142C12.4477 9.83638 12.3574 9.98851 12.3066 10.1567C12.2559 10.3248 12.2462 10.5036 12.2785 10.6767L12.6029 12.6865C12.6341 12.8811 12.613 13.0809 12.5418 13.2635C12.4706 13.4462 12.3521 13.6044 12.1998 13.7205C12.0475 13.8366 11.8673 13.906 11.6794 13.9209C11.4915 13.9357 11.3033 13.8955 11.1361 13.8047L9.41236 12.8422C9.26634 12.7622 9.10398 12.7204 8.93918 12.7204C8.77438 12.7204 8.61203 12.7622 8.46601 12.8422L6.74229 13.7905C6.57502 13.8813 6.38689 13.9216 6.199 13.9067C6.0111 13.8919 5.83088 13.8225 5.67855 13.7064C5.52622 13.5903 5.40781 13.432 5.33661 13.2494C5.2654 13.0667 5.24422 12.8669 5.27543 12.6724L5.5999 10.6767C5.62866 10.5068 5.61721 10.3322 5.56653 10.1681C5.51586 10.004 5.42751 9.85547 5.30923 9.73543L3.91674 8.32004C3.77488 8.18285 3.6734 8.00609 3.62423 7.81057C3.57506 7.61505 3.58025 7.40889 3.63919 7.21635C3.69813 7.02381 3.80836 6.85289 3.95692 6.72371C4.10548 6.59452 4.28619 6.51244 4.47779 6.48712L6.4043 6.19697C6.56702 6.17232 6.72158 6.10662 6.85465 6.00553C6.98771 5.90443 7.09531 5.77098 7.16815 5.61666L8.02663 3.78374C8.11148 3.60645 8.24178 3.45738 8.40294 3.3532C8.5641 3.24902 8.74977 3.19385 8.93918 3.19385C9.12859 3.19385 9.31426 3.24902 9.47543 3.3532C9.63659 3.45738 9.76689 3.60645 9.85174 3.78374Z" fill="#F7B32B"/>
</svg>
<p className='font-[600] text-[12px]'>
    4.2
</p>
        </div>
    </div>
<div className='w-[60%]'>
<h4 className='text-[18px] font-semibold'>Family Meal Deal</h4>
<ul className='mt-3'>
    <li className='text-[14px] font-[500] text-[#535353] flex items-center gap-1'><span className='text-[#DA0025] mb-1'>(1pc)</span>  Whole Chicken (flavored choice)</li>
    <li className='text-[14px] font-[500] text-[#535353] flex items-center gap-1'><span className='text-[#DA0025] mb-1'>(3pc)</span>  Reg. Chips</li>
    <li className='text-[14px] font-[500] text-[#535353] flex items-center gap-1'><span className='text-[#DA0025] mb-1'>(1pc)</span>  Tub Coleslaw</li>
    <li className='text-[14px] font-[500] text-[#535353] flex items-center gap-1'><span className='text-[#DA0025]'>(2pc)</span>  Bottle of drink</li>
</ul>
<div className='text-[18px] font-semibold mt-3'>
₤14.99
</div>

<button className='mt-7 bg-[#DA0025] text-white flex items-center gap-2 rounded-full p-3 justify-center w-full'>
    
<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M18.1853 6.19251C18.1087 6.08174 18.0063 5.9912 17.887 5.92864C17.7677 5.86609 17.635 5.83339 17.5003 5.83334H6.11116L5.14949 3.52501C5.02377 3.22077 4.81034 2.96082 4.53639 2.77829C4.26244 2.59575 3.94035 2.49888 3.61116 2.50001H1.66699V4.16668H3.61116L7.56449 13.6542C7.62781 13.806 7.73464 13.9356 7.87151 14.0268C8.00839 14.118 8.16919 14.1667 8.33366 14.1667H15.0003C15.3478 14.1667 15.6587 13.9508 15.7812 13.6267L18.2812 6.96001C18.3284 6.83386 18.3444 6.69814 18.3277 6.56447C18.311 6.4308 18.2621 6.30317 18.1853 6.19251Z" fill="white"/>
<path d="M8.75 17.5C9.44036 17.5 10 16.9404 10 16.25C10 15.5596 9.44036 15 8.75 15C8.05964 15 7.5 15.5596 7.5 16.25C7.5 16.9404 8.05964 17.5 8.75 17.5Z" fill="white"/>
<path d="M14.583 17.5C15.2734 17.5 15.833 16.9404 15.833 16.25C15.833 15.5596 15.2734 15 14.583 15C13.8927 15 13.333 15.5596 13.333 16.25C13.333 16.9404 13.8927 17.5 14.583 17.5Z" fill="white"/>
</svg>
<p className='font-semibold'>Add to Cart</p>

</button>
</div>
</div>

<div className='bg-white rounded-[12px] p-4 flex gap-5'>
    <div className='relative w-[40%] '>
        <img src="https://res.cloudinary.com/dj7wogsju/image/upload/v1742900108/Mask_group_1_xs4erf.png" className="h-full w-full" alt="" />
        <div className='absolute top-2 left-2 bg-white  flex items-center rounded-[70px] px-1'>

        <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M9.85174 3.78374L10.7102 5.61666C10.7831 5.77098 10.8907 5.90443 11.0237 6.00553C11.1568 6.10662 11.3113 6.17232 11.4741 6.19697L13.4006 6.48712C13.5879 6.5156 13.7639 6.59843 13.9086 6.72624C14.0534 6.85404 14.161 7.0217 14.2194 7.21025C14.2778 7.3988 14.2846 7.60069 14.239 7.79308C14.1935 7.98547 14.0974 8.16066 13.9616 8.29881L12.5691 9.7142C12.4477 9.83638 12.3574 9.98851 12.3066 10.1567C12.2559 10.3248 12.2462 10.5036 12.2785 10.6767L12.6029 12.6865C12.6341 12.8811 12.613 13.0809 12.5418 13.2635C12.4706 13.4462 12.3521 13.6044 12.1998 13.7205C12.0475 13.8366 11.8673 13.906 11.6794 13.9209C11.4915 13.9357 11.3033 13.8955 11.1361 13.8047L9.41236 12.8422C9.26634 12.7622 9.10398 12.7204 8.93918 12.7204C8.77438 12.7204 8.61203 12.7622 8.46601 12.8422L6.74229 13.7905C6.57502 13.8813 6.38689 13.9216 6.199 13.9067C6.0111 13.8919 5.83088 13.8225 5.67855 13.7064C5.52622 13.5903 5.40781 13.432 5.33661 13.2494C5.2654 13.0667 5.24422 12.8669 5.27543 12.6724L5.5999 10.6767C5.62866 10.5068 5.61721 10.3322 5.56653 10.1681C5.51586 10.004 5.42751 9.85547 5.30923 9.73543L3.91674 8.32004C3.77488 8.18285 3.6734 8.00609 3.62423 7.81057C3.57506 7.61505 3.58025 7.40889 3.63919 7.21635C3.69813 7.02381 3.80836 6.85289 3.95692 6.72371C4.10548 6.59452 4.28619 6.51244 4.47779 6.48712L6.4043 6.19697C6.56702 6.17232 6.72158 6.10662 6.85465 6.00553C6.98771 5.90443 7.09531 5.77098 7.16815 5.61666L8.02663 3.78374C8.11148 3.60645 8.24178 3.45738 8.40294 3.3532C8.5641 3.24902 8.74977 3.19385 8.93918 3.19385C9.12859 3.19385 9.31426 3.24902 9.47543 3.3532C9.63659 3.45738 9.76689 3.60645 9.85174 3.78374Z" fill="#F7B32B"/>
</svg>
<p className='font-[600] text-[12px]'>
    4.2
</p>
        </div>
    </div>
<div className='w-[60%]'>
<h4 className='text-[18px] font-semibold'>Family Meal Deal</h4>
<ul className='mt-3'>
    <li className='text-[14px] font-[500] text-[#535353] flex items-center gap-1'><span className='text-[#DA0025] mb-1'>(1pc)</span>  Whole Chicken (flavored choice)</li>
    <li className='text-[14px] font-[500] text-[#535353] flex items-center gap-1'><span className='text-[#DA0025] mb-1'>(3pc)</span>  Reg. Chips</li>
    <li className='text-[14px] font-[500] text-[#535353] flex items-center gap-1'><span className='text-[#DA0025] mb-1'>(1pc)</span>  Tub Coleslaw</li>
    <li className='text-[14px] font-[500] text-[#535353] flex items-center gap-1'><span className='text-[#DA0025]'>(2pc)</span>  Bottle of drink</li>
</ul>
<div className='text-[18px] font-semibold mt-3'>
₤14.99
</div>

<button className='mt-7 bg-[#DA0025] text-white flex items-center gap-2 rounded-full p-3 justify-center w-full'>
    
<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M18.1853 6.19251C18.1087 6.08174 18.0063 5.9912 17.887 5.92864C17.7677 5.86609 17.635 5.83339 17.5003 5.83334H6.11116L5.14949 3.52501C5.02377 3.22077 4.81034 2.96082 4.53639 2.77829C4.26244 2.59575 3.94035 2.49888 3.61116 2.50001H1.66699V4.16668H3.61116L7.56449 13.6542C7.62781 13.806 7.73464 13.9356 7.87151 14.0268C8.00839 14.118 8.16919 14.1667 8.33366 14.1667H15.0003C15.3478 14.1667 15.6587 13.9508 15.7812 13.6267L18.2812 6.96001C18.3284 6.83386 18.3444 6.69814 18.3277 6.56447C18.311 6.4308 18.2621 6.30317 18.1853 6.19251Z" fill="white"/>
<path d="M8.75 17.5C9.44036 17.5 10 16.9404 10 16.25C10 15.5596 9.44036 15 8.75 15C8.05964 15 7.5 15.5596 7.5 16.25C7.5 16.9404 8.05964 17.5 8.75 17.5Z" fill="white"/>
<path d="M14.583 17.5C15.2734 17.5 15.833 16.9404 15.833 16.25C15.833 15.5596 15.2734 15 14.583 15C13.8927 15 13.333 15.5596 13.333 16.25C13.333 16.9404 13.8927 17.5 14.583 17.5Z" fill="white"/>
</svg>
<p className='font-semibold'>Add to Cart</p>

</button>
</div>
</div>

</div>
</div>



          <div className='sm:block hidden '>
                      <div className="my-20 bg-white  rounded-[15px] pt-10">
                        <h4 className="flex items-center justify-center gap-2 text-[18px] font-[700] text-black ">
                          Explore Our
                        </h4>
                        <h3 className="text-[39px] text-[#010F1C] font-[900] text-center">
                          Gallery
                        </h3>
                        <div className="mt-10">
                          <Swiper
                            modules={[Pagination, Scrollbar, A11y, Autoplay]} // Removed Navigation module as we are not using it
                            spaceBetween={20}
                            slidesPerView={7}
                            autoplay={{
                              delay: 1000, // Auto slide delay in milliseconds (3000ms = 3 seconds)
                              disableOnInteraction: false, // Keep autoplay even after user interaction
                            }}
                            loop={true} // Enable looping
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
      </div>

        <Footer/>
    </div>
  )
}

export default MealDeal