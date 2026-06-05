import React from 'react';
import { Plane } from 'lucide-react';

export default function Header() {
  return (
    <header className="bg-white shadow-sm border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex items-center justify-between">
        <div className="flex items-center space-x-2">
          <Plane className="h-8 w-8 text-brand-600" />
          <h1 className="text-2xl font-bold text-slate-900 tracking-tight">AI Travel Planner</h1>
        </div>
        <nav>
          <a href="#" className="text-sm font-medium text-slate-600 hover:text-brand-600 transition">About</a>
        </nav>
      </div>
    </header>
  );
}
