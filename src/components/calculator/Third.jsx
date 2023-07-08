import styles from "./calculator.module.css";

const Third = () => {
  return (
    <div className={styles.third}>
      <div className="container">
        <h2>Subscribe to my weekly newsletter today!</h2>
        <div className={styles.input_holder}>
          <input type="text" placeholder="Enter Your Email" />
          <button>Subscribe</button>
        </div>
      </div>
    </div>
  );
};

export default Third;
