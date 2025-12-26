import {
  MessageSquare,
  Phone,
  Globe,
  Shield,
  Zap,
  Users,
  ArrowRight,
  CheckCircle,
  Activity,
  ArrowRightCircle,
} from "lucide-react";
import { useEffect, useRef, useState } from "react";

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

  return (
    <span ref={elementRef} className={className}>
      {text.split("").map((char, index) => (
        <span
          key={index}
          style={{
            display: "inline-block",
            opacity: isVisible ? 1 : 0,
            transform: isVisible
              ? "translateY(0) scale(1)"
              : "translateY(20px) scale(0.95)",
            transition: `all 0.3s ease-out ${delay + index * 20}ms`,
          }}
        >
          {char === " " ? "\u00A0" : char}
        </span>
      ))}
    </span>
  );
};

const SlideInCard = ({ children, delay = 0 }) => {
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

  return (
    <div
      ref={elementRef}
      style={{
        opacity: isVisible ? 1 : 0,
        transform: isVisible
          ? "translateX(0) rotateY(0) scale(1)"
          : "translateX(-120px) rotateY(35deg) scale(0.85)",
        transition: `all 0.9s cubic-bezier(0.23, 1, 0.320, 1) ${delay}ms`,
        perspective: "1200px",
        transformStyle: "preserve-3d",
      }}
    >
      {children}
    </div>
  );
};

