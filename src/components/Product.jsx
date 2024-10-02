
import products from "../cardData/data";
import styles from '../styles/global.module.css';
import "../App.css";
import heart from '../assets/image/heart.svg';
import plus from '../assets/image/plus.svg';

function Product() {
    
  return (
    
      <>

      

    <div className={styles.productList}>
      {products.map((product) => (
          <div key={product.id} className={styles.productCard}>
          <img
            src={product.image}
            alt="product-image"
            className={styles.productImage}
            />
            <div className={styles.productDetails}>
          <h3 className={styles.productTitle}>{product.title} <span className={styles.heartIcon} >
        <img src={heart} width={20} height={20}/></span>  </h3>
          <p className={styles.productDescription}>{product.description}</p>
          <div className={styles.productFooter}>
            <span className={styles.productPrice}>{product.price}</span>
            <button className={styles.productButton}><span className={styles.plus}><img src={plus} width={16} height={16}/></span> </button>
          </div>
         </div>
        </div>
      ))}
      </div>
      
      </>
  );
}

export default Product;
