import { useState } from "react";
import { Menu, X, ChevronDown } from "lucide-react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState("");
  const [dropdownTimeout, setDropdownTimeout] = useState(null);

  const services = [
    { name: "SMS Solutions", path: "/services/sms" },
    { name: "DID Numbers", path: "/services/did" },
    { name: "Voice Services", path: "/services/voice" },
    { name: "Software Solutions", path: "/services/software" },
  ];

  const resources = [
    { name: "Documentation", path: "/docs" },
    { name: "API Reference", path: "/api" },
    { name: "Case Studies", path: "/case-studies" },
  ];

  const toggleDropdown = (dropdown) => {
    setActiveDropdown(activeDropdown === dropdown ? "" : dropdown);
  };

  const handleMouseEnter = (dropdown) => {
    if (dropdownTimeout) clearTimeout(dropdownTimeout);
    setActiveDropdown(dropdown);
  };

  const handleMouseLeave = () => {
    const timeout = setTimeout(() => {
      setActiveDropdown("");
    }, 150);
    setDropdownTimeout(timeout);
  };

  const handleLinkClick = () => {
    setIsOpen(false);
  };

  return (
    <nav className="fixed w-full bg-slate-900 backdrop-blur-xl shadow-2xl border-b border-blue-500/30 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <div className="flex items-center gap-3">
            <a
              href="/"
              className="relative group"
            >
              <div className="relative h-16 w-16 flex items-center justify-center">
                <svg
                  className="absolute inset-0 animate-spin"
                  style={{ animationDuration: "3s" }}
                  viewBox="0 0 100 100"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <circle
                    cx="50"
                    cy="50"
                    r="45"
                    stroke="url(#gradient)"
                    strokeWidth="2"
                    strokeDasharray="10 5"
                  />
                  <defs>
                    <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="100%">
                      <stop offset="0%" stopColor="#3b82f6" />
                      <stop offset="50%" stopColor="#06b6d4" />
                      <stop offset="100%" stopColor="#3b82f6" />
                    </linearGradient>
                  </defs>
                </svg>
                <img
                  src="/logo.png"
                  alt="Cyvora"
                  className="h-14 w-14 object-contain filter brightness-0 invert group-hover:scale-110 transition-transform"
                />
              </div>
            </a>
            <a
              href="/"
              className="text-2xl font-bold bg-gradient-to-r from-blue-400 via-cyan-400 to-blue-500 bg-clip-text text-transparent hover:scale-105 transition-transform"
            >
              Cyvora
            </a>
          </div>

          <div className="hidden md:flex items-center space-x-1">
            <a
              href="/"
              className="text-gray-300 px-4 py-2 rounded-lg font-medium group relative hover:text-blue-300 hover:bg-blue-600/40 transition-all"
            >
              Home
              <span className="absolute bottom-1 left-4 right-4 h-0.5 bg-gradient-to-r from-blue-500 to-cyan-400 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></span>
            </a>

            <div
              className="relative"
              onMouseEnter={() => handleMouseEnter("services")}
              onMouseLeave={handleMouseLeave}
            >
              <button
                onClick={() => toggleDropdown("services")}
                className={`flex items-center px-4 py-2 rounded-lg font-medium transition-all group relative ${
                  activeDropdown === "services"
                    ? "text-cyan-300 bg-blue-600/40"
                    : "text-gray-300 hover:text-cyan-300 hover:bg-blue-600/40"
                }`}
              >
                Services
                <ChevronDown
                  className={`ml-1 w-4 h-4 transition-transform duration-300 ${
                    activeDropdown === "services" ? "rotate-180" : ""
                  }`}
                />
                <span
                  className={`absolute bottom-1 left-4 right-4 h-0.5 bg-gradient-to-r from-blue-500 to-cyan-400 transform transition-transform duration-300 origin-left ${
                    activeDropdown === "services"
                      ? "scale-x-100"
                      : "scale-x-0 group-hover:scale-x-100"
                  }`}
                ></span>
              </button>
              {activeDropdown === "services" && (
                <div className="absolute top-full left-0 mt-1 w-64 bg-slate-800 border border-blue-500/60 rounded-xl shadow-2xl py-3 animate-fadeIn backdrop-blur-md">
                  {services.map((service, idx) => (
                    <a
                      key={service.path}
                      href={service.path}
                      className="block px-5 py-3 text-gray-200 font-medium transition-all relative group/item hover:pl-8 border-l-3 border-transparent hover:border-cyan-400 hover:text-cyan-300"
                      style={{
                        animation: `slideIn 0.3s ease-out ${idx * 50}ms`,
                      }}
                    >
                      <span className="group-hover/item:text-cyan-200 transition-colors">
                        {service.name}
                      </span>
                      <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 to-cyan-400/20 rounded-lg transform scale-x-0 group-hover/item:scale-x-100 transition-transform duration-300 origin-left -z-10"></div>
                    </a>
                  ))}
                </div>
              )}
            </div>

            <a
              href="/pricing"
              className="text-gray-300 px-4 py-2 rounded-lg font-medium group relative hover:text-blue-300 hover:bg-blue-600/40 transition-all"
            >
              Pricing
              <span className="absolute bottom-1 left-4 right-4 h-0.5 bg-gradient-to-r from-blue-500 to-cyan-400 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></span>
            </a>

            <div
              className="relative"
              onMouseEnter={() => handleMouseEnter("resources")}
              onMouseLeave={handleMouseLeave}
            >
              <button
                onClick={() => toggleDropdown("resources")}
                className={`flex items-center px-4 py-2 rounded-lg font-medium transition-all group relative ${
                  activeDropdown === "resources"
                    ? "text-cyan-300 bg-blue-600/40"
                    : "text-gray-300 hover:text-cyan-300 hover:bg-blue-600/40"
                }`}
              >
                Resources
                <ChevronDown
                  className={`ml-1 w-4 h-4 transition-transform duration-300 ${
                    activeDropdown === "resources" ? "rotate-180" : ""
                  }`}
                />
                <span
                  className={`absolute bottom-1 left-4 right-4 h-0.5 bg-gradient-to-r from-blue-500 to-cyan-400 transform transition-transform duration-300 origin-left ${
                    activeDropdown === "resources"
                      ? "scale-x-100"
                      : "scale-x-0 group-hover:scale-x-100"
                  }`}
                ></span>
              </button>
              {activeDropdown === "resources" && (
                <div className="absolute top-full left-0 mt-1 w-64 bg-slate-800 border border-blue-500/60 rounded-xl shadow-2xl py-3 animate-fadeIn backdrop-blur-md">
                  {resources.map((resource, idx) => (
                    <a
                      key={resource.path}
                      href={resource.path}
                      className="block px-5 py-3 text-gray-200 font-medium transition-all relative group/item hover:pl-8 border-l-3 border-transparent hover:border-cyan-400 hover:text-cyan-300"
                      style={{
                        animation: `slideIn 0.3s ease-out ${idx * 50}ms`,
                      }}
                    >
                      <span className="group-hover/item:text-cyan-200 transition-colors">
                        {resource.name}
                      </span>
                      <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 to-cyan-400/20 rounded-lg transform scale-x-0 group-hover/item:scale-x-100 transition-transform duration-300 origin-left -z-10"></div>
                    </a>
                  ))}
                </div>
              )}
            </div>

            <a
              href="/blog"
              className="text-gray-300 px-4 py-2 rounded-lg font-medium group relative hover:text-blue-300 hover:bg-blue-600/40 transition-all"
            >
              Blog
              <span className="absolute bottom-1 left-4 right-4 h-0.5 bg-gradient-to-r from-blue-500 to-cyan-400 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></span>
            </a>

            <a
              href="/about"
              className="text-gray-300 px-4 py-2 rounded-lg font-medium group relative hover:text-blue-300 hover:bg-blue-600/40 transition-all"
            >
              About
              <span className="absolute bottom-1 left-4 right-4 h-0.5 bg-gradient-to-r from-blue-500 to-cyan-400 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></span>
            </a>

            <a
              href="/contact"
              className="text-gray-300 px-4 py-2 rounded-lg font-medium group relative hover:text-blue-300 hover:bg-blue-600/40 transition-all"
            >
              Contact
              <span className="absolute bottom-1 left-4 right-4 h-0.5 bg-gradient-to-r from-blue-500 to-cyan-400 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></span>
            </a>

            <a
              href="/free-trial"
              className="bg-gradient-to-r from-blue-600 to-cyan-500 text-white px-8 py-2.5 rounded-full hover:shadow-xl hover:shadow-blue-500/50 transform hover:scale-105 transition-all font-bold ml-4"
            >
              Free Trial
            </a>
          </div>

          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-300"
            >
              {isOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden bg-slate-800 border-t border-blue-500/30 max-h-[calc(100vh-80px)] overflow-y-auto">
          <div className="px-4 py-4 space-y-3">
            <a
              href="/"
              onClick={handleLinkClick}
              className="block text-gray-300 hover:text-cyan-300 py-2 transition-colors"
            >
              Home
            </a>
            <a
              href="/services/sms"
              onClick={handleLinkClick}
              className="block text-gray-300 hover:text-cyan-300 py-2 transition-colors"
            >
              SMS Solutions
            </a>
            <a
              href="/services/did"
              onClick={handleLinkClick}
              className="block text-gray-300 hover:text-cyan-300 py-2 transition-colors"
            >
              DID Numbers
            </a>
            <a
              href="/services/voice"
              onClick={handleLinkClick}
              className="block text-gray-300 hover:text-cyan-300 py-2 transition-colors"
            >
              Voice Services
            </a>
            <a
              href="/pricing"
              onClick={handleLinkClick}
              className="block text-gray-300 hover:text-cyan-300 py-2 transition-colors"
            >
              Pricing
            </a>
            <a
              href="/blog"
              onClick={handleLinkClick}
              className="block text-gray-300 hover:text-cyan-300 py-2 transition-colors"
            >
              Blog
            </a>
            <a
              href="/about"
              onClick={handleLinkClick}
              className="block text-gray-300 hover:text-cyan-300 py-2 transition-colors"
            >
              About
            </a>
            <a
              href="/contact"
              onClick={handleLinkClick}
              className="block text-gray-300 hover:text-cyan-300 py-2 transition-colors"
            >
              Contact
            </a>
            <a
              href="/free-trial"
              onClick={handleLinkClick}
              className="block bg-blue-600 text-white px-6 py-2 rounded-full text-center font-medium hover:bg-blue-700 transition-colors"
            >
              Free Trial
            </a>
          </div>
        </div>
      )}

      <style>{`
        @keyframes slideIn {
          from {
            opacity: 0;
            transform: translateX(-10px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }
      `}</style>
    </nav>
  );
};

export default Navbar;
