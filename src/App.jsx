import Navbar from "./components/Navbar";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Hero from "./components/Hero";
import About from "./components/About";
import Catering from "./components/Catering";
import Testimonials from "./components/Testimonials";
import JoinUs from "./components/JoinUs";
import Footer from "./components/Footer";
import Process from "./components/NavLinks/Process";
import Community from "./components/NavLinks/Community";

const App = () => {
  return (
    <Router>
      <div>
        <Navbar />
        <Routes>
          <Route path="/" element={
            <>
              <Hero />
              <About />
              <Catering />
              <Testimonials />
              <JoinUs />
              <Footer />
            </>
          } />
          <Route path="/process" element={
            <>
              <Process />
              <Footer />
            </>
          } />
          <Route path="/community" element={
            <>
              <Community />
              <Footer />
            </>
          } />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
