import React from "react";
import { Link } from "react-router-dom";

export default function About() {
  return (
    <div className="w-full bg-slate-50 text-slate-900 selection:bg-orange-500 selection:text-white py-16 lg:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main Hero Story Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Column: Visual Showcase */}
          <div className="lg:col-span-5 relative">
            <div className="relative rounded-3xl overflow-hidden shadow-2xl shadow-orange-950/10 border border-slate-200/80 bg-white p-3">
              <img
                src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=800&q=80"
                alt="DevFlow Engineering Team Collaborating"
                className="w-full h-80 sm:h-96 object-cover rounded-2xl"
              />
              
              {/* Floating Mission Badge */}
              <div className="absolute -bottom-4 -right-4 bg-white/95 backdrop-blur-md border border-slate-100 shadow-xl rounded-2xl p-4 flex items-center gap-3 max-w-xs">
                <div className="w-10 h-10 rounded-xl bg-orange-100 flex items-center justify-center text-orange-600 font-bold text-lg shrink-0">
                  🚀
                </div>
                <div>
                  <p className="text-xs text-slate-500 font-medium">Core Mission</p>
                  <p className="text-sm font-bold text-slate-800">Accelerating Dev Teams Worldwide</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Narrative Content */}
          <div className="lg:col-span-7 space-y-6 text-center lg:text-left">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-orange-100 text-orange-700 text-xs font-semibold tracking-wide uppercase">
              <span className="w-2 h-2 rounded-full bg-orange-600 animate-pulse"></span>
              Our Philosophy
            </div>

            <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-slate-900 leading-[1.2]">
              Crafted by developers, driven by{" "}
              <span className="bg-gradient-to-r from-orange-600 to-amber-600 bg-clip-text text-transparent">
                uncompromising quality
              </span>
            </h1>

            <p className="text-base sm:text-lg text-slate-600 leading-relaxed font-normal">
              At DevFlow, we believe modern digital experiences should be both visually stunning and lightning-fast. What began as an experimental UI workshop has grown into a production-ready toolkit empowering thousands of engineers.
            </p>

            <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
              We eliminate repetitive configuration headaches through battle-tested routing patterns, accessible component foundations, and reliable state management primitives—allowing you to concentrate on delivering business value.
            </p>

            {/* Core Values Bullet Highlights */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2 text-left">
              <div className="p-4 rounded-2xl bg-white border border-slate-200/80 shadow-sm">
                <div className="text-orange-600 font-bold text-base mb-1">⚡ Instant Performance</div>
                <p className="text-xs text-slate-500 leading-relaxed">Zero bloat architectures optimized for high Core Web Vitals right out of the box.</p>
              </div>

              <div className="p-4 rounded-2xl bg-white border border-slate-200/80 shadow-sm">
                <div className="text-orange-600 font-bold text-base mb-1">🛡️ Production Reliable</div>
                <p className="text-xs text-slate-500 leading-relaxed">Rigorous component testing ensuring stable nested routing and responsive layouts.</p>
              </div>
            </div>

            {/* Action Button */}
            <div className="pt-4 flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4">
              <Link
                to="/contact"
                className="w-full sm:w-auto inline-flex items-center justify-center px-6 py-3 text-sm font-semibold text-white bg-orange-600 hover:bg-orange-700 rounded-xl shadow-lg shadow-orange-500/20 transition-all duration-200"
              >
                Join Our Journey
              </Link>
              <Link
                to="/"
                className="w-full sm:w-auto inline-flex items-center justify-center px-6 py-3 text-sm font-semibold text-slate-700 bg-white hover:bg-slate-100 border border-slate-200 rounded-xl shadow-sm transition-all duration-200"
              >
                Explore Platform
              </Link>
            </div>
          </div>

        </div>

        {/* Milestone Statistics Bar */}
        <div className="mt-20 pt-12 border-t border-slate-200">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <p className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">100%</p>
              <p className="text-xs sm:text-sm text-slate-500 mt-1 font-medium">Open Source Driven</p>
            </div>
            <div>
              <p className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">24/7</p>
              <p className="text-xs sm:text-sm text-slate-500 mt-1 font-medium">Community Support</p>
            </div>
            <div>
              <p className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">500k+</p>
              <p className="text-xs sm:text-sm text-slate-500 mt-1 font-medium">Components Shipped</p>
            </div>
            <div>
              <p className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">99.9%</p>
              <p className="text-xs sm:text-sm text-slate-500 mt-1 font-medium">Framework Uptime</p>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}