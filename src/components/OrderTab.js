"use client"

import React, { useState, useRef, useEffect } from "react";

export default function TabsLgBasicFullWidth() {
  const [tabSelected, setTabSelected] = useState({
    currentTab: 1,
    noTabs: 3,
  });

  const wrapperRef = useRef(null);

  const handleKeyDown = (e) => {
    if (e.keyCode === 39) {
      if (wrapperRef.current && wrapperRef.current.contains(e.target)) {
        if (
          tabSelected.currentTab >= 1 &&
          tabSelected.currentTab < tabSelected.noTabs
        ) {
          setTabSelected({
            ...tabSelected,
            currentTab: tabSelected.currentTab + 1,
          });
        } else {
          setTabSelected({
            ...tabSelected,
            currentTab: 1,
          });
        }
      }
    }

    if (e.keyCode === 37) {
      if (wrapperRef.current && wrapperRef.current.contains(e.target)) {
        if (
          tabSelected.currentTab > 1 &&
          tabSelected.currentTab <= tabSelected.noTabs
        ) {
          setTabSelected({
            ...tabSelected,
            currentTab: tabSelected.currentTab - 1,
          });
        } else {
          setTabSelected({
            ...tabSelected,
            currentTab: tabSelected.noTabs,
          });
        }
      }
    }
  };

  useEffect(() => {
    window.addEventListener("keydown", handleKeyDown);
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  });

  return (
    <>
      {/*<!-- Component: Basic lg sized tab full width --> */}
      <section className="max-w-full" aria-multiselectable="false">
        <ul
          className="flex items-center border-b border-slate-200 sm:mt-10"
          role="tablist"
          ref={wrapperRef}
        >
          <li className="flex-1" role="presentation ">
            <button
              className={`-mb-px inline-flex h-12 w-full cursor-pointer items-center justify-center gap-2 whitespace-nowrap rounded-t border-b-2 px-6 text-sm font-medium tracking-wide transition duration-300 hover:bg-red-50 hover:stroke-red-600 focus:bg-red-50 focus-visible:outline-none disabled:cursor-not-allowed ${
                tabSelected.currentTab === 1
                  ? "border-red-500 stroke-red-500 text-red-500 hover:border-red-600  hover:text-red-600 focus:border-red-700 focus:stroke-red-700 focus:text-red-700 disabled:border-slate-500"
                  : "justify-self-center border-transparent stroke-slate-700 text-slate-700 hover:border-red-500 hover:text-red-500 focus:border-red-600 focus:stroke-red-600 focus:text-red-600 disabled:text-slate-500"
              }`}
              id="tab-label-1a"
              role="tab"
              aria-setsize="3"
              aria-posinset="1"
              tabindex={`${tabSelected.currentTab === 1 ? "0" : "-1"}`}
              aria-controls="tab-panel-1a"
              aria-selected={`${
                tabSelected.currentTab === 1 ? "true" : "false"
              }`}
              onClick={() => setTabSelected({ ...tabSelected, currentTab: 1 })}
            >
              <span>Active Orders</span>
            </button>
          </li>
          <li className="flex-1" role="presentation ">
            <button
              className={`-mb-px inline-flex h-12 w-full cursor-pointer items-center justify-center gap-2 whitespace-nowrap rounded-t border-b-2 px-6 text-sm font-medium tracking-wide transition duration-300 hover:bg-red-50 hover:stroke-red-600 focus:bg-red-50 focus-visible:outline-none disabled:cursor-not-allowed ${
                tabSelected.currentTab === 2
                  ? "border-red-500 stroke-red-500 text-red-500 hover:border-red-600  hover:text-red-600 focus:border-red-700 focus:stroke-red-700 focus:text-red-700 disabled:border-slate-500"
                  : "justify-self-center border-transparent stroke-slate-700 text-slate-700 hover:border-red-500 hover:text-red-500 focus:border-red-600 focus:stroke-red-600 focus:text-red-600 disabled:text-slate-500"
              }`}
              id="tab-label-2a"
              role="tab"
              aria-setsize="3"
              aria-posinset="2"
              tabindex={`${tabSelected.currentTab === 2 ? "0" : "-1"}`}
              aria-controls="tab-panel-2a"
              aria-selected={`${
                tabSelected.currentTab === 2 ? "true" : "false"
              }`}
              onClick={() => setTabSelected({ ...tabSelected, currentTab: 2 })}
            >
              <span >Completed Orders</span>
            </button>
          </li>
          <li className="flex-1" role="presentation ">
            <button
              className={`-mb-px inline-flex h-12 w-full cursor-pointer items-center justify-center gap-2 whitespace-nowrap rounded-t border-b-2 px-6 text-sm font-medium tracking-wide transition duration-300 hover:bg-red-50 hover:stroke-red-600 focus:bg-red-50 focus-visible:outline-none disabled:cursor-not-allowed ${
                tabSelected.currentTab === 3
                  ? "border-red-500 stroke-red-500 text-red-500 hover:border-red-600  hover:text-red-600 focus:border-red-700 focus:stroke-red-700 focus:text-red-700 disabled:border-slate-500"
                  : "justify-self-center border-transparent stroke-slate-700 text-slate-700 hover:border-red-500 hover:text-red-500 focus:border-red-600 focus:stroke-red-600 focus:text-red-600 disabled:text-slate-500"
              }`}
              id="tab-label-3a"
              role="tab"
              aria-setsize="3"
              aria-posinset="3"
              tabindex={`${tabSelected.currentTab === 3 ? "0" : "-1"}`}
              aria-controls="tab-panel-3a"
              aria-selected={`${
                tabSelected.currentTab === 3 ? "true" : "false"
              }`}
              onClick={() => setTabSelected({ ...tabSelected, currentTab: 3 })}
            >
              <span>Cancelled</span>
            </button>
          </li>
        </ul>
        <div className="">
          <div
            className={`px-6 py-4 ${
              tabSelected.currentTab === 1 ? "" : "hidden"
            }`}
            id="tab-panel-1a"
            aria-hidden={`${tabSelected.currentTab === 1 ? "true" : "false"}`}
            role="tabpanel"
            aria-labelledby="tab-label-1a"
            tabindex="-1"
          >
            <div className="relative rounded-[8px] py-3 px-4 bg-[#FFFFFF] flex justify-between items-center mb-3">
              <div className="flex gap-10 items-center">
                <img
                  src="https://res.cloudinary.com/dj7wogsju/image/upload/v1742665888/dessert-with-chocolate-vanilla-layer-white-cream-2023-11-27-05-16-28-utc_2_k8n6pr.png"
                  alt=""
                />
                <div>
                  <div>
                    <p className="test-[#787878] text-[12px] font-[400]">
                      Order ID :{" "}
                      <span className="test-black font-[500]">#1235486</span>
                    </p>
                    <h3 className="mt-2 text-black font-[600]">
                      Chicken Wraps Recipe
                    </h3>
                    <p className="mt-2 font-[500] text-[12px] text-[#787878]">
                      Special mix of mango, peach, strawberry,
                    </p>
                    <p className="text-[12px] font-[500] list-disc flex items-center gap-1">
                      <svg
                        width="5"
                        height="5"
                        viewBox="0 0 5 5"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <circle cx="2.5" cy="2.5" r="2.5" fill="#828282" />
                      </svg>
                      Large
                    </p>
                  </div>
                  <div className="mt-[46px] font-[600]">₤550</div>
                </div>
              </div>
              <div className="absolute top-2 right-2 bg-[#FFFF001A] text-[#D4D400] px-2 py-1 rounded-full">
                Preparation
              </div>
              <div>
                <button className="rounded-full bg-red-500 text-white py-[10px] px-[24px]">
                  Track Order
                </button>
              </div>
            </div>

            <div className="relative rounded-[8px] py-3 px-4 bg-[#FFFFFF] flex justify-between items-center mb-3">
              <div className="flex gap-10 items-center">
                <img
                  src="https://res.cloudinary.com/dj7wogsju/image/upload/v1742665888/dessert-with-chocolate-vanilla-layer-white-cream-2023-11-27-05-16-28-utc_2_k8n6pr.png"
                  alt=""
                />
                <div>
                  <div>
                    <p className="test-[#787878] text-[12px] font-[400]">
                      Order ID :{" "}
                      <span className="test-black font-[500]">#1235486</span>
                    </p>
                    <h3 className="mt-2 text-black font-[600]">
                      Chicken Wraps Recipe
                    </h3>
                    <p className="mt-2 font-[500] text-[12px] text-[#787878]">
                      Special mix of mango, peach, strawberry,
                    </p>
                    <p className="text-[12px] font-[500] list-disc flex items-center gap-1">
                      <svg
                        width="5"
                        height="5"
                        viewBox="0 0 5 5"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <circle cx="2.5" cy="2.5" r="2.5" fill="#828282" />
                      </svg>
                      Large
                    </p>
                  </div>
                  <div className="mt-[46px] font-[600]">₤550</div>
                </div>
              </div>
              <div className="absolute top-2 right-2 bg-[#FFFF001A] text-[#D4D400] px-2 py-1 rounded-full">
                Preparation
              </div>
              <div>
                <button className="rounded-full bg-red-500 text-white py-[10px] px-[24px]">
                  Track Order
                </button>
              </div>
            </div>

            <div className="relative rounded-[8px] py-3 px-4 bg-[#FFFFFF] flex justify-between items-center mb-3">
              <div className="flex gap-10 items-center">
                <img
                  src="https://res.cloudinary.com/dj7wogsju/image/upload/v1742665888/dessert-with-chocolate-vanilla-layer-white-cream-2023-11-27-05-16-28-utc_2_k8n6pr.png"
                  alt=""
                />
                <div>
                  <div>
                    <p className="test-[#787878] text-[12px] font-[400]">
                      Order ID :{" "}
                      <span className="test-black font-[500]">#1235486</span>
                    </p>
                    <h3 className="mt-2 text-black font-[600]">
                      Chicken Wraps Recipe
                    </h3>
                    <p className="mt-2 font-[500] text-[12px] text-[#787878]">
                      Special mix of mango, peach, strawberry,
                    </p>
                    <p className="text-[12px] font-[500] list-disc flex items-center gap-1">
                      <svg
                        width="5"
                        height="5"
                        viewBox="0 0 5 5"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <circle cx="2.5" cy="2.5" r="2.5" fill="#828282" />
                      </svg>
                      Large
                    </p>
                  </div>
                  <div className="mt-[46px] font-[600]">₤550</div>
                </div>
              </div>
              <div className="absolute top-2 right-2 bg-[#FFFF001A] text-[#D4D400] px-2 py-1 rounded-full">
                Preparation
              </div>
              <div>
                <button className="rounded-full bg-red-500 text-white py-[10px] px-[24px]">
                  Track Order
                </button>
              </div>
            </div>

            <div className="relative rounded-[8px] py-3 px-4 bg-[#FFFFFF] flex justify-between items-center mb-3">
              <div className="flex gap-10 items-center">
                <img
                  src="https://res.cloudinary.com/dj7wogsju/image/upload/v1742665888/dessert-with-chocolate-vanilla-layer-white-cream-2023-11-27-05-16-28-utc_2_k8n6pr.png"
                  alt=""
                />
                <div>
                  <div>
                    <p className="test-[#787878] text-[12px] font-[400]">
                      Order ID :{" "}
                      <span className="test-black font-[500]">#1235486</span>
                    </p>
                    <h3 className="mt-2 text-black font-[600]">
                      Chicken Wraps Recipe
                    </h3>
                    <p className="mt-2 font-[500] text-[12px] text-[#787878]">
                      Special mix of mango, peach, strawberry,
                    </p>
                    <p className="text-[12px] font-[500] list-disc flex items-center gap-1">
                      <svg
                        width="5"
                        height="5"
                        viewBox="0 0 5 5"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <circle cx="2.5" cy="2.5" r="2.5" fill="#828282" />
                      </svg>
                      Large
                    </p>
                  </div>
                  <div className="mt-[46px] font-[600]">₤550</div>
                </div>
              </div>
              <div className="absolute top-2 right-2 bg-[#FFFF001A] text-[#D4D400] px-2 py-1 rounded-full">
                Preparation
              </div>
              <div>
                <button className="rounded-full bg-red-500 text-white py-[10px] px-[24px]">
                  Track Order
                </button>
              </div>
            </div>

            <div className="relative rounded-[8px] py-3 px-4 bg-[#FFFFFF] flex justify-between items-center mb-3">
              <div className="flex gap-10 items-center">
                <img
                  src="https://res.cloudinary.com/dj7wogsju/image/upload/v1742665888/dessert-with-chocolate-vanilla-layer-white-cream-2023-11-27-05-16-28-utc_2_k8n6pr.png"
                  alt=""
                />
                <div>
                  <div>
                    <p className="test-[#787878] text-[12px] font-[400]">
                      Order ID :{" "}
                      <span className="test-black font-[500]">#1235486</span>
                    </p>
                    <h3 className="mt-2 text-black font-[600]">
                      Chicken Wraps Recipe
                    </h3>
                    <p className="mt-2 font-[500] text-[12px] text-[#787878]">
                      Special mix of mango, peach, strawberry,
                    </p>
                    <p className="text-[12px] font-[500] list-disc flex items-center gap-1">
                      <svg
                        width="5"
                        height="5"
                        viewBox="0 0 5 5"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <circle cx="2.5" cy="2.5" r="2.5" fill="#828282" />
                      </svg>
                      Large
                    </p>
                  </div>
                  <div className="mt-[46px] font-[600]">₤550</div>
                </div>
              </div>
              <div className="absolute top-2 right-2 bg-[#FFFF001A] text-[#D4D400] px-2 py-1 rounded-full">
                Preparation
              </div>
              <div>
                <button className="rounded-full bg-red-500 text-white py-[10px] px-[24px]">
                  Track Order
                </button>
              </div>
            </div>
          </div>
          <div
            className={`px-6 py-4 ${
              tabSelected.currentTab === 2 ? "" : "hidden"
            }`}
            id="tab-panel-2a"
            aria-hidden={`${tabSelected.currentTab === 2 ? "true" : "false"}`}
            role="tabpanel"
            aria-labelledby="tab-label-2a"
            tabindex="-1"
          >
            <div className="relative rounded-[8px] py-3 px-4 bg-[#FFFFFF] flex justify-between items-center mb-3">
              <div className="flex gap-10 items-center">
                <img
                  src="https://res.cloudinary.com/dj7wogsju/image/upload/v1742665888/dessert-with-chocolate-vanilla-layer-white-cream-2023-11-27-05-16-28-utc_2_k8n6pr.png"
                  alt=""
                />
                <div>
                  <div>
                    <p className="test-[#787878] text-[12px] font-[400]">
                      Order ID :{" "}
                      <span className="test-black font-[500]">#1235486</span>
                    </p>
                    <h3 className="mt-2 text-black font-[600]">
                      Chicken Wraps Recipe
                    </h3>
                    <p className="mt-2 font-[500] text-[12px] text-[#787878]">
                      Special mix of mango, peach, strawberry,
                    </p>
                    <p className="text-[12px] font-[500] list-disc flex items-center gap-1">
                      <svg
                        width="5"
                        height="5"
                        viewBox="0 0 5 5"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <circle cx="2.5" cy="2.5" r="2.5" fill="#828282" />
                      </svg>
                      Large
                    </p>
                  </div>
                  <div className="flex items-center justify-between mt-[46px]">
                    <div className=" font-[600]">₤550</div>
                    <div className="flex items-center gap-2 absolute right-[12px] bottom-[12px]">
                      <button className="rounded-full px-2 py-1 bg-white border-2 border-[#DA0025] text-[#DA0025] ">
                        Buy Again
                      </button>
                      <button className="rounded-full px-2 py-1 bg-[#DA0025] text-white">
                        Write Review
                      </button>
                    </div>
                  </div>
                </div>
              </div>
              <div className="absolute top-2 right-2 bg-[#4CAD001A] text-[#4CAD00] px-2 py-1 rounded-full">
                Delivered
              </div>
            </div>

            <div className="relative rounded-[8px] py-3 px-4 bg-[#FFFFFF] flex justify-between items-center mb-3">
              <div className="flex gap-10 items-center">
                <img
                  src="https://res.cloudinary.com/dj7wogsju/image/upload/v1742665888/dessert-with-chocolate-vanilla-layer-white-cream-2023-11-27-05-16-28-utc_2_k8n6pr.png"
                  alt=""
                />
                <div>
                  <div>
                    <p className="test-[#787878] text-[12px] font-[400]">
                      Order ID :{" "}
                      <span className="test-black font-[500]">#1235486</span>
                    </p>
                    <h3 className="mt-2 text-black font-[600]">
                      Chicken Wraps Recipe
                    </h3>
                    <p className="mt-2 font-[500] text-[12px] text-[#787878]">
                      Special mix of mango, peach, strawberry,
                    </p>
                    <p className="text-[12px] font-[500] list-disc flex items-center gap-1">
                      <svg
                        width="5"
                        height="5"
                        viewBox="0 0 5 5"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <circle cx="2.5" cy="2.5" r="2.5" fill="#828282" />
                      </svg>
                      Large
                    </p>
                  </div>
                  <div className="flex items-center justify-between mt-[46px]">
                    <div className=" font-[600]">₤550</div>
                    <div className="flex items-center gap-2 absolute right-[12px] bottom-[12px]">
                      <button className="rounded-full px-2 py-1 bg-white border-2 border-[#DA0025] text-[#DA0025] ">
                        Buy Again
                      </button>
                      <button className="rounded-full px-2 py-1 bg-[#DA0025] text-white">
                        Write Review
                      </button>
                    </div>
                  </div>
                </div>
              </div>
              <div className="absolute top-2 right-2 bg-[#4CAD001A] text-[#4CAD00] px-2 py-1 rounded-full">
                Delivered
              </div>
            </div>

            <div className="relative rounded-[8px] py-3 px-4 bg-[#FFFFFF] flex justify-between items-center mb-3">
              <div className="flex gap-10 items-center">
                <img
                  src="https://res.cloudinary.com/dj7wogsju/image/upload/v1742665888/dessert-with-chocolate-vanilla-layer-white-cream-2023-11-27-05-16-28-utc_2_k8n6pr.png"
                  alt=""
                />
                <div>
                  <div>
                    <p className="test-[#787878] text-[12px] font-[400]">
                      Order ID :{" "}
                      <span className="test-black font-[500]">#1235486</span>
                    </p>
                    <h3 className="mt-2 text-black font-[600]">
                      Chicken Wraps Recipe
                    </h3>
                    <p className="mt-2 font-[500] text-[12px] text-[#787878]">
                      Special mix of mango, peach, strawberry,
                    </p>
                    <p className="text-[12px] font-[500] list-disc flex items-center gap-1">
                      <svg
                        width="5"
                        height="5"
                        viewBox="0 0 5 5"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <circle cx="2.5" cy="2.5" r="2.5" fill="#828282" />
                      </svg>
                      Large
                    </p>
                  </div>
                  <div className="flex items-center justify-between mt-[46px]">
                    <div className=" font-[600]">₤550</div>
                    <div className="flex items-center gap-2 absolute right-[12px] bottom-[12px]">
                      <button className="rounded-full px-2 py-1 bg-white border-2 border-[#DA0025] text-[#DA0025] ">
                        Buy Again
                      </button>
                      <button className="rounded-full px-2 py-1 bg-[#DA0025] text-white">
                        Write Review
                      </button>
                    </div>
                  </div>
                </div>
              </div>
              <div className="absolute top-2 right-2 bg-[#4CAD001A] text-[#4CAD00] px-2 py-1 rounded-full">
                Delivered
              </div>
            </div>

            <div className="relative rounded-[8px] py-3 px-4 bg-[#FFFFFF] flex justify-between items-center mb-3">
              <div className="flex gap-10 items-center">
                <img
                  src="https://res.cloudinary.com/dj7wogsju/image/upload/v1742665888/dessert-with-chocolate-vanilla-layer-white-cream-2023-11-27-05-16-28-utc_2_k8n6pr.png"
                  alt=""
                />
                <div>
                  <div>
                    <p className="test-[#787878] text-[12px] font-[400]">
                      Order ID :{" "}
                      <span className="test-black font-[500]">#1235486</span>
                    </p>
                    <h3 className="mt-2 text-black font-[600]">
                      Chicken Wraps Recipe
                    </h3>
                    <p className="mt-2 font-[500] text-[12px] text-[#787878]">
                      Special mix of mango, peach, strawberry,
                    </p>
                    <p className="text-[12px] font-[500] list-disc flex items-center gap-1">
                      <svg
                        width="5"
                        height="5"
                        viewBox="0 0 5 5"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <circle cx="2.5" cy="2.5" r="2.5" fill="#828282" />
                      </svg>
                      Large
                    </p>
                  </div>
                  <div className="flex items-center justify-between mt-[46px]">
                    <div className=" font-[600]">₤550</div>
                    <div className="flex items-center gap-2 absolute right-[12px] bottom-[12px]">
                      <button className="rounded-full px-2 py-1 bg-white border-2 border-[#DA0025] text-[#DA0025] ">
                        Buy Again
                      </button>
                      <button className="rounded-full px-2 py-1 bg-[#DA0025] text-white">
                        Write Review
                      </button>
                    </div>
                  </div>
                </div>
              </div>
              <div className="absolute top-2 right-2 bg-[#4CAD001A] text-[#4CAD00] px-2 py-1 rounded-full">
                Delivered
              </div>
            </div>

            <div className="relative rounded-[8px] py-3 px-4 bg-[#FFFFFF] flex justify-between items-center mb-3">
              <div className="flex gap-10 items-center">
                <img
                  src="https://res.cloudinary.com/dj7wogsju/image/upload/v1742665888/dessert-with-chocolate-vanilla-layer-white-cream-2023-11-27-05-16-28-utc_2_k8n6pr.png"
                  alt=""
                />
                <div>
                  <div>
                    <p className="test-[#787878] text-[12px] font-[400]">
                      Order ID :{" "}
                      <span className="test-black font-[500]">#1235486</span>
                    </p>
                    <h3 className="mt-2 text-black font-[600]">
                      Chicken Wraps Recipe
                    </h3>
                    <p className="mt-2 font-[500] text-[12px] text-[#787878]">
                      Special mix of mango, peach, strawberry,
                    </p>
                    <p className="text-[12px] font-[500] list-disc flex items-center gap-1">
                      <svg
                        width="5"
                        height="5"
                        viewBox="0 0 5 5"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <circle cx="2.5" cy="2.5" r="2.5" fill="#828282" />
                      </svg>
                      Large
                    </p>
                  </div>
                  <div className="flex items-center justify-between mt-[46px]">
                    <div className=" font-[600]">₤550</div>
                    <div className="flex items-center gap-2 absolute right-[12px] bottom-[12px]">
                      <button className="rounded-full px-2 py-1 bg-white border-2 border-[#DA0025] text-[#DA0025] ">
                        Buy Again
                      </button>
                      <button className="rounded-full px-2 py-1 bg-[#DA0025] text-white">
                        Write Review
                      </button>
                    </div>
                  </div>
                </div>
              </div>
              <div className="absolute top-2 right-2 bg-[#4CAD001A] text-[#4CAD00] px-2 py-1 rounded-full">
                Delivered
              </div>
            </div>
          </div>
          <div
            className={`px-6 py-4 ${
              tabSelected.currentTab === 3 ? "" : "hidden"
            }`}
            id="tab-panel-3a"
            aria-hidden={`${tabSelected.currentTab === 3 ? "true" : "false"}`}
            role="tabpanel"
            aria-labelledby="tab-label-3a"
            tabindex="-1"
          >
          <div className="relative rounded-[8px] py-3 px-4 bg-[#FFFFFF] flex justify-between items-center mb-3">
              <div className="flex gap-10 items-center">
                <img
                  src="https://res.cloudinary.com/dj7wogsju/image/upload/v1742665888/dessert-with-chocolate-vanilla-layer-white-cream-2023-11-27-05-16-28-utc_2_k8n6pr.png"
                  alt=""
                />
                <div>
                  <div>
                    <p className="test-[#787878] text-[12px] font-[400]">
                      Order ID :{" "}
                      <span className="test-black font-[500]">#1235486</span>
                    </p>
                    <h3 className="mt-2 text-black font-[600]">
                      Chicken Wraps Recipe
                    </h3>
                    <p className="mt-2 font-[500] text-[12px] text-[#787878]">
                      Special mix of mango, peach, strawberry,
                    </p>
                    <p className="text-[12px] font-[500] list-disc flex items-center gap-1">
                      <svg
                        width="5"
                        height="5"
                        viewBox="0 0 5 5"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <circle cx="2.5" cy="2.5" r="2.5" fill="#828282" />
                      </svg>
                      Large
                    </p>
                  </div>
                  <div className="flex items-center justify-between mt-[46px]">
                    <div className=" font-[600]">₤550</div>
                    <div className=" absolute right-[12px] bottom-[12px]">
                     
                      <button className="rounded-full px-2 py-1 bg-[#DA0025] text-white">
                        Re-Order
                      </button>
                    </div>
                  </div>
                </div>
              </div>
              <div className="absolute top-2 right-2 bg-[#FF00001A] text-[#FF0000] px-2 py-1 rounded-full">
                Cancelled
              </div>
            </div>

            <div className="relative rounded-[8px] py-3 px-4 bg-[#FFFFFF] flex justify-between items-center mb-3">
              <div className="flex gap-10 items-center">
                <img
                  src="https://res.cloudinary.com/dj7wogsju/image/upload/v1742665888/dessert-with-chocolate-vanilla-layer-white-cream-2023-11-27-05-16-28-utc_2_k8n6pr.png"
                  alt=""
                />
                <div>
                  <div>
                    <p className="test-[#787878] text-[12px] font-[400]">
                      Order ID :{" "}
                      <span className="test-black font-[500]">#1235486</span>
                    </p>
                    <h3 className="mt-2 text-black font-[600]">
                      Chicken Wraps Recipe
                    </h3>
                    <p className="mt-2 font-[500] text-[12px] text-[#787878]">
                      Special mix of mango, peach, strawberry,
                    </p>
                    <p className="text-[12px] font-[500] list-disc flex items-center gap-1">
                      <svg
                        width="5"
                        height="5"
                        viewBox="0 0 5 5"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <circle cx="2.5" cy="2.5" r="2.5" fill="#828282" />
                      </svg>
                      Large
                    </p>
                  </div>
                  <div className="flex items-center justify-between mt-[46px]">
                    <div className=" font-[600]">₤550</div>
                    <div className=" absolute right-[12px] bottom-[12px]">
                     
                      <button className="rounded-full px-2 py-1 bg-[#DA0025] text-white">
                        Re-Order
                      </button>
                    </div>
                  </div>
                </div>
              </div>
              <div className="absolute top-2 right-2 bg-[#FF00001A] text-[#FF0000] px-2 py-1 rounded-full">
                Cancelled
              </div>
            </div>

            <div className="relative rounded-[8px] py-3 px-4 bg-[#FFFFFF] flex justify-between items-center mb-3">
              <div className="flex gap-10 items-center">
                <img
                  src="https://res.cloudinary.com/dj7wogsju/image/upload/v1742665888/dessert-with-chocolate-vanilla-layer-white-cream-2023-11-27-05-16-28-utc_2_k8n6pr.png"
                  alt=""
                />
                <div>
                  <div>
                    <p className="test-[#787878] text-[12px] font-[400]">
                      Order ID :{" "}
                      <span className="test-black font-[500]">#1235486</span>
                    </p>
                    <h3 className="mt-2 text-black font-[600]">
                      Chicken Wraps Recipe
                    </h3>
                    <p className="mt-2 font-[500] text-[12px] text-[#787878]">
                      Special mix of mango, peach, strawberry,
                    </p>
                    <p className="text-[12px] font-[500] list-disc flex items-center gap-1">
                      <svg
                        width="5"
                        height="5"
                        viewBox="0 0 5 5"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <circle cx="2.5" cy="2.5" r="2.5" fill="#828282" />
                      </svg>
                      Large
                    </p>
                  </div>
                  <div className="flex items-center justify-between mt-[46px]">
                    <div className=" font-[600]">₤550</div>
                    <div className=" absolute right-[12px] bottom-[12px]">
                     
                      <button className="rounded-full px-2 py-1 bg-[#DA0025] text-white">
                        Re-Order
                      </button>
                    </div>
                  </div>
                </div>
              </div>
              <div className="absolute top-2 right-2 bg-[#FF00001A] text-[#FF0000] px-2 py-1 rounded-full">
                Cancelled
              </div>
            </div>

            <div className="relative rounded-[8px] py-3 px-4 bg-[#FFFFFF] flex justify-between items-center mb-3">
              <div className="flex gap-10 items-center">
                <img
                  src="https://res.cloudinary.com/dj7wogsju/image/upload/v1742665888/dessert-with-chocolate-vanilla-layer-white-cream-2023-11-27-05-16-28-utc_2_k8n6pr.png"
                  alt=""
                />
                <div>
                  <div>
                    <p className="test-[#787878] text-[12px] font-[400]">
                      Order ID :{" "}
                      <span className="test-black font-[500]">#1235486</span>
                    </p>
                    <h3 className="mt-2 text-black font-[600]">
                      Chicken Wraps Recipe
                    </h3>
                    <p className="mt-2 font-[500] text-[12px] text-[#787878]">
                      Special mix of mango, peach, strawberry,
                    </p>
                    <p className="text-[12px] font-[500] list-disc flex items-center gap-1">
                      <svg
                        width="5"
                        height="5"
                        viewBox="0 0 5 5"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <circle cx="2.5" cy="2.5" r="2.5" fill="#828282" />
                      </svg>
                      Large
                    </p>
                  </div>
                  <div className="flex items-center justify-between mt-[46px]">
                    <div className=" font-[600]">₤550</div>
                    <div className=" absolute right-[12px] bottom-[12px]">
                     
                      <button className="rounded-full px-2 py-1 bg-[#DA0025] text-white">
                        Re-Order
                      </button>
                    </div>
                  </div>
                </div>
              </div>
              <div className="absolute top-2 right-2 bg-[#FF00001A] text-[#FF0000] px-2 py-1 rounded-full">
                Cancelled
              </div>
            </div>

            <div className="relative rounded-[8px] py-3 px-4 bg-[#FFFFFF] flex justify-between items-center mb-3">
              <div className="flex gap-10 items-center">
                <img
                  src="https://res.cloudinary.com/dj7wogsju/image/upload/v1742665888/dessert-with-chocolate-vanilla-layer-white-cream-2023-11-27-05-16-28-utc_2_k8n6pr.png"
                  alt=""
                />
                <div>
                  <div>
                    <p className="test-[#787878] text-[12px] font-[400]">
                      Order ID :{" "}
                      <span className="test-black font-[500]">#1235486</span>
                    </p>
                    <h3 className="mt-2 text-black font-[600]">
                      Chicken Wraps Recipe
                    </h3>
                    <p className="mt-2 font-[500] text-[12px] text-[#787878]">
                      Special mix of mango, peach, strawberry,
                    </p>
                    <p className="text-[12px] font-[500] list-disc flex items-center gap-1">
                      <svg
                        width="5"
                        height="5"
                        viewBox="0 0 5 5"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <circle cx="2.5" cy="2.5" r="2.5" fill="#828282" />
                      </svg>
                      Large
                    </p>
                  </div>
                  <div className="flex items-center justify-between mt-[46px]">
                    <div className=" font-[600]">₤550</div>
                    <div className=" absolute right-[12px] bottom-[12px]">
                     
                      <button className="rounded-full px-2 py-1 bg-[#DA0025] text-white">
                        Re-Order
                      </button>
                    </div>
                  </div>
                </div>
              </div>
              <div className="absolute top-2 right-2 bg-[#FF00001A] text-[#FF0000] px-2 py-1 rounded-full">
                Cancelled
              </div>
            </div>
          </div>
        </div>
      </section>
      {/*<!-- End Basic lg sized tab full width --> */}
    </>
  );
}
