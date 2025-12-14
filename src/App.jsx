import { useState, useEffect } from "react";
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
import Blog from "./pages/Blog";

function App() {
  const [currentPage, setCurrentPage] = useState("home");

  useEffect(() => {
    const handleNavigation = (e) => {
      const target = e.target;

      if (
        target.tagName === "A" &&
        target.href.startsWith(window.location.origin)
      ) {
        e.preventDefault();
        const path = target.pathname;

        setCurrentPage(path);
        window.history.pushState({}, "", path);
        window.scrollTo(0, 0);
      }
    };

    document.addEventListener("click", handleNavigation);

    const path = window.location.pathname;
    setCurrentPage(path);

    return () => {
      document.removeEventListener("click", handleNavigation);
    };
  }, []);

  const renderPage = () => {
    switch (currentPage) {
      case "/":
      case "/home":
        return <Home />;
      case "/services/sms":
        return <SMSService />;
      case "/services/did":
        return <DIDService />;
      case "/services/voice":
        return <VoiceService />;
      case "/services/software":
        return <SoftwareService />;
      case "/pricing":
        return <Pricing />;
      case "/contact":
        return <Contact />;
      case "/free-trial":
        return <FreeTrial />;
      case "/about":
        return <About />;
      case "/blog":
        return <Blog />;
      default:
        return <Home />;
    }
  };

  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      {renderPage()}
      <Footer />
    </div>
  );
}

export default App;
