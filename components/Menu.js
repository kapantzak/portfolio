import Link from "next/link";
import styles from "@/styles/Menu.module.scss";

const Menu = () => {
  return (
    <div className={styles.wrapper}>
      <Link href="/">
        <a className={styles.item}>Home</a>
      </Link>
      <Link href="/about">
        <a className={styles.item}>About</a>
      </Link>
      <Link href="/projects">
        <a className={styles.item}>Projects</a>
      </Link>
      <Link href="/blog">
        <a className={styles.item}>Blog</a>
      </Link>
      <Link href="/contact">
        <a className={styles.item}>Contact</a>
      </Link>
    </div>
  );
};

export default Menu;
