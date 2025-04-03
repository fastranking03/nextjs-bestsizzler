import React from 'react'
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import ResponsiveHeader from "@/components/ResponsiveHeader";
const PrivacyPolicy = () => {
    return (
        <div>
            <Header />
            <ResponsiveHeader />
            <div className="xl:w-[1280px] lg:w-[1080px] md:w-[786px] sm:w-[600px] sm:mx-auto mx-4 my-10">
                <h1 className='font-[500] text-[36px] sm:text-[70px] text-[#000000] sm:text-start text-center'>Privacy Policy</h1>
                <div className='mt-6'>

                    <div className='mb-6'>
                        <h4 className='sm:text-[28px] text-[24px] font-[600]'>Welcome to the Sizzler privacy notice</h4>
                        <div>
                            <p className='font-[400] sm:text-[16px] text-[14px] text-[#595959] mt-2'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam elementum ligula neque, in
                                ullamcorper risus accumsan at. Nulla leo augue, pellentesque ut sapien nec, finibus sagittis dolor
                                leo augue, pellentesque ut sapien nec, finibus sagittis dolor
                            </p>
                            <p className='font-[400] sm:text-[16px] text-[14px] text-[#595959] mt-2'>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam elementum ligula neque, in
                                ullamcorper risus accumsan at. Nulla leo augue, pellentesque ut sapien nec, finibus sagittis dolor
                                leo augue, pellentesque ut sapien nec, finibus sagittis dolor.</p>
                        </div>
                    </div>




                </div>

            </div>
            <Footer />
        </div>
    )
}

export default PrivacyPolicy