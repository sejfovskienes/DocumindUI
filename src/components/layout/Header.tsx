const Header = ({ currentPage, setCurrentPage, isAuthenticated, logout, currentUser }) => {
  return (
    <header style={{ backgroundColor: '#FFD333', padding: '1.5rem 2rem', boxShadow: '0 2px 4px rgba(0,0,0,0.1)' }}>
      <div style={{ maxWidth: '1200px', margin: '0 auto', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <h1 style={{ margin: 0, fontSize: '1.75rem', fontWeight: 'bold', color: '#000', cursor: 'pointer' }}
            onClick={() => setCurrentPage(isAuthenticated ? 'dashboard' : 'home')}>
          DocManager
        </h1>
        <nav style={{ display: 'flex', gap: '1.5rem', alignItems: 'center' }}>
          {!isAuthenticated ? (
            <>
              <button onClick={() => setCurrentPage('home')} 
                      style={{ background: 'none', border: 'none', color: '#000', fontSize: '1rem', cursor: 'pointer', fontWeight: currentPage === 'home' ? 'bold' : 'normal' }}>
                Home
              </button>
              <button onClick={() => setCurrentPage('login')} 
                      style={{ background: 'none', border: 'none', color: '#000', fontSize: '1rem', cursor: 'pointer', fontWeight: currentPage === 'login' ? 'bold' : 'normal' }}>
                Login
              </button>
              <button onClick={() => setCurrentPage('register')} 
                      style={{ backgroundColor: '#000', color: '#FFD333', border: 'none', padding: '0.5rem 1.5rem', borderRadius: '4px', fontSize: '1rem', cursor: 'pointer', fontWeight: 'bold' }}>
                Register
              </button>
            </>
          ) : (
            <>
              <span style={{ color: '#000', fontSize: '1rem' }}>Welcome, {currentUser?.fullName}</span>
              <button onClick={logout} 
                      style={{ backgroundColor: '#000', color: '#FFD333', border: 'none', padding: '0.5rem 1.5rem', borderRadius: '4px', fontSize: '1rem', cursor: 'pointer', fontWeight: 'bold', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                <LogOut size={18} />
                Logout
              </button>
            </>
          )}
        </nav>
      </div>
    </header>
  );
};