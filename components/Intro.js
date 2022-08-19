import styles from "@/styles/Intro.module.scss";

const Intro = () => {
  return (
    <div>
      <div className={styles.textWrapper}>
        <h1 className={styles.mainText}>Web developer</h1>
      </div>
      <div className={styles.textWrapper}>
        <p className={styles.subText}>I build things for the web</p>
      </div>
      <div className={styles.textWrapper}>
        <p className={styles.subText}>
          Javascript &#8226; React &#8226; Nextjs &#8226; HTML &#8226; CSS
        </p>
      </div>
    </div>
  );
};

export default Intro;
