import Navbar from "./components/Navbar";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Hero from "./components/Hero";
import HomeMid from "./components/HomeMid";
import HomeCatering from "./components/HomeCatering";
import Testimonials from "./components/Testimonials";
import JoinUs from "./components/JoinUs";
import Footer from "./components/Footer";
import Process from "./components/NavLinks/Process";
import Community from "./components/NavLinks/Community";
import Referrals from "./components/NavLinks/Referrals";
import Menu from "./components/NavLinks/Menu";
import Catering from "./components/NavLinks/Catering"

const App = () => {
  return (
    <Router>
      <div>
        <Navbar />
        <Routes>
          <Route path="/" element={
            <>
              <Hero />
              <HomeMid />
              <HomeCatering />
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
          <Route path="/referrals" element={
            <>
              <Referrals />
              <Footer />
            </>
          } />
          <Route path="/menu" element={
            <>
              <Menu />
              <Footer />
            </>
          } />
          <Route path="/catering" element={
            <>
              <Catering />
              <Footer />
            </>
          } />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
