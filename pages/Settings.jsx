import React from "react";
import LanguageSelect from "../components/UI/Select/LanguageSelect";
import ThemeButton from "../components/UI/ThemeButton/ThemeButton";
import useTheme from "../hooks/useTheme";

import styles from "../styles/Settings.module.css";

const Settings = () => {
    const { theme, toggleTheme } = useTheme();

    return (
        <div className={styles.settings}>
            <h2 className={styles.title}>Настройки</h2>

            <div className={styles.section}>
                <h3 className={styles.sectionTitle}>Язык</h3>
                <LanguageSelect />
            </div>

            <div className={styles.section}>
                <h3 className={styles.sectionTitle}>Тема</h3>
                <ThemeButton
                    theme={theme}
                    toggleTheme={toggleTheme}
                />
            </div>
        </div>
    );
};

export default Settings;
