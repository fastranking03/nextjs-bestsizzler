import React from "react";
import Image from "next/image";
import { assets } from "@/assets/assets";
function AboutComp() {
  return (
    <div className="2xl:w-[1350px] lx:w-[1280px] lg:w-[1080px] md:w-[786px] sm:w-[600px] sm:mx-auto mx-4 sm:mt-20 mt-10">
      <div className="flex lg:flex-row md:flex-col-reverse sm:flex-col-reverse flex-col-reverse gap-10">
        <div className="lg:w-[50%] md:w-full sm:w-full w-full relative">
          <div className="absolute mirchi-animate -left-20 lg:block md:hidden sm:hidden hidden">
            <Image
              src={assets.about1}
              className="w-[100%]"
              alt=""
            />
          </div>
          <Image
            src={assets.about2}
            className="lg:w-[100%] md:w-[0] sm:w-[0] w-[0]"
            alt="About Us"
          />
          <button className="absolute cursor-pointer lg:bottom-0 lg:right-10 md:right-0 sm:right-0 right-0 lg:rounded-full md:rounded-none sm:rounded-none rounded-none overflow-hidden lg:w-[200px] md:w-full sm:w-full w-full lg:h-[200px] md:h-[220px] sm:h-[200px] h-[180px] ">
            <Image
              src={assets.about3}
              alt="videobtn"
              className="w-full h-full object-cover lg:rounded-full md:rounded-none sm:rounded-none rounded-none relative"
            />
            {/* Black overlay with 30% opacity */}
            <div className="absolute inset-0 bg-black opacity-60"></div>
            <div className="absolute lg:top-[30%] md:top-[35%] sm:top-[30%] top-[30%]  lg:left-[30%] md:left-[45%] sm:left-[45%] left-[40%] lg:rounded-full md:rounded-none sm:rounded-none rounded-none border-1 border-transparent hover:border-red-600 flex items-center justify-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="75"
                height="75"
                viewBox="0 0 24 24"
              >
                <path
                  fill="#d00000"
                  d="M10.385 15.23L15.23 12l-4.846-3.23zM12 21q-1.864 0-3.506-.701t-2.857-1.916t-1.926-2.849Q3 13.902 3 12.04q0-.902.167-1.776t.497-1.715l.78.78q-.219.65-.331 1.317T4 12q0 3.35 2.325 5.675T12 20t5.675-2.325T20 12t-2.325-5.675T12 4q-.675 0-1.332.112t-1.3.332l-.776-.775q.789-.315 1.606-.492T11.885 3q1.882 0 3.544.701t2.896 1.926t1.955 2.867T21 12t-.71 3.506q-.711 1.642-1.926 2.857q-1.216 1.216-2.858 1.926Q13.864 21 12 21M5.923 6.808q-.356 0-.62-.265q-.264-.264-.264-.62t.264-.62t.62-.264t.62.264t.265.62t-.265.62t-.62.265M12 12"
                />
              </svg>
            </div>
          </button>
        </div>
        <div className="lg:w-[50%] md:w-full sm:w-full w-full lg:text-left md:text-center sm:text-center text-center sm:mt-0 mt-5">
          <div>
            <p className="text-18px font-[500] montserrat">About Us</p>
            <h2 className="lg:text-4xl md:text-4xl sm:text-3xl text-3xl font-[900] leading-12">
              Enjoy An Exceptional Journey of Taste
            </h2>
            <p className="text-[15px] text-gray-500 mt-4 montserrat">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book.
            </p>
          </div>
          <div className="flex lg:flex-row flex-col justify-center lg:gap-10 gap-6 mt-8">
            <div className="shadow flex flex-col lg:items-start items-center justify-center rounded-[5px] p-6">
              <Image
              className="lg:w-[60px] md:w-[60px] sm:w-[60px] w-[50px]"
                src={assets.about5}
                alt="image 1"
              />
              <h3 className="text-[24px] font-[600] mt-3">Fast Foods</h3>
              <p className="montserrat text-[14px] mt-2 text-gray-500">
                Health foods are nutrient-Dense Foods
              </p>
            </div>
            <div className="shadow flex flex-col lg:items-start items-center justify-center rounded-[5px] p-6 border-[1px] border-red-500">
              <Image
                className="lg:w-[60px] md:w-[60px] sm:w-[60px] w-[50px]"
                src={assets.about6}
                alt="image 1"
              />
              <h3 className="text-[24px] font-[600] mt-3">Healthy foods</h3>
              <p className="montserrat text-[14px] mt-2 text-gray-500">
                Health foods are nutrient-Dense Foods
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AboutComp;
