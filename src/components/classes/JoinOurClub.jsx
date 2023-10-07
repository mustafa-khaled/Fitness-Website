import { useNavigate } from "react-router";
import styles from "./classes.module.css";

const JoinOurClub = () => {
  const navigate = useNavigate();

  return (
    <div className={styles["join-our-club"]} data-aos="zoom-in">
      <div>
        <h2>Join Our Club</h2>
        <p>
          It is a long established fact that a reader will be distracted by the
          readable content of a page when looking at its layout. point of using
          Lorem Ipsum is
        </p>
        <button onClick={() => navigate("/schedule")}>Start Now</button>
      </div>
    </div>
  );
};

export default JoinOurClub;
