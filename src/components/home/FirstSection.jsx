import styles from "./home.module.css";

const FirstSection = () => {
  return (
    <div className={styles.first_section}>
      <h1 className="main-heading">
        Keep Your Body
        <br />
        Fit & Strong
      </h1>
      <div>
        <button>Start Today</button>
        <button>About Me</button>
      </div>
    </div>
  );
};

export default FirstSection;
