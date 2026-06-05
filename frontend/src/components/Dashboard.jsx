import React from 'react';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import MapPlaceholder from './MapPlaceholder';
import { 
  CloudRain, Sun, AlertTriangle, Navigation, 
  Wallet, CalendarClock, Compass, Lightbulb, Plane,
  Hotel, Utensils, ShieldAlert, Wind, Droplets
} from 'lucide-react';

function GlassCard({ title, icon: Icon, content, gradient }) {
  return (
    <div className="relative group overflow-hidden bg-white/70 backdrop-blur-xl rounded-3xl shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-white/60 hover:shadow-[0_8px_30px_rgb(0,0,0,0.08)] transition-all duration-300 flex flex-col h-full">
      {/* Subtle top gradient bar */}
      <div className={`absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r ${gradient}`}></div>
      
      <div className="px-6 py-5 border-b border-slate-100/50 flex items-center space-x-4 bg-white/40">
        <div className={`p-2.5 rounded-xl bg-gradient-to-br ${gradient} shadow-sm group-hover:scale-110 transition-transform duration-300`}>
          <Icon className="h-5 w-5 text-white" />
        </div>
        <h3 className="text-lg font-bold text-slate-800 tracking-tight">{title}</h3>
      </div>
      <div className="p-6 prose prose-slate prose-sm max-w-none flex-grow overflow-y-auto custom-scrollbar">
        <ReactMarkdown remarkPlugins={[remarkGfm]}>
          {content || "Data unavailable. Please try regenerating the plan."}
        </ReactMarkdown>
      </div>
    </div>
  );
}

export default function Dashboard({ plan }) {
  const { weather_data, agents } = plan;
  const w = weather_data || {};
  const isRainy = w.condition?.includes("Rain") || w.condition?.includes("Thunder") || w.condition?.includes("Shower");

  return (
    <div className="space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-700">
      
      {/* Header Badge */}
      <div className="flex justify-center mb-8">
        <div className="inline-flex items-center space-x-2 bg-gradient-to-r from-[#0f62fe] to-[#001d6c] px-6 py-2.5 rounded-full shadow-lg border border-[#0f62fe]/30 transform hover:scale-105 transition-transform">
          <div className="flex space-x-1">
             <div className="w-1.5 h-1.5 bg-white rounded-full animate-bounce" style={{animationDelay: '0ms'}}></div>
             <div className="w-1.5 h-1.5 bg-white rounded-full animate-bounce" style={{animationDelay: '150ms'}}></div>
             <div className="w-1.5 h-1.5 bg-white rounded-full animate-bounce" style={{animationDelay: '300ms'}}></div>
          </div>
          <span className="text-white font-semibold text-sm tracking-wide">Powered by IBM watsonx.ai</span>
        </div>
      </div>

      {/* Top Section: Weather & Map */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
        
        {/* Weather Card */}
        <div className="lg:col-span-4 relative overflow-hidden bg-white/70 backdrop-blur-xl rounded-3xl shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-white/60 p-8 flex flex-col justify-center items-center text-center group hover:shadow-[0_8px_30px_rgb(0,0,0,0.08)] transition-all duration-300">
          <div className={`absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r ${isRainy ? 'from-slate-400 to-blue-500' : 'from-amber-400 to-orange-500'}`}></div>
          
          <div className={`p-4 rounded-full mb-6 shadow-inner ${isRainy ? 'bg-slate-100' : 'bg-orange-50'} group-hover:scale-110 transition-transform duration-500`}>
            {isRainy ? <CloudRain className="h-12 w-12 text-blue-500" /> : <Sun className="h-12 w-12 text-amber-500" />}
          </div>
          
          <h3 className="text-4xl font-extrabold text-slate-800 tracking-tight mb-1">{w.temperature || "22°C"}</h3>
          <p className="text-slate-500 font-medium text-lg mb-6">{w.condition || "Clear"}</p>
          
          <div className="grid grid-cols-2 gap-3 w-full mb-6">
            <div className="bg-white p-3 rounded-2xl shadow-sm border border-slate-100 flex flex-col items-center">
              <Droplets className="h-4 w-4 text-blue-400 mb-1" />
              <span className="text-xs text-slate-400 uppercase tracking-wider font-semibold">Humidity</span>
              <span className="font-bold text-slate-700">{w.humidity || "50%"}</span>
            </div>
            <div className="bg-white p-3 rounded-2xl shadow-sm border border-slate-100 flex flex-col items-center">
              <Wind className="h-4 w-4 text-teal-400 mb-1" />
              <span className="text-xs text-slate-400 uppercase tracking-wider font-semibold">Wind</span>
              <span className="font-bold text-slate-700">{w.wind_speed || "10 km/h"}</span>
            </div>
          </div>
          
          <div className="bg-blue-50/50 rounded-xl p-3 border border-blue-100 w-full mb-4">
             <p className="text-xs text-blue-800 font-medium leading-relaxed">{w.travel_recommendation || "Perfect weather for sightseeing."}</p>
          </div>

          <p className="text-[10px] text-slate-400 uppercase tracking-widest font-bold">{w.mode || "Live Data"}</p>
        </div>

        {/* Map Card */}
        <div className="lg:col-span-8">
          <MapPlaceholder />
        </div>
      </div>

      {/* Grid: 12 Dashboard Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
        <GlassCard title="Destination Overview" icon={Navigation} content={agents.destination} gradient="from-blue-500 to-cyan-500" />
        <GlassCard title="Day-wise Itinerary" icon={CalendarClock} content={agents.itinerary} gradient="from-indigo-500 to-purple-500" />
        <GlassCard title="Food & Dining" icon={Utensils} content={agents.food} gradient="from-rose-500 to-pink-500" />
        
        <GlassCard title="Budget Breakdown" icon={Wallet} content={agents.budget} gradient="from-emerald-500 to-teal-500" />
        <GlassCard title="Hotel Recommendations" icon={Hotel} content={agents.hotels} gradient="from-amber-500 to-orange-500" />
        <GlassCard title="Transportation Plan" icon={Plane} content={agents.transport} gradient="from-sky-500 to-blue-600" />
        
        <GlassCard title="Travel Tips" icon={Compass} content={agents.tips} gradient="from-violet-500 to-fuchsia-500" />
        <GlassCard title="Local Culture Guide" icon={Lightbulb} content={agents.local_guide} gradient="from-pink-500 to-rose-400" />
        <GlassCard title="Safety & Emergency" icon={ShieldAlert} content={agents.safety} gradient="from-red-500 to-orange-500" />
        
        <GlassCard title="Travel Alerts" icon={AlertTriangle} content={agents.alerts} gradient="from-orange-500 to-amber-500" />
        <div className="md:col-span-2 xl:col-span-2">
           <GlassCard title="AI Schedule Optimization" icon={CalendarClock} content={agents.schedule_optimization} gradient="from-teal-500 to-emerald-500" />
        </div>
      </div>

    </div>
  );
}
