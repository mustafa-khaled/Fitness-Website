import { Link } from "react-router-dom";
import { ourTrainers } from "../../data/data";

import styles from "./trainers.module.css";

const OurTrainers = () => {
  return (
    <div className={`${styles["our-trainers"]} container sections-padding`}>
      <div>
        <p className="paragraph">Our Trainers</p>
        <h2>We Trained You to Gain</h2>
      </div>
      <div className={styles["trainers-boxes"]}>
        {ourTrainers.map((ele) => {
          return (
            <div key={ele.id} data-aos="fade-right">
              <img src={ele.image} alt="trainer" />
              <div className={styles.info}>
                <div>
                  <h4>{ele.name}</h4>
                  <p>
                    <i className="fa-solid fa-star"></i>/5
                  </p>
                </div>
                <h5>Specializations :</h5>
                <p>Cross fit Expert, Nutrition & Rehab</p>
                <Link
                  href="https://www.linkedin.com/in/the-mustafa-khaled/"
                  target="_blank">
                  <i className="fa-brands fa-linkedin"></i>
                </Link>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default OurTrainers;
