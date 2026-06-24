import { motion } from 'framer-motion';
import ScrollReveal from '../components/ScrollReveal';
import './AboutPage.css';

const features = [
  {
    icon: '🍽️',
    title: 'Premium Ingredients',
    text: 'We source the finest ingredients from local farms and global markets.',
  },
  {
    icon: '👨‍🍳',
    title: 'Expert Chefs',
    text: 'Award-winning chefs with decades of culinary mastery.',
  },
  {
    icon: '✨',
    title: 'Fine Ambiance',
    text: 'An intimate setting with warm lighting and curated music.',
  },
];

const timeline = [
  { year: '2010', title: 'Humble Beginnings', desc: 'Started as a small kitchen in Lahore with a vision for exceptional food.' },
  { year: '2014', title: 'Growing Recognition', desc: 'Named Best Fine Dining Restaurant in Lahore by Food Critics Association.' },
  { year: '2018', title: 'Expansion', desc: 'Expanded to a larger space while keeping our intimate charm intact.' },
  { year: '2024', title: 'Culinary Excellence', desc: 'Awarded Best Restaurant in Pakistan for the third consecutive year.' },
];

export default function AboutPage() {
  return (
    <div className="page about-page">
      <section className="about-hero">
        <motion.div
          className="about-hero-bg"
          initial={{ scale: 1.1 }}
          animate={{ scale: 1 }}
          transition={{ duration: 1.2 }}
        />
        <div className="about-hero-overlay" />
        <motion.div
          className="about-hero-content"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.8 }}
        >
          <span className="section-tag">Our Story</span>
          <h1>About <span className="accent">Savor & Crust</span></h1>
          <p>Where passion meets palate since 2010</p>
        </motion.div>
      </section>

      <section className="about-story">
        <div className="about-container">
          <div className="about-grid">
            <ScrollReveal variant="slideLeft">
              <div className="about-images">
                <motion.div
                  className="about-img about-img-main"
                  whileHover={{ scale: 1.03 }}
                  transition={{ duration: 0.4 }}
                />
                <motion.div
                  className="about-img about-img-secondary"
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.4 }}
                />
              </div>
            </ScrollReveal>

            <ScrollReveal variant="slideRight">
              <div className="about-text">
                <h2>A Journey of <span className="accent">Passion & Taste</span></h2>
                <p>
                  Founded in 2010 by Chef Amir Khan, Savor & Crust was born from a
                  simple belief: great food brings people together. What started as a
                  small kitchen in the heart of Lahore has grown into one of the city's
                  most beloved dining destinations.
                </p>
                <p>
                  Every plate we serve carries our commitment to quality, creativity,
                  and the rich culinary traditions of Pakistan blended with international
                  techniques. We believe in the story behind every dish — the farmers,
                  the artisans, and the centuries of culinary heritage.
                </p>
                <blockquote>
                  "Food is not just about taste. It's about memory, emotion, and the
                  joy of coming together."
                  <cite>— Chef Amir Khan</cite>
                </blockquote>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      <section className="about-timeline">
        <div className="about-container">
          <ScrollReveal>
            <h2 className="section-heading">Our <span className="accent">Journey</span></h2>
          </ScrollReveal>

          <div className="timeline">
            {timeline.map((item, i) => (
              <ScrollReveal key={item.year} variant="fadeUp" delay={i * 0.15}>
                <motion.div
                  className="timeline-item"
                  whileHover={{ x: 10 }}
                  transition={{ duration: 0.3 }}
                >
                  <span className="timeline-year">{item.year}</span>
                  <div className="timeline-content">
                    <h3>{item.title}</h3>
                    <p>{item.desc}</p>
                  </div>
                </motion.div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      <section className="about-values">
        <div className="about-container">
          <ScrollReveal>
            <h2 className="section-heading">What We <span className="accent">Stand For</span></h2>
          </ScrollReveal>

          <div className="values-grid">
            {features.map((f, i) => (
              <ScrollReveal key={f.title} variant="fadeUp" delay={i * 0.12}>
                <motion.div
                  className="value-card"
                  whileHover={{ y: -8 }}
                  transition={{ duration: 0.3 }}
                >
                  <span className="value-icon">{f.icon}</span>
                  <h3>{f.title}</h3>
                  <p>{f.text}</p>
                </motion.div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}