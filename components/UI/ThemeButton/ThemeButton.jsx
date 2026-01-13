import React from "react";
import styles from "./ThemeButton.module.css";

const ThemeButton = ({ theme, toggleTheme }) => {
    const isLight = theme === "light";

    return (
        <button
            className={styles.button}
            onClick={toggleTheme}
            aria-label="Toggle theme"
        >
            <span className={styles.icon}>{isLight ? "🌙" : "☀️"}</span>
            <span className={styles.label}>{isLight ? "Dark" : "Light"}</span>
        </button>
    );
};

export default ThemeButton;
