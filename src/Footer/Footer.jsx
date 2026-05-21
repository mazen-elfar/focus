import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Link, useLocation } from 'react-router-dom';
import './Footer.css';
import { useI18n } from '../i18n/I18nProvider';

gsap.registerPlugin(ScrollTrigger);

const Footer = () => {
    const footerRef = useRef(null);
    const location = useLocation();
    const { t } = useI18n();

    useEffect(() => {
        const ctx = gsap.context(() => {
            const cadGrid = footerRef.current.querySelector('.cad-grid');
            const metadataItems = footerRef.current.querySelectorAll('.footer-metadata-item');
            const navGroups = footerRef.current.querySelectorAll('.footer-nav-group');
            const stamp = footerRef.current.querySelector('.footer-stamp');
            const techLines = footerRef.current.querySelectorAll('.footer-tech-line');

            const footerRect = footerRef.current.getBoundingClientRect();
            const docHeight = document.documentElement.scrollHeight;
            const winHeight = window.innerHeight;
            const alreadyShown = footerRect.top < winHeight * 0.9 || docHeight <= winHeight * 1.5;

            if (alreadyShown) {
                gsap.set(cadGrid, { opacity: 0.4 });
                gsap.set(metadataItems, { y: 0, opacity: 1 });
                gsap.set(navGroups, { y: 0, opacity: 1 });
                gsap.set(stamp, { scale: 1, opacity: 1 });
                gsap.set(techLines, { scaleX: 1, scaleY: 1 });
                return;
            }

            gsap.set(cadGrid, { opacity: 0 });
            gsap.set(metadataItems, { y: 40, opacity: 0 });
            gsap.set(navGroups, { y: 50, opacity: 0 });
            gsap.set(stamp, { scale: 0.8, opacity: 0 });

            const st = { trigger: footerRef.current, start: 'top 90%', toggleActions: 'play none none reverse' };

            gsap.timeline({ scrollTrigger: { ...st, end: 'top 20%', scrub: 1 } })
                .to(cadGrid, { opacity: 0.4, duration: 1 }, 0)
                .to(metadataItems, { y: 0, opacity: 1, duration: 0.8, ease: 'power2.out' }, 0.3)
                .to(navGroups, { y: 0, opacity: 1, duration: 0.8, ease: 'power2.out' }, 0.5)
                .to(stamp, { scale: 1, opacity: 1, duration: 0.8, ease: 'power2.out' }, 0.7);

            gsap.fromTo(techLines,
                { scaleX: 0, scaleY: 0 },
                { scaleX: 1, scaleY: 1, duration: 1.5, stagger: 0.2, ease: 'power3.out', scrollTrigger: st }
            );
        }, footerRef);

        return () => ctx.revert();
    }, [location]);

    return (
        <footer ref={footerRef} className="footer-container">
            {/* CAD Grid */}
            <div className="cad-grid" />

            {/* Corner crosshairs */}
            <div className="footer-crosshair footer-crosshair-tl" />
            <div className="footer-crosshair footer-crosshair-tr" />
            <div className="footer-crosshair footer-crosshair-bl" />
            <div className="footer-crosshair footer-crosshair-br" />

            {/* ── Metadata strip ── */}
            <div className="footer-metadata">
                {/* <div className="footer-metadata-item">
                    <span className="footer-metadata-label">{t('footer.metadata.headquarters.label')}</span>
                    <span className="footer-metadata-value">
                        🇪🇬 {t('footer.metadata.headquarters.line1')}<br />
                        🇸🇦 {t('footer.metadata.headquarters.line2')}
                    </span>
                </div> */}
                
                <div className="footer-metadata-item">
                    <span className="footer-metadata-label">{t('footer.metadata.hours.label')}</span>
                    <span className="footer-metadata-value">
                        {t('footer.metadata.hours.line1')}<br />
                        {t('footer.metadata.hours.line2')}
                    </span>
                </div>
            </div>

            {/* ── Navigation + Stamp ── */}
            <div className="footer-nav-section">
                <div className="footer-nav-grid">

                    {/* Logo + tagline */}
                    <div className="footer-nav-group footer-brand-group">
                        <Link to="/" className="footer-logo-link">
                            <img src="/imglogowhite.png" alt="Focus" className="footer-logo-img" />
                            <span className="footer-logo-name">FOCUS</span>
                        </Link>
                        <p className="footer-tagline">
                            {t('footer.tagline.line1')}<br />
                            {t('footer.tagline.line2')}
                        </p>
                        <div className="footer-socials">
                            <a href="https://www.linkedin.com/company/focus-for-trading-contracting" target="_blank" rel="noopener noreferrer" className="footer-social-link" aria-label="LinkedIn">
                                <svg viewBox="0 0 24 24" fill="currentColor"><path d="M20.447 20.452H17.21v-5.569c0-1.327-.024-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.985V9h3.105v1.561h.044c.433-.82 1.49-1.685 3.066-1.685 3.279 0 3.883 2.158 3.883 4.966v6.61zM5.337 7.433a1.8 1.8 0 1 1 0-3.6 1.8 1.8 0 0 1 0 3.6zm1.553 13.019H3.784V9h3.106v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" /></svg>
                            </a>
                            <a href="https://www.facebook.com/FOCUS.T.C.group/" target="_blank" rel="noopener noreferrer" className="footer-social-link" aria-label="Facebook">
                                <svg viewBox="0 0 24 24" fill="currentColor"><path d="M24 12.073C24 5.405 18.627 0 12 0S0 5.405 0 12.073C0 18.1 4.388 23.094 10.125 24v-8.437H7.078v-3.49h3.047V9.413c0-3.007 1.792-4.668 4.533-4.668 1.312 0 2.686.236 2.686.236v2.953h-1.514c-1.491 0-1.956.928-1.956 1.874v2.25h3.328l-.532 3.49h-2.796V24C19.612 23.094 24 18.1 24 12.073z" /></svg>
                            </a>
                            <a href="https://www.instagram.com/focus.t.c/" target="_blank" rel="noopener noreferrer" className="footer-social-link" aria-label="Instagram">
                                <svg viewBox="0 0 24 24" fill="currentColor"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 1 0 0 12.324 6.162 6.162 0 0 0 0-12.324zM12 16a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm6.406-11.845a1.44 1.44 0 1 0 0 2.881 1.44 1.44 0 0 0 0-2.881z" /></svg>
                            </a>
                        </div>
                    </div>

                    {/* Quick Links */}
                    <div className="footer-nav-group">
                        <h4 className="footer-nav-title">{t('footer.company.title')}</h4>
                        <nav className="footer-nav-links">
                            <Link to="/" className="footer-nav-link">{t('footer.company.links.home')}</Link>
                            <Link to="/about" className="footer-nav-link">{t('footer.company.links.about')}</Link>
                            <Link to="/about/who-we-are" className="footer-nav-link">{t('footer.company.links.journey')}</Link>
                            <Link to="/about/our-story" className="footer-nav-link">{t('footer.company.links.whoWeAre')}</Link>
                            <Link to="/about/our-partners" className="footer-nav-link">{t('footer.company.links.partners')}</Link>
                        </nav>
                    </div>

                    {/* Services */}
                    <div className="footer-nav-group">
                        <h4 className="footer-nav-title">{t('footer.services.title')}</h4>
                        <nav className="footer-nav-links">
                            <Link to="/services" className="footer-nav-link">{t('footer.services.links.power')}</Link>
                            <Link to="/services" className="footer-nav-link">{t('footer.services.links.scada')}</Link>
                            <Link to="/services" className="footer-nav-link">{t('footer.services.links.electro')}</Link>
                            <Link to="/projects" className="footer-nav-link">{t('footer.services.links.projects')}</Link>
                            <Link to="/contact" className="footer-nav-link">{t('footer.services.links.contact')}</Link>
                        </nav>
                    </div>

                    {/* Contact */}
                    <div className="footer-nav-group">
                        <h4 className="footer-nav-title">{t('footer.contact.title')}</h4>
                        <nav className="footer-nav-links">
                            <a href="tel:+966538186792" className="footer-nav-link">🇸🇦 +966 53 818 6792</a>
                            <a href="tel:+201090880401" className="footer-nav-link">🇪🇬 +20 109 088 0401</a>
                            <a href="mailto:info@focus-tc.com" className="footer-nav-link">info@focus-tc.com</a>
                        </nav>
                    </div>
                </div>

                {/* Stamp */}
                <div className="footer-stamp">
                    <div className="footer-stamp-box">
                        <p className="footer-stamp-text">
                            {t('footer.stamp.line1')}<br />
                            {t('footer.stamp.line2')}<br />
                            <span className="footer-stamp-highlight">{t('footer.stamp.company')}</span>
                        </p>
                    </div>
                    <p className="footer-copyright">{t('footer.copyright')}</p>
                </div>
            </div>

            {/* Background watermark */}
            <div className="footer-bg-branding" aria-hidden="true">
                <h1 className="footer-bg-text">
                    <img src="/footer.png" alt="" style={{ width: '100%', height: '100%' }} />
                </h1>
            </div>

            {/* Decorative lines */}
            <div className="footer-tech-line footer-tech-line-h" />
            <div className="footer-tech-line footer-tech-line-left" />
            <div className="footer-tech-line footer-tech-line-right" />
        </footer>
    );
};

export default Footer;
