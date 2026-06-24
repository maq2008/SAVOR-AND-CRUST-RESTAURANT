import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import ScrollReveal from '../components/ScrollReveal';
import { menuItems } from '../data/menuData';
import './MenuPage.css';

const categories = [
  { key: 'all', label: 'All' },
  { key: 'appetizers', label: 'Appetizers' },
  { key: 'main_course', label: 'Main Course' },
  { key: 'desserts', label: 'Desserts' },
  { key: 'beverages', label: 'Beverages' },
];

export default function MenuPage() {
  const [activeTab, setActiveTab] = useState('all');

  const filtered = activeTab === 'all' ? menuItems : menuItems.filter((i) => i.category === activeTab);

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      transition: { delay: i * 0.06, duration: 0.5, ease: 'easeOut' },
    }),
    exit: { opacity: 0, scale: 0.95 },
  };

  return (
    <div className="page menu-page">
      <section className="menu-hero">
        <motion.div
          className="menu-hero-bg"
          initial={{ scale: 1.1 }}
          animate={{ scale: 1 }}
          transition={{ duration: 1.2 }}
        />
        <div className="menu-hero-overlay" />
        <motion.div
          className="menu-hero-content"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.8 }}
        >
          <span className="section-tag">Our Menu</span>
          <h1>Handcrafted with <span className="accent">Passion</span></h1>
          <p>Every dish tells a story of quality and care</p>
        </motion.div>
      </section>

      <section className="menu-content">
        <div className="menu-container">
          <ScrollReveal variant="fadeUp">
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
                    <span className="menu-item-category">{item.category.replace('_', ' ')}</span>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>

          {filtered.length === 0 && (
            <div className="menu-empty">
              <p>No items found in this category.</p>
            </div>
          )}
        </div>
      </section>
    </div>
  );
}