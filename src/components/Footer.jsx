import {
  Mail,
  Phone,
  MapPin,
  Facebook,
  Twitter,
  Linkedin,
  Instagram,
  ArrowRight,
} from "lucide-react";
import { useState } from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  const [hoveredLink, setHoveredLink] = useState(null);

  return (
    <footer className="relative bg-(--footer-bg) text-(--footer-text) overflow-hidden">
      <div className="relative z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-5 gap-12 mb-12">
            <div className="col-span-2 lg:col-span-2 animate-fadeInUp">
              <div className="mb-6">
                <Link to="/" className="relative group inline-block">
                  <div className="relative flex items-center justify-center bg-white rounded-full w-16 h-16 shadow-xl shrink-0">
                    <img
                      src="/logo.png"
                      alt="Cyvora"
                      className="h-16 w-16 object-contain group-hover:scale-105 transition-transform p-1"
                    />
                  </div>
                </Link>
                <p className="w-10 h-1 bg-(--accent-copper) rounded-full mt-2"></p>
              </div>
              <p className="text-(--footer-text)/80 mb-6 leading-relaxed font-medium">
                Transforming telecom solutions with innovative technology and
                unparalleled customer service. Your trusted partner in global
                communications.
              </p>
              <div className="flex space-x-3">
                {[
                  {
                    icon: Facebook,
                    label: "Facebook",
                    color: "hover:text-(--accent-copper)",
                    path: "/comingsoon",
                  },
                  {
                    icon: Twitter,
                    label: "Twitter",
                    color: "hover:text-(--accent-copper)",
                    path: "/comingsoon",
                  },
                  {
                    icon: Linkedin,
                    label: "LinkedIn",
                    color: "hover:text-(--accent-copper)",
                    path: "https://www.linkedin.com/company/cyvora-tech/",
                  },
                  {
                    icon: Instagram,
                    label: "Instagram",
                    color: "hover:text-(--accent-copper)",
                    path: "/comingsoon",
                  },
                ].map((social, idx) => {
                  const isExternal = social.path.startsWith("http");
                  const Component = isExternal ? "a" : Link;
                  const linkProps = isExternal
                    ? {
                        href: social.path,
                        target: "_blank",
                        rel: "noopener noreferrer",
                      }
                    : { to: social.path };

                  return (
                    <Component
                      key={idx}
                      {...linkProps}
                      className={`p-3 bg-white/5 rounded-full shadow-md hover:shadow-lg transform hover:scale-110 transition-all duration-300 ${social.color}`}
                      aria-label={social.label}
                    >
                      <social.icon size={20} />
                    </Component>
                  );
                })}
              </div>
            </div>

            <div
              className="col-span-1 animate-fadeInUp"
              style={{ animationDelay: "100ms" }}
            >
              <h4 className="text-lg font-bold mb-6 text-(--text-off-white) flex items-center gap-2">
                <span className="w-2 h-2 bg-(--accent-copper) rounded-full"></span>
                Services
              </h4>
              <ul className="space-y-3">
                {[
                  { name: "SMS Solutions", path: "/services/sms" },
                  { name: "DID Numbers", path: "/services/did" },
                  { name: "Voice Services", path: "/services/voice" },
                  { name: "Software Solutions", path: "/services/software" },
                ].map((item, idx) => (
                  <li key={idx}>
                    <Link
                      to={item.path}
                      className="text-(--footer-text) hover:text-(--accent-copper) transition-all duration-300 flex items-center gap-1 group font-medium"
                      onMouseEnter={() => setHoveredLink(`service-${idx}`)}
                      onMouseLeave={() => setHoveredLink(null)}
                    >
                      {hoveredLink === `service-${idx}` && (
                        <ArrowRight size={16} className="animate-pulse" />
                      )}
                      <span className="group-hover:translate-x-1 transition-transform">
                        {item.name}
                      </span>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div
              className="col-span-1 animate-fadeInUp"
              style={{ animationDelay: "200ms" }}
            >
              <h4 className="text-lg font-bold mb-6 text-(--text-off-white) flex items-center gap-2">
                <span className="w-2 h-2 bg-(--accent-copper) rounded-full"></span>
                Company
              </h4>
              <ul className="space-y-3">
                {[
                  { name: "About Us", path: "/about" },
                  { name: "Blog", path: "/comingsoon" },
                  { name: "Contact", path: "/contact" },
                ].map((item, idx) => (
                  <li key={idx}>
                    <Link
                      to={item.path}
                      className="text-(--footer-text) hover:text-(--accent-copper) transition-all duration-300 flex items-center gap-1 group font-medium"
                      onMouseEnter={() => setHoveredLink(`company-${idx}`)}
                      onMouseLeave={() => setHoveredLink(null)}
                    >
                      {hoveredLink === `company-${idx}` && (
                        <ArrowRight size={16} className="animate-pulse" />
                      )}
                      <span className="group-hover:translate-x-1 transition-transform">
                        {item.name}
                      </span>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div
              className="col-span-2 lg:col-span-1 animate-fadeInUp"
              style={{ animationDelay: "300ms" }}
            >
              <h4 className="text-lg font-bold mb-6 text-(--text-off-white) flex items-center justify-start gap-2">
                <span className="w-2 h-2 bg-(--accent-copper) rounded-full"></span>
                Contact
              </h4>
              <ul className="space-y-4 flex flex-col items-start">
                <li>
                  <a
                    href="mailto:Info@cyvoratech.com"
                    className="flex items-start gap-3 group"
                  >
                    <div className="p-2 bg-white/5 rounded-lg group-hover:shadow-md transition-all">
                      <Mail size={18} className="text-(--accent-copper)" />
                    </div>
                    <div className="flex-1">
                      <p className="text-sm text-(--footer-text)/60">Email</p>
                      <p className="text-(--footer-text) font-medium group-hover:text-(--accent-copper) transition-colors">
                        Info@cyvoratech.com
                      </p>
                    </div>
                  </a>
                </li>
                <li>
                  <a
                    href="tel:+15551234567"
                    className="flex items-start gap-3 group"
                  >
                    <div className="p-2 bg-white/5 rounded-lg group-hover:shadow-md transition-all">
                      <Phone size={18} className="text-(--accent-copper)" />
                    </div>
                    <div className="flex-1">
                      <p className="text-sm text-(--footer-text)/60">Phone</p>
                      <p className="text-(--footer-text) font-medium group-hover:text-(--accent-copper) transition-colors">
                        +998 90 481 51 76
                      </p>
                    </div>
                  </a>
                </li>
                <li>
                  <div className="flex items-start gap-3">
                    <div className="p-2 bg-white/5 rounded-lg">
                      <MapPin size={18} className="text-(--accent-copper)" />
                    </div>
                    <div className="flex-1">
                      <p className="text-sm text-(--footer-text)/60">
                        Location
                      </p>
                      <p className="text-(--footer-text) font-medium">
                        Tashkent, Uzbekistan
                      </p>
                    </div>
                  </div>
                </li>
              </ul>
            </div>
          </div>

          <div className="border-t border-white/10 pt-8">
            <div className="flex flex-col md:flex-row justify-between items-center">
              <p className="text-(--footer-text) font-medium mb-4 md:mb-0 animate-fadeInUp">
                &copy; 2025 Cyvora. All rights reserved.
              </p>
              <div
                className="flex gap-6 animate-fadeInUp"
                style={{ animationDelay: "100ms" }}
              >
                <Link
                  to="/privacy"
                  className="text-sm text-(--footer-text) hover:text-(--accent-copper) transition-colors font-medium"
                >
                  Privacy Policy
                </Link>
                <Link
                  to="/terms"
                  className="text-sm text-(--footer-text) hover:text-(--accent-copper) transition-colors font-medium"
                >
                  Terms of Service
                </Link>
                <Link
                  to="/cookies"
                  className="text-sm text-(--footer-text) hover:text-(--accent-copper) transition-colors font-medium"
                >
                  Cookie Policy
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
