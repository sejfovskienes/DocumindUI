import logo from './logo.svg';
import './App.css';

import React, { useEffect, useState } from 'react';

import Header from './components/layout/Header.jsx'

import HomePage from './pages/HomePage';

const App = () => {
  // ===== GLOBAL APP STATE =====
  const [currentPage, setCurrentPage] = useState('home');
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [currentUser, setCurrentUser] = useState(null);

  const [users, setUsers] = useState([]);
  const [documents, setDocuments] = useState([]);

  // ===== RESTORE AUTH FROM LOCAL STORAGE =====
  useEffect(() => {
    const savedAuth = localStorage.getItem('isAuthenticated');
    const savedUser = localStorage.getItem('currentUser');

    if (savedAuth === 'true' && savedUser) {
      setIsAuthenticated(true);
      setCurrentUser(JSON.parse(savedUser));
      setCurrentPage('dashboard');
    }
  }, []);

  // ===== LOGOUT HANDLER =====
  const handleLogout = () => {
    setIsAuthenticated(false);
    setCurrentUser(null);
    setCurrentPage('home');

    localStorage.removeItem('isAuthenticated');
    localStorage.removeItem('currentUser');
  };

  // ===== PAGE RENDERING =====
  const renderPage = () => {
    switch (currentPage) {
      case 'home':
        return (
          <HomePage
            isAuthenticated={isAuthenticated}
            setCurrentPage={setCurrentPage}
          />
        );

      case 'register':
        return (
          <RegisterPage
            users={users}
            setUsers={setUsers}
            setCurrentPage={setCurrentPage}
          />
        );

      case 'login':
        return (
          <LoginPage
            users={users}
            setIsAuthenticated={setIsAuthenticated}
            setCurrentUser={setCurrentUser}
            setCurrentPage={setCurrentPage}
          />
        );

      case 'dashboard':
        return (
          isAuthenticated && (
            <Dashboard
              currentUser={currentUser}
              documents={documents}
              setDocuments={setDocuments}
            />
          )
        );

      default:
        return null;
    }
  };

  return (
    <div
      style={{
        minHeight: '100vh',
        display: 'flex',
        flexDirection: 'column',
        backgroundColor: '#fff'
      }}
    >
      {/* ===== HEADER ===== */}
      <Header
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
        isAuthenticated={isAuthenticated}
        currentUser={currentUser}
        onLogout={handleLogout}
      />

      {/* ===== MAIN CONTENT ===== */}
      <main style={{ flex: 1 }}>
        {renderPage()}
      </main>

      {/* ===== FOOTER ===== */}
      <Footer />
    </div>
  );
};

export default App;
