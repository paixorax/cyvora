import { AnimatedText } from "./Common";

const TrustedBy = () => {
  return (
    <section className="py-20 bg-black relative border-t border-white/10 overflow-hidden">
      <div className="w-full">
        {/* Header */}
        <div className="text-center mb-12 animate-fadeInUp px-4">
          <p className="text-sm font-semibold text-(--accent-copper) uppercase tracking-widest">
            <AnimatedText text="Trusted by Industry Leaders" delay={0} />
          </p>
          <h2 className="text-3xl md:text-4xl font-bold text-white mt-2">
            <AnimatedText text="Powering Global Communications" delay={100} />
          </h2>
        </div>

        {/* Marquee / Brands */}
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
              ...[
                "Beeline",
                "Ucell",
                "Mobiuz",
                "Uzmobile",
                "Perfectum Mobile",
              ],
              ...[
                "Beeline",
                "Ucell",
                "Mobiuz",
                "Uzmobile",
                "Perfectum Mobile",
              ],
            ].map((brand, index) => (
              <div
                key={index}
                className="w-48 h-24 shrink-0 group p-6 rounded-xl bg-white/5 border border-white/10 hover:bg-white/10 hover:border-(--accent-copper)/50 transition-all duration-300 flex items-center justify-center backdrop-blur-sm"
              >
                <div className="text-xl font-bold text-(--footer-text)/60 group-hover:text-white transition-colors duration-300">
                  {brand}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TrustedBy;
