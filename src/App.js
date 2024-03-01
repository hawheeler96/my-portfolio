import logo from './logo.svg';
import "./index.css";
import Home from './components/Home';
import NavBar from './components/NavBar';
import About from './components/About';
import Projects from './components/Projects';
import Blog from './components/Blog';
import Resume from './components/Resume';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import { createContext } from 'react';
 
function App() {
  return (
    <div className="min-h-screen bg-white transition duration-200 dark:bg-slate-400">
      <Router>
        <NavBar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/articles" element={<Blog />} />
          <Route path="/resume" element={<Resume />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
