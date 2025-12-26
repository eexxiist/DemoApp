import React from "react";
import { Link } from "react-router-dom";
import styles from "../styles/Header.module.css";
import useTheme from "../hooks/useTheme";
import clsx from "clsx";

const Header = () => {
    const { theme, toggleTheme } = useTheme();
    console.log(theme);

    return (
        <div className={clsx(styles.header, theme)}>
            <div className={styles.headerLeft}>
                <div className={styles.avatar}></div>
                <h3 className={styles.title}>Demo App</h3>
            </div>

            <nav className={styles.headerNav}>
                <ul>
                    <li>
                        <Link to="/">Home</Link>
                    </li>
                    <li>
                        <Link to="/profile">Profile</Link>
                    </li>
                    <li>
                        <Link to="/settings">Settings</Link>
                    </li>
                </ul>
            </nav>

            <div className={styles.headerRight}>
                <select>
                    <option>EN</option>
                    <option>RU</option>
                </select>
                <button onClick={() => toggleTheme()}>Ligth</button>
            </div>
        </div>
    );
};

export default Header;
