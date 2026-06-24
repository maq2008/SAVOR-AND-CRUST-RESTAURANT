import { HashRouter, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import MenuPage from './pages/MenuPage';
import SpecialsPage from './pages/SpecialsPage';
import ReservationsPage from './pages/ReservationsPage';
import BookPage from './pages/BookPage';
import Footer from './components/Footer';
import './App.css';

export default function App() {
  return (
    <HashRouter>
      <div className="app">
        <Navbar />
        <main>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/menu" element={<MenuPage />} />
            <Route path="/specials" element={<SpecialsPage />} />
            <Route path="/reservations" element={<ReservationsPage />} />
            <Route path="/book" element={<BookPage />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </HashRouter>
  );
}