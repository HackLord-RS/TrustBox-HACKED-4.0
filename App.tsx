
import React, { useState, useEffect } from 'react';
import Layout from './components/Layout';
import Landing from './components/Landing';
import Auth from './components/Auth';
import Verify from './components/Verify';
import Dashboard from './components/Dashboard';
import MyVault from './components/MyVault';
import AdminDashboard from './components/AdminDashboard';
import PublicCertificate from './components/PublicCertificate';
import { AuthView, User, UserRole } from './types';

const App: React.FC = () => {
  const [currentView, setCurrentView] = useState<AuthView>('landing');
  const [user, setUser] = useState<User | null>(null);
  const [publicId, setPublicId] = useState<string | null>(null);

  // Persistence and routing simulation
  useEffect(() => {
    const savedUser = localStorage.getItem('trustbox_user');
    if (savedUser) {
      try {
        const parsedUser = JSON.parse(savedUser);
        if (parsedUser && parsedUser.isLoggedIn) {
          setUser(parsedUser);
          // Auto-route based on role
          if (parsedUser.role === 'admin') {
            setCurrentView('admin_dashboard');
          } else {
            setCurrentView('action');
          }
        }
      } catch (e) {
        localStorage.removeItem('trustbox_user');
      }
    }

    // Check path for verification ID
    const path = window.location.pathname.substring(1); // remove leading '/'
    if (path.startsWith('TBX-')) {
      setCurrentView('public_certificate');
      setPublicId(path);
    }
  }, []);

  const handleAuthSuccess = (email: string, token: string, role?: UserRole) => {
    const newUser: User = { email, isLoggedIn: true, role: role || 'user' };
    setUser(newUser);
    localStorage.setItem('trustbox_user', JSON.stringify({ ...newUser, token }));
    
    // Redirect based on role
    if (newUser.role === 'admin') {
      setCurrentView('admin_dashboard');
    } else {
      setCurrentView('action');
    }
  };

  const handleLogout = () => {
    setUser(null);
    localStorage.removeItem('trustbox_user');
    setCurrentView('landing');
  };

  const handleScrollTo = (sectionId: string) => {
    if (currentView !== 'landing' && currentView !== 'public_certificate') {
      setCurrentView('landing');
      setTimeout(() => {
        const element = document.getElementById(sectionId);
        element?.scrollIntoView({ behavior: 'smooth' });
      }, 50);
    } else if (currentView === 'public_certificate') {
      window.location.href = '/#' + sectionId;
    } else {
      const element = document.getElementById(sectionId);
      element?.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const renderContent = () => {
    switch (currentView) {
      case 'landing':
        return <Landing onGetStarted={() => setCurrentView('signup')} />;
      case 'signup':
        return <Auth initialView="signup" onAuthSuccess={handleAuthSuccess} />;
      case 'login':
        return <Auth initialView="login" onAuthSuccess={handleAuthSuccess} />;
      case 'action':
        return <Verify user={user || undefined} />;
      case 'dashboard':
        return user ? <Dashboard user={user} /> : <Landing onGetStarted={() => setCurrentView('signup')} />;
      case 'vault':
        return user ? <MyVault user={user} /> : <Landing onGetStarted={() => setCurrentView('signup')} />;
      case 'admin_dashboard':
        return user?.role === 'admin' ? <AdminDashboard /> : <Landing onGetStarted={() => setCurrentView('signup')} />;
      case 'public_certificate':
        return publicId ? <PublicCertificate verificationId={publicId} /> : <Landing onGetStarted={() => setCurrentView('signup')} />;
      default:
        return <Landing onGetStarted={() => setCurrentView('signup')} />;
    }
  };

  return (
    <Layout 
      userEmail={user?.email} 
      userRole={user?.role}
      onLogout={handleLogout}
      onNavigateHome={() => {
        if (currentView === 'public_certificate') {
          window.location.href = '/';
          return;
        }
        if (!user) {
          setCurrentView('landing');
        } else if (user.role === 'admin') {
          setCurrentView('admin_dashboard');
        } else {
          setCurrentView('action');
        }
      }}
      onNavigateDashboard={() => setCurrentView('dashboard')}
      onNavigateAdminDashboard={() => setCurrentView('admin_dashboard')}
      onNavigateVault={() => setCurrentView('vault')}
      onNavigateVerify={() => setCurrentView('action')}
      onGetStarted={() => setCurrentView('signup')}
      onScrollTo={handleScrollTo}
    >
      {renderContent()}
    </Layout>
  );
};

export default App;
