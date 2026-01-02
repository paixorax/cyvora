import {
  MessageSquare,
  CheckCircle,
  Shield,
  Zap,
  BarChart3,
  Users,
  Bell,
  Lock,
  Globe,
  ShoppingCart,
  Calendar,
  Headphones,
  TrendingUp,
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

export const SMSService = () => {
  return (
    <div className="pt-24">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat transition-transform duration-1000"
          style={{ backgroundImage: "url('/smsherosection.jpg')" }}
        ></div>
        <div className="absolute inset-0 bg-black/60 backdrop-blur-[2px]"></div>

        <div className="absolute inset-0 opacity-20 pointer-events-none">
          <div className="absolute top-20 left-20 w-96 h-96 bg-(--accent-copper) rounded-full mix-blend-overlay filter blur-3xl animate-blob"></div>
          <div className="absolute bottom-10 right-20 w-96 h-96 bg-(--accent-copper) rounded-full mix-blend-overlay filter blur-3xl animate-blob animation-delay-2000"></div>
        </div>

        <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center -mt-32">
          <div className="inline-flex items-center justify-center p-4 mb-8 rounded-2xl bg-white/10 backdrop-blur-md border border-white/20 shadow-xl animate-fadeInUp">
            <MessageSquare size={48} className="text-(--accent-copper)" />
          </div>

          <h1 className="text-2xl md:text-5xl lg:text-6xl font-black mb-6 leading-tight tracking-tight drop-shadow-2xl text-white">
            <span className="block mb-2">
              <AnimatedText text="Powerful A2P Messaging" delay={0} />
            </span>
            <span className="block text-(--accent-copper) text-2xl md:text-4xl lg:text-5xl ">
              <AnimatedText text="Solutions That Connect" delay={500} />
            </span>
          </h1>

          <p className="text-lg md:text-xl lg:text-2xl text-white mb-8 max-w-3xl mx-auto font-medium leading-relaxed drop-shadow-lg opacity-90">
            <AnimatedText
              text="A2P (Application-to-Person) messaging enables businesses to communicate instantly and securely with customers through SMS, WhatsApp, and other messaging channels."
              delay={1000}
            />
          </p>
        </div>
      </section>

      {/* About A2P Section */}
      <section className="py-8 md:py-12 bg-(--body-bg) relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-[1fr,1.2fr] gap-10 lg:gap-20 items-center">
            <div className="order-1">
              <h2 className="text-4xl md:text-5xl font-bold mb-8 text-(--heading-dark) leading-tight">
                About A2P Messaging
              </h2>
              <div className="space-y-6 text-xl text-(--body-grey) leading-relaxed">
                <p>
                  A2P messaging is the backbone of modern business
                  communication. It allows organizations to send automated,
                  scalable, and compliant messages directly from applications to
                  end users.
                </p>
                <p>
                  Whether it's transaction updates, authentication codes, or
                  marketing campaigns, A2P helps businesses deliver the right
                  message at the right time. We provide robust A2P solutions
                  designed to improve customer experience, increase engagement,
                  and ensure message delivery across networks worldwide.
                </p>
              </div>
            </div>
            <div className="order-2">
              <div className="relative">
                <div className="absolute -inset-4 bg-(--accent-copper)/20 rounded-4xl blur-2xl"></div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-4">
                  <img
                    src="/sms1.jpg"
                    alt="A2P Messaging"
                    className="relative rounded-4xl shadow-2xl w-full object-cover h-62.5 md:h-87.5 border border-white/10"
                  />
                  <img
                    src="/sms2.webp"
                    alt="A2P Messaging"
                    className="relative rounded-4xl shadow-2xl w-full object-cover h-62.5 md:h-87.5 md:mt-8 border border-white/10"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our A2P Services */}
      <section className="py-24 bg-white relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-bold text-(--heading-dark) mb-4">
              Our A2P Services
            </h2>
            <p className="text-xl text-(--body-grey) max-w-3xl mx-auto">
              Comprehensive messaging solutions designed for reliability and
              global reach.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "Transactional Messaging",
                desc: "Send OTPs, banking alerts, order confirmations, and critical notifications with guaranteed delivery.",
                icon: (
                  <Bell size={32} />
                ),
              },
              {
                title: "Promotional Messaging",
                desc: "Reach your audience with targeted offers, discounts, and campaigns that drive engagement and conversions.",
                icon: (
                  <TrendingUp
                    size={32}
                  />
                ),
              },
              {
                title: "API Integration",
                desc: "Easy-to-use APIs that seamlessly integrate with your applications, CRM, or platforms.",
                icon: <Zap size={32} />,
              },
              {
                title: "Global Reach",
                desc: "Reliable routing across multiple countries and operators with high delivery rates.",
                icon: (
                  <Globe size={32} />
                ),
              },
              {
                title: "Secure & Compliant",
                desc: "Built with security, data privacy, and regulatory compliance in mind.",
                icon: (
                  <Lock size={32} />
                ),
              },
            ].map((service, i) => (
              <SplitCornerCard key={i} index={i % 4} delay={i * 100}>
                <div className="p-8 bg-white rounded-3xl border border-black/5 shadow-xl hover:shadow-2xl hover:border-(--accent-copper)/30 transition-all duration-300 group h-full">
                  <div className="w-16 h-16 bg-(--accent-copper) rounded-2xl flex items-center justify-center mb-6 group-hover:bg-(--accent-copper)/10 group-hover:scale-110 transition-all duration-500 shadow-sm">
                    <div className="text-white group-hover:text-(--accent-copper) transition-colors duration-500">
                      {service.icon}
                    </div>
                  </div>
                  <h3 className="text-2xl font-bold mb-4 text-(--accent-copper)">
                    {service.title}
                  </h3>
                  <p className="text-(--body-grey) leading-relaxed">
                    {service.desc}
                  </p>
                </div>
              </SplitCornerCard>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Our A2P Platform? */}
      <section className="py-24 bg-(--body-bg)">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
            <div>
              <h2 className="text-4xl md:text-5xl font-bold mb-10 text-(--heading-dark) leading-tight">
                Why Choose Our A2P Platform?
              </h2>
              <div className="space-y-6">
                {[
                  "High-speed and reliable message delivery",
                  "Scalable solutions for startups and enterprises",
                  "Real-time reporting and analytics",
                  "Competitive pricing and flexible plans",
                  "24/7 technical support",
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-4">
                    <div className="p-2 bg-(--accent-copper)/10 rounded-lg">
                      <CheckCircle
                        className="text-(--accent-copper)"
                        size={24}
                      />
                    </div>
                    <span className="text-xl text-(--body-grey)">
                      {item}
                    </span>
                  </div>
                ))}
              </div>
            </div>
            <div className="bg-(--navbar-bg) rounded-[3rem] p-12 shadow-2xl border border-white/5 backdrop-blur-sm">
              <div className="space-y-8">
                <div className="flex items-center justify-between border-b border-white/10 pb-4">
                  <span className="text-(--text-off-white)/60">
                    Delivery Rate
                  </span>
                  <span className="text-3xl font-bold text-(--accent-copper)">
                    99.9%
                  </span>
                </div>
                <div className="flex items-center justify-between border-b border-white/10 pb-4">
                  <span className="text-(--text-off-white)/60">
                    Global Reach
                  </span>
                  <span className="text-3xl font-bold text-(--accent-copper)">
                    30+ Countries
                  </span>
                </div>
                <div className="flex items-center justify-between border-b border-white/10 pb-4">
                  <span className="text-(--text-off-white)/60">
                    Latency
                  </span>
                  <span className="text-3xl font-bold text-(--accent-copper)">
                    &lt; 5 Seconds
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Use Cases */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-bold text-(--heading-dark) mb-4">
              Use Cases
            </h2>
          </div>

          <div className="bg-[#B36433] rounded-[3rem] p-8 md:p-16 shadow-2xl relative overflow-hidden group">
            <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full -mr-32 -mt-32 blur-3xl transition-transform duration-1000 group-hover:scale-110"></div>
            <div className="absolute bottom-0 left-0 w-64 h-64 bg-black/5 rounded-full -ml-32 -mb-32 blur-3xl transition-transform duration-1000 group-hover:scale-110"></div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 relative z-10">
              {[
                {
                  title: "OTP & 2FA",
                  icon: <Shield size={32} />,
                  desc: "Secure logins with instant authentication codes.",
                },
                {
                  title: "Banking Alerts",
                  icon: <BarChart3 size={32} />,
                  desc: "Real-time transaction updates and fraud alerts.",
                },
                {
                  title: "E-commerce",
                  icon: <ShoppingCart size={32} />,
                  desc: "Order confirmations and shipping notifications.",
                },
                {
                  title: "Reminders",
                  icon: <Calendar size={32} />,
                  desc: "Automated appointment and payment reminders.",
                },
                {
                  title: "Support",
                  icon: <Headphones size={32} />,
                  desc: "Two-way communication for customer service.",
                },
                {
                  title: "Marketing",
                  icon: <Users size={32} />,
                  desc: "Targeted campaigns and personalized offers.",
                },
              ].map((useCase, i) => (
                <SplitCornerCard key={i} index={i % 4} delay={i * 100}>
                  <div className="p-8 rounded-3xl border shadow-xl transition-all duration-500 h-full flex flex-col group/card bg-white border-white hover:bg-white/90">
                    <div className="w-14 h-14 rounded-2xl flex items-center justify-center mb-6 group-hover/card:scale-110 transition-all duration-500 bg-[#B36433] group-hover/card:bg-[#B36433]/10">
                      <div className="transition-colors duration-500 text-white group-hover/card:text-[#B36433]">
                        {useCase.icon}
                      </div>
                    </div>
                    <h3 className="text-2xl font-bold mb-4 text-[#B36433]">
                      {useCase.title}
                    </h3>
                    <p className="leading-relaxed text-[#B36433]/80">
                      {useCase.desc}
                    </p>
                  </div>
                </SplitCornerCard>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Closing Section / CTA */}
      <section className="py-24 bg-black text-(--text-off-white) relative overflow-hidden">
        <div className="absolute top-0 right-0 w-1/3 h-full bg-linear-to-l from-(--accent-copper)/10 to-transparent"></div>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <h2 className="text-5xl font-bold mb-8 text-(--text-off-white) leading-tight">
            Start Connecting Smarter with Cyvora A2P Messaging
          </h2>
          <p className="text-2xl opacity-80 font-light mb-12">
            Empower your business with trusted A2P messaging solutions that keep
            you connected with your customers anytime, anywhere.
          </p>
          <Link
            to="/contact"
            className="inline-block bg-(--accent-copper) text-white px-10 py-5 rounded-full font-bold text-xl hover:shadow-2xl transform hover:scale-105 transition-all duration-300"
          >
            Contact Us Today
          </Link>
        </div>
      </section>
    </div>
  );
};

export default SMSService;
