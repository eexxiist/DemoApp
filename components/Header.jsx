import React from "react";
import { Link } from "react-router-dom";
import clsx from "clsx";
import { useTranslation } from "react-i18next";

import useTheme from "../hooks/useTheme";
import useLanguage from "../hooks/useLanguage";

import headerStyles from "../styles/Header.module.css";
import LanguageSelect from "./UI/Select/LanguageSelect";
import ThemeButton from "./UI/ThemeButton/ThemeButton";

const Header = () => {
    const { theme, toggleTheme } = useTheme();
    const { lang, toggleLang } = useLanguage();
    const { t } = useTranslation();

    return (
        <div className={clsx(headerStyles.header, headerStyles[theme])}>
            <div className={headerStyles.headerLeft}>
                <div className={headerStyles.avatar} />
                <h3 className={headerStyles.title}>Demo App</h3>
            </div>

            <nav className={headerStyles.headerNav}>
                <ul>
                    <li>
                        <Link to="/">{t("header.home")}</Link>
                    </li>
                    <li>
                        <Link to="/profile">{t("header.profile")}</Link>
                    </li>
                    <li>
                        <Link to="/settings">{t("header.settings")}</Link>
                    </li>
                </ul>
            </nav>

            <div className={headerStyles.headerRight}>
                <LanguageSelect
                    lang={lang}
                    toggleLang={toggleLang}
                ></LanguageSelect>

                <ThemeButton
                    theme={theme}
                    toggleTheme={toggleTheme}
                ></ThemeButton>
            </div>
        </div>
    );
};

export default Header;
