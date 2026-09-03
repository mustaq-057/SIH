import React, { createContext, useContext, useEffect, useState } from 'react';

const WizardContext = createContext(null);

export const useWizard = () => useContext(WizardContext);

export const WizardProvider = ({ children }) => {
  const [language, setLanguage] = useState(() => localStorage.getItem('suvidha_lang') || 'English');
  const [theme, setTheme] = useState(() => localStorage.getItem('suvidha_theme') || 'light');
  const [transcript, setTranscript] = useState('');
  const [profile, setProfile] = useState(null);
  const [documents, setDocuments] = useState([]);
  const [chosenSchemes, setChosenSchemes] = useState([]);

  useEffect(() => {
    localStorage.setItem('suvidha_lang', language);
  }, [language]);

  useEffect(() => {
    localStorage.setItem('suvidha_theme', theme);
    const root = document.documentElement;
    if (theme === 'dark') root.classList.add('dark');
    else root.classList.remove('dark');
  }, [theme]);

  const value = {
    language, setLanguage,
    theme, setTheme,
    transcript, setTranscript,
    profile, setProfile,
    documents, setDocuments,
    chosenSchemes, setChosenSchemes,
  };
  return <WizardContext.Provider value={value}>{children}</WizardContext.Provider>;
};
