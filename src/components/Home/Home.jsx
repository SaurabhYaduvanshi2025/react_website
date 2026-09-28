import React from "react";
import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div className="w-full bg-slate-50 text-slate-900 selection:bg-orange-500 selection:text-white overflow-hidden">
      {/* Hero Section */}
      <section className="relative pt-12 pb-20 lg:pt-20 lg:pb-32">
        {/* Background Ambient Glow */}
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-orange-400/20 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute top-1/3 right-10 w-72 h-72 bg-amber-300/20 rounded-full blur-2xl pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            {/* Left Content Column */}
            <div className="lg:col-span-7 text-center lg:text-left space-y-6">
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-orange-100 text-orange-700 text-xs font-semibold tracking-wide uppercase">
                <span className="w-2 h-2 rounded-full bg-orange-600 animate-pulse"></span>
                Next-Gen Platform v2.0
              </div>

              <h1 className="text-4xl sm:text-6xl font-extrabold tracking-tight text-slate-900 leading-[1.15]">
                Build faster with <br className="hidden sm:inline" />
                <span className="bg-gradient-to-r from-orange-600 via-amber-600 to-orange-500 bg-clip-text text-transparent">
                  intelligent workflow
                </span>
              </h1>

              <p className="text-base sm:text-lg text-slate-600 max-w-2xl mx-auto lg:mx-0 font-normal leading-relaxed">
                Streamline your team projects, track real-time analytics, and ship modern software faster than ever with pre-configured developer components.
              </p>

              {/* Call-to-Action Buttons */}
              <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 pt-2">
                <Link
                  to="/"
                  className="w-full sm:w-auto inline-flex items-center justify-center px-7 py-3.5 text-base font-semibold text-white bg-orange-600 hover:bg-orange-700 rounded-xl shadow-lg shadow-orange-500/25 transition duration-200"
                >
                  <svg
                    className="w-5 h-5 mr-2.5 fill-current"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M1.571 23.664l10.531-10.501 3.712 3.701-12.519 6.941c-.476.264-1.059.26-1.532-.011l-.192-.13zm9.469-11.56l-10.04 10.011v-20.022l10.04 10.011zm6.274-4.137l4.905 2.719c.482.268.781.77.781 1.314s-.299 1.046-.781 1.314l-5.039 2.793-4.015-4.003 4.149-4.137zm-15.854-7.534c.09-.087.191-.163.303-.227.473-.271 1.056-.275 1.532-.011l12.653 7.015-3.846 3.835-10.642-10.612z" />
                  </svg>
                  Get Started Free
                </Link>

                <Link
                  to="/about"
                  className="w-full sm:w-auto inline-flex items-center justify-center px-7 py-3.5 text-base font-semibold text-slate-700 bg-white hover:bg-slate-100 border border-slate-200 rounded-xl shadow-sm transition duration-200"
                >
                  Explore Features
                </Link>
              </div>

              {/* Social Proof Badges */}
              <div className="pt-4 flex items-center justify-center lg:justify-start gap-6 text-xs text-slate-500 font-medium">
                <span className="flex items-center gap-1.5">
                  <span className="text-emerald-500 font-bold">✓</span> No credit card required
                </span>
                <span className="flex items-center gap-1.5">
                  <span className="text-emerald-500 font-bold">✓</span> Instant setup
                </span>
              </div>
            </div>

            {/* Right Visual Card Column */}
            <div className="lg:col-span-5 relative flex justify-center">
              <div className="relative w-full max-w-md bg-white/70 backdrop-blur-xl border border-slate-200/80 rounded-3xl p-6 shadow-2xl shadow-orange-950/10">
                <img
                  className="w-full h-72 object-cover rounded-2xl shadow-sm"
                  src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=700&q=80"
                  alt="Analytics Dashboard preview"
                />

                {/* Floating Metric Pill */}
                <div className="absolute -bottom-5 -left-5 bg-white border border-slate-100 shadow-xl rounded-2xl px-5 py-3.5 flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-orange-100 flex items-center justify-center text-orange-600 font-bold text-lg">
                    ⚡
                  </div>
                  <div>
                    <p className="text-xs text-slate-400 font-medium">Performance Boost</p>
                    <p className="text-sm font-bold text-slate-800">+148% Speed</p>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Feature / Stats Bar */}
      <section className="bg-white border-y border-slate-200/70 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center divide-y md:divide-y-0 md:divide-x divide-slate-100">
            <div className="pt-4 md:pt-0">
              <p className="text-3xl font-extrabold text-slate-900 tracking-tight">99.9%</p>
              <p className="text-sm text-slate-500 mt-1 font-medium">Uptime Guarantee</p>
            </div>
            <div className="pt-4 md:pt-0">
              <p className="text-3xl font-extrabold text-slate-900 tracking-tight">45k+</p>
              <p className="text-sm text-slate-500 mt-1 font-medium">Active Creators</p>
            </div>
            <div className="pt-4 md:pt-0">
              <p className="text-3xl font-extrabold text-slate-900 tracking-tight">120ms</p>
              <p className="text-sm text-slate-500 mt-1 font-medium">Global Latency</p>
            </div>
            <div className="pt-4 md:pt-0">
              <p className="text-3xl font-extrabold text-slate-900 tracking-tight">4.9/5</p>
              <p className="text-sm text-slate-500 mt-1 font-medium">User Rating</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}