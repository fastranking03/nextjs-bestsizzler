"use client"
import React, { useEffect } from "react";
import Glide from "@glidejs/glide";
import Image from "next/image";
const GalleryComp = () => {
    useEffect(() => {
        const slider = new Glide(".glide-09", {
            type: "carousel",
            autoplay: 1,
            animationDuration: 5000,
            animationTimingFunc: "linear",
            perView: 7,
            classes: {
                nav: {
                    active: "[&>*]:bg-wuiSlate-700",
                },
            },
            breakpoints: {
                1024: {
                    perView: 2,
                },
                640: {
                    perView: 1,

                },
            },
        }).mount();

        return () => {
            slider.destroy();
        };
    }, []);
    return (
        <>
            <div className="mt-20 mb-12 overflow-x-hidden">
                <div className="text-center mb-5">
                    <p className="text-base font-medium mb-2">Explore Our</p>
                    <h2 className="text-4xl font-extrabold">Gallery</h2>
                </div>

                <div className="glide-09 relative w-full">
                    <div data-glide-el="track">
                        <ul className="whitespace-no-wrap flex-no-wrap [backface-visibility: hidden] [transform-style: preserve-3d] [touch-action: pan-Y] [will-change: transform] relative flex w-full overflow-hidden p-0">
                            <li className="w-65">
                                <Image
                                    src="https://res.cloudinary.com/dj7wogsju/image/upload/v1741772446/Frame_1000006916_xranwe.png"
                                    width={350}
                                    height={350}
                                    className="mx-5 h-65 w-65"
                                    alt=""
                                />
                            </li>
                            <li>
                                <Image
                                    src="https://res.cloudinary.com/dj7wogsju/image/upload/v1741772445/Frame_1000006915_ru4x1e.png"
                                    className="mx-5 h-65 w-65 "
                                    width={350}
                                    height={350}
                                    alt=""
                                />
                            </li>
                            <li>
                                <Image
                                    src="https://res.cloudinary.com/dj7wogsju/image/upload/v1741772445/Frame_1000006914_adhttd.png"
                                    className="mx-5 h-65 w-65"
                                    width={350}
                                    height={350}
                                    alt=""
                                />
                            </li>
                            <li>
                                <Image
                                    src="https://res.cloudinary.com/dj7wogsju/image/upload/v1741772445/Frame_1000006914_adhttd.png"
                                    className="mx-5 h-65 w-65"
                                    width={350}
                                    height={350}
                                    alt=""
                                />
                            </li>
                            <li>
                                <Image
                                    src="https://res.cloudinary.com/dj7wogsju/image/upload/v1741772446/Frame_1000006916_xranwe.png"
                                    className="mx-5 h-65 w-65"
                                    width={350}
                                    height={350}
                                    alt=""
                                />
                            </li>
                            <li>
                                <Image
                                    src="https://res.cloudinary.com/dj7wogsju/image/upload/v1741772445/Frame_1000006915_ru4x1e.png"
                                    className="mx-5 h-65 w-65"
                                    width={350}
                                    height={350}
                                    alt=""
                                />
                            </li>
                            <li>
                                <Image
                                    src="https://res.cloudinary.com/dj7wogsju/image/upload/v1741772445/Frame_1000006914_adhttd.png"
                                    className="mx-5 h-65 w-65"
                                    width={350}
                                    height={350}
                                    alt=""
                                />
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </>
    );
};

export default GalleryComp;
