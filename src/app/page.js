import { assets } from "@/assets/assets";
import AboutComp from "@/components/AboutComp";
import Footer from "@/components/Footer";
import GalleryComp from "@/components/GalleryComp";
import Header from "@/components/Header";
import HeroComp from "@/components/HeroComp";
import MenuComp from "@/components/MenuComp";
import PopularComp from "@/components/PopularComp";
import SpecialComp from "@/components/SpecialComp";
export const metadata = {
  title: "Sizzler | Home",
  description: "Generated by create next app",
};
export default function Home() {
 
  return (
      <>
      <Header/>
        <div>
           <HeroComp/>
           <MenuComp/>
           <AboutComp/>
           <SpecialComp/>
           <PopularComp/>
           <GalleryComp/>
        </div>
      <Footer/>  
      </>
  );
}
