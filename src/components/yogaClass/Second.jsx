import styles from "./yogaClass.module.css";
import photo1 from "../../assets/yoga2.png";

const Second = () => {
  return (
    <div className={`${styles.second}  container sections-padding`}>
      <div
        data-aos="fade-down"
        data-aos-easing="linear"
        data-aos-duration="1500">
        <img src={photo1} alt="" />
        <span>March 22, 2022</span>
        <span>Fat Loss</span>
        <h2>The Healthy Life Style For All</h2>
        <p>
          Proactively envisioned multimedia based expertise crosses media growth
          strategies. Seamlessly visualize quality intelectual captal without
          superor collaboration idea sharing Holistically pontficate installed
          based portals after maintainabled products. Phosfluorescently engaged
          world wide methodologies with enabled Completely pursue scalable
          customer service through sustainable potentialities
        </p>
        <ul>
          <li>A natural way of your health.</li>
          <li>Train Yourself to Exercise.</li>
          <li>Enhancing the personal healing.</li>
        </ul>
        <h3>Make real time a health improvements</h3>
        <p>
          Proactively envisioned multimedia based expertise crosses media growth
          strategies. Seamlessly visualize quality intelectual captal without
          superor collaboration idea sharing Holistically pontficate installed
          based portals after maintainabled products. Phosfluorescently engaged
          world wide methodologies with enabled Completely pursue scalable
          customer service through sustainable potentialities
        </p>
        <ul>
          <li>
            It brings the right people together with all the right information
            and tools to get work done
          </li>
          <li>
            We provide operational efficiency, data security, and flexible scale
          </li>
          <li>
            Your best work, together in one package that works seamlessly from
            your computer
          </li>
        </ul>
      </div>
      <div data-aos="fade-up" data-aos-duration="3000">
        <h3>Class Details</h3>
        <p>Objectively innovate empowered manufactured products</p>

        <p className={styles.info}>
          Duration : <span>45 Minutes </span>
        </p>

        <p className={styles.info}>
          Intensity :<span>High </span>
        </p>
        <p className={styles.info}>
          Fitness Level :<span>Advanced </span>
        </p>
        <p className={styles.info}>
          Schedule :<span>Monday, Saturday </span>
        </p>
        <button>Book a Class</button>
      </div>
    </div>
  );
};

export default Second;
