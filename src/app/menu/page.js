"use client";
import React, { useEffect, useState } from "react";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import ResponsiveHeader from "@/components/ResponsiveHeader";
import { FaAngleRight, FaAngleLeft } from "react-icons/fa6";
import Image from "next/image";
import axios from "axios";

const Product = () => {
    const [menudata, setMenu] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const [isLoading, setIsLoading] = useState(true);
      const [currentSlide, setCurrentSlide] = useState(0);
    const itemsPerPage = 8;

    // Fetch Menu Data
    const displayMenuData = async () => {
        try {
            setIsLoading(true);
            const res = await axios.get(
                "https://bestsizzler-backend.fastranking.tech/api/items/sides"
            );
            setMenu(res.data.items);
        } catch (e) {
            console.log(e);
        } finally {
            setIsLoading(false);
        }
    };

    useEffect(() => {
        displayMenuData();
    }, []);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentSlide((prev) => (prev + 1) % menudata.length);
        }, 3000);
        return () => clearInterval(interval);
    }, [menudata.length]);

    const handleSlideChange = (index) => {
        setCurrentSlide(index);
    };

    const totalPages = Math.ceil(menudata.length / itemsPerPage);
    const startIndex = (currentPage - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;
    const currentItems = menudata.slice(startIndex, endIndex);

    return (
        <>
            <Header />
            <ResponsiveHeader />
            <div
                className="h-[300px] mb-4 bg-cover bg-center flex justify-center items-center w-full overflow-hidden"
                style={{
                    backgroundImage:
                        "url('https://res.cloudinary.com/dj7wogsju/image/upload/v1741711262/Group_238820_fsqqzy.png')",
                }}
                id="Hero"
            >
                <h2 className="text-center text-white text-[60px] font-[600]">MENU</h2>
            </div>
       
            <div className="xl:w-[1280px] lg:w-[1080px] md:w-[786px] sm:w-[600px] sm:mx-auto mx-4">
            { isLoading ? <div className="text-danger-500">Loading...</div> : <></> }
                <div className="grid sm:grid-cols-4 grid-cols-1 gap-5 sm:mt-20 my-10 sm:my-0">
                    {currentItems?.map((data, index) => (
                        <div
                            className="bg-white p-3 rounded-[12px] transition-all duration-300 ease-in-out hover:shadow-xl"
                            key={index}
                        >
                            <div className="overflow-hidden relative w-full">
                                <div
                                    className={`flex transition-transform duration-700 ease-in-out ${
                                        data.images.length > 1 ? "" : "justify-center"
                                    }`}
                                    style={{
                                        transform: data.images.length > 1 ? `translateX(-${currentSlide * 100}%)` : "none",
                                    }}
                                >
                                    {(data.images.length > 0
                                        ? data.images
                                        : [{ id: "dummy", urls: "https://res.cloudinary.com/dj7wogsju/image/upload/v1743764886/200_itpjzg.png" }]).map(
                                            (slide, index) => (
                                                <div
                                                    key={slide.id}
                                                    className="flex flex-col-reverse md:flex-row items-center justify-between py-8 md:px-14 px-5 mt-6 rounded-xl min-w-full"
                                                >
                                                    <div className="flex items-center flex-1 justify-center">
                                                        <Image
                                                            className="md:w-72 w-48"
                                                            src={slide.urls}
                                                            alt={`Slide ${index + 1}`}
                                                            width={300}
                                                            height={100}
                                                        />
                                                    </div>
                                                </div>
                                            )
                                        )}
                                </div>
                                <div
                                    className={`flex items-center justify-center gap-2 top-[-20px] relative z-40 transition-opacity duration-300 ${
                                        data.images.length > 1 ? "opacity-100" : "opacity-0 pointer-events-none"
                                    }`}
                                >
                                    {data.images.map((_, index) => (
                                        <div
                                            key={index}
                                            onClick={() => handleSlideChange(index)}
                                            className={`h-[10px] w-[10px] rounded-full cursor-pointer ${
                                                currentSlide === index ? "bg-orange-600" : "bg-gray-500/30"
                                            }`}
                                        ></div>
                                    ))}
                                </div>
                            </div>

                            <div className="mt-4">
                                <div className="flex justify-between items-center">
                                    <p className="sm:text-[20px] font-[600]">
                                        {data.name}
                                    </p>
                                    <p className="text-[16px] font-[600] flex gap-2 items-center">
                                        <svg
                                            width="16"
                                            height="16"
                                            viewBox="0 0 16 16"
                                            fill="none"
                                            xmlns="http://www.w3.org/2000/svg"
                                        >
                                            <path
                                                d="M9.75174 1.25981L10.9648 3.84981C11.0677 4.06786 11.2198 4.25644 11.4078 4.39929C11.5958 4.54215 11.8142 4.63498 12.0442 4.66981L14.7664 5.07981C15.0311 5.12005 15.2798 5.2371 15.4843 5.41769C15.6888 5.59828 15.8409 5.83519 15.9234 6.10162C16.0059 6.36805 16.0155 6.65334 15.9512 6.92519C15.8868 7.19703 15.7510 7.44459 15.5592 7.63981L13.5915 9.63981C13.4199 9.81246 13.2924 10.0274 13.2206 10.265C13.1489 10.5026 13.1352 10.7552 13.1808 10.9998L13.6393 13.8398C13.6834 14.1147 13.6535 14.3970 13.5529 14.6551C13.4522 14.9132 13.2849 15.1368 13.0697 15.3009C12.8544 15.4650 12.5998 15.5630 12.3343 15.5840C12.0688 15.6050 11.8029 15.5482 11.5666 15.4198L9.13087 14.0598C8.92454 13.9468 8.69513 13.8878 8.46225 13.8878C8.22938 13.8878 7.99997 13.9468 7.79363 14.0598L5.35794 15.3998C5.12159 15.5282 4.85575 15.5850 4.59025 15.5640C4.32475 15.5430 4.07009 15.4450 3.85484 15.2809C3.63959 15.1168 3.47227 14.8932 3.37166 14.6351C3.27104 14.3770 3.24111 14.0947 3.28522 13.8198L3.74370 10.9998C3.78435 10.7599 3.76816 10.5131 3.69655 10.2813C3.62494 10.0494 3.50011 9.83943 3.33298 9.66981L1.36532 7.66981C1.16487 7.47594 1.02148 7.22618 0.951999 6.94990C0.882522 6.67361 0.889854 6.38230 0.973133 6.11024C1.05641 5.83817 1.21218 5.59666 1.42210 5.41411C1.63202 5.23157 1.88737 5.11559 2.15812 5.07981L4.88036 4.66981C5.11029 4.63498 5.32868 4.54215 5.51671 4.39929C5.70474 4.25644 5.85678 4.06786 5.95970 3.84981L7.17277 1.25981C7.29267 1.00930 7.47679 0.798652 7.70452 0.651443C7.93225 0.504235 8.19461 0.426270 8.46225 0.426270C8.72990 0.426270 8.99226 0.504235 9.21999 0.651443C9.44772 0.798652 9.63184 1.00930 9.75174 1.25981Z"
                                                fill="#F7B32B"
                                            />
                                        </svg>
                                        4.2
                                    </p>
                                </div>

                                <p className="mt-2 text-[14px] font-[400] text-[#535353]">
                                    {data.description}
                                </p>

                                <p className="font-[600] sm:mt-5 mt-2">
                                    £{data?.product_units[0].pivot.price}
                                </p>

                                <div className="flex items-center justify-between sm:gap-3 sm:mt-6 mt-3">
                                    <button className="cursor-pointer text-white flex gap-2 items-center bg-[#DA0025] p-2 justify-center rounded-full w-[100%]">
                                        <svg
                                            width="20"
                                            height="20"
                                            viewBox="0 0 20 20"
                                            fill="none"
                                            xmlns="http://www.w3.org/2000/svg"
                                        >
                                            <path
                                                d="M18.1848 6.19251C18.1082 6.08174 18.0058 5.99120 17.8865 5.92864C17.7672 5.86609 17.6345 5.83339 17.4998 5.83334H6.11067L5.1490 3.52501C5.02328 3.22077 4.80985 2.96082 4.53590 2.77829C4.26195 2.59575 3.93987 2.49888 3.61067 2.50001H1.6665V4.16668H3.61067L7.5640 13.6542C7.62733 13.8060 7.73415 13.9356 7.87102 14.0268C8.00790 14.1180 8.16870 14.1667 8.33317 14.1667H14.9998C15.3473 14.1667 15.6582 13.9508 15.7807 13.6267L18.2807 6.96001C18.3279 6.83386 18.3439 6.69814 18.3272 6.56447C18.3105 6.43080 18.2617 6.30317 18.1848 6.19251Z"
                                                fill="white"
                                            />
                                            <path
                                                d="M8.75 17.5C9.44036 17.5 10 16.9404 10 16.25C10 15.5596 9.44036 15 8.75 15C8.05964 15 7.5 15.5596 7.5 16.25C7.5 16.9404 8.05964 17.5 8.75 17.5Z"
                                                fill="white"
                                            />
                                            <path
                                                d="M14.5835 17.5C15.2739 17.5 15.8335 16.9404 15.8335 16.25C15.8335 15.5596 15.2739 15 14.5835 15C13.8931 15 13.3335 15.5596 13.3335 16.25C13.3335 16.9404 13.8931 17.5 14.5835 17.5Z"
                                                fill="white"
                                            />
                                        </svg>
                                        Add to Cart
                                    </button>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                <div
                    className={`bg-white rounded-full mx-auto py-2 px-3 border-[1px] border-[#DFDFDF] flex items-center justify-between mt-20 sm:w-[500px] ${
                        totalPages > 1 ? "" : "hidden"
                    }`}
                >
                    <button
                        className={`page-arrows transition hover:bg-red-500 cursor-pointer flex w-[35px] h-[35px] items-center border-[1px] border-gray-400 rounded-[50%] justify-center ${
                            currentPage === 1 ? "opacity-50 cursor-not-allowed" : ""
                        }`}
                        onClick={() => currentPage > 1 && setCurrentPage((prev) => prev - 1)}
                        disabled={currentPage === 1}
                    >
                        <FaAngleLeft className="text-gray-400" />
                    </button>

                    <div>
                        <ul className="flex items-center gap-5 text-[#B4B4B4]">
                            {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
                                <li
                                    key={page}
                                    className={`w-8 h-8 rounded-full hover:bg-[#DA0025] hover:text-white text-center flex items-center justify-center cursor-pointer ${
                                        currentPage === page ? "bg-[#DA0025] text-white" : ""
                                    }`}
                                    onClick={() => setCurrentPage(page)}
                                >
                                    {page}
                                </li>
                            ))}
                        </ul>
                    </div>

                    <button
                        className={`page-arrows hover:bg-red-500 transition cursor-pointer flex w-[35px] h-[35px] items-center border-[1px] border-gray-400 rounded-[50%] justify-center ${
                            currentPage === totalPages ? "opacity-50 cursor-not-allowed" : ""
                        }`}
                        onClick={() => currentPage < totalPages && setCurrentPage((prev) => prev + 1)}
                        disabled={currentPage === totalPages}
                    >
                        <FaAngleRight className="text-gray-400" />
                    </button>
                </div>
            </div>

            <Footer />
        </>
    );
};

export default Product;