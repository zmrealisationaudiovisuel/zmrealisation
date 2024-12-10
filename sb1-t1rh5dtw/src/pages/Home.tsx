import React from 'react';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

export function Home() {
  const previews = [
    {
      id: 1,
      type: 'photo',
      url: 'https://cdn.discordapp.com/attachments/1315816582622220311/1315817052510097470/fond_decaNn.png?ex=6758c9a0&is=67577820&hm=710e2891bd0424328e4d789c9b8ebb40f44ae453f9b6640832efcf38a00acc03&%0A',
      title: 'Photographie',
    },
    {
      id: 2,
      type: 'video',
      url: 'https://cdn.discordapp.com/attachments/1315816582622220311/1315817052510097470/fond_decaNn.png?ex=6758c9a0&is=67577820&hm=710e2891bd0424328e4d789c9b8ebb40f44ae453f9b6640832efcf38a00acc03&%0A',
      title: 'Vidéographie',
    },
  ];

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Hero Section */}
      <div className="h-screen flex items-center justify-center relative overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src="https://cdn.discordapp.com/attachments/1315816582622220311/1315817052510097470/fond_decaNn.png?ex=6758c9a0&is=67577820&hm=710e2891bd0424328e4d789c9b8ebb40f44ae453f9b6640832efcf38a00acc03&%0A"
            alt="Background"
            className="w-full h-full object-cover opacity-50"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent" />
        </div>

        <div className="relative z-10 text-center px-4">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            Capturez vos moments
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 mb-8">
            Photographie & Vidéographie Professionnelle
          </p>
          <Link
            to="/portfolio"
            className="inline-flex items-center gap-2 bg-white text-black px-6 py-3 rounded-full hover:bg-gray-200 transition-colors"
          >
            Voir mes réalisations
            <ArrowRight size={20} />
          </Link>
        </div>
      </div>

      {/* Featured Work Preview */}
      <div className="max-w-7xl mx-auto px-4 py-16 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold mb-8">Réalisations</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {previews.map((item) => (
            <div
              key={item.id}
              className="group relative overflow-hidden rounded-lg"
            >
              <img
                src={`${item.url}?auto=format&fit=crop&q=80`}
                alt={item.title}
                className="w-full h-64 object-cover transition-transform group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                <Link
                  to="/portfolio"
                  className="text-white border border-white px-4 py-2 rounded-full hover:bg-white hover:text-black transition-colors"
                >
                  {item.title}
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
