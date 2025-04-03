"use client"
import React, { useState, useRef, useEffect } from "react";

const TabsLgBasic = () => {
  const [tabSelected, setTabSelected] = useState({
    currentTab: 1,
    noTabs: 2,
  });

  const wrapperRef = useRef(null);

  const handleKeyDown = (e) => {
    if (e.keyCode === 39) {
      if (wrapperRef.current && wrapperRef.current.contains(e.target)) {
        if (tabSelected.currentTab < tabSelected.noTabs) {
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
        if (tabSelected.currentTab > 1) {
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
    <section className="max-w-full" aria-multiselectable="false">
      <ul className="flex items-center border-b border-slate-200" role="tablist" ref={wrapperRef}>
        {["Description", "Reviews (0)"].map((tab, index) => (
          <li key={index} role="presentation">
            <button
              className={`-mb-px inline-flex h-12 w-full items-center justify-center gap-2 whitespace-nowrap rounded-t border-b-2 px-6 text-sm font-medium tracking-wide transition duration-300  hover:stroke-[#da0025] f focus-visible:outline-none disabled:cursor-not-allowed ${
                tabSelected.currentTab === index + 1
                  ? "font-[600] text-[20px] border-[#DA0025] stroke-[#DA0025] text-black hover:border-[#DA0025] hover:text-black focus:border-[#DA0025] focus:stroke-[#da0025] focus:text-black disabled:border-slate-500"
                  : "font-[600] text-[20px] justify-self-center border-transparent stroke-slate-700 text-slate-700 hover:border-[#DA0025] hover:text-black focus:border-[#da0025] focus:stroke-[#DA0025] focus:text-black disabled:text-slate-500"
              }`}
              role="tab"
              aria-selected={tabSelected.currentTab === index + 1 ? "true" : "false"}
              onClick={() => setTabSelected({ ...tabSelected, currentTab: index + 1 })}
            >
              <span>{tab}</span>
            </button>
          </li>
        ))}
      </ul>

      <div className="">
        {["Description", "Reviews (0)"].map((tab, index) => (
          <div
            key={index}
            className={`px-6 py-4 ${tabSelected.currentTab === index + 1 ? "" : "hidden"}`}
            id={`tab-panel-${index + 1}a`}
            aria-hidden={tabSelected.currentTab === index + 1 ? "false" : "true"}
            role="tabpanel"
            aria-labelledby={`tab-label-${index + 1}a`}
            tabIndex="-1"
          >
            {tab === "Description" ? (
              <p>
                This is the description content. You can add details about the product here, such as features, specifications, and benefits.
              </p>
            ) : (
              
              <form>
                <h2 className="sm:text-[40px] text-[20px] font-[600] mt-2">Be the first to review “Our Seller Burger"</h2>
                <p className="text-[#787878] font-[400] mt-2">Your email address will not be published. Required fields are marked *</p>
                <div className="mb-4 sm:flex block items-center gap-10">
                  <input
                    type="text"
                    id="name"
                    name="name"
                    className="mt-4 block w-full p-2 border-b border-[#eee] outline-none"
                    placeholder="Name*"
                    required
                  />

                  <input
                    type="email"
                    id="email"
                    name="email"
                    className="mt-4 block w-full p-2 border-b border-[#eee] outline-none"
                    placeholder="Email*"
                    required
                  />


       
        <div className="flex items-center sm:gap-6 gap-1 mt-4">
      
          <h4 className="sm:flex-1  font-medium ">Review</h4>
         
          <span className="flex items-center gap-4 rounded text-sm text-slate-500">
            <span
              className="flex text-amber-400"
              role="img"
              aria-label="Rating: 4 out of 5 stars"
            >
              <span aria-hidden="true">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="h-4 w-4"
                >
                  <path
                    fillRule="evenodd"
                    d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z"
                    clipRule="evenodd"
                  />
                </svg>
              </span>
              <span aria-hidden="true">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="h-4 w-4"
                >
                  <path
                    fillRule="evenodd"
                    d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z"
                    clipRule="evenodd"
                  />
                </svg>
              </span>
              <span aria-hidden="true">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="h-4 w-4"
                >
                  <path
                    fillRule="evenodd"
                    d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z"
                    clipRule="evenodd"
                  />
                </svg>
              </span>
              <span aria-hidden="true">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="h-4 w-4"
                >
                  <path
                    fillRule="evenodd"
                    d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z"
                    clipRule="evenodd"
                  />
                </svg>
              </span>
              <span aria-hidden="true">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  className="h-4 w-4"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z"
                  />
                </svg>
              </span>
            </span>
          </span>
        </div>
        </div>

                

                <div className="mb-4 mt-2">
                  <textarea
                    id="review"
                    name="review"
                    rows="2"
                    className="mt-1 block w-full p-2 border-b border-[#eee] outline-none"
                    placeholder="Write your review here..."
                    required
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="sm:w-[20%] w-[50%] p-2 bg-[#DA0025] text-white font-medium rounded-full hover:bg-[#d1001c] focus:ring-2 focus:ring-[#DA0025]"
                >
                  Submit Review
                </button>
              </form>
            )}
          </div>
        ))}
      </div>
    </section>
  );
};

export default TabsLgBasic;
