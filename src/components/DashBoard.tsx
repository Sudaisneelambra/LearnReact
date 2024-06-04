// components/Dashboard.js
import { useNavigate } from 'react-router-dom';


function Dashboard() {
    const navigate = useNavigate();

  const handleLogout = () => {
    // Perform logout logic
    navigate('/props');
  };

  return (
    <div>
      <h2>Dashboard</h2>
      <button onClick={handleLogout}>Logout</button>
    </div>
  );
}

export default Dashboard;
