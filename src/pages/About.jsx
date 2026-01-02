import {
  Users,
  Target,
  Award,
  TrendingUp,
  Shield,
  Rocket,
  Globe2,
  Heart,
  Zap,
  Lock,
  BarChart3,
  MessageSquare,
  MapPin,
  Building2,
  ExternalLink,
  Calendar,
  Briefcase,
} from "lucide-react";
import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";

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
            transition: `all 0.6s ease-out ${delay + index * 40}ms`,
          }}
        >
          {char === " " ? "\u00A0" : char}
        </span>
      ))}
    </span>
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
    if (isMobile)
      return isVisible
        ? "translateY(0) scale(1)"
        : "translateY(50px) scale(0.95)";
    if (isVisible) return "translate(0, 0) rotateX(0) rotateY(0) scale(1)";
    if (index === 0) return "translate(-100vw, 0) rotateY(30deg) scale(0.9)";
    if (index === 1) return "translate(100vw, 0) rotateY(-30deg) scale(0.9)";
    if (index === 2) return "translate(0, -100vh) rotateX(30deg) scale(0.9)";
    return "translate(0, 100vh) rotateX(-30deg) scale(0.9)";
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

const About = () => {
  return (
    <div className="pt-24 bg-(--body-bg)">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat transition-transform duration-1000 scale-105"
          style={{ backgroundImage: "url('/softwareherosection.jpg')" }}
        ></div>
        <div className="absolute inset-0 bg-black/70 backdrop-blur-[2px]"></div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white -mt-20">
          <div className="inline-flex items-center justify-center p-4 mb-8 rounded-2xl bg-white/10 backdrop-blur-md border border-white/20 shadow-xl animate-fadeInUp">
            <Rocket size={48} className="text-(--accent-copper)" />
          </div>
          <h1 className="text-5xl md:text-6xl lg:text-6xl font-black mb-8 leading-tight tracking-tight drop-shadow-2xl">
            <span className="text-white">
              <AnimatedText text="Redefining Digital" delay={0} />
            </span>
            <br />
            <span
              className="text-5xl md:text-5xl lg:text-5xl text-(--accent-copper)"
            >
              <AnimatedText text="Connectivity" delay={600} />
            </span>
          </h1>
          <p className="text-xl md:text-2xl lg:text-3xl max-w-4xl mx-auto font-medium opacity-95 leading-relaxed drop-shadow-lg">
            <AnimatedText
              text="Software Development, Telecom Infrastructure, and Artificial Intelligence."
              delay={1200}
            />
          </p>
        </div>
      </section>

      {/* Our Evolution Section */}
      <section
        className="py-24 relative overflow-hidden bg-(--body-bg)"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
            <div>
              <h2
                className="text-4xl md:text-5xl font-bold mb-8 leading-tight text-(--heading-dark)"
              >
                Engineering the Intelligent Future
              </h2>
              <div
                className="space-y-6 text-xl leading-relaxed text-(--body-grey)"
              >
                <p>
                  Cyvora LLC is a technology-driven company based in Uzbekistan,
                  delivering innovative solutions across Software Development,
                  Telecom Infrastructure, and Artificial Intelligence. We help
                  businesses modernize operations, optimize connectivity, and
                  unlock the power of data through scalable software platforms,
                  intelligent networks, and AI-driven automation.
                </p>
                <p>
                  Our solutions are designed to meet global standards while
                  addressing real-world business challenges across telecom
                  operators, enterprises, and digital-first organizations. At
                  Cyvora, we combine deep technical expertise with a
                  forward-looking mindset to build secure, reliable, and
                  future-ready technologies that enable growth, efficiency, and
                  digital transformation.
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mt-12">
                {[
                  {
                    label: "Website",
                    val: "www.cyvoratech.com",
                    icon: <ExternalLink size={20} />,
                    link: "https://www.cyvoratech.com",
                  },
                  {
                    label: "Industry",
                    val: "Telecommunications",
                    icon: <Building2 size={20} />,
                  },
                  {
                    label: "Company size",
                    val: "51-200 employees",
                    icon: <Users size={20} />,
                  },
                  {
                    label: "Headquarters",
                    val: "Tashkent Uzbekistan",
                    icon: <MapPin size={20} />,
                  },
                  {
                    label: "Type",
                    val: "Partnership",
                    icon: <Briefcase size={20} />,
                  },
                  {
                    label: "Founded",
                    val: "2025",
                    icon: <Calendar size={20} />,
                  },
                ].map((stat, i) => (
                  <div
                    key={i}
                    className="p-4 bg-white rounded-2xl shadow-sm border border-black/5 flex items-center gap-4"
                  >
                    <div className="p-3 bg-(--accent-copper)/10 rounded-xl text-(--accent-copper)">
                      {stat.icon}
                    </div>
                    <div>
                      <div className="text-xs uppercase tracking-wider text-(--body-grey) mb-0.5">
                        {stat.label}
                      </div>
                      <div className="font-bold text-(--heading-dark)">
                        {stat.link ? (
                          <a
                            href={stat.link}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="hover:text-(--accent-copper) transition-colors"
                          >
                            {stat.val}
                          </a>
                        ) : (
                          stat.val
                        )}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="relative">
              <div
                className="absolute -inset-4 rounded-[3rem] blur-3xl bg-(--accent-copper) opacity-20"
              ></div>
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-4">
                  <div className="h-64 rounded-[2rem] bg-white p-8 shadow-xl flex flex-col justify-center items-center text-center">
                    <div
                      className="text-5xl font-bold mb-2 text-(--accent-copper)"
                    >
                      20+
                    </div>
                    <div
                      className="font-medium text-lg text-(--body-grey)"
                    >
                      Active Clients
                    </div>
                  </div>
                  <div
                    className="h-48 rounded-[2rem] p-8 shadow-xl flex flex-col justify-center items-center text-center text-white bg-[#B36433]"
                  >
                    <div className="text-4xl font-bold mb-2">99.9%</div>
                    <div className="opacity-90 font-medium">Global Uptime</div>
                  </div>
                </div>
                <div className="space-y-4 mt-12">
                  <div
                    className="h-48 rounded-[2rem] p-8 shadow-xl flex flex-col justify-center items-center text-center text-white bg-(--navbar-bg)"
                  >
                    <div className="text-4xl font-bold mb-2">50k+</div>
                    <div className="opacity-90 font-medium">Daily Messages</div>
                  </div>
                  <div className="h-64 rounded-[2rem] bg-white p-8 shadow-xl flex flex-col justify-center items-center text-center">
                    <div
                      className="text-5xl font-bold mb-2 text-(--accent-copper)"
                    >
                      24/7
                    </div>
                    <div
                      className="font-medium text-lg text-(--body-grey)"
                    >
                      Support
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* What Sets Us Apart */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2
              className="text-5xl font-bold mb-4 text-(--heading-dark)"
            >
              What Sets Us Apart
            </h2>
            <p
              className="text-xl max-w-3xl mx-auto text-(--body-grey)"
            >
              As a new player in the telecom industry, we bring fresh innovation
              and modern solutions
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: <Zap size={32} />,
                title: "Lightning Fast Setup",
                desc: "Get started in minutes, not weeks. Our streamlined onboarding gets you connected quickly.",
              },
              {
                icon: <Lock size={32} />,
                title: "Enterprise Security",
                desc: "Bank-grade encryption and compliance standards protect every interaction.",
              },
              {
                icon: <BarChart3 size={32} />,
                title: "Real-Time Analytics",
                desc: "Monitor performance with comprehensive dashboards and actionable insights.",
              },
              {
                icon: <MessageSquare size={32} />,
                title: "AI-Powered Intelligence",
                desc: "Smart routing and automated responses optimize your communication workflow.",
              },
              {
                icon: <Users size={32} />,
                title: "Dedicated Support",
                desc: "24/7 expert assistance ensures your operations run smoothly.",
              },
              {
                icon: <Target size={32} />,
                title: "Flexible Pricing",
                desc: "Scalable plans that grow with your business, no hidden fees.",
              },
            ].map((feature, i) => (
              <div
                key={i}
                className="p-8 rounded-2xl border border-gray-100 hover:shadow-lg transition-all duration-300 group bg-(--body-bg)"
              >
                <div
                  className="w-16 h-16 bg-white rounded-xl flex items-center justify-center mb-6 group-hover:bg-[#B36433] group-hover:text-white transition-all duration-300 shadow-sm text-(--accent-copper)"
                >
                  {feature.icon}
                </div>
                <h3
                  className="text-2xl font-bold mb-4 text-(--heading-dark)"
                >
                  {feature.title}
                </h3>
                <p
                  className="leading-relaxed text-(--body-grey)"
                >
                  {feature.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-24 bg-white relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2
              className="text-5xl font-bold mb-4 text-(--heading-dark)"
            >
              Our Core Values
            </h2>
            <p className="text-xl text-(--body-grey)">
              The principles that drive our innovation
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: <Heart size={32} />,
                title: "Customer First",
                desc: "Prioritizing your success and satisfaction above all else.",
              },
              {
                icon: <Globe2 size={32} />,
                title: "Innovation",
                desc: "Setting new standards for future communication technology.",
              },
              {
                icon: <Shield size={32} />,
                title: "Trust",
                desc: "Securing every interaction with enterprise-grade safety.",
              },
              {
                icon: <TrendingUp size={32} />,
                title: "Growth",
                desc: "Scaling businesses with robust global infrastructure.",
              },
            ].map((value, i) => (
              <SplitCornerCard key={i} index={i % 4} delay={i * 100}>
                <div
                  className="p-8 rounded-3xl border border-black/5 transition-all duration-300 group text-center h-full shadow-sm bg-(--body-bg)"
                >
                  <div
                    className="w-16 h-16 bg-white rounded-2xl flex items-center justify-center mb-6 mx-auto group-hover:text-white transition-all duration-500 shadow-sm text-(--accent-copper)"
                  >
                    {value.icon}
                  </div>
                  <h3
                    className="text-2xl font-bold mb-4 text-(--heading-dark)"
                  >
                    {value.title}
                  </h3>
                  <p
                    className="leading-relaxed text-(--body-grey)"
                  >
                    {value.desc}
                  </p>
                </div>
              </SplitCornerCard>
            ))}
          </div>
        </div>
      </section>

      {/* Our Vision */}
      <section
        className="py-24 text-white relative overflow-hidden bg-(--navbar-bg)"
      >
        <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-orange-600/10 to-transparent"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <Award
              size={64}
              className="mx-auto mb-8 text-(--accent-copper)"
            />
            <h2 className="text-5xl font-bold mb-8">Our Vision</h2>
            <p className="text-2xl text-gray-300 leading-relaxed mb-8">
              To be the global catalyst for intelligent transformation,
              engineering the future where software, telecom, and AI converge
              to create a more connected and efficient world.
            </p>
            <p className="text-xl text-gray-400 leading-relaxed">
              We're building more than just technology. We're creating an
              ecosystem where every solution is optimized for growth, security,
              and the digital evolution of our partners.
            </p>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section
        className="py-24 text-white bg-(--accent-copper)"
      >
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-5xl font-bold mb-6">
            Ready to Transform Your Communication?
          </h2>
          <p className="text-2xl mb-10 opacity-90">
            Join forward-thinking businesses leveraging Cyvora's cutting-edge
            infrastructure
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact"
              className="px-8 py-4 bg-white rounded-xl font-bold text-lg hover:bg-gray-100 transition-all duration-300 shadow-xl inline-block text-(--accent-copper)"
            >
              Get Started Today
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
