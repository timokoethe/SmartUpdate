import React, { createContext, useContext, useState } from 'react';
import { Localization } from './Localization';

const LanguageContext = createContext();

export const LanguageProvider = ({ children }) => {
    const [language, setLanguage] = useState('en');

    const changeLanguage = () => {
        setLanguage((prev) => (prev === 'en' ? 'de' : 'en'));
    };

    return (
        <LanguageContext.Provider value={{ language, changeLanguage }}>
            {children}
        </LanguageContext.Provider>
    );
}

export const useLanguage = () => useContext(LanguageContext);

export const useLocalization = () => {
    const { language } = useLanguage();
    return Localization[language];
}