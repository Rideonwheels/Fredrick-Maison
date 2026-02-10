import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Landing from './pages/Landing';
import Login from './pages/Login';
import Feed from './pages/Feed';
import Partners from './pages/Partners';
import Resources from './pages/Resources';
import Governance from './pages/Governance';

const App: React.FC = () => {
  // Simple state-based routing for this SPA without React Router dependency complications in this specific format
  const [currentPage, setCurrentPage] = useState('landing');
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleLogin = () => {
    setIsLoggedIn(true);
    setCurrentPage('feed');
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
    setCurrentPage('landing');
  };

  const renderPage = () => {
    switch (currentPage) {
      case 'landing':
        return <Landing onJoin={() => setCurrentPage('login')} onLogin={() => setCurrentPage('login')} onNavigate={setCurrentPage} />;
      case 'login':
        return <Login onLogin={handleLogin} />;
      case 'feed':
        return isLoggedIn ? <Feed /> : <Login onLogin={handleLogin} />;
      case 'partners':
        return isLoggedIn ? <Partners /> : <Login onLogin={handleLogin} />;
      case 'resources':
        return isLoggedIn ? <Resources /> : <Login onLogin={handleLogin} />;
      case 'governance':
        return <Governance />;
      default:
        return <Landing onJoin={() => setCurrentPage('login')} onLogin={() => setCurrentPage('login')} onNavigate={setCurrentPage} />;
    }
  };

  return (
    <div className="min-h-screen bg-slate-50 font-sans text-slate-900">
      <Navbar 
        isLoggedIn={isLoggedIn} 
        onLogout={handleLogout} 
        currentPage={currentPage}
        onNavigate={setCurrentPage}
      />
      <main>
        {renderPage()}
      </main>
    </div>
  );
};

export default App;