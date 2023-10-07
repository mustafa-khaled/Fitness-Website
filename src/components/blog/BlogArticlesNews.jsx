import { useNavigate } from "react-router";
import { blogArticlesNewsData } from "../../data/data";

import styles from "./blog.module.css";

const BlogArticlesNews = () => {
  const navigate = useNavigate();
  return (
    <div className={`${styles["articles-news"]} container sections-padding`}>
      <div>
        <p className="paragraph">Blog</p>
        <h2>Articles & News</h2>
      </div>
      <div className={styles.boxes}>
        {blogArticlesNewsData.map((ele) => {
          return (
            <div
              key={ele.id}
              onClick={() => navigate("/blogSingle")}
              data-aos="flip-up">
              <img src={ele.image} alt="" />
              <div>
                <span>March 22, 2022</span>
                <span>Fitness</span>
                <span>Health</span>
              </div>
              <h3>{ele.title}</h3>
              <div>
                <img src={ele.thumbnail} alt="" />
                <h6>{ele.name}</h6>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default BlogArticlesNews;
