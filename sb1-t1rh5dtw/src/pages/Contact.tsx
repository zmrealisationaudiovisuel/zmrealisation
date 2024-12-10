import React from 'react';
import { Phone, Mail, Instagram } from 'lucide-react';
import { TikTokIcon, SnapchatIcon } from '../components/SocialIcons';

export function Contact() {
  return (
    <div className="min-h-screen bg-black text-white pt-20 pb-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl font-bold mb-8">Contact</h1>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Contact Information */}
          <div className="space-y-8">
            <div>
              <h2 className="text-2xl font-bold mb-4">Coordonnées</h2>
              <div className="space-y-4">
                <a href="tel:+33123456789" className="flex items-center gap-3 text-gray-300 hover:text-white">
                  <Phone size={24} />
                  <span>+33 1 23 45 67 89</span>
                </a>
                <a href="mailto:contact@example.com" className="flex items-center gap-3 text-gray-300 hover:text-white">
                  <Mail size={24} />
                  <span>contact@example.com</span>
                </a>
              </div>
            </div>

            <div>
              <h2 className="text-2xl font-bold mb-4">Réseaux Sociaux</h2>
              <div className="space-y-4">
                <a href="https://instagram.com/zmrealisation" target="_blank" rel="noopener noreferrer" 
                  className="flex items-center gap-3 text-gray-300 hover:text-white">
                  <Instagram size={24} />
                  <span>@zmrealisation</span>
                </a>
                <a href="https://tiktok.com/@zmrealisation" target="_blank" rel="noopener noreferrer"
                  className="flex items-center gap-3 text-gray-300 hover:text-white">
                  <TikTokIcon />
                  <span>@zmrealisation</span>
                </a>
                <a href="https://snapchat.com/add/zmrealisation" target="_blank" rel="noopener noreferrer"
                  className="flex items-center gap-3 text-gray-300 hover:text-white">
                  <SnapchatIcon />
                  <span>@zmrealisation</span>
                </a>
              </div>
            </div>

            <div>
              <h2 className="text-2xl font-bold mb-4">À Propos</h2>
              <p className="text-gray-300 text-sm">
                Plongez dans l'univers captivant où l'art de la photo et de la vidéo prend vie. Fort d'une expérience riche, nous avons collaboré avec des artistes renommés tels que Jul, Soprano, Sch, TK, Zak et Diego et d'autres figures emblématiques. De la réalisation de clips musicaux percutants à la création de vidéos promotionnelles, en passant par des interviews mémorables et des vidéos d'entreprise élégantes, nous donnons vie à vos idées à travers l'objectif de l'audiovisuel. Nous avons également eu le privilège de collaborer avec Warner Music, ajoutant une dimension exceptionnelle à notre parcours créatif.
              </p>
            </div>
          </div>

          {/* Contact Form */}
          <form className="space-y-6 bg-white/5 p-6 rounded-lg backdrop-blur-sm">
            <div>
              <label htmlFor="name" className="block text-sm font-medium mb-2">
                Nom
              </label>
              <input
                type="text"
                id="name"
                className="w-full px-4 py-2 rounded-lg bg-black/50 border border-gray-700 focus:border-white focus:outline-none"
              />
            </div>
            
            <div>
              <label htmlFor="email" className="block text-sm font-medium mb-2">
                Email
              </label>
              <input
                type="email"
                id="email"
                className="w-full px-4 py-2 rounded-lg bg-black/50 border border-gray-700 focus:border-white focus:outline-none"
              />
            </div>
            
            <div>
              <label htmlFor="message" className="block text-sm font-medium mb-2">
                Message
              </label>
              <textarea
                id="message"
                rows={4}
                className="w-full px-4 py-2 rounded-lg bg-black/50 border border-gray-700 focus:border-white focus:outline-none"
              ></textarea>
            </div>
            
            <button
              type="submit"
              className="w-full bg-white text-black py-2 px-4 rounded-lg hover:bg-gray-200 transition-colors"
            >
              Envoyer
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}