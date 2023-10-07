import styles from "./home.module.css";

const Benefits = () => {
  return (
    <div className={`${styles.benefits} container`}>
      <div
        data-aos="fade-right"
        data-aos-offset="300"
        data-aos-easing="ease-in-sine">
        <h4>01</h4>
        <p>Fitness Training</p>
      </div>
      <div
        data-aos="fade-right"
        data-aos-offset="300"
        data-aos-easing="ease-in-sine">
        <h4>02</h4>
        <p>Regular Routine</p>
      </div>
      <div
        data-aos="fade-right"
        data-aos-offset="300"
        data-aos-easing="ease-in-sine">
        <h4>03</h4>
        <p>Deit Maintenance</p>
      </div>

      <div
        data-aos="fade-right"
        data-aos-offset="300"
        data-aos-easing="ease-in-sine">
        <i className="fa-brands fa-google"></i>
        <div>
          <p>Review on Google</p>
          <div>
            <i className="fa-solid fa-star"></i>
            <i className="fa-solid fa-star"></i>
            <i className="fa-solid fa-star"></i>
            <i className="fa-solid fa-star"></i>
            <i className="fa-solid fa-star"></i>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Benefits;
