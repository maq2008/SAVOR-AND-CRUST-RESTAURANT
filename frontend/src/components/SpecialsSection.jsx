import { motion } from 'framer-motion';
import ScrollReveal from './ScrollReveal';
import './SpecialsSection.css';

const specials = [
  {
    title: 'Weekend Brunch',
    subtitle: 'SAT & SUN | 10AM - 2PM',
    desc: 'Unlimited buffet with live cooking stations, fresh juices, and our signature dessert bar.',
    price: '$34.99',
    img: 'https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=600&q=80',
  },
  {
    title: 'Chef\'s Tasting Menu',
    subtitle: '7-COURSE EXPERIENCE',
    desc: 'A curated journey through our chef\'s finest creations paired with premium wines.',
    price: '$89.99',
    img: 'https://images.unsplash.com/photo-1544025162-d76694265947?w=600&q=80',
  },
  {
    title: 'Private Dining',
    subtitle: 'CELEBRATIONS & EVENTS',
    desc: 'Exclusive private rooms with customized menus for your special occasions.',
    price: 'Custom',
    img: 'https://images.unsplash.com/photo-1559339352-11d035aa65de?w=600&q=80',
  },
];

export default function SpecialsSection() {
  return (
    <section className="specials" id="specials">
      <div className="specials-container">
        <ScrollReveal variant="fadeUp">
          <span className="section-tag">Specials</span>
          <h2 className="section-title">
            Exceptional Experiences<br />
            <span className="section-title-accent">Curated for You</span>
          </h2>
        </ScrollReveal>

        <div className="specials-grid">
          {specials.map((special, i) => (
            <ScrollReveal key={special.title} variant="fadeUp" delay={i * 0.15}>
              <motion.div
                className="special-card"
                whileHover={{ y: -10 }}
                transition={{ duration: 0.3 }}
              >
                <div
                  className="special-card-img"
                  style={{ backgroundImage: `url(${special.img})` }}
                >
                  <div className="special-card-overlay" />
                  <span className="special-card-price">{special.price}</span>
                </div>
                <div className="special-card-content">
                  <span className="special-card-subtitle">{special.subtitle}</span>
                  <h3>{special.title}</h3>
                  <p>{special.desc}</p>
                  <motion.a
                    href="#reservation"
                    className="special-card-link"
                    whileHover={{ x: 5 }}
                  >
                    Book Now &rarr;
                  </motion.a>
                </div>
              </motion.div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}