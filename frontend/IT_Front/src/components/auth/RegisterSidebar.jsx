// src/components/auth/RegisterSidebar.jsx

const RegisterSidebar = () => {
  return (
    <div
      className="d-none d-lg-flex flex-column justify-content-between p-5 min-vh-100"
      style={{ background: '#eef0f5', width: '55%' }}
    >
      {/* Top: Logo */}
      <div>
        <h1 className="fw-bold fs-4 mb-1" style={{ color: '#1a1a2e' }}>
          Architect Ledger IT
        </h1>
        <p className="text-muted small">Precision Infrastructure Management.</p>
      </div>

      {/* Middle: Headline */}
      <div>
        <h2
          className="fw-bold mb-4"
          style={{ color: '#1a1a2e', lineHeight: 1.2, fontSize: '2.2rem' }}
        >
          Secure access for IT<br />professionals.
        </h2>

        <div
          className="card border-0 shadow-sm p-3"
          style={{ maxWidth: '280px', borderRadius: '12px' }}
        >
          <div className="d-flex align-items-center gap-2">
            <div
              className="rounded-circle d-flex align-items-center justify-content-center"
              style={{ width: 36, height: 36, background: '#1a3a6b', flexShrink: 0 }}
            >
              <i className="bi bi-shield-check text-white small"></i>
            </div>
            <div>
              <p className="fw-semibold mb-0 small">Enterprise Grade</p>
              <p className="text-muted mb-0" style={{ fontSize: '0.78rem' }}>
                Encrypted end-to-end sessions.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div /> {/* spacer */}
    </div>
  );
};

export default RegisterSidebar;
