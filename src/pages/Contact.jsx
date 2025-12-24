import { useState } from "react";
import { Mail, Phone, MapPin, Send } from "lucide-react";

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
      <section className="relative min-h-[50vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-[var(--navbar-bg)]"></div>

        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-10 left-10 w-72 h-72 bg-[var(--accent-copper)] rounded-full mix-blend-overlay filter blur-xl animate-blob"></div>
          <div className="absolute bottom-10 right-10 w-72 h-72 bg-[var(--accent-copper)] rounded-full mix-blend-overlay filter blur-xl animate-blob animation-delay-2000"></div>
        </div>

        <div className="relative z-10 text-center text-[var(--text-off-white)] px-4">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">Get in Touch</h1>
          <p className="text-xl md:text-2xl max-w-3xl mx-auto opacity-80">
            Let's discuss how we can help your business grow
          </p>
        </div>
      </section>

      {/* CONTACT SECTION */}
      <section className="py-20 bg-[var(--body-bg)]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* LEFT - CONTACT DETAILS */}
          <div>
            <h2 className="text-4xl font-bold mb-6 text-[var(--heading-dark)]">
              Contact Information
            </h2>
            <p className="text-lg text-[var(--body-grey)] mb-8">
              Have questions? We'd love to hear from you. Send us a message and
              we'll respond as soon as possible.
            </p>

            <div className="space-y-6">
              {/* Email */}
              <div className="flex items-start">
                <div className="bg-white p-4 rounded-full mr-4 shadow-sm border border-black/5">
                  <Mail className="text-[var(--accent-copper)]" size={24} />
                </div>
                <div>
                  <h3 className="font-semibold text-[var(--heading-dark)]">Email</h3>
                  <p className="text-[var(--body-grey)]">info@Cyvora.com</p>
                  <p className="text-[var(--body-grey)]">support@Cyvora.com</p>
                </div>
              </div>

              {/* Phone */}
              <div className="flex items-start">
                <div className="bg-white p-4 rounded-full mr-4 shadow-sm border border-black/5">
                  <Phone className="text-[var(--accent-copper)]" size={24} />
                </div>
                <div>
                  <h3 className="font-semibold text-[var(--heading-dark)]">Phone</h3>
                  <p className="text-[var(--body-grey)]">+1 (555) 123-4567</p>
                  <p className="text-[var(--body-grey)]">+1 (555) 987-6543</p>
                </div>
              </div>

              {/* Address */}
              <div className="flex items-start">
                <div className="bg-white p-4 rounded-full mr-4 shadow-sm border border-black/5">
                  <MapPin className="text-[var(--accent-copper)]" size={24} />
                </div>
                <div>
                  <h3 className="font-semibold text-[var(--heading-dark)]">Office</h3>
                  <p className="text-[var(--body-grey)]">123 Tech Street</p>
                  <p className="text-[var(--body-grey)]">Silicon Valley, CA 94025</p>
                </div>
              </div>
            </div>

            {/* Business Hours */}
            <div className="mt-12 p-8 bg-[var(--navbar-bg)] rounded-2xl border border-[var(--accent-copper)]/20">
              <h3 className="text-2xl font-bold mb-4 text-[var(--text-off-white)]">
                Business Hours
              </h3>
              <div className="space-y-2 text-[var(--text-off-white)]/70">
                <p>Monday - Friday: 9:00 AM - 6:00 PM</p>
                <p>Saturday: 10:00 AM - 4:00 PM</p>
                <p>Sunday: Closed</p>
                <p className="text-[var(--accent-copper)] font-semibold mt-4">
                  24/7 Support Available
                </p>
              </div>
            </div>
          </div>

          {/* RIGHT - FORM */}
          <div className="bg-white p-8 rounded-3xl shadow-xl border border-black/5">
            <h2 className="text-3xl font-bold mb-6 text-[var(--heading-dark)]">
              Send us a Message
            </h2>

            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Name */}
              <div>
                <label className="block text-[var(--body-grey)] font-semibold mb-2">
                  Full Name *
                </label>
                <input
                  name="name"
                  required
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-[var(--accent-copper)] outline-none transition-all"
                  placeholder="John Doe"
                />
              </div>

              {/* Email */}
              <div>
                <label className="block text-[var(--body-grey)] font-semibold mb-2">
                  Email Address *
                </label>
                <input
                  type="email"
                  name="email"
                  required
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-[var(--accent-copper)] outline-none transition-all"
                  placeholder="john@example.com"
                />
              </div>

              {/* Phone */}
              <div>
                <label className="block text-[var(--body-grey)] font-semibold mb-2">
                  Phone Number
                </label>
                <input
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-[var(--accent-copper)] outline-none transition-all"
                  placeholder="+1 (555) 123-4567"
                />
              </div>

              {/* Company */}
              <div>
                <label className="block text-[var(--body-grey)] font-semibold mb-2">
                  Company Name
                </label>
                <input
                  name="company"
                  value={formData.company}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-[var(--accent-copper)] outline-none transition-all"
                  placeholder="Your Company"
                />
              </div>

              {/* Message */}
              <div>
                <label className="block text-[var(--body-grey)] font-semibold mb-2">
                  Message *
                </label>
                <textarea
                  name="message"
                  required
                  value={formData.message}
                  onChange={handleChange}
                  rows={5}
                  className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-[var(--accent-copper)] outline-none resize-none transition-all"
                  placeholder="Tell us about your project..."
                ></textarea>
              </div>

              {/* Submit */}
              <button
                type="submit"
                className="w-full bg-[var(--accent-copper)] text-white py-4 rounded-lg font-bold text-lg hover:shadow-xl transform hover:scale-105 transition-all flex items-center justify-center"
              >
                Send Message
                <Send className="ml-2" size={20} />
              </button>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
