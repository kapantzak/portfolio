import styles from "@/styles/Carousel.module.scss";

const Carousel = () => {
  return (
    <div className={styles.scene}>
      <div className={styles.carousel}>
        {[1, 2, 3, 4, 5, 6, 7, 8, 9].map((num) => (
          <div key={num} className={styles.carouselCell}>
            {num}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Carousel;
