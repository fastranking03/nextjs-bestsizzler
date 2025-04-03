"use client"
import React, { useState, useRef } from "react";

export default function TabsLgPillLeadingIcon() {
  const [tabSelected, setTabSelected] = useState({
    currentTab: null,
  });

  const [isTabClicked, setIsTabClicked] = useState(false);

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
        setIsTabClicked(true);
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
        setIsTabClicked(true);
      }
    }
  };

  return (
    <>
      <section className="xl:w-[1280px] lg:w-[1080px] md:w-[786px] sm:w-[600px] sm:mx-auto mx-4" aria-multiselectable="false">
        <ul
          className="flex justify-center gap-2"
          role="tablist"
          ref={wrapperRef}
        >
          <li role="presentation">
            <button
              className={`inline-flex h-12 items-center justify-center gap-2 whitespace-nowrap rounded sm:px-6 px-3 sm:text-sm text-xs font-medium tracking-wide transition duration-300 focus-visible:outline-none disabled:cursor-not-allowed border border-[#989898] text-[#989898] hover:text-[#DA0025] hover:border-[#DA0025] ${
                tabSelected.currentTab === 1
                  ? "bg-white text-[#DA0025] border-[#DA0025]"
                  : ""
              }`}
              id="tab-label-1di"
              role="tab"
              aria-setsize="4"
              aria-posinset="1"
              tabindex={`${tabSelected.currentTab === 1 ? "0" : "-1"}`}
              aria-controls="tab-panel-1di"
              aria-selected={`${
                tabSelected.currentTab === 1 ? "true" : "false"
              }`}
              onClick={() => {
                setTabSelected({ ...tabSelected, currentTab: 1 });
                setIsTabClicked(true);
              }}
            >
              <span className="order-2 font-[400] text-[18px]">Burger</span>
            </button>
          </li>
          <li role="presentation">
            <button
              className={`inline-flex h-12 items-center justify-center gap-2 whitespace-nowrap rounded sm:px-6 px-3 sm:text-sm text-xs font-medium tracking-wide transition duration-300 focus-visible:outline-none disabled:cursor-not-allowed border border-[#989898] text-[#989898] hover:text-[#DA0025] hover:border-[#DA0025] ${
                tabSelected.currentTab === 2
                  ? "bg-white text-[#DA0025] border-[#DA0025]"
                  : ""
              }`}
              id="tab-label-2di"
              role="tab"
              aria-setsize="4"
              aria-posinset="2"
              tabindex={`${tabSelected.currentTab === 2 ? "0" : "-1"}`}
              aria-controls="tab-panel-2di"
              aria-selected={`${
                tabSelected.currentTab === 2 ? "true" : "false"
              }`}
              onClick={() => {
                setTabSelected({ ...tabSelected, currentTab: 2 });
                setIsTabClicked(true);
              }}
            >
              <span className="order-2 font-[400] text-[18px]">Wraps</span>
            </button>
          </li>
          <li role="presentation">
            <button
              className={`inline-flex h-12 items-center justify-center gap-2 whitespace-nowrap rounded sm:px-6 px-3 sm:text-sm text-xs font-medium tracking-wide transition duration-300 focus-visible:outline-none disabled:cursor-not-allowed border border-[#989898] text-[#989898] hover:text-[#DA0025] hover:border-[#DA0025] ${
                tabSelected.currentTab === 3
                  ? "bg-white text-[#DA0025] border-[#DA0025]"
                  : ""
              }`}
              id="tab-label-3di"
              role="tab"
              aria-setsize="4"
              aria-posinset="3"
              tabindex={`${tabSelected.currentTab === 3 ? "0" : "-1"}`}
              aria-controls="tab-panel-3di"
              aria-selected={`${
                tabSelected.currentTab === 3 ? "true" : "false"
              }`}
              onClick={() => {
                setTabSelected({ ...tabSelected, currentTab: 3 });
                setIsTabClicked(true);
              }}
            >
              <span className="order-2 font-[400] text-[18px]">Noodles</span>
            </button>
          </li>
          <li role="presentation">
            <button
              className={`inline-flex h-12 items-center justify-center gap-2 whitespace-nowrap rounded sm:px-6 px-3 sm:text-sm text-xs font-medium tracking-wide transition duration-300 focus-visible:outline-none disabled:cursor-not-allowed border border-[#989898] text-[#989898] hover:text-[#DA0025] hover:border-[#DA0025] ${
                tabSelected.currentTab === 4
                  ? "bg-white text-[#DA0025] border-[#DA0025]"
                  : ""
              }`}
              id="tab-label-4di"
              role="tab"
              aria-setsize="4"
              aria-posinset="4"
              tabindex={`${tabSelected.currentTab === 4 ? "0" : "-1"}`}
              aria-controls="tab-panel-4di"
              aria-selected={`${
                tabSelected.currentTab === 4 ? "true" : "false"
              }`}
              onClick={() => {
                setTabSelected({ ...tabSelected, currentTab: 4 });
                setIsTabClicked(true);
              }}
            >
              <span className="order-2 font-[400] text-[18px]">Fast Food</span>
            </button>
          </li>
        </ul>

        <div className="py-4">
          <div
            className={`px-6 py-4 ${
              tabSelected.currentTab === null ? "" : "hidden"
            }`}
          >
            <div className="grid sm:grid-cols-4 grid-cols-2 gap-4 sm:mt-10 m-5">
              <a href="#">
                <img
                  src="https://res.cloudinary.com/dj7wogsju/image/upload/v1741772446/Frame_1000006916_xranwe.png"
                  alt="Burger 1"
                  className="w-full h-auto rounded-md"
                />
              </a>
              <a href="#">
                <img
                  src="https://res.cloudinary.com/dj7wogsju/image/upload/v1741772447/Frame_1000006917_nnzhbx.png"
                  alt="Wraps 1"
                  className="w-full h-auto rounded-md"
                />
              </a>
              <a href="#">
                <img
                  src="https://res.cloudinary.com/dj7wogsju/image/upload/v1741772445/Frame_1000006914_adhttd.png"
                  alt="Noodles 1"
                  className="w-full h-auto rounded-md"
                />
              </a>
              <a href="#">
                <img
                  src="https://res.cloudinary.com/dj7wogsju/image/upload/v1741772445/Frame_1000006915_ru4x1e.png"
                  alt="Fast Food 1"
                  className="w-full h-auto rounded-md"
                />
              </a>
            </div>
          </div>

          <div
            className={`px-6 py-4 ${
              tabSelected.currentTab === 1 ? "" : "hidden"
            }`}
            id="tab-panel-1di"
            aria-hidden={`${tabSelected.currentTab === 1 ? "false" : "true"}`}
            role="tabpanel"
            aria-labelledby="tab-label-1di"
            tabindex="-1"
          >
            <div className="grid sm:grid-cols-4 grid-cols-2 gap-4 mt-5 sm:mt-10">
              <a href="#">
                <img
                  src="https://res.cloudinary.com/dj7wogsju/image/upload/v1741772446/Frame_1000006916_xranwe.png"
                  alt="Burger 1"
                  className="w-full h-auto rounded-md"
                />
              </a>
              <a href="#">
                <img
                  src="https://res.cloudinary.com/dj7wogsju/image/upload/v1741772446/Frame_1000006916_xranwe.png"
                  alt="Burger 2"
                  className="w-full h-auto rounded-md"
                />
              </a>
              <a href="#">
                <img
                  src="https://res.cloudinary.com/dj7wogsju/image/upload/v1741772446/Frame_1000006916_xranwe.png"
                  alt="Burger 3"
                  className="w-full h-auto rounded-md"
                />
              </a>
              <a href="#">
                <img
                  src="https://res.cloudinary.com/dj7wogsju/image/upload/v1741772446/Frame_1000006916_xranwe.png"
                  alt="Burger 4"
                  className="w-full h-auto rounded-md"
                />
              </a>
            </div>
          </div>

          <div
            className={`px-6 py-4 ${
              tabSelected.currentTab === 2 ? "" : "hidden"
            }`}
            id="tab-panel-2di"
            aria-hidden={`${tabSelected.currentTab === 2 ? "false" : "true"}`}
            role="tabpanel"
            aria-labelledby="tab-label-2di"
            tabindex="-1"
          >
            <div className="grid sm:grid-cols-4 grid-cols-2 gap-4 mt-5 sm:mt-10">
              <a href="#">
                <img
                  src="https://res.cloudinary.com/dj7wogsju/image/upload/v1741772447/Frame_1000006917_nnzhbx.png"
                  alt="Wraps 1"
                  className="w-full h-auto rounded-md"
                />
              </a>
              <a href="#">
                <img
                  src="https://res.cloudinary.com/dj7wogsju/image/upload/v1741772447/Frame_1000006917_nnzhbx.png"
                  alt="Wraps 2"
                  className="w-full h-auto rounded-md"
                />
              </a>
              <a href="#">
                <img
                  src="https://res.cloudinary.com/dj7wogsju/image/upload/v1741772447/Frame_1000006917_nnzhbx.png"
                  alt="Wraps 3"
                  className="w-full h-auto rounded-md"
                />
              </a>
              <a href="#">
                <img
                  src="https://res.cloudinary.com/dj7wogsju/image/upload/v1741772447/Frame_1000006917_nnzhbx.png"
                  alt="Wraps 4"
                  className="w-full h-auto rounded-md"
                />
              </a>
            </div>
          </div>

          <div
            className={`px-6 py-4 ${
              tabSelected.currentTab === 3 ? "" : "hidden"
            }`}
            id="tab-panel-3di"
            aria-hidden={`${tabSelected.currentTab === 3 ? "false" : "true"}`}
            role="tabpanel"
            aria-labelledby="tab-label-3di"
            tabindex="-1"
          >
            <div className="grid sm:grid-cols-4 grid-cols-2 gap-4 mt-5 sm:mt-10">
              <a href="#">
                <img
                  src="https://res.cloudinary.com/dj7wogsju/image/upload/v1741772445/Frame_1000006914_adhttd.png"
                  alt="Noodles 1"
                  className="w-full h-auto rounded-md"
                />
              </a>
              <a href="#">
                <img
                  src="https://res.cloudinary.com/dj7wogsju/image/upload/v1741772445/Frame_1000006914_adhttd.png"
                  alt="Noodles 2"
                  className="w-full h-auto rounded-md"
                />
              </a>
              <a href="#">
                <img
                  src="https://res.cloudinary.com/dj7wogsju/image/upload/v1741772445/Frame_1000006914_adhttd.png"
                  alt="Noodles 3"
                  className="w-full h-auto rounded-md"
                />
              </a>
              <a href="#">
                <img
                  src="https://res.cloudinary.com/dj7wogsju/image/upload/v1741772445/Frame_1000006914_adhttd.png"
                  alt="Noodles 4"
                  className="w-full h-auto rounded-md"
                />
              </a>
            </div>
          </div>

          <div
            className={`px-6 py-4 ${
              tabSelected.currentTab === 4 ? "" : "hidden"
            }`}
            id="tab-panel-4di"
            aria-hidden={`${tabSelected.currentTab === 4 ? "false" : "true"}`}
            role="tabpanel"
            aria-labelledby="tab-label-4di"
            tabindex="-1"
          >
            <div className="grid sm:grid-cols-4 grid-cols-2 gap-4 mt-5 sm:mt-10">
              <a href="#">
                <img
                  src="https://res.cloudinary.com/dj7wogsju/image/upload/v1741772445/Frame_1000006915_ru4x1e.png"
                  alt="Fast Food 1"
                  className="w-full h-auto rounded-md"
                />
              </a>
              <a href="#">
                <img
                  src="https://res.cloudinary.com/dj7wogsju/image/upload/v1741772445/Frame_1000006915_ru4x1e.png"
                  alt="Fast Food 2"
                  className="w-full h-auto rounded-md"
                />
              </a>
              <a href="#">
                <img
                  src="https://res.cloudinary.com/dj7wogsju/image/upload/v1741772445/Frame_1000006915_ru4x1e.png"
                  alt="Fast Food 3"
                  className="w-full h-auto rounded-md"
                />
              </a>
              <a href="#">
                <img
                  src="https://res.cloudinary.com/dj7wogsju/image/upload/v1741772445/Frame_1000006915_ru4x1e.png"
                  alt="Fast Food 4"
                  className="w-full h-auto rounded-md"
                />
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
