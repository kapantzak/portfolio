import Menu from "@/components/Menu";
import styles from "@/styles/Header.module.scss";

const Header = () => {
  return (
    <header className={styles.header}>
      <Menu />
    </header>
  );
};

export default Header;
