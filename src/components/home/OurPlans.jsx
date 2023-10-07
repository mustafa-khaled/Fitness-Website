import { ourPlansData } from "../../data/data";
import styles from "./home.module.css";

const OurPlans = () => {
  return (
    <div className={`${styles["our-plans"]} container sections-padding`}>
      <div>
        <p className="paragraph">Our Plans</p>
        <h2>Choose the Program</h2>
      </div>
      <div className={styles.plans}>
        {ourPlansData.map((ele) => {
          return (
            <div key={ele.id} className={styles.plan} data-aos="flip-up">
              <h3>
                <i className={ele.icon}></i>
                {ele.title}
              </h3>
              <div>
                <h4>{ele.offer}</h4>
                <p>{ele.description}</p>
              </div>
              <ul>
                <li>1 Day Free Trial</li>
                <li>20 minutes of heart-pumping spin</li>
                <li>20 minutes of strength training</li>
                <li>50 Class Times Available</li>
                <li>20 minutes of invigorating yoga</li>
              </ul>
              <button>Get Started</button>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default OurPlans;
