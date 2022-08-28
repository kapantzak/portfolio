import styles from "@/styles/Home.module.scss";

const Home = () => {
  return (
    <>
      <div>
        <div className={styles.introWrapper}>
          <h1 className={styles.introHeading}>
            <span className={styles.textWeb}>WEB</span>
            <span className={styles.textDeveloper}>DEVELOPER</span>
          </h1>
        </div>
        <div style={{ height: "1500px" }}></div>
      </div>
      <div style={{ backgroundColor: "#fff", color: "#000" }}>
        <h2 className="sticky" style={{ fontSize: "7vw" }}>
          I build things for the web
        </h2>
        <div style={{ height: "1500px" }}></div>
        <div style={{ height: "1500px" }}></div>
      </div>
      <div>
        <h2 className="sticky" style={{ fontSize: "7vw" }}>
          I work as a senior frontend developer
        </h2>
        <div style={{ height: "1500px" }}></div>
        <div style={{ height: "1500px" }}></div>
      </div>
    </>
  );
};

export default Home;
