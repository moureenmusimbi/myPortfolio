import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero/Hero';
import About from './components/About/About';
import Services from './components/Services/Services';
import MyWork from './components/MyWork/MyWork';
import Contact from './components/Contact/Contact';

const App = () => {
  return (
    <div className="App">
      <Navbar />

      <section id="home">
        <Hero />
      </section>

      <section id="about">
        <About />
      </section>

      <section id="services">
        <Services />
      </section>

      <section id="portfolio">
        <MyWork />
      </section>

      <section id="contact">
        <Contact />
      </section>
    </div>
  );
};

export default App;
