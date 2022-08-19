import Logo from "@/components/Logo";
import Menu from "@/components/Menu";
import styles from "@/styles/Header.module.scss";

const Header = () => {
  return (
    <header className={styles.header}>
      <Logo />
      <Menu />
    </header>
  );
};

export default Header;
