import {
  Phone,
  CheckCircle,
  Globe,
  TrendingUp,
  Shield,
  Zap,
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

export const VoiceService = () => {
  return (
    <div className="pt-24">
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Background Image with Overlay */}
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat transition-transform duration-1000"
          style={{ backgroundImage: "url('/serviceherosection.jpg')" }}
        ></div>
        {/* Consistent overlay with homepage style */}
        <div className="absolute inset-0 bg-black/60 backdrop-blur-[2px]"></div>

        {/* Animated Blobs */}
        <div className="absolute inset-0 opacity-20 pointer-events-none">
          <div className="absolute top-20 left-20 w-96 h-96 bg-(--accent-copper) rounded-full mix-blend-overlay filter blur-3xl animate-blob"></div>
          <div className="absolute bottom-10 right-20 w-96 h-96 bg-(--accent-copper) rounded-full mix-blend-overlay filter blur-3xl animate-blob animation-delay-2000"></div>
        </div>

        <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center -mt-32">
          <div className="inline-flex items-center justify-center p-4 mb-8 rounded-2xl bg-white/10 backdrop-blur-md border border-white/20 shadow-xl animate-fadeInUp">
            <Phone size={48} className="text-(--accent-copper)" />
          </div>

          <h1 className="text-2xl md:text-4xl lg:text-6xl font-black mb-6 leading-tight tracking-tight drop-shadow-2xl">
            <span className="block mb-2 text-white font-extrabold tracking-tight">
              <AnimatedText text="Premium Global" delay={0} />
            </span>
            <span className="block text-(--accent-copper) font-extrabold tracking-tight text-2xl md:text-4xl lg:text-5xl">
              <AnimatedText text="Voice Solutions" delay={500} />
            </span>
          </h1>

          <p className="text-lg md:text-xl lg:text-2xl text-white mb-8 max-w-3xl mx-auto font-medium leading-relaxed drop-shadow-lg">
            <AnimatedText
              text="High-quality, scalable, and cost-effective wholesale and retail voice termination services designed to keep the world talking."
              delay={1000}
            />
          </p>
        </div>
      </section>

      <section
        id="explore"
        className="py-24 bg-(--body-bg) relative overflow-hidden scroll-mt-32"
      >
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-white/5 to-transparent"></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center mb-32">
            <div className="order-2 lg:order-1">
              <h2 className="text-4xl md:text-5xl font-bold mb-8 text-(--heading-dark) leading-tight">
                Delivering Crystal-Clear Connectivity
              </h2>
              <p className="text-xl text-(--body-grey) mb-10 leading-relaxed">
                At Cyvora, we understand that every millisecond counts. Our
                robust VoIP infrastructure is engineered to provide
                crystal-clear voice quality across our extensive global network.
                Whether you are a small business or a large enterprise, our
                voice solutions are built to scale with your communication
                needs.
              </p>

              <div className="space-y-8">
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-(--accent-copper)/10 rounded-xl">
                    <CheckCircle
                      className="text-(--accent-copper)"
                      size={28}
                    />
                  </div>
                  <div>
                    <h4 className="text-xl font-bold text-(--heading-dark) mb-2">
                      Global Footprint
                    </h4>
                    <p className="text-(--body-grey)">
                      Direct routes to emerging markets and established hubs
                      worldwide.
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-(--accent-copper)/10 rounded-xl">
                    <CheckCircle
                      className="text-(--accent-copper)"
                      size={28}
                    />
                  </div>
                  <div>
                    <h4 className="text-xl font-bold text-(--heading-dark) mb-2">
                      Real-time Monitoring
                    </h4>
                    <p className="text-(--body-grey)">
                      24/7 NOC support to ensure traffic flows without
                      interruption and peak performance.
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-(--accent-copper)/10 rounded-xl">
                    <CheckCircle
                      className="text-(--accent-copper)"
                      size={28}
                    />
                  </div>
                  <div>
                    <h4 className="text-xl font-bold text-(--heading-dark) mb-2">
                      Carrier-Grade Security
                    </h4>
                    <p className="text-(--body-grey)">
                      Advanced encryption and fraud detection protocols to
                      protect your business communication.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="order-1 lg:order-2">
              <div className="relative">
                <div className="absolute -inset-4 bg-(--accent-copper)/20 rounded-[2rem] blur-2xl"></div>
                <img
                  src="/services2.jpg"
                  alt="Global Connectivity"
                  className="relative rounded-[2rem] shadow-2xl w-full object-cover h-[500px] border border-white/10"
                />
                <div className="absolute -bottom-10 -left-10 bg-(--navbar-bg) p-8 rounded-3xl shadow-2xl border border-white/10 hidden md:block">
                  <div className="text-4xl font-bold text-(--accent-copper) mb-1">
                    99.99%
                  </div>
                  <div className="text-(--text-off-white) opacity-70">
                    Uptime Reliability
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center mb-32">
            <div className="relative">
              <div className="absolute -inset-4 bg-(--accent-copper)/20 rounded-[2rem] blur-2xl"></div>
              <img
                src="/services4.jpg"
                alt="Voice Infrastructure"
                className="relative rounded-[2rem] shadow-2xl w-full object-cover h-[500px] border border-white/10"
              />
            </div>
            <div>
              <h2 className="text-4xl md:text-5xl font-bold mb-8 text-(--heading-dark) leading-tight">
                Advanced Voice Infrastructure
              </h2>
              <p className="text-xl text-(--body-grey) mb-8 leading-relaxed">
                Our infrastructure is built on carrier-grade equipment, ensuring
                that your calls are handled with the highest priority and
                reliability. We leverage the latest in VoIP technology to
                provide a seamless experience.
              </p>
              <div className="grid grid-cols-2 gap-6">
                <SplitCornerCard index={0} delay={0}>
                  <div className="p-6 bg-white rounded-2xl shadow-sm border border-black/5 h-full">
                    <div className="text-3xl font-bold text-(--accent-copper) mb-2">
                      Low Latency
                    </div>
                    <p className="text-sm text-(--body-grey)">
                      Optimized routing for minimal delay.
                    </p>
                  </div>
                </SplitCornerCard>
                <SplitCornerCard index={1} delay={100}>
                  <div className="p-6 bg-white rounded-2xl shadow-sm border border-black/5 h-full">
                    <div className="text-3xl font-bold text-(--accent-copper) mb-2">
                      HD Voice
                    </div>
                    <p className="text-sm text-(--body-grey)">
                      Superior audio quality for every call.
                    </p>
                  </div>
                </SplitCornerCard>
                <SplitCornerCard index={2} delay={200}>
                  <div className="p-6 bg-white rounded-2xl shadow-sm border border-black/5 h-full">
                    <div className="text-3xl font-bold text-(--accent-copper) mb-2">
                      Scale
                    </div>
                    <p className="text-sm text-(--body-grey)">
                      Handle thousands of concurrent calls.
                    </p>
                  </div>
                </SplitCornerCard>
                <SplitCornerCard index={3} delay={300}>
                  <div className="p-6 bg-white rounded-2xl shadow-sm border border-black/5 h-full">
                    <div className="text-3xl font-bold text-(--accent-copper) mb-2">
                      24/7 Support
                    </div>
                    <p className="text-sm text-(--body-grey)">
                      Expert help whenever you need it.
                    </p>
                  </div>
                </SplitCornerCard>
              </div>
            </div>
          </div>

          <div className="text-center mb-16">
            <h2 className="text-5xl font-bold text-(--heading-dark) mb-4">
              Our Core Offerings
            </h2>
            <p className="text-xl text-(--body-grey) max-w-2xl mx-auto">
              Comprehensive voice solutions tailored for wholesale carriers and
              enterprise needs.
            </p>
          </div>

          <div className="bg-[#B36433] rounded-[3rem] p-8 md:p-16 mb-32 shadow-2xl relative overflow-hidden group">
            <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full -mr-32 -mt-32 blur-3xl transition-transform duration-1000 group-hover:scale-110"></div>
            <div className="absolute bottom-0 left-0 w-64 h-64 bg-black/5 rounded-full -ml-32 -mb-32 blur-3xl transition-transform duration-1000 group-hover:scale-110"></div>

            <div
              className="grid grid-cols-1 md:grid-cols-3 gap-8 relative z-10"
              style={{ perspective: "1200px" }}
            >
              <SplitCornerCard index={0} delay={0}>
                <div className="p-10 bg-white/10 backdrop-blur-md rounded-3xl border border-white/20 shadow-xl hover:bg-white/20 transition-all duration-500 h-full flex flex-col group/card">
                  <div className="w-16 h-16 bg-white/20 rounded-2xl flex items-center justify-center mb-6 group-hover/card:bg-white group-hover/card:scale-110 transition-all duration-500">
                    <Globe
                      size={32}
                      className="text-white group-hover/card:text-[#B36433] transition-colors duration-500"
                    />
                  </div>
                  <h3 className="text-2xl font-bold mb-4 text-white">
                    Wholesale Voice Termination
                  </h3>
                  <p className="text-white/80 flex-grow leading-relaxed">
                    Benefit from our strategic partnerships with Tier-1 carriers
                    worldwide. We offer competitive A-Z routing with a focus on
                    high ACD and ASR metrics to ensure business continuity.
                  </p>
                </div>
              </SplitCornerCard>

              <SplitCornerCard index={1} delay={100}>
                <div className="p-10 bg-white/10 backdrop-blur-md rounded-3xl border border-white/20 shadow-xl hover:bg-white/20 transition-all duration-500 h-full flex flex-col group/card">
                  <div className="w-16 h-16 bg-white/20 rounded-2xl flex items-center justify-center mb-6 group-hover/card:bg-white group-hover/card:scale-110 transition-all duration-500">
                    <Phone
                      size={32}
                      className="text-white group-hover/card:text-[#B36433] transition-colors duration-500"
                    />
                  </div>
                  <h3 className="text-2xl font-bold mb-4 text-white">
                    SIP Trunking
                  </h3>
                  <p className="text-white/80 flex-grow leading-relaxed">
                    Modernize your legacy PBX systems. Our SIP trunks provide a
                    flexible and secure connection, reducing your monthly
                    telecom spend by up to 60% while improving scalability.
                  </p>
                </div>
              </SplitCornerCard>

              <SplitCornerCard index={2} delay={200}>
                <div className="p-10 bg-white/10 backdrop-blur-md rounded-3xl border border-white/20 shadow-xl hover:bg-white/20 transition-all duration-500 h-full flex flex-col group/card">
                  <div className="w-16 h-16 bg-white/20 rounded-2xl flex items-center justify-center mb-6 group-hover/card:bg-white group-hover/card:scale-110 transition-all duration-500">
                    <CheckCircle
                      size={32}
                      className="text-white group-hover/card:text-[#B36433] transition-colors duration-500"
                    />
                  </div>
                  <h3 className="text-2xl font-bold mb-4 text-white">
                    Enterprise Voice
                  </h3>
                  <p className="text-white/80 flex-grow leading-relaxed">
                    Managed communication services that allow your team to
                    collaborate from anywhere, on any device, with 99.99% uptime
                    and enterprise-grade security features.
                  </p>
                </div>
              </SplitCornerCard>
            </div>
          </div>
        </div>
      </section>

      <section className="py-24 bg-black text-(--text-off-white) relative overflow-hidden">
        <div className="absolute top-0 right-0 w-1/3 h-full bg-gradient-to-l from-(--accent-copper)/10 to-transparent"></div>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <h2 className="text-5xl font-bold mb-8 text-(--text-off-white)">
            Quality, Global Reach, and Seamless Connectivity.
          </h2>
          <p className="text-2xl opacity-80 font-light">
            Join hundreds of businesses relying on Cyvora for crystal-clear
            voice connectivity and reliable global termination.
          </p>
        </div>
      </section>
    </div>
  );
};

export default VoiceService;
