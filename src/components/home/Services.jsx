import { Link } from "react-router-dom";
import { MessageSquare, Phone, Globe, Zap, ArrowRight } from "lucide-react";
import { AnimatedText, SplitCornerCard } from "./Common";

const Services = () => {
  return (
    <section className="py-24 relative overflow-hidden bg-(--body-bg)">
      {/* Background overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-(--body-bg) via-transparent to-(--body-bg)"></div>

      <style>{`
        .bg-grid-slate-100 {
          background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 32 32' width='32' height='32' fill='none' stroke='rgb(241 245 249 / 0.1)'%3E%3Cpath d='M0 .5H31.5V32'/%3E%3C/svg%3E");
        }
      `}</style>
      <div className="absolute top-0 right-0 w-96 h-96 bg-(--accent-copper)/5 rounded-full mix-blend-multiply filter blur-3xl opacity-20 -mr-48 animate-pulse"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-(--accent-copper)/5 rounded-full mix-blend-multiply filter blur-3xl opacity-20 -ml-48 animate-pulse"></div>

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

          <h2 className="text-4xl md:text-5xl lg:text-6xl font-black mb-6 text-(--heading-dark) tracking-tight leading-tight">
            <AnimatedText text="Comprehensive " delay={0} />
            <span className="text-(--accent-copper)">
              <AnimatedText text="Telecom Solutions" delay={150} />
            </span>
          </h2>
          <p className="text-lg md:text-xl text-(--body-grey) max-w-3xl mx-auto font-light leading-relaxed">
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
              <div className="absolute inset-0 bg-gradient-to-br from-(--accent-copper)/10 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <div className="relative z-10">
                <div className="w-14 h-14 md:w-16 md:h-16 mb-5 md:mb-6 rounded-2xl bg-(--accent-copper) flex items-center justify-center shadow-lg shadow-(--accent-copper)/20 group-hover:scale-110 transition-transform duration-500">
                  <MessageSquare className="text-white" size={32} />
                </div>
                <h3 className="text-xl md:text-2xl font-bold mb-3 md:mb-4 text-(--heading-dark) group-hover:text-(--accent-copper) transition-colors">
                  SMS Solutions
                </h3>
                <p className="text-(--body-grey) mb-5 md:mb-6 leading-relaxed text-sm">
                  Bulk SMS, A2P messaging, and SMS gateway APIs designed for
                  global reach and high deliverability.
                </p>
                <Link
                  to="/services/sms"
                  className="text-(--accent-copper) font-semibold flex items-center hover:gap-2 transition-all group/link text-sm uppercase tracking-wide"
                >
                  Learn More{" "}
                  <ArrowRight
                    size={16}
                    className="ml-1 group-hover/link:translate-x-1 transition-transform"
                  />
                </Link>
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
              <div className="absolute inset-0 bg-gradient-to-br from-(--accent-copper)/10 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <div className="relative z-10">
                <div className="w-14 h-14 md:w-16 md:h-16 mb-5 md:mb-6 rounded-2xl bg-(--accent-copper) flex items-center justify-center shadow-lg shadow-(--accent-copper)/20 group-hover:scale-110 transition-transform duration-500">
                  <Phone className="text-white" size={32} />
                </div>
                <h3 className="text-xl md:text-2xl font-bold mb-3 md:mb-4 text-(--heading-dark) group-hover:text-(--accent-copper) transition-colors">
                  Voice Services
                </h3>
                <p className="text-(--body-grey) mb-5 md:mb-6 leading-relaxed text-sm">
                  Crystal clear Cloud PBX, IVR systems, call recording, and
                  robust voice APIs for your business.
                </p>
                <Link
                  to="/services/voice"
                  className="text-(--accent-copper) font-semibold flex items-center hover:gap-2 transition-all group/link text-sm uppercase tracking-wide"
                >
                  Learn More{" "}
                  <ArrowRight
                    size={16}
                    className="ml-1 group-hover/link:translate-x-1 transition-transform"
                  />
                </Link>
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
              <div className="absolute inset-0 bg-gradient-to-br from-(--accent-copper)/10 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <div className="relative z-10">
                <div className="w-14 h-14 md:w-16 md:h-16 mb-5 md:mb-6 rounded-2xl bg-(--accent-copper) flex items-center justify-center shadow-lg shadow-(--accent-copper)/20 group-hover:scale-110 transition-transform duration-500">
                  <Globe className="text-white" size={32} />
                </div>
                <h3 className="text-xl md:text-2xl font-bold mb-3 md:mb-4 text-(--heading-dark) group-hover:text-(--accent-copper) transition-colors">
                  DID Numbers
                </h3>
                <p className="text-(--body-grey) mb-5 md:mb-6 leading-relaxed text-sm">
                  Instant access to local, mobile, and toll-free numbers in
                  over 40+ countries worldwide seamless connectivity.
                </p>
                <Link
                  to="/services/did"
                  className="text-(--accent-copper) font-semibold flex items-center hover:gap-2 transition-all group/link text-sm uppercase tracking-wide"
                >
                  Learn More{" "}
                  <ArrowRight
                    size={16}
                    className="ml-1 group-hover/link:translate-x-1 transition-transform"
                  />
                </Link>
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
              <div className="absolute inset-0 bg-gradient-to-br from-(--accent-copper)/10 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <div className="relative z-10">
                <div className="w-14 h-14 md:w-16 md:h-16 mb-5 md:mb-6 rounded-2xl bg-(--accent-copper) flex items-center justify-center shadow-lg shadow-(--accent-copper)/20 group-hover:scale-110 transition-transform duration-500">
                  <Zap className="text-white" size={32} />
                </div>
                <h3 className="text-xl md:text-2xl font-bold mb-3 md:mb-4 text-(--heading-dark) group-hover:text-(--accent-copper) transition-colors">
                  Software Solutions
                </h3>
                <p className="text-(--body-grey) mb-5 md:mb-6 leading-relaxed text-sm">
                  Custom telecom platforms, white-label solutions, and
                  enterprise-grade integrations.
                </p>
                <Link
                  to="/services/software"
                  className="text-(--accent-copper) font-semibold flex items-center hover:gap-2 transition-all group/link text-sm uppercase tracking-wide"
                >
                  Learn More{" "}
                  <ArrowRight
                    size={16}
                    className="ml-1 group-hover/link:translate-x-1 transition-transform"
                  />
                </Link>
              </div>
            </div>
          </SplitCornerCard>
        </div>
      </div>
    </section>
  );
};

export default Services;
