import React from 'react';

export default function SkeletonLoader() {
  return (
    <div className="space-y-8 animate-pulse">
      
      {/* Top Section: Weather & Map */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
        
        {/* Weather Card Skeleton */}
        <div className="lg:col-span-4 bg-white/50 backdrop-blur-xl rounded-3xl shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-white/60 p-8 flex flex-col items-center">
          <div className="h-20 w-20 bg-slate-200/50 rounded-full mb-6"></div>
          <div className="h-10 bg-slate-200/50 rounded-full w-1/2 mb-4"></div>
          <div className="h-6 bg-slate-200/50 rounded-full w-1/3 mb-8"></div>
          <div className="grid grid-cols-2 gap-3 w-full mb-6">
            <div className="h-16 bg-slate-200/50 rounded-2xl w-full"></div>
            <div className="h-16 bg-slate-200/50 rounded-2xl w-full"></div>
          </div>
          <div className="h-12 bg-slate-200/50 rounded-xl w-full"></div>
        </div>

        {/* Map Card Skeleton */}
        <div className="lg:col-span-8 bg-slate-200/30 rounded-3xl overflow-hidden relative min-h-[300px]"></div>
      </div>

      {/* Grid: 10 remaining Dashboard Cards Skeletons */}
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
        {[...Array(9)].map((_, i) => (
          <div key={i} className="bg-white/50 backdrop-blur-xl rounded-3xl shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-white/60 p-6 h-64">
             <div className="flex items-center space-x-4 mb-6">
                <div className="h-10 w-10 bg-slate-200/50 rounded-xl"></div>
                <div className="h-6 bg-slate-200/50 rounded-full w-1/2"></div>
             </div>
             <div className="space-y-3">
               <div className="h-4 bg-slate-200/50 rounded-full w-full"></div>
               <div className="h-4 bg-slate-200/50 rounded-full w-5/6"></div>
               <div className="h-4 bg-slate-200/50 rounded-full w-4/6"></div>
             </div>
          </div>
        ))}
        {/* Large Optimization Card Skeleton */}
        <div className="md:col-span-2 xl:col-span-2 bg-white/50 backdrop-blur-xl rounded-3xl shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-white/60 p-6 h-64">
           <div className="flex items-center space-x-4 mb-6">
              <div className="h-10 w-10 bg-slate-200/50 rounded-xl"></div>
              <div className="h-6 bg-slate-200/50 rounded-full w-1/3"></div>
           </div>
           <div className="space-y-3">
             <div className="h-4 bg-slate-200/50 rounded-full w-full"></div>
             <div className="h-4 bg-slate-200/50 rounded-full w-11/12"></div>
             <div className="h-4 bg-slate-200/50 rounded-full w-4/5"></div>
           </div>
        </div>
      </div>
      
    </div>
  );
}
