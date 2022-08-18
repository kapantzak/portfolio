import styles from "@/styles/Intro.module.css";

const Intro = () => {
  return (
    <div>
      <h1 className={styles.mainText}>Web developer</h1>
      <p className={styles.subText}>I build things for the web</p>
      <p className={styles.subText}>
        Javascript &#8226; React &#8226; Nextjs &#8226; HTML &#8226; CSS
      </p>
    </div>
  );
};

export default Intro;
