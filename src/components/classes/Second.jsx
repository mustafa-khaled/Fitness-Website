import styles from "./classes.module.css";

import photo1 from "../../assets/home4.png";
import photo2 from "../../assets/home2.png";
import photo3 from "../../assets/home3.png";
import photo4 from "../../assets/classes2.png";
import photo5 from "../../assets/classes3.png";
import photo6 from "../../assets/classes4.png";
import { Link } from "react-router-dom";

const Second = () => {
  return (
    <div className={`${styles.second} container sections-padding`}>
      <div className={styles.second_text}>
        <p className="paragraph">Our Trainers</p>
        <h2>We Trained You to Gain</h2>
      </div>
      <div className={styles.classes}>
        <div data-aos="fade-right">
          <img src={photo1} alt="" />
          <h3>Pilates Training</h3>
          <p>containing Lorem Ipsum passagesand more recently with </p>
          <Link to={"/yogaClass"}>Read More</Link>
        </div>
        <div data-aos="fade-right">
          <img src={photo2} alt="" />
          <h3>CrossFit</h3>
          <p>containing Lorem Ipsum passagesand more recently with </p>
          <Link to={"/singleClass"}>Read More</Link>
        </div>
        <div data-aos="fade-right">
          <img src={photo3} alt="" />
          <h3>Aerobic</h3>
          <p>containing Lorem Ipsum passagesand more recently with </p>
          <a href="#">Read More</a>
        </div>
        <div data-aos="fade-right">
          <img src={photo4} alt="" />
          <h3>Yoga As Therapy</h3>
          <p>containing Lorem Ipsum passagesand more recently with </p>
          <a href="#">Read More</a>
        </div>
        <div data-aos="fade-right">
          <img src={photo5} alt="" />
          <h3>Boxing</h3>
          <p>containing Lorem Ipsum passagesand more recently with </p>
          <a href="#">Read More</a>
        </div>
        <div data-aos="fade-right">
          <img src={photo6} alt="" />
          <h3>Energy Dance</h3>
          <p>containing Lorem Ipsum passagesand more recently with </p>
          <Link to={"/yogaClass"}>Read More</Link>
        </div>
      </div>
    </div>
  );
};

export default Second;
