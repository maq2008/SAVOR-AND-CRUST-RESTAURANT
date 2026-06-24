import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import ScrollReveal from '../components/ScrollReveal';
import './ReservationsPage.css';

const info = [
  {
    icon: '📍',
    title: 'Location',
    lines: ['MM Alam Road, Lahore', 'Pakistan'],
  },
  {
    icon: '🕐',
    title: 'Hours',
    lines: ['Mon-Thu: 12PM - 10PM', 'Fri-Sat: 12PM - 11PM', 'Sunday: 12PM - 9PM'],
  },
  {
    icon: '📞',
    title: 'Phone',
    lines: ['+92 42 1234 5678', '+92 300 1234567'],
  },
  {
    icon: '📧',
    title: 'Email',
    lines: ['reserve@savorandcrust.com', 'info@savorandcrust.com'],
  },
];

const faqs = [
  {
    q: 'Do I need a reservation?',
    a: 'While walk-ins are welcome, we highly recommend booking a table, especially on weekends. Reservations ensure you get your preferred time and seating.',
  },
  {
    q: 'What is your cancellation policy?',
    a: 'We request at least 4 hours notice for cancellations. Late cancellations or no-shows may be subject to a small fee.',
  },
  {
    q: 'Can I accommodate dietary restrictions?',
    a: 'Absolutely! Our kitchen can accommodate vegetarian, vegan, gluten-free, and most allergy-related requirements. Please inform us when booking.',
  },
  {
    q: 'Is there a dress code?',
    a: 'We maintain a smart-casual dress code. Gentlemen, collared shirts are appreciated but not mandatory.',
  },
];

export default function ReservationsPage() {
  return (
    <div className="page reservations-page">
      <section className="res-hero">
        <motion.div
          className="res-hero-bg"
          initial={{ scale: 1.1 }}
          animate={{ scale: 1 }}
          transition={{ duration: 1.2 }}
        />
        <div className="res-hero-overlay" />
        <motion.div
          className="res-hero-content"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.8 }}
        >
          <span className="section-tag">Visit Us</span>
          <h1>Make a <span className="accent">Reservation</span></h1>
          <p>We're ready to welcome you</p>
        </motion.div>
      </section>

      <section className="res-info">
        <div className="res-container">
          <ScrollReveal>
            <h2 className="section-heading">Contact <span className="accent">Information</span></h2>
          </ScrollReveal>

          <div className="info-grid">
            {info.map((item, i) => (
              <ScrollReveal key={item.title} variant="fadeUp" delay={i * 0.1}>
                <motion.div
                  className="info-card"
                  whileHover={{ y: -5 }}
                  transition={{ duration: 0.3 }}
                >
                  <span className="info-icon">{item.icon}</span>
                  <h3>{item.title}</h3>
                  {item.lines.map((line) => (
                    <p key={line}>{line}</p>
                  ))}
                </motion.div>
              </ScrollReveal>
            ))}
          </div>

          <ScrollReveal variant="scaleIn" delay={0.2}>
            <div className="res-book-cta">
              <h3>Ready to dine with us?</h3>
              <p>Book your table in just a few clicks</p>
              <Link to="/book" className="cta-btn">Book a Table</Link>
            </div>
          </ScrollReveal>
        </div>
      </section>

      <section className="res-faqs">
        <div className="res-container">
          <ScrollReveal>
            <h2 className="section-heading">Frequently <span className="accent">Asked</span></h2>
          </ScrollReveal>

          <div className="faqs-grid">
            {faqs.map((faq, i) => (
              <ScrollReveal key={faq.q} variant="fadeUp" delay={i * 0.1}>
                <motion.div
                  className="faq-card"
                  whileHover={{ borderColor: 'rgba(201,169,110,0.3)' }}
                  transition={{ duration: 0.3 }}
                >
                  <h4>{faq.q}</h4>
                  <p>{faq.a}</p>
                </motion.div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      <section className="res-map">
        <div className="map-placeholder">
          <span className="map-icon">📍</span>
          <p>MM Alam Road, Lahore, Pakistan</p>
          <a
            href="https://maps.google.com"
            target="_blank"
            rel="noopener noreferrer"
            className="map-link"
          >
            Open in Google Maps →
          </a>
        </div>
      </section>
    </div>
  );
}