import styles from "./trainer.module.css";
import photo from "../../assets/tr1.png";

const Second = () => {
  return (
    <div className={`${styles.second} container sections-padding`}>
      <div data-aos="fade-up">
        <img src={photo} alt="" />
        <h2>Madison Froning</h2>
        <p>Grossfit Trainer</p>
        <p className={styles.info}>
          <span>Phone :</span> +20 1151747091
        </p>
        <p className={styles.info}>
          <span>Email :</span> mustafakhaledinfo@gmail.com
        </p>
        <p className={styles.info}>
          <span>Location :</span> Cairo
        </p>
        <a
          href="https://www.linkedin.com/in/the-mustafa-khaled/"
          target="_blank">
          <i className="fa-brands fa-linkedin"></i>
        </a>
      </div>
      <div data-aos="fade-up">
        <h1>Personal Details</h1>
        <p>
          Far far away, behinds the words mountains, far from the countries
          Vokalia and Consonantia, there live the blind texts. Separated they
          lived in Book marks grove rights at the coasts of the Semantics, a
          large language ocean. A small river named Duden flows by the their
          place and supplies it with the necessary regelialia. It is a
          paradisematic country, in which roasted.
        </p>
        <h2>The Healthy Life Style For All</h2>
        <p>
          There are many variations of passangers of Lorem Ipsum availables but
          on the majority have suffered alteration Lorem ipsum dolor sit amet,
          consectetur adipiscing elit. Habitasse .
        </p>
        <ul>
          <li>
            Dynamically target high-payoff intellectual capital for customized
          </li>
          <li>Interactively procrastinate high-payoff content</li>
          <li>
            Credibly reinter mediate backend ideas for cross-platform models
          </li>
        </ul>
        <h2>Make real time a health improvements</h2>
        <p>
          Proactively envisioned multimedia based expertise crosses media growth
          strategies. Seamlessly visualize quality intelectual captal without
          superor collaboration idea sharing Holistically pontficate installed
          based portals after maintainabled products. engaged world wide
          methodologies with enabled Completely pursue scalable customer service
          through sustainable potentialities
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
        <p>
          User generated content in real-time will have multiple touchpoints for
          offshoring. Capitalize on low hanging fruit to identify a ballpark
          value added activity to beta test. Override the digital divide with
          additional clickthrough's from DevOps. Nanotechnology immersion along
          the information highway will close the loop on focusing solely on the
          bottom line.
        </p>
      </div>
    </div>
  );
};

export default Second;
