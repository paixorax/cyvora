import { Check, Zap } from "lucide-react";

const Pricing = () => {
  return (
    <div className="pt-20">
      <section className="relative min-h-[50vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-emerald-500 via-teal-600 to-cyan-700 animate-gradient-shift"></div>
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-10 left-10 w-72 h-72 bg-green-400 rounded-full mix-blend-multiply filter blur-xl animate-blob"></div>
          <div className="absolute bottom-10 right-10 w-72 h-72 bg-cyan-400 rounded-full mix-blend-multiply filter blur-xl animate-blob animation-delay-2000"></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            Simple, Transparent Pricing
          </h1>
          <p className="text-xl md:text-2xl max-w-3xl mx-auto">
            Choose the perfect plan for your business needs
          </p>
        </div>
      </section>

      <section className="py-20 bg-gradient-to-br from-gray-50 to-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white rounded-3xl shadow-xl p-8 hover:shadow-2xl transition-shadow">
              <h3 className="text-2xl font-bold mb-4 text-gray-800">Starter</h3>
              <div className="mb-6">
                <span className="text-5xl font-bold text-blue-600">$49</span>
                <span className="text-gray-600">/month</span>
              </div>
              <ul className="space-y-4 mb-8">
                <li className="flex items-start">
                  <Check
                    className="text-green-500 mr-3 mt-1 flex-shrink-0"
                    size={20}
                  />
                  <span className="text-gray-700">1,000 SMS credits/month</span>
                </li>
                <li className="flex items-start">
                  <Check
                    className="text-green-500 mr-3 mt-1 flex-shrink-0"
                    size={20}
                  />
                  <span className="text-gray-700">1 DID number included</span>
                </li>
                <li className="flex items-start">
                  <Check
                    className="text-green-500 mr-3 mt-1 flex-shrink-0"
                    size={20}
                  />
                  <span className="text-gray-700">Basic API access</span>
                </li>
                <li className="flex items-start">
                  <Check
                    className="text-green-500 mr-3 mt-1 flex-shrink-0"
                    size={20}
                  />
                  <span className="text-gray-700">Email support</span>
                </li>
              </ul>
              <a
                href="/free-trial"
                className="block w-full bg-blue-600 text-white text-center py-3 rounded-full font-semibold hover:bg-blue-700 transition-colors"
              >
                Get Started
              </a>
            </div>

            <div className="bg-gradient-to-br from-blue-600 to-purple-600 rounded-3xl shadow-2xl p-8 transform scale-105 relative">
              <div className="absolute top-0 right-8 bg-yellow-400 text-gray-900 px-4 py-1 rounded-full text-sm font-bold -translate-y-1/2">
                POPULAR
              </div>
              <h3 className="text-2xl font-bold mb-4 text-white">
                Professional
              </h3>
              <div className="mb-6">
                <span className="text-5xl font-bold text-white">$149</span>
                <span className="text-blue-100">/month</span>
              </div>
              <ul className="space-y-4 mb-8">
                <li className="flex items-start">
                  <Check
                    className="text-green-300 mr-3 mt-1 flex-shrink-0"
                    size={20}
                  />
                  <span className="text-white">10,000 SMS credits/month</span>
                </li>
                <li className="flex items-start">
                  <Check
                    className="text-green-300 mr-3 mt-1 flex-shrink-0"
                    size={20}
                  />
                  <span className="text-white">5 DID numbers included</span>
                </li>
                <li className="flex items-start">
                  <Check
                    className="text-green-300 mr-3 mt-1 flex-shrink-0"
                    size={20}
                  />
                  <span className="text-white">Full API access</span>
                </li>
                <li className="flex items-start">
                  <Check
                    className="text-green-300 mr-3 mt-1 flex-shrink-0"
                    size={20}
                  />
                  <span className="text-white">Priority support</span>
                </li>
                <li className="flex items-start">
                  <Check
                    className="text-green-300 mr-3 mt-1 flex-shrink-0"
                    size={20}
                  />
                  <span className="text-white">Advanced analytics</span>
                </li>
              </ul>
              <a
                href="/free-trial"
                className="block w-full bg-white text-blue-600 text-center py-3 rounded-full font-semibold hover:bg-gray-100 transition-colors"
              >
                Get Started
              </a>
            </div>

            <div className="bg-white rounded-3xl shadow-xl p-8 hover:shadow-2xl transition-shadow">
              <h3 className="text-2xl font-bold mb-4 text-gray-800">
                Enterprise
              </h3>
              <div className="mb-6">
                <span className="text-5xl font-bold text-purple-600">
                  Custom
                </span>
              </div>
              <ul className="space-y-4 mb-8">
                <li className="flex items-start">
                  <Check
                    className="text-green-500 mr-3 mt-1 flex-shrink-0"
                    size={20}
                  />
                  <span className="text-gray-700">Unlimited SMS credits</span>
                </li>
                <li className="flex items-start">
                  <Check
                    className="text-green-500 mr-3 mt-1 flex-shrink-0"
                    size={20}
                  />
                  <span className="text-gray-700">Unlimited DID numbers</span>
                </li>
                <li className="flex items-start">
                  <Check
                    className="text-green-500 mr-3 mt-1 flex-shrink-0"
                    size={20}
                  />
                  <span className="text-gray-700">Custom integrations</span>
                </li>
                <li className="flex items-start">
                  <Check
                    className="text-green-500 mr-3 mt-1 flex-shrink-0"
                    size={20}
                  />
                  <span className="text-gray-700">24/7 phone support</span>
                </li>
                <li className="flex items-start">
                  <Check
                    className="text-green-500 mr-3 mt-1 flex-shrink-0"
                    size={20}
                  />
                  <span className="text-gray-700">
                    Dedicated account manager
                  </span>
                </li>
              </ul>
              <a
                href="/contact"
                className="block w-full bg-purple-600 text-white text-center py-3 rounded-full font-semibold hover:bg-purple-700 transition-colors"
              >
                Contact Sales
              </a>
            </div>
          </div>

          <div className="mt-16 text-center">
            <h3 className="text-2xl font-bold mb-8 text-gray-800">
              Pay-As-You-Go Rates
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6 max-w-5xl mx-auto">
              <div className="bg-white rounded-xl p-6 shadow-lg">
                <Zap className="text-blue-600 mx-auto mb-3" size={32} />
                <div className="text-3xl font-bold text-gray-800 mb-2">
                  $0.05
                </div>
                <div className="text-gray-600">per SMS</div>
              </div>
              <div className="bg-white rounded-xl p-6 shadow-lg">
                <Zap className="text-purple-600 mx-auto mb-3" size={32} />
                <div className="text-3xl font-bold text-gray-800 mb-2">
                  $0.02
                </div>
                <div className="text-gray-600">per minute</div>
              </div>
              <div className="bg-white rounded-xl p-6 shadow-lg">
                <Zap className="text-pink-600 mx-auto mb-3" size={32} />
                <div className="text-3xl font-bold text-gray-800 mb-2">$5</div>
                <div className="text-gray-600">per DID/month</div>
              </div>
              <div className="bg-white rounded-xl p-6 shadow-lg">
                <Zap className="text-green-600 mx-auto mb-3" size={32} />
                <div className="text-3xl font-bold text-gray-800 mb-2">
                  Free
                </div>
                <div className="text-gray-600">API calls</div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Pricing;
