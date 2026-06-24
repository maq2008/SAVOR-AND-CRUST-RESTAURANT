import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';
import { Link } from 'react-router-dom';
import ScrollReveal from '../components/ScrollReveal';
import './HomePage.css';

export default function HomePage() {
  const heroRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ['start start', 'end start'],
  });

  const bgY = useTransform(scrollYProgress, [0, 1], ['0%', '25%']);
  const heroOpacity = useTransform(scrollYProgress, [0, 0.6], [1, 0]);
  const heroY = useTransform(scrollYProgress, [0, 1], ['0%', '40%']);

  return (
    <div className="page home-page">
      <section className="hero" ref={heroRef}>
        <motion.div className="hero-bg" style={{ y: bgY }} />
        <div className="hero-overlay" />

        <motion.div className="hero-content" style={{ y: heroY, opacity: heroOpacity }}>
          <motion.div
            className="hero-badge"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.8 }}
          >
            <span className="hero-badge-line" />
            EST. 2010 — LAHORE
            <span className="hero-badge-line" />
          </motion.div>

          <motion.h1
            className="hero-title"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.8 }}
          >
            Where Every<br />
            <span className="hero-title-accent">Flavor Tells</span><br />
            a Story
          </motion.h1>

          <motion.p
            className="hero-subtitle"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.9, duration: 0.8 }}
          >
            Experience fine dining at its best. Handcrafted dishes made with passion,
            premium ingredients, and a touch of artistry.
          </motion.p>

          <motion.div
            className="hero-buttons"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.2, duration: 0.8 }}
          >
            <Link to="/menu" className="hero-btn primary">Explore Menu</Link>
            <Link to="/book" className="hero-btn secondary">Reserve a Table</Link>
          </motion.div>
        </motion.div>

        <motion.div
          className="hero-scroll-indicator"
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 2 }}
        >
          <span>SCROLL</span>
          <span className="hero-scroll-line" />
        </motion.div>
      </section>

      <section className="home-preview">
        <div className="preview-container">
          <ScrollReveal>
            <span className="section-tag">Discover</span>
            <h2 className="section-title">
              A Culinary Journey<br />
              <span className="section-title-accent">Worth Taking</span>
            </h2>
          </ScrollReveal>

          <div className="preview-grid">
            <ScrollReveal variant="slideLeft" delay={0.1}>
              <div className="preview-card">
                <div className="preview-card-img preview-about" />
                <h3>Our Story</h3>
                <p>From a small kitchen to Lahore's most loved dining destination.</p>
                <Link to="/about" className="preview-link">Learn More →</Link>
              </div>
            </ScrollReveal>

            <ScrollReveal variant="fadeUp" delay={0.2}>
              <div className="preview-card">
                <div className="preview-card-img preview-menu" />
                <h3>Our Menu</h3>
                <p>Handcrafted dishes with the finest ingredients and bold flavors.</p>
                <Link to="/menu" className="preview-link">View Menu →</Link>
              </div>
            </ScrollReveal>

            <ScrollReveal variant="slideRight" delay={0.3}>
              <div className="preview-card">
                <div className="preview-card-img preview-specials" />
                <h3>Specials & Events</h3>
                <p>Weekend brunch, chef's tasting menu, and private dining experiences.</p>
                <Link to="/specials" className="preview-link">Explore →</Link>
              </div>
            </ScrollReveal>
          </div>

          <ScrollReveal variant="scaleIn" delay={0.2}>
            <div className="home-cta">
              <h3>Ready to Experience Something Extraordinary?</h3>
              <Link to="/book" className="cta-btn">Book Your Table Now</Link>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </div>
  );
}