const SplitCornerCard = ({ children, index = 0, delay = 0 }) => {
  const [isVisible, setIsVisible] = useState(false);
  const containerRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(entry.isIntersecting);
      },
      { threshold: 0.1 }
    );

    if (containerRef.current) {
      observer.observe(containerRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const getCornerTransform = () => {
    const isMobile = typeof window !== "undefined" && window.innerWidth < 768;

    if (isMobile) {
      return isVisible
        ? "translateY(0) scale(1)"
        : "translateY(50px) scale(0.95)";
    }

    if (isVisible) return "translate(0, 0) rotateX(0) rotateY(0) scale(1)";

    // Staggered entry from different directions
    if (index === 0) return "translate(-100vw, 0) rotateY(30deg) scale(0.9)"; // From Left
    if (index === 1) return "translate(100vw, 0) rotateY(-30deg) scale(0.9)"; // From Right
    if (index === 2) return "translate(0, -100vh) rotateX(30deg) scale(0.9)"; // From Top
    return "translate(0, 100vh) rotateX(-30deg) scale(0.9)"; // From Bottom
  };

  return (
    <div ref={containerRef} style={{ perspective: "2000px" }}>
      <div
        style={{
          opacity: isVisible ? 1 : 0,
          transform: getCornerTransform(),
          transition: `all 1.2s cubic-bezier(0.2, 0.8, 0.2, 1) ${delay}ms`,
          transformStyle: "preserve-3d",
        }}
      >
        {children}
      </div>
    </div>
  );
};

const ScatterCard = ({ children, index = 0, delay = 0 }) => {
  const [isVisible, setIsVisible] = useState(false);
  const [isHovering, setIsHovering] = useState(false);
  const containerRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(entry.isIntersecting);
      },
      { threshold: 0.1 }
    );

    if (containerRef.current) {
      observer.observe(containerRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const handleMouseEnter = () => {
    setIsHovering(true);
  };

  const handleMouseLeave = () => {
    setIsHovering(false);
  };

  const getStyle = () => {
    const isMobile = typeof window !== "undefined" && window.innerWidth < 768;

    if (isMobile) {
      return {
        opacity: isVisible ? 1 : 0,
        transform: isVisible ? "translateY(0)" : "translateY(20px)",
        transition: `all 0.4s ease-out ${delay}ms`,
      };
    }

    if (!isVisible) {
      const isLeft = index === 0;
      const isRight = index === 2;
      let distance = isLeft ? -300 : isRight ? 300 : 0;
      let rotation = isLeft ? -40 : isRight ? 40 : 0;

      return {
        opacity: 0,
        transform: `translateX(${distance}px) scale(0.5) rotateY(${rotation}deg)`,
        transition: `all 0.6s cubic-bezier(0.16, 1, 0.3, 1) ${delay}ms`,
        perspective: "1500px",
        transformStyle: "preserve-3d",
      };
    }

    if (isHovering) {
      return {
        opacity: 1,
        transform: "scale(1.1)",
        transition: "all 0.2s ease-out",
        perspective: "1500px",
        transformStyle: "preserve-3d",
        zIndex: 10,
        animation: "none",
      };
    }

    return {
      opacity: 1,
      transform: "translateX(0) translateY(0) scale(1) rotateZ(0)",
      transition: `all 0.6s cubic-bezier(0.16, 1, 0.3, 1) ${delay}ms`,
      perspective: "1500px",
      transformStyle: "preserve-3d",
      animation: `scatterCard${index} 11s infinite cubic-bezier(0.4, 0.0, 0.2, 1)`,
      animationPlayState: "running",
    };
  };

  return (
    <>
      <style>{`
        @keyframes scatterCard0 {
          0% {
            transform: translate(-300px, -200px) scale(0.5) rotateZ(-45deg);
          }
          18% {
            transform: translate(0, 0) scale(1) rotateZ(0deg);
          }
          36% {
            transform: translate(0, 0) scale(1) rotateZ(0deg);
          }
          100% {
            transform: translate(-300px, -200px) scale(0.5) rotateZ(-45deg);
          }
        }

        @keyframes scatterCard1 {
          0% {
            transform: translate(0, -280px) scale(0.4) rotateZ(0deg);
          }
          18% {
            transform: translate(0, 0) scale(1) rotateZ(0deg);
          }
          36% {
            transform: translate(0, 0) scale(1) rotateZ(0deg);
          }
          100% {
            transform: translate(0, -280px) scale(0.4) rotateZ(0deg);
          }
        }

        @keyframes scatterCard2 {
          0% {
            transform: translate(300px, -200px) scale(0.5) rotateZ(45deg);
          }
          18% {
            transform: translate(0, 0) scale(1) rotateZ(0deg);
          }
          36% {
            transform: translate(0, 0) scale(1) rotateZ(0deg);
          }
          100% {
            transform: translate(300px, -200px) scale(0.5) rotateZ(45deg);
          }
        }
      `}</style>
      <div
        ref={containerRef}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        style={{ perspective: "1500px" }}
      >
        <div style={getStyle()}>{children}</div>
      </div>
    </>
  );
};

const Home = () => {
  const videoRef = useRef(null);

  useEffect(() => {
    const video = videoRef.current;
    if (video) {
      video.play().catch((e) => {
        console.log("Autoplay prevented:", e);
      });
    }
  }, []);

  return (
    <div className="pt-24">
      {/* Full Screen Hero Section with Video */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Video Background */}
        <div className="absolute inset-0 z-0">
          <video
            ref={videoRef}
            autoPlay
            loop
            muted
            playsInline
            preload="auto"
            poster="/HeroVideo.jpg"
            className="absolute inset-0 w-full h-full object-cover"
          >
            <source src="/HeroVideo2.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>

          {/* Dark overlay for better text readability */}
          <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/30 to-black/50"></div>
        </div>

        {/* CONTENT */}
        {/* <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center"> */}
        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center -mt-10">
          {/* heading */}
          <h1 className="text-3xl md:text-5xl lg:text-6xl font-black mb-6 leading-tight tracking-tight">
            <span className="block mb-3 text-white font-extrabold tracking-tight">
              <AnimatedText text="Transform " delay={0} />
              <AnimatedText text="Your " delay={100} />
              <AnimatedText text="Telecom" delay={200} />
            </span>

            <span className="block text-white font-extrabold tracking-tight">
              <AnimatedText text="Business" delay={300} />
            </span>
          </h1>

          {/* description */}
          <p className="text-lg md:text-xl text-[var(--text-off-white)]/80 mb-8 max-w-2xl mx-auto font-light">
            <AnimatedText
              text="Enterprise-grade communication solutions with global reach"
              delay={100}
            />
          </p>

          {/* button */}
          <div className="animate-fadeInUp animation-delay-400">
            <a
              href="#services"
              className="group relative inline-flex items-center justify-center px-12 py-6 rounded-2xl font-bold text-lg text-white overflow-hidden backdrop-blur-sm"
            >
              {/* Animated background color */}
              <div className="absolute inset-0 bg-[var(--accent-copper)] rounded-2xl opacity-100 group-hover:opacity-95 transition-all duration-300"></div>

              {/* Shimmer effect overlay */}
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent opacity-0 group-hover:opacity-30 translate-x-[-100%] group-hover:translate-x-[100%] transition-all duration-1000 rounded-2xl"></div>

              {/* Glow effect */}
              <div className="absolute inset-0 rounded-2xl bg-white/5 group-hover:bg-white/10 transition-all duration-300"></div>

              {/* Border with enhanced glow */}
              <div className="absolute inset-0 rounded-2xl border-2 border-white/20 group-hover:border-white/40 transition-all duration-300 group-hover:shadow-2xl group-hover:shadow-[var(--accent-copper)]/40"></div>

              {/* Content */}
              <span className="relative z-10 flex items-center gap-3 group-hover:gap-5 transition-all duration-300">
                {/* Animated Icon with orbiting effect */}
                <span className="relative flex items-center justify-center w-7 h-7">
                  {/* Rotating background circle */}
                  <svg
                    className="absolute w-7 h-7"
                    style={{
                      animation: "spin 2s linear infinite",
                    }}
                    fill="none"
                    viewBox="0 0 24 24"
                  >
                    <circle
                      cx="12"
                      cy="12"
                      r="10"
                      stroke="currentColor"
                      strokeWidth="2"
                      opacity="0.4"
                      strokeDasharray="10 5"
                    />
                  </svg>

                  {/* Main lightning icon with color shift */}
                  <svg
                    className="relative w-6 h-6 group-hover:translate-y-[-4px] transition-transform duration-300"
                    style={{
                      animation: "colorShift 3s ease-in-out infinite",
                      filter: "drop-shadow(0 0 6px var(--accent-copper))",
                    }}
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z" />
                  </svg>

                  {/* Orbiting particles */}
                  <span
                    className="absolute w-1.5 h-1.5 rounded-full"
                    style={{
                      background: "var(--accent-copper)",
                      animation: "orbit 4s linear infinite",
                      top: "50%",
                      left: "50%",
                      boxShadow: "0 0 6px var(--accent-copper)",
                    }}
                  />
                  <span
                    className="absolute w-1 h-1 rounded-full"
                    style={{
                      background: "rgba(34, 197, 94, 0.7)",
                      animation: "orbit 4s linear infinite 1.33s",
                      top: "50%",
                      left: "50%",
                    }}
                  />
                  <span
                    className="absolute w-1 h-1 rounded-full"
                    style={{
                      background: "rgba(20, 184, 166, 0.5)",
                      animation: "orbit 4s linear infinite 2.66s",
                      top: "50%",
                      left: "50%",
                    }}
                  />
                </span>
                <span className="text-base tracking-wide">
                  Explore Our Solutions
                </span>
                <ArrowRight
                  size={24}
                  className="group-hover:translate-x-3 group-hover:rotate-45 transition-all duration-300"
                  style={{
                    filter: "drop-shadow(0 0 4px var(--accent-copper))",
                  }}
                />
              </span>

              <style>{`
                @keyframes spin {
                  from {
                    transform: rotate(0deg);
                  }
                  to {
                    transform: rotate(360deg);
                  }
                }

                @keyframes colorShift {
                  0%, 100% {
                    filter: drop-shadow(0 0 4px var(--accent-copper));
                    opacity: 1;
                  }
                  50% {
                    filter: drop-shadow(0 0 8px var(--accent-copper));
                    opacity: 0.95;
                  }
                }

                @keyframes orbit {
                  from {
                    transform: translate(-8px, 0) rotate(0deg) translateX(8px) rotate(0deg);
                  }
                  to {
                    transform: translate(-8px, 0) rotate(360deg) translateX(8px) rotate(-360deg);
                  }
                }
              `}</style>

              {/* Outer glow for depth */}
              <div className="absolute -inset-0.5 bg-[var(--accent-copper)] rounded-xl opacity-20 blur-lg group-hover:opacity-40 transition-all duration-300 -z-10"></div>
            </a>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-25 left-1/2 transform -translate-x-1/2 animate-bounce z-20">
          <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center hover:border-white/50 transition-colors">
            <div className="w-1 h-3 bg-white/60 rounded-full mt-2 animate-pulse"></div>
          </div>
        </div>
      </section>

      {/* Main Content Sections */}
      <div id="services" className="bg-[var(--body-bg)]">
        {/* Services Section */}
        <section className="py-24 relative overflow-hidden bg-[var(--body-bg)]">
          {/* Background overlay */}
          <div className="absolute inset-0 bg-gradient-to-b from-[var(--body-bg)] via-transparent to-[var(--body-bg)]"></div>

          <style>{`
            .bg-grid-slate-100 {
              background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 32 32' width='32' height='32' fill='none' stroke='rgb(241 245 249 / 0.1)'%3E%3Cpath d='M0 .5H31.5V32'/%3E%3C/svg%3E");
            }
          `}</style>
          <div className="absolute top-0 right-0 w-96 h-96 bg-[var(--accent-copper)]/5 rounded-full mix-blend-multiply filter blur-3xl opacity-20 -mr-48 animate-pulse"></div>
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-[var(--accent-copper)]/5 rounded-full mix-blend-multiply filter blur-3xl opacity-20 -ml-48 animate-pulse"></div>

          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="text-center mb-20 animate-fadeInUp">
              <div
                className="inline-block mb-6 px-5 py-2 rounded-full shadow-sm backdrop-blur-md"
                style={{ backgroundColor: "#B36433" }}
              >
                <span className="flex items-center gap-2 text-white font-semibold tracking-wider uppercase text-xs lg:text-sm">
                  <span className="drop-shadow-[0_0_4px_rgba(255,255,255,0.6)]">
                    ⚡
                  </span>
                  Our Expertise
                </span>
              </div>

              <h2 className="text-4xl md:text-5xl lg:text-6xl font-black mb-6 text-[var(--heading-dark)] tracking-tight leading-tight">
                <AnimatedText text="Comprehensive " delay={0} />
                <span className="text-[var(--accent-copper)]">
                  <AnimatedText text="Telecom Solutions" delay={150} />
                </span>
              </h2>
              <p className="text-lg md:text-xl text-[var(--body-grey)] max-w-3xl mx-auto font-light leading-relaxed">
                <AnimatedText
                  text="Empowering modern businesses with next-generation communication infrastructure. Choose from SMS, Voice, DID Numbers, and custom Software solutions."
                  delay={300}
                />
              </p>
            </div>

            <div
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
              style={{ perspective: "1200px" }}
            >
              {/* SMS Solutions Card */}
              <SplitCornerCard index={0} delay={0}>
                <div
                  className="group relative p-6 md:p-8 rounded-3xl cursor-pointer bg-white border border-black/5 shadow-md hover:shadow-xl transition-all duration-500 hover:-translate-y-2 overflow-hidden"
                  style={{
                    transformStyle: "preserve-3d",
                  }}
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-[var(--accent-copper)]/10 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  <div className="relative z-10">
                    <div className="w-14 h-14 md:w-16 md:h-16 mb-5 md:mb-6 rounded-2xl bg-[var(--accent-copper)] flex items-center justify-center shadow-lg shadow-[var(--accent-copper)]/20 group-hover:scale-110 transition-transform duration-500">
                      <MessageSquare className="text-white" size={32} />
                    </div>
                    <h3 className="text-xl md:text-2xl font-bold mb-3 md:mb-4 text-[var(--heading-dark)] group-hover:text-[var(--accent-copper)] transition-colors">
                      SMS Solutions
                    </h3>
                    <p className="text-[var(--body-grey)] mb-5 md:mb-6 leading-relaxed text-sm">
                      Bulk SMS, A2P messaging, and SMS gateway APIs designed for
                      global reach and high deliverability.
                    </p>
                    <a
                      href="/services/sms"
                      className="text-[var(--accent-copper)] font-semibold flex items-center hover:gap-2 transition-all group/link text-sm uppercase tracking-wide"
                    >
                      Learn More{" "}
                      <ArrowRight
                        size={16}
                        className="ml-1 group-hover/link:translate-x-1 transition-transform"
                      />
                    </a>
                  </div>
                </div>
              </SplitCornerCard>

              {/* Voice Services Card */}
              <SplitCornerCard index={1} delay={200}>
                <div
                  className="group relative p-6 md:p-8 rounded-3xl cursor-pointer bg-white border border-black/5 shadow-md hover:shadow-xl transition-all duration-500 hover:-translate-y-2 overflow-hidden"
                  style={{
                    transformStyle: "preserve-3d",
                  }}
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-[var(--accent-copper)]/10 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  <div className="relative z-10">
                    <div className="w-14 h-14 md:w-16 md:h-16 mb-5 md:mb-6 rounded-2xl bg-[var(--accent-copper)] flex items-center justify-center shadow-lg shadow-[var(--accent-copper)]/20 group-hover:scale-110 transition-transform duration-500">
                      <Phone className="text-white" size={32} />
                    </div>
                    <h3 className="text-xl md:text-2xl font-bold mb-3 md:mb-4 text-[var(--heading-dark)] group-hover:text-[var(--accent-copper)] transition-colors">
                      Voice Services
                    </h3>
                    <p className="text-[var(--body-grey)] mb-5 md:mb-6 leading-relaxed text-sm">
                      Crystal clear Cloud PBX, IVR systems, call recording, and
                      robust voice APIs for your business.
                    </p>
                    <a
                      href="/services/voice"
                      className="text-[var(--accent-copper)] font-semibold flex items-center hover:gap-2 transition-all group/link text-sm uppercase tracking-wide"
                    >
                      Learn More{" "}
                      <ArrowRight
                        size={16}
                        className="ml-1 group-hover/link:translate-x-1 transition-transform"
                      />
                    </a>
                  </div>
                </div>
              </SplitCornerCard>

              {/* DID Numbers Card */}
              <SplitCornerCard index={2} delay={400}>
                <div
                  className="group relative p-6 md:p-8 rounded-3xl cursor-pointer bg-white border border-black/5 shadow-md hover:shadow-xl transition-all duration-500 hover:-translate-y-2 overflow-hidden"
                  style={{
                    transformStyle: "preserve-3d",
                  }}
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-[var(--accent-copper)]/10 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  <div className="relative z-10">
                    <div className="w-14 h-14 md:w-16 md:h-16 mb-5 md:mb-6 rounded-2xl bg-[var(--accent-copper)] flex items-center justify-center shadow-lg shadow-[var(--accent-copper)]/20 group-hover:scale-110 transition-transform duration-500">
                      <Globe className="text-white" size={32} />
                    </div>
                    <h3 className="text-xl md:text-2xl font-bold mb-3 md:mb-4 text-[var(--heading-dark)] group-hover:text-[var(--accent-copper)] transition-colors">
                      DID Numbers
                    </h3>
                    <p className="text-[var(--body-grey)] mb-5 md:mb-6 leading-relaxed text-sm">
                      Instant access to local, mobile, and toll-free numbers in
                      over 40+ countries worldwide seamless connectivity.
                    </p>
                    <a
                      href="/services/did"
                      className="text-[var(--accent-copper)] font-semibold flex items-center hover:gap-2 transition-all group/link text-sm uppercase tracking-wide"
                    >
                      Learn More{" "}
                      <ArrowRight
                        size={16}
                        className="ml-1 group-hover/link:translate-x-1 transition-transform"
                      />
                    </a>
                  </div>
                </div>
              </SplitCornerCard>

              {/* Software Solutions Card */}
              <SplitCornerCard index={3} delay={600}>
                <div
                  className="group relative p-6 md:p-8 rounded-3xl cursor-pointer bg-white border border-black/5 shadow-md hover:shadow-xl transition-all duration-500 hover:-translate-y-2 overflow-hidden"
                  style={{
                    transformStyle: "preserve-3d",
                  }}
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-[var(--accent-copper)]/10 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  <div className="relative z-10">
                    <div className="w-14 h-14 md:w-16 md:h-16 mb-5 md:mb-6 rounded-2xl bg-[var(--accent-copper)] flex items-center justify-center shadow-lg shadow-[var(--accent-copper)]/20 group-hover:scale-110 transition-transform duration-500">
                      <Zap className="text-white" size={32} />
                    </div>
                    <h3 className="text-xl md:text-2xl font-bold mb-3 md:mb-4 text-[var(--heading-dark)] group-hover:text-[var(--accent-copper)] transition-colors">
                      Software Solutions
                    </h3>
                    <p className="text-[var(--body-grey)] mb-5 md:mb-6 leading-relaxed text-sm">
                      Custom telecom platforms, white-label solutions, and
                      enterprise-grade integrations.
                    </p>
                    <a
                      href="/services/software"
                      className="text-[var(--accent-copper)] font-semibold flex items-center hover:gap-2 transition-all group/link text-sm uppercase tracking-wide"
                    >
                      Learn More{" "}
                      <ArrowRight
                        size={16}
                        className="ml-1 group-hover/link:translate-x-1 transition-transform"
                      />
                    </a>
                  </div>
                </div>
              </SplitCornerCard>
            </div>
          </div>
        </section>

        {/* Why Choose Us Section */}
        <section className="py-24 relative overflow-hidden bg-[var(--accent-copper)]">
          {/* Background overlay with gradient */}
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-white/5 to-transparent"></div>

          {/* Animated background elements */}
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            <div className="absolute top-0 left-1/4 w-96 h-96 bg-white/10 rounded-full mix-blend-overlay filter blur-3xl animate-blob"></div>
            <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-white/10 rounded-full mix-blend-overlay filter blur-3xl animate-blob animation-delay-2000"></div>
          </div>

          <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-20 animate-fadeInUp">
              <div className="inline-block mb-6 px-5 py-2 rounded-full bg-white/10 border border-white/20 shadow-sm backdrop-blur-md">
                <span className="text-white font-semibold tracking-wider uppercase text-xs lg:text-sm">
                  🛡️ Why Choose Cyvora
                </span>
              </div>
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-black mb-6 text-white tracking-tight leading-tight">
                <AnimatedText text="Built for " delay={0} />
                <span className="text-white/90">
                  <AnimatedText text="Scale & Reliability" delay={100} />
                </span>
              </h2>
              <p className="text-lg md:text-xl text-white/80 max-w-3xl mx-auto font-light leading-relaxed">
                <AnimatedText
                  text="Experience enterprise-grade infrastructure with 99.99% uptime, dedicated 24/7 support, and global reach across 190+ countries. Built for modern communication needs."
                  delay={200}
                />
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12">
              {/* Feature 1 */}
              <ScatterCard index={0} delay={0}>
                <div className="group relative p-8 rounded-3xl bg-white border border-black/5 shadow-md hover:shadow-xl hover:bg-white transition-all duration-500 hover:-translate-y-2 overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-br from-[var(--accent-copper)]/10 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

                  <div className="relative z-10">
                    <div className="w-16 h-16 mb-8 rounded-2xl bg-[var(--accent-copper)] flex items-center justify-center shadow-lg shadow-[var(--accent-copper)]/20 group-hover:scale-110 transition-transform duration-500">
                      <Shield className="text-white" size={32} />
                    </div>

                    <h3 className="text-2xl font-bold text-[var(--heading-dark)] mb-4 group-hover:text-[var(--accent-copper)] transition-colors">
                      99.99% Uptime SLA
                    </h3>

                    <p className="text-[var(--body-grey)] leading-relaxed mb-6">
                      Our geo-redundant infrastructure ensures your business
                      stays connected 24/7/365 with guaranteed reliability and
                      automatic failover.
                    </p>

                    <ul className="space-y-2">
                      <li className="flex items-center text-sm text-[var(--body-grey)]">
                        <CheckCircle
                          size={16}
                          className="mr-2 text-[var(--accent-copper)]"
                        />{" "}
                        Geo-redundant servers
                      </li>
                      <li className="flex items-center text-sm text-[var(--body-grey)]">
                        <CheckCircle
                          size={16}
                          className="mr-2 text-[var(--accent-copper)]"
                        />{" "}
                        Automatic failover
                      </li>
                      <li className="flex items-center text-sm text-[var(--body-grey)]">
                        <CheckCircle
                          size={16}
                          className="mr-2 text-[var(--accent-copper)]"
                        />{" "}
                        Real-time monitoring
                      </li>
                    </ul>
                  </div>
                </div>
              </ScatterCard>

              {/* Feature 2 */}
              <ScatterCard index={1} delay={100}>
                <div className="group relative p-8 rounded-3xl bg-white border border-black/5 shadow-md hover:shadow-xl hover:bg-white transition-all duration-500 hover:-translate-y-2 overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-br from-[var(--accent-copper)]/10 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

                  <div className="relative z-10">
                    <div className="w-16 h-16 mb-8 rounded-2xl bg-[var(--accent-copper)] flex items-center justify-center shadow-lg shadow-[var(--accent-copper)]/20 group-hover:scale-110 transition-transform duration-500">
                      <Users className="text-white" size={32} />
                    </div>

                    <h3 className="text-2xl font-bold text-[var(--heading-dark)] mb-4 group-hover:text-[var(--accent-copper)] transition-colors">
                      Dedicated Support
                    </h3>

                    <p className="text-[var(--body-grey)] leading-relaxed mb-6">
                      Get access to our team of telecom experts available round
                      the clock to help you with integration, debugging, and
                      optimization.
                    </p>

                    <ul className="space-y-2">
                      <li className="flex items-center text-sm text-[var(--body-grey)]">
                        <CheckCircle
                          size={16}
                          className="mr-2 text-[var(--accent-copper)]"
                        />{" "}
                        24/7 Technical support
                      </li>
                      <li className="flex items-center text-sm text-[var(--body-grey)]">
                        <CheckCircle
                          size={16}
                          className="mr-2 text-[var(--accent-copper)]"
                        />{" "}
                        Dedicated account manager
                      </li>
                      <li className="flex items-center text-sm text-[var(--body-grey)]">
                        <CheckCircle
                          size={16}
                          className="mr-2 text-[var(--accent-copper)]"
                        />{" "}
                        &lt; 15min response time
                      </li>
                    </ul>
                  </div>
                </div>
              </ScatterCard>

              {/* Feature 3 */}
              <ScatterCard index={2} delay={200}>
                <div className="group relative p-8 rounded-3xl bg-white border border-black/5 shadow-md hover:shadow-xl hover:bg-white transition-all duration-500 hover:-translate-y-2 overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-br from-[var(--accent-copper)]/10 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

                  <div className="relative z-10">
                    <div className="w-16 h-16 mb-8 rounded-2xl bg-[var(--accent-copper)] flex items-center justify-center shadow-lg shadow-[var(--accent-copper)]/20 group-hover:scale-110 transition-transform duration-500">
                      <Globe className="text-white" size={32} />
                    </div>

                    <h3 className="text-2xl font-bold text-[var(--heading-dark)] mb-4 group-hover:text-[var(--accent-copper)] transition-colors">
                      Global Reach
                    </h3>

                    <p className="text-[var(--body-grey)] leading-relaxed mb-6">
                      Connect with customers anywhere in the world through our
                      extensive network of direct operator connections in 190+
                      countries.
                    </p>

                    <ul className="space-y-2">
                      <li className="flex items-center text-sm text-[var(--body-grey)]">
                        <CheckCircle
                          size={16}
                          className="mr-2 text-[var(--accent-copper)]"
                        />{" "}
                        40+ Countries covered
                      </li>
                      <li className="flex items-center text-sm text-[var(--body-grey)]">
                        <CheckCircle
                          size={16}
                          className="mr-2 text-[var(--accent-copper)]"
                        />{" "}
                        Direct carrier routes
                      </li>
                      <li className="flex items-center text-sm text-[var(--body-grey)]">
                        <CheckCircle
                          size={16}
                          className="mr-2 text-[var(--accent-copper)]"
                        />{" "}
                        Local number availability
                      </li>
                    </ul>
                  </div>
                </div>
              </ScatterCard>
            </div>
          </div>
        </section>

        {/* Get Started Section*/}
        <section className="py-24 relative overflow-hidden bg-[var(--body-bg)]">
          {/* Animated background blobs */}
          <div className="absolute top-0 left-0 w-96 h-96 bg-[var(--accent-copper)]/5 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob"></div>
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-[var(--accent-copper)]/5 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob animation-delay-2000"></div>

          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
              <div className="animate-fadeInUp">
                <div
                  className="inline-flex items-center mb-6 px-5 py-2 rounded-full shadow-sm backdrop-blur-md"
                  style={{ backgroundColor: "#B36433" }}
                >
                  <ArrowRightCircle className="mr-2 w-4 h-4 text-white" />
                  <span className="text-white font-semibold tracking-wider uppercase text-sm">
                    Start Your Journey
                  </span>
                </div>

                <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 text-[var(--heading-dark)] leading-tight">
                  <span className="block">
                    <AnimatedText text="Ready to Scale Your" delay={0} />
                  </span>

                  <span className="block text-[var(--accent-copper)]">
                    <AnimatedText text=" Business?" delay={100} />
                  </span>
                </h2>

                <p className="text-lg md:text-xl text-[var(--body-grey)] mb-8 leading-relaxed">
                  <AnimatedText
                    text="Join thousands of forward-thinking businesses using our telecom solutions to drive growth and customer engagement. Our platform is designed to scale with your needs, providing reliability and performance you can trust."
                    delay={200}
                  />
                </p>

                <ul className="space-y-3 mb-8">
                  {[
                    "Enterprise-grade security & compliance",
                    "Global coverage in 190+ countries",
                    "Seamless API integration",
                    "24/7 dedicated support team",
                  ].map((item, i) => (
                    <li
                      key={i}
                      className="flex items-center gap-3 text-[var(--body-grey)]"
                    >
                      <CheckCircle
                        className="text-[var(--accent-copper)] flex-shrink-0"
                        size={20}
                      />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>

                <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-10">
                  <div className="p-4 bg-white rounded-xl border border-black/5 shadow-sm">
                    <div className="text-2xl sm:text-3xl font-bold text-[var(--accent-copper)] mb-1">
                      100K+
                    </div>
                    <div className="text-[var(--body-grey)] text-xs uppercase tracking-wider font-semibold">
                      Daily Messages
                    </div>
                  </div>
                  <div className="p-4 bg-white rounded-xl border border-black/5 shadow-sm">
                    <div className="text-2xl sm:text-3xl font-bold text-[var(--accent-copper)] mb-1">
                      1K+
                    </div>
                    <div className="text-[var(--body-grey)] text-xs uppercase tracking-wider font-semibold">
                      Active Customers
                    </div>
                  </div>
                  <div className="p-4 bg-white rounded-xl border border-black/5 shadow-sm">
                    <div className="text-2xl sm:text-3xl font-bold text-[var(--accent-copper)] mb-1">
                      99.9%
                    </div>
                    <div className="text-[var(--body-grey)] text-xs uppercase tracking-wider font-semibold">
                      Uptime SLA
                    </div>
                  </div>
                  <div className="p-4 bg-white rounded-xl border border-black/5 shadow-sm">
                    <div className="text-2xl sm:text-3xl font-bold text-[var(--accent-copper)] mb-1">
                      50+
                    </div>
                    <div className="text-[var(--body-grey)] text-xs uppercase tracking-wider font-semibold">
                      Countries Covered
                    </div>
                  </div>
                </div>

                <a
                  href="/free-trial"
                  className="group relative inline-flex items-center justify-center px-6 py-3 md:px-8 md:py-4 rounded-full font-bold text-base md:text-lg text-white overflow-hidden transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-[var(--accent-copper)]/30"
                >
                  <div className="absolute inset-0 bg-[var(--accent-copper)] transition-all duration-300 group-hover:scale-110"></div>
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700"></div>
                  <span className="relative flex items-center gap-2">
                    Start Your Free Trial
                    <ArrowRight className="w-4 h-4 md:w-5 md:h-5 group-hover:translate-x-1 transition-transform" />
                  </span>
                </a>
              </div>

              <SlideInCard delay={300}>
                <div className="relative animate-fadeInUp animation-delay-400">
                  <div className="absolute -inset-1 bg-gradient-to-br from-[var(--accent-copper)]/40 via-[var(--accent-copper)]/60 to-[var(--accent-copper)]/80 rounded-[2rem] blur-lg opacity-70 group-hover:opacity-100 transition duration-1000 group-hover:duration-200 animate-tilt"></div>
                  <div className="relative rounded-[1.8rem] overflow-hidden shadow-2xl group h-[400px] md:h-[500px]">
                    <img
                      src="/business.jpg"
                      alt="Business Growth"
                      className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent"></div>
                  </div>
                </div>
              </SlideInCard>
            </div>
          </div>
        </section>

        {/* Trusted By Section */}
        <section className="py-20 bg-black relative border-t border-white/10 overflow-hidden">
          <div className="w-full">
            <div className="text-center mb-12 animate-fadeInUp px-4">
              <p className="text-sm font-semibold text-[var(--accent-copper)] uppercase tracking-widest">
                <AnimatedText text="Trusted by Industry Leaders" delay={0} />
              </p>
              <h2 className="text-3xl md:text-4xl font-bold text-white mt-2">
                <AnimatedText
                  text="Powering Global Communications"
                  delay={100}
                />
              </h2>
            </div>

            <div className="relative w-full overflow-hidden">
              <style>{`
                @keyframes marquee {
                  0% { transform: translateX(0); }
                  100% { transform: translateX(-50%); }
                }
                .animate-marquee {
                  animation: marquee 30s linear infinite;
                }
                .animate-marquee:hover {
                  animation-play-state: paused;
                }
              `}</style>
              <div
                className="flex gap-12 animate-marquee w-max"
                style={{
                  maskImage:
                    "linear-gradient(to right, transparent, black 5%, black 95%, transparent)",
                  WebkitMaskImage:
                    "linear-gradient(to right, transparent, black 5%, black 95%, transparent)",
                }}
              >
                {[
                  ...["MTN", "Vodafone", "Airtel", "Zain", "Ooredoo", "Orange"],
                  ...["MTN", "Vodafone", "Airtel", "Zain", "Ooredoo", "Orange"],
                  ...["MTN", "Vodafone", "Airtel", "Zain", "Ooredoo", "Orange"],
                  ...["MTN", "Vodafone", "Airtel", "Zain", "Ooredoo", "Orange"],
                ].map((brand, index) => (
                  <div
                    key={index}
                    className="w-48 h-24 flex-shrink-0 group p-6 rounded-xl bg-white/5 border border-white/10 hover:bg-white/10 hover:border-[var(--accent-copper)]/50 transition-all duration-300 flex items-center justify-center backdrop-blur-sm"
                  >
                    <div className="text-xl font-bold text-[var(--footer-text)]/60 group-hover:text-white transition-colors duration-300">
                      {brand}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Home;
