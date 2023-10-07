import { homeSwiperData } from "../../data/data";
import styles from "./home.module.css";

// import Swiper
import { Navigation, Pagination, Scrollbar, A11y } from "swiper";
import { Swiper as ReactSwiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

const Swiper = () => {
  return (
    <div
      className={`sections-padding`}
      data-aos="fade-up"
      data-aos-anchor-placement="center-bottom">
      <div className={`${styles.six_content} container `}>
        <ReactSwiper
          modules={[Navigation, Pagination, Scrollbar, A11y]}
          spaceBetween={30}
          breakpoints={{
            600: {
              slidesPerView: 1,
            },
            800: {
              slidesPerView: 2,
            },
            1024: {
              slidesPerView: 3,
            },
          }}>
          {homeSwiperData.map((ele) => {
            return (
              <SwiperSlide key={ele.id}>
                <div className={styles["slider-content"]}>
                  <div className={styles["img-holder"]}>
                    <img src={ele.image} alt="" className={styles.trainer} />
                  </div>

                  <div className={styles["slider-text"]}>
                    <h4>{ele.name}</h4>
                    <p>{ele.title}</p>
                    <div className={styles.starts}>
                      <i className="fa-solid fa-star"></i>
                      <i className="fa-solid fa-star"></i>
                      <i className="fa-solid fa-star"></i>
                      <i className="fa-solid fa-star"></i>
                      <i className="fa-solid fa-star"></i>
                    </div>
                    <p>{ele.description}</p>
                  </div>
                </div>
              </SwiperSlide>
            );
          })}
        </ReactSwiper>
      </div>
    </div>
  );
};

export default Swiper;
