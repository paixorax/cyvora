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

const Footer = () => {
  const [hoveredLink, setHoveredLink] = useState(null);

  return (
    <footer className="relative bg-gradient-to-b from-blue-50 via-purple-50 to-pink-50 text-gray-800 overflow-hidden">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 right-0 w-96 h-96 bg-blue-200 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-pulse"></div>
        <div
          className="absolute bottom-0 left-0 w-96 h-96 bg-purple-200 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-pulse"
          style={{ animationDelay: "2s" }}
        ></div>
        <div
          className="absolute top-1/2 left-1/2 w-80 h-80 bg-pink-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse"
          style={{ animationDelay: "4s" }}
        ></div>
      </div>

      <div className="relative z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 mb-12">
            <div className="lg:col-span-2 animate-fadeInUp">
              <div className="mb-6">
                <h3 className="text-3xl font-bold mb-2 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
                  Cyvora
                </h3>
                <p className="w-1 h-1 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full"></p>
              </div>
              <p className="text-gray-600 mb-6 leading-relaxed font-medium">
                Transforming telecom solutions with innovative technology and
                unparalleled customer service. Your trusted partner in global
                communications.
              </p>
              <div className="flex space-x-3">
                {[
                  {
                    icon: Facebook,
                    label: "Facebook",
                    color: "hover:text-blue-600",
                  },
                  {
                    icon: Twitter,
                    label: "Twitter",
                    color: "hover:text-blue-400",
                  },
                  {
                    icon: Linkedin,
                    label: "LinkedIn",
                    color: "hover:text-blue-700",
                  },
                  {
                    icon: Instagram,
                    label: "Instagram",
                    color: "hover:text-pink-600",
                  },
                ].map((social, idx) => (
                  <a
                    key={idx}
                    href="#"
                    className={`p-3 bg-white rounded-full shadow-md hover:shadow-lg transform hover:scale-110 transition-all duration-300 ${social.color}`}
                    aria-label={social.label}
                  >
                    <social.icon size={20} />
                  </a>
                ))}
              </div>
            </div>

            <div
              className="animate-fadeInUp"
              style={{ animationDelay: "100ms" }}
            >
              <h4 className="text-lg font-bold mb-6 text-gray-800 flex items-center gap-2">
                <span className="w-2 h-2 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full"></span>
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
                    <a
                      href={item.path}
                      className="text-gray-600 hover:text-blue-600 transition-all duration-300 flex items-center gap-1 group font-medium"
                      onMouseEnter={() => setHoveredLink(`service-${idx}`)}
                      onMouseLeave={() => setHoveredLink(null)}
                    >
                      {hoveredLink === `service-${idx}` && (
                        <ArrowRight size={16} className="animate-pulse" />
                      )}
                      <span className="group-hover:translate-x-1 transition-transform">
                        {item.name}
                      </span>
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            <div
              className="animate-fadeInUp"
              style={{ animationDelay: "200ms" }}
            >
              <h4 className="text-lg font-bold mb-6 text-gray-800 flex items-center gap-2">
                <span className="w-2 h-2 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full"></span>
                Company
              </h4>
              <ul className="space-y-3">
                {[
                  { name: "About Us", path: "/about" },
                  { name: "Blog", path: "/blog" },
                  { name: "Contact", path: "/contact" },
                  { name: "Pricing", path: "/pricing" },
                ].map((item, idx) => (
                  <li key={idx}>
                    <a
                      href={item.path}
                      className="text-gray-600 hover:text-purple-600 transition-all duration-300 flex items-center gap-1 group font-medium"
                      onMouseEnter={() => setHoveredLink(`company-${idx}`)}
                      onMouseLeave={() => setHoveredLink(null)}
                    >
                      {hoveredLink === `company-${idx}` && (
                        <ArrowRight size={16} className="animate-pulse" />
                      )}
                      <span className="group-hover:translate-x-1 transition-transform">
                        {item.name}
                      </span>
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            <div
              className="animate-fadeInUp"
              style={{ animationDelay: "300ms" }}
            >
              <h4 className="text-lg font-bold mb-6 text-gray-800 flex items-center gap-2">
                <span className="w-2 h-2 bg-gradient-to-r from-pink-500 to-orange-500 rounded-full"></span>
                Contact
              </h4>
              <ul className="space-y-4">
                <li>
                  <a
                    href="mailto:info@cyvora.com"
                    className="flex items-start gap-3 group"
                  >
                    <div className="p-2 bg-gradient-to-br from-blue-100 to-blue-50 rounded-lg group-hover:shadow-md transition-all">
                      <Mail size={18} className="text-blue-600" />
                    </div>
                    <div className="flex-1">
                      <p className="text-sm text-gray-500">Email</p>
                      <p className="text-gray-700 font-medium group-hover:text-blue-600 transition-colors">
                        info@cyvora.com
                      </p>
                    </div>
                  </a>
                </li>
                <li>
                  <a
                    href="tel:+15551234567"
                    className="flex items-start gap-3 group"
                  >
                    <div className="p-2 bg-gradient-to-br from-purple-100 to-purple-50 rounded-lg group-hover:shadow-md transition-all">
                      <Phone size={18} className="text-purple-600" />
                    </div>
                    <div className="flex-1">
                      <p className="text-sm text-gray-500">Phone</p>
                      <p className="text-gray-700 font-medium group-hover:text-purple-600 transition-colors">
                        +1 (555) 123-4567
                      </p>
                    </div>
                  </a>
                </li>
                <li>
                  <div className="flex items-start gap-3">
                    <div className="p-2 bg-gradient-to-br from-pink-100 to-pink-50 rounded-lg">
                      <MapPin size={18} className="text-pink-600" />
                    </div>
                    <div className="flex-1">
                      <p className="text-sm text-gray-500">Location</p>
                      <p className="text-gray-700 font-medium">
                        123 Tech Street,
                        <br />
                        Silicon Valley
                      </p>
                    </div>
                  </div>
                </li>
              </ul>
            </div>
          </div>

          <div className="border-t border-gradient-to-r from-blue-200 via-purple-200 to-pink-200 pt-8">
            <div className="flex flex-col md:flex-row justify-between items-center">
              <p className="text-gray-600 font-medium mb-4 md:mb-0 animate-fadeInUp">
                &copy; 2024 Cyvora. All rights reserved.
              </p>
              <div
                className="flex gap-6 animate-fadeInUp"
                style={{ animationDelay: "100ms" }}
              >
                <a
                  href="#"
                  className="text-sm text-gray-600 hover:text-blue-600 transition-colors font-medium"
                >
                  Privacy Policy
                </a>
                <a
                  href="#"
                  className="text-sm text-gray-600 hover:text-blue-600 transition-colors font-medium"
                >
                  Terms of Service
                </a>
                <a
                  href="#"
                  className="text-sm text-gray-600 hover:text-blue-600 transition-colors font-medium"
                >
                  Cookie Policy
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
