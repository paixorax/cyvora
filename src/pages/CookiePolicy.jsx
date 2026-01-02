import { useState, useEffect, useRef } from "react";
import { Cookie, Mail, Phone, MapPin } from "lucide-react";

const AnimatedText = ({ text, className = "", delay = 0 }) => {
  const [isVisible, setIsVisible] = useState(false);
  const elementRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(entry.isIntersecting);
      },
      { threshold: 0.1 }
    );

    if (elementRef.current) {
      observer.observe(elementRef.current);
    }

    return () => observer.disconnect();
  }, []);

  let charCount = 0;

  return (
    <span ref={elementRef} className={className}>
      {text.split(" ").map((word, wordIndex) => (
        <span key={wordIndex} className="inline-block whitespace-nowrap mr-[0.25em]">
          {word.split("").map((char, index) => {
            const currentDelay = delay + charCount * 40;
            charCount++;
            return (
              <span
                key={index}
                style={{
                  display: "inline-block",
                  opacity: isVisible ? 1 : 0,
                  transform: isVisible
                    ? "translateY(0) scale(1)"
                    : "translateY(20px) scale(0.95)",
                  transition: `all 0.6s ease-out ${currentDelay}ms`,
                }}
              >
                {char}
              </span>
            );
          })}
        </span>
      ))}
    </span>
  );
};

const CookiePolicy = () => {
  return (
    <div className="bg-(--body-bg)">
      {/* HERO SECTION - MATCHING HOME.JSX */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <img
            src="/HeroVideo.jpg"
            alt="Cookie Policy Background"
            className="absolute inset-0 w-full h-full object-cover"
          />
          {/* Dark overlay for better text readability */}
          <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/60"></div>
        </div>
        
        <div className="absolute inset-0 opacity-20 pointer-events-none">
          <div className="absolute top-20 left-20 w-96 h-96 bg-(--accent-copper) rounded-full mix-blend-overlay filter blur-3xl animate-blob"></div>
          <div className="absolute bottom-10 right-20 w-96 h-96 bg-(--accent-copper) rounded-full mix-blend-overlay filter blur-3xl animate-blob animation-delay-2000"></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white -mt-10">
          <div className="inline-flex items-center justify-center p-4 mb-8 rounded-2xl bg-white/10 backdrop-blur-md border border-white/20 shadow-xl animate-fadeInUp">
            <Cookie size={48} className="text-(--accent-copper)" />
          </div>
          <h1 className="text-4xl md:text-6xl font-black mb-6 leading-tight tracking-tight drop-shadow-2xl text-white">
            <span className="text-white">
              <AnimatedText text="Cookie " delay={0} />
            </span>
            <span className="text-(--accent-copper)">
              <AnimatedText text="Policy" delay={500} />
            </span>
          </h1>
          <p className="text-xl md:text-2xl max-w-3xl mx-auto font-medium opacity-90 leading-relaxed drop-shadow-lg text-white/90">
            <AnimatedText text="Transparency regarding how we optimize your browsing experience through digital identifiers." delay={1000} />
          </p>
        </div>
      </section>

      {/* CONTENT AREA */}
      <section className="py-24 relative overflow-hidden">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="bg-white rounded-[3rem] shadow-2xl border border-black/5 p-8 md:p-16 animate-fadeInUp">
            <div className="space-y-10">
              <div className="flex items-center gap-6 border-b border-gray-100 pb-8">
                <div className="p-5 bg-(--accent-copper)/10 rounded-2xl text-(--accent-copper)">
                  <Cookie size={40} />
                </div>
                <div>
                  <h2 className="text-4xl font-bold text-(--heading-dark)">Cookie Standards</h2>
                  <p className="text-(--body-grey) font-semibold mt-1">Version 1.0 | January 2025</p>
                </div>
              </div>

              <div className="space-y-8 text-xl leading-relaxed text-(--body-grey)">
                <p>
                  This website utilizes cookies and similar tracking technologies to enhance performance, analyze traffic patterns, and provide a personalized experience for our users.
                </p>

                <div className="space-y-4">
                  <h3 className="text-3xl font-bold text-(--heading-dark)">Definition of Cookies</h3>
                  <p>
                    Cookies are small text identifiers stored on your device that help us recognize your browser, maintain session security, and remember your interface preferences across multiple visits.
                  </p>
                </div>

                <div className="space-y-4">
                  <h3 className="text-3xl font-bold text-(--heading-dark)">Our Cookie Implementation</h3>
                  <ul className="space-y-4 list-none p-0">
                    <li className="flex items-start gap-4 p-4 bg-(--body-bg) rounded-2xl">
                      <div className="mt-2 w-2 h-2 bg-(--accent-copper) rounded-full shrink-0"></div>
                      <span><span className="font-bold text-(--heading-dark)">Essential Cookies:</span> Mandatory for platform security and core functionality.</span>
                    </li>
                    <li className="flex items-start gap-4 p-4 bg-(--body-bg) rounded-2xl">
                      <div className="mt-2 w-2 h-2 bg-(--accent-copper) rounded-full shrink-0"></div>
                      <span><span className="font-bold text-(--heading-dark)">Performance Analytics:</span> Help us understand infrastructure load and user engagement.</span>
                    </li>
                    <li className="flex items-start gap-4 p-4 bg-(--body-bg) rounded-2xl">
                      <div className="mt-2 w-2 h-2 bg-(--accent-copper) rounded-full shrink-0"></div>
                      <span><span className="font-bold text-(--heading-dark)">User Preferences:</span> Store your language and UI settings for a seamless workflow.</span>
                    </li>
                  </ul>
                </div>

                <div className="space-y-4">
                  <h3 className="text-3xl font-bold text-(--heading-dark)">Control & Management</h3>
                  <p>
                    You maintain full control over your cookie settings. While most browsers accept cookies by default, you can configure your browser to decline them. Please note that disabling essential cookies may impact platform functionality.
                  </p>
                </div>

                {/* CONTACT INFO CARD */}
                <div className="mt-16 p-8 bg-[#B36433] rounded-[2.5rem] shadow-2xl relative overflow-hidden group text-white">
                  <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full -mr-32 -mt-32 blur-3xl transition-transform duration-1000 group-hover:scale-110"></div>
                  <div className="relative z-10">
                    <h3 className="text-2xl font-bold mb-8 flex items-center gap-3">
                      Data Privacy Team
                    </h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                      <div className="flex items-center gap-4 bg-white/10 p-4 rounded-2xl">
                        <Mail className="shrink-0" size={24} />
                        <div>
                          <p className="text-xs opacity-70 uppercase font-bold">Email</p>
                          <p className="font-bold">info@cyvoratech.com</p>
                        </div>
                      </div>
                      <div className="flex items-center gap-4 bg-white/10 p-4 rounded-2xl md:col-span-2">
                        <MapPin className="shrink-0" size={24} />
                        <div>
                          <p className="text-xs opacity-70 uppercase font-bold">Location</p>
                          <p className="font-bold">Tashkent, Uzbekistan</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default CookiePolicy;
