import styles from "./trainer.module.css";

const Third = () => {
  return (
    <div className={`${styles.third} sections-padding`} data-aos="flip-down">
      <div className={`${styles.third_content} container`}>
        <div>
          <h2>
            Contact us And
            <br />
            Join The Team
          </h2>
          <p>
            It is a long established fact of that a reader will be distracted by
            the readable content of a page when looking at its layout. point of
            using Lorem Ipsum is
          </p>
        </div>
        <div>
          <form>
            <div>
              <input type="text" placeholder="Name" required />
              <input type="email" placeholder="Email" required />
            </div>
            <input type="text" placeholder="Subject" required />
            <textarea placeholder="Massage"></textarea>
            <button>Start Now</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Third;
