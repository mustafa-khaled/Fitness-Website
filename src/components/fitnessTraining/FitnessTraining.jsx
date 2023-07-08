import styles from "./fitness.module.css";
import photo1 from "../../assets/home4.png";
import photo2 from "../../assets/home3.png";
import photo3 from "../../assets/home2.png";
import { Link, useNavigate } from "react-router-dom";

const FitnessTraining = () => {
  const navigate = useNavigate();

  return (
    <div className={`${styles.second_section} container sections-padding`}>
      <div className={styles.first}>
        <div>
          <p className="paragraph">Our Fitness Training</p>
          <h2>Upcoming Classes</h2>
        </div>
        <div>
          <button onClick={() => navigate("/classes")}>More Class</button>
        </div>
      </div>
      <div className={styles.second}>
        <div
          data-aos="fade-right"
          data-aos-offset="300"
          data-aos-easing="ease-in-sine">
          <img src={photo1} alt="women in gym" />
          <h3>Pilates Training</h3>
          <p>containing Lorem Ipsum passagesand more recently with </p>
          <Link to={"/yogaClass"}>Read More</Link>
        </div>

        <div
          data-aos="fade-right"
          data-aos-offset="300"
          data-aos-easing="ease-in-sine">
          <img src={photo2} alt="women in gym" />
          <h3>Aerobic Training</h3>
          <p>containing Lorem Ipsum passagesand more recently with </p>
          <a href="#">Read More</a>
        </div>

        <div
          data-aos="fade-right"
          data-aos-offset="300"
          data-aos-easing="ease-in-sine">
          <img src={photo3} alt="man in gym" />
          <h3>CrossFit Workout</h3>
          <p>containing Lorem Ipsum passagesand more recently with </p>
          <a href="#">Read More</a>
        </div>
      </div>
    </div>
  );
};

export default FitnessTraining;
