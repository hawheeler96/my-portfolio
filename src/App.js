import logo from './logo.svg';
import "./index.css";
import Home from './components/Home';
import NavBar from './components/NavBar';
import About from './components/About';
import Projects from './components/Projects';
import Blog from './components/Blog';
import Resume from './components/Resume';
import Footer from './components/Footer';
import {BrowserRouter as Router, Routes, Route, useLocation} from 'react-router-dom';
import { createContext } from 'react';
import { AnimatePresence } from "framer-motion" ;

function App() {
  const location = useLocation()
  return (
    <div className="h-dvh transition duration-200 dark:bg-midnight">
        <NavBar />
        <AnimatePresence mode="wait">
          <Routes location={location} key={location.pathname}>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/articles" element={<Blog />} />
            <Route path="/resume" element={<Resume />} />
          </Routes>
        </AnimatePresence>
      <Footer />
    </div>
  );
}

export default App;
