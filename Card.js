import styles from "./Card.module.css";

export default function Card(product) {
  return (
    <div className={styles.mainBox}>
      <div className={styles.container}>
        <div className="product-info">
          <img
            src="./images/headphones_a_2.webp"
            alt="main-img"
            className={styles.image}
          />
        </div>
      </div>

      <div className={styles.info}>
        <h5>Beats Studio3 Wireless</h5>
        <h5 className="product-info_price">$201</h5>
      </div>
    </div>
  );
}
