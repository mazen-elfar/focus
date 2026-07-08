import React, { useEffect, useRef, useState, useMemo } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useNavigate } from 'react-router-dom';
import './Section7.css';
import { useI18n } from '../../i18n/I18nProvider';

gsap.registerPlugin(ScrollTrigger);

/* ═══════════════════════════════════════════════════════════ */
const Section7 = () => {
    const { get, t } = useI18n();
    const navigate = useNavigate();
    const sectionRef = useRef(null);
    const [activeService, setActiveService] = useState(null);
    const [counts, setCounts] = useState({ 0: 0, 1: 0, 2: 0, 3: 0 });

    /* ── Services data ─────────────────────────────────────────── */
    const SERVICES = useMemo(() => [
        {
            id: 'power-gen',
            tag: t('home.section7.services.powerGen.tag'),
            title: t('home.section7.services.powerGen.title'),
            shortDesc: t('home.section7.services.powerGen.shortDesc'),
            fullDesc: t('home.section7.services.powerGen.fullDesc'),
            image: '/WhatsApp_Image_2026-02-10_at_7.16.13_PM-removebg-preview.png',
            icon: (
                <svg viewBox="0 0 24 24" fill="currentColor">
                    <path d="M13 2L3 14h7v8l10-12h-7V2z" />
                </svg>
            ),
            accent: '#06b6d4',
            tags: get('home.section7.services.powerGen.tags') || [],
        },
        {
            id: 'solar-energy',
            tag: t('home.section7.services.solarEnergy.tag'),
            title: t('home.section7.services.solarEnergy.title'),
            shortDesc: t('home.section7.services.solarEnergy.shortDesc'),
            fullDesc: t('home.section7.services.solarEnergy.fullDesc'),
            image: '/Solar System.JPG',
            icon: (
                <svg viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 7c-2.76 0-5 2.24-5 5s2.24 5 5 5 5-2.24 5-5-2.24-5-5-5zM2 13h2v-2H2v2zm17 0h2v-2h-2v2zM11 2v2h2V2h-2zm0 17v2h2v-2h-2zM5.22 4.81L3.81 6.22l1.41 1.41 1.41-1.41-1.41-1.41zm14.97 14.97l-1.41-1.41-1.41 1.41 1.41 1.41 1.41-1.41zM18.78 4.81l-1.41 1.41 1.41 1.41 1.41-1.41-1.41-1.41zM5.62 19.78l1.41-1.41-1.41-1.41-1.41 1.41 1.41 1.41z" />
                </svg>
            ),
            accent: '#f59e0b',
            tags: get('home.section7.services.solarEnergy.tags') || [],
        },
    ], [t, get]);

    const STATS = useMemo(() => [
        { value: 500, suffix: '+', label: t('home.section7.stats.projectsLabel'), icon: '🏗' },
        { value: 6,   suffix: '+', label: t('home.section7.stats.yearsLabel'), icon: '🎯' },
        { value: 1.2, suffix: ' GW', label: t('home.section7.stats.powerLabel'), icon: '⚡', decimal: true },
        { value: 99,  suffix: '.99%', label: t('home.section7.stats.uptimeLabel'), icon: '🛡' },
    ], [t]);

    /* ── Entrance animations ── */
    useEffect(() => {
        const ctx = gsap.context(() => {
            // Badge + heading
            gsap.fromTo('.s7-badge, .s7-headline, .s7-headline-sub, .s7-divider',
                { y: 32, opacity: 0 },
                { y: 0, opacity: 1, stagger: 0.1, duration: 0.7, ease: 'power3.out',
                  scrollTrigger: { trigger: '.s7-header', start: 'top 85%' } }
            );

            // Service cards
            gsap.fromTo('.s7-service-card',
                { y: 48, opacity: 0 },
                { y: 0, opacity: 1, stagger: 0.15, duration: 0.8, ease: 'power3.out',
                  scrollTrigger: { trigger: '.s7-services-grid', start: 'top 85%' } }
            );

            // Stats
            const statsEl = document.querySelectorAll('.s7-stat-card');
            gsap.fromTo(statsEl,
                { y: 32, opacity: 0 },
                { y: 0, opacity: 1, stagger: 0.12, duration: 0.7, ease: 'power3.out',
                  scrollTrigger: {
                      trigger: '.s7-stats-grid',
                      start: 'top 85%',
                      onEnter: () => {
                          STATS.forEach((s, i) => {
                              const obj = { val: 0 };
                              gsap.to(obj, {
                                  val: s.value,
                                  duration: 2,
                                  ease: 'power2.out',
                                  onUpdate: () => setCounts(prev => ({ ...prev, [i]: s.decimal ? obj.val.toFixed(1) : Math.floor(obj.val) })),
                              });
                          });
                      }
                  }
                }
            );

            // CTA Banner
            gsap.fromTo('.s7-cta-banner',
                { y: 40, opacity: 0 },
                { y: 0, opacity: 1, duration: 0.8, ease: 'power3.out',
                  scrollTrigger: { trigger: '.s7-cta-banner', start: 'top 90%' } }
            );
        }, sectionRef);

        return () => ctx.revert();
    }, [STATS]);

    /* ── Detail panel animation ── */
    useEffect(() => {
        if (activeService !== null) {
            gsap.fromTo('.s7-detail-panel',
                { x: 40, opacity: 0 },
                { x: 0, opacity: 1, duration: 0.5, ease: 'power3.out' }
            );
        }
    }, [activeService]);

    return (
        <section ref={sectionRef} className="s7-section">
            {/* Ambient BG */}
            <div className="s7-bg-glow s7-bg-glow--left" />
            <div className="s7-bg-glow s7-bg-glow--right" />
            <div className="s7-grid-overlay" />

            <div className="s7-inner">

                {/* ── Header ── */}
                <div className="s7-header">
                    <span className="s7-badge">{t('home.section7.badge')}</span>
                    <h2 className="s7-headline">
                        {t('home.section7.headlineStart')}<br />
                        <span className="s7-headline-accent">{t('home.section7.headlineAccent')}</span>
                    </h2>
                    <p className="s7-headline-sub">
                        {t('home.section7.headlineSub')}
                    </p>
                    <div className="s7-divider" />
                </div>

                {/* ── Service Cards + Detail Panel ── */}
                <div className="s7-services-section">
                    <div className="s7-services-grid">
                        {SERVICES.map((svc, i) => (
                            <div
                                key={svc.id}
                                className={`s7-service-card ${activeService === i ? 's7-service-card--active' : ''}`}
                                onClick={() => setActiveService(activeService === i ? null : i)}
                                style={{ '--card-accent': svc.accent }}
                            >
                                <div className="s7-card-img-wrap">
                                    <img src={svc.image} alt={svc.title} className="s7-card-img" />
                                    <div className="s7-card-img-overlay" />
                                </div>

                                <div className="s7-card-body">
                                    <div className="s7-card-top">
                                        <div className="s7-card-icon">{svc.icon}</div>
                                        <span className="s7-card-tag">{svc.tag}</span>
                                    </div>

                                    <h3 className="s7-card-title">{svc.title}</h3>
                                    <p className="s7-card-desc">{svc.shortDesc}</p>

                                    <div className="s7-card-tags">
                                        {svc.tags.map(tag => (
                                            <span key={tag} className="s7-tag-pill">{tag}</span>
                                        ))}
                                    </div>

                                    <button className="s7-card-btn">
                                        <span>{activeService === i ? t('home.section7.buttons.close') : t('home.section7.buttons.explore')}</span>
                                        <svg viewBox="0 0 24 24" fill="currentColor">
                                            <path d={activeService === i
                                                ? "M19 11H7.83l5.59-5.59L12 4l-8 8 8 8 1.41-1.41L7.83 13H19v-2z"
                                                : "M16.17 11l-5.59-5.59L12 4l8 8-8 8-1.41-1.41L16.17 13H4v-2h12.17z"
                                            } />
                                        </svg>
                                    </button>
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* ── Detail Panel ── */}
                    {activeService !== null && (
                        <div className="s7-detail-panel" style={{ '--panel-accent': SERVICES[activeService].accent }}>
                            <button className="s7-detail-close" onClick={() => setActiveService(null)}>
                                <svg viewBox="0 0 24 24" fill="currentColor"><path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z" /></svg>
                            </button>
                            <div className="s7-detail-icon">{SERVICES[activeService].icon}</div>
                            <h3 className="s7-detail-title">{SERVICES[activeService].title}</h3>
                            <p className="s7-detail-desc">{SERVICES[activeService].fullDesc}</p>
                            <div className="s7-detail-tags">
                                {SERVICES[activeService].tags.map(tag => (
                                    <span key={tag} className="s7-tag-pill s7-tag-pill--detail">{tag}</span>
                                ))}
                            </div>
                            <button className="s7-detail-cta" onClick={() => navigate('/services')}>
                                {t('home.section7.buttons.viewFullDetails')}
                                <svg viewBox="0 0 24 24" fill="currentColor">
                                    <path d="M16.17 11l-5.59-5.59L12 4l8 8-8 8-1.41-1.41L16.17 13H4v-2h12.17z" />
                                </svg>
                            </button>
                        </div>
                    )}
                </div>

                {/* ── Stats Grid ── */}
                <div className="s7-stats-section">
                    <div className="s7-stats-label">{t('home.section7.stats.title')}</div>
                    <div className="s7-stats-grid">
                        {STATS.map((s, i) => (
                            <div key={i} className="s7-stat-card">
                                <div className="s7-stat-icon">{s.icon}</div>
                                <div className="s7-stat-value">
                                    {counts[i]}{s.suffix}
                                </div>
                                <div className="s7-stat-label">{s.label}</div>
                                <div className="s7-stat-bar" />
                            </div>
                        ))}
                    </div>
                </div>

                {/* ── CTA Banner ── */}
                <div className="s7-cta-banner">
                    <div className="s7-cta-content">
                        <span className="s7-cta-eyebrow">{t('home.section7.cta.eyebrow')}</span>
                        <h3 className="s7-cta-title">{t('home.section7.cta.title')}</h3>
                        <p className="s7-cta-sub">{t('home.section7.cta.sub')}</p>
                    </div>
                    <div className="s7-cta-actions">
                        <button className="s7-cta-btn s7-cta-btn--primary" onClick={() => navigate('/contact')}>
                            {t('home.section7.cta.btnContact')}
                            <svg viewBox="0 0 24 24" fill="currentColor"><path d="M16.17 11l-5.59-5.59L12 4l8 8-8 8-1.41-1.41L16.17 13H4v-2h12.17z" /></svg>
                        </button>
                        <button className="s7-cta-btn s7-cta-btn--ghost" onClick={() => navigate('/services')}>
                            {t('home.section7.cta.btnServices')}
                        </button>
                    </div>
                </div>

            </div>
        </section>
    );
};

export default Section7;

