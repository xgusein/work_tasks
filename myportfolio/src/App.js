import React from 'react';
import './App.css';
import Header from './components/header/Header';
import Home from './components/home/Home';
import About from './components/about/About';
import Skills from './components/skills/Skills';
import Services from './components/services/Services';
import Qualification from './components/qualification/Qualification';
import Testimonials from './components/testimonials/Testimonials';
import Contact from './components/contact/Contact';
import Footer from './components/footer/Footer';
import ScrUp from './components/scrup/ScrUp';
import ChipTabs from './components/tests';
import WaterDropGrid from './components/tests';
function App() {
  return (
    <>
      <Header />
      <main className="main">
      <WaterDropGrid/>
        <Home />
        <About />
        <Skills />
        <Services />
        <Qualification />
        <Testimonials/>
        <Contact /> 
      </main>
      <Footer />
      <ScrUp/>
    </>
  );
}

export default App;
