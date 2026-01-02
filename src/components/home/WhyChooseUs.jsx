import { Shield, Zap, Activity, Globe, CheckCircle } from "lucide-react";
import { AnimatedText, ScatterCard } from "./Common";

const WhyChooseUs = () => {
  return (
    <section className="py-24 relative overflow-hidden bg-(--accent-copper)">
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
              text="Experience enterprise-grade infrastructure with 99.99% uptime, dedicated 24/7 support, and global reach across 30+ countries. Built for modern communication needs."
              delay={200}
            />
          </p>
        </div>

        <div
          className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12"
          style={{ perspective: "1500px" }}
        >
          {/* Reliability Card */}
          <ScatterCard index={0} delay={0}>
            <div className="group relative p-8 md:p-10 rounded-[2.5rem] bg-white border border-black/5 shadow-xl hover:shadow-2xl transition-all duration-500 overflow-hidden h-full">
              <div className="absolute inset-0 bg-gradient-to-br from-(--accent-copper)/10 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

              <div className="relative z-10">
                <div className="w-16 h-16 mb-8 rounded-2xl bg-(--accent-copper) flex items-center justify-center shadow-lg shadow-(--accent-copper)/20 group-hover:scale-110 transition-transform duration-500">
                  <Shield className="text-white" size={32} />
                </div>

                <h3 className="text-2xl font-bold text-(--heading-dark) mb-4 group-hover:text-(--accent-copper) transition-colors">
                  Bank-Grade Security
                </h3>

                <p className="text-(--body-grey) leading-relaxed mb-6">
                  Your data and communications are protected with
                  industry-leading encryption and compliance standards.
                </p>

                <ul className="space-y-2">
                  <li className="flex items-center text-sm text-(--body-grey)">
                    <CheckCircle
                      size={16}
                      className="mr-2 text-(--accent-copper)"
                    />{" "}
                    End-to-end encryption
                  </li>
                  <li className="flex items-center text-sm text-(--body-grey)">
                    <CheckCircle
                      size={16}
                      className="mr-2 text-(--accent-copper)"
                    />{" "}
                    GDPR & SOC2 Compliant
                  </li>
                </ul>
              </div>
            </div>
          </ScatterCard>

          {/* Performance Card */}
          <ScatterCard index={1} delay={200}>
            <div className="group relative p-8 md:p-10 rounded-[2.5rem] bg-white border border-black/5 shadow-xl hover:shadow-2xl transition-all duration-500 overflow-hidden h-full">
              <div className="absolute inset-0 bg-gradient-to-br from-(--accent-copper)/10 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

              <div className="relative z-10">
                <div className="w-16 h-16 mb-8 rounded-2xl bg-(--accent-copper) flex items-center justify-center shadow-lg shadow-(--accent-copper)/20 group-hover:scale-110 transition-transform duration-500">
                  <Zap className="text-white" size={32} />
                </div>

                <h3 className="text-2xl font-bold text-(--heading-dark) mb-4 group-hover:text-(--accent-copper) transition-colors">
                  High Performance
                </h3>

                <p className="text-(--body-grey) leading-relaxed mb-6">
                  Ultra-low latency and high-throughput infrastructure ensuring
                  your messages and calls are delivered instantly.
                </p>

                <ul className="space-y-2">
                  <li className="flex items-center text-sm text-(--body-grey)">
                    <CheckCircle
                      size={16}
                      className="mr-2 text-(--accent-copper)"
                    />{" "}
                    99.99% Uptime SLA
                  </li>
                  <li className="flex items-center text-sm text-(--body-grey)">
                    <CheckCircle
                      size={16}
                      className="mr-2 text-(--accent-copper)"
                    />{" "}
                    Low latency routing
                  </li>
                </ul>
              </div>
            </div>
          </ScatterCard>

          {/* Global Reach Card */}
          <ScatterCard index={2} delay={400}>
            <div className="group relative p-8 md:p-10 rounded-[2.5rem] bg-white border border-black/5 shadow-xl hover:shadow-2xl transition-all duration-500 overflow-hidden h-full">
              <div className="absolute inset-0 bg-gradient-to-br from-(--accent-copper)/10 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

              <div className="relative z-10">
                <div className="w-16 h-16 mb-8 rounded-2xl bg-(--accent-copper) flex items-center justify-center shadow-lg shadow-(--accent-copper)/20 group-hover:scale-110 transition-transform duration-500">
                  <Globe className="text-white" size={32} />
                </div>

                <h3 className="text-2xl font-bold text-(--heading-dark) mb-4 group-hover:text-(--accent-copper) transition-colors">
                  Global Reach
                </h3>

                <p className="text-(--body-grey) leading-relaxed mb-6">
                  Connect with customers anywhere in the world through our
                  extensive network of direct operator connections in 30+
                  countries.
                </p>

                <ul className="space-y-2">
                  <li className="flex items-center text-sm text-(--body-grey)">
                    <CheckCircle
                      size={16}
                      className="mr-2 text-(--accent-copper)"
                    />{" "}
                    30+ Countries covered
                  </li>
                  <li className="flex items-center text-sm text-(--body-grey)">
                    <CheckCircle
                      size={16}
                      className="mr-2 text-(--accent-copper)"
                    />{" "}
                    Direct carrier routes
                  </li>
                  <li className="flex items-center text-sm text-(--body-grey)">
                    <CheckCircle
                      size={16}
                      className="mr-2 text-(--accent-copper)"
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
  );
};

export default WhyChooseUs;
