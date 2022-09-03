import styles from "@/styles/SectionAbout.module.scss";

import { useRef } from "react";
import useRemainingDistanceOfStickyElem from "@/hooks/useRemainingDistanceOfStickyElem";

const SectionAbout = () => {
  const wrapperRef = useRef(null);
  const stickyRef = useRef(null);
  const { progress } = useRemainingDistanceOfStickyElem(
    wrapperRef,
    stickyRef,
    15000
  );

  return (
    <section ref={wrapperRef} className={styles.wrapper}>
      <div ref={stickyRef} className={styles.sticky}>
        <div>
          <h2 style={{ fontSize: "5vw", fontWeight: 400, textAlign: "center" }}>
            I BUILD THINGS FOR THE WEB
          </h2>
        </div>
      </div>
      <div style={{ height: "15000px" }}></div>
    </section>
  );
};

export default SectionAbout;
