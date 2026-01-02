import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";
import { useEffect } from "react";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import {
  SMSService,
  DIDService,
  VoiceService,
  SoftwareService,
} from "./pages/Services";
import Pricing from "./pages/Pricing";
import Contact from "./pages/Contact";
import FreeTrial from "./pages/FreeTrial";
import About from "./pages/About";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import TermsOfService from "./pages/TermsOfService";
import CookiePolicy from "./pages/CookiePolicy";
// import Blog from "./pages/Blog"; // for future use
import ComingSoon from "./pages/ComingSoon";

function ScrollToHash() {
  const { pathname, hash, key } = useLocation();

  useEffect(() => {
    if (hash) {
      const element = document.getElementById(hash.slice(1));
      if (element) {
        setTimeout(() => {
          element.scrollIntoView({ behavior: "smooth" });
        }, 100);
      }
    } else {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  }, [pathname, hash, key]);

  return null;
}

function App() {
  return (
    <Router>
      <ScrollToHash />
      <div className="min-h-screen bg-(--body-bg)">
        <Navbar />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/home" element={<Home />} />

          {/* Services */}
          <Route path="/services/sms" element={<SMSService />} />
          <Route path="/services/did" element={<DIDService />} />
          <Route path="/services/voice" element={<VoiceService />} />
          <Route path="/services/software" element={<SoftwareService />} />

          {/* Other Pages */}
          <Route path="/pricing" element={<Pricing />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/free-trial" element={<FreeTrial />} />
          <Route path="/about" element={<About />} />

          {/* Legal Pages */}
          <Route path="/privacy" element={<PrivacyPolicy />} />
          <Route path="/terms" element={<TermsOfService />} />
          <Route path="/cookies" element={<CookiePolicy />} />

          {/* Coming Soon / Blog */}
          {/* <Route path="/blog" element={<Blog />} /> // for future use */}
          <Route path="/comingsoon" element={<ComingSoon />} />

          {/* Fallback Route */}
          <Route path="*" element={<Home />} />
        </Routes>

        <Footer />
      </div>
    </Router>
  );
}

export default App;
