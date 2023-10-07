import { contactInfoData } from "../../data/data";
import styles from "./contact.module.css";

const ContactInfo = () => {
  return (
    <div
      className={`${styles["contact-info"]}  sections-padding`}
      data-aos="zoom-in">
      <div className={`${styles["contact-info-content"]} container`}>
        {contactInfoData.map((ele) => {
          return (
            <div key={ele.id}>
              <i className={ele.icon}></i>
              <h4>{ele.title}</h4>
              <p>Capitalized on hanging frut to identify with additional</p>
              <p>{ele.cta}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default ContactInfo;
