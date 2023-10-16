import React from 'react';
import './styles/globals.css';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import Header from './components/header/Header';
import Footer from './components/footer/Footer';
import Login from './components/login/Login';
import Register from './components/register/Register';
import Main from './components/main/Main';
import MainTeams from './components/main/MainTeams';
import MainDetails from './components/main/MainDetails'; // MainDetails bileşenini ekledik

export default function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/" element={<Main />}>
          <Route path="/" element={<MainTeams />} />
          <Route path="/course/:id" element={<MainDetails />} /> {/* Kurs detaylarını gösterecek yol */}
        </Route>
      </Routes>
      <Footer />
    </Router>
  );
}
