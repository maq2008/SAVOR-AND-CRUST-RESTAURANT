import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import ScrollReveal from '../components/ScrollReveal';
import './SpecialsPage.css';

const specials = [
  {
    title: 'Weekend Brunch',
    subtitle: 'SAT & SUN | 10AM - 2PM',
    desc: 'Unlimited buffet with live cooking stations, fresh juices, and our signature dessert bar. Includes bottomless mimosas and bloody marys.',
    price: '$34.99 per person',
    img: 'https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=800&q=80',
    features: ['Live cooking stations', 'Unlimited beverages', 'Dessert bar'],
  },
  {
    title: "Chef's Tasting Menu",
    subtitle: '7-COURSE EXPERIENCE',
    desc: 'A curated journey through our chef\'s finest creations, perfectly paired with premium wines from our cellar.',
    price: '$89.99 per person',
    img: 'https://images.unsplash.com/photo-1544025162-d76694265947?w=800&q=80',
    features: ['Wine pairing available', 'Private dining option', 'Customizable dietary needs'],
  },
  {
    title: 'Private Dining',
    subtitle: 'CELEBRATIONS & EVENTS',
    desc: 'Exclusive private rooms with customized menus, dedicated staff, and a tailored experience for your special occasions.',
    price: 'Pricing varies',
    img: 'https://images.unsplash.com/photo-1559339352-11d035aa65de?w=800&q=80',
    features: ['Customizable menu', 'Dedicated staff', 'AV equipment available'],
  },
];

const events = [
  { day: 'Every Friday', name: 'Jazz Night', desc: 'Live jazz performance with dinner' },
  { day: 'First Saturday', name: 'Wine Wednesday', desc: '50% off on select wines' },
  { day: 'Every Sunday', name: 'Family Day', desc: 'Kids eat free (under 12)' },
];

export default function SpecialsPage() {
  return (
    <div className="page specials-page">
      <section className="specials-hero">
        <motion.div
          className="specials-hero-bg"
          initial={{ scale: 1.1 }}
          animate={{ scale: 1 }}
          transition={{ duration: 1.2 }}
        />
        <div className="specials-hero-overlay" />
        <motion.div
          className="specials-hero-content"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.8 }}
        >
          <span className="section-tag">Specials & Events</span>
          <h1>Exceptional <span className="accent">Experiences</span></h1>
          <p>Curated moments designed for you</p>
        </motion.div>
      </section>

      <section className="specials-main">
        <div className="specials-container">
          <ScrollReveal>
            <h2 className="section-heading">Our <span className="accent">Specials</span></h2>
          </ScrollReveal>

          <div className="specials-grid">
            {specials.map((special, i) => (
              <ScrollReveal key={special.title} variant="fadeUp" delay={i * 0.15}>
                <motion.div
                  className="special-card"
                  whileHover={{ y: -10 }}
                  transition={{ duration: 0.3 }}
                >
                  <div className="special-card-img" style={{ backgroundImage: `url(${special.img})` }}>
                    <div className="special-card-overlay" />
                    <span className="special-card-price">{special.price}</span>
                  </div>
                  <div className="special-card-content">
                    <span className="special-card-subtitle">{special.subtitle}</span>
                    <h3>{special.title}</h3>
                    <p>{special.desc}</p>
                    <ul className="special-features">
                      {special.features.map((f) => (
                        <li key={f}>✓ {f}</li>
                      ))}
                    </ul>
                    <Link to="/book" className="special-card-btn">Reserve Now</Link>
                  </div>
                </motion.div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      <section className="specials-events">
        <div className="specials-container">
          <ScrollReveal>
            <h2 className="section-heading">Weekly <span className="accent">Events</span></h2>
          </ScrollReveal>

          <div className="events-grid">
            {events.map((event, i) => (
              <ScrollReveal key={event.name} variant="slideLeft" delay={i * 0.12}>
                <motion.div
                  className="event-card"
                  whileHover={{ x: 10 }}
                  transition={{ duration: 0.3 }}
                >
                  <span className="event-day">{event.day}</span>
                  <h4>{event.name}</h4>
                  <p>{event.desc}</p>
                </motion.div>
              </ScrollReveal>
            ))}
          </div>

          <ScrollReveal variant="scaleIn" delay={0.2}>
            <div className="specials-cta">
              <h3>Want a Truly Custom Experience?</h3>
              <p>Contact our events team for private bookings, corporate events, and custom celebrations.</p>
              <Link to="/book" className="cta-btn">Book Your Event</Link>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </div>
  );
}