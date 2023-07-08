import { useState } from "react";
import styles from "./contact.module.css";

const Four = () => {
  const [active, setActive] = useState(Array(4).fill(false));
  const [activeIndex, setActiveIndex] = useState(-1);

  const paragraphHandler = (index) => {
    setActive((prevState) => {
      const newState = [...prevState];
      newState[index] = !newState[index];
      return newState;
    });

    setActiveIndex((prevIndex) => (prevIndex === index ? -1 : index));
  };

  return (
    <div className={`${styles.four} sections-padding`}>
      <div>
        <div>
          <h4>What is the Fitnessfit schedule?</h4>
          <i
            className={`fa-solid fa-chevron-down ${
              activeIndex === 0 ? styles.activeIcon : ""
            }`}
            onClick={() => paragraphHandler(0)}></i>
        </div>
        <p className={active[0] ? styles.active : ""}>
          Podcastings operationals changed a managements insides of works flows
          established frame worked takings seamless keys performanced indicators
          offline to maximise the ball while performing
        </p>
      </div>
      <div>
        <div>
          <h4>What is the Fitnessfit schedule?</h4>
          <i
            className={`fa-solid fa-chevron-down ${
              activeIndex === 1 ? styles.activeIcon : ""
            }`}
            onClick={() => paragraphHandler(1)}></i>
        </div>
        <p className={active[1] ? styles.active : ""}>
          Podcastings operationals changed a managements insides of works flows
          established frame worked takings seamless keys performanced indicators
          offline to maximise the ball while performing
        </p>
      </div>

      <div>
        <div>
          <h4>What is the Fitnessfit schedule?</h4>
          <i
            className={`fa-solid fa-chevron-down ${
              activeIndex === 2 ? styles.activeIcon : ""
            }`}
            onClick={() => paragraphHandler(2)}></i>
        </div>
        <p className={active[2] ? styles.active : ""}>
          Podcastings operationals changed a managements insides of works flows
          established frame worked takings seamless keys performanced indicators
          offline to maximise the ball while performing
        </p>
      </div>

      <div>
        <div>
          <h4>What is the Fitnessfit schedule?</h4>
          <i
            className={`fa-solid fa-chevron-down ${
              activeIndex === 3 ? styles.activeIcon : ""
            }`}
            onClick={() => paragraphHandler(3)}></i>
        </div>
        <p className={active[3] ? styles.active : ""}>
          Podcastings operationals changed a managements insides of works flows
          established frame worked takings seamless keys performanced indicators
          offline to maximise the ball while performing
        </p>
      </div>
    </div>
  );
};

export default Four;
