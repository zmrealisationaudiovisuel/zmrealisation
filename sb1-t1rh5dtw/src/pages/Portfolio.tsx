import React, { useState } from 'react';

type MediaType = 'all' | 'photos' | 'videos';

const portfolioItems = [
  {
    id: 1,
    type: 'photo',
    title: 'Nature',
    url: 'https://images.unsplash.com/photo-1469474968028-56623f02e42e',
  },
  {
    id: 2,
    type: 'photo',
    title: 'Portrait',
    url: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2',
  },
  {
    id: 3,
    type: 'video',
    title: 'Event',
    url: 'https://images.unsplash.com/photo-1492684223066-81342ee5ff30',
  },
  // Add more items as needed
];

export function Portfolio() {
  const [activeTab, setActiveTab] = useState<MediaType>('all');

  const filteredItems = portfolioItems.filter(
    item => activeTab === 'all' || item.type === activeTab
  );

  return (
    <div className="min-h-screen bg-black text-white pt-20 pb-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl font-bold mb-8">Réalisations</h1>
        
        {/* Filter Tabs */}
        <div className="flex space-x-4 mb-8">
          {[
            { id: 'all', label: 'Tout' },
            { id: 'photos', label: 'Photos' },
            { id: 'videos', label: 'Vidéos' },
          ].map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id as MediaType)}
              className={`px-4 py-2 rounded-full transition-colors ${
                activeTab === tab.id
                  ? 'bg-white text-black'
                  : 'text-white hover:bg-white/10'
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Portfolio Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredItems.map((item) => (
            <div
              key={item.id}
              className="group relative overflow-hidden rounded-lg aspect-square"
            >
              <img
                src={item.url}
                alt={item.title}
                className="w-full h-full object-cover transition-transform group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                <div className="text-center">
                  <h3 className="text-xl font-bold">{item.title}</h3>
                  <p className="text-gray-300 capitalize">{item.type}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}