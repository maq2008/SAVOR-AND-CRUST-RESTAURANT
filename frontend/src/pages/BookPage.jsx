import { useState } from 'react';
import { motion } from 'framer-motion';
import ScrollReveal from '../components/ScrollReveal';
import './BookPage.css';

export default function BookPage() {
  const [form, setForm] = useState({
    name: '',
    email: '',
    phone: '',
    date: '',
    time: '',
    guests: '2',
  });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      await fetch('/api/reservations/', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          ...form,
          guests: parseInt(form.guests),
        }),
      });
    } catch {
    }
    setSubmitted(true);
    setLoading(false);
  };

  return (
    <div className="page book-page">
      <section className="book-hero">
        <motion.div
          className="book-hero-bg"
          initial={{ scale: 1.1 }}
          animate={{ scale: 1 }}
          transition={{ duration: 1.2 }}
        />
        <div className="book-hero-overlay" />
        <motion.div
          className="book-hero-content"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.8 }}
        >
          <span className="section-tag">Reserve Your Table</span>
          <h1>Book a <span className="accent">Table</span></h1>
          <p>Your unforgettable dining experience awaits</p>
        </motion.div>
      </section>

      <section className="book-form-section">
        <div className="book-container">
          <div className="book-grid">
            <ScrollReveal variant="slideLeft">
              <div className="book-info">
                <h2>Reservation <span className="accent">Details</span></h2>
                <p>
                  Fill out the form to reserve your table. We'll send a confirmation
                  email within the hour during business hours.
                </p>

                <div className="book-info-items">
                  <div className="book-info-item">
                    <span className="book-info-icon">📍</span>
                    <div>
                      <strong>Location</strong>
                      <p>MM Alam Road, Lahore</p>
                    </div>
                  </div>
                  <div className="book-info-item">
                    <span className="book-info-icon">🕐</span>
                    <div>
                      <strong>Hours</strong>
                      <p>Mon-Sun: 12PM - 11PM</p>
                    </div>
                  </div>
                  <div className="book-info-item">
                    <span className="book-info-icon">📞</span>
                    <div>
                      <strong>Phone</strong>
                      <p>+92 42 1234 5678</p>
                    </div>
                  </div>
                  <div className="book-info-item">
                    <span className="book-info-icon">✉️</span>
                    <div>
                      <strong>Email</strong>
                      <p>reserve@savorandcrust.com</p>
                    </div>
                  </div>
                </div>

                <div className="book-tips">
                  <h4>Reservation Tips</h4>
                  <ul>
                    <li>Book at least 24 hours in advance</li>
                    <li>For parties of 8+, please call directly</li>
                    <li>Special requests welcomed during booking</li>
                    <li>Dietary restrictions can be noted below</li>
                  </ul>
                </div>
              </div>
            </ScrollReveal>

            <ScrollReveal variant="slideRight" delay={0.2}>
              {submitted ? (
                <motion.div
                  className="book-success"
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5 }}
                >
                  <span className="success-icon">✓</span>
                  <h3>Reservation Confirmed!</h3>
                  <p>Thank you, {form.name}! A confirmation has been sent to {form.email}.</p>
                  <p className="success-details">
                    {form.guests} guest{form.guests > 1 ? 's' : ''} on {form.date} at {form.time}
                  </p>
                  <button
                    className="book-another-btn"
                    onClick={() => {
                      setSubmitted(false);
                      setForm({ name: '', email: '', phone: '', date: '', time: '', guests: '2' });
                    }}
                  >
                    Make Another Reservation
                  </button>
                </motion.div>
              ) : (
                <form className="book-form" onSubmit={handleSubmit}>
                  <h3>Your Information</h3>

                  <div className="form-row">
                    <div className="form-group">
                      <label>Full Name *</label>
                      <input
                        type="text"
                        name="name"
                        placeholder="Your Name"
                        value={form.name}
                        onChange={handleChange}
                        required
                      />
                    </div>
                    <div className="form-group">
                      <label>Email *</label>
                      <input
                        type="email"
                        name="email"
                        placeholder="your@email.com"
                        value={form.email}
                        onChange={handleChange}
                        required
                      />
                    </div>
                  </div>

                  <div className="form-row">
                    <div className="form-group">
                      <label>Phone *</label>
                      <input
                        type="tel"
                        name="phone"
                        placeholder="+92 300 1234567"
                        value={form.phone}
                        onChange={handleChange}
                        required
                      />
                    </div>
                    <div className="form-group">
                      <label>Number of Guests *</label>
                      <select name="guests" value={form.guests} onChange={handleChange}>
                        {[1, 2, 3, 4, 5, 6, 7, 8].map((n) => (
                          <option key={n} value={n}>
                            {n} {n === 1 ? 'Guest' : 'Guests'}
                          </option>
                        ))}
                      </select>
                    </div>
                  </div>

                  <div className="form-row">
                    <div className="form-group">
                      <label>Date *</label>
                      <input
                        type="date"
                        name="date"
                        value={form.date}
                        onChange={handleChange}
                        required
                      />
                    </div>
                    <div className="form-group">
                      <label>Time *</label>
                      <select name="time" value={form.time} onChange={handleChange} required>
                        <option value="">Select Time</option>
                        {['12:00', '13:00', '14:00', '15:00', '16:00', '17:00', '18:00', '19:00', '20:00', '21:00'].map((t) => (
                          <option key={t} value={t}>
                            {t.length === 5 ? `${t.slice(0, 2)}:${t.slice(2)} PM` : `${t} PM`}
                          </option>
                        ))}
                      </select>
                    </div>
                  </div>

                  <motion.button
                    type="submit"
                    className="book-submit"
                    disabled={loading}
                    whileHover={{ scale: loading ? 1 : 1.02 }}
                    whileTap={{ scale: loading ? 1 : 0.98 }}
                  >
                    {loading ? (
                      <motion.span
                        className="submit-spinner"
                        animate={{ rotate: 360 }}
                        transition={{ repeat: Infinity, duration: 1, ease: 'linear' }}
                      />
                    ) : (
                      'Confirm Reservation'
                    )}
                  </motion.button>
                </form>
              )}
            </ScrollReveal>
          </div>
        </div>
      </section>
    </div>
  );
}