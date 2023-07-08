import styles from "./yogaClass.module.css";
import photo from "../../assets/yoda3.png";

const Third = () => {
  return (
    <div
      className={`${styles.third} container`}
      data-aos="fade-up"
      data-aos-anchor-placement="top-bottom">
      <img src={photo} alt="" />
    </div>
  );
};

export default Third;
