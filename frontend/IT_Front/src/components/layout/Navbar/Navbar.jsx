import styles from "./Navbar.module.css"
import user from "../../../assets/user.png"

function Navbar () {
    return (
      <>
        <div className={`${styles.nav} d-flex justify-content-between p-4`}>
          <div className={styles.searchBox}>
            <i className="fa-solid fa-magnifying-glass"></i>
            <input
              type="search"
              id="search"
              name="search"
              placeholder="Search the Ledger... "
            />
          </div>

          <div className={styles.notif}>
            <i className="fa-solid fa-bell"></i>
            <span className={styles.ques}>?</span>

            <div className={`${styles.user} d-flex justify-content-around align-items-center`}>
            <img src={user} alt="" className={styles.img}/>
            <span>Architect IT</span>
            </div>
          
          </div>

        </div>
      </>
    );
}

export default Navbar;