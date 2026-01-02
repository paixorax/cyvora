import { ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";

const ComingSoon = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 via-amber-50 to-yellow-50 flex flex-col items-center justify-center p-4">
      {/* Animated Dog Illustration */}
      <div className="relative w-64 h-64 mb-8">
        <svg viewBox="0 0 200 200" className="w-full h-full">
          {/* Body */}
          <ellipse cx="100" cy="120" rx="50" ry="40" fill="#D2691E" />

          {/* Chest */}
          <ellipse cx="100" cy="130" rx="35" ry="25" fill="#F4A460" />

          {/* Head */}
          <circle cx="100" cy="80" r="40" fill="#D2691E" />

          {/* Snout */}
          <ellipse cx="100" cy="95" rx="25" ry="20" fill="#F4A460" />

          {/* Nose */}
          <ellipse cx="100" cy="100" rx="8" ry="6" fill="#000" />

          {/* Eyes */}
          <circle cx="85" cy="75" r="6" fill="#000" />
          <circle cx="115" cy="75" r="6" fill="#000" />
          <circle cx="87" cy="73" r="2" fill="#fff" />
          <circle cx="117" cy="73" r="2" fill="#fff" />

          {/* Eyebrows */}
          <path
            d="M 80 68 Q 85 65 90 68"
            stroke="#000"
            strokeWidth="2"
            fill="none"
          />
          <path
            d="M 110 68 Q 115 65 120 68"
            stroke="#000"
            strokeWidth="2"
            fill="none"
          />

          {/* Ears */}
          <ellipse
            cx="70"
            cy="70"
            rx="15"
            ry="25"
            fill="#A0522D"
            transform="rotate(-30 70 70)"
          />
          <ellipse
            cx="130"
            cy="70"
            rx="15"
            ry="25"
            fill="#A0522D"
            transform="rotate(30 130 70)"
          />

          {/* Mouth */}
          <path
            d="M 100 102 Q 95 108 90 106"
            stroke="#000"
            strokeWidth="2"
            fill="none"
          />
          <path
            d="M 100 102 Q 105 108 110 106"
            stroke="#000"
            strokeWidth="2"
            fill="none"
          />

          {/* Tongue */}
          <ellipse cx="100" cy="112" rx="8" ry="5" fill="#FF69B4" />

          {/* Paws */}
          <ellipse cx="80" cy="155" rx="12" ry="18" fill="#A0522D" />
          <ellipse cx="120" cy="155" rx="12" ry="18" fill="#A0522D" />

          {/* Back Paws */}
          <ellipse cx="70" cy="150" rx="10" ry="15" fill="#8B4513" />
          <ellipse cx="130" cy="150" rx="10" ry="15" fill="#8B4513" />

          {/* Tail */}
          <path
            d="M 145 115 Q 165 110 170 95"
            stroke="#D2691E"
            strokeWidth="15"
            fill="none"
            strokeLinecap="round"
          />

          {/* Fur details */}
          <path d="M 60 85 L 55 82" stroke="#A0522D" strokeWidth="2" />
          <path d="M 62 92 L 57 93" stroke="#A0522D" strokeWidth="2" />
          <path d="M 140 85 L 145 82" stroke="#A0522D" strokeWidth="2" />
          <path d="M 138 92 L 143 93" stroke="#A0522D" strokeWidth="2" />

          {/* Fur texture */}
          <circle cx="75" cy="120" r="3" fill="#A0522D" opacity="0.3" />
          <circle cx="125" cy="120" r="3" fill="#A0522D" opacity="0.3" />
          <circle cx="90" cy="130" r="3" fill="#A0522D" opacity="0.3" />
          <circle cx="110" cy="130" r="3" fill="#A0522D" opacity="0.3" />

          {/* Waving Paw */}
          <g className="animate-bounce origin-center">
            <ellipse
              cx="50"
              cy="100"
              rx="12"
              ry="18"
              fill="#D2691E"
              transform="rotate(-45 50 100)"
            />
            <circle cx="45" cy="90" r="4" fill="#A0522D" />
            <circle cx="50" cy="88" r="4" fill="#A0522D" />
            <circle cx="55" cy="90" r="4" fill="#A0522D" />
          </g>
        </svg>
      </div>

      {/* Coming Soon Text */}
      <h1 className="text-4xl md:text-6xl font-bold text-(--heading-dark) mb-2 text-center">
        Coming Soon
      </h1>

      <p className="text-lg text-(--body-grey) text-center max-w-md mb-6">
        We're working hard to bring you something amazing. Our social media
        presence is being carefully crafted to better serve you.
      </p>

      {/* CTA Button */}
      <Link
        to="/"
        className="flex items-center gap-2 px-8 py-4 bg-(--accent-copper) text-white rounded-xl font-bold hover:shadow-lg transform hover:-translate-y-1 transition-all duration-300"
      >
        <ArrowLeft size={20} />
        Back to Home
      </Link>

      {/* Timeline Steps */}
      <style>
        {`
          @keyframes rotate {
            from {
              transform: rotate(0deg);
            }
            to {
              transform: rotate(360deg);
            }
          }
          .rotating-border {
            animation: rotate 3s linear infinite;
          }
        `}
      </style>
      <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl w-full px-4">
        <div className="bg-white rounded-lg shadow-lg p-6 text-center transform hover:scale-105 transition-all duration-300 hover:shadow-2xl border border-gray-100">
          <div className="relative w-16 h-16 mx-auto mb-3">
            <div className="absolute inset-0 rounded-full bg-gradient-to-r from-orange-400 via-red-400 to-orange-400 rotating-border"></div>
            <div className="absolute inset-1 bg-white rounded-full flex items-center justify-center">
              <span className="text-xl font-bold bg-gradient-to-br from-orange-400 to-(--accent-copper) bg-clip-text text-transparent">
                01
              </span>
            </div>
          </div>
          <h3 className="text-lg font-bold mb-2 text-gray-800">Strategy</h3>
          <p className="text-(--body-grey) text-xs leading-relaxed">
            Defining our digital footprint and planning the perfect approach
          </p>
        </div>

        <div className="bg-white rounded-lg shadow-lg p-6 text-center transform hover:scale-105 transition-all duration-300 hover:shadow-2xl border border-gray-100">
          <div className="relative w-16 h-16 mx-auto mb-3">
            <div className="absolute inset-0 rounded-full bg-gradient-to-r from-orange-400 via-red-400 to-orange-400 rotating-border"></div>
            <div className="absolute inset-1 bg-white rounded-full flex items-center justify-center">
              <span className="text-xl font-bold bg-gradient-to-br from-orange-400 to-(--accent-copper) bg-clip-text text-transparent">
                02
              </span>
            </div>
          </div>
          <h3 className="text-lg font-bold mb-2 text-gray-800">Design</h3>
          <p className="text-(--body-grey) text-xs leading-relaxed">
            Crafting visual excellence that captures attention
          </p>
        </div>

        <div className="bg-white rounded-lg shadow-lg p-6 text-center transform hover:scale-105 transition-all duration-300 hover:shadow-2xl border border-gray-100">
          <div className="relative w-16 h-16 mx-auto mb-3">
            <div className="absolute inset-0 rounded-full bg-gradient-to-r from-orange-400 via-red-400 to-orange-400 rotating-border"></div>
            <div className="absolute inset-1 bg-white rounded-full flex items-center justify-center">
              <span className="text-xl font-bold bg-gradient-to-br from-orange-400 to-(--accent-copper) bg-clip-text text-transparent">
                03
              </span>
            </div>
          </div>
          <h3 className="text-lg font-bold mb-2 text-gray-800">Launch</h3>
          <p className="text-(--body-grey) text-xs leading-relaxed">
            Going live very soon with amazing content
          </p>
        </div>
      </div>
    </div>
  );
};

export default ComingSoon;
