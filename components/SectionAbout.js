import styles from "@/styles/SectionAbout.module.scss";

import { useRef } from "react";
import useRemainingDistanceOfStickyElem from "@/hooks/useRemainingDistanceOfStickyElem";
import { adjustProgress } from "@/utils/progressHelpers";

const SectionAbout = () => {
  const wrapperRef = useRef(null);
  const stickyRef = useRef(null);
  const { progress } = useRemainingDistanceOfStickyElem(
    wrapperRef,
    stickyRef,
    15000
  );

  const quoteProgress = adjustProgress(0, 0.1, progress);
  const separatorProgress = adjustProgress(0, 0.2, progress);

  return (
    <section ref={wrapperRef} className={styles.wrapper}>
      <div ref={stickyRef} className={styles.sticky}>
        <div className={styles.leftWrapper}>
          <p
            className={styles.quote}
            style={{
              opacity: quoteProgress,
              transform: `translateY(${50 - quoteProgress * 50}%)`,
            }}
          >
            I build things for the web using&hellip;
          </p>
        </div>
        <div
          className={styles.separator}
          style={{ top: `${100 - separatorProgress * 100}%` }}
        />
        <div className={styles.rightWrapper}>
          <div className={styles.firstColumn}>Javascript</div>
        </div>
      </div>
      <div style={{ height: "15000px" }}></div>
    </section>
  );
};

export default SectionAbout;
