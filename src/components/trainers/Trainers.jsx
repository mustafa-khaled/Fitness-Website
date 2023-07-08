import styles from "./trainers.module.css";

import photo1 from "../../assets/tr2.png";
import photo2 from "../../assets/tr1.png";
import photo3 from "../../assets/tr3.png";

const Seventh = () => {
  return (
    <div className={`${styles.trainers} container sections-padding`}>
      <div className={styles.trainers_head}>
        <p className="paragraph">Our Trainers</p>
        <h2>We Trained You to Gain</h2>
      </div>

      <div className={styles.boxes}>
        <div
          className={styles.box}
          data-aos="fade-up"
          data-aos-anchor-placement="top-center">
          <img src={photo1} alt="" />
          <div>
            <div>
              <h4>Amanda</h4>
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
        <div
          className={styles.box}
          data-aos="fade-up"
          data-aos-anchor-placement="top-center">
          <img src={photo2} alt="" />
          <div>
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

        <div
          className={styles.box}
          data-aos="fade-up"
          data-aos-anchor-placement="top-center">
          <img src={photo3} alt="" />
          <div>
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
      </div>
    </div>
  );
};

export default Seventh;
