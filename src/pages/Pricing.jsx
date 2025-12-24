import { Check, Zap } from "lucide-react";

const Pricing = () => {
  return (
    <div className="pt-24">
      <section className="relative min-h-[50vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-[var(--navbar-bg)]"></div>
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-10 left-10 w-72 h-72 bg-[var(--accent-copper)] rounded-full mix-blend-overlay filter blur-xl animate-blob"></div>
          <div className="absolute bottom-10 right-10 w-72 h-72 bg-[var(--accent-copper)] rounded-full mix-blend-overlay filter blur-xl animate-blob animation-delay-2000"></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-[var(--text-off-white)]">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            Simple, Transparent Pricing
          </h1>
          <p className="text-xl md:text-2xl max-w-3xl mx-auto opacity-80">
            Choose the perfect plan for your business needs
          </p>
        </div>
      </section>

      <section className="py-20 bg-[var(--body-bg)]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white rounded-3xl shadow-xl p-8 hover:shadow-2xl transition-shadow border border-black/5">
              <h3 className="text-2xl font-bold mb-4 text-[var(--heading-dark)]">Starter</h3>
              <div className="mb-6">
                <span className="text-5xl font-bold text-[var(--accent-copper)]">$49</span>
                <span className="text-[var(--body-grey)]">/month</span>
              </div>
              <ul className="space-y-4 mb-8">
                <li className="flex items-start">
                  <Check
                    className="text-[var(--accent-copper)] mr-3 mt-1 flex-shrink-0"
                    size={20}
                  />
                  <span className="text-[var(--body-grey)]">1,000 SMS credits/month</span>
                </li>
                <li className="flex items-start">
                  <Check
                    className="text-[var(--accent-copper)] mr-3 mt-1 flex-shrink-0"
                    size={20}
                  />
                  <span className="text-[var(--body-grey)]">1 DID number included</span>
                </li>
                <li className="flex items-start">
                  <Check
                    className="text-[var(--accent-copper)] mr-3 mt-1 flex-shrink-0"
                    size={20}
                  />
                  <span className="text-[var(--body-grey)]">Basic API access</span>
                </li>
                <li className="flex items-start">
                  <Check
                    className="text-[var(--accent-copper)] mr-3 mt-1 flex-shrink-0"
                    size={20}
                  />
                  <span className="text-[var(--body-grey)]">Email support</span>
                </li>
              </ul>
              <a
                href="/free-trial"
                className="block w-full bg-[var(--accent-copper)] text-white text-center py-3 rounded-full font-semibold hover:bg-[var(--accent-copper)]/90 transition-colors"
              >
                Get Started
              </a>
            </div>

            <div className="bg-[var(--navbar-bg)] rounded-3xl shadow-2xl p-8 transform scale-105 relative border border-[var(--accent-copper)]/30">
              <div className="absolute top-0 right-8 bg-[var(--accent-copper)] text-white px-4 py-1 rounded-full text-sm font-bold -translate-y-1/2">
                POPULAR
              </div>
              <h3 className="text-2xl font-bold mb-4 text-[var(--text-off-white)]">
                Professional
              </h3>
              <div className="mb-6">
                <span className="text-5xl font-bold text-[var(--text-off-white)]">$149</span>
                <span className="text-[var(--text-off-white)]/60">/month</span>
              </div>
              <ul className="space-y-4 mb-8">
                <li className="flex items-start">
                  <Check
                    className="text-[var(--accent-copper)] mr-3 mt-1 flex-shrink-0"
                    size={20}
                  />
                  <span className="text-[var(--text-off-white)]/80">10,000 SMS credits/month</span>
                </li>
                <li className="flex items-start">
                  <Check
                    className="text-[var(--accent-copper)] mr-3 mt-1 flex-shrink-0"
                    size={20}
                  />
                  <span className="text-[var(--text-off-white)]/80">5 DID numbers included</span>
                </li>
                <li className="flex items-start">
                  <Check
                    className="text-[var(--accent-copper)] mr-3 mt-1 flex-shrink-0"
                    size={20}
                  />
                  <span className="text-[var(--text-off-white)]/80">Full API access</span>
                </li>
                <li className="flex items-start">
                  <Check
                    className="text-[var(--accent-copper)] mr-3 mt-1 flex-shrink-0"
                    size={20}
                  />
                  <span className="text-[var(--text-off-white)]/80">Priority support</span>
                </li>
                <li className="flex items-start">
                  <Check
                    className="text-[var(--accent-copper)] mr-3 mt-1 flex-shrink-0"
                    size={20}
                  />
                  <span className="text-[var(--text-off-white)]/80">Advanced analytics</span>
                </li>
              </ul>
              <a
                href="/free-trial"
                className="block w-full bg-[var(--accent-copper)] text-white text-center py-3 rounded-full font-semibold hover:bg-[var(--accent-copper)]/90 transition-colors"
              >
                Get Started
              </a>
            </div>

            <div className="bg-white rounded-3xl shadow-xl p-8 hover:shadow-2xl transition-shadow border border-black/5">
              <h3 className="text-2xl font-bold mb-4 text-[var(--heading-dark)]">
                Enterprise
              </h3>
              <div className="mb-6">
                <span className="text-5xl font-bold text-[var(--accent-copper)]">
                  Custom
                </span>
              </div>
              <ul className="space-y-4 mb-8">
                <li className="flex items-start">
                  <Check
                    className="text-[var(--accent-copper)] mr-3 mt-1 flex-shrink-0"
                    size={20}
                  />
                  <span className="text-[var(--body-grey)]">Unlimited SMS credits</span>
                </li>
                <li className="flex items-start">
                  <Check
                    className="text-[var(--accent-copper)] mr-3 mt-1 flex-shrink-0"
                    size={20}
                  />
                  <span className="text-[var(--body-grey)]">Unlimited DID numbers</span>
                </li>
                <li className="flex items-start">
                  <Check
                    className="text-[var(--accent-copper)] mr-3 mt-1 flex-shrink-0"
                    size={20}
                  />
                  <span className="text-[var(--body-grey)]">Custom integrations</span>
                </li>
                <li className="flex items-start">
                  <Check
                    className="text-[var(--accent-copper)] mr-3 mt-1 flex-shrink-0"
                    size={20}
                  />
                  <span className="text-[var(--body-grey)]">24/7 phone support</span>
                </li>
                <li className="flex items-start">
                  <Check
                    className="text-[var(--accent-copper)] mr-3 mt-1 flex-shrink-0"
                    size={20}
                  />
                  <span className="text-[var(--body-grey)]">
                    Dedicated account manager
                  </span>
                </li>
              </ul>
              <a
                href="/contact"
                className="block w-full bg-[var(--accent-copper)] text-white text-center py-3 rounded-full font-semibold hover:bg-[var(--accent-copper)]/90 transition-colors"
              >
                Contact Sales
              </a>
            </div>
          </div>

          <div className="mt-16 text-center">
            <h3 className="text-2xl font-bold mb-8 text-[var(--heading-dark)]">
              Pay-As-You-Go Rates
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6 max-w-5xl mx-auto">
              <div className="bg-white rounded-xl p-6 shadow-lg border border-black/5">
                <Zap className="text-[var(--accent-copper)] mx-auto mb-3" size={32} />
                <div className="text-3xl font-bold text-[var(--heading-dark)] mb-2">
                  $0.05
                </div>
                <div className="text-[var(--body-grey)]">per SMS</div>
              </div>
              <div className="bg-white rounded-xl p-6 shadow-lg border border-black/5">
                <Zap className="text-[var(--accent-copper)] mx-auto mb-3" size={32} />
                <div className="text-3xl font-bold text-[var(--heading-dark)] mb-2">
                  $0.02
                </div>
                <div className="text-[var(--body-grey)]">per minute</div>
              </div>
              <div className="bg-white rounded-xl p-6 shadow-lg border border-black/5">
                <Zap className="text-[var(--accent-copper)] mx-auto mb-3" size={32} />
                <div className="text-3xl font-bold text-[var(--heading-dark)] mb-2">$5</div>
                <div className="text-[var(--body-grey)]">per DID/month</div>
              </div>
              <div className="bg-white rounded-xl p-6 shadow-lg border border-black/5">
                <Zap className="text-[var(--accent-copper)] mx-auto mb-3" size={32} />
                <div className="text-3xl font-bold text-[var(--heading-dark)] mb-2">
                  Free
                </div>
                <div className="text-[var(--body-grey)]">API calls</div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Pricing;
