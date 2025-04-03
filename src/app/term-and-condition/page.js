import Footer from "@/components/Footer";
import Header from "@/components/Header";
import ResponsiveHeader from "@/components/ResponsiveHeader";
import React from "react";


const TermsandConditions = () => {
    return (
        <div>
            <Header />
            <ResponsiveHeader />
            <div className="xl:w-[1280px] lg:w-[1080px] md:w-[786px] sm:w-[600px] sm:mx-auto mx-4 my-10">
                <h1 className="font-[500] text-[36px] sm:text-[70px] text-[#000000] sm:text-start text-center">
                    Terms and Conditions
                </h1>
                <div className="mt-4">
                    <div className="mb-6">
                        <div>
                            <p className="font-[400] sm:text-[16px] text-[14px] text-[#595959] mt-2">
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam
                                elementum ligula neque, in ullamcorper risus accumsan at. Nulla
                                leo augue, pellentesque ut sapien nec, finibus sagittis dolor
                                leo augue, pellentesque ut sapien nec, finibus sagittis dolor
                            </p>
                            <p className="font-[400] sm:text-[16px] text-[14px] text-[#595959] mt-2">
                                These Terms will apply to any contract between us for the sale
                                of Products to you (Contract). Please read these Terms carefully
                                and make sure that you understand them before ordering any
                                Products from our site. Please note that by ordering any of our
                                Products, you agree to be bound by these Lorem ipsum dolor sit
                                amet, consectetur adipiscing elit. Aliquam elementum ligula
                                neque, in ullamcorper risus accumsan at. Nulla leo augue,
                                pellentesque ut sapien nec, finibus sagittis dolor. Phasellus in
                                maximus mi. Curabitur scelerisque dapibus nunc. Integer et nisi
                                non enim convallis tincidunt at elementum nunc. Pellentesque nec
                                erat lacus. Duis est ex, ullamcorper id enim quis, dignissim
                                tempor nulla.
                            </p>
                            <p className="font-[400] sm:text-[16px] text-[14px] text-[#595959] mt-2">
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam
                                elementum ligula neque, in ullamcorper risus accumsan at
                            </p>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    );
};

export default TermsandConditions;

