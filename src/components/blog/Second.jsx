import { useNavigate } from "react-router";
import styles from "./blog.module.css";

import photo1 from "../../assets/blog2.png";
import photo2 from "../../assets/blog3.png";
import photo3 from "../../assets/blog4.png";
import photo4 from "../../assets/blog5.png";
import photo5 from "../../assets/blog6.png";
import photo6 from "../../assets/blog7.png";

// Small Images
import photo11 from "../../assets/blog8.png";
import photo22 from "../../assets/blog9.png";
import photo33 from "../../assets/blog10.png";
import photo44 from "../../assets/blog11.png";
import photo55 from "../../assets/blog12.png";
import photo66 from "../../assets/blog13.png";

const Second = () => {
  const navigate = useNavigate();
  return (
    <div className={`${styles.second} container sections-padding`}>
      <div>
        <p className="paragraph">Blog</p>
        <h2>Articles & News</h2>
      </div>
      <div className={styles.boxes}>
        <div data-aos="flip-up">
          <img src={photo1} alt="" />
          <div>
            <span>March 22, 2022</span>
            <span>Fitness</span>
            <span>Health</span>
          </div>
          <h3>The 10 best exercises to do in your park</h3>
          <div>
            <img src={photo11} alt="" />
            <h6>Jacob Cornish</h6>
          </div>
        </div>
        <div onClick={() => navigate("/blogSingle")} data-aos="flip-up">
          <img src={photo2} alt="" />
          <div>
            <span>March 22, 2022</span>
            <span>Fitness</span>
            <span>Health</span>
          </div>
          <h3>How to Choose The Right Equipment For You</h3>
          <div>
            <img src={photo22} alt="" />
            <h6>Benjamin Gray</h6>
          </div>
        </div>
        <div data-aos="flip-up">
          <img src={photo3} alt="" />
          <div>
            <span>March 22, 2022</span>
            <span>Fitness</span>
            <span>Health</span>
          </div>
          <h3>How to Maximum Time Spent at the Gym.</h3>
          <div>
            <img src={photo33} alt="" />
            <h6>David Ferguson</h6>
          </div>
        </div>
        <div data-aos="flip-up">
          <img src={photo4} alt="" />
          <div>
            <span>March 22, 2022</span>
            <span>Fitness</span>
            <span>Health</span>
          </div>
          <h3>Simple Condition for all Around Fitness.</h3>
          <div>
            <img src={photo44} alt="" />
            <h6>William Wilkins</h6>
          </div>
        </div>
        <div data-aos="flip-up">
          <img src={photo5} alt="" />
          <div>
            <span>March 22, 2022</span>
            <span>Fitness</span>
            <span>Health</span>
          </div>
          <h3>How to Modify any Program to Improve Your Weakness</h3>
          <div>
            <img src={photo55} alt="" />
            <h6>Floyid Miles</h6>
          </div>
        </div>
        <div data-aos="flip-up">
          <img src={photo6} alt="" />
          <div>
            <span>March 22, 2022</span>
            <span>Fitness</span>
            <span>Health</span>
          </div>
          <h3>The Beginner’s Guide to Weight Lifting</h3>
          <div>
            <img src={photo66} alt="" />
            <h6>Bernadette</h6>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Second;
