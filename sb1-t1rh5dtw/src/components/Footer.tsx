import React from 'react';
import { Instagram, Phone, Mail } from 'lucide-react';
import { TikTokIcon, SnapchatIcon } from './SocialIcons';

export function Footer() {
  return (
    <footer className="bg-black/95 text-white py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4">Contact</h3>
            <div className="space-y-2">
              <a href="tel:+33123456789" className="flex items-center gap-2 hover:text-gray-300">
                <Phone size={18} />
                <span>+33 1 23 45 67 89</span>
              </a>
              <a href="mailto:contact@example.com" className="flex items-center gap-2 hover:text-gray-300">
                <Mail size={18} />
                <span>contact@example.com</span>
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="text-xl font-bold mb-4">Réseaux Sociaux</h3>
            <div className="space-y-2">
              <a href="https://instagram.com/zmrealisation" target="_blank" rel="noopener noreferrer" 
                className="flex items-center gap-2 hover:text-gray-300">
                <Instagram size={18} />
                <span>@zmrealisation</span>
              </a>
              <a href="https://tiktok.com/@zmrealisation" target="_blank" rel="noopener noreferrer"
                className="flex items-center gap-2 hover:text-gray-300">
                <TikTokIcon />
                <span>@zmrealisation</span>
              </a>
              <a href="https://snapchat.com/add/zmrealisation" target="_blank" rel="noopener noreferrer"
                className="flex items-center gap-2 hover:text-gray-300">
                <SnapchatIcon />
                <span>@zmrealisation</span>
              </a>
            </div>
          </div>
          
          <div className="md:col-span-2 lg:col-span-1">
            <h3 className="text-xl font-bold mb-4">À Propos</h3>
            <p className="text-gray-300 text-sm">
              Plongez dans l'univers captivant où l'art de la photo et de la vidéo prend vie. Fort d'une expérience riche, nous avons collaboré avec des artistes renommés tels que Jul, Soprano, Sch, TK, Zak et Diego et d'autres figures emblématiques. De la réalisation de clips musicaux percutants à la création de vidéos promotionnelles, en passant par des interviews mémorables et des vidéos d'entreprise élégantes, nous donnons vie à vos idées à travers l'objectif de l'audiovisuel. Nous avons également eu le privilège de collaborer avec Warner Music, ajoutant une dimension exceptionnelle à notre parcours créatif.
            </p>
          </div>
        </div>
        
        <div className="mt-8 pt-8 border-t border-gray-800 text-center text-gray-400">
          <p>&copy; {new Date().getFullYear()} Tous droits réservés</p>
        </div>
      </div>
    </footer>
  );
}