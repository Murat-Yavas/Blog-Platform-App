import { NavLink } from "react-router-dom";
import styles from "./Footer.module.css";

const Footer = () => {
  return (
    <div className={`${styles["footer-links"]}`}>
      <NavLink className={`${styles["link"]}`} to="/">
        About *
      </NavLink>
      <NavLink className={`${styles["link"]}`} to="/">
        Careers *
      </NavLink>
      <NavLink className={`${styles["link"]}`} to="/">
        Terms *
      </NavLink>
      <NavLink className={`${styles["link"]}`} to="/">
        Privacy *
      </NavLink>
      <NavLink className={`${styles["link"]}`} to="/">
        Press *
      </NavLink>
    </div>
  );
};

export default Footer;
