import React from "react";
 
import Image from "next/image";
import { assets } from "@/assets/assets";
import { menuData } from "@/menuData";
function MenuComp() {
  return (
    <div className="mt-10 relative">
        <div className="absolute z-[-1] lg:top-0 md:top-0 sm:top-0 top-[20px] animate-floating">
            <Image className="lg:w-[170px] md:w-[150px] sm:w-[130px]  w-[80px]" src={assets.menu_animate}  alt=""  />
        </div>
      <div className="2xl:w-[1500px] lx:w-[1280px] lg:w-[1080px] md:w-[786px] sm:w-[600px] sm:mx-auto mx-4">
        <div className="text-center z-[3]">
          <p className="text-[18px] font-[500 montserrat">Best Food Menu </p>
          <h2 className="text-[34px] font-[900]">Our Popular Menus </h2>
        </div>

        <div className="grid lg:grid-cols-4 md:grid-cols-2 sm:grid-cols-2 grid-cols-2 gap-5 mt-7 mx-auto">
        {menuData.map((data,index) =>(    
          <div className="text-center flex flex-col items-center justify-center cursor-pointer overflow-hidden group" key={index}>
            <Image
              src={data.image}
              alt={data.menu_name}
              className="transition-transform duration-800 ease-in-out transform group-hover:scale-110"
            />
            <h3 className="text-[16px] mt-2 montserrat">{data.menu_name}</h3>
          </div>
          ))}
        </div>
      </div>
      <div className="absolute lg:right-40 md:right-30 sm:right-20 right-10 lg:top-[-10px] md:top-[-10px] sm:top-[-20px] top-[-30px] animate-menu-x">
          <Image className="lg:w-[170px] md:w-[150px] sm:w-[130px]  w-[100px]" src={assets.menu_animate2}   alt="" />
       </div>
    </div>
  );
}

export default MenuComp;
