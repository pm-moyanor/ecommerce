import Footer from "./Footer";
import FooterBanner from "./FooterBanner";
import HeroBanner from "./HeroBanner/HeroBanner";
import Navbar from "./Navbar";
import { Lexend } from "@next/font/google";
import Cart from "./Cart";
import Shop from "./Shop";
import Card from "./Card";

const lexend = Lexend({ subsets: ["latin"], weight: "400" });

export default function () {
    return (
        <div className={`${lexend.className} layout`}>
          <header className="layout__header">
            <Navbar />
            {/* <HeroBanner /> */}
            <Card/>
          </header>
          <main className={`layout__main main-container`}>
            <Shop />
            {/* <Cart/> */}
          </main>
          <footer className="layout__footer footer-container">
            <Footer />
          </footer>
        </div>
      );
    }