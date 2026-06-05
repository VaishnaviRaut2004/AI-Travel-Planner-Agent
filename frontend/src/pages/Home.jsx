import React, { useState } from 'react';
import TravelForm from '../components/TravelForm';
import Dashboard from '../components/Dashboard';
import SkeletonLoader from '../components/SkeletonLoader';
import { travelAPI } from '../services/api';
import { MapPin } from 'lucide-react';

export default function Home() {
  const [plan, setPlan] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const handleGenerate = async (formData) => {
    setIsLoading(true);
    setError(null);
    try {
      const result = await travelAPI.generatePlan(formData);
      setPlan(result);
    } catch (err) {
      console.error(err);
      setError(err.response?.data?.detail || "An error occurred while generating the travel plan. Please try again.");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-slate-50 relative overflow-hidden">
      {/* Decorative background blobs for glassmorphism effect */}
      <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] rounded-full bg-blue-400/20 blur-3xl pointer-events-none"></div>
      <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] rounded-full bg-teal-400/20 blur-3xl pointer-events-none"></div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 z-10">
        <div className="text-center mb-16 animate-in fade-in slide-in-from-bottom-4 duration-700">

          <h1 className="text-5xl md:text-6xl font-extrabold text-slate-900 tracking-tight mb-6 leading-tight">
            Design Your Journey with <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-teal-500">
              watsonx.ai Agents
            </span>
          </h1>
          <p className="text-xl text-slate-600 max-w-2xl mx-auto leading-relaxed">
            Experience the future of travel planning. Our 10-Agent Architecture intelligently crafts your perfect itinerary in seconds.
          </p>
        </div>

        <div className="grid grid-cols-1 xl:grid-cols-12 gap-10">
          {!plan && (
            <div className="xl:col-span-4 animate-in fade-in slide-in-from-left-4 duration-700 delay-100">
              <TravelForm onSubmit={handleGenerate} isLoading={isLoading} />
            </div>
          )}
          
          <div className={`transition-all duration-700 ${plan ? 'xl:col-span-12' : 'xl:col-span-8'}`}>
            {error && (
              <div className="bg-red-50/80 backdrop-blur-md text-red-600 p-6 rounded-2xl border border-red-100 mb-6 shadow-sm flex items-start space-x-4">
                <MapPin className="h-6 w-6 mt-0.5 flex-shrink-0" />
                <div>
                  <p className="font-bold text-lg mb-1">Connection Error</p>
                  <p className="text-sm opacity-90">{error}</p>
                </div>
              </div>
            )}

            {!plan && !isLoading && !error && (
              <div className="bg-white/50 backdrop-blur-xl border border-white rounded-3xl p-12 text-center flex flex-col items-center justify-center h-full min-h-[500px] shadow-[0_8px_30px_rgb(0,0,0,0.04)] animate-in fade-in slide-in-from-right-4 duration-700 delay-200">
                <div className="bg-blue-50 p-6 rounded-full mb-6">
                  <MapPin className="h-16 w-16 text-blue-500 animate-bounce" style={{animationDuration: '3s'}} />
                </div>
                <h3 className="text-2xl font-bold text-slate-800 mb-2">Your Dashboard Awaits</h3>
                <p className="text-slate-500 max-w-sm">Fill out your travel preferences to generate a highly personalized, multi-agent crafted itinerary.</p>
              </div>
            )}

            {isLoading && !plan && (
              <div className="space-y-8 animate-in fade-in duration-500">
                <div className="bg-white/70 backdrop-blur-xl rounded-3xl shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-white p-10 text-center flex flex-col items-center justify-center">
                  <div className="relative w-20 h-20 mb-6">
                    <div className="absolute inset-0 border-4 border-slate-100 rounded-full"></div>
                    <div className="absolute inset-0 border-4 border-blue-500 rounded-full border-t-transparent animate-spin"></div>
                    <div className="absolute inset-2 bg-blue-50 rounded-full flex items-center justify-center">
                       <div className="w-2 h-2 bg-blue-500 rounded-full animate-ping"></div>
                    </div>
                  </div>
                  <h3 className="text-2xl font-bold text-slate-800 mb-2">Orchestrating 10 AI Agents...</h3>
                  <p className="text-slate-500">Analyzing weather, optimizing budgets, and securing local guides via IBM watsonx.ai.</p>
                </div>
                <SkeletonLoader />
              </div>
            )}

            {plan && (
              <Dashboard plan={plan} />
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
