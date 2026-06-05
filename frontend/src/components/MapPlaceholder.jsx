import React from 'react';
import { MapPin, Plane, Hotel, Navigation } from 'lucide-react';

export default function MapPlaceholder() {
  return (
    <div className="relative w-full h-80 rounded-2xl overflow-hidden shadow-lg border border-slate-200/60 bg-slate-50 group">
      {/* Background Map Grid Pattern */}
      <div 
        className="absolute inset-0 opacity-[0.15] pointer-events-none" 
        style={{
          backgroundImage: 'linear-gradient(to right, #0f172a 1px, transparent 1px), linear-gradient(to bottom, #0f172a 1px, transparent 1px)',
          backgroundSize: '40px 40px'
        }}
      ></div>
      
      {/* Simulated route lines */}
      <svg className="absolute inset-0 w-full h-full opacity-30 pointer-events-none" xmlns="http://www.w3.org/2000/svg">
        <path d="M100,100 Q250,50 400,150 T700,100" fill="none" stroke="#0ea5e9" strokeWidth="3" strokeDasharray="6,6" className="animate-pulse" />
      </svg>

      <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-md px-3 py-1.5 rounded-full shadow-sm border border-slate-200 text-xs font-semibold text-slate-600 flex items-center z-10">
        <span className="w-2 h-2 rounded-full bg-amber-500 mr-2 animate-ping"></span>
        Demo Mode – Google Maps API Not Configured
      </div>

      {/* Animated Pins */}
      <div className="absolute top-[30%] left-[25%] transform -translate-x-1/2 -translate-y-1/2 flex flex-col items-center group-hover:-translate-y-6 transition-transform duration-500">
        <div className="bg-white p-2 rounded-xl shadow-lg border border-slate-100 mb-1 z-10">
          <Plane className="h-5 w-5 text-sky-500" />
        </div>
        <div className="bg-slate-800 text-white text-[10px] px-2 py-0.5 rounded-full shadow-md font-medium">Airport (15km)</div>
        <div className="w-1 h-8 bg-sky-300 opacity-50 mt-1"></div>
        <div className="w-3 h-3 bg-sky-500 rounded-full animate-ping absolute bottom-[-4px]"></div>
      </div>

      <div className="absolute top-[60%] left-[55%] transform -translate-x-1/2 -translate-y-1/2 flex flex-col items-center group-hover:-translate-y-6 transition-transform duration-500 delay-100">
        <div className="bg-white p-2 rounded-xl shadow-lg border border-slate-100 mb-1 z-10">
          <Hotel className="h-5 w-5 text-indigo-500" />
        </div>
        <div className="bg-slate-800 text-white text-[10px] px-2 py-0.5 rounded-full shadow-md font-medium">Recommended Hotel</div>
        <div className="w-1 h-6 bg-indigo-300 opacity-50 mt-1"></div>
        <div className="w-3 h-3 bg-indigo-500 rounded-full animate-ping absolute bottom-[-4px]"></div>
      </div>

      <div className="absolute top-[40%] left-[80%] transform -translate-x-1/2 -translate-y-1/2 flex flex-col items-center group-hover:-translate-y-6 transition-transform duration-500 delay-200">
        <div className="bg-white p-2 rounded-xl shadow-lg border border-slate-100 mb-1 z-10">
          <MapPin className="h-5 w-5 text-rose-500" />
        </div>
        <div className="bg-slate-800 text-white text-[10px] px-2 py-0.5 rounded-full shadow-md font-medium">Top Attraction</div>
        <div className="w-1 h-10 bg-rose-300 opacity-50 mt-1"></div>
        <div className="w-3 h-3 bg-rose-500 rounded-full animate-ping absolute bottom-[-4px]"></div>
      </div>

      {/* Floating Panel */}
      <div className="absolute bottom-4 left-4 right-4 bg-white/80 backdrop-blur-lg p-4 rounded-xl shadow-xl border border-white/50 flex flex-col sm:flex-row items-center justify-between z-20">
        <div className="flex items-center space-x-3 mb-3 sm:mb-0">
          <div className="bg-brand-100 p-2 rounded-lg">
            <Navigation className="h-6 w-6 text-brand-600" />
          </div>
          <div>
            <h4 className="font-bold text-slate-800 text-sm">Interactive Map Simulation</h4>
            <p className="text-xs text-slate-500">Live routing and places will appear here with an API key.</p>
          </div>
        </div>
        <div className="flex gap-2">
           <span className="px-3 py-1 bg-sky-50 text-sky-600 text-[10px] font-bold rounded-full border border-sky-100 uppercase tracking-wider">Transport</span>
           <span className="px-3 py-1 bg-indigo-50 text-indigo-600 text-[10px] font-bold rounded-full border border-indigo-100 uppercase tracking-wider">Hotels</span>
           <span className="px-3 py-1 bg-rose-50 text-rose-600 text-[10px] font-bold rounded-full border border-rose-100 uppercase tracking-wider">Attractions</span>
        </div>
      </div>
    </div>
  );
}
