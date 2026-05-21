import React, { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Link, useLocation } from 'react-router-dom';
import './Navbar.css';
import { useI18n } from '../i18n/I18nProvider';

gsap.registerPlugin(ScrollTrigger);

const Navbar = () => {
    const location = useLocation();
    const { language, setLanguage, t } = useI18n();
    const navRef = useRef(null);
    const [isVisible, setIsVisible] = useState(false);
    const [isDarkMode, setIsDarkMode] = useState(false);
    const [menuOpen, setMenuOpen] = useState(false);
    const [aboutOpen, setAboutOpen] = useState(false);
    const themeToggleRef = useRef(null);
    const mobileMenuRef = useRef(null);

    // Close menu on route change
    useEffect(() => {
        setMenuOpen(false);
        setAboutOpen(false);
    }, [location.pathname]);

    // Animate mobile menu open / close
    useEffect(() => {
        const menu = mobileMenuRef.current;
        if (!menu) return;

        if (menuOpen) {
            gsap.fromTo(menu,
                { opacity: 0, y: -16 },
                { opacity: 1, y: 0, duration: 0.35, ease: 'power2.out' }
            );
        } else {
            gsap.to(menu, { opacity: 0, y: -12, duration: 0.2, ease: 'power2.in' });
        }
    }, [menuOpen]);

    // Toggle theme function
    const toggleTheme = () => {
        const newTheme = isDarkMode ? 'light' : 'dark';
        const appContainer = document.querySelector('.app-container');

        if (appContainer) {
            appContainer.setAttribute('data-theme', newTheme);
        }

        setIsDarkMode(!isDarkMode);

        // Animate the toggle button
        if (themeToggleRef.current) {
            gsap.fromTo(themeToggleRef.current,
                { rotation: isDarkMode ? 0 : 180, scale: 0.8 },
                { rotation: isDarkMode ? 180 : 360, scale: 1, duration: 0.6, ease: 'back.out(1.7)' }
            );
        }
    };

    // Initialize theme on mount
    useEffect(() => {
        const appContainer = document.querySelector('.app-container');
        const currentTheme = appContainer?.getAttribute('data-theme') || 'light';
        setIsDarkMode(currentTheme === 'dark');
    }, []);

    useEffect(() => {
        // Initial animation when page loads
        const nav = navRef.current;
        gsap.set(nav, { y: -100, opacity: 0 });

        gsap.to(nav, {
            y: 0,
            opacity: 1,
            duration: 0.8,
            ease: 'power3.out',
            delay: 0.3
        });

        // Set initial visibility based on route
        if (location.pathname !== '/') {
            setIsVisible(true);
        } else {
            setIsVisible(window.scrollY > 300);
        }

        // Show/hide on scroll
        let lastScrollY = window.scrollY;

        const trigger = ScrollTrigger.create({
            start: 'top top',
            end: 'max',
            onUpdate: (self) => {
                const scrollY = self.scroll();
                const velocity = scrollY - lastScrollY;

                if (location.pathname !== '/') {
                    setIsVisible(true);
                } else {
                    // Show navbar after scrolling past hero or when scrolling up
                    if (scrollY > 300 || velocity < -5) {
                        setIsVisible(true);
                    } else if (scrollY < 100) {
                        setIsVisible(false);
                    }
                }

                lastScrollY = scrollY;
            }
        });

        return () => {
            trigger.kill();
        };
    }, [location.pathname]);

    useEffect(() => {
        const nav = navRef.current;
        if (!nav) return;

        gsap.to(nav, {
            y: isVisible ? 0 : -100,
            opacity: isVisible ? 1 : 0,
            duration: 0.4,
            ease: 'power2.out'
        });
    }, [isVisible]);

    const nextMode = isDarkMode ? 'light' : 'dark';
    const navTexts = {
        home: t('navbar.links.home'),
        about: t('navbar.links.about'),
        services: t('navbar.links.services'),
        projects: t('navbar.links.projects'),
        contact: t('navbar.links.contact')
    };

    return (
        <nav ref={navRef} className="navbar-container">
            <div className="navbar-grid" />
            <div className="navbar-cad-line" />

            <div className="navbar-content">
                <div className="navbar-logo">
                    <div className="navbar-logo-icon">
                        <Link to="/" className="navbar-link">
                            <img 
                                src={isDarkMode ? "/logonobackground.png" : "/logonobackground.png"} 
                                alt="Focus Trading & Contracting" 
                                className="navbar-logo-img" 
                            />
                        </Link>
                    </div>
                </div>

                <div className="navbar-links">
                    <Link to="/" className="navbar-link">
                        {navTexts.home}
                        <span className="navbar-link-underline" />
                    </Link>
                    <div className="navbar-dropdown-container">
                        <Link to="/about" className="navbar-link navbar-dropdown-trigger">
                            {navTexts.about}
                            <svg className="dropdown-chevron" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                <polyline points="6 9 12 15 18 9"></polyline>
                            </svg>
                            <span className="navbar-link-underline" />
                        </Link>
                        <div className="navbar-dropdown-menu">
                            <div className="dropdown-content-inner">
                                <div className="dropdown-header">
                                    <h3>{t('navbar.aboutDropdown.title')}</h3>
                                    <p>{t('navbar.aboutDropdown.subtitle')}</p>
                                </div>
                                <div className="dropdown-cards">
                                    <Link to="/about/who-we-are" className="dropdown-card dropdown-card-primary">
                                        {t('navbar.aboutDropdown.journey')}
                                    </Link>
                                    <Link to="/about/our-story" className="dropdown-card dropdown-card-secondary">
                                        {t('navbar.aboutDropdown.whoWeAre')}
                                    </Link>
                                    <Link to="/about/our-partners" className="dropdown-card dropdown-card-secondary">
                                        {t('navbar.aboutDropdown.partners')}
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                    <Link to="/services" className="navbar-link">
                        {navTexts.services}
                        <span className="navbar-link-underline" />
                    </Link>

                    <Link to="/projects" className="navbar-link">
                        {navTexts.projects}
                        <span className="navbar-link-underline" />
                    </Link>
                    <Link to="/contact" className="navbar-link">
                        {navTexts.contact}
                        <span className="navbar-link-underline" />
                    </Link>
                </div>

                <div className="navbar-social">
                    <div className="navbar-language-switcher" aria-label={t('navbar.languageSwitcherLabel')}>
                        <button
                            className={`navbar-language-btn${language === 'en' ? ' navbar-language-btn--active' : ''}`}
                            onClick={() => setLanguage('en')}
                            type="button"
                        >
                            EN
                        </button>
                        <button
                            className={`navbar-language-btn${language === 'ar' ? ' navbar-language-btn--active' : ''}`}
                            onClick={() => setLanguage('ar')}
                            type="button"
                        >
                            AR
                        </button>
                    </div>

                    <button
                        ref={themeToggleRef}
                        onClick={toggleTheme}
                        className="navbar-theme-toggle"
                        aria-label={`Switch to ${nextMode} mode`}
                    >
                        <div className="theme-toggle-track">
                            <div className="theme-toggle-thumb">
                                {isDarkMode ? (
                                    <svg className="theme-icon moon" viewBox="0 0 24 24" fill="currentColor">
                                        <path d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
                                    </svg>
                                ) : (
                                    <svg className="theme-icon sun" viewBox="0 0 24 24" fill="currentColor">
                                        <path d="M12 2.25a.75.75 0 01.75.75v2.25a.75.75 0 01-1.5 0V3a.75.75 0 01.75-.75zM7.5 12a4.5 4.5 0 119 0 4.5 4.5 0 01-9 0zM18.894 6.166a.75.75 0 00-1.06-1.06l-1.591 1.591a.75.75 0 101.06 1.06l1.591-1.591zM21.75 12a.75.75 0 01-.75.75h-2.25a.75.75 0 010-1.5H21a.75.75 0 01.75.75zM17.834 18.894a.75.75 0 001.06-1.06l-1.591-1.591a.75.75 0 10-1.06 1.06l1.591 1.591zM12 18a.75.75 0 01.75.75V21a.75.75 0 01-1.5 0v-2.25A.75.75 0 0112 18zM7.758 17.303a.75.75 0 00-1.061-1.06l-1.591 1.591a.75.75 0 001.06 1.06l1.591-1.591zM6 12a.75.75 0 01-.75.75H3a.75.75 0 010-1.5h2.25A.75.75 0 016 12zM6.697 7.757a.75.75 0 001.06-1.06L6.166 5.106a.75.75 0 00-1.06 1.06l1.591 1.591z" />
                                    </svg>
                                )}
                            </div>
                        </div>
                    </button>

                    <a href="https://www.linkedin.com/company/focus-for-trading-contracting" target="_blank" rel="noopener noreferrer" className="navbar-social-link navbar-social-link--desktop" aria-label="LinkedIn">
                        <svg viewBox="0 0 256 256" fill="currentColor">
                            <path d="M218.123 218.127h-37.931v-59.403c0-14.165-.253-32.4-19.728-32.4-19.756 0-22.779 15.434-22.779 31.369v60.43h-37.93V95.967h36.413v16.694h.51a39.907 39.907 0 0 1 35.928-19.733c38.445 0 45.533 25.288 45.533 58.186l-.016 67.013ZM56.955 79.27c-12.157.002-22.014-9.852-22.016-22.009-.002-12.157 9.851-22.014 22.008-22.016 12.157-.003 22.014 9.851 22.016 22.008A22.013 22.013 0 0 1 56.955 79.27m18.966 138.858H37.95V95.967h37.97v122.16ZM237.033.018H18.89C8.58-.098.125 8.161-.001 18.471v219.053c.122 10.315 8.576 18.582 18.89 18.474h218.144c10.336.128 18.823-8.139 18.966-18.474V18.454c-.147-10.33-8.635-18.588-18.966-18.453" />
                        </svg>
                    </a>
                    <a href="https://www.facebook.com/FOCUS.T.C.group/" target="_blank" rel="noopener noreferrer" className="navbar-social-link navbar-social-link--desktop" aria-label="Facebook">
                        <svg viewBox="0 0 24 24" fill="currentColor">
                            <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                        </svg>
                    </a>
                    <a href="https://www.instagram.com/focus.t.c/" target="_blank" rel="noopener noreferrer" className="navbar-social-link navbar-social-link--desktop" aria-label="Instagram">
                        <svg viewBox="0 0 24 24" fill="currentColor">
                            <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zM5.838 12a6.162 6.162 0 1 1 12.324 0 6.162 6.162 0 0 1-12.324 0zM12 16a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm4.965-10.405a1.44 1.44 0 1 1 2.881.001 1.44 1.44 0 0 1-2.881-.001z" />
                        </svg>
                    </a>


                    <button
                        className={`navbar-hamburger${menuOpen ? ' navbar-hamburger--open' : ''}`}
                        onClick={() => setMenuOpen(o => !o)}
                        aria-label={t('navbar.aria.toggleNavigation')}
                        aria-expanded={menuOpen}
                    >
                        <span className="navbar-hamburger-bar" />
                        <span className="navbar-hamburger-bar" />
                        <span className="navbar-hamburger-bar" />
                    </button>
                </div>
            </div>

            {menuOpen && (
                <div className="navbar-mobile-menu" ref={mobileMenuRef}>
                    <Link to="/" className="navbar-mobile-link" onClick={() => setMenuOpen(false)}>
                        {navTexts.home}
                    </Link>

                    <div className="navbar-mobile-group">
                        <button
                            className={`navbar-mobile-link navbar-mobile-link--group${aboutOpen ? ' navbar-mobile-link--open' : ''}`}
                            onClick={() => setAboutOpen(o => !o)}
                        >
                            {navTexts.about}
                            <svg className="navbar-mobile-chevron" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                <polyline points="6 9 12 15 18 9" />
                            </svg>
                        </button>
                        {aboutOpen && (
                            <div className="navbar-mobile-sub">
                                <Link to="/about/who-we-are" className="navbar-mobile-sublink" onClick={() => setMenuOpen(false)}>{t('navbar.aboutDropdown.journey')}</Link>
                                <Link to="/about/our-story" className="navbar-mobile-sublink" onClick={() => setMenuOpen(false)}>{t('navbar.aboutDropdown.whoWeAre')}</Link>
                                <Link to="/about/our-partners" className="navbar-mobile-sublink" onClick={() => setMenuOpen(false)}>{t('navbar.aboutDropdown.partners')}</Link>
                            </div>
                        )}
                    </div>

                    <Link to="/services" className="navbar-mobile-link" onClick={() => setMenuOpen(false)}>
                        {navTexts.services}
                    </Link>
                    <Link to="/projects" className="navbar-mobile-link" onClick={() => setMenuOpen(false)}>
                        {navTexts.projects}
                    </Link>
                    <Link to="/contact" className="navbar-mobile-link" onClick={() => setMenuOpen(false)}>
                        {navTexts.contact}
                    </Link>

                    <div className="navbar-mobile-languages">
                        <button
                            className={`navbar-language-btn${language === 'en' ? ' navbar-language-btn--active' : ''}`}
                            onClick={() => setLanguage('en')}
                            type="button"
                        >
                            EN
                        </button>
                        <button
                            className={`navbar-language-btn${language === 'ar' ? ' navbar-language-btn--active' : ''}`}
                            onClick={() => setLanguage('ar')}
                            type="button"
                        >
                            AR
                        </button>
                    </div>

                    <div className="navbar-mobile-socials">
                        <a href="https://www.linkedin.com/company/focus-for-trading-contracting" target="_blank" rel="noopener noreferrer" className="navbar-social-link" aria-label="LinkedIn">
                            <svg viewBox="0 0 256 256" fill="currentColor"><path d="M218.123 218.127h-37.931v-59.403c0-14.165-.253-32.4-19.728-32.4-19.756 0-22.779 15.434-22.779 31.369v60.43h-37.93V95.967h36.413v16.694h.51a39.907 39.907 0 0 1 35.928-19.733c38.445 0 45.533 25.288 45.533 58.186l-.016 67.013ZM56.955 79.27c-12.157.002-22.014-9.852-22.016-22.009-.002-12.157 9.851-22.014 22.008-22.016 12.157-.003 22.014 9.851 22.016 22.008A22.013 22.013 0 0 1 56.955 79.27m18.966 138.858H37.95V95.967h37.97v122.16ZM237.033.018H18.89C8.58-.098.125 8.161-.001 18.471v219.053c.122 10.315 8.576 18.582 18.89 18.474h218.144c10.336.128 18.823-8.139 18.966-18.474V18.454c-.147-10.33-8.635-18.588-18.966-18.453" /></svg>
                        </a>
                        <a href="https://www.facebook.com/FOCUS.T.C.group/" target="_blank" rel="noopener noreferrer" className="navbar-social-link" aria-label="Facebook">
                            <svg viewBox="0 0 24 24" fill="currentColor"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" /></svg>
                        </a>
                        <a href="https://www.instagram.com/focus.t.c/" target="_blank" rel="noopener noreferrer" className="navbar-social-link" aria-label="Instagram">
                            <svg viewBox="0 0 24 24" fill="currentColor"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zM5.838 12a6.162 6.162 0 1 1 12.324 0 6.162 6.162 0 0 1-12.324 0zM12 16a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm4.965-10.405a1.44 1.44 0 1 1 2.881.001 1.44 1.44 0 0 1-2.881-.001z" /></svg>
                        </a>
                    </div>
                </div>
            )}
        </nav>
    );
};

export default Navbar;
