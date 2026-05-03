import React from "react";
import { NavLink } from "react-router-dom";

const navItems = [
  { label: "Dashboard", icon: "bi-grid-fill", path: "/" },
  { label: "Tickets", icon: "bi-ticket-perforated-fill", path: "/tickets" },
  { label: "Knowledge Base", icon: "bi-book-fill", path: "/knowledge" },
  { label: "Analytics", icon: "bi-bar-chart-fill", path: "/analytics" },
  { label: "Settings", icon: "bi-gear-fill", path: "/settings" },
];

const Sidebar = () => {
  return (
    <div
      className="d-flex flex-column p-3 text-white"
      style={{
        width: "230px",
        minHeight: "100vh",
        background: "linear-gradient(180deg, #1a1a2e 0%, #16213e 100%)",
        position: "fixed",
        top: 0,
        left: 0,
        zIndex: 100,
        boxShadow: "4px 0 15px rgba(0,0,0,0.2)",
      }}
    >
      {/* Brand */}
      <div className="mb-4 mt-2 px-2">
        <h5 className="fw-bold mb-0" style={{ color: "#e2e8f0", letterSpacing: "0.5px" }}>
          The Ledger
        </h5>
        <small style={{ color: "#6c8ebf", fontSize: "11px" }}>IT Command Center</small>
      </div>

      <hr style={{ borderColor: "#2d3a52" }} />

      {/* Nav Links */}
      <nav className="nav flex-column gap-1">
        {navItems.map((item) => (
          <NavLink
            key={item.path}
            to={item.path}
            end={item.path === "/"}
            className={({ isActive }) =>
              `nav-link d-flex align-items-center gap-2 px-3 py-2 rounded-3 ${
                isActive ? "active-nav" : "text-link"
              }`
            }
            style={({ isActive }) => ({
              color: isActive ? "#fff" : "#8fa8c8",
              background: isActive ? "rgba(99,130,191,0.25)" : "transparent",
              fontWeight: isActive ? "600" : "400",
              fontSize: "14px",
              transition: "all 0.2s ease",
              textDecoration: "none",
            })}
          >
            <i className={`bi ${item.icon}`} style={{ fontSize: "15px" }}></i>
            {item.label}
          </NavLink>
        ))}
      </nav>

      {/* Bottom CTA */}
      <div className="mt-auto">
        <button
          className="btn w-100 d-flex align-items-center justify-content-center gap-2"
          style={{
            background: "linear-gradient(135deg, #3b5bdb, #5c7cfa)",
            color: "#fff",
            border: "none",
            borderRadius: "10px",
            padding: "10px",
            fontWeight: "600",
            fontSize: "14px",
            boxShadow: "0 4px 12px rgba(59,91,219,0.4)",
          }}
        >
          <i className="bi bi-plus-lg"></i>
          Create Request
        </button>
      </div>
    </div>
  );
};

export default Sidebar;