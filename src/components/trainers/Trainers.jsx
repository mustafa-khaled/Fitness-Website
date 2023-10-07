import { Link } from "react-router-dom";
import { trainersData } from "../../data/data";

import styles from "./trainers.module.css";

const Trainers = () => {
  return (
    <div className={`${styles.trainers} container sections-padding`}>
      <div className={styles.trainers_head}>
        <p className="paragraph">Our Trainers</p>
        <h2>We Trained You to Gain</h2>
      </div>

      <div className={styles.boxes}>
        {trainersData.map((el) => {
          return (
            <div
              key={el.id}
              className={styles.box}
              data-aos="fade-up"
              data-aos-anchor-placement="top-center">
              <img src={el.image} alt="" />
              <div>
                <div>
                  <h4>{el.name}</h4>
                  <p>
                    <i className="fa-solid fa-star"></i>/5
                  </p>
                </div>
                <h5>Specialisations :</h5>
                <p>{el.title}</p>
                <Link to={el.to}>
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

export default Trainers;
