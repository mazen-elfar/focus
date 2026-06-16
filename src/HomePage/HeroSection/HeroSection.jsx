import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import "./HeroSection.css";
import { useI18n } from "../../i18n/I18nProvider";

const IMAGES = [
  "/heroimg1.png",
  "/heroimg3.png",
];

/* ── tiny stat counter (reused from old design) ── */
const StatItem = ({ value, suffix, label, counted, decimal }) => {
  const [display, setDisplay] = useState(0);
  const raf = useRef(null);
  useEffect(() => {
    if (!counted) return;
    const dur = 1800,
      start = performance.now();
    const tick = (now) => {
      const p = Math.min((now - start) / dur, 1);
      const e = 1 - Math.pow(1 - p, 3);
      setDisplay(
        decimal ? Math.round(e * value * 10) / 10 : Math.floor(e * value),
      );
      if (p < 1) raf.current = requestAnimationFrame(tick);
    };
    raf.current = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf.current);
  }, [counted, value, decimal]);
  return (
    <div className="hero-stat">
      <span className="hero-stat__value">
        {decimal ? display.toFixed(1) : display}
        {suffix}
      </span>
      <span className="hero-stat__label">{label}</span>
    </div>
  );
};

/* ═══════════════════════════════════════════
   HERO SECTION — GSAP card-based slider
   ═══════════════════════════════════════════ */
