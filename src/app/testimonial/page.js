"use client"
import Head from 'next/head';
import Footer from '@/components/Footer';
import Header from '@/components/Header';
import ResponsiveHeader from '@/components/ResponsiveHeader';

const Testimonial = () => {
  return (
    <>
      <Head>
        <title>Testimonials</title>
        <meta name="description" content="Read what people are saying about our product." />
      </Head>

      <div>
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
          <h1 className="text-center text-white sm:text-[80px] text-[40px] font-[500]">
            Testimonials
          </h1>
        </div>

        <div className="relative">
          <div>
            <img
              src="https://res.cloudinary.com/dj7wogsju/image/upload/v1742229323/Component_8_7_ogukya.png"
              className="absolute hidden sm:block left-[-60px] top-[-88px]"
              alt=""
            />
          </div>
          <div>
            <img
              src="https://res.cloudinary.com/dj7wogsju/image/upload/v1742229323/Component_8_7_ogukya.png"
              className="absolute hidden sm:block bottom-[-100px] right-[-60px]"
              alt=""
            />
          </div>

          <div className="xl:w-[1280px] lg:w-[1080px] md:w-[786px] sm:w-[600px] sm:mx-auto mx-4 ">
            <div className="grid grid-cols-1 sm:grid-cols-2 sm:my-20 gap-10 my-10">
              {/* Repeat this testimonial block for each testimonial */}
              {Array(10).fill(null).map((_, index) => (
                <div key={index} className="bg-white rounded-[12px] px-10 py-[34px]">
                  <div className="flex items-center gap-5">
                    <div className="w-[20%]">
                      <img
                        src="https://res.cloudinary.com/dj7wogsju/image/upload/v1742898137/Ellipse_290_i9lmvm.png"
                        className="sm:w-[100px] sm:h-[100px]"
                        alt="User"
                      />
                    </div>
                    <div className="w-[80%]">
                      <h3 className="font-semibold text-[16px] sm:text-[18px]">
                        Brooklyn Simmons
                      </h3>
                      <p className="sm:text-[16px] text-[12px] text-[#595959]">
                        I love how clean and modern the design of this website is. The colors are vibrant yet not overwhelming, and everything looks crisp and fresh.
                      </p>
                    </div>
                  </div>
                  <div className="flex items-end justify-end mt-2">
                    <img
                      src="https://res.cloudinary.com/dj7wogsju/image/upload/v1742898628/Frame_1000007368_tgnug4.png"
                      className="h-[12px]"
                      alt="Rating"
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <Footer />
      </div>
    </>
  );
};

export default Testimonial;
