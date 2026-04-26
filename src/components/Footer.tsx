import React from 'react';

export default function Footer() {
  return (
    <footer className="bg-ink-dark text-white/50 border-t border-ink py-12 md:py-16 text-[10px] uppercase tracking-widest font-sans">
      <div className="max-w-7xl mx-auto px-6 md:px-12 grid grid-cols-1 md:grid-cols-4 gap-12 md:gap-8">
        <div className="md:col-span-2">
          <a href="#" className="font-serif text-3xl font-bold tracking-tight inline-flex items-center gap-2 mb-6 normal-case">
            <span className="text-white italic">Burkina Tourism</span>
          </a>
          <p className="text-white/40 font-sans leading-relaxed mb-8 normal-case text-xs tracking-normal max-w-sm">
            Plongez au cœur de l'Afrique de l'Ouest. Le « Pays des Hommes Intègres » vous ouvre grand ses portes pour une expérience authentique et inoubliable.
          </p>
          <div className="flex gap-12 mb-8">
            <div className="flex items-center gap-2"><span className="w-2 h-2 bg-espoir-light rounded-full"></span> Sécurité : Zone Touristique Protégée</div>
            <div className="flex items-center gap-2"><span className="w-2 h-2 bg-gold rounded-full"></span> Visa : E-Visa disponible</div>
          </div>
        </div>

        <div>
          <h4 className="font-sans font-bold uppercase tracking-[0.2em] text-white/80 mb-6">Découvrir</h4>
          <ul className="flex flex-col gap-4 font-semibold">
            <li><a href="#" className="hover:text-ocre transition-colors border-b justify-start border-transparent hover:border-ocre inline-block pb-1">Destinations</a></li>
            <li><a href="#" className="hover:text-ocre transition-colors border-b justify-start border-transparent hover:border-ocre inline-block pb-1">Culture & Art</a></li>
            <li><a href="#" className="hover:text-ocre transition-colors border-b justify-start border-transparent hover:border-ocre inline-block pb-1">Nature & Safaris</a></li>
            <li><a href="#" className="hover:text-ocre transition-colors border-b justify-start border-transparent hover:border-ocre inline-block pb-1">Gastronomie</a></li>
          </ul>
        </div>

        <div>
          <h4 className="font-sans font-bold uppercase tracking-[0.2em] text-white/80 mb-6">Informations</h4>
          <ul className="flex flex-col gap-4 font-semibold">
            <li><a href="#" className="hover:text-ocre transition-colors border-b justify-start border-transparent hover:border-ocre inline-block pb-1">Visas & Formalités</a></li>
            <li><a href="#" className="hover:text-ocre transition-colors border-b justify-start border-transparent hover:border-ocre inline-block pb-1">Conseils de Santé</a></li>
            <li><a href="#" className="hover:text-ocre transition-colors border-b justify-start border-transparent hover:border-ocre inline-block pb-1">Transports</a></li>
            <li><a href="#" className="hover:text-ocre transition-colors border-b justify-start border-transparent hover:border-ocre inline-block pb-1">Contact</a></li>
          </ul>
        </div>
      </div>
      
      <div className="max-w-7xl mx-auto px-6 md:px-12 mt-12 pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4 text-white/30">
        <p>&copy; {new Date().getFullYear()} Burkina Faso - Tourisme Durable</p>
        <div className="flex gap-6 text-white/50">
          <span className="cursor-pointer hover:text-ocre transition-colors">Instagram</span>
          <span className="cursor-pointer hover:text-ocre transition-colors">Youtube</span>
        </div>
      </div>
    </footer>
  );
}
