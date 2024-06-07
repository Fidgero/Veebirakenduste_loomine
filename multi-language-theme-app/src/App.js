import React, { useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import Header from './components/Header';
import Footer from './components/Footer';
import DataDisplay from './components/DataDisplay';
import LanguageSelector from './components/LanguageSelector';
import ThemeSelector from './components/ThemeSelector';
import { useTheme } from './ThemeContext';
import './i18n';
import './App.css';

function AppContent() {
  const { theme } = useTheme();
  const { i18n } = useTranslation();

  useEffect(() => {
    const savedLanguage = localStorage.getItem('language') || 'en';
    i18n.changeLanguage(savedLanguage);
  }, [i18n]);

  return (
    <div className={`app ${theme}`}>
      <Header className="header" />
      <main className="main">
        <div className="controls">
          <LanguageSelector />
          <ThemeSelector />
        </div>
        <DataDisplay />
      </main>
      <Footer className="footer" />
    </div>
  );
}

function App() {
  return <AppContent />;
}

export default App;
