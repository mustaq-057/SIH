import React, { useEffect } from 'react';
import './App.css';
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import { WizardProvider } from './context/WizardContext';
import { Toaster } from './components/ui/toaster';
import Header from './components/Header';
import Footer from './components/Footer';
import AccessibilityWidget from './components/AccessibilityWidget';
import Home from './pages/Home';
import Discover from './pages/Discover';
import Documents from './pages/Documents';
import Results from './pages/Results';
import CSCBridge from './pages/CSCBridge';
import SchemeExplorer from './pages/SchemeExplorer';
import SchemeDetail from './pages/SchemeDetail';

const ScrollTop = () => {
  const { pathname } = useLocation();
  useEffect(() => { window.scrollTo({ top: 0, behavior: 'instant' }); }, [pathname]);
  return null;
};

function App() {
  return (
    <div className="App">
      <WizardProvider>
        <BrowserRouter>
          <ScrollTop />
          <Header />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/discover" element={<Discover />} />
            <Route path="/documents" element={<Documents />} />
            <Route path="/results" element={<Results />} />
            <Route path="/csc-bridge" element={<CSCBridge />} />
            <Route path="/schemes" element={<SchemeExplorer />} />
            <Route path="/schemes/:id" element={<SchemeDetail />} />
          </Routes>
          <Footer />
          <AccessibilityWidget />
          <Toaster />
        </BrowserRouter>
      </WizardProvider>
    </div>
  );
}

export default App;
