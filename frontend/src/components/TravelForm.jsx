import React, { useState } from 'react';

export default function TravelForm({ onSubmit, isLoading }) {
  const [formData, setFormData] = useState({
    destination: '',
    budget: 'Moderate',
    startDate: '',
    endDate: '',
    travelers: 1,
    travelStyle: 'Standard',
    interests: []
  });

  const interestsList = ['Adventure', 'Beaches', 'Food', 'Nature', 'History', 'Nightlife', 'Shopping'];

  const handleInterestToggle = (interest) => {
    setFormData(prev => ({
      ...prev,
      interests: prev.interests.includes(interest) 
        ? prev.interests.filter(i => i !== interest)
        : [...prev.interests, interest]
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.destination || !formData.startDate || !formData.endDate) {
      alert("Please fill in destination and dates.");
      return;
    }
    onSubmit(formData);
  };

  return (
    <form onSubmit={handleSubmit} className="bg-white p-6 rounded-2xl shadow-xl border border-slate-100">
      <h2 className="text-2xl font-semibold mb-6 text-slate-800">Plan Your Next Adventure</h2>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="md:col-span-2">
          <label className="block text-sm font-medium text-slate-700 mb-2">Destination</label>
          <input 
            type="text" 
            className="w-full p-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-brand-500 focus:outline-none"
            placeholder="e.g., Kyoto, Japan"
            value={formData.destination}
            onChange={(e) => setFormData({...formData, destination: e.target.value})}
            required
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-slate-700 mb-2">Start Date</label>
          <input 
            type="date" 
            className="w-full p-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-brand-500 focus:outline-none"
            value={formData.startDate}
            onChange={(e) => setFormData({...formData, startDate: e.target.value})}
            required
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-slate-700 mb-2">End Date</label>
          <input 
            type="date" 
            className="w-full p-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-brand-500 focus:outline-none"
            value={formData.endDate}
            onChange={(e) => setFormData({...formData, endDate: e.target.value})}
            required
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-slate-700 mb-2">Budget</label>
          <select 
            className="w-full p-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-brand-500 focus:outline-none"
            value={formData.budget}
            onChange={(e) => setFormData({...formData, budget: e.target.value})}
          >
            <option value="Budget">Budget</option>
            <option value="Moderate">Moderate</option>
            <option value="Luxury">Luxury</option>
          </select>
        </div>

        <div>
          <label className="block text-sm font-medium text-slate-700 mb-2">Travelers</label>
          <input 
            type="number" 
            min="1"
            className="w-full p-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-brand-500 focus:outline-none"
            value={formData.travelers}
            onChange={(e) => setFormData({...formData, travelers: e.target.value ? parseInt(e.target.value) : ''})}
          />
        </div>

        <div className="md:col-span-2">
          <label className="block text-sm font-medium text-slate-700 mb-2">Travel Style</label>
          <div className="flex space-x-4">
            {['Budget', 'Standard', 'Luxury'].map(style => (
              <label key={style} className="flex items-center space-x-2 cursor-pointer">
                <input 
                  type="radio" 
                  name="travelStyle" 
                  value={style} 
                  checked={formData.travelStyle === style}
                  onChange={(e) => setFormData({...formData, travelStyle: e.target.value})}
                  className="text-brand-600 focus:ring-brand-500"
                />
                <span className="text-sm text-slate-600">{style}</span>
              </label>
            ))}
          </div>
        </div>

        <div className="md:col-span-2">
          <label className="block text-sm font-medium text-slate-700 mb-2">Interests</label>
          <div className="flex flex-wrap gap-2">
            {interestsList.map(interest => (
              <button
                type="button"
                key={interest}
                onClick={() => handleInterestToggle(interest)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                  formData.interests.includes(interest)
                    ? 'bg-brand-600 text-white shadow-md'
                    : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
                }`}
              >
                {interest}
              </button>
            ))}
          </div>
        </div>
      </div>

      <div className="mt-8">
        <button 
          type="submit" 
          disabled={isLoading}
          className="w-full bg-brand-600 hover:bg-brand-700 text-white font-semibold py-4 rounded-xl transition shadow-lg disabled:opacity-70 flex justify-center items-center"
        >
          {isLoading ? (
            <span className="flex items-center space-x-2">
              <svg className="animate-spin h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
              </svg>
              <span>Generating AI Travel Plan...</span>
            </span>
          ) : "Generate Itinerary"}
        </button>
      </div>
    </form>
  );
}
