import styles from "./about.module.css";
import photo2 from "../../assets/about5.png";

const Third = () => {
  return (
    <div
      className={`${styles.third} container sections-padding`}
      data-aos="fade-right">
      <div className={styles.third_one}>
        <div className={styles.one_content}>
          <p className="paragraph">Welcome</p>
          <h2>
            The Story Behind
            <br />
            Our Gym
          </h2>
          <p>
            It is a long established fact that a reader will be distracted by
            the readable content of a page when looking at its layout. point of
            using Lorem Ipsum is
          </p>
        </div>
        <div className={styles.one_content2}>
          <h3>Story</h3>
          <p>
            It is a long established fact that a reader will be distracted by
            the readable content of a page when looking at its layout.point of
            using Lorem Ipsum.
          </p>
          <img src={photo2} alt="" />
        </div>
      </div>
      <div className={styles.third_two}>
        <div className={styles.two_content}>
          <h3>Our Mission</h3>
          <p>
            It is a long established fact that a reader will be distracted by
            the readable content of a page when looking at its layout.point of
            using Lorem Ipsum.
          </p>
        </div>
        <div className={styles.two_content2}>
          <h3>Our Value</h3>
          <p>
            It is a long established fact that a reader will be distracted by
            the readable content of a page when looking at its layout.point of
            using Lorem Ipsum.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Third;
