import styles from "./trainers.module.css";

import photo1 from "../../assets/tr1.png";
import photo2 from "../../assets/tr2.png";
import photo3 from "../../assets/tr3.png";
import photo4 from "../../assets/trainers2.png";
import photo5 from "../../assets/trainers3.png";
import photo6 from "../../assets/trainers4.png";

const Second = () => {
  return (
    <div className={`${styles.second} container sections-padding`}>
      <div>
        <p className="paragraph">Our Trainers</p>
        <h2>We Trained You to Gain</h2>
      </div>
      <div className={styles.trainers_boxes}>
        <div data-aos="fade-right">
          <img src={photo1} alt="trainer" />
          <div className={styles.info}>
            <div>
              <h4>Madison Froning</h4>
              <p>
                <i className="fa-solid fa-star"></i>/5
              </p>
            </div>
            <h5>Specialisations :</h5>
            <p>Crossfit Expoort, Nutrition & Rehab</p>
            <a
              href="https://www.linkedin.com/in/the-mustafa-khaled/"
              target="_blank">
              <i className="fa-brands fa-linkedin"></i>
            </a>
          </div>
        </div>
        <div data-aos="fade-right">
          <img src={photo2} alt="trainer" />
          <div className={styles.info}>
            <div>
              <h4>Joshua Frankilin</h4>
              <p>
                <i className="fa-solid fa-star"></i>/5
              </p>
            </div>
            <h5>Specialisations :</h5>
            <p>Crossfit Expoort, Nutrition & Rehab</p>
            <a
              href="https://www.linkedin.com/in/the-mustafa-khaled/"
              target="_blank">
              <i className="fa-brands fa-linkedin"></i>
            </a>
          </div>
        </div>
        <div data-aos="fade-right">
          <img src={photo3} alt="trainer" />
          <div className={styles.info}>
            <div>
              <h4>Miranda</h4>
              <p>
                <i className="fa-solid fa-star"></i>/5
              </p>
            </div>
            <h5>Specialisations :</h5>
            <p>Crossfit Expoort, Nutrition & Rehab</p>
            <a
              href="https://www.linkedin.com/in/the-mustafa-khaled/"
              target="_blank">
              <i className="fa-brands fa-linkedin"></i>
            </a>
          </div>
        </div>
        <div data-aos="fade-right">
          <img src={photo4} alt="trainer" />
          <div className={styles.info}>
            <div>
              <h4>Steve Smith</h4>
              <p>
                <i className="fa-solid fa-star"></i>/5
              </p>
            </div>
            <h5>Specialisations :</h5>
            <p>Crossfit Expoort, Nutrition & Rehab</p>
            <a
              href="https://www.linkedin.com/in/the-mustafa-khaled/"
              target="_blank">
              <i className="fa-brands fa-linkedin"></i>
            </a>
          </div>
        </div>
        <div data-aos="fade-right">
          <img src={photo5} alt="trainer" />
          <div className={styles.info}>
            <div>
              <h4>Kane Lucy</h4>
              <p>
                <i className="fa-solid fa-star"></i>/5
              </p>
            </div>
            <h5>Specialisations :</h5>
            <p>Crossfit Expoort, Nutrition & Rehab</p>
            <a
              href="https://www.linkedin.com/in/the-mustafa-khaled/"
              target="_blank">
              <i className="fa-brands fa-linkedin"></i>
            </a>
          </div>
        </div>
        <div data-aos="fade-right">
          <img src={photo6} alt="trainer" />
          <div className={styles.info}>
            <div>
              <h4>Jhon Willson </h4>
              <p>
                <i className="fa-solid fa-star"></i>/5
              </p>
            </div>
            <h5>Specialisations :</h5>
            <p>Crossfit Expoort, Nutrition & Rehab</p>
            <a
              href="https://www.linkedin.com/in/the-mustafa-khaled/"
              target="_blank">
              <i className="fa-brands fa-linkedin"></i>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Second;
