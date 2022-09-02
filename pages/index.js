import styles from "@/styles/Home.module.scss";
import useScrollPosition from "hooks/useScrollPosition";

const Home = () => {
  const scrollPosition = useScrollPosition();

  return (
    <>
      <div className={styles.introOuter}>
        <div className={styles.introWrapper}>
          <h1 className={styles.introHeading}>
            <span className={styles.textWeb}>WEB</span>
            <span className={styles.textDeveloper}>DEVELOPER</span>
            <span className={styles.textName}>My name is John Kapantzakis</span>
          </h1>
          <div className={styles.progressBarWrapper}>
            <div
              className={styles.progressBar}
              style={{ width: `${scrollPosition / 10}%` }}
            />
          </div>
        </div>
        <div style={{ height: "1500px" }}></div>
      </div>
      <div className={styles.secondSection}>
        <div className={styles.secondSectionSticky}>
          <div className={styles.secondSectionFrame}>
            <h2
              style={{ fontSize: "5vw", fontWeight: 400, textAlign: "center" }}
            >
              I BUILD THINGS FOR THE WEB
            </h2>
          </div>
        </div>
        <div style={{ height: "15000px" }}></div>
      </div>
    </>
  );
};

export default Home;
