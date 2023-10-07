import { gymStoryData } from "../../data/data";

import styles from "./about.module.css";

const GymStory = () => {
  return (
    <div
      className={`${styles["gym-story"]} container sections-padding`}
      data-aos="fade-right">
      <div className={styles["section-one"]}>
        {gymStoryData.slice(0, 2).map((ele) => {
          return (
            <div key={ele.id}>
              {ele?.welcome && <p>Welcome</p>}
              <h2>{ele.title}</h2>
              <p>
                It is a long established fact that a reader will be distracted
                by the readable content of a page when looking at its layout.
                point of using Lorem Ipsum is
              </p>
              {ele?.image && <img src={ele.image} alt="" />}
            </div>
          );
        })}
      </div>

      <div className={styles["section-two"]}>
        {gymStoryData.slice(2).map((ele) => {
          return (
            <div key={ele.id}>
              <h2>{ele.title}</h2>
              <p>
                It is a long established fact that a reader will be distracted
                by the readable content of a page when looking at its layout.
                point of using Lorem Ipsum is
              </p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default GymStory;
