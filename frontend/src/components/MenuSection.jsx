import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import ScrollReveal from './ScrollReveal';
import './MenuSection.css';

const API_BASE = '/api';

const categories = [
  { key: 'all', label: 'All' },
  { key: 'appetizers', label: 'Appetizers' },
  { key: 'main_course', label: 'Main Course' },
  { key: 'desserts', label: 'Desserts' },
  { key: 'beverages', label: 'Beverages' },
];

const foodEmojis = {
  appetizers: '🥗',
  main_course: '🥩',
  desserts: '🍰',
  beverages: '🥤',
  default: '🍽️',
};

export default function MenuSection() {
  const [items, setItems] = useState([]);
  const [activeTab, setActiveTab] = useState('all');
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch(`${API_BASE}/menu-items/`)
      .then((r) => r.json())
      .then((data) => {
        const mapped = (Array.isArray(data) ? data : data.results || []).map(
          (item, i) => ({
            ...item,
            emoji: foodEmojis[item.category] || foodEmojis.default,
            index: i,
          })
        );
        setItems(mapped);
        setLoading(false);
      })
      .catch(() => setLoading(false));
  }, []);

  const filtered =
    activeTab === 'all'
      ? items
      : items.filter((i) => i.category === activeTab);

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      transition: { delay: i * 0.08, duration: 0.5, ease: 'easeOut' },
    }),
    exit: { opacity: 0 },
  };

  return (
    <section className="menu" id="menu">
      <div className="menu-container">
        <ScrollReveal variant="fadeUp">
          <span className="section-tag">Our Menu</span>
          <h2 className="section-title">
            Handcrafted with Love<br />
            <span className="section-title-accent">&amp; Premium Ingredients</span>
          </h2>
        </ScrollReveal>

        <ScrollReveal variant="fadeUp" delay={0.2}>
          <div className="menu-tabs">
            {categories.map((cat) => (
              <motion.button
                key={cat.key}
                className={`menu-tab${activeTab === cat.key ? ' active' : ''}`}
                onClick={() => setActiveTab(cat.key)}
                whileHover={{ y: -2 }}
                whileTap={{ scale: 0.95 }}
              >
                {cat.label}
              </motion.button>
            ))}
          </div>
        </ScrollReveal>

        {loading ? (
          <div className="menu-loading">
            <motion.div
              className="spinner"
              animate={{ rotate: 360 }}
              transition={{ repeat: Infinity, duration: 1, ease: 'linear' }}
            />
          </div>
        ) : (
          <motion.div className="menu-grid" layout>
            <AnimatePresence mode="wait">
              {filtered.map((item, i) => (
                <motion.div
                  key={item.id}
                  className="menu-item"
                  custom={i}
                  variants={itemVariants}
                  initial="hidden"
                  animate="visible"
                  exit="exit"
                  layout
                  whileHover={{ y: -8, transition: { duration: 0.3 } }}
                >
                  <div className="menu-item-img">
                    <span className="menu-item-emoji">{item.emoji}</span>
                    {item.is_special && (
                      <span className="menu-item-badge">Chef's Pick</span>
                    )}
                  </div>
                  <div className="menu-item-content">
                    <div className="menu-item-header">
                      <h3>{item.name}</h3>
                      <span className="menu-item-price">
                        ${parseFloat(item.price).toFixed(2)}
                      </span>
                    </div>
                    <p className="menu-item-desc">{item.description}</p>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>
        )}
      </div>
    </section>
  );
}