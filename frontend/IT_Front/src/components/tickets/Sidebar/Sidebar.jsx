import styles from "./Sidebar.module.css";

function Sidebar () {

    const links = [
        {icon: "fa-chart-bar", title: "Dashboard"},
        {icon: "fa-ticket", title: "Tickets"},
        {icon: "fa-book-open", title: "Knowledge Base"},
        {icon: "fa-chart-simple", title: "Analytics"},
        {icon: "fa-gear", title: "Settings"}
    ]

    return (
      <aside className={`${styles.sidebar} min-vh-100 py-4`}>
        
        <div className="d-flex justify-content-center gap-3 align-items-center" >
          <i className={`${styles.home} fa-solid fa-house`}></i>

          <div>
          <h1>The Ledger</h1>
          <span className={styles.header-2}>IT COMMAND CENTER</span>
          </div>
        </div>

        <nav className={styles.links}>
          {links.map((item, index) => (
            <div className={styles.navLink} key={index}>
              <i className={`fa-solid ${item.icon}`}></i>
              <span>{item.title}</span>
            </div>
          ))}
        </nav>

        <button className={styles.create}> + Create Request</button>

        
      </aside>
    );
}

export default Sidebar;