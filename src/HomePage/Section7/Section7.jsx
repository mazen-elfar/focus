import React, { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ScrollToPlugin } from 'gsap/ScrollToPlugin';
import { useNavigate } from 'react-router-dom';
import './Section7.css';
import { useI18n } from '../../i18n/I18nProvider';

gsap.registerPlugin(ScrollTrigger, ScrollToPlugin);

const Section7 = () => {
    const { get, t } = useI18n();
    const navigate = useNavigate();
    const sectionRef = useRef(null);
    const statsRef = useRef(null);
    const subCardsRef = useRef(null);
    const [counts, setCounts] = useState({
        projects: 0,
        years: 0,
        hours: 0,
        partners: 0
    });
    const [activeCategory, setActiveCategory] = useState(null);

    const stats = get('home.section7.stats', []);
    const mainCards = get('home.section7.mainCards', {});
    const subCards = get('home.section7.subCards', {});

    useEffect(() => {
        const ctx = gsap.context(() => {
            // Section reveal animation
            const sectionElements = sectionRef.current.querySelectorAll('.section7-reveal');
            
            gsap.fromTo(sectionElements,
                { y: 60, opacity: 0 },
                {
                    y: 0,
                    opacity: 1,
                    duration: 0.8,
                    stagger: 0.15,
                    ease: 'power3.out',
                    scrollTrigger: {
                        trigger: sectionRef.current,
                        start: 'top 80%',
                        end: 'top 30%',
                        toggleActions: 'play none none reverse'
                    }
                }
            );

            // Count-up animation
            ScrollTrigger.create({
                trigger: statsRef.current,
                start: 'top 75%',
                onEnter: () => {
                    stats.forEach((stat) => {
                        const obj = { val: 0 };
                        gsap.to(obj, {
                            val: stat.value,
                            duration: 2,
                            ease: 'power2.out',
                            onUpdate: () => {
                                setCounts((prev) => ({
                                    ...prev,
                                    [stat.key]: Math.floor(obj.val)
                                }));
                            }
                        });
                    });
                },
                once: true
            });

            // Main cards stagger animation
            const cards = sectionRef.current.querySelectorAll('.category-card');
            gsap.fromTo(cards,
                { y: 80, opacity: 0 },
                {
                    y: 0,
                    opacity: 1,
                    duration: 0.8,
                    stagger: 0.2,
                    ease: 'power3.out',
                    scrollTrigger: {
                        trigger: cards[0],
                        start: 'top 85%',
                        toggleActions: 'play none none reverse'
                    }
                }
            );
        }, sectionRef);

        return () => ctx.revert();
    }, [stats]);

    useEffect(() => {
        if (activeCategory && subCardsRef.current) {
            gsap.fromTo(subCardsRef.current.querySelectorAll('.sub-card-item'),
                { y: 40, opacity: 0 },
                {
                    y: 0,
                    opacity: 1,
                    duration: 0.6,
                    stagger: 0.1,
                    ease: 'power2.out'
                }
            );
            
            // Scroll to sub-cards with enhanced smoothness
            gsap.to(window, {
                duration: 1.2,
                scrollTo: { 
                    y: subCardsRef.current, 
                    offsetY: 80,
                    autoKill: false 
                },
                ease: "power4.inOut",
                delay: 0.1 // Small delay to ensure layout has settled
            });
        }
    }, [activeCategory]);

    const formatNumber = (num, shouldFormat) => {
        if (shouldFormat && num >= 1000000) {
            return '1M';
        }
        return num.toLocaleString();
    };

    const handleCategoryClick = (category) => {
        if (activeCategory === category) {
            setActiveCategory(null);
        } else {
            setActiveCategory(category);
        }
    };

    const handleLearnMore = () => {
        navigate('/services');
    };

    return (
        <section ref={sectionRef} className="section7-container">
            <div className="section7-wrapper">
                {/* Main Section Header */}
                <div className="section7-main-header section7-reveal">
                    <h2 className="business-line-text">Business Line</h2>
                    <div className="business-line-underline"></div>
                </div>

                {/* Category Showcase Grid */}
                <div className="section7-categories section7-reveal">
                    {Object.entries(mainCards).map(([key, card]) => (
                        <div 
                            key={key} 
                            className={`category-card ${activeCategory === key ? 'active' : ''}`}
                            onClick={() => handleCategoryClick(key)}
                        >
                            <div 
                                className="category-card-bg"
                                style={{ backgroundImage: `url("${card.mainImage}")` }}
                            ></div>
                            <div className="category-card-overlay"></div>
                            <div className="category-card-border"></div>
                            <div className="category-card-content">
                                <div className="category-card-icon">
                                    {key === 'energy' ? (
                                        <svg viewBox="0 0 24 24" fill="currentColor">
                                            <path d="M13 2L3 14h7v8l10-12h-7V2z"/>
                                        </svg>
                                    ) : (
                                        <svg viewBox="0 0 24 24" fill="currentColor">
                                            <path d="M12 2c-5.33 4.55-8 8.48-8 11.8 0 4.98 3.58 8.2 8 8.2s8-3.22 8-8.2c0-3.32-2.67-7.25-8-11.8z"/>
                                        </svg>
                                    )}
                                </div>
                                <div className="category-card-text">
                                    <h3 className="category-card-title">{card.title}</h3>
                                    <p className="category-card-desc">{card.description}</p>
                                    <div className="category-card-cta">
                                        <div className="section7-cta-icon">
                                            <svg viewBox="0 0 24 24" fill="currentColor">
                                                <path d="M16.17 11l-5.59-5.59L12 4l8 8-8 8-1.41-1.41L16.17 13H4v-2h12.17z"/>
                                            </svg>
                                        </div>
                                        <span>{card.cta}</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Typography Header */}
                <div className="section7-header section7-reveal">
                    <span className="section7-subtitle">{t('home.section7.subtitle')}</span>
                    <h2 className="section7-title">{t('home.section7.title')}</h2>
                </div>

                {/* Stats Dashboard: Glassmorphic Bar */}
                <div ref={statsRef} className="section7-stats section7-reveal">
                    {stats.map((stat) => (
                        <div key={stat.key} className="section7-stat-item">
                            <span className="section7-stat-label">{stat.label}</span>
                            <div className="section7-stat-value">
                                {formatNumber(counts[stat.key], stat.format)}{stat.suffix}
                            </div>
                        </div>
                    ))}
                </div>

                {/* Sub-cards Display Area */}
                {activeCategory && (
                    <div ref={subCardsRef} className="sub-cards-container section7-reveal">
                        <div className="sub-cards-header">
                            <button className="back-button" onClick={() => setActiveCategory(null)}>
                                <svg viewBox="0 0 24 24" fill="currentColor">
                                    <path d="M20 11H7.83l5.59-5.59L12 4l-8 8 8 8 1.41-1.41L7.83 13H20v-2z"/>
                                </svg>
                                <span>{mainCards[activeCategory]?.title}</span>
                            </button>
                        </div>
                        <div className="sub-cards-grid">
                            {subCards[activeCategory]?.map((sub) => (
                                <div key={sub.id} className="sub-card-item">
                                    <div className="sub-card-content">
                                        <div className="sub-card-header">
                                            <div className="sub-card-icon">
                                                {sub.id === 'power-gen' && (
                                                    <svg viewBox="0 0 24 24" fill="currentColor">
                                                        <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"/>
                                                    </svg>
                                                )}
                                                {sub.id === 'solar-energy' && (
                                                    <svg viewBox="0 0 24 24" fill="currentColor">
                                                        <path d="M12 7c-2.76 0-5 2.24-5 5s2.24 5 5 5 5-2.24 5-5-2.24-5-5-5zM2 13h3v-2H2v2zm17 0h3v-2h-3v2zM11 2v3h2V2h-2zm0 17v3h2v-3h-2zM5.22 4.81L3.81 6.22l2.12 2.12 1.41-1.41-2.12-2.12zm14.97 14.97l-1.41 1.41-2.12-2.12 1.41-1.41 2.12 2.12zM18.78 4.81l2.12 2.12-1.41 1.41-2.12-2.12 1.41-1.41zM6.22 20.19l-2.12-2.12 1.41-1.41 2.12 2.12-1.41 1.41z"/>
                                                    </svg>
                                                )}
                                                {sub.id === 'scada-sys' && (
                                                    <svg viewBox="0 0 24 24" fill="currentColor">
                                                        <path d="M12 2c-5.33 4.55-8 8.48-8 11.8 0 4.98 3.58 8.2 8 8.2s8-3.22 8-8.2c0-3.32-2.67-7.25-8-11.8z"/>
                                                    </svg>
                                                )}
                                            </div>
                                            <h4 className="sub-card-title">{sub.title}</h4>
                                        </div>
                                        <p className="sub-card-description">{sub.description}</p>
                                        <button className="sub-card-learn-more" onClick={handleLearnMore}>
                                            <span>Learn More</span>
                                            <svg viewBox="0 0 24 24" fill="currentColor">
                                                <path d="M12 4l-1.41 1.41L16.17 11H4v2h12.17l-5.58 5.59L12 20l8-8z"/>
                                            </svg>
                                        </button>
                                    </div>
                                    <div className="sub-card-image-wrapper">
                                        <img src={sub.image} alt={sub.title} className="sub-card-image" />
                                        <div className="sub-card-image-overlay" />
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                )}

                {/* Footer Visual Element */}
                <footer className="section7-footer">
                    <div className="section7-footer-line" />
                    <div className="section7-footer-dot" />
                    <div className="section7-footer-line" />
                </footer>
            </div>
        </section>
    );
};

export default Section7;
