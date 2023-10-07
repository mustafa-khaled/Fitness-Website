import { articlesNewsData } from "../../data/data";
import styles from "./home.module.css";

const ArticlesNews = () => {
  return (
    <div className={`${styles["articles-news"]} container sections-padding`}>
      <h2>Articles & News</h2>

      {articlesNewsData.map((ele) => {
        return (
          <div key={ele.id} data-aos="zoom-out-right">
            <span>March 23, 2022</span>
            <span>{ele.about}</span>
            <h3>The 10 best exercises to do in your park</h3>
            <p>
              There are many variations of passages of Lorem Ipsum available,
              but the majority have alterationLorem ipsum dolor sit amet,
              consectetur adipiscing elit. Habitasse .
            </p>
            <button>Read More</button>
          </div>
        );
      })}
    </div>
  );
};

export default ArticlesNews;
