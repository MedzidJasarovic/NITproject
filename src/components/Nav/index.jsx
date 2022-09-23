import style from "./nav.module.css";
import { Link } from "react-router-dom";

const Nav = () => {
  return (
    <div className={style.navig}>
      <Link to="/">
        <div className={style.navItem}>Home</div>
      </Link>

      <div className={style.navItem}>Team</div>
      <div className={style.navItem}>Contacts</div>
      <div className={style.navItem}>About</div>
    </div>
  );
};
export default Nav;
