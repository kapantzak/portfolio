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
  const jsProgress = adjustProgress(0.2, 0.3, progress);
  const reactProgress = adjustProgress(0.3, 0.4, progress);
  const nextProgress = adjustProgress(0.4, 0.5, progress);
  const htmlProgress = adjustProgress(0.5, 0.6, progress);

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
          <div
            className={styles.techWrapper}
            style={{
              transform: `translateX(-${100 - jsProgress * 100}%)`,
            }}
          >
            JAVASCRIPT
          </div>
          <div
            className={styles.techWrapper}
            style={{
              transform: `translateX(-${100 - reactProgress * 100}%)`,
            }}
          >
            REACT
          </div>
          <div
            className={styles.techWrapper}
            style={{
              transform: `translateX(-${100 - nextProgress * 100}%)`,
            }}
          >
            NEXTJS
          </div>
          <div
            className={styles.techWrapper}
            style={{
              transform: `translateX(-${100 - htmlProgress * 100}%)`,
            }}
          >
            HTML &amp; CSS
          </div>
        </div>
      </div>
      <div style={{ height: "15000px" }}></div>
    </section>
  );
};

export default SectionAbout;
