// src/components/auth/LoginSidebar.jsx

const LoginSidebar = () => {
  return (
    <div
      className="d-none d-lg-flex flex-column justify-content-between p-5 min-vh-100"
      style={{ background: '#dde0e8', width: '55%' }}
    >
      {/* Top: Logo */}
      <div className="d-flex align-items-center gap-2">
        <i className="bi bi-bank fs-4" style={{ color: '#1a3a6b' }}></i>
        <h1 className="fw-bold fs-4 mb-0" style={{ color: '#1a3a6b' }}>
          Architect Ledger IT
        </h1>
      </div>

      {/* Middle: Description */}
      <div>
        <p className="text-muted" style={{ maxWidth: '380px', lineHeight: 1.7 }}>
          Secure access to the Admin Console. Manage infrastructure, track service
          requests, and monitor system health with editorial clarity.
        </p>
      </div>

      {/* Bottom: Badge */}
      <div className="d-flex align-items-center gap-2 text-muted small">
        <i className="bi bi-shield-check" style={{ color: '#1a3a6b' }}></i>
        <span>Enterprise Grade Security</span>
      </div>
    </div>
  );
};

export default LoginSidebar;
