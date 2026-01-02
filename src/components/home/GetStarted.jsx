import { ArrowRightCircle, CheckCircle } from "lucide-react";
import { AnimatedText, SlideInCard } from "./Common";

const GetStarted = () => {
  return (
    <section className="py-24 relative overflow-hidden bg-(--body-bg)">
      {/* Animated background blobs */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-(--accent-copper)/5 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-(--accent-copper)/5 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob animation-delay-2000"></div>

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

            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 text-(--heading-dark) leading-tight">
              <span className="block">
                <AnimatedText text="Ready to Scale Your" delay={0} />
              </span>

              <span className="block text-(--accent-copper)">
                <AnimatedText text=" Business?" delay={100} />
              </span>
            </h2>

            <p className="text-lg md:text-xl text-(--body-grey) mb-8 leading-relaxed">
              <AnimatedText
                text="Join thousands of forward-thinking businesses using our telecom\u00A0solutions to drive growth\u00A0and customer engagement. Our platform is designed to scale with your needs, providing reliability and performance you can trust."
                delay={200}
              />
            </p>

            <ul className="space-y-3 mb-8">
              {[
                "Enterprise-grade security & compliance",
                "Global coverage in 30+ countries",
                "Seamless API integration",
                "24/7 dedicated support team",
              ].map((item, i) => (
                <li
                  key={i}
                  className="flex items-center gap-3 text-(--body-grey)"
                >
                  <CheckCircle
                    className="text-(--accent-copper) flex-shrink-0"
                    size={20}
                  />
                  <span>{item}</span>
                </li>
              ))}
            </ul>

            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-10">
              <div className="p-4 bg-white rounded-xl border border-black/5 shadow-sm">
                <div className="text-2xl sm:text-3xl font-bold text-(--accent-copper) mb-1">
                  30K+
                </div>
                <div className="text-(--body-grey) text-xs uppercase tracking-wider font-semibold">
                  Daily Messages
                </div>
              </div>
              <div className="p-4 bg-white rounded-xl border border-black/5 shadow-sm">
                <div className="text-2xl sm:text-3xl font-bold text-(--accent-copper) mb-1">
                  15+
                </div>
                <div className="text-(--body-grey) text-xs uppercase tracking-wider font-semibold">
                  Active Customers
                </div>
              </div>
              <div className="p-4 bg-white rounded-xl border border-black/5 shadow-sm">
                <div className="text-2xl sm:text-3xl font-bold text-(--accent-copper) mb-1">
                  99.9%
                </div>
                <div className="text-(--body-grey) text-xs uppercase tracking-wider font-semibold">
                  Uptime SLA
                </div>
              </div>
              <div className="p-4 bg-white rounded-xl border border-black/5 shadow-sm">
                <div className="text-2xl sm:text-3xl font-bold text-(--accent-copper) mb-1">
                  30+
                </div>
                <div className="text-(--body-grey) text-xs uppercase tracking-wider font-semibold">
                  Countries Covered
                </div>
              </div>
            </div>
          </div>

          <SlideInCard delay={300}>
            <div className="relative animate-fadeInUp animation-delay-400">
              <div className="absolute -inset-1 bg-gradient-to-br from-(--accent-copper)/40 via-(--accent-copper)/60 to-(--accent-copper)/80 rounded-[2rem] blur-lg opacity-70 group-hover:opacity-100 transition duration-1000 group-hover:duration-200 animate-tilt"></div>
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
  );
};

export default GetStarted;
