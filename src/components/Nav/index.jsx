import style from "./nav.module.css";

const Nav = () => {
  return (
    <div className={style.navig}>
      <div className={style.navItem}>Home</div>
      <div className={style.navItem}>Team</div>
      <div className={style.navItem}>Contacts</div>
      <div className={style.navItem}>About</div>
    </div>
  );
};
export default Nav;
