import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import './App.css';
import Panel from './Components/Pannel/Panel';
import Login from './Components/Login/Login';
import LandingPage from './Components/Landing/LandingPage';
import { AuthProvider } from './context/AuthContext';
import ProtectedRoute from './Components/ProtectedRoute/ProtectedRoute';

function App() {
  return (
    <AuthProvider>
      <div className="App">
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/login" element={<Login />} />
          <Route 
            path="/dashboard/*" 
            element={
              <ProtectedRoute>
                <Panel />
              </ProtectedRoute>
            } 
          />
        </Routes>
      </div>
    </AuthProvider>
  );
}

export default App;
