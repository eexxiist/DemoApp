import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./Header";
import Profile from "../pages/Profile";
import Home from "../pages/Home";
import Settings from "../pages/Settings";
import { ThemeProvider } from "../contexts/ThemeContext";

const MainApp = () => {
    return (
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
    );
};

export default MainApp;
