"use client"
import React, { useState } from "react";
import { motion } from "framer-motion";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import Link from "next/link";
import Image from "next/image";
import { assets } from "@/assets/assets";
function HeroComp() {

  const [activeIndex, setActiveIndex] = useState(0);
  
  const images = [
    {
      src: assets.home,
      alt: "Top Bun",
      styles: "absolute bottom-30 z-6 left-20",
    },
    {
      src: assets.home2,
      alt: "Patty",
      styles: "absolute bottom-20 left-10 z-5",
    },
    {
      src: assets.home3,
      alt: "Tomato",
      styles: "absolute bottom-5 z-4",
    },
    {
      src: assets.home4,
      alt: "Cheese",
      styles: "absolute z-2 bottom-[-40px]",
    },
    {
      src: assets.home5,
      alt: "Lettuce",
      styles: "absolute z-1 left-[-50px]",
    },
    {
      src: assets.home6,
      alt: "Eggs",
      styles: "absolute",
    },
  ];
  const slides = [
    {
      title: "ENJOY YOUR FAVORITE FOOD WITH FAMILY",
      subtitle: "Welcome to Sizzler",
      banner_image:assets.homebanner,
    },
    {
      title: "TASTE THE BEST CUISINES",
      subtitle: "Delicious and Fresh",
      banner_image:assets.homebanner,
    },
  ];

  return (
    <>
      <section>
        <Swiper
          modules={[Autoplay, Navigation, Pagination]}
          autoplay={{ delay: 3000 }}
          loop={true}
          navigation
          speed={1000}
          pagination={{ clickable: true }}
          onSlideChange={(swiper) => setActiveIndex(swiper.realIndex)}
          className="w-full "
        >
          {slides.map((slide, index) => (
            <SwiperSlide key={index} className="relative">
              <div className="absolute lg:top-15 md:top-4 sm:top-9 top-15 left-10">
                 <Image src={assets.leaf} alt="" />
              </div>
              <div
                className="bg-cover bg-center flex items-center  lg:h-[700px] md:h-[600px] sm:h-[500px] h-[400px]"
                style={{
                 backgroundImage:`url(${assets.homebanner})`,
                 backgroundColor:"#000"
                }}
                 >
                <div className="container mx-auto flex items-center justify-between px-6">
                  {/* Animated Text Section */}
                  <motion.div
                    className="lg:w-[50%] md:w-[50%] sm:w-[50%] w-full lg:text-left md:text-left sm:text-left text-center z-[1]"
                    initial={{ opacity: 0, x: 200 }}
                    animate={activeIndex === index ? { opacity: 1, x: 0 } : {}}
                    transition={{ duration: 1.5 }}
                  >
                    <p className="text-white lg:text-xl md:text-lg sm:text-lg text-base montserrat">
                      {slide.subtitle}
                    </p>
                    <h1 className="uppercase lg:text-6xl md:text-6xl sm:text-5xl text-4xl font-bold text-white leading-tight">
                    {slide.title.split(" ").map((word, index) => (
                    <React.Fragment key={index}>
                      {word} {(index + 1) % 2 === 0 && <br />}
                    </React.Fragment>
                  ))}
                    </h1>
                    <motion.div
                      className="mt-4"
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={
                        activeIndex === index ? { opacity: 1, scale: 1 } : {}
                      }
                      transition={{ duration: 0.5, delay: 0.3 }}
                    >
                      <Link href="#" className="text-white bg-red-600 px-5 py-3 rounded-full montserrat lg:text-lg md:text-lg sm:text-base text-sm"> Explore Menu </Link>
                    </motion.div>
                  </motion.div>

                  {/* Animated Images Section */}
                  <div className="lg:w-[50%] md:w-[50%] sm:w-[50%] w-0">
                    <div className="relative top-10">
                      {images
                        .slice()
                        .reverse()
                        .map((image, index) => (
                          <motion.div
                            key={index}
                            className={image.styles}
                            initial={{ y: -200, opacity: 0 }}
                            animate={{
                              y: activeIndex % slides.length === 0 ? 0 : -50,
                              opacity: 1,
                              rotate: activeIndex % slides.length === 0 ? 0 : 5,
                            }}
                            transition={{ duration: 0.8, delay: index * 0.2 }}
                          >
                            <Image src={image.src} alt={image.alt} />
                          </motion.div>
                        ))}
                    </div>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </section>
    </>
  );
}

export default HeroComp;
