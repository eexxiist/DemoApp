import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./Header";
import Profile from "../pages/Profile";
import Home from "../pages/Home";
import Settings from "../pages/Settings";
import { ThemeProvider } from "../contexts/ThemeContext";
import { LanguageProvider } from "../contexts/LanguageContext";
import "../i18n/i18n.js";

const MainApp = () => {
    return (
        <LanguageProvider>
            <ThemeProvider>
                <Router>
                    <Header />
                    <Routes>
                        <Route path="/" element={<Home />} />
                        <Route path="/profile" element={<Profile />} />
                        <Route path="/settings" element={<Settings />} />
                    </Routes>
                </Router>
            </ThemeProvider>
        </LanguageProvider>
    );
};

export default MainApp;
