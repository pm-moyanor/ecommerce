import styles from "./Card.module.css";

export default function Card({product}) {
  console.log(product);
  return (
    <div className={styles.mainBox}>
      <div className={styles.container}>
        <div className="product-info">
          <img
            src={product.image}
            alt="main-img"
            className={styles.image}
          />
        </div>
      </div>

      <div className={styles.info}>
        <h5>{product.title}</h5>
        <h5 className="product-info_price">{product.price}</h5>
      </div>
    </div>
  );
}
