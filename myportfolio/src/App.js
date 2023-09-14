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
import { useState, useEffect } from "react";
import ScaleLoader from "react-spinners/ScaleLoader";
// import Lottie from 'react-lottie'
// import scgit from '../home/animation_lmgbjrp4.json'


function App() {
  // const defaultOptions = {
  //   loop: true,
  //   autoplay: true,
  //   animationData: scgit,
  //   rendererSettings: {
  //     preserveAspectRatio: 'xMidYMid slice'
  //   }
  // }
  const [loading, setLoading] = useState(false)
  useEffect(() => {
    setLoading(true)
    setTimeout(() => {
      setLoading(false)
    }, 2000);
  }, [])
  return (
    <>
      {
        loading ?
          <ScaleLoader className='Dotloader'/>
          :
          <>
            <Header />
            <main className="main">
              <Home />
              <About />
              <Skills />
              <Services />
              <Qualification />
              <Testimonials />
              <Contact />
            </main>
            <Footer />
            <ScrUp />
          </>
      }
    </>
  );
}

export default App;
