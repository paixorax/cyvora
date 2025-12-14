import { Users, Target, Award, TrendingUp } from "lucide-react";

const About = () => {
  return (
    <div className="pt-20">
      <section className="relative min-h-[50vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-[linear-gradient(135deg,#4f46e5,#7c3aed,#db2777)] animate-gradient-shift"></div>
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-20 left-20 w-96 h-96 bg-blue-400 rounded-full mix-blend-multiply blur-3xl animate-blob"></div>
          <div className="absolute bottom-10 right-10 w-96 h-96 bg-purple-400 rounded-full mix-blend-multiply blur-3xl animate-blob animation-delay-2000"></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">About Cyvora</h1>
          <p className="text-xl md:text-2xl max-w-3xl mx-auto">
            Leading the future of enterprise telecommunications
          </p>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-20">
            <div>
              <h2 className="text-4xl font-bold mb-6 text-gray-800">
                Our Story
              </h2>
              <p className="text-lg text-gray-600 mb-6">
                Founded in 2010, Cyvora has grown from a small startup to a
                global leader in telecommunications solutions. We serve over
                5,000 businesses across 190 countries, delivering millions of
                messages and calls every day.
              </p>
              <p className="text-lg text-gray-600 mb-6">
                Our mission is to empower businesses with reliable, scalable,
                and innovative communication tools that drive growth and enhance
                customer engagement.
              </p>
              <p className="text-lg text-gray-600">
                With a team of 200+ dedicated professionals and cutting-edge
                infrastructure, we continue to push the boundaries of what's
                possible in telecom technology.
              </p>
            </div>
            <div className="bg-[linear-gradient(135deg,#e0e7ff,#f3e8ff)] rounded-3xl p-12 shadow-xl">
              <div className="grid grid-cols-2 gap-8 text-center">
                <div>
                  <div className="text-5xl font-bold text-indigo-600 mb-2">
                    5K+
                  </div>
                  <div className="text-gray-700">Active Clients</div>
                </div>
                <div>
                  <div className="text-5xl font-bold text-purple-600 mb-2">
                    190+
                  </div>
                  <div className="text-gray-700">Countries</div>
                </div>
                <div>
                  <div className="text-5xl font-bold text-pink-600 mb-2">
                    10M+
                  </div>
                  <div className="text-gray-700">Daily Messages</div>
                </div>
                <div>
                  <div className="text-5xl font-bold text-blue-600 mb-2">
                    99.9%
                  </div>
                  <div className="text-gray-700">Uptime</div>
                </div>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center p-8 bg-[linear-gradient(135deg,#eff6ff,#dbeafe)] rounded-2xl">
              <Users size={48} className="mx-auto mb-4 text-blue-600" />
              <h3 className="text-xl font-bold mb-3 text-gray-800">
                Customer First
              </h3>
              <p className="text-gray-600">
                We prioritize our customers' success and satisfaction above all
                else
              </p>
            </div>

            <div className="text-center p-8 bg-[linear-gradient(135deg,#faf5ff,#f3e8ff)] rounded-2xl">
              <Target size={48} className="mx-auto mb-4 text-purple-600" />
              <h3 className="text-xl font-bold mb-3 text-gray-800">
                Innovation
              </h3>
              <p className="text-gray-600">
                Constantly evolving our technology to meet tomorrow's challenges
              </p>
            </div>

            <div className="text-center p-8 bg-[linear-gradient(135deg,#fdf2f8,#fce7f3)] rounded-2xl">
              <Award size={48} className="mx-auto mb-4 text-pink-600" />
              <h3 className="text-xl font-bold mb-3 text-gray-800">
                Excellence
              </h3>
              <p className="text-gray-600">
                Committed to delivering the highest quality services
              </p>
            </div>

            <div className="text-center p-8 bg-[linear-gradient(135deg,#eef2ff,#e0e7ff)] rounded-2xl">
              <TrendingUp size={48} className="mx-auto mb-4 text-indigo-600" />
              <h3 className="text-xl font-bold mb-3 text-gray-800">Growth</h3>
              <p className="text-gray-600">
                Helping businesses scale with our robust infrastructure
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-[linear-gradient(135deg,#111827,#312e81,#4c1d95)] text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Our Team</h2>
            <p className="text-xl text-indigo-200">
              Meet the experts behind Cyvora
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 text-center">
              <div className="w-32 h-32 bg-[linear-gradient(135deg,#60a5fa,#8b5cf6)] rounded-full mx-auto mb-4"></div>
              <h3 className="text-2xl font-bold mb-2">Sarah Johnson</h3>
              <p className="text-indigo-200 mb-4">CEO & Founder</p>
              <p className="text-sm text-gray-300">
                15+ years in telecom industry
              </p>
            </div>

            <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 text-center">
              <div className="w-32 h-32 bg-[linear-gradient(135deg,#a78bfa,#ec4899)] rounded-full mx-auto mb-4"></div>
              <h3 className="text-2xl font-bold mb-2">Michael Chen</h3>
              <p className="text-indigo-200 mb-4">CTO</p>
              <p className="text-sm text-gray-300">
                Expert in cloud infrastructure
              </p>
            </div>

            <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 text-center">
              <div className="w-32 h-32 bg-[linear-gradient(135deg,#f472b6,#ef4444)] rounded-full mx-auto mb-4"></div>
              <h3 className="text-2xl font-bold mb-2">Emily Rodriguez</h3>
              <p className="text-indigo-200 mb-4">VP of Customer Success</p>
              <p className="text-sm text-gray-300">
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
