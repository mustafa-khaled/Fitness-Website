import styles from "./blogSingle.module.css";
import photo from "../../assets/blogSingle.png";
import photo2 from "../../assets/blog9.png";

const HeroSection = () => {
  return (
    <div
      className={`${styles["hero-section"]} container margin-sections `}
      data-aos="zoom-out-down">
      <p className="paragraph">March 22, 2022</p>
      <h2>How to Modify any Program to Improve Your Weakness</h2>
      <div>
        <h4>Fitness</h4>
        <div className={styles.small_image}>
          <img src={photo2} alt="" />
          <p>Benjamin Gray</p>
        </div>
      </div>
      <img src={photo} alt="Program to Improve Your Weakness" />
    </div>
  );
};

export default HeroSection;
