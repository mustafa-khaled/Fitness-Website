import styles from "./home.module.css";

const FivethSection = () => {
  return (
    <div className={`${styles.five} container`}>
      <div className={styles.five_box}>
        <h4>01</h4>
        <p>Fitnes Taining</p>
      </div>
      <div className={styles.five_box}>
        <h4>02</h4>
        <p>Regular Routine</p>
      </div>
      <div className={styles.five_box}>
        <h4>03</h4>
        <p>Deit Maintenance</p>
      </div>

      <div className={styles.five_box}>
        <i className="fa-brands fa-google"></i>
        <div>
          <p>Review on Google</p>
          <div>
            <i className="fa-solid fa-star"></i>
            <i className="fa-solid fa-star"></i>
            <i className="fa-solid fa-star"></i>
            <i className="fa-solid fa-star"></i>
            <i className="fa-solid fa-star"></i>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FivethSection;
