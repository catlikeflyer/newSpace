import Space from "./pages/Space";
import About from "./pages/About";
import Navbar from "./components/Navbar";
import Projects from "./pages/Projects";
import Experience from "./pages/Experience";
import Contact from "./pages/Contact";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Uploaders from "./pages/Uploaders";
import Footer from "./components/Footer";

const Main = () => (
  <div>
    <Navbar />
    <Space />
    <About />
    <Projects />
    <Experience />
    <Contact />
    <Footer />
  </div>
);

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/uploader" element={<Uploaders />} />
      </Routes>
    </Router>
  );
}

export default App;
