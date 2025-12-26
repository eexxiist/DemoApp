import React, { useContext, useState } from "react";
const changeLangContext = useContext();

const LanguageContext = ({ children }) => {
    const [lang, setLang] = useState("ru");

    const toggleLang = () => {
        if ((lang = "ru")) {
            setLang("en");
        } else {
            setLang("ru");
        }
    };

    return (
        <div>
            <changeLangContext.Provider value={{ lang, toggleLang }}>
                {children}
            </changeLangContext.Provider>
        </div>
    );
};

export { LanguageContext, changeLangContext };
