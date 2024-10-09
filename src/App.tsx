import './App.css';
import Home from './components/Home';
import Tour from './components/Tour';
import Culinary from './components/Culinary';
import Footer from './components/Footer';
import Navbar from './components/Navbar';
import Music from './components/Music';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Analytics } from '@vercel/analytics/react';

function App() {
  return (
    <>
      <Navbar />
      <Music />
      <Analytics />
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Tour" element={<Tour />} />
          <Route path="/Culinary" element={<Culinary />} />
        </Routes>
      </Router>
      <Footer />
    </>
  );
}

export default App
