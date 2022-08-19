import PropTypes from "prop-types";
import styles from "@/styles/PageHeader.module.scss";

const PageHeader = ({ children }) => {
  return (
    <div className={styles.textWrapper}>
      <h1 className={styles.header}>{children}</h1>
    </div>
  );
};

PageHeader.propTypes = {
  children: PropTypes.string.isRequired,
};

export default PageHeader;
