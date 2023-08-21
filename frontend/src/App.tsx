import React from 'react';
import { useAuth } from './context/AuthContext';

const App: React.FC = () => {
  const { user, login, logout } = useAuth();

  return (
    <div>
      {user ? (
        <div>
          <p>Welcome, {user.name}!</p>
          <button onClick={logout}>Logout</button>
          <p>Homepage...</p>
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
