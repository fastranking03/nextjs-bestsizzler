import React from "react";

function SpecialComp() {
  return (
    <div className="special-bg lg:h-[55vh] md:h-[80vh] sm:h-[80vh] mx-auto h-[80vh] lg:rounded-none rounded-2xl lg:w-full md:w-[85%] sm:w-[80%] w-[80%]  py-20 lg:mt-10 md:mt-70 sm:mt-60 mt-55">
      <div className=" sm:mx-auto mx-4">
        <div className="flex lg:flex-row md:flex-col flex-col lg:mx-20 lg:justify-start md:justify-center sm:justify-center justify-center items-center lg:text-start md:text-center text-center gap-5">
          <div className="lg:w-[40%]">
            <div className="text-white">
              <p className="mb-2 montserrat">Today Special Offer</p>
              <h2 className="lg:text-[80px] md:text-[75px] sm:text-[70px] text-[55px] font-[600] lg:leading-22 md:leading-20 sm:leading-18 leading-16">
                Delicious <br />{" "}
                <span className="uppercase lg:text-[100px] md:text-[90px] sm:text-[80px] text-[70px]">Burger</span>
              </h2>
              <p className="mt-2 montserrat">The Best burger Best Sizzler</p>
            </div>
          </div>
          <div className="lg:w-[20%]">
            <div className="relative">
              <div
                className="discount_style4 background-image animate-blink" style={{ backgroundImage: "url(https://res.cloudinary.com/dj7wogsju/image/upload/v1741781570/discount_bg_1_tba0cz.svg)", margin: 0 }} >
                <p className="small-text">Up to</p>
                <h3 className="percentage">32%</h3>
                <p className="small-text">discount</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SpecialComp;
