import styles from "@/styles/SectionIntro.module.scss";

import { useRef } from "react";
import useRemainingDistanceOfStickyElem from "@/hooks/useRemainingDistanceOfStickyElem";

const SectionIntro = () => {
  const wrapperRef = useRef(null);
  const stickyRef = useRef(null);
  const { progress } = useRemainingDistanceOfStickyElem(
    wrapperRef,
    stickyRef,
    1348
  );

  return (
    <section ref={wrapperRef} className={styles.wrapper}>
      <div ref={stickyRef} className={styles.sticky}>
        <h1 className={styles.heading}>
          <span className={styles.textWeb}>WEB</span>
          <span className={styles.textDeveloper}>DEVELOPER</span>
          <span className={styles.textName}>My name is John Kapantzakis</span>
        </h1>
        <div className={styles.progressBarWrapper}>
          <div
            className={styles.progressBar}
            style={{ width: `${progress * 100}%` }}
          />
        </div>
      </div>
      <div style={{ height: "1500px" }}></div>
    </section>
  );
};

export default SectionIntro;
