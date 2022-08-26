import styles from "@/styles/Intro.module.scss";
import useScrollPosition from "hooks/useScrollPosition";

const calculateOpacity = ({ scrollPosition, disapearAtPosition }) =>
  (disapearAtPosition - scrollPosition) / disapearAtPosition;

const Fadeout = ({ scrollPosition, text, opacityPositions }) => {
  return (text || "").split("").map((char, index) => {
    const disapearAtPosition = opacityPositions[index];
    const sign = index % 2 === 0 ? 1 : -1;
    const rotationReducer = 50;

    return (
      <div
        key={index}
        style={{
          opacity: calculateOpacity({
            scrollPosition,
            disapearAtPosition,
          }),
          transform: `rotate(${(scrollPosition / rotationReducer) * sign}deg)`,
        }}
      >
        {char}
      </div>
    );
  });
};

const Intro = () => {
  const scrollPosition = useScrollPosition();

  return (
    <div
      className={styles.wrapper}
      style={{ transform: `translateY(${scrollPosition / 1.4}px)` }}
    >
      <div
        className={styles.firstWord}
        style={{ letterSpacing: `calc(1.5vw + ${scrollPosition / 10}px)` }}
      >
        <Fadeout
          scrollPosition={scrollPosition}
          text="WEB"
          opacityPositions={[180, 150, 120].map((x) => x * 4)}
        />
      </div>
      <div
        className={styles.secondWord}
        style={{ letterSpacing: `calc(1.5vw + ${scrollPosition / 20}px)` }}
      >
        <Fadeout
          scrollPosition={scrollPosition}
          text="DEVELOPER"
          opacityPositions={[280, 270, 260, 250, 240, 230, 220, 210, 200].map(
            (x) => x * 4
          )}
        />
      </div>
      <div className={styles.recording} />
    </div>
  );
};

export default Intro;
