import {
  MessageSquare,
  Globe,
  Phone,
  Code,
  CheckCircle,
  ArrowRight,
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

const ScatterCard = ({ children, index = 0, delay = 0, total = 3 }) => {
  const [isVisible, setIsVisible] = useState(false);
  const [isHovering, setIsHovering] = useState(false);
  const elementRef = useRef(null);
  const containerRef = useRef(null);

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

  const handleMouseEnter = () => {
    setIsHovering(true);
  };

  const handleMouseLeave = () => {
    setIsHovering(false);
  };

  const getStyle = () => {
    if (!isVisible) {
      const isLeft = index === 0;
      const isRight = index === 2;
      let distance = isLeft ? -300 : isRight ? 300 : 0;
      let rotation = isLeft ? -40 : isRight ? 40 : 0;

      return {
        opacity: 0,
        transform: `translateX(${distance}px) scale(0.5) rotateY(${rotation}deg)`,
        transition: `all 1.2s cubic-bezier(0.16, 1, 0.3, 1) ${delay}ms`,
        perspective: "1500px",
        transformStyle: "preserve-3d",
      };
    }

    return {
      opacity: 1,
      transform: "translateX(0) translateY(0) scale(1) rotateZ(0)",
      transition: `all 1.2s cubic-bezier(0.16, 1, 0.3, 1) ${delay}ms`,
      perspective: "1500px",
      transformStyle: "preserve-3d",
      animation: `scatterCard${index} 11s infinite cubic-bezier(0.4, 0.0, 0.2, 1)`,
      animationPlayState: isHovering ? "paused" : "running",
    };
  };

  return (
    <>
      <style>{`
        @keyframes scatterCard0 {
          0% {
            transform: translate(-300px, -200px) scale(0.5) rotateZ(-45deg);
          }
          18% {
            transform: translate(0, 0) scale(1) rotateZ(0deg);
          }
          36% {
            transform: translate(0, 0) scale(1) rotateZ(0deg);
          }
          100% {
            transform: translate(-300px, -200px) scale(0.5) rotateZ(-45deg);
          }
        }

        @keyframes scatterCard1 {
          0% {
            transform: translate(0, -280px) scale(0.4) rotateZ(0deg);
          }
          18% {
            transform: translate(0, 0) scale(1) rotateZ(0deg);
          }
          36% {
            transform: translate(0, 0) scale(1) rotateZ(0deg);
          }
          100% {
            transform: translate(0, -280px) scale(0.4) rotateZ(0deg);
          }
        }

        @keyframes scatterCard2 {
          0% {
            transform: translate(300px, -200px) scale(0.5) rotateZ(45deg);
          }
          18% {
            transform: translate(0, 0) scale(1) rotateZ(0deg);
          }
          36% {
            transform: translate(0, 0) scale(1) rotateZ(0deg);
          }
          100% {
            transform: translate(300px, -200px) scale(0.5) rotateZ(45deg);
          }
        }
      `}</style>
      <div
        ref={containerRef}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        style={{ perspective: "1500px" }}
      >
        <div ref={elementRef} style={getStyle()}>
          {children}
        </div>
      </div>
    </>
  );
};

export const SMSService = () => {
  return (
    <div className="pt-20">
      <section className="relative min-h-[60vh] flex items-center justify-center overflow-hidden">
        {/* Background Image with Overlay */}
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: "url('/services.jpeg')" }}
        ></div>
        <div className="absolute inset-0 bg-black/60"></div>

        {/* Animated Blobs */}
        <div className="absolute inset-0 opacity-30 pointer-events-none">
          <div className="absolute top-10 left-10 w-64 h-64 bg-cyan-400 rounded-full mix-blend-screen filter blur-3xl animate-blob"></div>
          <div className="absolute bottom-10 right-10 w-64 h-64 bg-blue-500 rounded-full mix-blend-screen filter blur-3xl animate-blob animation-delay-2000"></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
          <div className="inline-flex items-center justify-center p-4 mb-6 rounded-2xl bg-white/10 backdrop-blur-md border border-white/20 shadow-lg animate-fadeInUp">
            <MessageSquare size={48} className="text-cyan-400" />
          </div>
          <h1 className="text-5xl md:text-7xl font-black mb-6 tracking-tight">
            <span className="bg-clip-text  bg-gradient-to-r from-white via-cyan-100 to-blue-200">
              <AnimatedText text="SMS Solutions" delay={0} />
            </span>
          </h1>
          <p className="text-xl md:text-2xl max-w-3xl mx-auto text-blue-100 font-light leading-relaxed">
            <AnimatedText
              text="Powerful SMS gateway APIs and bulk messaging solutions for businesses"
              delay={300}
            />
          </p>
        </div>
      </section>

      <section className="py-20 bg-slate-950 relative overflow-hidden">
        {/* Background overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-slate-950 via-transparent to-slate-950"></div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-20">
            <div>
              <h2 className="text-4xl font-bold mb-6 text-white">
                Enterprise SMS Platform
              </h2>
              <p className="text-lg text-blue-100 mb-8">
                Send bulk SMS messages worldwide with our robust and scalable
                SMS gateway. Perfect for marketing campaigns, OTP verification,
                notifications, and more.
              </p>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <CheckCircle
                    className="text-blue-400 mr-3 mt-1 flex-shrink-0"
                    size={24}
                  />
                  <span className="text-blue-200">
                    99.9% delivery rate with intelligent routing
                  </span>
                </li>
                <li className="flex items-start">
                  <CheckCircle
                    className="text-blue-400 mr-3 mt-1 flex-shrink-0"
                    size={24}
                  />
                  <span className="text-blue-200">
                    Two-way SMS and long code support
                  </span>
                </li>
                <li className="flex items-start">
                  <CheckCircle
                    className="text-blue-400 mr-3 mt-1 flex-shrink-0"
                    size={24}
                  />
                  <span className="text-blue-200">
                    Advanced analytics and real-time reporting
                  </span>
                </li>
                <li className="flex items-start">
                  <CheckCircle
                    className="text-blue-400 mr-3 mt-1 flex-shrink-0"
                    size={24}
                  />
                  <span className="text-blue-200">
                    RESTful API with comprehensive documentation
                  </span>
                </li>
              </ul>
            </div>
            <div className="bg-gradient-to-br from-blue-900/30 to-purple-900/30 rounded-3xl p-12 shadow-xl border border-blue-500/20 backdrop-blur-sm">
              <div className="bg-slate-900/80 rounded-2xl p-8 shadow-inner border border-white/5">
                <code className="text-sm text-blue-200 font-mono">
                  <div className="mb-2 text-blue-400">POST /api/sms/send</div>
                  <div className="mb-2 text-purple-400">{"{"}</div>
                  <div className="ml-4 mb-2"><span className="text-cyan-300">"to"</span>: <span className="text-green-300">"+1234567890"</span>,</div>
                  <div className="ml-4 mb-2"><span className="text-cyan-300">"message"</span>: <span className="text-green-300">"Hello World"</span>,</div>
                  <div className="ml-4 mb-2"><span className="text-cyan-300">"from"</span>: <span className="text-green-300">"Cyvora"</span></div>
                  <div className="text-purple-400">{"}"}</div>
                </code>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8" style={{ perspective: "1200px" }}>
            <ScatterCard index={0} delay={0}>
              <div className="p-8 bg-gradient-to-br from-blue-900/20 to-blue-800/20 rounded-2xl border border-blue-500/30 hover:bg-blue-900/40 transition-all duration-300 h-full backdrop-blur-sm">
                <h3 className="text-2xl font-bold mb-4 text-white">
                  Bulk SMS
                </h3>
                <p className="text-blue-200/80">
                  Send thousands of messages instantly with our high-throughput
                  SMS gateway
                </p>
              </div>
            </ScatterCard>
            
            <ScatterCard index={1} delay={100}>
              <div className="p-8 bg-gradient-to-br from-purple-900/20 to-purple-800/20 rounded-2xl border border-purple-500/30 hover:bg-purple-900/40 transition-all duration-300 h-full backdrop-blur-sm">
                <h3 className="text-2xl font-bold mb-4 text-white">
                  OTP & Verification
                </h3>
                <p className="text-blue-200/80">
                  Secure authentication with fast OTP delivery and verification
                  APIs
                </p>
              </div>
            </ScatterCard>
            
            <ScatterCard index={2} delay={200}>
              <div className="p-8 bg-gradient-to-br from-cyan-900/20 to-cyan-800/20 rounded-2xl border border-cyan-500/30 hover:bg-cyan-900/40 transition-all duration-300 h-full backdrop-blur-sm">
                <h3 className="text-2xl font-bold mb-4 text-white">
                  A2P Messaging
                </h3>
                <p className="text-blue-200/80">
                  Application-to-Person messaging for transactional and
                  promotional content
                </p>
              </div>
            </ScatterCard>
          </div>
        </div>
      </section>

      <section className="py-20 bg-gradient-to-br from-blue-900 to-purple-900 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold mb-6">Ready to Send SMS?</h2>
          <p className="text-xl mb-8">Start with 100 free SMS credits</p>
          <a
            href="/free-trial"
            className="inline-block bg-white text-blue-600 px-8 py-4 rounded-full font-bold text-lg hover:shadow-2xl transform hover:scale-105 transition-all"
          >
            Get Started Free
          </a>
        </div>
      </section>
    </div>
  );
};

export const DIDService = () => {
  return (
    <div className="pt-20">
      <section className="relative min-h-[60vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-pink-500 via-red-500 to-orange-600 animate-gradient-shift"></div>
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-10 right-10 w-64 h-64 bg-yellow-400 rounded-full mix-blend-multiply filter blur-xl animate-blob"></div>
          <div className="absolute bottom-10 left-10 w-64 h-64 bg-pink-300 rounded-full mix-blend-multiply filter blur-xl animate-blob animation-delay-2000"></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
          <Globe size={80} className="mx-auto mb-6" />
          <h1 className="text-5xl md:text-6xl font-bold mb-6">DID Numbers</h1>
          <p className="text-xl md:text-2xl max-w-3xl mx-auto">
            Local and toll-free numbers in 100+ countries worldwide
          </p>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4 text-gray-800">
              Global Virtual Numbers
            </h2>
            <p className="text-xl text-gray-600">
              Establish a local presence anywhere in the world
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            <div className="p-6 bg-gradient-to-br from-pink-50 to-red-50 rounded-xl text-center">
              <div className="text-3xl font-bold text-pink-600 mb-2">100+</div>
              <div className="text-gray-600">Countries</div>
            </div>
            <div className="p-6 bg-gradient-to-br from-red-50 to-orange-50 rounded-xl text-center">
              <div className="text-3xl font-bold text-red-600 mb-2">5000+</div>
              <div className="text-gray-600">Cities</div>
            </div>
            <div className="p-6 bg-gradient-to-br from-orange-50 to-yellow-50 rounded-xl text-center">
              <div className="text-3xl font-bold text-orange-600 mb-2">
                Instant
              </div>
              <div className="text-gray-600">Activation</div>
            </div>
            <div className="p-6 bg-gradient-to-br from-yellow-50 to-green-50 rounded-xl text-center">
              <div className="text-3xl font-bold text-yellow-600 mb-2">
                24/7
              </div>
              <div className="text-gray-600">Support</div>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <h3 className="text-3xl font-bold mb-6 text-gray-800">
                Features
              </h3>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <CheckCircle
                    className="text-pink-600 mr-3 mt-1 flex-shrink-0"
                    size={24}
                  />
                  <span className="text-gray-700">
                    Local, national, and toll-free numbers
                  </span>
                </li>
                <li className="flex items-start">
                  <CheckCircle
                    className="text-pink-600 mr-3 mt-1 flex-shrink-0"
                    size={24}
                  />
                  <span className="text-gray-700">
                    Instant provisioning and activation
                  </span>
                </li>
                <li className="flex items-start">
                  <CheckCircle
                    className="text-pink-600 mr-3 mt-1 flex-shrink-0"
                    size={24}
                  />
                  <span className="text-gray-700">
                    Number portability support
                  </span>
                </li>
                <li className="flex items-start">
                  <CheckCircle
                    className="text-pink-600 mr-3 mt-1 flex-shrink-0"
                    size={24}
                  />
                  <span className="text-gray-700">
                    Advanced call routing and forwarding
                  </span>
                </li>
                <li className="flex items-start">
                  <CheckCircle
                    className="text-pink-600 mr-3 mt-1 flex-shrink-0"
                    size={24}
                  />
                  <span className="text-gray-700">
                    SMS and voice enabled numbers
                  </span>
                </li>
              </ul>
            </div>
            <div className="bg-gradient-to-br from-pink-100 to-orange-100 rounded-3xl p-8 flex items-center justify-center">
              <div className="text-center">
                <div className="text-6xl font-bold text-gray-800 mb-4">
                  +1 (555) XXX-XXXX
                </div>
                <p className="text-xl text-gray-600">Your Business Number</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export const VoiceService = () => {
  return (
    <div className="pt-20">
      <section className="relative min-h-[60vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-purple-500 via-indigo-600 to-blue-700 animate-gradient-shift"></div>
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-20 left-20 w-72 h-72 bg-purple-300 rounded-full mix-blend-multiply filter blur-xl animate-blob"></div>
          <div className="absolute bottom-10 right-20 w-72 h-72 bg-blue-300 rounded-full mix-blend-multiply filter blur-xl animate-blob animation-delay-2000"></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
          <Phone size={80} className="mx-auto mb-6" />
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            Voice Services
          </h1>
          <p className="text-xl md:text-2xl max-w-3xl mx-auto">
            Cloud PBX, IVR, and programmable voice solutions
          </p>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="p-8 bg-gradient-to-br from-purple-50 to-purple-100 rounded-2xl hover:shadow-xl transition-shadow">
              <h3 className="text-2xl font-bold mb-4 text-gray-800">
                Cloud PBX
              </h3>
              <p className="text-gray-600 mb-4">
                Enterprise phone system in the cloud with advanced features
              </p>
              <ul className="space-y-2 text-sm text-gray-600">
                <li className="flex items-center">
                  <ArrowRight size={16} className="mr-2 text-purple-600" />
                  Call routing & queuing
                </li>
                <li className="flex items-center">
                  <ArrowRight size={16} className="mr-2 text-purple-600" />
                  Voicemail to email
                </li>
                <li className="flex items-center">
                  <ArrowRight size={16} className="mr-2 text-purple-600" />
                  Conference calling
                </li>
              </ul>
            </div>

            <div className="p-8 bg-gradient-to-br from-indigo-50 to-indigo-100 rounded-2xl hover:shadow-xl transition-shadow">
              <h3 className="text-2xl font-bold mb-4 text-gray-800">
                IVR System
              </h3>
              <p className="text-gray-600 mb-4">
                Interactive Voice Response for automated customer service
              </p>
              <ul className="space-y-2 text-sm text-gray-600">
                <li className="flex items-center">
                  <ArrowRight size={16} className="mr-2 text-indigo-600" />
                  Multi-level menus
                </li>
                <li className="flex items-center">
                  <ArrowRight size={16} className="mr-2 text-indigo-600" />
                  Speech recognition
                </li>
                <li className="flex items-center">
                  <ArrowRight size={16} className="mr-2 text-indigo-600" />
                  Custom prompts
                </li>
              </ul>
            </div>

            <div className="p-8 bg-gradient-to-br from-blue-50 to-blue-100 rounded-2xl hover:shadow-xl transition-shadow">
              <h3 className="text-2xl font-bold mb-4 text-gray-800">
                Call Recording
              </h3>
              <p className="text-gray-600 mb-4">
                Record, store, and analyze all your business calls
              </p>
              <ul className="space-y-2 text-sm text-gray-600">
                <li className="flex items-center">
                  <ArrowRight size={16} className="mr-2 text-blue-600" />
                  Automatic recording
                </li>
                <li className="flex items-center">
                  <ArrowRight size={16} className="mr-2 text-blue-600" />
                  Secure storage
                </li>
                <li className="flex items-center">
                  <ArrowRight size={16} className="mr-2 text-blue-600" />
                  Easy playback
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export const SoftwareService = () => {
  return (
    <div className="pt-20">
      <section className="relative min-h-[60vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-green-500 via-teal-600 to-cyan-700 animate-gradient-shift"></div>
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-10 left-10 w-64 h-64 bg-green-300 rounded-full mix-blend-multiply filter blur-xl animate-blob"></div>
          <div className="absolute bottom-10 right-10 w-64 h-64 bg-cyan-300 rounded-full mix-blend-multiply filter blur-xl animate-blob animation-delay-2000"></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
          <Code size={80} className="mx-auto mb-6" />
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            Software Solutions
          </h1>
          <p className="text-xl md:text-2xl max-w-3xl mx-auto">
            Custom telecom platforms and enterprise integrations
          </p>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4 text-gray-800">
              Tailored Solutions
            </h2>
            <p className="text-xl text-gray-600">
              Built for your unique business requirements
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="p-8 bg-gradient-to-br from-green-50 to-teal-50 rounded-2xl">
              <h3 className="text-2xl font-bold mb-4 text-gray-800">
                Custom Development
              </h3>
              <p className="text-gray-600">
                Bespoke telecom platforms designed and built for your specific
                needs
              </p>
            </div>
            <div className="p-8 bg-gradient-to-br from-teal-50 to-cyan-50 rounded-2xl">
              <h3 className="text-2xl font-bold mb-4 text-gray-800">
                API Integration
              </h3>
              <p className="text-gray-600">
                Seamless integration with your existing systems and workflows
              </p>
            </div>
            <div className="p-8 bg-gradient-to-br from-cyan-50 to-blue-50 rounded-2xl">
              <h3 className="text-2xl font-bold mb-4 text-gray-800">
                White Label
              </h3>
              <p className="text-gray-600">
                Rebrand our platform with your company identity
              </p>
            </div>
            <div className="p-8 bg-gradient-to-br from-blue-50 to-green-50 rounded-2xl">
              <h3 className="text-2xl font-bold mb-4 text-gray-800">
                Enterprise Support
              </h3>
              <p className="text-gray-600">
                Dedicated account management and technical support
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
