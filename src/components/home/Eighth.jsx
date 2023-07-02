import styles from "./home.module.css";
import photo from "../../assets/Video.png";

const Eighth = () => {
  return (
    <div className={styles.eight}>
      <div className={`${styles.eight_content} container sections-padding`}>
        <div className={styles.eight_first}>
          <p>Gym Amenities</p>
          <h2>The Unique Standard</h2>
          <p>
            It is a long established fact that a reader will be distracted by
            the readable content of a page when looking at its layout. point of
            using Lorem Ipsum is
          </p>
          <img src={photo} alt="" />
        </div>
        <div className={styles.eight_second}>
          <div>
            <h5>
              <i className="fa-regular fa-circle-check"></i>
              Lockers
            </h5>
            <p>Secure lockers that work by you choosing a four digit code.</p>
          </div>
          <div>
            <h5>
              <i className="fa-regular fa-circle-check"></i>
              Changing Rooms
            </h5>
            <p>
              Delicious, protein-packed gourmet shakes that come in chocolate,
              fruit, vanilla and more. Water and snacks too.
            </p>
          </div>
          <div>
            <h5>
              <i className="fa-regular fa-circle-check"></i>
              Fuel Bar
            </h5>
            <p>
              Mini towels for class and lovely big towels for showers after
              class. *Amenities may not be available at all studios
            </p>
          </div>
          <div>
            <h5>
              <i className="fa-regular fa-circle-check"></i>
              Complimentary Towels
            </h5>
            <p>Secure lockers that work by you choosing a four digit code.</p>
          </div>
          <div>
            <h5>
              <i className="fa-regular fa-circle-check"></i>
              Wifi & Restrooms
            </h5>
            <p>Secure lockers that work by you choosing a four digit code.</p>
          </div>
          <div>
            <h5>
              <i className="fa-regular fa-circle-check"></i>
              Hot Showers & Hair Care
            </h5>
            <p>
              what your body craves in the morning, you're not alone. The
              majority of people crank the handle all the way up.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Eighth;
