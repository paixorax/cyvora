import { useState } from "react";
import { Menu, X, ChevronDown } from "lucide-react";
import { Link } from "react-router-dom";

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

  // const resources = [
  //   { name: "Documentation", path: "/docs" },
  //   { name: "API Reference", path: "/api" },
  //   { name: "Case Studies", path: "/case-studies" },
  // ];

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
    <nav className="fixed w-full bg-(--navbar-bg) backdrop-blur-xl shadow-2xl border-b border-white/10 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-24">
          <div className="flex items-center gap-3">
            <Link to="/" className="relative group" onClick={handleLinkClick}>
              <div className="relative flex items-center justify-center bg-white rounded-full w-14 h-14 lg:w-18 lg:h-18 shadow-xl shrink-0">
                <img
                  src="/logo.png"
                  alt="Cyvora"
                  className="h-14 w-14 lg:h-18 lg:w-18 object-contain group-hover:scale-105 transition-transform p-1"
                />
              </div>
            </Link>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-1">
            <Link
              to="/"
              className="text-(--text-off-white) px-4 py-2 rounded-lg font-semibold text-lg lg:text-xl group relative hover:text-(--accent-copper) transition-all"
            >
              Home
              <span className="absolute bottom-1 left-4 right-4 h-0.5 bg-(--accent-copper) transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></span>
            </Link>

            {/* Services Dropdown */}
            <div
              className="relative"
              onMouseEnter={() => handleMouseEnter("services")}
              onMouseLeave={handleMouseLeave}
            >
              <button
                onClick={() => toggleDropdown("services")}
                className={`flex items-center px-4 py-2 rounded-lg font-bold text-lg lg:text-xl transition-all group relative ${
                  activeDropdown === "services"
                    ? "text-(--accent-copper) bg-white/5"
                    : "text-(--text-off-white) hover:text-(--accent-copper) hover:bg-white/5"
                }`}
              >
                Services
                <ChevronDown
                  className={`ml-1 w-5 h-5 transition-transform duration-300 ${
                    activeDropdown === "services" ? "rotate-180" : ""
                  }`}
                />
                <span
                  className={`absolute bottom-1 left-4 right-4 h-0.5 bg-(--accent-copper) transform transition-transform duration-300 origin-left ${
                    activeDropdown === "services"
                      ? "scale-x-100"
                      : "scale-x-0 group-hover:scale-x-100"
                  }`}
                ></span>
              </button>
              {activeDropdown === "services" && (
                <div className="absolute top-full left-0 mt-1 w-72 bg-(--navbar-bg) border border-white/10 rounded-xl shadow-2xl py-3 animate-fadeIn backdrop-blur-md">
                  {services.map((service, idx) => (
                    <Link
                      key={service.path}
                      to={service.path}
                      onClick={handleLinkClick}
                      className="block px-6 py-4 text-(--text-off-white) font-bold text-lg transition-all relative group/item hover:pl-10 border-l-4 border-transparent hover:border-(--accent-copper) hover:text-(--accent-copper)"
                      style={{
                        animation: `slideIn 0.3s ease-out ${idx * 50}ms`,
                      }}
                    >
                      <span className="group-hover/item:text-(--accent-copper) transition-colors">
                        {service.name}
                      </span>
                      <div className="absolute inset-0 bg-white/5 rounded-lg transform scale-x-0 group-hover/item:scale-x-100 transition-transform duration-300 origin-left -z-10"></div>
                    </Link>
                  ))}
                </div>
              )}
            </div>

            {/* <Link
              to="/pricing"
              className="text-(--text-off-white) px-4 py-2 rounded-lg font-bold text-lg lg:text-xl group relative hover:text-(--accent-copper) transition-all"
            >
              Pricing
              <span className="absolute bottom-1 left-4 right-4 h-0.5 bg-(--accent-copper) transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></span>
            </Link> */}

            {/* Resources Dropdown
            <div
              className="relative"
              onMouseEnter={() => handleMouseEnter("resources")}
              onMouseLeave={handleMouseLeave}
            >
              <button
                onClick={() => toggleDropdown("resources")}
                className={`flex items-center px-4 py-2 rounded-lg font-bold text-lg lg:text-xl transition-all group relative ${
                  activeDropdown === "resources"
                    ? "text-(--accent-copper) bg-white/5"
                    : "text-(--text-off-white) hover:text-(--accent-copper) hover:bg-white/5"
                }`}
              >
                Resources
                <ChevronDown
                  className={`ml-1 w-5 h-5 transition-transform duration-300 ${
                    activeDropdown === "resources" ? "rotate-180" : ""
                  }`}
                />
                <span
                  className={`absolute bottom-1 left-4 right-4 h-0.5 bg-(--accent-copper) transform transition-transform duration-300 origin-left ${
                    activeDropdown === "resources"
                      ? "scale-x-100"
                      : "scale-x-0 group-hover:scale-x-100"
                  }`}
                ></span>
              </button>
              {activeDropdown === "resources" && (
                <div className="absolute top-full left-0 mt-1 w-72 bg-(--navbar-bg) border border-white/10 rounded-xl shadow-2xl py-3 animate-fadeIn backdrop-blur-md">
                  {resources.map((resource, idx) => (
                    <Link
                      key={resource.path}
                      to={resource.path}
                      onClick={handleLinkClick}
                      className="block px-6 py-4 text-(--text-off-white) font-bold text-lg transition-all relative group/item hover:pl-10 border-l-4 border-transparent hover:border-(--accent-copper) hover:text-(--accent-copper)"
                      style={{
                        animation: `slideIn 0.3s ease-out ${idx * 50}ms`,
                      }}
                    >
                      <span className="group-hover/item:text-(--accent-copper) transition-colors">
                        {resource.name}
                      </span>
                      <div className="absolute inset-0 bg-white/5 rounded-lg transform scale-x-0 group-hover/item:scale-x-100 transition-transform duration-300 origin-left -z-10"></div>
                    </Link>
                  ))}
                </div>
              )}
            </div> */}

            <Link
              to="/comingsoon"
              className="text-(--text-off-white) px-4 py-2 rounded-lg font-bold text-lg lg:text-xl group relative hover:text-(--accent-copper) transition-all"
            >
              Blog
              <span className="absolute bottom-1 left-4 right-4 h-0.5 bg-(--accent-copper) transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></span>
            </Link>

            <Link
              to="/about"
              className="text-(--text-off-white) px-4 py-2 rounded-lg font-bold text-lg lg:text-xl group relative hover:text-(--accent-copper) transition-all"
            >
              About
              <span className="absolute bottom-1 left-4 right-4 h-0.5 bg-(--accent-copper) transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></span>
            </Link>

            <Link
              to="/contact"
              className="text-(--text-off-white) px-4 py-2 rounded-lg font-bold text-lg lg:text-xl group relative hover:text-(--accent-copper) transition-all"
            >
              Contact
              <span className="absolute bottom-1 left-4 right-4 h-0.5 bg-(--accent-copper) transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></span>
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-(--text-off-white)"
            >
              {isOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-(--navbar-bg) border-t border-white/10 max-h-[calc(100vh-80px)] overflow-y-auto">
          <div className="px-4 py-4 space-y-3">
            <Link
              to="/"
              onClick={handleLinkClick}
              className="block text-(--text-off-white) hover:text-(--accent-copper) py-2 transition-colors"
            >
              Home
            </Link>
            {services.map((service) => (
              <Link
                key={service.path}
                to={service.path}
                onClick={handleLinkClick}
                className="block text-(--text-off-white) hover:text-(--accent-copper) py-2 transition-colors"
              >
                {service.name}
              </Link>
            ))}
            {/* <Link
              to="/pricing"
              onClick={handleLinkClick}
              className="block text-(--text-off-white) hover:text-(--accent-copper) py-2 transition-colors"
            >
              Pricing
            </Link> */}
            {/* <Link
              to="/blog"
              onClick={handleLinkClick}
              className="block text-(--text-off-white) hover:text-(--accent-copper) py-2 transition-colors"
            >
              Blog
            </Link> */}
            <Link
              to="/comingsoon"
              onClick={handleLinkClick}
              className="block text-(--text-off-white) hover:text-(--accent-copper) py-2 transition-colors"
            >
              Blog
            </Link>
            <Link
              to="/about"
              onClick={handleLinkClick}
              className="block text-(--text-off-white) hover:text-(--accent-copper) py-2 transition-colors"
            >
              About
            </Link>
            <Link
              to="/contact"
              onClick={handleLinkClick}
              className="block text-(--text-off-white) hover:text-(--accent-copper) py-2 transition-colors"
            >
              Contact
            </Link>
          </div>
        </div>
      )}

      {/* Animation */}
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
