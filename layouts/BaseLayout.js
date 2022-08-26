import Header from "@/components/Header";
import styles from "@/styles/BaseLayout.module.scss";

const BaseLayout = ({ children }) => {
  return (
    <>
      <Header />
      <main className={styles.main}>
        <div className={styles.noiseWrapper}>
          <div className={styles.noise} />
        </div>
        {children}
      </main>
      {/* <footer>Footer</footer> */}
    </>
  );
};

export default BaseLayout;
