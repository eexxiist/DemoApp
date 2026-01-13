import React, { useContext } from "react";
import { LanguageContext } from "../contexts/LanguageContext";

const useLanguage = () => {
    return useContext(LanguageContext);
};

export default useLanguage;
