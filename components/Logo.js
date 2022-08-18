import Link from "next/link";
import PropTypes from "prop-types";
import styles from "@/styles/Logo.module.css";

const ActualLogo = ({ size }) => {
  const sizes = {
    sm: 30,
    md: 60,
    lg: 120,
  };

  const inlineStyles = {
    width: `${sizes[size]}px`,
    height: `${sizes[size]}px`,
  };

  return (
    <div className={styles.logo} style={inlineStyles}>
      JK
    </div>
  );
};

const Logo = ({ size, isLink }) => {
  return (
    (isLink && (
      <Link href="/">
        <a>
          <ActualLogo size={size} />
        </a>
      </Link>
    )) || <ActualLogo size={size} />
  );
};

ActualLogo.propTypes = {
  size: PropTypes.oneOf(["sm", "md", "lg"]).isRequired,
};

Logo.defaultProps = {
  size: "md",
  isLink: true,
};

Logo.propTypes = {
  size: PropTypes.oneOf(["sm", "md", "lg"]),
  isLink: PropTypes.bool,
};

export default Logo;
