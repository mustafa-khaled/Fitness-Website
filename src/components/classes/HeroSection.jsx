import styles from "./classes.module.css";

const HeroSection = () => {
  return (
    <div
      className={`${styles["hero-section"]} margin-sections main-background`}
      data-aos="zoom-out-down">
      <h1 className="main-heading">Classes</h1>
    </div>
  );
};

export default HeroSection;
