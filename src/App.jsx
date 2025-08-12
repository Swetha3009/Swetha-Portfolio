import React from 'react'
import Hero from './components/Hero'
import About from './components/About'
import Projects from './components/Projects'
import Navbar from './components/Navbar';
import ChatPopup from './components/Chatpopup';
import Experience from './components/Experience';
import Skills from './components/Skills';
import FloatingTerminal from "./components/FloatingTerminal";
import Contact from "./components/ContactFooter";
import IntroReveal from "./components/IntroReveal";

function App() {
  return (
    <>
      <IntroReveal
  command="pnpm dev"
  runOncePerSession={false}  // switch to true later
  startImmediately={true}    // <<< important
  typeSpeedMs={100}
  pauseAfterType={900}
  preHoldMs={1200}
  wipeMs={2200}
  postHoldMs={900}
  fadeMs={900}
/>


      <Navbar />
      <Hero />
      <About />
      <Experience />
      <Projects />
      <Skills />
      <Contact />
      <FloatingTerminal />
      <ChatPopup />
      
      
    </>
  )
}

export default App
