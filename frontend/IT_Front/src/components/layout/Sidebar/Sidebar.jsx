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
      <aside className={styles.sidebar}>
  
  {/* Header */}
  <div className={styles.header}>
    <i className={`${styles.home} fa-solid fa-house`}></i>

    <div>
      <h6 className="mb-0">The Ledger</h6>
      <span className={styles.header2}>IT COMMAND CENTER</span>
    </div>
  </div>

  {/* Links */}
  <nav className={styles.links}>
    {links.map((item, index) => (
      <div className={styles.navLink} key={index}>
        <i className={`fa-solid ${item.icon}`}></i>
        <span>{item.title}</span>
      </div>
    ))}
  </nav>

  {/* Button */}
  <button className={styles.create}>+ Create Request</button>

</aside>
    );
}

export default Sidebar;