"use client"
import React, { useEffect } from "react"
import Glide from "@glidejs/glide"

export default function SliderIndicatorsInside() {
  useEffect(() => {
    const slider = new Glide(".glide-02", {
      type: "slider",
      focusAt: "center",
      perView: 1,
      autoplay: 1000,
      animationDuration: 700,
      gap: 0,
      classes: {
        nav: {
          active: "[&>*]:bg-white",
        },
      },
    }).mount()

    return () => {
      slider.destroy()
    }
  }, [])

  return (
    <>
      {/*<!-- Component: Slider with indicators inside --> */}
      <div className="relative w-full sm:w-[385px] glide-02 sm:mt-0 mt-10">
        {/*    <!-- Slides --> */}
        <div className="overflow-hidden" data-glide-el="track">
          <ul className="whitespace-no-wrap flex-no-wrap gap-3 [backface-visibility: hidden] [transform-style: preserve-3d] [touch-action: pan-Y] [will-change: transform] relative flex w-[385px] overflow-hidden p-0">
            <li>
              <img
                src="https://res.cloudinary.com/dj7wogsju/image/upload/v1742635526/Rectangle_774_1_wqiq09.png"
                className="w-[382px] m-auto"
              />
            </li>
            <li>
              <img
                src="https://res.cloudinary.com/dj7wogsju/image/upload/v1742635525/Rectangle_776_1_vqafyg.png"
                className="w-[382px] max-h-full m-auto"
              />
            </li>
            <li>
              <img
                src="https://res.cloudinary.com/dj7wogsju/image/upload/v1742635525/Rectangle_777_1_ptbhka.png"
                className="w-[382px]max-h-full m-auto"
              />
            </li>
            <li>
              <img
                src="https://res.cloudinary.com/dj7wogsju/image/upload/v1742635525/Rectangle_775_1_oq8rxo.png"
                className="w-[382px] max-h-full m-auto"
              />
            </li>
            <li>
              <img
                src="https://res.cloudinary.com/dj7wogsju/image/upload/v1742635525/Rectangle_778_1_dne6wh.png"
                className="w-[382px] max-h-full m-auto"
              />
            </li>
          </ul>
        </div>
        {/*    <!-- Indicators --> */}
        <div
          className="absolute top-3 left-10 flex items-center justify-center w-[80%] "
          data-glide-el="controls[nav]"
        >
          <button
            className="p-2 group"
            data-glide-dir="=0"
            aria-label="goto slide 1"
          >
            <span className="block w-16 h-1 transition-colors duration-300 rounded-full bg-black/30 "></span>
          </button>
          <button
            className="p-2 group"
            data-glide-dir="=1"
            aria-label="goto slide 2"
          >
            <span className="block w-16 h-1  transition-colors duration-300 rounded-full bg-black/30 "></span>
          </button>
          <button
            className="p-2 group"
            data-glide-dir="=2"
            aria-label="goto slide 3"
          >
            <span className="block w-16 h-1  transition-colors duration-300 rounded-full bg-black/30 "></span>
          </button>
          <button
            className="p-2 group"
            data-glide-dir="=3"
            aria-label="goto slide 4"
          >
            <span className="block w-16 h-1  transition-colors duration-300 rounded-full bg-black/30 "></span>
          </button>
          
        </div>
      </div>
    </>
  )
}