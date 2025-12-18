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
  Radio,
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

  const getCornerTransform = () => {
    // Check if mobile (window width < 768px)
    const isMobile = typeof window !== "undefined" && window.innerWidth < 768;

    if (isMobile) {
      return isVisible
        ? "translate(0, 0) scale(1)"
        : "translate(0, 20px) scale(0.95)";
    }

    if (isVisible)
      return "translate(0, 0) rotateX(0) rotateY(0) rotateZ(0) scale(1)";

    if (index === 0)
      return "translate(-280px, -280px) rotateX(55deg) rotateY(55deg) rotateZ(-25deg) scale(0.4)";
    if (index === 1)
      return "translate(280px, -280px) rotateX(55deg) rotateY(-55deg) rotateZ(25deg) scale(0.4)";
    if (index === 2)
      return "translate(-280px, 280px) rotateX(-55deg) rotateY(55deg) rotateZ(25deg) scale(0.4)";
    return "translate(280px, 280px) rotateX(-55deg) rotateY(-55deg) rotateZ(-25deg) scale(0.4)";
  };

  return (
    <div
      ref={elementRef}
      style={{
        opacity: isVisible ? 1 : 0,
        transform: getCornerTransform(),
        transition: `all 0.4s cubic-bezier(0.16, 1, 0.3, 1) ${delay}ms`,
        perspective: "1500px",
        transformStyle: "preserve-3d",
      }}
    >
      {children}
    </div>
  );
};

const HorizontalScrollCard = ({
  children,
  index = 0,
  delay = 0,
  total = 6,
}) => {
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

  const getScatterOffset = () => {
    const positions = [
      { x: -250, y: -250, rotate: -45 },
      { x: 250, y: -250, rotate: 45 },
      { x: -250, y: 250, rotate: -45 },
      { x: 250, y: 250, rotate: 45 },
      { x: -200, y: 0, rotate: -30 },
      { x: 200, y: 0, rotate: 30 },
    ];
    return positions[index] || { x: 0, y: 0, rotate: 0 };
  };

  const getStyle = () => {
    // Check if mobile (window width < 768px)
    const isMobile = typeof window !== "undefined" && window.innerWidth < 768;

    if (isMobile) {
      return {
        opacity: isVisible ? 1 : 0,
        transform: isVisible ? "translateY(0)" : "translateY(20px)",
        transition: `all 0.6s ease-out ${delay}ms`,
      };
    }

    if (!isVisible) {
      const isLeft = index < total / 2;
      const distance = isLeft ? -300 : 300;
      const rotation = isLeft ? -40 : 40;

      return {
        opacity: 0,
        transform: `translateX(${distance}px) scale(0.5) rotateY(${rotation}deg)`,
        transition: `all 1.2s cubic-bezier(0.16, 1, 0.3, 1) ${delay}ms`,
        perspective: "1500px",
        transformStyle: "preserve-3d",
      };
    }

    return {
      opacity: 1,
      transform: "translateX(0) translateY(0) scale(1) rotateZ(0)",
      transition: `all 1.2s cubic-bezier(0.16, 1, 0.3, 1) ${delay}ms`,
      perspective: "1500px",
      transformStyle: "preserve-3d",
      animation: `scatterGather${index} 11s infinite cubic-bezier(0.4, 0.0, 0.2, 1)`,
    };
  };

  return (
    <>
      <style>{`
        @keyframes scatterGather0 {
          0% {
            transform: translate(-250px, -250px) scale(0.6) rotateZ(-45deg);
          }
          18% {
            transform: translate(0, 0) scale(1) rotateZ(0deg);
          }
          36% {
            transform: translate(0, 0) scale(1) rotateZ(0deg);
          }
          100% {
            transform: translate(-250px, -250px) scale(0.6) rotateZ(-45deg);
          }
        }

        @keyframes scatterGather1 {
          0% {
            transform: translate(250px, -250px) scale(0.6) rotateZ(45deg);
          }
          18% {
            transform: translate(0, 0) scale(1) rotateZ(0deg);
          }
          36% {
            transform: translate(0, 0) scale(1) rotateZ(0deg);
          }
          100% {
            transform: translate(250px, -250px) scale(0.6) rotateZ(45deg);
          }
        }

        @keyframes scatterGather2 {
          0% {
            transform: translate(-250px, 250px) scale(0.6) rotateZ(-45deg);
          }
          18% {
            transform: translate(0, 0) scale(1) rotateZ(0deg);
          }
          36% {
            transform: translate(0, 0) scale(1) rotateZ(0deg);
          }
          100% {
            transform: translate(-250px, 250px) scale(0.6) rotateZ(-45deg);
          }
        }

        @keyframes scatterGather3 {
          0% {
            transform: translate(250px, 250px) scale(0.6) rotateZ(45deg);
          }
          18% {
            transform: translate(0, 0) scale(1) rotateZ(0deg);
          }
          36% {
            transform: translate(0, 0) scale(1) rotateZ(0deg);
          }
          100% {
            transform: translate(250px, 250px) scale(0.6) rotateZ(45deg);
          }
        }

        @keyframes scatterGather4 {
          0% {
            transform: translate(-200px, 0) scale(0.6) rotateZ(-30deg);
          }
          18% {
            transform: translate(0, 0) scale(1) rotateZ(0deg);
          }
          36% {
            transform: translate(0, 0) scale(1) rotateZ(0deg);
          }
          100% {
            transform: translate(-200px, 0) scale(0.6) rotateZ(-30deg);
          }
        }

        @keyframes scatterGather5 {
          0% {
            transform: translate(200px, 0) scale(0.6) rotateZ(30deg);
          }
          18% {
            transform: translate(0, 0) scale(1) rotateZ(0deg);
          }
          36% {
            transform: translate(0, 0) scale(1) rotateZ(0deg);
          }
          100% {
            transform: translate(200px, 0) scale(0.6) rotateZ(30deg);
          }
        }
      `}</style>
      <div ref={elementRef} style={getStyle()}>
        {children}
      </div>
    </>
  );
};

