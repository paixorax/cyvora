import { useState, useEffect, useRef } from "react";
import { Mail, Phone, MapPin, Send, CheckCircle } from "lucide-react";

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
            transition: `all 0.3s ease-out ${delay + index * 20}ms`,
          }}
        >
          {char === " " ? "\u00A0" : char}
        </span>
      ))}
    </span>
  );
};

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    message: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Form submitted! (Frontend only - no backend integration)");
    console.log("Form data:", formData);
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div className="pt-24">
      {/* HERO SECTION */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat transition-transform duration-1000 scale-105"
          style={{ backgroundImage: "url('/HeroVideo.jpg')" }}
        ></div>
        <div className="absolute inset-0 bg-black/50 backdrop-blur-[2px]"></div>

        <div className="absolute inset-0 opacity-20 pointer-events-none">
          <div className="absolute top-20 left-20 w-96 h-96 bg-(--accent-copper) rounded-full mix-blend-overlay filter blur-3xl animate-blob"></div>
          <div className="absolute bottom-10 right-20 w-96 h-96 bg-(--accent-copper) rounded-full mix-blend-overlay filter blur-3xl animate-blob animation-delay-2000"></div>
        </div>

        <div className="relative z-10 text-center text-white px-4 max-w-4xl mx-auto -mt-20">
          <h1 className="text-5xl md:text-6xl font-black mb-6 leading-tight tracking-tight drop-shadow-2xl text-white">
            <AnimatedText text="Get in " delay={0} />
            <span className="text-(--accent-copper)">
              <AnimatedText text="Touch" delay={500} />
            </span>
          </h1>
          <p className="text-xl md:text-2xl font-medium leading-relaxed drop-shadow-lg opacity-90">
            <AnimatedText
              text="Have a project in mind or just want to say hello? Our team of experts is here to help you navigate your digital transformation journey."
              delay={800}
            />
          </p>
        </div>
      </section>

      {/* CONTACT SECTION */}
      <section className="py-24 bg-(--body-bg) relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            {/* LEFT - CONTACT DETAILS */}
            <div className="space-y-12">
              <div>
                <h2 className="text-4xl md:text-5xl font-bold mb-6 text-(--heading-dark) leading-tight">
                  Let's Build Something <br />
                  <span className="text-(--accent-copper)">Extraordinary</span>
                </h2>
                <p className="text-xl text-(--body-grey) leading-relaxed">
                  Whether you have a specific project in mind or just want to
                  explore how we can help, our team is ready to listen and
                  provide expert guidance.
                </p>
              </div>

              <div className="grid grid-cols-1 gap-8">
                {[
                  {
                    icon: <Mail className="text-(--accent-copper)" size={28} />,
                    title: "Email Us",
                    content: "info@cyvoratech.com",
                    sub: "Direct communication for all inquiries",
                  },
                  {
                    icon: (
                      <Phone className="text-(--accent-copper)" size={28} />
                    ),
                    title: "Call Us",
                    content: "+998 90 481 51 76",
                    sub: "Mon-Sat from 9am to 6pm",
                  },
                  {
                    icon: (
                      <MapPin className="text-(--accent-copper)" size={28} />
                    ),
                    title: "Visit Us",
                    content: "Tashkent, Uzbekistan",
                    sub: "Come say hello at our headquarters",
                  },
                ].map((item, i) => (
                  <div
                    key={i}
                    className="flex items-center p-6 bg-white rounded-3xl border border-black/5 shadow-sm hover:shadow-md transition-all group"
                  >
                    <div className="w-16 h-16 bg-(--accent-copper)/10 rounded-2xl flex items-center justify-center mr-6 group-hover:scale-110 transition-transform duration-500">
                      {item.icon}
                    </div>
                    <div>
                      <h3 className="text-lg font-bold text-(--heading-dark)">
                        {item.title}
                      </h3>
                      <p className="text-(--accent-copper) font-semibold text-xl">
                        {item.content}
                      </p>
                      <p className="text-sm text-(--body-grey)">{item.sub}</p>
                    </div>
                  </div>
                ))}
              </div>

              {/* Business Hours */}
              <div className="p-8 bg-[#B36433] rounded-[2.5rem] shadow-2xl relative overflow-hidden group text-white">
                <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full -mr-32 -mt-32 blur-3xl transition-transform duration-1000 group-hover:scale-110"></div>
                <div className="relative z-10">
                  <h3 className="text-2xl font-bold mb-6 flex items-center gap-3">
                    <CheckCircle size={28} />
                    Service Availability
                  </h3>
                  <div className="space-y-4">
                    <div className="flex justify-between items-center border-b border-white/10 pb-2">
                      <span className="opacity-80">Weekdays</span>
                      <span className="font-bold">9:00 AM - 6:00 PM</span>
                    </div>
                    <div className="flex justify-between items-center border-b border-white/10 pb-2">
                      <span className="opacity-80">Saturday</span>
                      <span className="font-bold">10:00 AM - 4:00 PM</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="opacity-80">Sunday</span>
                      <span className="font-bold">Closed</span>
                    </div>
                    <p className="text-white font-bold mt-6 bg-white/20 py-3 px-6 rounded-xl inline-block">
                      24/7 Technical Support Available
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* RIGHT - FORM */}
            <div className="bg-white p-8 md:p-12 rounded-[3rem] shadow-2xl border border-black/5 relative lg:-top-12">
              <div className="absolute top-0 right-0 w-32 h-32 bg-(--accent-copper)/5 rounded-full -mr-16 -mt-16 blur-2xl"></div>
              <h2 className="text-3xl font-bold mb-8 text-(--heading-dark)">
                Send us a Message
              </h2>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-(--body-grey) font-bold mb-2 text-sm uppercase tracking-wider">
                      Full Name
                    </label>
                    <input
                      name="name"
                      required
                      value={formData.name}
                      onChange={handleChange}
                      className="w-full px-5 py-4 bg-(--body-bg) border-none rounded-2xl focus:ring-2 focus:ring-(--accent-copper) outline-none transition-all"
                      placeholder="John Doe"
                    />
                  </div>
                  <div>
                    <label className="block text-(--body-grey) font-bold mb-2 text-sm uppercase tracking-wider">
                      Email Address
                    </label>
                    <input
                      type="email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full px-5 py-4 bg-(--body-bg) border-none rounded-2xl focus:ring-2 focus:ring-(--accent-copper) outline-none transition-all"
                      placeholder="john@example.com"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-(--body-grey) font-bold mb-2 text-sm uppercase tracking-wider">
                      Phone Number
                    </label>
                    <input
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full px-5 py-4 bg-(--body-bg) border-none rounded-2xl focus:ring-2 focus:ring-(--accent-copper) outline-none transition-all"
                      placeholder="+1 (555) 000-0000"
                    />
                  </div>
                  <div>
                    <label className="block text-(--body-grey) font-bold mb-2 text-sm uppercase tracking-wider">
                      Company
                    </label>
                    <input
                      name="company"
                      value={formData.company}
                      onChange={handleChange}
                      className="w-full px-5 py-4 bg-(--body-bg) border-none rounded-2xl focus:ring-2 focus:ring-(--accent-copper) outline-none transition-all"
                      placeholder="Your Business"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-(--body-grey) font-bold mb-2 text-sm uppercase tracking-wider">
                    Message
                  </label>
                  <textarea
                    name="message"
                    required
                    value={formData.message}
                    onChange={handleChange}
                    rows={4}
                    className="w-full px-5 py-4 bg-(--body-bg) border-none rounded-2xl focus:ring-2 focus:ring-(--accent-copper) outline-none resize-none transition-all"
                    placeholder="Describe your project goals..."
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="w-full bg-[#B36433] text-white py-5 rounded-2xl font-bold text-xl hover:shadow-2xl hover:scale-[1.02] active:scale-[0.98] transition-all flex items-center justify-center group"
                >
                  Send Inquiry
                  <Send
                    className="ml-3 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform"
                    size={24}
                  />
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
