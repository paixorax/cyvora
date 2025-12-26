import React from "react";

const ComingSoon = () => {
  return (
    <div className="relative flex flex-col items-center justify-center min-h-screen bg-[#030712] text-white p-6 overflow-hidden font-sans">
      {/* --- RUNNING DOG ANIMATION (Background Layer) --- */}
      <div className="absolute w-full top-1/3 pointer-events-none opacity-40">
        <marquee scrollamount="18" direction="right">
          <div className="flex flex-col items-center">
            {/* Professional Animated Dog GIF */}
            <img
              src="https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExM2ZicW9ueXN6Znd6Znd6Znd6Znd6Znd6Znd6Znd6Znd6Znd6JmVwPXYxX2ludGVybmFsX2dpZl9ieV9pZCZjdD1z/3o7TKMGpx4Z6Yv8Zhe/giphy.gif"
              alt="Running Dog"
              className="w-32 h-32 md:w-48 md:h-48"
            />
          </div>
        </marquee>
      </div>

      {/* --- MAIN CONTENT --- */}
      <div className="relative z-10 text-center max-w-4xl">
        {/* Status Badge */}
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-xs font-bold uppercase tracking-widest mb-8 animate-pulse">
          <span className="w-2 h-2 bg-blue-500 rounded-full animate-ping"></span>
          System Maintenance
        </div>

        {/* The Main Message */}
        <h1 className="text-4xl md:text-7xl font-extrabold mb-6 leading-tight">
          We are under <span className="text-blue-500 italic">updation</span>{" "}
          <br />& will be{" "}
          <span className="bg-gradient-to-r from-blue-400 to-indigo-500 bg-clip-text text-transparent">
            back soon!
          </span>
        </h1>

        <p className="text-gray-400 text-lg md:text-xl mb-12 font-light">
          We're upgrading our servers to give you a faster experience with{" "}
          <br className="hidden md:block" />
          SMS Solutions, DID Numbers, and Voice Features.
        </p>

        {/* --- MINI FEATURE GRID --- */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="p-6 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-sm">
            <span className="text-2xl mb-2 block">💬</span>
            <h3 className="font-semibold text-gray-200">SMS Solution</h3>
          </div>
          <div className="p-6 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-sm">
            <span className="text-2xl mb-2 block">📞</span>
            <h3 className="font-semibold text-gray-200">DID Number</h3>
          </div>
          <div className="p-6 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-sm">
            <span className="text-2xl mb-2 block">🎙️</span>
            <h3 className="font-semibold text-gray-200">Voice Features</h3>
          </div>
        </div>

        {/* --- PROGRESS BAR --- */}
        <div className="mt-16 group">
          <div className="text-xs text-gray-500 mb-3 tracking-[0.4em] uppercase font-bold">
            Updaging Infrastructure
          </div>
          <div className="w-full max-w-md mx-auto h-1 bg-gray-900 rounded-full overflow-hidden">
            <div className="h-full bg-blue-600 w-3/4 shadow-[0_0_15px_rgba(37,99,235,0.5)] animate-progress-flow"></div>
          </div>
        </div>
      </div>

      {/* Background Decorative Elements */}
      <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-blue-600/5 blur-[100px] rounded-full"></div>
      <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-indigo-600/5 blur-[100px] rounded-full"></div>

      {/* Custom Keyframes */}
      <style jsx>{`
        @keyframes progress-flow {
          0% {
            transform: translateX(-100%);
          }
          100% {
            transform: translateX(100%);
          }
        }
        .animate-progress-flow {
          animation: progress-flow 3s infinite ease-in-out;
        }
      `}</style>
    </div>
  );
};

export default ComingSoon;
