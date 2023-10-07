import styles from "./contact.module.css";

const HeroSection = () => {
  return (
    <div
      className={`${styles["hero-section"]} margin-sections main-background`}
      data-aos="zoom-out-down">
      <h1 className="main-heading">Contact Us</h1>
    </div>
  );
};

export default HeroSection;
