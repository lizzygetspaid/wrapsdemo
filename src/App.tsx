import React from 'react';
import { Navbar } from './components/navigation/Navbar';
import { Hero } from './components/hero/Hero';
import { Services } from './components/services/Services';
import { About } from './components/about/About';
import { Contact } from './components/contact/Contact';
import { Footer } from './components/footer/Footer';

function App() {
  return (
    <div className="bg-black">
      <Navbar />
      <Hero />
      <Services />
      <About />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;