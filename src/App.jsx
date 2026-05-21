import React, { useEffect, useState, useRef } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import ServicesPage from './Services/ServicesPage';
import HeroSection from './HomePage/HeroSection/HeroSection';
import Section3 from './HomePage/Section3/Section';
import Section2 from './HomePage/Section2/Section2';
import Section5 from './HomePage/Section5/Section5';
import Section6 from './HomePage/Section6/Section6';
import Section7 from './HomePage/Section7/Section7';
import Navbar from './Navbar/Navbar';
import AboutUs from './AboutUS/AboutUs';
import ContactUs from './ContactUs/ContactUs';
import Footer from './Footer/Footer';
import ProjectsPage from './projects/ProjectsPage';
import LoadingScreen from './LoadingScreen/LoadingScreen';
import WhoWeAre from './AboutUS/WhoWeAre';
import OurStory from './AboutUS/OurStory';
import OurPartners from './AboutUS/OurPartners';
import Lenis from 'lenis';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useI18n } from './i18n/I18nProvider';

gsap.registerPlugin(ScrollTrigger);

const HomePage = () => {
    return (
        <>

            <HeroSection />
            {/* <Section2 /> */}
            {/* <Section5 /> */}
            {/* <Section6 /> */}
            <Section7 />
            {/* <Section3 /> */}
        </>
    );
};

const AppContent = () => {
    const { isRTL } = useI18n();
    const { pathname } = useLocation();
    const [progress, setProgress] = useState(0);
    const [isLoading, setIsLoading] = useState(true);
    const lenisRef = useRef(null);
    const [resourcesLoaded, setResourcesLoaded] = useState({
        images: false,
        fonts: false,
        scripts: false,
        components: false
    });

    // Track image loading
    useEffect(() => {
        const images = document.querySelectorAll('img');
        let loadedImages = 0;
        const totalImages = images.length;

        if (totalImages === 0) {
            setResourcesLoaded(prev => ({ ...prev, images: true }));
            return;
        }

        images.forEach(img => {
            if (img.complete) {
                loadedImages++;
            } else {
                img.addEventListener('load', () => {
                    loadedImages++;
                    if (loadedImages === totalImages) {
                        setResourcesLoaded(prev => ({ ...prev, images: true }));
                    }
                });
                img.addEventListener('error', () => {
                    loadedImages++;
                    if (loadedImages === totalImages) {
                        setResourcesLoaded(prev => ({ ...prev, images: true }));
                    }
                });
            }
        });

        if (loadedImages === totalImages) {
            setResourcesLoaded(prev => ({ ...prev, images: true }));
        }
    }, []);

    // Track font loading
    useEffect(() => {
        if (document.fonts) {
            document.fonts.ready.then(() => {
                setResourcesLoaded(prev => ({ ...prev, fonts: true }));
            });
        } else {
            // Fallback if fonts API not available
            setTimeout(() => {
                setResourcesLoaded(prev => ({ ...prev, fonts: true }));
            }, 1000);
        }
    }, []);

    // Simulate script/component loading progress
    useEffect(() => {
        const scriptTimer = setTimeout(() => {
            setResourcesLoaded(prev => ({ ...prev, scripts: true }));
        }, 500);

        const componentTimer = setTimeout(() => {
            setResourcesLoaded(prev => ({ ...prev, components: true }));
        }, 800);

        return () => {
            clearTimeout(scriptTimer);
            clearTimeout(componentTimer);
        };
    }, []);

    // Calculate overall progress
    useEffect(() => {
        const stages = Object.values(resourcesLoaded);
        const completedStages = stages.filter(Boolean).length;
        const totalStages = stages.length;

        let targetProgress = (completedStages / totalStages) * 100;

        // Force 100% when all stages complete
        if (completedStages === totalStages) {
            targetProgress = 100;
        }

        // Smooth progress animation
        const currentProgress = progress;
        const diff = targetProgress - currentProgress;

        if (Math.abs(diff) > 0.1) {
            const increment = diff * 0.15;
            const newProgress = currentProgress + increment;

            const timer = setTimeout(() => {
                setProgress(newProgress);
            }, 30);

            return () => clearTimeout(timer);
        } else if (targetProgress === 100 && progress < 100) {
            // Snap to 100% when close enough
            setProgress(100);
        }
    }, [resourcesLoaded, progress]);

    // Check if all resources are loaded
    useEffect(() => {
        const allLoaded = Object.values(resourcesLoaded).every(Boolean);
        if (allLoaded && progress >= 100) {
            // Give a small delay to show 100% before hiding
            const hideTimer = setTimeout(() => {
                setIsLoading(false);
            }, 500);
            return () => clearTimeout(hideTimer);
        }
    }, [resourcesLoaded, progress]);

    useEffect(() => {
        const lenis = new Lenis();
        lenisRef.current = lenis;

        lenis.on('scroll', ScrollTrigger.update);

        gsap.ticker.add((time) => {
            lenis.raf(time * 1000);
        });

        gsap.ticker.lagSmoothing(0);

        return () => {
            lenis.destroy();
            lenisRef.current = null;
            gsap.ticker.remove((time) => lenis.raf(time * 1000));
        };
    }, []);

    useEffect(() => {
        if (lenisRef.current) {
            lenisRef.current.scrollTo(0, { immediate: true });
        } else {
            window.scrollTo(0, 0);
        }
    }, [pathname]);

    return (
        <div data-theme="dark" className={`app-container${isRTL ? ' app-container--rtl' : ''}`}>
            <LoadingScreen progress={progress} isLoading={isLoading} />
            <Navbar />
            <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/about" element={<AboutUs />} />
                <Route path="/about/who-we-are" element={<WhoWeAre />} />
                <Route path="/about/our-story" element={<OurStory />} />
                <Route path="/about/our-partners" element={<OurPartners />} />
                <Route path="/services" element={<ServicesPage />} />
                <Route path="/projects" element={<ProjectsPage />} />
                <Route path="/contact" element={<ContactUs />} />
            </Routes>
            <Footer />
        </div>
    );
};

function App() {
    return (
        <Router>
            <AppContent />
        </Router>
    );
}

export default App;
