import styles from "./about.module.css";
import photo1 from "../../assets/about2.jpg";
import photo2 from "../../assets/about3.jpg";

const Second = () => {
  return (
    <div className={styles.second} data-aos="fade-right">
      <div>
        <img src={photo1} alt="" />
      </div>
      <div>
        <img src={photo2} alt="" />
      </div>
    </div>
  );
};

export default Second;
