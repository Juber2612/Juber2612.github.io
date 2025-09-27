import {Routes, Route } from 'react-router-dom';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import GuestLayout from './components/guestLayout/GuestLayout';
import Home from './components/guestLayout/Home';
import About from './components/guestLayout/About';
import Feedback from './components/guestLayout/Feedback';
import Contact from './components/guestLayout/Contact';
import Delivery from './components/guestLayout/Delivery';

function App() {
  return (

      <Routes>
        <Route path='/' element={<GuestLayout />}>
          <Route index element={<Home />} />
          <Route path="home" element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="feedback" element={<Feedback />} />
          <Route path="contact" element={<Contact />} />
          <Route path="delivery" element={<Delivery />} />
        </Route>
      </Routes>
  );
}

export default App;

