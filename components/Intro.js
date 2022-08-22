import { useState } from "react";
import styles from "@/styles/Intro.module.scss";

const Intro = () => {
  //   const [rightSectionWidth, setRightSectionWidth] = useState(15);
  const [inlineStyles, setInlineStyles] = useState({
    leftSectionWidth: 85,
    rightSectionWidth: 15,
    letterOpacity: 1,
  });

  const handleRightSectionMouseEnter = () => {
    setInlineStyles({
      ...inlineStyles,
      leftSectionWidth: 40,
      rightSectionWidth: 60,
      letterOpacity: 0,
    });
  };

  const handleRightSectionMouseLeave = () => {
    setInlineStyles({
      ...inlineStyles,
      leftSectionWidth: 85,
      rightSectionWidth: 15,
      letterOpacity: 1,
    });
  };

  return (
    <div className={styles.wrapper}>
      <div
        className={styles.left}
        style={{ width: `${inlineStyles.leftSectionWidth}vw` }}
      >
        <div className={styles.word}>
          <div>W</div>
          <div>E</div>
          <div>B</div>
        </div>
        <div className={styles.word}>
          <div>D</div>
          <div>E</div>
          <div>V</div>
          {"ELOPER".split("").map((char, index) => (
            <div
              key={index}
              style={{
                opacity: inlineStyles.letterOpacity,
                transitionDuration: `${1000 / (index + 1)}ms`,
              }}
            >
              {char}
            </div>
          ))}
        </div>
      </div>
      <div
        className={styles.right}
        style={{ width: `${inlineStyles.rightSectionWidth}vw` }}
        onMouseEnter={handleRightSectionMouseEnter}
        onMouseLeave={handleRightSectionMouseLeave}
      >
        <div className={styles.rightInnerWrapper}>
          <div className={styles.rightMainText}>I build things for the web</div>
          <div className={styles.rightSecondaryText}>test</div>
        </div>
      </div>
    </div>
  );
};

export default Intro;
