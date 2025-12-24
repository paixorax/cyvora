import { Users, Target, Award, TrendingUp } from "lucide-react";

const About = () => {
  return (
    <div className="pt-24">
      <section className="relative min-h-[50vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-[var(--navbar-bg)]"></div>
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-20 left-20 w-96 h-96 bg-[var(--accent-copper)] rounded-full mix-blend-overlay blur-3xl animate-blob"></div>
          <div className="absolute bottom-10 right-10 w-96 h-96 bg-[var(--accent-copper)] rounded-full mix-blend-overlay blur-3xl animate-blob animation-delay-2000"></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-[var(--text-off-white)]">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">About Cyvora</h1>
          <p className="text-xl md:text-2xl max-w-3xl mx-auto opacity-80">
            Leading the future of enterprise telecommunications
          </p>
        </div>
      </section>

      <section className="py-20 bg-[var(--body-bg)]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-20">
            <div>
              <h2 className="text-4xl font-bold mb-6 text-[var(--heading-dark)]">
                Our Story
              </h2>
              <p className="text-lg text-[var(--body-grey)] mb-6">
                Founded in 2010, Cyvora has grown from a small startup to a
                global leader in telecommunications solutions. We serve over
                5,000 businesses across 190 countries, delivering millions of
                messages and calls every day.
              </p>
              <p className="text-lg text-[var(--body-grey)] mb-6">
                Our mission is to empower businesses with reliable, scalable,
                and innovative communication tools that drive growth and enhance
                customer engagement.
              </p>
              <p className="text-lg text-[var(--body-grey)]">
                With a team of 200+ dedicated professionals and cutting-edge
                infrastructure, we continue to push the boundaries of what's
                possible in telecom technology.
              </p>
            </div>
            <div className="bg-white rounded-3xl p-12 shadow-xl border border-black/5">
              <div className="grid grid-cols-2 gap-8 text-center">
                <div>
                  <div className="text-5xl font-bold text-[var(--accent-copper)] mb-2">
                    5K+
                  </div>
                  <div className="text-[var(--body-grey)] font-medium">Active Clients</div>
                </div>
                <div>
                  <div className="text-5xl font-bold text-[var(--accent-copper)] mb-2">
                    190+
                  </div>
                  <div className="text-[var(--body-grey)] font-medium">Countries</div>
                </div>
                <div>
                  <div className="text-5xl font-bold text-[var(--accent-copper)] mb-2">
                    10M+
                  </div>
                  <div className="text-[var(--body-grey)] font-medium">Daily Messages</div>
                </div>
                <div>
                  <div className="text-5xl font-bold text-[var(--accent-copper)] mb-2">
                    99.9%
                  </div>
                  <div className="text-[var(--body-grey)] font-medium">Uptime</div>
                </div>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center p-8 bg-white border border-black/5 shadow-sm rounded-2xl group hover:border-[var(--accent-copper)]/30 transition-all">
              <Users size={48} className="mx-auto mb-4 text-[var(--accent-copper)]" />
              <h3 className="text-xl font-bold mb-3 text-[var(--heading-dark)]">
                Customer First
              </h3>
              <p className="text-[var(--body-grey)]">
                We prioritize our customers' success and satisfaction above all
                else
              </p>
            </div>

            <div className="text-center p-8 bg-white border border-black/5 shadow-sm rounded-2xl group hover:border-[var(--accent-copper)]/30 transition-all">
              <Target size={48} className="mx-auto mb-4 text-[var(--accent-copper)]" />
              <h3 className="text-xl font-bold mb-3 text-[var(--heading-dark)]">
                Innovation
              </h3>
              <p className="text-[var(--body-grey)]">
                Constantly evolving our technology to meet tomorrow's challenges
              </p>
            </div>

            <div className="text-center p-8 bg-white border border-black/5 shadow-sm rounded-2xl group hover:border-[var(--accent-copper)]/30 transition-all">
              <Award size={48} className="mx-auto mb-4 text-[var(--accent-copper)]" />
              <h3 className="text-xl font-bold mb-3 text-[var(--heading-dark)]">
                Excellence
              </h3>
              <p className="text-[var(--body-grey)]">
                Committed to delivering the highest quality services
              </p>
            </div>

            <div className="text-center p-8 bg-white border border-black/5 shadow-sm rounded-2xl group hover:border-[var(--accent-copper)]/30 transition-all">
              <TrendingUp size={48} className="mx-auto mb-4 text-[var(--accent-copper)]" />
              <h3 className="text-xl font-bold mb-3 text-[var(--heading-dark)]">Growth</h3>
              <p className="text-[var(--body-grey)]">
                Helping businesses scale with our robust infrastructure
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-[var(--navbar-bg)] text-[var(--text-off-white)]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Our Team</h2>
            <p className="text-xl opacity-70">
              Meet the experts behind Cyvora
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white/5 backdrop-blur-lg rounded-2xl p-8 text-center border border-white/10 hover:border-[var(--accent-copper)]/50 transition-all">
              <div className="w-32 h-32 bg-[var(--accent-copper)] rounded-full mx-auto mb-4 shadow-lg shadow-[var(--accent-copper)]/20"></div>
              <h3 className="text-2xl font-bold mb-2">Sarah Johnson</h3>
              <p className="text-[var(--accent-copper)] mb-4 font-medium">CEO & Founder</p>
              <p className="text-sm opacity-60">
                15+ years in telecom industry
              </p>
            </div>

            <div className="bg-white/5 backdrop-blur-lg rounded-2xl p-8 text-center border border-white/10 hover:border-[var(--accent-copper)]/50 transition-all">
              <div className="w-32 h-32 bg-[var(--accent-copper)] rounded-full mx-auto mb-4 shadow-lg shadow-[var(--accent-copper)]/20"></div>
              <h3 className="text-2xl font-bold mb-2">Michael Chen</h3>
              <p className="text-[var(--accent-copper)] mb-4 font-medium">CTO</p>
              <p className="text-sm opacity-60">
                Expert in cloud infrastructure
              </p>
            </div>

            <div className="bg-white/5 backdrop-blur-lg rounded-2xl p-8 text-center border border-white/10 hover:border-[var(--accent-copper)]/50 transition-all">
              <div className="w-32 h-32 bg-[var(--accent-copper)] rounded-full mx-auto mb-4 shadow-lg shadow-[var(--accent-copper)]/20"></div>
              <h3 className="text-2xl font-bold mb-2">Emily Rodriguez</h3>
              <p className="text-[var(--accent-copper)] mb-4 font-medium">VP of Customer Success</p>
              <p className="text-sm opacity-60">
                Passionate about client relationships
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
