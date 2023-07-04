import styles from "./yogaClass.module.css";
import photo from "../../assets/yoda3.png";

const Third = () => {
  return (
    <div className={`${styles.third} container`}>
      <img src={photo} alt="" />
    </div>
  );
};

export default Third;
