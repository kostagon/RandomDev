import React from 'react';
import { useAuth } from './context/AuthContext';
import Typography from '@mui/material/Typography';
import Homepage from './pages/Homepage';

const App: React.FC = () => {
  const { user, login, logout } = useAuth();

  return (
    <div>
      {user ? (
        <div>
          <Typography variant="h5" component="h1" color="secondary">
            Welcome, {user.name}!
          </Typography>
          <button onClick={logout}>Logout</button>
          <Homepage />
        </div>
      ) : (
        <div>
          <p>Please log in</p>

          <button onClick={login}>Login</button>
        </div>
      )}
    </div>
  );
};

export default App;
