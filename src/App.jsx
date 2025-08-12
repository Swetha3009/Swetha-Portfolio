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
  typeSpeedMs={200}
  pauseAfterType={500}
  preHoldMs={100}
  wipeMs={1000}
  postHoldMs={700}
  fadeMs={400}
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
