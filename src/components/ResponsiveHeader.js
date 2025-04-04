"use client"
import React, { useState} from "react";
import { FaAngleDown ,FaAngleUp,FaArrowRight } from "react-icons/fa6";
import Link from "next/link";
import Image from "next/image";

const ResponsiveHeader = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [navitem ,setNavItem] = useState(false)

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };
  const navItemToggle = () =>{
    setNavItem(!navitem)
  }
  return (
    <>
      <div className="sticky top-0 z-100 flex sm:hidden items-center justify-between bg-[#010F1C] w-full p-3">
        <div>
           <Image
            src="https://res.cloudinary.com/dj7wogsju/image/upload/v1742466744/Group_238810_yr3yda.png"
            width="100"
            height="100"
            alt=""
          />
        </div>
        <button onClick={toggleMenu}>
          <svg
            width="33"
            height="33"
            viewBox="0 0 33 33"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <rect
              x="0.945312"
              y="0.5"
              width="32"
              height="32"
              rx="16"
              fill="#DA0025"
            />
            <path
              d="M14.5135 13H21.3771C21.6911 13 21.9453 12.7763 21.9453 12.5C21.9453 12.2237 21.6911 12 21.3771 12H14.5135C14.1995 12 13.9453 12.2237 13.9453 12.5C13.9453 12.7763 14.1995 13 14.5135 13Z"
              fill="white"
              stroke="white"
              strokeWidth="0.5"
            />
            <path
              d="M12.4637 17H21.4269C21.7134 17 21.9453 16.7763 21.9453 16.5C21.9453 16.2237 21.7134 16 21.4269 16H12.4637C12.1772 16 11.9453 16.2237 11.9453 16.5C11.9453 16.7763 12.1772 17 12.4637 17Z"
              fill="white"
              stroke="white"
              strokeWidth="0.5"
            />
            <path
              d="M14.5135 21H21.3771C21.6911 21 21.9453 20.7763 21.9453 20.5C21.9453 20.2237 21.6911 20 21.3771 20H14.5135C14.1995 20 13.9453 20.2237 13.9453 20.5C13.9453 20.7763 14.1995 21 14.5135 21Z"
              fill="white"
              stroke="white"
              strokeWidth="0.5"
            />
          </svg>
        </button>

        {/* Full-screen dropdown menu */}

        <div
          className={`${
            isOpen ? "" : "translate-x-full"
          }  fixed z-99 top-[70px] left-0 w-full h-full bg-white bg-opacity-80 flex flex-col justify-start items-center p-4 transform  transition-transform duration-300 ease-in-out`}
        >
          {/* <div onClick={toggleMenu} className="absolute top-5 right-5 text-black text-3xl cursor-pointer">
              &times;
            </div> */}
          <div className="w-full mt-1">
            <ul>
              <li className="">
                <Link href="" className="text-black cursor-pointer transition-all  hover:bg-[#eee] font-[500] p-3 mb-2 block">
                  <div className="flex items-center gap-2">
                    Today's Special
                    <Image
                      src="https://res.cloudinary.com/dj7wogsju/image/upload/v1742481380/Frame_73_2_xpvb9k.svg"
                      alt="" width={100} height={100}
                    />
                  </div>
                </Link>
              </li>
              <li className="">
                <Link href="" onClick={navItemToggle} className="text-black cursor-pointer transition-all  hover:bg-[#eee] font-[500] p-3 mb-2 block">
                  <div className="flex justify-between gap-2 items-center">
                    Menu
                    {navitem ?  <FaAngleUp/> :    <FaAngleDown />}
                  
                  </div>
                 </Link>
                 <ul className={`${navitem ? 'block' : 'hidden'} mt-4`}>
                     <li>
                     <Link
                        href="#" className="flex gap-2 p-3 hover:bg-[#eee] items-center transition-all font-[600] hover:text-[#eb0029] transform hover:translate-x-2 hover:svg-fill-red mb-2" >
                        <Image src="https://res.cloudinary.com/dj7wogsju/image/upload/v1742471937/OBJECTS_buxsga.png" alt="" height={25} width={25} className="w-[25px] h-[25px]"  />
                        DONNER
                      </Link>
                     </li>
                     <li className="mt-1">
                     <Link
                        href="#" className="flex hover:bg-[#eee] p-2 text-[15px] gap-2 items-center transition-all font-[600] hover:text-[#eb0029] transform hover:translate-x-2 hover:svg-fill-red mb-2" >
                        <Image src="https://res.cloudinary.com/dj7wogsju/image/upload/v1742471936/Frame_cwfw4s.png" alt="" height={25} width={25} className="w-[25px] h-[25px]" />
                        Wraps
                      </Link>
                     </li>
                     <li className="mt-1">
                     <Link href="#" className="flex hover:bg-[#eee] p-2 text-[15px] gap-2 items-center transition-all font-[600] hover:text-[#eb0029] transform hover:translate-x-2 hover:svg-fill-red mb-2" >
                        <Image src="https://res.cloudinary.com/dj7wogsju/image/upload/v1742471936/Group_239205_givbng.png" alt="" height={25} width={25} className="w-[25px] h-[25px]" />
                        Burger
                      </Link>
                     </li>
                     <li className="mt-1">
                     <Link href="#" className="flex hover:bg-[#eee] p-2 text-[15px] gap-2 items-center transition-all font-[600] hover:text-[#eb0029] transform hover:translate-x-2 hover:svg-fill-red mb-2" >
                        <Image src="https://res.cloudinary.com/dj7wogsju/image/upload/v1742471936/Cakes_l97qpi.png" alt="" height={25} width={25} className="w-[25px] h-[25px]" />
                       Desserts
                      </Link>
                     </li>
                     <li className="mt-1">
                     <Link href="#" className="flex hover:bg-[#eee] p-2 text-[15px] gap-2 items-center transition-all font-[600] hover:text-[#eb0029] transform hover:translate-x-2 hover:svg-fill-red mb-2" >
                        <Image src="https://res.cloudinary.com/dj7wogsju/image/upload/v1742471936/Asset_3_4x_1_gap0o0.png" alt="" height={25} width={25} className="w-[25px] h-[25px]" />
                        Peri Peri Chicken
                      </Link>
                     </li>
                     <li className="mt-1">
                     <Link href="#" className="flex hover:bg-[#eee] p-2 text-[15px] gap-2 items-center transition-all font-[600] hover:text-[#eb0029] transform hover:translate-x-2 hover:svg-fill-red mb-2" >
                        <Image src="https://res.cloudinary.com/dj7wogsju/image/upload/v1742471936/hand-drawn-fried-chicken-illustration_561641-3588_1_llkwuj.png" alt="" height={25} width={25} className="w-[25px] h-[25px]" />
                        Fried Zinger Chicken
                      </Link>
                     </li>
                     <li className="mt-1">
                     <Link href="#" className="flex hover:bg-[#eee] p-2 text-[15px] gap-2 items-center transition-all font-[600] hover:text-[#eb0029] transform hover:translate-x-2 hover:svg-fill-red mb-2" >
                        <Image src="https://res.cloudinary.com/dj7wogsju/image/upload/v1742471936/plate-with-toast-face-shape-with-apple-table_1_uplmyc.png" alt="" height={25} width={25} className="w-[25px] h-[25px]" />
                        Kids Meal
                      </Link>
                     </li>
                     <li className="mt-1">
                     <Link href="#" className="flex hover:bg-[#eee] p-2 text-[15px] gap-2 items-center transition-all font-[600] hover:text-[#eb0029] transform hover:translate-x-2 hover:svg-fill-red mb-2" >
                        <Image src="https://res.cloudinary.com/dj7wogsju/image/upload/v1742471936/Group_su4vtw.png" alt="" height={25} width={25} className="w-[25px] h-[25px]" />
                        Drinks Options
                      </Link>
                     </li>
                     <li className="mt-5 mb-4 w-[100%]">
                        <Link href="#" className="text-[#DA0025] p-2 w-[100%] flex items-center justify-center gap-1 text-center text-[15px] rounded-full border-2 bg-white border-[#DA0025]">
                        Meal Deal Combo <FaArrowRight/>
                        </Link>
                     </li>
                  </ul>
              </li>
              <li className="">
                <Link href="/about-us" className="text-black cursor-pointer transition-all  hover:bg-[#eee] font-[500] p-3 mb-2 block">
                  <div>
                    About Us
                    
                  </div>
                </Link>
              </li>
              <li className="">
                <Link href="" className="text-black cursor-pointer transition-all  hover:bg-[#eee] font-[500] p-3 mb-2 block">
                  <div>Shop</div>
                </Link>
              </li>
              <li className="">
                <Link href="" className="text-black cursor-pointer transition-all  hover:bg-[#eee] font-[500] p-3 mb-2 block">
                  <div>Gallery</div>
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default ResponsiveHeader;
