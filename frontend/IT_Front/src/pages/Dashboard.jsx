import { useNavigate } from 'react-router-dom';
import Sidebar from '../components/tickets/Sidebar/Sidebar';

function Dashboard() {
  const navigate = useNavigate();
  const user = JSON.parse(localStorage.getItem('user'));

  const handleLogout = () => {
    localStorage.removeItem('token');
    localStorage.removeItem('user');
    navigate('/login');
  };

  return (

        <Sidebar/>
    // <div className="d-flex align-items-center justify-content-center min-vh-100" style={{ background: '#f4f6fb' }}>
    //   <div className="card shadow-sm p-4" style={{ maxWidth: '420px', width: '100%', borderRadius: '12px' }}>
    //     <h4 className="fw-bold mb-1">Welcome, {user?.username} 👋</h4>
    //     <p className="text-muted small mb-4">Role: {user?.role}</p>
    //   <button
    //       className="btn w-100 fw-semibold"
    //       style={{ background: '#1a3a6b', color: '#fff', borderRadius: '8px', padding: '10px' }}
    //       onClick={handleLogout}
    //     >
    //       Logout
    //     </button>
    //   </div>
    // </div>
  );
}

export default Dashboard;
