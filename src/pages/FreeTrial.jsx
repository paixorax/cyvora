import { useState } from "react";
import { CheckCircle, Sparkles, ArrowRight } from "lucide-react";

const FreeTrial = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    company: "",
    service: "sms",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(
      "Free trial request submitted! (Frontend only - no backend integration)"
    );
    console.log("Trial form data:", formData);
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <div className="pt-24">
      {/* HERO SECTION */}
      <section className="relative min-h-[40vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-[var(--navbar-bg)]"></div>

        {/* Floating Blobs */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-10 left-10 w-96 h-96 bg-[var(--accent-copper)] rounded-full blur-3xl mix-blend-overlay animate-blob"></div>
          <div className="absolute bottom-10 right-10 w-96 h-96 bg-[var(--accent-copper)] rounded-full blur-3xl mix-blend-overlay animate-blob animation-delay-2000"></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-[var(--text-off-white)]">
          <div className="inline-flex items-center justify-center p-3 mb-6 rounded-2xl bg-white/10 backdrop-blur-md border border-white/20">
            <Sparkles size={40} className="text-[var(--accent-copper)]" />
          </div>
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            Start Your <span className="text-[var(--accent-copper)]">Free Trial</span>
          </h1>
          <p className="text-xl md:text-2xl max-w-3xl mx-auto opacity-80 font-light">
            Experience the power of Cyvora for 14 days. No credit card required.
          </p>
        </div>
      </section>

      {/* CONTENT SECTION */}
      <section className="py-20 bg-[var(--body-bg)]">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            {/* INCLUDED FEATURES */}
            <div className="animate-fadeInUp">
              <h2 className="text-3xl font-bold mb-8 text-[var(--heading-dark)]">
                What's Included in Your Trial
              </h2>
              <p className="text-lg text-[var(--body-grey)] mb-10 leading-relaxed">
                Get full access to our enterprise communication platform and see why
                thousands of businesses trust Cyvora for their global telecom needs.
              </p>

              <div className="space-y-6">
                {[
                  { title: "100 Free SMS Credits", desc: "Test our high-speed global SMS gateway" },
                  { title: "1 Free DID Number", desc: "Get a local or toll-free number instantly" },
                  { title: "Full API Access", desc: "Integrate our services into your own applications" },
                  { title: "Real-time Analytics", desc: "Track your communications with detailed reports" },
                  { title: "Enterprise Support", desc: "24/7 access to our technical expert team" },
                ].map((item, index) => (
                  <div key={index} className="flex items-start group">
                    <div className="bg-white p-2 rounded-lg shadow-sm border border-black/5 mr-4 group-hover:border-[var(--accent-copper)]/30 transition-all">
                      <CheckCircle className="text-[var(--accent-copper)]" size={24} />
                    </div>
                    <div>
                      <h3 className="font-bold text-[var(--heading-dark)]">{item.title}</h3>
                      <p className="text-[var(--body-grey)] text-sm">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-12 p-8 bg-[var(--navbar-bg)] rounded-2xl border border-[var(--accent-copper)]/20 relative overflow-hidden group">
                <div className="absolute top-0 right-0 w-32 h-32 bg-[var(--accent-copper)]/10 rounded-full -mr-16 -mt-16 blur-2xl"></div>
                <h4 className="text-[var(--text-off-white)] font-bold mb-2">Need a custom plan?</h4>
                <p className="text-[var(--text-off-white)]/70 text-sm mb-4">
                  For large enterprises with specific requirements, we offer tailored solutions.
                </p>
                <a href="/contact" className="text-[var(--accent-copper)] font-bold flex items-center hover:gap-2 transition-all">
                  Contact Sales <ArrowRight size={16} className="ml-2" />
                </a>
              </div>
            </div>

            {/* SIGNUP FORM */}
            <div className="bg-white p-8 md:p-10 rounded-3xl shadow-2xl border border-black/5 animate-fadeInUp animation-delay-200">
              <h2 className="text-2xl font-bold mb-8 text-[var(--heading-dark)] border-b pb-4">
                Register Your Account
              </h2>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-bold text-[var(--body-grey)] mb-2 uppercase tracking-wide">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      required
                      name="fullName"
                      value={formData.fullName}
                      onChange={handleChange}
                      placeholder="John Doe"
                      className="w-full px-4 py-3 rounded-xl bg-gray-50 border border-gray-200 focus:ring-2 focus:ring-[var(--accent-copper)] focus:bg-white outline-none transition-all text-[var(--body-grey)]"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-bold text-[var(--body-grey)] mb-2 uppercase tracking-wide">
                      Work Email *
                    </label>
                    <input
                      type="email"
                      required
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="john@company.com"
                      className="w-full px-4 py-3 rounded-xl bg-gray-50 border border-gray-200 focus:ring-2 focus:ring-[var(--accent-copper)] focus:bg-white outline-none transition-all text-[var(--body-grey)]"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-bold text-[var(--body-grey)] mb-2 uppercase tracking-wide">
                      Phone Number *
                    </label>
                    <input
                      type="tel"
                      required
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      placeholder="+1 (555) 123-4567"
                      className="w-full px-4 py-3 rounded-xl bg-gray-50 border border-gray-200 focus:ring-2 focus:ring-[var(--accent-copper)] focus:bg-white outline-none transition-all text-[var(--body-grey)]"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-bold text-[var(--body-grey)] mb-2 uppercase tracking-wide">
                      Company Name *
                    </label>
                    <input
                      type="text"
                      required
                      name="company"
                      value={formData.company}
                      onChange={handleChange}
                      placeholder="Your Company"
                      className="w-full px-4 py-3 rounded-xl bg-gray-50 border border-gray-200 focus:ring-2 focus:ring-[var(--accent-copper)] focus:bg-white outline-none transition-all text-[var(--body-grey)]"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-bold text-[var(--body-grey)] mb-2 uppercase tracking-wide">
                    Service of Interest *
                  </label>
                  <select
                    name="service"
                    value={formData.service}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-xl bg-gray-50 border border-gray-200 focus:ring-2 focus:ring-[var(--accent-copper)] focus:bg-white outline-none transition-all text-[var(--body-grey)]"
                  >
                    <option value="sms">SMS Solutions</option>
                    <option value="voice">Voice Services</option>
                    <option value="did">DID Numbers</option>
                    <option value="software">Software Solutions</option>
                    <option value="all">All Services</option>
                  </select>
                </div>

                <button
                  type="submit"
                  className="w-full bg-[var(--accent-copper)] text-white py-4 rounded-xl font-bold text-lg hover:shadow-2xl hover:shadow-[var(--accent-copper)]/30 transform hover:scale-[1.02] transition-all flex items-center justify-center gap-2"
                >
                  Start My Free Trial
                  <ArrowRight size={20} />
                </button>

                <p className="text-xs text-[var(--body-grey)] opacity-60 text-center px-4">
                  By signing up, you agree to Cyvora's <a href="#" className="underline hover:text-[var(--accent-copper)]">Terms of Service</a> and <a href="#" className="underline hover:text-[var(--accent-copper)]">Privacy Policy</a>.
                </p>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default FreeTrial;
