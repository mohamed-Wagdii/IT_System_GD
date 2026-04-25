// src/components/auth/LoginForm.jsx
import { Link, useNavigate } from 'react-router-dom';
import useAuthForm from '../../hooks/useAuthForm';
import { validateLogin } from '../../utils/validators';

const INITIAL = {
  identifier: '',
  password: '',
  rememberDevice: false,
};

const LoginForm = () => {
  const navigate = useNavigate();
  const {
    values,
    errors,
    setErrors,
    loading,
    setLoading,
    serverError,
    setServerError,
    handleChange,
  } = useAuthForm(INITIAL);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setServerError('');

    const validationErrors = validateLogin(values);
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    setLoading(true);
    try {
      // TODO: wire your API here
      // const response = await axios.post('/api/auth/login', {
      //   identifier: values.identifier,
      //   password: values.password,
      //   remember_device: values.rememberDevice,
      // });
      // localStorage.setItem('token', response.data.token);
      // navigate('/dashboard');

      console.log('Login payload:', values);
      alert('API not connected yet. Check console.');
    } catch (err) {
      setServerError(
        err?.response?.data?.message ||
        err?.response?.data?.error ||
        'Invalid credentials. Please try again.'
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <div
      className="d-flex align-items-center justify-content-center flex-grow-1 p-4"
      style={{ background: '#fff', minHeight: '100vh' }}
    >
      <div style={{ width: '100%', maxWidth: '420px' }}>
        <h2 className="fw-bold mb-1">Sign In</h2>
        <p className="text-muted mb-4 small">Enter your credentials to access the ledger.</p>

        {serverError && (
          <div className="alert alert-danger py-2 small">{serverError}</div>
        )}

        <form onSubmit={handleSubmit} noValidate>
          {/* Email or Username */}
          <div className="mb-3">
            <label
              htmlFor="identifier"
              className="form-label text-uppercase fw-semibold"
              style={{ fontSize: '0.7rem', letterSpacing: '0.08em', color: '#555' }}
            >
              Email or Username
            </label>
            <div className="input-group">
              <span className="input-group-text bg-light border-end-0" style={{ color: '#888' }}>
                <i className="bi bi-person"></i>
              </span>
              <input
                id="identifier"
                name="identifier"
                type="text"
                className={`form-control bg-light border-start-0 ${errors.identifier ? 'is-invalid' : ''}`}
                placeholder="admin@architectledger.com"
                value={values.identifier}
                onChange={handleChange}
                disabled={loading}
              />
              {errors.identifier && (
                <div className="invalid-feedback">{errors.identifier}</div>
              )}
            </div>
          </div>

          {/* Password */}
          <div className="mb-3">
            <div className="d-flex justify-content-between align-items-center mb-1">
              <label
                htmlFor="password"
                className="form-label text-uppercase fw-semibold mb-0"
                style={{ fontSize: '0.7rem', letterSpacing: '0.08em', color: '#555' }}
              >
                Password
              </label>
              <Link
                to="/forgot-password"
                className="small fw-semibold"
                style={{ color: '#1a3a6b', textDecoration: 'none' }}
              >
                Forgot Password?
              </Link>
            </div>
            <div className="input-group">
              <span className="input-group-text bg-light border-end-0" style={{ color: '#888' }}>
                <i className="bi bi-lock"></i>
              </span>
              <input
                id="password"
                name="password"
                type="password"
                className={`form-control bg-light border-start-0 ${errors.password ? 'is-invalid' : ''}`}
                placeholder="••••••••"
                value={values.password}
                onChange={handleChange}
                disabled={loading}
              />
              {errors.password && (
                <div className="invalid-feedback">{errors.password}</div>
              )}
            </div>
          </div>

          {/* Remember device */}
          <div className="form-check mb-4">
            <input
              className="form-check-input"
              type="checkbox"
              id="rememberDevice"
              name="rememberDevice"
              checked={values.rememberDevice}
              onChange={handleChange}
              disabled={loading}
            />
            <label className="form-check-label small text-muted" htmlFor="rememberDevice">
              Remember this device
            </label>
          </div>

          <button
            type="submit"
            className="btn w-100 fw-semibold"
            style={{ background: '#1a3a6b', color: '#fff', borderRadius: '8px', padding: '12px' }}
            disabled={loading}
          >
            {loading ? (
              <>
                <span className="spinner-border spinner-border-sm me-2" role="status" aria-hidden="true"></span>
                Authenticating…
              </>
            ) : (
              <>Authenticate <i className="bi bi-arrow-right ms-1"></i></>
            )}
          </button>
        </form>

        <p className="text-center text-muted mt-4" style={{ fontSize: '0.75rem' }}>
          Protected by Architect Security protocols.<br />
          By signing in, you agree to the organizational terms of service.
        </p>
      </div>
    </div>
  );
};

export default LoginForm;
