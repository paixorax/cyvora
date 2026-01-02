import {
  Code,
  CheckCircle,
  Zap,
  Layout,
  Search,
  PenTool,
  Cpu,
  ShieldCheck,
  Rocket,
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

  const words = text.split(" ");
  let charCount = 0;

  return (
    <span ref={elementRef} className={className}>
      {words.map((word, wordIndex) => {
        const wordChars = word.split("");
        const result = (
          <span key={wordIndex} style={{ display: "inline-block", whiteSpace: "nowrap" }}>
            {wordChars.map((char, charIndex) => {
              const currentDelay = delay + charCount * 40;
              charCount++;
              return (
                <span
                  key={charIndex}
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
            {wordIndex < words.length - 1 && (
              <span style={{ display: "inline-block" }}>&nbsp;</span>
            )}
          </span>
        );
        if (wordIndex < words.length - 1) charCount++; // account for space
        return result;
      })}
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

export const SoftwareService = () => {
  return (
    <div className="pt-24">
      {/* 1. Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat transition-transform duration-1000"
          style={{ backgroundImage: "url('/softwareherosection.jpg')" }}
        ></div>
        <div className="absolute inset-0 bg-black/60 backdrop-blur-[2px]"></div>

        <div className="absolute inset-0 opacity-20 pointer-events-none">
          <div className="absolute top-20 left-20 w-96 h-96 bg-(--accent-copper) rounded-full mix-blend-overlay filter blur-3xl animate-blob"></div>
          <div className="absolute bottom-10 right-20 w-96 h-96 bg-(--accent-copper) rounded-full mix-blend-overlay filter blur-3xl animate-blob animation-delay-2000"></div>
        </div>

        <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center -mt-32">
          <div className="inline-flex items-center justify-center p-4 mb-8 rounded-2xl bg-white/10 backdrop-blur-md border border-white/20 shadow-xl animate-fadeInUp">
            <Code size={48} className="text-(--accent-copper)" />
          </div>

          <h1 className="text-2xl md:text-5xl lg:text-6xl font-black mb-6 leading-tight tracking-tight drop-shadow-2xl text-white">
            <span className="block mb-2">
              <AnimatedText text="Smart Software Solutions" delay={0} />
            </span>
            <span className="block text-(--accent-copper) text-2xl md:text-4xl lg:text-5xl ">
              <AnimatedText text="for Modern Businesses" delay={500} />
            </span>
          </h1>

          <p className="text-lg md:text-xl lg:text-2xl text-white mb-8 max-w-3xl mx-auto font-medium leading-relaxed drop-shadow-lg opacity-90">
            <AnimatedText
              text="We are building robust and scalable software solutions tailored to businesses' needs. At Cyvora, we specialize in engineering high-performance software that integrates advanced features, ensuring seamless user experiences and scalable architecture for modern enterprises."
              delay={1000}
            />
          </p>


        </div>
      </section>

      {/* 2. Our Development Services */}
      <section className="py-24 bg-(--body-bg) relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
            <div className="order-2 lg:order-1">
              <h2 className="text-4xl md:text-5xl font-bold mb-8 text-(--heading-dark) leading-tight">
                Our Development Services
              </h2>
              <div className="space-y-6 text-xl text-(--body-grey) leading-relaxed">
                <p>
                  At Cyvora, we provide end-to-end software development services
                  designed to transform your business ideas into reality. From
                  custom web applications to enterprise-grade solutions, we
                  deliver excellence at every stage.
                </p>
                <div className="p-6 bg-(--accent-copper)/5 border-l-4 border-(--accent-copper) rounded-r-2xl shadow-sm">
                  <p className="text-(--heading-dark) font-bold flex items-center gap-3 mb-2">
                    <Rocket className="text-(--accent-copper)" size={24} />
                    Customized Solutions
                  </p>
                  <p className="text-(--body-grey) text-lg leading-relaxed">
                    We don't believe in one-size-fits-all. Our development team
                    works closely with you to build tailored software that
                    addresses your unique challenges and accelerates your
                    business growth.
                  </p>
                </div>
              </div>
            </div>
            <div className="order-1 lg:order-2">
              <div className="relative">
                <div className="absolute -inset-4 bg-(--accent-copper)/20 rounded-[2rem] blur-2xl"></div>
                <img
                  src="/soft2.jpg"
                  alt="Our Development Services"
                  className="relative rounded-[2rem] shadow-2xl w-full object-cover h-[500px] border border-white/10"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. Why Choose Our Services */}
      <section className="py-24 bg-white relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center mb-16">
            <div className="relative">
              <div className="absolute -inset-4 bg-(--accent-copper)/10 rounded-[2rem] blur-2xl"></div>
              <img
                src="/soft4.jpg"
                alt="Modern Tech Stack"
                className="relative rounded-[2rem] shadow-xl w-full object-cover h-[400px] border border-black/5"
              />
            </div>
            <div>
              <h2 className="text-5xl font-bold text-(--heading-dark) mb-6">
                Why Choose Our Services
              </h2>
              <p className="text-xl text-(--body-grey) leading-relaxed">
                We combine technical excellence with a client-first approach to
                deliver development services that provide real business value.
                Our commitment to quality ensures your software is reliable,
                secure, and ready for the future.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                title: "Modern Technologies",
                desc: "Built with the latest and most efficient technology stack for peak performance.",
                icon: <Zap className="text-(--accent-copper)" size={32} />,
              },
              {
                title: "Reliability & Usability",
                desc: "Focused on creating stable systems with intuitive user experiences.",
                icon: (
                  <Layout className="text-(--accent-copper)" size={32} />
                ),
              },
              {
                title: "Designed to Grow",
                desc: "Scalable architecture that evolves alongside your business requirements.",
                icon: <Cpu className="text-(--accent-copper)" size={32} />,
              },
              {
                title: "Best Practices",
                desc: "Follows industry-standard coding practices and security protocols.",
                icon: (
                  <ShieldCheck
                    className="text-(--accent-copper)"
                    size={32}
                  />
                ),
              },
            ].map((feature, i) => (
              <SplitCornerCard key={i} index={i % 4} delay={i * 100}>
                <div className="p-8 bg-(--body-bg) rounded-3xl border border-black/5 hover:border-(--accent-copper)/30 transition-all duration-300 group h-full">
                  <div className="w-16 h-16 bg-white rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-500 shadow-sm">
                    {feature.icon}
                  </div>
                  <h3 className="text-2xl font-bold mb-4 text-(--heading-dark)">
                    {feature.title}
                  </h3>
                  <p className="text-(--body-grey) leading-relaxed">
                    {feature.desc}
                  </p>
                </div>
              </SplitCornerCard>
            ))}
          </div>
        </div>
      </section>

      {/* 4. Our Service Process */}
      <section className="py-24 bg-(--body-bg)">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-bold text-(--heading-dark) mb-4">
              Our Service Process
            </h2>
            <p className="text-xl text-(--body-grey) max-w-3xl mx-auto">
              We follow a transparent and collaborative process to ensure our
              services meet your exact requirements.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
            {[
              {
                title: "Requirement Analysis",
                desc: "Understanding business needs",
                icon: <Search size={24} />,
              },
              {
                title: "Design & Planning",
                desc: "Clean architecture & UX planning",
                icon: <PenTool size={24} />,
              },
              {
                title: "Agile Development",
                desc: "Modular coding with iterative updates",
                icon: <Code size={24} />,
              },
              {
                title: "Testing",
                desc: "Performance & quality checks",
                icon: <ShieldCheck size={24} />,
              },
              {
                title: "Launch",
                desc: "Production-ready deployment (Coming Soon)",
                icon: <Rocket size={24} />,
              },
            ].map((step, i) => (
              <div
                key={i}
                className="relative p-8 bg-white rounded-3xl border border-black/5 shadow-sm flex flex-col items-center text-center group hover:border-(--accent-copper)/30 transition-all"
              >
                <div className="w-12 h-12 bg-(--accent-copper)/10 rounded-xl flex items-center justify-center mb-6 text-(--accent-copper) group-hover:scale-110 transition-transform">
                  {step.icon}
                </div>
                <h3 className="text-xl font-bold mb-2 text-(--heading-dark)">
                  {step.title}
                </h3>
                <p className="text-sm text-(--body-grey)">{step.desc}</p>
                {i < 4 && (
                  <div className="hidden lg:block absolute top-1/2 -right-4 w-8 h-[2px] bg-black/5"></div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. Call to Action / Contact Section */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-[#B36433] rounded-[3rem] p-8 md:p-20 shadow-2xl relative overflow-hidden group text-center text-white">
            <div className="absolute top-0 right-0 w-96 h-96 bg-white/5 rounded-full -mr-48 -mt-48 blur-3xl transition-transform duration-1000 group-hover:scale-110"></div>
            <div className="absolute bottom-0 left-0 w-96 h-96 bg-black/5 rounded-full -ml-48 -mb-48 blur-3xl transition-transform duration-1000 group-hover:scale-110"></div>

            <div className="relative z-10 max-w-3xl mx-auto">
              <h2 className="text-4xl md:text-5xl font-bold mb-8">
                Ready to Experience Excellence in Development?
              </h2>
              <p className="text-xl text-white/80 mb-10 leading-relaxed">
                Partner with Cyvora for professional software development services
                that empower your business and drive digital transformation. Our
                team of dedicated experts is committed to delivering high-quality,
                scalable solutions that help your business stay ahead in a
                rapidly evolving technological landscape.
              </p>
              <div className="flex flex-wrap justify-center gap-6">
                <Link
                  to="/contact"
                  className="px-10 py-5 bg-white text-[#B36433] rounded-2xl font-bold text-xl hover:bg-white/90 transition-all shadow-xl hover:scale-105 active:scale-95 inline-block"
                >
                  Talk to an Expert
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
