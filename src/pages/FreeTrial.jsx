import { useState } from "react";
import { CheckCircle, Sparkles } from "lucide-react";

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
    <div className="pt-20">
      {/* HERO SECTION */}
      <section className="relative min-h-[50vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-cyan-500 via-blue-600 to-purple-700 animate-gradient-shift"></div>

        {/* Floating Blobs */}
        <div className="absolute inset-0 opacity-30">
          <div className="absolute top-10 left-10 w-96 h-96 bg-cyan-300 rounded-full blur-3xl mix-blend-multiply animate-blob"></div>
          <div className="absolute bottom-10 right-10 w-96 h-96 bg-purple-300 rounded-full blur-3xl mix-blend-multiply animate-blob animation-delay-2000"></div>
          <div className="absolute top-1/2 left-1/2 w-96 h-96 bg-blue-300 rounded-full blur-3xl mix-blend-multiply animate-blob animation-delay-4000"></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
          <Sparkles size={64} className="mx-auto mb-6" />
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            Start Your Free Trial
          </h1>
          <p className="text-xl md:text-2xl max-w-3xl mx-auto">
            Try our services free for 14 days. No credit card required.
          </p>
        </div>
      </section>

      {/* CONTENT SECTION */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-blue-50">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* INCLUDED FEATURES */}
          <div className="bg-white p-8 rounded-3xl shadow-xl">
            <h2 className="text-3xl font-bold mb-6 text-gray-800">
              What's Included
            </h2>

            <ul className="space-y-4">
              {[
                "100 free SMS credits",
                "1 free DID number",
                "Full API access",
                "Real-time analytics dashboard",
                "Email support",
                "No credit card required",
                "Cancel anytime",
              ].map((item, index) => (
                <li key={index} className="flex items-start">
                  <CheckCircle className="text-green-500 mr-3 mt-1 flex-shrink-0" />
                  <span className="text-gray-700">{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* SIGNUP FORM */}
          <div className="bg-gradient-to-br from-blue-600 to-purple-600 p-8 rounded-3xl shadow-xl text-white">
            <h2 className="text-3xl font-bold mb-6">Sign Up Form</h2>

            <form onSubmit={handleSubmit} className="space-y-5">
              {[
                {
                  label: "Full Name *",
                  name: "fullName",
                  type: "text",
                  placeholder: "John Doe",
                },
                {
                  label: "Work Email *",
                  name: "email",
                  type: "email",
                  placeholder: "john@company.com",
                },
                {
                  label: "Phone Number *",
                  name: "phone",
                  type: "tel",
                  placeholder: "+1 (555) 123-4567",
                },
                {
                  label: "Company Name *",
                  name: "company",
                  type: "text",
                  placeholder: "Your Company",
                },
              ].map((field, i) => (
                <div key={i}>
                  <label className="block font-semibold mb-2">
                    {field.label}
                  </label>
                  <input
                    type={field.type}
                    required
                    name={field.name}
                    value={formData[field.name]}
                    onChange={handleChange}
                    placeholder={field.placeholder}
                    className="w-full px-4 py-3 rounded-lg text-gray-800 border-0 focus:ring-2 focus:ring-white outline-none"
                  />
                </div>
              ))}

              {/* SELECT FIELD */}
              <div>
                <label className="block font-semibold mb-2">
                  Service Interest *
                </label>
                <select
                  name="service"
                  value={formData.service}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-lg text-gray-800 border-0 focus:ring-2 focus:ring-white outline-none"
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
                className="w-full bg-white text-blue-600 py-4 rounded-lg font-bold text-lg hover:bg-gray-100 transform hover:scale-105 transition-all"
              >
                Start Free Trial
              </button>

              <p className="text-sm text-blue-100 text-center">
                By signing up, you agree to our Terms of Service and Privacy
                Policy
              </p>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
};

export default FreeTrial;
