import { useNavigate } from "react-router";
import { valuesBoxes, valuesNumbers } from "../../data/data";

import styles from "./about.module.css";

const Values = () => {
  const navigate = useNavigate();
  return (
    <div>
      <div className={styles["values-image"]}></div>
      <div className={`${styles["values-content"]} sections-padding`}>
        <div className={`${styles.values} container`}>
          <div>
            <p className="paragraph">Values</p>
            <h2>My core work values</h2>
          </div>
          <button onClick={() => navigate("/contact")}>Book a Class</button>
        </div>
        {/* Boxes */}
        <div className={`${styles["values-boxes"]} container`}>
          {valuesBoxes.map((ele) => {
            return (
              <div key={ele?.id} data-aos="fade-right">
                <i className={ele?.icon}></i>
                <h3>{ele?.title}</h3>
                <p>
                  Bring to the table win survival strategies ensure proactive
                  new domination.
                </p>
              </div>
            );
          })}
        </div>
      </div>
      <div className={`${styles.numbers} container`}>
        {valuesNumbers.map((ele) => {
          return (
            <div key={ele?.id}>
              <h3>{ele?.number}</h3>
              <p>{ele?.description}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Values;
