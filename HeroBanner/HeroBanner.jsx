import styles from "./HeroBanner.module.css";

export default function HeroBanner() {
  return (
    <div className={styles.banner}>
      <div>

        <h2>Beats Solo Air</h2>
        <h3>Wireless</h3>
        <h4>HEADPHONES</h4>
        <button className={styles.button}>Shop wireless headphone</button>
      </div>

      <div>
        <img src="./images/headphones_a_4.webp" alt="Beats Solo img" />
      </div>
      <div>
        <h5>Description</h5>
        <h5>
          Praesentium, provident ex voluptatem numquam culpa sit aliquam fugit
          architecto nam unde doloremque soluta reiciendis a ad, molestiae ullam
          recusandae nulla itaque.
        </h5>
      </div>
    </div>
  );
}
