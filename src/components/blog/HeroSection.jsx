import styles from "./blog.module.css";

const HeroSection = () => {
  return (
    <div
      className={`${styles["hero-section"]} margin-sections main-background`}
      data-aos="zoom-out-down">
      <h1 className="main-heading">Our Blog</h1>
    </div>
  );
};

export default HeroSection;
