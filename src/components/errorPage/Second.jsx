import styles from "./errorPage.module.css";
import photo from "../../assets/404.png";
import { useNavigate } from "react-router";

const Second = () => {
  const navigate = useNavigate();

  return (
    <div className={`${styles.second} container sections-padding`}>
      <img src={photo} alt="404" />
      <h2>Page Not Found!</h2>
      <p>Sorry, we can’t find the page you’re looking for.</p>
      <button onClick={() => navigate("/Fitness-Website")}>Back To Home</button>
    </div>
  );
};

export default Second;
