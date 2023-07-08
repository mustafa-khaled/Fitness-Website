import styles from "./home.module.css";

const Tenth = () => {
  return (
    <div className={`${styles.ten} container sections-padding`}>
      <h2>Articles & News</h2>
      <div data-aos="zoom-out-right">
        <span>March 23, 2022</span>
        <span>Fitness</span>
        <h3>The 10 best exercises to do in your park</h3>
        <p>
          There are many variations of passages of Lorem Ipsum available, but
          the majority have alterationLorem ipsum dolor sit amet, consectetur
          adipiscing elit. Habitasse .
        </p>
        <button>Read More</button>
      </div>
      <div data-aos="zoom-out-right">
        <span>March 23, 2022</span>
        <span>Health</span>
        <h3>The 10 best exercises to do in your park</h3>
        <p>
          There are many variations of passages of Lorem Ipsum available, but
          the majority have alterationLorem ipsum dolor sit amet, consectetur
          adipiscing elit. Habitasse .
        </p>
        <button>Read More</button>
      </div>
      <div data-aos="zoom-out-right">
        <span>March 23, 2022</span>
        <span>Nutrition</span>
        <h3>The 10 best exercises to do in your park</h3>
        <p>
          There are many variations of passages of Lorem Ipsum available, but
          the majority have alterationLorem ipsum dolor sit amet, consectetur
          adipiscing elit. Habitasse .
        </p>
        <button>Read More</button>
      </div>
    </div>
  );
};

export default Tenth;
