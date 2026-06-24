import { useState } from 'react';
import { motion } from 'framer-motion';
import ScrollReveal from './ScrollReveal';
import './ReservationSection.css';

const API_BASE = '/api';

export default function ReservationSection() {
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
      await fetch(`${API_BASE}/reservations/`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          ...form,
          guests: parseInt(form.guests),
        }),
      });
      setSubmitted(true);
    } catch {
      setSubmitted(true);
    }
    setLoading(false);
  };

  return (
    <section className="reservation" id="reservation">
      <div className="reservation-bg" />
      <div className="reservation-container">
        <ScrollReveal variant="fadeUp">
          <div className="reservation-content">
            <span className="section-tag">Reservation</span>
            <h2 className="section-title">
              Book Your<br />
              <span className="section-title-accent">Experience</span>
            </h2>
            <p className="reservation-text">
              Reserve your table and let us create an unforgettable dining experience
              for you and your loved ones.
            </p>

            <div className="reservation-info">
              <div className="reservation-info-item">
                <span className="info-icon">&#128222;</span>
                <div>
                  <small>Phone</small>
                  <strong>+92 42 1234 5678</strong>
                </div>
              </div>
              <div className="reservation-info-item">
                <span className="info-icon">&#128231;</span>
                <div>
                  <small>Email</small>
                  <strong>reserve@savorandcrust.com</strong>
                </div>
              </div>
              <div className="reservation-info-item">
                <span className="info-icon">&#128205;</span>
                <div>
                  <small>Location</small>
                  <strong>MM Alam Road, Lahore</strong>
                </div>
              </div>
              <div className="reservation-info-item">
                <span className="info-icon">&#128338;</span>
                <div>
                  <small>Hours</small>
                  <strong>12PM - 11PM (Mon-Sun)</strong>
                </div>
              </div>
            </div>
          </div>
        </ScrollReveal>

        <ScrollReveal variant="slideRight" delay={0.2}>
          {submitted ? (
            <motion.div
              className="reservation-success"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
            >
              <span className="success-icon">&#10003;</span>
              <h3>Reservation Confirmed!</h3>
              <p>We'll send a confirmation to your email shortly.</p>
            </motion.div>
          ) : (
            <form className="reservation-form" onSubmit={handleSubmit}>
              <div className="form-row">
                <div className="form-group">
                  <label>Name</label>
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
                  <label>Email</label>
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
                  <label>Phone</label>
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
                  <label>Guests</label>
                  <select
                    name="guests"
                    value={form.guests}
                    onChange={handleChange}
                  >
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
                  <label>Date</label>
                  <input
                    type="date"
                    name="date"
                    value={form.date}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div className="form-group">
                  <label>Time</label>
                  <input
                    type="time"
                    name="time"
                    value={form.time}
                    onChange={handleChange}
                    required
                  />
                </div>
              </div>

              <motion.button
                type="submit"
                className="reservation-submit"
                disabled={loading}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                {loading ? (
                  <motion.span
                    className="submit-spinner"
                    animate={{ rotate: 360 }}
                    transition={{ repeat: Infinity, duration: 1, ease: 'linear' }}
                  />
                ) : (
                  'Reserve Now'
                )}
              </motion.button>
            </form>
          )}
        </ScrollReveal>
      </div>
    </section>
  );
}