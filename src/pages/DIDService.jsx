import {
  Globe,
  CheckCircle,
  Phone,
  Shield,
  Zap,
  Users,
  Building2,
  Headphones,
  Signal,
  CreditCard,
  MessageSquare,
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

    if (isMobile) {
      return isVisible
        ? "translateY(0) scale(1)"
        : "translateY(50px) scale(0.95)";
    }

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

export const DIDService = () => {
  return (
    <div className="pt-24">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat transition-transform duration-1000"
          style={{ backgroundImage: "url('/DIDheroection.webp')" }}
        ></div>
        <div className="absolute inset-0 bg-black/60 backdrop-blur-[2px]"></div>

        <div className="absolute inset-0 opacity-20 pointer-events-none">
          <div
            className="absolute top-20 left-20 w-96 h-96 rounded-full mix-blend-overlay filter blur-3xl animate-blob"
            style={{ backgroundColor: "var(--accent-copper)" }}
          ></div>
          <div
            className="absolute bottom-10 right-20 w-96 h-96 rounded-full mix-blend-overlay filter blur-3xl animate-blob animation-delay-2000"
            style={{ backgroundColor: "var(--accent-copper)" }}
          ></div>
        </div>

        <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center -mt-32">
          <div className="inline-flex items-center justify-center p-4 mb-8 rounded-2xl bg-white/10 backdrop-blur-md border border-white/20 shadow-xl animate-fadeInUp">
            <Globe size={48} style={{ color: "var(--accent-copper)" }} />
          </div>

          <h1 className="text-2xl md:text-5xl lg:text-6xl font-black mb-6 leading-tight tracking-tight drop-shadow-2xl text-white">
            <span className="block mb-2">
              <AnimatedText text="Global Accessibility." delay={0} />
            </span>
            <span
              className="block text-2xl md:text-4xl lg:text-5xl"
              style={{ color: "var(--accent-copper)" }}
            >
              <AnimatedText text="Virtual Presence." delay={500} />
            </span>
          </h1>

          <p className="text-lg md:text-xl lg:text-2xl text-white mb-8 max-w-3xl mx-auto font-medium leading-relaxed drop-shadow-lg opacity-90">
            <AnimatedText
              text="Establish a strong local identity anywhere in the world — without setting up a physical office."
              delay={1000}
            />
          </p>
        </div>
      </section>

      {/* About DID Section */}
      <section
        className="py-24 relative overflow-hidden"
        style={{ backgroundColor: "var(--body-bg)" }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
            <div className="order-2 lg:order-1">
              <h2
                className="text-4xl md:text-5xl font-bold mb-8 leading-tight"
                style={{ color: "var(--heading-dark)" }}
              >
                Expand Your Global Presence
              </h2>
              <div
                className="space-y-6 text-xl leading-relaxed"
                style={{ color: "var(--body-grey)" }}
              >
                <p>
                  At Cyvora, we empower businesses to go global effortlessly
                  with premium Direct Inward Dialing (DID) solutions. Our
                  virtual DID numbers enable customers worldwide to connect with
                  your business at local calling rates, improving accessibility,
                  trust, and customer engagement.
                </p>
                <p>
                  With coverage across 30+ countries and thousands of cities,
                  Cyvora helps you create a truly global footprint while
                  maintaining a local presence in every market you serve.
                </p>
              </div>
            </div>
            <div className="order-1 lg:order-2">
              <div className="relative">
                <div
                  className="absolute -inset-4 rounded-4xl blur-2xl"
                  style={{ backgroundColor: "rgba(179, 100, 51, 0.2)" }}
                ></div>
                <img
                  src="/DID1.webp"
                  alt="Global DID Presence"
                  className="relative rounded-4xl shadow-2xl w-full object-cover h-125 border border-white/10"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Our DID Services */}
      <section className="py-24 bg-white relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center mb-16">
            <div>
              <h2
                className="text-4xl md:text-5xl font-bold mb-8 leading-tight"
                style={{ color: "var(--heading-dark)" }}
              >
                Why Cyvora DID Services?
              </h2>
              <p
                className="text-xl mb-8 leading-relaxed"
                style={{ color: "var(--body-grey)" }}
              >
                In today's borderless business environment, customers expect
                seamless and local communication. Cyvora's DID services bridge
                this gap by providing reliable, scalable, and high-quality
                virtual numbers backed by a robust global voice infrastructure.
              </p>
              <div className="space-y-6">
                {[
                  "Reliable and high-quality virtual numbers",
                  "Scalable solutions for global expansion",
                  "Support for remote teams and global offices",
                  "Enhanced customer service operations",
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-4">
                    <div
                      className="p-2 rounded-lg"
                      style={{ backgroundColor: "rgba(179, 100, 51, 0.1)" }}
                    >
                      <CheckCircle
                        size={24}
                        style={{ color: "var(--accent-copper)" }}
                      />
                    </div>
                    <span
                      className="text-xl"
                      style={{ color: "var(--body-grey)" }}
                    >
                      {item}
                    </span>
                  </div>
                ))}
              </div>
            </div>
            <div className="relative">
              <div
                className="absolute -inset-4 rounded-4xl blur-2xl"
                style={{ backgroundColor: "rgba(179, 100, 51, 0.2)" }}
              ></div>
              <img
                src="/DID2.jpg"
                alt="Voice Infrastructure"
                className="relative rounded-4xl shadow-2xl w-full object-cover h-100 border border-white/10"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Global Reach Section with DID3 */}
      <section
        className="py-24 relative overflow-hidden"
        style={{ backgroundColor: "var(--body-bg)" }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
            <div className="relative">
              <div
                className="absolute -inset-4 rounded-4xl blur-2xl"
                style={{ backgroundColor: "rgba(179, 100, 51, 0.2)" }}
              ></div>
              <img
                src="/DID3.webp"
                alt="Global Connectivity"
                className="relative rounded-4xl shadow-2xl w-full object-cover h-125 border border-white/10"
              />
            </div>
            <div>
              <h2
                className="text-4xl md:text-5xl font-bold mb-8 leading-tight"
                style={{ color: "var(--heading-dark)" }}
              >
                Unmatched Global Reach
              </h2>
              <p
                className="text-xl mb-8 leading-relaxed"
                style={{ color: "var(--body-grey)" }}
              >
                Our network covers over 30 countries and thousands of cities,
                giving you the ability to establish a local presence anywhere.
                Whether it's a bustling metropolis or an emerging market, Cyvora
                has you covered.
              </p>
              <div className="grid grid-cols-2 gap-6">
                <div className="p-6 bg-white rounded-2xl shadow-sm border border-black/5">
                  <div
                    className="text-3xl font-bold mb-2"
                    style={{ color: "var(--accent-copper)" }}
                  >
                    30+
                  </div>
                  <p className="text-sm" style={{ color: "var(--body-grey)" }}>
                    Countries Covered
                  </p>
                </div>
                <div className="p-6 bg-white rounded-2xl shadow-sm border border-black/5">
                  <div
                    className="text-3xl font-bold mb-2"
                    style={{ color: "var(--accent-copper)" }}
                  >
                    50+
                  </div>
                  <p className="text-sm" style={{ color: "var(--body-grey)" }}>
                    Cities Available
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our DID Solutions */}
      <section className="py-24" style={{ backgroundColor: "var(--body-bg)" }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2
              className="text-5xl font-bold mb-4"
              style={{ color: "var(--heading-dark)" }}
            >
              Our DID Solutions
            </h2>
            <p
              className="text-xl max-w-3xl mx-auto"
              style={{ color: "var(--body-grey)" }}
            >
              Choose the right virtual number for your business needs.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            {[
              {
                title: "Local & National DIDs",
                desc: "Choose from an extensive inventory of geographic numbers to build instant credibility and trust with local customers.",
                icon: Building2,
              },
              {
                title: "Toll-Free Numbers",
                desc: "Strengthen your professional image and remove calling barriers for customers with ITFS & UIFN numbers.",
                icon: Phone,
              },
              {
                title: "Mobile DIDs",
                desc: "High-reachability mobile virtual numbers supporting voice and SMS for two-way communication on the go.",
                icon: Signal,
              },
            ].map((solution, i) => (
              <SplitCornerCard key={i} index={i % 4} delay={i * 100}>
                <div
                  className="p-8 bg-white rounded-3xl border border-black/5 shadow-xl hover:shadow-2xl transition-all duration-500 group h-full hover:-translate-y-2"
                  style={{ borderColor: "rgba(0, 0, 0, 0.05)" }}
                >
                  <div
                    className="w-16 h-16 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 group-hover:rotate-3 transition-all duration-500 shadow-sm"
                    style={{ backgroundColor: "rgba(179, 100, 51, 0.1)" }}
                  >
                    <solution.icon
                      size={32}
                      style={{ color: "var(--accent-copper)" }}
                      className="group-hover:text-white transition-colors duration-500"
                    />
                  </div>
                  <h3
                    className="text-2xl font-bold mb-4 group-hover:translate-x-1 transition-transform duration-500"
                    style={{ color: "var(--accent-copper)" }}
                  >
                    {solution.title}
                  </h3>
                  <p
                    className="leading-relaxed transition-colors duration-500"
                    style={{ color: "var(--body-grey)" }}
                  >
                    {solution.desc}
                  </p>
                </div>
              </SplitCornerCard>
            ))}
          </div>

          <div className="bg-[#B36433] rounded-[3rem] p-8 md:p-16 shadow-2xl relative overflow-hidden group">
            <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full -mr-32 -mt-32 blur-3xl transition-transform duration-1000 group-hover:scale-110"></div>
            <div className="absolute bottom-0 left-0 w-64 h-64 bg-black/5 rounded-full -ml-32 -mb-32 blur-3xl transition-transform duration-1000 group-hover:scale-110"></div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 relative z-10">
              {[
                {
                  title: "30+ Countries",
                  icon: Globe,
                  desc: "Global reach across all major markets.",
                },
                {
                  title: "Instant Activation",
                  icon: Zap,
                  desc: "Start receiving calls in minutes.",
                },
                {
                  title: "User Friendly",
                  icon: Users,
                  desc: "Easy management platform.",
                },
                {
                  title: "24/7 Support",
                  icon: Headphones,
                  desc: "Expert help whenever you need it.",
                },
              ].map((feature, i) => (
                <SplitCornerCard key={i} index={i % 4} delay={i * 100}>
                  <div className="p-8 bg-white/10 backdrop-blur-md rounded-3xl border border-white/20 shadow-xl hover:bg-white/20 transition-all duration-500 h-full flex flex-col group/card">
                    <div className="w-14 h-14 bg-white/20 rounded-2xl flex items-center justify-center mb-6 group-hover/card:bg-white group-hover/card:scale-110 transition-all duration-500">
                      <feature.icon
                        size={32}
                        className="text-white group-hover/card:text-[#B36433] transition-colors duration-500"
                      />
                    </div>
                    <h3 className="text-xl font-bold mb-2 text-white">
                      {feature.title}
                    </h3>
                    <p className="text-white/80 text-sm leading-relaxed">
                      {feature.desc}
                    </p>
                  </div>
                </SplitCornerCard>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section
        className="py-24 bg-black relative overflow-hidden"
        style={{ color: "var(--text-off-white)" }}
      >
        <div
          className="absolute top-0 right-0 w-1/3 h-full"
          style={{
            backgroundImage:
              "linear-gradient(to left, rgba(179, 100, 51, 0.1), transparent)",
          }}
        ></div>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <h2
            className="text-5xl font-bold mb-8 leading-tight"
            style={{ color: "var(--text-off-white)" }}
          >
            Fast & User-Friendly Activation
          </h2>
          <p className="text-2xl opacity-80 font-light mb-12">
            Cyvora's automated provisioning platform ensures your DID numbers
            are activated within minutes, allowing you to start receiving calls
            without delays.
          </p>
        </div>
      </section>
    </div>
  );
};

export default DIDService;
