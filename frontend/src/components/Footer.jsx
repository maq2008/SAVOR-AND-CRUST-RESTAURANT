import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import {
  FaFacebookF,
  FaInstagram,
  FaTwitter,
  FaYelp,
} from 'react-icons/fa';
import './Footer.css';

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-top">
          <div className="footer-col">
            <h3 className="footer-logo">
              <span>&#9679;</span> SAVOR<span>&</span>CRUST
            </h3>
            <p>
              Fine dining restaurant in the heart of Lahore, serving
              extraordinary flavors since 2010.
            </p>
            <div className="footer-social">
              {[FaFacebookF, FaInstagram, FaTwitter, FaYelp].map((Icon, i) => (
                <motion.a
                  key={i}
                  href="#"
                  className="social-link"
                  whileHover={{ y: -4, color: '#c9a96e' }}
                >
                  <Icon />
                </motion.a>
              ))}
            </div>
          </div>

          <div className="footer-col">
            <h4>Quick Links</h4>
            <ul>
              <li><Link to="/about">About Us</Link></li>
              <li><Link to="/menu">Our Menu</Link></li>
              <li><Link to="/specials">Specials</Link></li>
              <li><Link to="/book">Reservations</Link></li>
              <li><Link to="/reservations">Contact</Link></li>
            </ul>
          </div>

          <div className="footer-col">
            <h4>Hours</h4>
            <ul className="footer-hours">
              <li><span>Mon - Thu</span> <span>12PM - 10PM</span></li>
              <li><span>Fri - Sat</span> <span>12PM - 11PM</span></li>
              <li><span>Sunday</span> <span>12PM - 9PM</span></li>
            </ul>
          </div>

          <div className="footer-col">
            <h4>Newsletter</h4>
            <p>Subscribe for exclusive offers and updates.</p>
            <div className="footer-newsletter">
              <input type="email" placeholder="Your email" />
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                &#8594;
              </motion.button>
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          <p>&copy; {new Date().getFullYear()} Savor & Crust. All rights reserved.</p>
          <div className="footer-bottom-links">
            <a href="#">Privacy Policy</a>
            <a href="#">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
}