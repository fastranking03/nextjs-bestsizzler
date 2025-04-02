import { assets } from "@/assets/assets";
import AboutComp from "@/components/AboutComp";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import HeroComp from "@/components/HeroComp";
import MenuComp from "@/components/MenuComp";

export default function Home() {
 
  return (
      <>
      <Header/>
        <div>
           <HeroComp/>
           <MenuComp/>
           <AboutComp/>
        </div>
      <Footer/>  
      </>
  );
}
