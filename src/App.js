import React from 'react';
import './App.css';
import Header from './components/header';
import Footer from './components/footer';
import Slider from './components/slider';
import Contact from './components/contact';
import WantToWork from './components/wanttowork';
import ScrollUp from './components/scrollup';
import Categories from './components/categories';
import About from './components/about';

function App() {
  return (
    <div className="App">
      <Header />
      <Slider />
      <About />
      <Categories />
      <WantToWork />
      <Contact />
      <ScrollUp />
      <Footer />
    </div>
  );
}

export default App;
