import React from 'react'
import Hero from './components/Hero'
import About from './components/About'
import Projects from './components/Projects'
import Navbar from './components/Navbar';
import ChatPopup from './components/Chatpopup';
import Experience from './components/Experience';
import Skills from './components/Skills';
import FloatingTerminal from "./components/FloatingTerminal";

function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <About />
      <Experience />
      <Projects />
      <Skills />
      <FloatingTerminal />
      <ChatPopup />
      
    </>
  )
}

export default App
