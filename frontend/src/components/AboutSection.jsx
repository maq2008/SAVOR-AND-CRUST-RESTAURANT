import { motion } from 'framer-motion';
import ScrollReveal from './ScrollReveal';
import './AboutSection.css';

const features = [
  {
    icon: '🍽️',
    title: 'Premium Ingredients',
    text: 'We source the finest ingredients from local farms and global markets to ensure every dish is exceptional.',
  },
  {
    icon: '👨‍🍳',
    title: 'Expert Chefs',
    text: 'Our award-winning chefs bring decades of culinary mastery from the world\'s finest kitchens.',
  },
  {
    icon: '✨',
    title: 'Ambiance',
    text: 'An intimate, elegant setting with warm lighting and curated music for an unforgettable dining experience.',
  },
];

export default function AboutSection() {
  return (
    <section className="about" id="about">
      <div className="about-container">
        <div className="about-grid">
          <ScrollReveal variant="slideLeft" duration={0.8}>
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

          <ScrollReveal variant="slideRight" duration={0.8} delay={0.2}>
            <div className="about-text">
              <span className="section-tag">Our Story</span>
              <h2 className="section-title">
                A Culinary Journey<br />
                <span className="section-title-accent">of Passion &amp; Taste</span>
              </h2>
              <p className="about-description">
                Founded in 2010, Savor &amp; Crust was born from a simple belief:
                great food brings people together. What started as a small kitchen
                in the heart of Lahore has grown into one of the city's most
                beloved dining destinations.
              </p>
              <p className="about-description">
                Every plate we serve carries our commitment to quality, creativity,
                and the rich culinary traditions of Pakistan blended with
                international flair.
              </p>

              <div className="about-features">
                {features.map((f, i) => (
                  <motion.div
                    key={f.title}
                    className="about-feature"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.3 + i * 0.15 }}
                  >
                    <span className="about-feature-icon">{f.icon}</span>
                    <h4>{f.title}</h4>
                    <p>{f.text}</p>
                  </motion.div>
                ))}
              </div>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}