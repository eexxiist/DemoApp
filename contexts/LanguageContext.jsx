import React, { createContext, useEffect, useState } from "react";
import i18n from "../i18n/i18n";

const LanguageContext = createContext();

const LanguageProvider = ({ children }) => {
    const [lang, setLang] = useState("en");

    const toggleLang = (newLang) => {
        localStorage.setItem("lang", newLang);
        setLang(newLang);
        i18n.changeLanguage(newLang);
    };

    useEffect(() => {
        const savedLang = localStorage.getItem("lang") || "en";
        setLang(savedLang);
        i18n.changeLanguage(savedLang);
    }, []);

    return (
        <LanguageContext.Provider value={{ lang, toggleLang }}>
            {children}
        </LanguageContext.Provider>
    );
};

export { LanguageProvider, LanguageContext };
