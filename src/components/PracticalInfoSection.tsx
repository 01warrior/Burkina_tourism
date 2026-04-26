import React from 'react';
import { Plane, ShieldCheck, ThermometerSun, CreditCard } from 'lucide-react';

const infos = [
  {
    icon: <Plane size={24} className="text-espoir" />,
    title: 'Visas & Entrée',
    desc: 'Un visa de court séjour est requis pour la majorité des visiteurs. Son obtention est simplifiée via les représentations diplomatiques ou à l\'arrivée pour certains pays.'
  },
  {
    icon: <ShieldCheck size={24} className="text-espoir" />,
    title: 'Sérénité',
    desc: 'Bénéficiez du sourire légendaire et de l\'accueil chaleureux des Burkinabè. Restez informés via nos recommandations officielles pour un voyage paisible.'
  },
  {
    icon: <ThermometerSun size={24} className="text-espoir" />,
    title: 'Climat & Santé',
    desc: 'Le vaccin contre la fièvre jaune est obligatoire. Privilégiez la saison sèche (novembre à février) pour des températures agréables. Protection anti-paludique recommandée.'
  },
  {
    icon: <CreditCard size={24} className="text-espoir" />,
    title: 'Monnaie',
    desc: 'La monnaie locale est le Franc CFA (XOF). Les distributeurs automatiques sont largement disponibles dans les grandes villes. Prévoyez des espèces pour les marchés locaux.'
  }
];

export default function PracticalInfoSection() {
  return (
    <section id="practical" className="py-16 md:py-24 bg-paper relative border-t border-border">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="bg-white border border-border p-6 sm:p-8 md:p-16 relative overflow-hidden shadow-sm">
          
          <div className="text-center max-w-2xl mx-auto mb-12 md:mb-16 relative z-10">
            <h4 className="text-ocre font-bold uppercase tracking-[0.3em] text-[10px] mb-3 md:mb-4">Préparez votre voyage</h4>
            <h2 className="text-[32px] md:text-[40px] font-serif text-ink mb-4 md:mb-6 leading-tight">Voyagez en toute <span className="italic font-light text-ocre">tranquillité</span>.</h2>
            <p className="text-muted font-sans text-sm">
              Nous avons rassemblé toutes les informations essentielles pour faciliter votre séjour 
              et vous permettre de vous concentrer sur ce qui compte vraiment : l'expérience.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 sm:gap-10 md:gap-x-16 md:gap-y-12 relative z-10">
            {infos.map((info, idx) => (
              <div key={idx} className="flex gap-6 items-start group">
                <div className="shrink-0 w-12 h-12 bg-white border border-border flex items-center justify-center -rotate-3 group-hover:rotate-0 transition-transform">
                  <div className="text-espoir">
                    {info.icon}
                  </div>
                </div>
                <div>
                  <h3 className="font-serif text-xl mb-2 text-ink">{info.title}</h3>
                  <p className="text-muted text-sm leading-relaxed">{info.desc}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-16 text-center">
            <button className="bg-ink text-white px-8 py-3 sm:px-10 sm:py-4 rounded-full font-bold uppercase tracking-[0.2em] text-[10px] sm:text-xs hover:bg-ocre transition-colors duration-300">
              Consulter le guide complet
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
