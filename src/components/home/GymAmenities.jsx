import { gymAmenitiesData } from "../../data/data";

import styles from "./home.module.css";
import photo from "../../assets/Video.png";

const GymAmenities = () => {
  return (
    <div className={styles["gym-amenities"]}>
      <div
        className={`${styles["gym-amenities-content"]} container sections-padding`}>
        <div className={styles["gym-amenities-first"]}>
          <p>Gym Amenities</p>
          <h2>The Unique Standard</h2>
          <p>
            It is a long established fact that a reader will be distracted by
            the readable content of a page when looking at its layout. point of
            using Lorem Ipsum is
          </p>
          <img src={photo} alt="" />
        </div>
        <div className={styles["gym-amenities-second"]}>
          {gymAmenitiesData.map((ele) => {
            return (
              <div key={ele.id}>
                <h5>
                  <i className="fa-regular fa-circle-check"></i>
                  {ele.title}
                </h5>
                <p>{ele.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default GymAmenities;
