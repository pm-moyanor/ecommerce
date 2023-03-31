import Footer from "./Footer";
import FooterBanner from "./FooterBanner";
import HeroBanner from "./HeroBanner/HeroBanner";
import Navbar from "./Navbar";
import { Lexend } from "@next/font/google";
import Cart from "./Cart";
import Shop from "./Shop";
import Card from "./Card";
import productsWithImgs from "./data";
import styles from "./Layout.module.css";

const lexend = Lexend({ subsets: ["latin"], weight: "400" });
console.log(productsWithImgs[0].title);
export default function () {
  return (
    <div className={`${lexend.className} layout`}>
      <header className="layout__header">
        <Navbar />
        <HeroBanner />
      </header>
      <main className={`layout__main main-container`}>
        {/* <section className={styles.section}>
          <div className={styles.title}>
            <h2>Best Seller Products</h2>
            <h5>There are many variation passages</h5>
          </div>
          <div className={styles.products}>
            {productsWithImgs.map((product) => {
              return <Card product={product} />;
            })}
          </div>
        </section> */}

        {/* <Shop /> */}
        {/* <Cart/> */}
      </main>
      <footer className="layout__footer footer-container">
        <Footer />
      </footer>
    </div>
  );
}
