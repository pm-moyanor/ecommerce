
import Footer from "./Footer";
import FooterBanner from "./FooterBanner";
import HeroBanner from "./HeroBanner/HeroBanner";
import Navbar from "./Navbar";
import { Lexend } from "@next/font/google";

const lexend = Lexend({subsets: ['latin'], weight:'400'})

export default function(){
    return(
        <div className={`${lexend.className} layout`}> 
        <header>
         
            <Navbar/>
            <HeroBanner/>
        </header>
        <main className={` main-container `}>

        </main>
        <footer className="footer-container">
          
            <Footer/>
        </footer>
   </div>
    )
}