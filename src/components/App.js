import React from 'react'
import Header from './Header'
import Intro from './Intro.js'
import Skills from './Skills.js';
import Languages from './Languages.js';
import Projects from './Projects.js';
import Hobbies from './Hobbies.js';
import Footer from './Footer';
import './styles.css';

function App() {
  return (
    <div className="App">
        <Header />
        <Intro />
        <Skills />
        <Languages />
        <Projects />
        <Hobbies />
        <Footer />
    </div>
  )
}

export default App;