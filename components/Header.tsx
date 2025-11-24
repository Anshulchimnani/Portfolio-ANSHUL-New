"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import ThemeToggle from "./ThemeToggle";
import { navLinks, personalInfo } from "@/lib/data";

export default function Header() {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 10);
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const scrollToSection = (href: string) => {
        if (href.startsWith("#")) {
            const element = document.querySelector(href);
            if (element) {
                element.scrollIntoView({ behavior: "smooth" });
                setIsMobileMenuOpen(false);
            }
        }
    };

    return (
        <header
            className={`fixed top-0 left-0 right-0 z-50 transition-all duration-200 ${isScrolled
                    ? "bg-white dark:bg-dark-background shadow-sm"
                    : "bg-transparent"
                }`}
        >
            <div className="max-w-container mx-auto px-6 py-4">
                <div className="flex items-center justify-between">
                    {/* Logo/Name */}
                    <Link
                        href="/"
                        className="text-xl font-semibold text-foreground dark:text-dark-foreground hover:text-accent dark:hover:text-dark-accent transition-colors"
                    >
                        {personalInfo.name}
                    </Link>

                    {/* Desktop Navigation */}
                    <nav className="hidden md:flex items-center gap-8">
                        {navLinks.map((link) => (
                            <div key={link.name}>
                                {link.href.startsWith("#") ? (
                                    <button
                                        onClick={() => scrollToSection(link.href)}
                                        className="text-secondary dark:text-dark-secondary hover:text-foreground dark:hover:text-dark-foreground transition-colors"
                                    >
                                        {link.name}
                                    </button>
                                ) : (
                                    <Link
                                        href={link.href}
                                        className="text-secondary dark:text-dark-secondary hover:text-foreground dark:hover:text-dark-foreground transition-colors"
                                    >
                                        {link.name}
                                    </Link>
                                )}
                            </div>
                        ))}
                        <ThemeToggle />
                    </nav>

                    {/* Mobile Menu Button */}
                    <div className="md:hidden flex items-center gap-4">
                        <ThemeToggle />
                        <button
                            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                            className="p-2"
                            aria-label="Toggle menu"
                        >
                            {isMobileMenuOpen ? (
                                <X className="w-6 h-6" />
                            ) : (
                                <Menu className="w-6 h-6" />
                            )}
                        </button>
                    </div>
                </div>

                {/* Mobile Menu */}
                {isMobileMenuOpen && (
                    <nav className="md:hidden mt-4 pb-4 flex flex-col gap-4">
                        {navLinks.map((link) => (
                            <div key={link.name}>
                                {link.href.startsWith("#") ? (
                                    <button
                                        onClick={() => scrollToSection(link.href)}
                                        className="text-secondary dark:text-dark-secondary hover:text-foreground dark:hover:text-dark-foreground transition-colors block w-full text-left"
                                    >
                                        {link.name}
                                    </button>
                                ) : (
                                    <Link
                                        href={link.href}
                                        className="text-secondary dark:text-dark-secondary hover:text-foreground dark:hover:text-dark-foreground transition-colors block"
                                        onClick={() => setIsMobileMenuOpen(false)}
                                    >
                                        {link.name}
                                    </Link>
                                )}
                            </div>
                        ))}
                    </nav>
                )}
            </div>
        </header>
    );
}
