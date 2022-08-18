import Header from "@/components/Header";
import styles from "@/styles/BaseLayout.module.css";

const BaseLayout = ({ children }) => {
  return (
    <>
      <Header />
      <main className={styles.main}>{children}</main>
      {/* <footer>Footer</footer> */}
    </>
  );
};

export default BaseLayout;
