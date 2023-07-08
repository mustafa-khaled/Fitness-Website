import styles from "./calculator.module.css";

const First = () => {
  return (
    <div
      className={`${styles.first}  margin-sections main-background`}
      data-aos="zoom-out-down">
      <h1 className="main-heading">BMI Calculator</h1>
    </div>
  );
};

export default First;
