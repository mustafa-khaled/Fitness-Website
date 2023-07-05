import { useNavigate } from "react-router-dom";

import styles from "./trainers.module.css";
import photo from "../../assets/trainerslast.jpg";

const Four = () => {
  const navigate = useNavigate();

  const navHandler = () => {
    navigate("/classes");
  };

  return (
    <div className={`${styles.four} `}>
      <div className={"container "}>
        <img src={photo} alt="" />
        <div>
          <button onClick={() => navHandler()}>Book A class </button>
          <button onClick={() => navHandler()}>More Classes</button>
        </div>
      </div>
    </div>
  );
};

export default Four;
