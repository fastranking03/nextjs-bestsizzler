import React, { useEffect, useState } from "react";
import { FaAngleRight, FaAngleLeft } from "react-icons/fa6";
import Image from "next/image";
import Glide from "@glidejs/glide";
import axios from "axios";

const MenuComponent = () => {
  const [menudata, setItems] = useState([]);

  useEffect(() => {
    axios
      .get("https://bestsizzler-backend.fastranking.tech/api/items/sides")
      .then((response) => setItems(response.data.items))
      .catch((error) => console.error("Error fetching data:", error));
  }, []);

  useEffect(() => {
    menudata.forEach((item, index) => {
      const slider = new Glide(`.glide-${index}`, {
        type: "slider",
        focusAt: "center",
        perView: 1,
        autoplay: 3500,
        animationDuration: 700,
        gap: 0,
      }).mount();

      return () => {
        slider.destroy();
      };
    });
  }, [menudata]);

  return (
    <div className="xl:w-[1280px] lg:w-[1080px] md:w-[786px] sm:w-[600px] sm:mx-auto mx-4">
      <div className="grid sm:grid-cols-4 grid-cols-1 gap-5 sm:mt-20 my-10 sm:my-0">
        {menudata.map((item, index) => (
          <div
            className="bg-white p-3 rounded-[12px] transition-all duration-300 ease-in-out hover:shadow-xl"
            key={item.id || index}
          >
            <div className={`relative w-full glide-${index}`}>
              {/* Glide Track */}
              <div className="overflow-hidden" data-glide-el="track">
                <ul className="relative flex w-full overflow-hidden">
                  {item.images?.map((img, imgIndex) => (
                    <li key={imgIndex}>
                      <Image
                        src={img.urls} // Assuming `item.images` is an array of image URLs
                        className="w-full h-[176px] rounded-[6px] m-auto"
                        alt={`Slide ${imgIndex}`}
                        width={300}
                        height={300}
                      />
                    </li>
                  ))}
                </ul>
              </div>

              {/* Glide Indicators */}
              <div
                className="absolute bottom-0 flex items-center justify-center w-full gap-2"
                data-glide-el="controls[nav]"
              >
                {item.images?.map((_, imgIndex) => (
                  <button
                    key={imgIndex}
                    className="p-4 group"
                    data-glide-dir={`=${imgIndex}`}
                    aria-label={`goto slide ${imgIndex + 1}`}
                  >
                    <span className="block w-2 h-2 transition-colors duration-300 rounded-full bg-white/20 ring-1 ring-slate-700 focus:outline-none"></span>
                  </button>
                ))}
              </div>
            </div>

            <div className="mt-4">
              <div className="flex justify-between items-center">
                <p className="sm:text-[20px] font-[600]">{item.name}</p>
                <p className="text-[16px] font-[600] flex gap-2 items-center">
                  ⭐ {item.rating || "4.2"}
                </p>
              </div>

              <p className="mt-2 text-[14px] font-[400] text-[#535353]">
                {item.description || "Delicious meal with fresh ingredients."}
              </p>

              <p className="font-[600] sm:mt-5 mt-2">₤{item.price || "50.00"}</p>

              <div className="flex items-center justify-between sm:gap-3 sm:mt-6 mt-3">
                <button className="cursor-pointer text-white flex gap-2 items-center bg-[#DA0025] p-2 justify-center rounded-full w-[100%]">
                  Add to Cart
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MenuComponent;
