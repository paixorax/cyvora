import { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { AnimatedText } from "./Common";

const Hero = () => {
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
        <div className="absolute inset-0 bg-linear-to-b from-black/40 via-black/30 to-black/50"></div>
      </div>

      {/* CONTENT */}
      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center -mt-10">
        {/* heading */}
        <h1 className="text-3xl md:text-5xl lg:text-6xl font-black mb-6 leading-tight tracking-tight">
          <span className="block mb-3 text-white font-extrabold tracking-tight">
            <AnimatedText text="Transform " delay={0} />
            <AnimatedText text="Your " delay={100} />
            <span className="text-(--accent-copper)">
              <AnimatedText text="Telecom" delay={200} />
            </span>
          </span>

          <span className="block text-(--accent-copper) font-extrabold tracking-tight">
            <AnimatedText text="Business" delay={300} />
          </span>
        </h1>

        {/* description */}
        <p className="text-xl sm:text-2xl md:text-3xl lg:text-3xl text-(--text-off-white)/80 mb-8 max-w-3xl mx-auto font-bold">
          <AnimatedText
            text="Enterprise-grade communication solutions with global reach"
            delay={100}
          />
        </p>

        {/* button */}
        <div className="animate-fadeInUp animation-delay-400 mt-12 flex justify-center">
          <Link
            to="/#services"
            className="group relative flex items-center justify-center w-40 h-40 transition-all duration-500 hover:scale-110"
          >
            {/* Outer Rotating Dotted Circle */}
            <div className="absolute inset-0 rounded-full border border-dashed border-(--accent-copper)/40 animate-[spin_15s_linear_infinite] group-hover:border-solid group-hover:border-(--accent-copper)/60 transition-all duration-500"></div>

            {/* Middle Rotating Border */}
            <div className="absolute inset-3 rounded-full border-2 border-white/10 border-t-(--accent-copper) animate-[spin_3s_linear_infinite] group-hover:border-t-white transition-all duration-500"></div>

            {/* Main Circle Background */}
            <div className="absolute inset-5 rounded-full bg-linear-to-br from-(--accent-copper) to-orange-600 shadow-[0_0_30px_rgba(234,88,12,0.3)] group-hover:shadow-[0_0_50px_rgba(234,88,12,0.5)] transition-all duration-500 flex items-center justify-center overflow-hidden">
              {/* Internal Glass Highlight */}
              <div className="absolute top-0 left-0 w-full h-1/2 bg-white/10 -skew-y-12 -translate-y-2 group-hover:translate-y-0 transition-transform duration-700"></div>

              {/* Content Container */}
              <div className="relative z-10 flex flex-col items-center gap-1 text-white">
                <span className="text-[9px] uppercase tracking-widest font-black opacity-90 group-hover:opacity-100 transition-all">
                  Explore
                </span>

                <span className="text-xs font-black tracking-tight leading-tight px-3 text-center">
                  OUR
                  <br />
                  SOLUTIONS
                </span>
                <div className="mt-1 p-1 rounded-full bg-white/10 group-hover:bg-white/20 transition-colors">
                  <ArrowRight
                    size={14}
                    className="group-hover:translate-x-1 group-hover:-rotate-45 transition-all duration-300"
                  />
                </div>
              </div>
            </div>

            {/* Pulsing Outer Glow */}
            <div className="absolute inset-0 rounded-full bg-(--accent-copper)/20 blur-xl animate-pulse -z-10"></div>
          </Link>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-25 left-1/2 transform -translate-x-1/2 animate-bounce z-20">
        <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center hover:border-white/50 transition-colors">
          <div className="w-1 h-3 bg-white/60 rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
