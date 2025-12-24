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
    <nav className="fixed w-full bg-[var(--navbar-bg)] backdrop-blur-xl shadow-2xl border-b border-white/10 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-24">
          <div className="flex items-center gap-3">
            <a href="/" className="relative group">
              <div className="relative flex items-center justify-center">
                <img
                  src="/logo.png"
                  alt="Cyvora"
                  className="h-24 w-auto object-contain group-hover:scale-105 transition-transform"
                />
              </div>
            </a>
          </div>

          <div className="hidden md:flex items-center space-x-1">
            <a
              href="/"
              className="text-[var(--text-off-white)] px-4 py-2 rounded-lg font-medium group relative hover:text-[var(--accent-copper)] transition-all"
            >
              Home
              <span className="absolute bottom-1 left-4 right-4 h-0.5 bg-[var(--accent-copper)] transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></span>
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
                    ? "text-[var(--accent-copper)] bg-white/5"
                    : "text-[var(--text-off-white)] hover:text-[var(--accent-copper)] hover:bg-white/5"
                }`}
              >
                Services
                <ChevronDown
                  className={`ml-1 w-4 h-4 transition-transform duration-300 ${
                    activeDropdown === "services" ? "rotate-180" : ""
                  }`}
                />
                <span
                  className={`absolute bottom-1 left-4 right-4 h-0.5 bg-[var(--accent-copper)] transform transition-transform duration-300 origin-left ${
                    activeDropdown === "services"
                      ? "scale-x-100"
                      : "scale-x-0 group-hover:scale-x-100"
                  }`}
                ></span>
              </button>
              {activeDropdown === "services" && (
                <div className="absolute top-full left-0 mt-1 w-64 bg-[var(--navbar-bg)] border border-white/10 rounded-xl shadow-2xl py-3 animate-fadeIn backdrop-blur-md">
                  {services.map((service, idx) => (
                    <a
                      key={service.path}
                      href={service.path}
                      className="block px-5 py-3 text-[var(--text-off-white)] font-medium transition-all relative group/item hover:pl-8 border-l-3 border-transparent hover:border-[var(--accent-copper)] hover:text-[var(--accent-copper)]"
                      style={{
                        animation: `slideIn 0.3s ease-out ${idx * 50}ms`,
                      }}
                    >
                      <span className="group-hover/item:text-[var(--accent-copper)] transition-colors">
                        {service.name}
                      </span>
                      <div className="absolute inset-0 bg-white/5 rounded-lg transform scale-x-0 group-hover/item:scale-x-100 transition-transform duration-300 origin-left -z-10"></div>
                    </a>
                  ))}
                </div>
              )}
            </div>

            <a
              href="/pricing"
              className="text-[var(--text-off-white)] px-4 py-2 rounded-lg font-medium group relative hover:text-[var(--accent-copper)] transition-all"
            >
              Pricing
              <span className="absolute bottom-1 left-4 right-4 h-0.5 bg-[var(--accent-copper)] transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></span>
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
                    ? "text-[var(--accent-copper)] bg-white/5"
                    : "text-[var(--text-off-white)] hover:text-[var(--accent-copper)] hover:bg-white/5"
                }`}
              >
                Resources
                <ChevronDown
                  className={`ml-1 w-4 h-4 transition-transform duration-300 ${
                    activeDropdown === "resources" ? "rotate-180" : ""
                  }`}
                />
                <span
                  className={`absolute bottom-1 left-4 right-4 h-0.5 bg-[var(--accent-copper)] transform transition-transform duration-300 origin-left ${
                    activeDropdown === "resources"
                      ? "scale-x-100"
                      : "scale-x-0 group-hover:scale-x-100"
                  }`}
                ></span>
              </button>
              {activeDropdown === "resources" && (
                <div className="absolute top-full left-0 mt-1 w-64 bg-[var(--navbar-bg)] border border-white/10 rounded-xl shadow-2xl py-3 animate-fadeIn backdrop-blur-md">
                  {resources.map((resource, idx) => (
                    <a
                      key={resource.path}
                      href={resource.path}
                      className="block px-5 py-3 text-[var(--text-off-white)] font-medium transition-all relative group/item hover:pl-8 border-l-3 border-transparent hover:border-[var(--accent-copper)] hover:text-[var(--accent-copper)]"
                      style={{
                        animation: `slideIn 0.3s ease-out ${idx * 50}ms`,
                      }}
                    >
                      <span className="group-hover/item:text-[var(--accent-copper)] transition-colors">
                        {resource.name}
                      </span>
                      <div className="absolute inset-0 bg-white/5 rounded-lg transform scale-x-0 group-hover/item:scale-x-100 transition-transform duration-300 origin-left -z-10"></div>
                    </a>
                  ))}
                </div>
              )}
            </div>

            <a
              href="/blog"
              className="text-[var(--text-off-white)] px-4 py-2 rounded-lg font-medium group relative hover:text-[var(--accent-copper)] transition-all"
            >
              Blog
              <span className="absolute bottom-1 left-4 right-4 h-0.5 bg-[var(--accent-copper)] transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></span>
            </a>

            <a
              href="/about"
              className="text-[var(--text-off-white)] px-4 py-2 rounded-lg font-medium group relative hover:text-[var(--accent-copper)] transition-all"
            >
              About
              <span className="absolute bottom-1 left-4 right-4 h-0.5 bg-[var(--accent-copper)] transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></span>
            </a>

            <a
              href="/contact"
              className="text-[var(--text-off-white)] px-4 py-2 rounded-lg font-medium group relative hover:text-[var(--accent-copper)] transition-all"
            >
              Contact
              <span className="absolute bottom-1 left-4 right-4 h-0.5 bg-[var(--accent-copper)] transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></span>
            </a>

            {/* <a
              href="/free-trial"
              className="bg-[var(--accent-copper)] text-white px-8 py-2.5 rounded-full hover:shadow-xl hover:shadow-[var(--accent-copper)]/50 transform hover:scale-105 transition-all font-bold ml-4"
            >
              Free Trial
            </a> */}
          </div>

          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-[var(--text-off-white)]"
            >
              {isOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden bg-[var(--navbar-bg)] border-t border-white/10 max-h-[calc(100vh-80px)] overflow-y-auto">
          <div className="px-4 py-4 space-y-3">
            <a
              href="/"
              onClick={handleLinkClick}
              className="block text-[var(--text-off-white)] hover:text-[var(--accent-copper)] py-2 transition-colors"
            >
              Home
            </a>
            <a
              href="/services/sms"
              onClick={handleLinkClick}
              className="block text-[var(--text-off-white)] hover:text-[var(--accent-copper)] py-2 transition-colors"
            >
              SMS Solutions
            </a>
            <a
              href="/services/did"
              onClick={handleLinkClick}
              className="block text-[var(--text-off-white)] hover:text-[var(--accent-copper)] py-2 transition-colors"
            >
              DID Numbers
            </a>
            <a
              href="/services/voice"
              onClick={handleLinkClick}
              className="block text-[var(--text-off-white)] hover:text-[var(--accent-copper)] py-2 transition-colors"
            >
              Voice Services
            </a>
            <a
              href="/pricing"
              onClick={handleLinkClick}
              className="block text-[var(--text-off-white)] hover:text-[var(--accent-copper)] py-2 transition-colors"
            >
              Pricing
            </a>
            <a
              href="/blog"
              onClick={handleLinkClick}
              className="block text-[var(--text-off-white)] hover:text-[var(--accent-copper)] py-2 transition-colors"
            >
              Blog
            </a>
            <a
              href="/about"
              onClick={handleLinkClick}
              className="block text-[var(--text-off-white)] hover:text-[var(--accent-copper)] py-2 transition-colors"
            >
              About
            </a>
            <a
              href="/contact"
              onClick={handleLinkClick}
              className="block text-[var(--text-off-white)] hover:text-[var(--accent-copper)] py-2 transition-colors"
            >
              Contact
            </a>
            {/* <a
              href="/free-trial"
              onClick={handleLinkClick}
              className="block bg-[var(--accent-copper)] text-white px-6 py-2 rounded-full text-center font-medium hover:bg-[var(--accent-copper)]/90 transition-colors"
            >
              Free Trial
            </a> */}
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
