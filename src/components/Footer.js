import React from "react";
import Image from "next/image";
import { assets } from "@/assets/assets";
const Footer = () => {
  return (
    
    <div className="">
      <div className="px-20 py-12 bg-black relative">

        <div className="sm:absolute sm:block hidden bottom-10 left-8"><Image src={assets.leaf} alt="" /></div>
        <div className="sm:absolute sm:block hidden bottom-[-42px] right-0"><Image src={assets.leaf2} alt="" /></div>

        <div className="sm:flex block justify-between">
          <div className="sm:w-[20%]">
            <Image
              src={assets.logo}
              alt=""
            />
            <p className="text-[16px]  text-white mt-4 ">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Laborum,
              quibusdam porro? Iste, numquam nisi deserunt architecto labore.
            </p>
          </div>
          <div className="sm:flex justify-between sm:w-[60%]">
            <div>
              <h4 className="text-[24px] text-white mb-6 sm:mt-0 mt-5">Other Links</h4>
              <ul>
                <li className="mb-6">
                  <a className="text-white hover:text-[#DA0025]" href="home">
                    Home
                  </a>
                </li>
                <li className="mb-6">
                  <a className="text-white hover:text-[#DA0025]" href="about-us">
                    About Us
                  </a>
                </li>
                <li className="mb-6">
                  <a className="text-white hover:text-[#DA0025]" href="gallery">
                    Gallery
                  </a>
                </li>
                <li className="mb-6">
                  <a className="text-white hover:text-[#DA0025]" href="contact-us">
                    Contact Us
                  </a>
                </li>
                <li className="mb-6">
                  <a className="text-white hover:text-[#DA0025]" href="privacypolicy">
                    Privacy Policy
                  </a>
                </li>
                <li>
                  <a className="text-white hover:text-[#DA0025]" href="termsandconditions">
                    Terms and Conditions
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="text-[24px] text-white mb-6 sm:mt-0 mt-5">Contact Now</h4>
              <ul>
                <li className="mb-6 flex gap-2 text-white">
                  <svg
                    width="30"
                    height="31"
                    viewBox="0 0 30 31"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <rect
                      y="0.695312"
                      width="30"
                      height="30"
                      rx="15"
                      fill="#DA0025"
                    />
                    <path
                      d="M17.1875 14.9453C17.1693 15.5651 16.9596 16.0846 16.5586 16.5039C16.1393 16.9049 15.6198 17.1146 15 17.1328C14.3802 17.1146 13.8607 16.9049 13.4414 16.5039C13.0404 16.0846 12.8307 15.5651 12.8125 14.9453C12.8307 14.3255 13.0404 13.806 13.4414 13.3867C13.8607 12.9857 14.3802 12.776 15 12.7578C15.6198 12.776 16.1393 12.9857 16.5586 13.3867C16.9596 13.806 17.1693 14.3255 17.1875 14.9453ZM15 16.2578C15.3646 16.2396 15.6745 16.112 15.9297 15.875C16.1667 15.6198 16.2943 15.3099 16.3125 14.9453C16.2943 14.5807 16.1667 14.2708 15.9297 14.0156C15.6745 13.7786 15.3646 13.651 15 13.6328C14.6354 13.651 14.3255 13.7786 14.0703 14.0156C13.8333 14.2708 13.7057 14.5807 13.6875 14.9453C13.7057 15.3099 13.8333 15.6198 14.0703 15.875C14.3255 16.112 14.6354 16.2396 15 16.2578ZM20.25 14.9453C20.2135 15.7656 19.9219 16.7135 19.375 17.7891C18.8099 18.8646 18.1719 19.9036 17.4609 20.9062C16.75 21.9271 16.1484 22.7383 15.6562 23.3398C15.474 23.5586 15.2552 23.668 15 23.668C14.7448 23.668 14.526 23.5586 14.3438 23.3398C13.8516 22.7383 13.2409 21.9271 12.5117 20.9062C11.8008 19.9036 11.1719 18.8646 10.625 17.7891C10.0781 16.7135 9.78646 15.7656 9.75 14.9453C9.78646 13.4505 10.2969 12.2109 11.2812 11.2266C12.2656 10.2422 13.5052 9.73177 15 9.69531C16.4948 9.73177 17.7344 10.2422 18.7188 11.2266C19.7031 12.2109 20.2135 13.4505 20.25 14.9453ZM15 10.5703C13.7604 10.6068 12.7305 11.0352 11.9102 11.8555C11.0898 12.6758 10.6615 13.7057 10.625 14.9453C10.625 15.3828 10.7799 15.957 11.0898 16.668C11.3997 17.3971 11.7917 18.1536 12.2656 18.9375C12.7396 19.7031 13.2227 20.4141 13.7148 21.0703C14.207 21.7448 14.6354 22.3099 15 22.7656C15.3646 22.3099 15.793 21.7448 16.2852 21.0703C16.7773 20.4141 17.2604 19.7031 17.7344 18.9375C18.2083 18.1536 18.6003 17.3971 18.9102 16.668C19.2201 15.957 19.375 15.3828 19.375 14.9453C19.3385 13.7057 18.9102 12.6758 18.0898 11.8555C17.2695 11.0352 16.2396 10.6068 15 10.5703Z"
                      fill="white"
                    />
                  </svg>
                  114 Desborough Road, High <br />
                  Wycombe HP11 2PU, UK
                </li>
                <li className="mb-6">
                  <a
                    className="flex gap-2 items-center text-white hover:text-[#DA0025]"
                    href="tel:+44 01494 473000"
                  >
                    <svg
                      width="30"
                      height="31"
                      viewBox="0 0 30 31"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <rect
                        y="0.386719"
                        width="30"
                        height="30"
                        rx="15"
                        fill="#DA0025"
                      />
                      <path
                        d="M15 20.1055C14.599 20.1419 14.3802 20.3607 14.3438 20.7617C14.3802 21.1628 14.599 21.3815 15 21.418C15.401 21.3815 15.6198 21.1628 15.6562 20.7617C15.6198 20.3607 15.401 20.1419 15 20.1055ZM17.625 9.38672H12.375C11.8828 9.40495 11.4727 9.57812 11.1445 9.90625C10.8164 10.2344 10.6432 10.6445 10.625 11.1367V21.6367C10.6432 22.1289 10.8164 22.5391 11.1445 22.8672C11.4727 23.1953 11.8828 23.3685 12.375 23.3867H17.625C18.1172 23.3685 18.5273 23.1953 18.8555 22.8672C19.1836 22.5391 19.3568 22.1289 19.375 21.6367V11.1367C19.3568 10.6445 19.1836 10.2344 18.8555 9.90625C18.5273 9.57812 18.1172 9.40495 17.625 9.38672ZM18.5 21.6367C18.5 21.8919 18.418 22.1016 18.2539 22.2656C18.0898 22.4297 17.8802 22.5117 17.625 22.5117H12.375C12.1198 22.5117 11.9102 22.4297 11.7461 22.2656C11.582 22.1016 11.5 21.8919 11.5 21.6367V11.1367C11.5 10.8815 11.582 10.6719 11.7461 10.5078C11.9102 10.3438 12.1198 10.2617 12.375 10.2617H17.625C17.8802 10.2617 18.0898 10.3438 18.2539 10.5078C18.418 10.6719 18.5 10.8815 18.5 11.1367V21.6367Z"
                        fill="white"
                      />
                    </svg>
                    +44 01494 473000
                  </a>
                </li>
                <li className="mb-6">
                  <a
                    className="flex gap-2 items-center text-white hover:text-[#DA0025]"
                    href="mailto:info@bestsizzler.com"
                  >
                    <svg
                      width="30"
                      height="31"
                      viewBox="0 0 30 31"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <rect
                        y="0.386719"
                        width="30"
                        height="30"
                        rx="15"
                        fill="#DA0025"
                      />
                      <path
                        d="M8 12.8867C8.01823 12.3945 8.19141 11.9844 8.51953 11.6562C8.84766 11.3281 9.25781 11.1549 9.75 11.1367H20.25C20.7422 11.1549 21.1523 11.3281 21.4805 11.6562C21.8086 11.9844 21.9818 12.3945 22 12.8867V19.8867C21.9818 20.3789 21.8086 20.7891 21.4805 21.1172C21.1523 21.4453 20.7422 21.6185 20.25 21.6367H9.75C9.25781 21.6185 8.84766 21.4453 8.51953 21.1172C8.19141 20.7891 8.01823 20.3789 8 19.8867V12.8867ZM8.875 12.8867V13.9805L14.2344 17.8906C14.7448 18.237 15.2552 18.237 15.7656 17.8906L21.125 13.9805V12.8867C21.125 12.6315 21.043 12.4219 20.8789 12.2578C20.7148 12.0938 20.5052 12.0117 20.25 12.0117H9.72266C9.48568 12.0117 9.28516 12.0938 9.12109 12.2578C8.95703 12.4219 8.86589 12.6315 8.84766 12.8867H8.875ZM8.875 15.0742V19.8867C8.875 20.1419 8.95703 20.3516 9.12109 20.5156C9.28516 20.6797 9.49479 20.7617 9.75 20.7617H20.25C20.5052 20.7617 20.7148 20.6797 20.8789 20.5156C21.043 20.3516 21.125 20.1419 21.125 19.8867V15.0742L16.2852 18.6016C15.9023 18.8932 15.474 19.0391 15 19.0391C14.526 19.0391 14.0977 18.8932 13.7148 18.6016L8.875 15.0742Z"
                        fill="white"
                      />
                    </svg>
                    info@bestsizzler.com
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="text-[24px] text-white mb-6">
                Subscribe For Updates
              </h4>
              <div className="flex items-center gap-2">
                <input
                  type="mail"
                  placeholder="Email Address"
                  className="bg-white rounded-full px-[15px] py-[5px] outline-none"
                />
                <button className="text-white rounded-full bg-[#DA0025] px-[15px] py-[5px]">
                  Subscribe
                </button>
              </div>
              <div className="mt-7">
                <ul className="flex items-center gap-2">
                  <li>
                    <a href="">
                      <svg
                        width="40"
                        height="41"
                        viewBox="0 0 40 41"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <rect
                          y="0.981934"
                          width="40"
                          height="40"
                          rx="20"
                          fill="#DA0025"
                        />
                        <path
                          d="M23.25 22.1069H21.1992V28.2319H18.4648V22.1069H16.2227V19.5913H18.4648V17.6499C18.4648 15.4624 19.7773 14.2319 21.7734 14.2319C22.7305 14.2319 23.7422 14.4233 23.7422 14.4233V16.5835H22.6211C21.5273 16.5835 21.1992 17.2397 21.1992 17.9507V19.5913H23.6328L23.25 22.1069Z"
                          fill="white"
                        />
                      </svg>
                    </a>
                  </li>
                  <li>
                    <a href="">
                      <svg
                        width="40"
                        height="41"
                        viewBox="0 0 40 41"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <rect
                          y="0.981934"
                          width="40"
                          height="40"
                          rx="20"
                          fill="#DA0025"
                        />
                        <path
                          d="M16.6133 26.4819H14.0703V18.3062H16.6133V26.4819ZM15.3281 17.2124C14.5352 17.2124 13.8789 16.5288 13.8789 15.7085C13.8789 14.9155 14.5352 14.2593 15.3281 14.2593C16.1484 14.2593 16.8047 14.9155 16.8047 15.7085C16.8047 16.5288 16.1484 17.2124 15.3281 17.2124ZM26.1016 26.4819H23.5859V22.5171C23.5859 21.5601 23.5586 20.3569 22.2461 20.3569C20.9336 20.3569 20.7422 21.3687 20.7422 22.4351V26.4819H18.1992V18.3062H20.6328V19.4272H20.6602C21.0156 18.7983 21.8359 18.1147 23.0664 18.1147C25.6367 18.1147 26.1289 19.8101 26.1289 21.9976V26.4819H26.1016Z"
                          fill="white"
                        />
                      </svg>
                    </a>
                  </li>
                  <li>
                    <a href="">
                      <svg
                        width="40"
                        height="41"
                        viewBox="0 0 40 41"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <rect
                          y="0.981934"
                          width="40"
                          height="40"
                          rx="20"
                          fill="#DA0025"
                        />
                        <path
                          d="M25.4883 16.1772C26.9648 17.6538 27.8789 19.5874 27.8789 21.6968C27.8789 25.9858 24.293 29.5015 19.9688 29.5015C18.668 29.5015 17.4023 29.1499 16.2422 28.5522L12.1289 29.6069L13.2188 25.564C12.5508 24.4038 12.1641 23.0679 12.1641 21.6616C12.1641 17.3726 15.6797 13.8569 19.9688 13.8569C22.0781 13.8569 24.0469 14.7007 25.4883 16.1772ZM19.9688 28.1655C23.5547 28.1655 26.543 25.2476 26.543 21.6968C26.543 19.939 25.8047 18.3218 24.5742 17.0913C23.3438 15.8608 21.7266 15.1929 20.0039 15.1929C16.418 15.1929 13.5 18.1108 13.5 21.6616C13.5 22.8921 13.8516 24.0874 14.4844 25.1421L14.6602 25.3882L13.9922 27.7788L16.4531 27.1108L16.6641 27.2515C17.6836 27.8491 18.8086 28.1655 19.9688 28.1655ZM23.5547 23.314C23.7305 23.4194 23.8711 23.4546 23.9062 23.5601C23.9766 23.6304 23.9766 24.0171 23.8008 24.4741C23.625 24.9312 22.8516 25.353 22.5 25.3882C21.8672 25.4937 21.375 25.4585 20.1445 24.896C18.1758 24.0522 16.9102 22.0835 16.8047 21.978C16.6992 21.8374 16.0312 20.9233 16.0312 19.939C16.0312 18.9897 16.5234 18.5327 16.6992 18.3218C16.875 18.1108 17.0859 18.0757 17.2266 18.0757C17.332 18.0757 17.4727 18.0757 17.5781 18.0757C17.7188 18.0757 17.8594 18.0405 18.0352 18.4272C18.1758 18.814 18.5977 19.7632 18.6328 19.8687C18.668 19.9741 18.7031 20.0796 18.6328 20.2202C18.2812 20.9585 17.8594 20.9233 18.0703 21.2749C18.8438 22.5757 19.582 23.0327 20.7422 23.5952C20.918 23.7007 21.0234 23.6655 21.1641 23.5601C21.2695 23.4194 21.6562 22.9624 21.7617 22.7866C21.9023 22.5757 22.043 22.6108 22.2188 22.6812C22.3945 22.7515 23.3438 23.2085 23.5547 23.314Z"
                          fill="white"
                        />
                      </svg>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            <div></div>
            <div></div>
          </div>
        </div>
      </div>
      <div className="flex items-center gap-2 bg-[#1B1B1B] text-[#A5A5A5] justify-center font-[400] p-[9px] sm:text-[16px] text-[12px]">
        Copyright
        <svg
          width="16"
          height="17"
          viewBox="0 0 16 17"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M8 0.535156C6.5 0.555989 5.15625 0.920573 3.96875 1.62891C2.76042 2.33724 1.80208 3.29557 1.09375 4.50391C0.385417 5.69141 0.0208333 7.03516 0 8.53516C0.0208333 10.0352 0.385417 11.3789 1.09375 12.5664C1.80208 13.7747 2.76042 14.7331 3.96875 15.4414C5.15625 16.1497 6.5 16.5143 8 16.5352C9.5 16.5143 10.8438 16.1497 12.0312 15.4414C13.2396 14.7331 14.1979 13.7747 14.9062 12.5664C15.6146 11.3789 15.9792 10.0352 16 8.53516C15.9792 7.03516 15.6146 5.69141 14.9062 4.50391C14.1979 3.29557 13.2396 2.33724 12.0312 1.62891C10.8438 0.920573 9.5 0.555989 8 0.535156ZM8 15.5352C6.70833 15.5143 5.53125 15.1914 4.46875 14.5664C3.42708 13.9414 2.59375 13.1081 1.96875 12.0664C1.34375 11.0039 1.02083 9.82682 1 8.53516C1.02083 7.24349 1.34375 6.06641 1.96875 5.00391C2.59375 3.96224 3.42708 3.12891 4.46875 2.50391C5.53125 1.87891 6.70833 1.55599 8 1.53516C9.29167 1.55599 10.4688 1.87891 11.5312 2.50391C12.5729 3.12891 13.4062 3.96224 14.0312 5.00391C14.6562 6.06641 14.9792 7.24349 15 8.53516C14.9792 9.82682 14.6562 11.0039 14.0312 12.0664C13.4062 13.1081 12.5729 13.9414 11.5312 14.5664C10.4688 15.1914 9.29167 15.5143 8 15.5352ZM10.125 6.41016C10.3542 6.59766 10.5938 6.59766 10.8438 6.41016C11.0312 6.18099 11.0312 5.94141 10.8438 5.69141C10.0312 4.94141 9.08333 4.56641 8 4.56641C6.91667 4.56641 5.97917 4.94141 5.1875 5.69141C4.41667 6.48307 4.02083 7.43099 4 8.53516C4.02083 9.63932 4.41667 10.5872 5.1875 11.3789C5.95833 12.1289 6.89583 12.5143 8 12.5352C9.10417 12.5143 10.0521 12.1289 10.8438 11.3789C11.0312 11.1289 11.0312 10.8893 10.8438 10.6602C10.5938 10.4727 10.3542 10.4727 10.125 10.6602C9.52083 11.2227 8.8125 11.5039 8 11.5039C7.1875 11.5039 6.47917 11.2227 5.875 10.6602C5.29167 10.0768 5 9.36849 5 8.53516C5 7.70182 5.29167 6.99349 5.875 6.41016C6.47917 5.84766 7.1875 5.56641 8 5.56641C8.8125 5.56641 9.52083 5.84766 10.125 6.41016Z"
            fill="#A5A5A5"
          />
        </svg>
        2024 Sizzler . All Rights Reserved. Powered By Fast Ranking
      </div>
    </div>
  );
};

export default Footer;
