import React from "react";
import useLanguage from "../../../hooks/useLanguage";

const LanguageSelect = () => {
    const { lang, toggleLang } = useLanguage();
    return (
        <select value={lang} onChange={(e) => toggleLang(e.target.value)}>
            <option value="en">en</option>
            <option value="ru">ru</option>
        </select>
    );
};

export default LanguageSelect;
