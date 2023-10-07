import { useNavigate } from "react-router";
import styles from "./home.module.css";

const HeroSection = () => {
  const navigate = useNavigate();

  return (
    <div className={styles["hero-section"]} data-aos="zoom-out-down">
      <h1 className="main-heading">
        Keep Your Body
        <br />
        Fit & Strong
      </h1>
      <div>
        <button onClick={() => navigate("/schedule")}>Start Today</button>
        <button>About Me</button>
      </div>
    </div>
  );
};

export default HeroSection;
