import React from "react";
import PropTypes from "prop-types";
import styles from "@/styles/IntroText.module.scss";

const sizeStyles = {
  lg: {
    padding: "2vw 1rem",
    fontSize: "10vw",
  },
  md: {
    padding: "1.5vw 1rem",
    fontSize: "5vw",
  },
  sm: {
    padding: "1rem",
    fontSize: "3vw",
  },
};

const IntroText = ({
  tag,
  textAnimationDuration,
  textAnimationDelay,
  ruleAnimationDuration,
  ruleAnimationDelay,
  size,
  children,
}) => {
  const Heading = tag;

  const textInlineStyles = {
    ...sizeStyles[size],
    animationDuration: `${textAnimationDuration}ms`,
    animationDelay: `${textAnimationDelay}ms`,
  };

  const ruleInlineStyles = {
    animationDuration: `${ruleAnimationDuration}ms`,
    animationDelay: `${ruleAnimationDelay}ms`,
  };

  return (
    <>
      <Heading className={styles.header} style={textInlineStyles}>
        {children}
      </Heading>
      <hr className={styles.horizontalRule} style={ruleInlineStyles} />
    </>
  );
};

IntroText.defaultProps = {
  tag: "h1",
  size: "lg",
  textAnimationDuration: 1500,
  textAnimationDelay: 300,
  ruleAnimationDuration: 650,
  ruleAnimationDelay: 250,
};

IntroText.propTypes = {
  tag: PropTypes.oneOf(["h1", "h2", "h3", "h4", "h5", "h6", "p"]),
  size: PropTypes.oneOf(["sm", "md", "lg"]),
  textAnimationDuration: PropTypes.number,
  textAnimationDelay: PropTypes.number,
  ruleAnimationDuration: PropTypes.number,
  ruleAnimationDelay: PropTypes.number,
  children: PropTypes.string,
};

export default IntroText;
