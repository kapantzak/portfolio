import styles from "@/styles/About.module.scss";
import useScrollPosition from "hooks/useScrollPosition";

const scaleUpTo = (scrollPosition, upToPosition) => {
  if (scrollPosition >= upToPosition) return 1;

  return scrollPosition / upToPosition;
};

const About = () => {
  const scrollPosition = useScrollPosition();

  return (
    <div
      className={styles.wrapper}
      style={{
        transform: `scale(${scaleUpTo(scrollPosition, 1200)}) translateY(${
          scrollPosition / 2.3
        }px)`,
      }}
    >
      <h1 className={styles.header}>
        &#128075; Hi! <br />
        My name is <strong>John Kapantzakis</strong> and I build things for the{" "}
        <strong>web</strong>
      </h1>
      {scrollPosition}
      <div className={styles.techSection}>
        <h2 className={styles.secondaryHeader}>My favorite technologies are</h2>
        <p>JavaScript, React, Nextjs, HTML, CSS</p>
      </div>
    </div>
  );
};

export default About;
