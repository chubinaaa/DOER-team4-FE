"use client";

import React, { useState } from "react";

const Header = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    return (
        <header className="flex items-center justify-between bg-white p-1 text-black">
            {/* Logo */}
            <div className="text-xl font-bold">
                <a href="/">
                    <img src="header_logo.svg" alt="Logo" className="h-20" />
                </a>
            </div>

            {/* Navigation */}
            <nav
                className={`fixed top-0 left-0 z-10 h-full w-2/5 bg-white text-black p-8 transition-transform lg:static lg:w-auto lg:flex lg:items-center lg:gap-6 ${
                    isMenuOpen ? "translate-x-0" : "-translate-x-full"
                }`}
            >
                <a
                    href="#home"
                    className="block py-2 lg:py-0 hover:text-blue-400 transition-all transform hover:scale-105"
                >
                    Home
                </a>
                <a
                    href="#about"
                    className="block py-2 lg:py-0 hover:text-blue-400 transition-all transform hover:scale-105"
                >
                    About
                </a>
                <a
                    href="#services"
                    className="block py-2 lg:py-0 hover:text-blue-400 transition-all transform hover:scale-105"
                >
                    Services
                </a>
                <a
                    href="#contact"
                    className="block py-2 lg:py-0 hover:text-blue-400 transition-all transform hover:scale-105"
                >
                    Contact
                </a>
            </nav>

            {/* Login & Language Switcher */}
            <div className="hidden items-center gap-4 lg:flex">
                <button className="rounded-full bg-white text-black border-2 border-blue-500 px-4 py-2 hover:bg-blue-500 hover:text-white transition transform hover:scale-105">
                    Login
                </button>
                <select
                    name="language"
                    className="rounded-full bg-white text-black border-2 border-blue-500 p-1 focus:outline-none"
                >
                    <option value="en">EN</option>
                    <option value="es">ES</option>
                    <option value="fr">FR</option>
                </select>
            </div>

            {/* Hamburger Menu */}
            <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="block rounded p-4 text-2xl focus:outline-none lg:hidden bg-white transition transform hover:scale-110"
            >
                {isMenuOpen ? "✕" : "☰"}
            </button>
        </header>
    );
};

export default Header;
