"use client"
import React, { useState } from "react";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import ResponsiveHeader from "@/components/ResponsiveHeader";

const Contact = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    email: "",
    message: "",
  });
  const [formErrors, setFormErrors] = useState({
    firstName: "",
    email: "",
    message: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    let errors = {};

    if (!formData.firstName) {
      errors.firstName = "First name is required";
    }

    const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    if (!formData.email) {
      errors.email = "Email is required";
    } else if (!emailPattern.test(formData.email)) {
      errors.email = "Please enter a valid email address";
    }

    if (!formData.message) {
      errors.message = "Message is required";
    }

    setFormErrors(errors);

    if (Object.keys(errors).length === 0) {
      console.log("Form submitted", formData);
    }
  };

  return (
    <div>
      <Header />
      <ResponsiveHeader/>
      <div
        className="h-[300px] mb-4 bg-cover bg-center flex justify-center items-center w-full overflow-hidden"
        style={{
          backgroundImage:
            "url('https://res.cloudinary.com/dj7wogsju/image/upload/v1741711262/Group_238820_fsqqzy.png')",
        }}
        id="Hero"
      >
        <h2 className="text-center text-white text-[80px] font-[400]">
          Contact Us
        </h2>
      </div>
      <div className="xl:w-[1280px] lg:w-[1080px] md:w-[786px] sm:w-[600px] sm:mx-auto mx-2">
        <div className="flex  sm:flex-row flex-col-reverse items-center gap-20 h-full sm:mt-14">
          <div className="sm:w-[60%] w-full bg-black sm:p-10 p-5  rounded-[20px] mx-3 sm:mx-0">
            <p className="sm:text-[36px] text-[32px] mb-5 text-white">
              Stay connected with us to <br className="sm:block hidden" />
              explore the taste of Best Sizzlers
            </p>
            <ul className="text-white text-[16px] font-[400]">
              <li className="flex items-center gap-3 mb-4">
                <svg
                  width="41"
                  height="41"
                  viewBox="0 0 41 41"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <rect
                    x="0.570312"
                    y="0.691406"
                    width="40"
                    height="40"
                    rx="20"
                    fill="#DA0025"
                  />
                  <path
                    d="M19.8203 28.2852C19.2578 27.5977 18.5599 26.6706 17.7266 25.5039C16.9141 24.3581 16.1953 23.1706 15.5703 21.9414C14.9453 20.7122 14.612 19.6289 14.5703 18.6914C14.612 16.9831 15.1953 15.5664 16.3203 14.4414C17.4453 13.3164 18.862 12.7331 20.5703 12.6914C22.2786 12.7331 23.6953 13.3164 24.8203 14.4414C25.9453 15.5664 26.5286 16.9831 26.5703 18.6914C26.5286 19.6289 26.1953 20.7122 25.5703 21.9414C24.9245 23.1706 24.1953 24.3581 23.3828 25.5039C22.5703 26.6706 21.8828 27.5977 21.3203 28.2852C21.112 28.5352 20.862 28.6602 20.5703 28.6602C20.2786 28.6602 20.0286 28.5352 19.8203 28.2852ZM20.5703 20.6914C21.1328 20.6706 21.6016 20.4727 21.9766 20.0977C22.3516 19.7227 22.5495 19.2539 22.5703 18.6914C22.5495 18.1289 22.3516 17.6602 21.9766 17.2852C21.6016 16.9102 21.1328 16.7122 20.5703 16.6914C20.0078 16.7122 19.5391 16.9102 19.1641 17.2852C18.7891 17.6602 18.5911 18.1289 18.5703 18.6914C18.5911 19.2539 18.7891 19.7227 19.1641 20.0977C19.5391 20.4727 20.0078 20.6706 20.5703 20.6914Z"
                    fill="white"
                  />
                </svg>
                114 Desborough Road, high <br />
                wycombe, HP11 2PU
              </li>
              <li>
                <a
                  className="flex items-center gap-3 mb-4"
                  href="mailto:info@bestsizzler.com"
                >
                  <svg
                    width="41"
                    height="41"
                    viewBox="0 0 41 41"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <rect
                      x="0.570312"
                      y="0.691406"
                      width="40"
                      height="40"
                      rx="20"
                      fill="#DA0025"
                    />
                    <path
                      d="M27.0703 14.6914C27.487 14.7122 27.8411 14.8581 28.1328 15.1289C28.4036 15.4206 28.5495 15.7747 28.5703 16.1914C28.5495 16.6914 28.3516 17.0872 27.9766 17.3789L21.1641 22.5039C20.7682 22.7539 20.3724 22.7539 19.9766 22.5039L13.1641 17.3789C12.7891 17.0872 12.5911 16.6914 12.5703 16.1914C12.5911 15.7747 12.737 15.4206 13.0078 15.1289C13.2995 14.8581 13.6536 14.7122 14.0703 14.6914H27.0703ZM19.3828 23.2852C19.737 23.556 20.1328 23.6914 20.5703 23.6914C21.0078 23.6914 21.4036 23.556 21.7578 23.2852L28.5703 18.1914V24.6914C28.5495 25.2539 28.3516 25.7227 27.9766 26.0977C27.6016 26.4727 27.1328 26.6706 26.5703 26.6914H14.5703C14.0078 26.6706 13.5391 26.4727 13.1641 26.0977C12.7891 25.7227 12.5911 25.2539 12.5703 24.6914V18.1914L19.3828 23.2852Z"
                      fill="white"
                    />
                  </svg>
                  info@bestsizzler.com
                </a>
              </li>
              <li>
                <a
                  className="flex items-center gap-3 mb-4"
                  href="tel:(+44) 01494 473000"
                >
                  <svg
                    width="41"
                    height="41"
                    viewBox="0 0 41 41"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <rect
                      x="0.570312"
                      y="0.691406"
                      width="40"
                      height="40"
                      rx="20"
                      fill="#DA0025"
                    />
                    <path
                      d="M28.5391 24.7852L27.8203 27.9414C27.6745 28.4206 27.3516 28.6706 26.8516 28.6914C24.2057 28.6706 21.8099 28.0143 19.6641 26.7227C17.5182 25.4518 15.8099 23.7435 14.5391 21.5977C13.2474 19.4518 12.5911 17.056 12.5703 14.4102C12.5911 13.9102 12.8411 13.5872 13.3203 13.4414L16.4766 12.7227C16.9766 12.6393 17.3516 12.8268 17.6016 13.2852L19.0391 16.6602C19.2057 17.1185 19.112 17.5039 18.7578 17.8164L17.1016 19.1602C17.6224 20.2435 18.3099 21.2122 19.1641 22.0664C20.0182 22.9206 20.987 23.6185 22.0703 24.1602L23.4453 22.4727C23.7578 22.1185 24.1432 22.0247 24.6016 22.1914L27.9766 23.6289C28.4141 23.8997 28.6016 24.2852 28.5391 24.7852Z"
                      fill="white"
                    />
                  </svg>
                  (+44) 01494 473000
                </a>
              </li>
              <li className="flex items-center gap-3 mb-4">
                <svg
                  width="41"
                  height="41"
                  viewBox="0 0 41 41"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <rect
                    x="0.570312"
                    y="0.691406"
                    width="40"
                    height="40"
                    rx="20"
                    fill="#DA0025"
                  />
                  <path
                    d="M20.5703 28.6914C19.0703 28.6706 17.7266 28.306 16.5391 27.5977C15.3307 26.8893 14.3724 25.931 13.6641 24.7227C12.9557 23.5352 12.5911 22.1914 12.5703 20.6914C12.5911 19.1914 12.9557 17.8477 13.6641 16.6602C14.3724 15.4518 15.3307 14.4935 16.5391 13.7852C17.7266 13.0768 19.0703 12.7122 20.5703 12.6914C22.0703 12.7122 23.4141 13.0768 24.6016 13.7852C25.8099 14.4935 26.7682 15.4518 27.4766 16.6602C28.1849 17.8477 28.5495 19.1914 28.5703 20.6914C28.5495 22.1914 28.1849 23.5352 27.4766 24.7227C26.7682 25.931 25.8099 26.8893 24.6016 27.5977C23.4141 28.306 22.0703 28.6706 20.5703 28.6914ZM19.8203 20.6914C19.8203 20.9622 19.9349 21.1602 20.1641 21.2852L23.1641 23.2852C23.5599 23.5352 23.8932 23.4727 24.1641 23.0977C24.4141 22.7018 24.3516 22.3581 23.9766 22.0664L21.3203 20.2852V16.4414C21.2786 15.9831 21.0182 15.7331 20.5391 15.6914C20.3307 15.6914 20.1536 15.7643 20.0078 15.9102C19.862 16.056 19.7891 16.2331 19.7891 16.4414L19.8203 20.6914Z"
                    fill="white"
                  />
                </svg>
                Mon - Friday 09:00 AM - 09:00 PM
              </li>
            </ul>
            <hr className="bg-white w-full " />
          </div>
          <div className="sm:w-[40%] mx-10 sm:mx-0 mt-10 sm:mt-0">
            <form onSubmit={handleSubmit}>
              <p className="text-[20px] font-[500]">First Name</p>
              <input
                type="text"
                name="firstName"
                className="w-full outline-none border border-[#ADADAD] text-[#A6A6A6] py-3 px-4 rounded-[4px] mt-2"
                placeholder="Enter Your Name"
                value={formData.firstName}
                onChange={handleInputChange}
                required
              />
              {formErrors.firstName && (
                <p className="text-red-500 text-sm">{formErrors.firstName}</p>
              )}

              <p className="text-[20px] font-[500] mt-5">Email Address</p>
              <input
                type="email"
                name="email"
                className="w-full outline-none border border-[#ADADAD] text-[#A6A6A6] py-3 px-4 rounded-[4px] mt-2"
                placeholder="Enter Your Email"
                value={formData.email}
                onChange={handleInputChange}
                required
                pattern="[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$"
              />
              {formErrors.email && (
                <p className="text-red-500 text-sm">{formErrors.email}</p>
              )}

              <p className="text-[20px] font-[500] mt-5">Message</p>
              <textarea
                name="message"
                className="w-full outline-none border border-[#ADADAD] text-[#A6A6A6] py-2 px-4 rounded-[4px] mt-2"
                placeholder="Message!"
                value={formData.message}
                onChange={handleInputChange}
                required
              />
              {formErrors.message && (
                <p className="text-red-500 text-sm">{formErrors.message}</p>
              )}

              <button
                type="submit"
                className="text-white bg-[#DA0025] w-full px-1 py-2 text-[20px] font-[600] rounded-full mt-8"
              >
                Submit Message
              </button>
            </form>
          </div>
        </div>
        <div className="map-container my-10 sm:mx-0 mx-10">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2476.5734381322736!2d-0.761083223010584!3d51.63102260166429!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x48766138c0fa2383%3A0x91133632a583675b!2sSizzler%20High%20Wycombe%20(Halal)!5e0!3m2!1sen!2sin!4v1741775767998!5m2!1sen!2sin"
            width="100%"
            height="450"
            className="border-0"
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Contact;