const HeroSection = () => {
  const { t, get } = useI18n();
  const rawSlides = get("home.hero.slides", []);
  const slides = rawSlides.map((s, i) => ({ ...s, image: IMAGES[i] }));
  const handleNextRef = useRef(null);

  /* stats */
  const [counted, setCounted] = useState(false);
  const statsRef = useRef(null);

  useEffect(() => {
    const el = statsRef.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([e]) => {
        if (e.isIntersecting && !counted) setCounted(true);
      },
      { threshold: 0.3 },
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, [counted]);

  /* ── main GSAP slider logic (runs once) ── */
  useEffect(() => {
    if (slides.length === 0) return undefined;

    const order = [...Array(slides.length).keys()];
    let detailsEven = true;
    let running = true;
    let busy = false;

    const isMobile = window.innerWidth < 768;
    const isShort = window.innerHeight < 720;
    const cardWidth = isMobile ? (isShort ? 180 : 220) : 300;
    const cardHeight = isMobile ? (isShort ? 120 : 150) : 200;
    const gap = isMobile ? (isShort ? 15 : 20) : 40;
    const numberSize = isMobile ? 30 : 50;
    const ease = "sine.inOut";
    let offsetTop = 0;
    let offsetLeft = 0;
    const progressWidth = isMobile ? 180 : (window.innerWidth < 1100 ? 300 : 500);

    const gc = (i) => `#hero-card-${i}`;
    const gcc = (i) => `#hero-card-content-${i}`;
    const gsi = (i) => `#hero-slide-item-${i}`;

    const anim = (target, dur, props) =>
      new Promise((res) => gsap.to(target, { ...props, duration: dur, onComplete: res }));

    /* ── INIT ── */
    function init() {
      const [active, ...rest] = order;
      const dA = detailsEven ? "#hero-details-even" : "#hero-details-odd";
      const dI = detailsEven ? "#hero-details-odd" : "#hero-details-even";
      const { innerHeight: h, innerWidth: w } = window;

      if (w >= 1450) {
        offsetTop = h - 330;
        offsetLeft = w - 830;
      } else if (w >= 768) {
        offsetTop = h * 0.58;
        offsetLeft = 80;
      } else {
        offsetTop = isShort ? h - 320 : h - 380;
        offsetLeft = 40;
      }

      gsap.set("#hero-pagination", { top: offsetTop + (isMobile ? (isShort ? 140 : 180) : 230), left: offsetLeft, y: 200, opacity: 0, zIndex: 60 });
      gsap.set(gc(active), { x: 0, y: 0, width: w, height: h });
      gsap.set(gcc(active), { x: 0, y: 0, opacity: 0 });
      gsap.set(dA, { opacity: 0, zIndex: 22, x: -200 });
      gsap.set(dI, { opacity: 0, zIndex: 12 });
      gsap.set(`${dI} .hero-text`, { y: 100 });
      gsap.set(`${dI} .hero-title-1`, { y: 100 });
      gsap.set(`${dI} .hero-title-2`, { y: 100 });
      gsap.set(`${dI} .hero-desc`, { y: 50 });
      gsap.set(`${dI} .hero-cta`, { y: 60 });
      gsap.set(".hero-progress-sub-foreground", { width: progressWidth * (1 / order.length) * (active + 1) });

      rest.forEach((i, idx) => {
        gsap.set(gc(i), { x: offsetLeft + 400 + idx * (cardWidth + gap), y: offsetTop, width: cardWidth, height: cardHeight, zIndex: 30, borderRadius: 10 });
        gsap.set(gcc(i), { x: offsetLeft + 400 + idx * (cardWidth + gap), zIndex: 40, y: offsetTop + cardHeight - 100 });
        gsap.set(gsi(i), { x: (idx + 1) * numberSize });
      });

      gsap.set(".hero-indicator", { x: -w });

      const d = 0.6;
      gsap.to(".hero-cover", { x: w + 400, delay: 0.5, ease, onComplete: () => setTimeout(() => { if (running) loop(); }, 500) });
      rest.forEach((i, idx) => {
        gsap.to(gc(i), { x: offsetLeft + idx * (cardWidth + gap), zIndex: 30, ease, delay: d });
        gsap.to(gcc(i), { x: offsetLeft + idx * (cardWidth + gap), zIndex: 40, ease, delay: d });
      });
      gsap.to("#hero-pagination", { y: 0, opacity: 1, ease, delay: d });
      gsap.to(dA, { opacity: 1, x: 0, ease, delay: d });
    }

    /* ── STEP (direction: 1 = forward, -1 = backward) ── */
    function step(direction = 1) {
      return new Promise((resolve) => {
        if (direction === 1) {
          order.push(order.shift());
        } else {
          order.unshift(order.pop());
        }
        detailsEven = !detailsEven;

        const dA = detailsEven ? "#hero-details-even" : "#hero-details-odd";
        const dI = detailsEven ? "#hero-details-odd" : "#hero-details-even";

        const el = document.querySelector(dA);
        if (el) {
          el.querySelector(".hero-place-box .hero-text").textContent = slides[order[0]].place;
          el.querySelector(".hero-title-1").textContent = slides[order[0]].title;
          el.querySelector(".hero-title-2").textContent = slides[order[0]].title2;
          el.querySelector(".hero-desc").textContent = slides[order[0]].description;
        }

        gsap.set(dA, { zIndex: 22 });
        gsap.to(dA, { opacity: 1, delay: 0.4, ease });
        gsap.to(`${dA} .hero-text`, { y: 0, delay: 0.1, duration: 0.7, ease });
        gsap.to(`${dA} .hero-title-1`, { y: 0, delay: 0.15, duration: 0.7, ease });
        gsap.to(`${dA} .hero-title-2`, { y: 0, delay: 0.15, duration: 0.7, ease });
        gsap.to(`${dA} .hero-desc`, { y: 0, delay: 0.3, duration: 0.4, ease });
        gsap.to(`${dA} .hero-cta`, { y: 0, delay: 0.35, duration: 0.4, onComplete: resolve, ease });
        gsap.set(dI, { zIndex: 12 });

        const [active, ...rest] = order;
        const prv = rest[rest.length - 1];

        gsap.set(gc(prv), { zIndex: 10 });
        gsap.set(gc(active), { zIndex: 20 });
        gsap.to(gc(prv), { scale: 1.5, ease });

        gsap.to(gcc(active), { y: offsetTop + cardHeight - 10, opacity: 0, duration: 0.3, ease });
        gsap.to(gsi(active), { x: 0, ease });
        gsap.to(gsi(prv), { x: -numberSize, ease });
        gsap.to(".hero-progress-sub-foreground", { width: progressWidth * (1 / order.length) * (active + 1), ease });

        gsap.to(gc(active), {
          x: 0, y: 0, ease,
          width: window.innerWidth, height: window.innerHeight, borderRadius: 0,
          onComplete: () => {
            const xNew = offsetLeft + (rest.length - 1) * (cardWidth + gap);
            gsap.set(gc(prv), { x: xNew, y: offsetTop, width: cardWidth, height: cardHeight, zIndex: 30, borderRadius: 10, scale: 1 });
            gsap.set(gcc(prv), { x: xNew, y: offsetTop + cardHeight - 100, opacity: 1, zIndex: 40 });
            gsap.set(gsi(prv), { x: rest.length * numberSize });
            gsap.set(dI, { opacity: 0 });
            gsap.set(`${dI} .hero-text`, { y: 100 });
            gsap.set(`${dI} .hero-title-1`, { y: 100 });
            gsap.set(`${dI} .hero-title-2`, { y: 100 });
            gsap.set(`${dI} .hero-desc`, { y: 50 });
            gsap.set(`${dI} .hero-cta`, { y: 60 });
          },
        });

        rest.forEach((i, idx) => {
          if (i !== prv) {
            const xNew = offsetLeft + idx * (cardWidth + gap);
            gsap.set(gc(i), { zIndex: 30 });
            gsap.to(gc(i), { x: xNew, y: offsetTop, width: cardWidth, height: cardHeight, ease, delay: 0.1 * (idx + 1) });
            gsap.to(gcc(i), { x: xNew, y: offsetTop + cardHeight - 100, opacity: 1, zIndex: 40, ease, delay: 0.1 * (idx + 1) });
            gsap.to(gsi(i), { x: (idx + 1) * numberSize, ease });
          }
        });
      });
    }

    /* ── LOOP ── */
    async function loop() {
      if (!running) return;
      await anim(".hero-indicator", 2, { x: 0 });
      if (!running) return;
      await anim(".hero-indicator", 0.8, { x: window.innerWidth, delay: 0.3 });
      if (!running) return;
      gsap.set(".hero-indicator", { x: -window.innerWidth });
      busy = true;
      await step(1);
      busy = false;
      if (running) loop();
    }

    /* ── click handlers exposed via ref ── */
    handleNextRef.current = {
      next: () => {
        if (busy) return;
        gsap.killTweensOf(".hero-indicator");
        gsap.set(".hero-indicator", { x: -window.innerWidth });
        busy = true;
        step(1).then(() => {
          busy = false;
          if (running) loop();
        });
      },
      prev: () => {
        if (busy) return;
        gsap.killTweensOf(".hero-indicator");
        gsap.set(".hero-indicator", { x: -window.innerWidth });
        busy = true;
        step(-1).then(() => {
          busy = false;
          if (running) loop();
        });
      },
    };

    /* ── preload & start ── */
    (async () => {
      try {
        await Promise.all(
          slides.map(
            ({ image }) =>
              new Promise((res, rej) => {
                const img = new Image();
                img.onload = () => res(img);
                img.onerror = rej;
                img.src = image;
              }),
          ),
        );
      } catch (e) {
        console.error("Image preload failed", e);
      }
      init();
    })();

    return () => {
      running = false;
      handleNextRef.current = null;
      gsap.killTweensOf([
        ".hero-card", ".hero-card-content", ".hero-indicator",
        ".hero-cover", "#hero-pagination", ".hero-details",
        ".hero-text", ".hero-title-1", ".hero-title-2",
        ".hero-desc", ".hero-cta", ".hero-progress-sub-foreground",
        ".hero-slide-item",
      ]);
    };
  }, [t, slides]);

  /* ═══════════ JSX ═══════════ */
  return (
    <section className="hero-v2">
      {/* Indicator bar (top) */}
      <div className="hero-indicator" />

      {/* Card slides */}
      <div id="hero-demo">
        {slides.map((s, i) => (
          <div
            className="hero-card"
            id={`hero-card-${i}`}
            key={`c${i}`}
            style={{ backgroundImage: `url(${s.image})` }}
          />
        ))}
        {slides.map((s, i) => (
          <div className="hero-card-content" id={`hero-card-content-${i}`} key={`cc${i}`}>
            <div className="hero-content-start" />
            <div className="hero-content-place">{s.place}</div>
            <div className="hero-content-title-1">{s.title}</div>
            <div className="hero-content-title-2">{s.title2}</div>
          </div>
        ))}
      </div>

      {/* Details – EVEN */}
      <div className="hero-details" id="hero-details-even">
        <div className="hero-place-box">
          <div className="hero-text">{slides[0].place}</div>
        </div>
        <div className="hero-title-box-1"><div className="hero-title-1">{slides[0].title}</div></div>
        <div className="hero-title-box-2"><div className="hero-title-2">{slides[0].title2}</div></div>
        <div className="hero-desc">{slides[0].description}</div>
        <div className="hero-cta">
          <a href="/projects" className="hero-discover-btn">{t("home.hero.ctaDiscover")}</a>
          <a href="/contact" className="hero-contact-btn">{t("home.hero.ctaStart")}</a>
        </div>
      </div>

      {/* Details – ODD */}
      <div className="hero-details" id="hero-details-odd">
        <div className="hero-place-box">
          <div className="hero-text">{slides[0].place}</div>
        </div>
        <div className="hero-title-box-1"><div className="hero-title-1">{slides[0].title}</div></div>
        <div className="hero-title-box-2"><div className="hero-title-2">{slides[0].title2}</div></div>
        <div className="hero-desc">{slides[0].description}</div>
        <div className="hero-cta">
          <a href="/projects" className="hero-discover-btn">{t("home.hero.ctaDiscover")}</a>
          <a href="/contact" className="hero-contact-btn">{t("home.hero.ctaStart")}</a>
        </div>
      </div>

      {/* Pagination */}
      <div className="hero-pagination" id="hero-pagination" dir="ltr">
        <div className="hero-arrow hero-arrow-left" onClick={() => handleNextRef.current?.prev()}>
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
          </svg>
        </div>
        <div className="hero-arrow hero-arrow-right" onClick={() => handleNextRef.current?.next()}>
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
          </svg>
        </div>
        <div className="hero-progress-sub-container">
          <div className="hero-progress-sub-background">
            <div className="hero-progress-sub-foreground" />
          </div>
        </div>
        <div className="hero-slide-numbers" id="hero-slide-numbers">
          {slides.map((_, i) => (
            <div className="hero-slide-item" id={`hero-slide-item-${i}`} key={i}>
              {i + 1}
            </div>
          ))}
        </div>
      </div>

      {/* Initial cover reveal */}
      <div className="hero-cover" />

      {/* Stats bar */}
      <div className="hero-stats-bar" ref={statsRef}>
        <StatItem value={500} suffix="+" label="Projects Delivered" counted={counted} />
        <div className="hero-stats-divider" />
        <StatItem value={6} suffix="+" label="Years of Excellence" counted={counted} />
        <div className="hero-stats-divider" />
        <StatItem value={1.2} suffix=" GW" label="Power Delivered" counted={counted} decimal />
      </div>
    </section>
  );
};

export default HeroSection;
