import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Menu from './pages/Menu';
import Gallery from './pages/Gallery';
import BookingPage from './pages/Booking';
import TestAppointment from './pages/TestAppointment';
import PrivacyPolicy from './pages/PrivacyPolicy';
import Booking from './components/Booking';
import ScrollToTop from './components/ScrollToTop';

function App() {
  console.log('App component is rendering');
  return (
    <Router>
      <ScrollToTop />
      <Booking />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/menu" element={<Menu />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/booking" element={<BookingPage />} />
        <Route path="/test-appointment" element={<TestAppointment />} />
        <Route path="/privacy-policy" element={<PrivacyPolicy />} />
      </Routes>
    </Router>
  );
}

export default App;