const ScatterCard = ({ children, index = 0, delay = 0, total = 3 }) => {
  const [isVisible, setIsVisible] = useState(false);
  const [isHovering, setIsHovering] = useState(false);
  const elementRef = useRef(null);
  const containerRef = useRef(null);

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

  const handleMouseEnter = () => {
    setIsHovering(true);
  };

  const handleMouseLeave = () => {
    setIsHovering(false);
  };

  const getStyle = () => {
    // Check if mobile (window width < 768px)
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
        <div ref={elementRef} style={getStyle()}>
          {children}
        </div>
      </div>
    </>
  );
};

const Home = () => {
  const videoRef = useRef(null);
  const [isVideoLoaded, setIsVideoLoaded] = useState(false);

  useEffect(() => {
    const video = videoRef.current;
    if (video) {
      const playPromise = video.play();

      if (playPromise !== undefined) {
        playPromise
          .then(() => {
            setIsVideoLoaded(true);
          })
          .catch((e) => {
            console.log("Autoplay prevented, showing fallback:", e);
            setIsVideoLoaded(false);
          });
      }
    }
  }, []);

  return (
    <div className="pt-16">
      {/* Full Screen Hero Section with Video  */}
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
            poster="/HeroVideo.jpeg"
            onLoadedData={() => setIsVideoLoaded(true)}
            onError={() => setIsVideoLoaded(false)}
            className="absolute inset-0 w-full h-full object-cover"
          >
            <source src="/HeroVideo1.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>

          {/* Fallback image if video doesn't load */}
          {!isVideoLoaded && (
            <div
              className="absolute inset-0 bg-cover bg-center"
              style={{
                backgroundImage: `url('/HeroVideo.jpeg')`,
              }}
            ></div>
          )}

          {/* Smart overlay - lighter for video visibility */}
          <div className="absolute inset-0 bg-linear-to-b from-slate-950/70 via-slate-900/60 to-slate-950/70"></div>

          {/* Enhanced animated effects */}
          <div className="absolute inset-0 overflow-hidden">
            <div className="absolute top-20 left-10 w-80 h-80 bg-blue-500 rounded-full mix-blend-screen filter blur-3xl opacity-25 animate-blob"></div>
            <div className="absolute bottom-20 right-10 w-80 h-80 bg-purple-500 rounded-full mix-blend-screen filter blur-3xl opacity-20 animate-blob animation-delay-4000"></div>
          </div>
        </div>

        {/*  CONTENT  */}
        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="mb-8 animate-fadeInUp">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium bg-linear-to-r from-blue-500/30 to-cyan-500/30 border border-blue-400/40 backdrop-blur-md hover:border-blue-300/70 transition-all duration-300">
              <span className="w-2 h-2 rounded-full bg-blue-400 animate-pulse"></span>
              <Radio size={16} className="text-blue-300" />
              <span className="text-blue-200">
                Next Generation Telecom Solutions
              </span>
            </div>
          </div>

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
          <p className="text-lg md:text-xl text-slate-200 mb-8 max-w-2xl mx-auto font-light">
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
              {/* Animated background gradient - vibrant */}
              <div className="absolute inset-0 bg-gradient-to-r from-emerald-500 via-green-600 to-teal-600 rounded-2xl opacity-100 group-hover:opacity-95 transition-all duration-300"></div>

              {/* Shimmer effect overlay - enhanced */}
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white to-transparent opacity-0 group-hover:opacity-30 translate-x-[-100%] group-hover:translate-x-[100%] transition-all duration-1000 rounded-2xl"></div>

              {/* Glow effect - stronger */}
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-b from-emerald-300/20 via-green-300/10 to-teal-300/20 group-hover:from-emerald-300/50 group-hover:via-green-300/30 group-hover:to-teal-300/50 transition-all duration-300"></div>

              {/* Border with enhanced glow */}
              <div className="absolute inset-0 rounded-2xl border-2 border-emerald-300/70 group-hover:border-white/80 transition-all duration-300 group-hover:shadow-2xl group-hover:shadow-emerald-500/60"></div>

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
                      filter: "drop-shadow(0 0 6px rgba(16, 185, 129, 0.8))",
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
                      background: "rgba(16, 185, 129, 0.9)",
                      animation: "orbit 4s linear infinite",
                      top: "50%",
                      left: "50%",
                      boxShadow: "0 0 6px rgba(16, 185, 129, 0.8)",
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
                    filter: "drop-shadow(0 0 4px rgba(16, 185, 129, 0.7))",
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
                    filter: drop-shadow(0 0 4px rgba(16, 185, 129, 0.6));
                    opacity: 1;
                  }
                  50% {
                    filter: drop-shadow(0 0 8px rgba(52, 211, 153, 0.8));
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

              {/* Outer glow for dark mode depth */}
              <div className="absolute -inset-0.5 bg-gradient-to-r from-blue-600 to-cyan-500 rounded-xl opacity-30 blur-lg group-hover:opacity-50 transition-all duration-300 -z-10"></div>
            </a>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-14 left-1/2 transform -translate-x-1/2 animate-bounce z-20">
          <div className="w-6 h-10 border-2 border-blue-400/50 rounded-full flex justify-center hover:border-blue-300 transition-colors">
            <div className="w-1 h-3 bg-blue-400 rounded-full mt-2 animate-pulse"></div>
          </div>
        </div>
      </section>

      {/* Main Content Sections  */}
      <div id="services" className="bg-white">
        {/* Services Section  */}
        <section className="py-24 relative overflow-hidden bg-white">
          {/* Background overlay */}
          <div className="absolute inset-0 bg-gradient-to-b from-white via-transparent to-white"></div>

          <style>{`
            @keyframes cardFallLoop {
              0% {
                opacity: 0;
                transform: translateY(-60px) rotateX(20deg);
              }
              40% {
                opacity: 1;
                transform: translateY(0) rotateX(0);
              }
              100% {
                opacity: 1;
                transform: translateY(0) rotateX(0);
              }
            }
            .card-fall-1 { animation: cardFallLoop 5s ease-out infinite; }
            .card-fall-2 { animation: cardFallLoop 5s ease-out 0.15s infinite; }
            .card-fall-3 { animation: cardFallLoop 5s ease-out 0.3s infinite; }
            .card-fall-4 { animation: cardFallLoop 5s ease-out 0.45s infinite; }
          `}</style>
          <div className="absolute top-0 right-0 w-96 h-96 bg-blue-500/20 rounded-full mix-blend-screen filter blur-3xl opacity-20 -mr-48 animate-pulse"></div>
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-purple-500/20 rounded-full mix-blend-screen filter blur-3xl opacity-20 -ml-48 animate-pulse"></div>

          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="text-center mb-20 animate-fadeInUp">
              <div className="inline-block mb-6 px-5 py-2 rounded-full bg-gradient-to-r from-blue-100 to-purple-100 border border-blue-300 backdrop-blur-md">
                <span className="text-blue-700 font-semibold tracking-wider uppercase text-xs lg:text-sm">
                  ⚡ Our Expertise
                </span>
              </div>
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-black mb-6 text-gray-900 tracking-tight leading-tight">
                <AnimatedText text="Comprehensive " delay={0} />
                <span className="bg-clip-text bg-gradient-to-r from-blue-600 to-purple-700">
                  <AnimatedText text="Telecom Solutions" delay={150} />
                </span>
              </h2>
              <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto font-light leading-relaxed">
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
                  className="group relative p-6 md:p-8 rounded-3xl cursor-pointer bg-blue-50 border border-blue-200 shadow-md hover:shadow-xl transition-all duration-500 hover:bg-blue-100 hover:-translate-y-2 overflow-hidden card-fall-1"
                  style={{
                    transformStyle: "preserve-3d",
                  }}
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-blue-600/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  <div className="relative z-10">
                    <div className="w-14 h-14 md:w-16 md:h-16 mb-5 md:mb-6 rounded-2xl bg-gradient-to-br from-blue-500 to-blue-600 flex items-center justify-center shadow-lg shadow-blue-500/30 group-hover:scale-110 transition-transform duration-500">
                      <MessageSquare className="text-white" size={32} />
                    </div>
                    <h3 className="text-xl md:text-2xl font-bold mb-3 md:mb-4 text-gray-900 group-hover:text-blue-700 transition-colors">
                      SMS Solutions
                    </h3>
                    <p className="text-gray-700 mb-5 md:mb-6 leading-relaxed text-sm">
                      Bulk SMS, A2P messaging, and SMS gateway APIs designed for
                      global reach and high deliverability.
                    </p>
                    <a
                      href="/services/sms"
                      className="text-blue-600 font-semibold flex items-center hover:gap-2 transition-all group/link text-sm uppercase tracking-wide hover:text-blue-800"
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
              <SplitCornerCard index={1} delay={50}>
                <div
                  className="group relative p-6 md:p-8 rounded-3xl cursor-pointer bg-purple-50 border border-purple-200 shadow-md hover:shadow-xl transition-all duration-500 hover:bg-purple-100 hover:-translate-y-2 overflow-hidden card-fall-2"
                  style={{
                    transformStyle: "preserve-3d",
                  }}
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-purple-600/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  <div className="relative z-10">
                    <div className="w-14 h-14 md:w-16 md:h-16 mb-5 md:mb-6 rounded-2xl bg-gradient-to-br from-purple-500 to-purple-600 flex items-center justify-center shadow-lg shadow-purple-500/30 group-hover:scale-110 transition-transform duration-500">
                      <Phone className="text-white" size={32} />
                    </div>
                    <h3 className="text-xl md:text-2xl font-bold mb-3 md:mb-4 text-gray-900 group-hover:text-purple-700 transition-colors">
                      Voice Services
                    </h3>
                    <p className="text-gray-700 mb-5 md:mb-6 leading-relaxed text-sm">
                      Crystal clear Cloud PBX, IVR systems, call recording, and
                      robust voice APIs for your business.
                    </p>
                    <a
                      href="/services/voice"
                      className="text-purple-600 font-semibold flex items-center hover:gap-2 transition-all group/link text-sm uppercase tracking-wide hover:text-purple-800"
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
              <SplitCornerCard index={2} delay={100}>
                <div
                  className="group relative p-6 md:p-8 rounded-3xl cursor-pointer bg-pink-50 border border-pink-200 shadow-md hover:shadow-xl transition-all duration-500 hover:bg-pink-100 hover:-translate-y-2 overflow-hidden card-fall-3"
                  style={{
                    transformStyle: "preserve-3d",
                  }}
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-pink-600/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  <div className="relative z-10">
                    <div className="w-14 h-14 md:w-16 md:h-16 mb-5 md:mb-6 rounded-2xl bg-gradient-to-br from-pink-500 to-pink-600 flex items-center justify-center shadow-lg shadow-pink-500/30 group-hover:scale-110 transition-transform duration-500">
                      <Globe className="text-white" size={32} />
                    </div>
                    <h3 className="text-xl md:text-2xl font-bold mb-3 md:mb-4 text-gray-900 group-hover:text-pink-700 transition-colors">
                      DID Numbers
                    </h3>
                    <p className="text-gray-700 mb-5 md:mb-6 leading-relaxed text-sm">
                      Instant access to local, mobile, and toll-free numbers in
                      over 100+ countries worldwide.
                    </p>
                    <a
                      href="/services/did"
                      className="text-pink-600 font-semibold flex items-center hover:gap-2 transition-all group/link text-sm uppercase tracking-wide hover:text-pink-800"
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
              <SplitCornerCard index={3} delay={150}>
                <div
                  className="group relative p-6 md:p-8 rounded-3xl cursor-pointer bg-orange-50 border border-orange-200 shadow-md hover:shadow-xl transition-all duration-500 hover:bg-orange-100 hover:-translate-y-2 overflow-hidden card-fall-4"
                  style={{
                    transformStyle: "preserve-3d",
                  }}
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-orange-600/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  <div className="relative z-10">
                    <div className="w-14 h-14 md:w-16 md:h-16 mb-5 md:mb-6 rounded-2xl bg-gradient-to-br from-orange-500 to-orange-600 flex items-center justify-center shadow-lg shadow-orange-500/30 group-hover:scale-110 transition-transform duration-500">
                      <Zap className="text-white" size={32} />
                    </div>
                    <h3 className="text-xl md:text-2xl font-bold mb-3 md:mb-4 text-gray-900 group-hover:text-orange-700 transition-colors">
                      Software Solutions
                    </h3>
                    <p className="text-gray-700 mb-5 md:mb-6 leading-relaxed text-sm">
                      Custom telecom platforms, white-label solutions, and
                      enterprise-grade integrations.
                    </p>
                    <a
                      href="/services/software"
                      className="text-orange-600 font-semibold flex items-center hover:gap-2 transition-all group/link text-sm uppercase tracking-wide hover:text-orange-800"
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
        <section
          className="py-24 relative overflow-hidden"
          style={{ backgroundColor: "rgba(0, 167, 217, 0.05)" }}
        >
          {/* Background overlay with gradient */}
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-white/20 to-transparent"></div>

          {/* Animated background elements */}
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-500/20 rounded-full mix-blend-screen filter blur-3xl animate-blob"></div>
            <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-purple-500/20 rounded-full mix-blend-screen filter blur-3xl animate-blob animation-delay-2000"></div>
          </div>

          <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-20 animate-fadeInUp">
              <div className="inline-block mb-6 px-5 py-2 rounded-full bg-gradient-to-r from-blue-100 to-purple-100 border border-blue-300 backdrop-blur-md">
                <span className="text-blue-700 font-semibold tracking-wider uppercase text-xs lg:text-sm">
                  🛡️ Why Choose Cyvora
                </span>
              </div>
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-black mb-6 text-gray-900 tracking-tight leading-tight">
                <AnimatedText text="Built for " delay={0} />
                <span className="bg-clip-text bg-gradient-to-r from-blue-600 to-purple-700">
                  <AnimatedText text="Scale & Reliability" delay={100} />
                </span>
              </h2>
              <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto font-light leading-relaxed">
                <AnimatedText
                  text="Experience enterprise-grade infrastructure with 99.99% uptime, dedicated 24/7 support, and global reach across 190+ countries. Built for modern communication needs."
                  delay={200}
                />
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12">
              {/* Feature 1 */}
              <ScatterCard index={0} delay={0}>
                <div className="group relative p-8 rounded-3xl bg-blue-50 border border-blue-200 shadow-md hover:shadow-xl hover:bg-blue-100 transition-all duration-500 hover:-translate-y-2 overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-br from-blue-600/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

                  <div className="relative z-10">
                    <div className="w-16 h-16 mb-8 rounded-2xl bg-gradient-to-br from-blue-500 to-blue-600 flex items-center justify-center shadow-lg shadow-blue-500/30 group-hover:scale-110 transition-transform duration-500">
                      <Shield className="text-white" size={32} />
                    </div>

                    <h3 className="text-2xl font-bold text-gray-900 mb-4 group-hover:text-blue-700 transition-colors">
                      99.99% Uptime SLA
                    </h3>

                    <p className="text-gray-700 leading-relaxed mb-6">
                      Our geo-redundant infrastructure ensures your business
                      stays connected 24/7/365 with guaranteed reliability and
                      automatic failover.
                    </p>

                    <ul className="space-y-2">
                      <li className="flex items-center text-sm text-gray-700">
                        <CheckCircle size={16} className="mr-2 text-blue-500" />{" "}
                        Geo-redundant servers
                      </li>
                      <li className="flex items-center text-sm text-gray-700">
                        <CheckCircle size={16} className="mr-2 text-blue-500" />{" "}
                        Automatic failover
                      </li>
                      <li className="flex items-center text-sm text-gray-700">
                        <CheckCircle size={16} className="mr-2 text-blue-500" />{" "}
                        Real-time monitoring
                      </li>
                    </ul>
                  </div>
                </div>
              </ScatterCard>

              {/* Feature 2 */}
              <ScatterCard index={1} delay={100}>
                <div className="group relative p-8 rounded-3xl bg-purple-50 border border-purple-200 shadow-md hover:shadow-xl hover:bg-purple-100 transition-all duration-500 hover:-translate-y-2 overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-br from-purple-600/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

                  <div className="relative z-10">
                    <div className="w-16 h-16 mb-8 rounded-2xl bg-gradient-to-br from-purple-500 to-purple-600 flex items-center justify-center shadow-lg shadow-purple-500/30 group-hover:scale-110 transition-transform duration-500">
                      <Users className="text-white" size={32} />
                    </div>

                    <h3 className="text-2xl font-bold text-gray-900 mb-4 group-hover:text-purple-700 transition-colors">
                      Dedicated Support
                    </h3>

                    <p className="text-gray-700 leading-relaxed mb-6">
                      Get access to our team of telecom experts available round
                      the clock to help you with integration, debugging, and
                      optimization.
                    </p>

                    <ul className="space-y-2">
                      <li className="flex items-center text-sm text-gray-700">
                        <CheckCircle
                          size={16}
                          className="mr-2 text-purple-500"
                        />{" "}
                        24/7 Technical support
                      </li>
                      <li className="flex items-center text-sm text-gray-700">
                        <CheckCircle
                          size={16}
                          className="mr-2 text-purple-500"
                        />{" "}
                        Dedicated account manager
                      </li>
                      <li className="flex items-center text-sm text-gray-700">
                        <CheckCircle
                          size={16}
                          className="mr-2 text-purple-500"
                        />{" "}
                        &lt; 15min response time
                      </li>
                    </ul>
                  </div>
                </div>
              </ScatterCard>

              {/* Feature 3 */}
              <ScatterCard index={2} delay={200}>
                <div className="group relative p-8 rounded-3xl bg-pink-50 border border-pink-200 shadow-md hover:shadow-xl hover:bg-pink-100 transition-all duration-500 hover:-translate-y-2 overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-br from-pink-600/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

                  <div className="relative z-10">
                    <div className="w-16 h-16 mb-8 rounded-2xl bg-gradient-to-br from-pink-500 to-pink-600 flex items-center justify-center shadow-lg shadow-pink-500/30 group-hover:scale-110 transition-transform duration-500">
                      <Globe className="text-white" size={32} />
                    </div>

                    <h3 className="text-2xl font-bold text-gray-900 mb-4 group-hover:text-pink-700 transition-colors">
                      Global Reach
                    </h3>

                    <p className="text-gray-700 leading-relaxed mb-6">
                      Connect with customers anywhere in the world through our
                      extensive network of direct operator connections in 190+
                      countries.
                    </p>

                    <ul className="space-y-2">
                      <li className="flex items-center text-sm text-gray-700">
                        <CheckCircle size={16} className="mr-2 text-pink-500" />{" "}
                        190+ Countries covered
                      </li>
                      <li className="flex items-center text-sm text-gray-700">
                        <CheckCircle size={16} className="mr-2 text-pink-500" />{" "}
                        Direct carrier routes
                      </li>
                      <li className="flex items-center text-sm text-gray-700">
                        <CheckCircle size={16} className="mr-2 text-pink-500" />{" "}
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
        <section
          className="py-24 relative overflow-hidden"
        >
          {/* Animated background blobs */}
          <div className="absolute top-0 left-0 w-96 h-96 bg-blue-500/10 rounded-full mix-blend-screen filter blur-3xl opacity-30 animate-blob"></div>
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-purple-500/10 rounded-full mix-blend-screen filter blur-3xl opacity-30 animate-blob animation-delay-2000"></div>
          <div className="absolute top-1/2 left-1/2 w-96 h-96 bg-cyan-500/10 rounded-full mix-blend-screen filter blur-3xl opacity-20 animate-blob animation-delay-4000"></div>

          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              <div className="animate-fadeInUp">
                <div className="inline-block mb-4 px-4 py-1 rounded-full bg-green-500/10 border border-green-400/30 backdrop-blur-md">
                  <span className="text-green-600 font-semibold tracking-wider uppercase text-sm">
                    Start Your Journey
                  </span>
                </div>
                <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900 leading-tight">
                  <AnimatedText text="Ready to " delay={0} />
                  <span className=" bg-clip-text bg-gradient-to-r from-green-600 to-blue-600">
                    <AnimatedText text="Scale Your Business?" delay={100} />
                  </span>
                </h2>
                <p className="text-xl text-gray-700 mb-8 leading-relaxed">
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
                      className="flex items-center gap-3 text-gray-700"
                    >
                      <CheckCircle className="text-green-500" size={20} />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>

                <div className="grid grid-cols-2 gap-6 mb-10">
                  <div className="p-4 bg-white/50 rounded-xl border border-blue-100 backdrop-blur-sm">
                    <div className="text-3xl font-bold text-blue-600 mb-1">
                      10M+
                    </div>
                    <div className="text-gray-600 text-xs uppercase tracking-wider font-semibold">
                      Daily Messages
                    </div>
                  </div>
                  <div className="p-4 bg-white/50 rounded-xl border border-purple-100 backdrop-blur-sm">
                    <div className="text-3xl font-bold text-purple-600 mb-1">
                      5,000+
                    </div>
                    <div className="text-gray-600 text-xs uppercase tracking-wider font-semibold">
                      Active Customers
                    </div>
                  </div>
                  <div className="p-4 bg-white/50 rounded-xl border border-green-100 backdrop-blur-sm">
                    <div className="text-3xl font-bold text-green-600 mb-1">
                      99.99%
                    </div>
                    <div className="text-gray-600 text-xs uppercase tracking-wider font-semibold">
                      Uptime SLA
                    </div>
                  </div>
                  <div className="p-4 bg-white/50 rounded-xl border border-orange-100 backdrop-blur-sm">
                    <div className="text-3xl font-bold text-orange-600 mb-1">
                      190+
                    </div>
                    <div className="text-gray-600 text-xs uppercase tracking-wider font-semibold">
                      Countries Covered
                    </div>
                  </div>
                </div>

                <a
                  href="/free-trial"
                  className="group relative inline-flex items-center justify-center px-8 py-4 rounded-full font-bold text-lg text-white overflow-hidden transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-green-500/30"
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-green-600 to-emerald-500 transition-all duration-300 group-hover:scale-110"></div>
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700"></div>
                  <span className="relative flex items-center gap-2">
                    Start Your Free Trial
                    <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                  </span>
                </a>
              </div>

              <SlideInCard delay={300}>
                <div className="relative animate-fadeInUp animation-delay-400">
                  <div className="absolute -inset-1 bg-gradient-to-br from-green-400 via-blue-500 to-purple-600 rounded-[2rem] blur-lg opacity-70 group-hover:opacity-100 transition duration-1000 group-hover:duration-200 animate-tilt"></div>
                  <div className="relative rounded-[1.8rem] overflow-hidden shadow-2xl group h-[500px]">
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
              <p className="text-sm font-semibold text-blue-400 uppercase tracking-widest">
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
                    className="w-48 h-24 flex-shrink-0 group p-6 rounded-xl bg-white/5 border border-white/10 hover:bg-white/10 hover:border-blue-500/50 transition-all duration-300 flex items-center justify-center backdrop-blur-sm"
                  >
                    <div className="text-xl font-bold text-gray-400 group-hover:text-white transition-colors duration-300">
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
