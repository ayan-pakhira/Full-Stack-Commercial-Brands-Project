import styles from "../styles/global.module.css";
import heroImg from "../assets/image/Group1.png";
import logo from "../assets/image/Logo.png";
import Filter from "./Filter";
import Product from "./Product";
import bell from "../assets/image/bell.svg";
import cart from "../assets/image/carts.svg";
import girl from "../assets/image/G1.jpg";
import arrow from "../assets/image/arrow.svg";
import Footer from "../components/Footer";
import Dropdown from "../components/Dropdown";
import search from "../assets/image/search.png";
import "../App.css";
import Header from "../components/Header";

function Home() {
  return (
    <>
      <header className={styles.header}>
        <div className={styles.headerContent}>
          <div className={styles.left}>
            <img
              src={logo}
              width={106}
              height={36}
              alt="Logo"
              className={styles.logo}
            />
          </div>
          <div className={styles.mid}>
            <a href="#" />
            <span className={styles.listing}>Shop</span>
            <span className={styles.listing}>New collection</span>
            <span className={styles.listing}>Review</span>
            <span className={styles.listing}>
              Contact{" "}
              <img
                src={arrow}
                width={28}
                height={28}
                className={styles.girll}
              />
            </span>
          </div>
          <div className={styles.right}>
            <img src={cart} width={24} height={24} />
            <img src={bell} width={24} height={24} />
            <span className={styles.nameWrap}>
              <img src={girl} width={36} height={36} className={styles.girll} />{" "}
              Amanda Green <img src={arrow} width={12} height={12} />
            </span>
          </div>
        </div>
      </header>

      <section className={styles.HeroPage}>
        <div className={styles.container}>
          <div className={`${styles.flexbox} ${styles.wrapper}`}>
            <div className={styles.leftwrap}>
              <div className={styles.smallText}>
                Absolutely hot collections 🔥
              </div>
              <h1 className={styles.heading}>
                The Best Place To <br /> Find And Buy Amazing{" "}
                <span className={styles.colorheading}>Product</span>
              </h1>

              <button className={`${styles.shopbtn} ${styles.smallText} `}>
                Shop now!
              </button>
            </div>

            <div className={styles.rightwrap}>
              <img src={heroImg} />
            </div>
          </div>
        </div>
      </section>

      {/* <section>
                <div className={styles.searchSection}>
                    <input
                        type="text"
                        placeholder="Search products..."
                        className={styles.searchInput}
                    // value={searchTerm}
                    // onChange={(e) => setSearchTerm(e.target.value)}
                    />
                    <button className={styles.searchButton}>Search</button>
                </div>
            </section>

            <section className={styles.searchbar}>
                <div className={styles.results}>
                    <div className={styles.container}>
                        <div className={styles.wrapper}>
                            <div>
                                <h1 >Product Results <span>1001 products</span></h1>

                            </div>


                        </div>

                    </div>

                </div>


            </section> */}

      

      <section>
                <div className={styles.container}>

                    <div className={styles.cardsStyle}>
                        <Filter />
                        <Product />

                    </div>


                </div>

            </section>

      <Footer />
    </>
  );
}

export default Home;
