import React, { createContext, useContext, useState } from 'react';
import { UserType } from '../types/User';

// Define the authentication context
interface AuthContextType {
  user: any; // You can replace 'any' with your user type
  login: () => void;
  logout: () => void;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

// Create a provider component that wraps your app
export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [user, setUser] = useState<null | UserType>(null); // Replace null with initial user state

  const login = () => {
    // Perform your login logic here and set the user state

    setUser({
      id: '123',
      name: 'Yuss',
    });
  };

  const logout = () => {
    // Perform your logout logic here and reset the user state
    setUser(null);
  };

  return (
    <AuthContext.Provider value={{ user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

// Custom hook to access the authentication context
export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};
