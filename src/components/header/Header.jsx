import styles from "./header.module.css";
import logo from "../../assets/Logo.png";
import { Link } from "react-router-dom";
import { useState } from "react";

const Header = () => {
  const [active, setActive] = useState(false);

  const menuHandler = () => {
    setActive(!active);
  };

  return (
    <header>
      <div className={`${styles.header_content} container`}>
        <div className={styles.logo_holder}>
          <div className={styles.image_holder}>
            <img src={logo} alt="Logo" />
          </div>
          Strengthy
        </div>
        <ul className={active ? `${styles.activeList}` : ""}>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/classes">Classes</Link>
          </li>
          <li>
            <Link to="/trainers">Trainers</Link>
          </li>
          <li>
            <Link to="/blog">Blog</Link>
          </li>
          <li>
            <Link to="/contact">Contact</Link>
          </li>
          <li>
            <button>Book Class</button>
          </li>
        </ul>
        <div className={styles.menu} onClick={() => menuHandler()}>
          <i className={`fas ${active ? "fa-times" : "fa-bars"} open-list`}></i>
        </div>
        <div
          className={`${styles.menu_overlay} ${
            active ? `${styles.active_overlay}` : ""
          }`}
          onClick={() => menuHandler()}></div>
      </div>
    </header>
  );
};

export default Header;
