import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ArrowRight } from 'lucide-react';

const heroImages = [
  {
    id: 1,
    title: "Pics de Sindou",
    image: "https://upload.wikimedia.org/wikipedia/commons/b/b3/Aerial_view_Pics_de_Sindou%2C_Burkina_Faso.jpg"
  },
  {
    id: 2,
    title: "Cascades de Karfiguéla",
    image: "https://upload.wikimedia.org/wikipedia/commons/1/14/Cascades_de_Banfora.jpg"
  },
  {
    id: 3,
    title: "Mosquée de Bobo-Dioulasso",
    image: "https://upload.wikimedia.org/wikipedia/commons/8/83/Bobo-Dioulasso_Mosque.jpg"
  },
  {
    id: 4,
    title: "Tiébélé",
    image: "https://upload.wikimedia.org/wikipedia/commons/d/d6/Tiebele_village_in_Burkina_Faso_01.jpg"
  },
];

export default function HeroSection() {
  const [cards, setCards] = useState(heroImages);

  const handleNext = () => {
    setCards((prev) => {
      const newCards = [...prev];
      const first = newCards.shift();
      if (first) newCards.push(first);
      return newCards;
    });
  };

  return (
    <section className="relative min-h-[90vh] lg:min-h-screen pt-24 lg:pt-32 pb-16 lg:pb-12 flex items-center justify-center overflow-hidden bg-paper">
      {/* Motif subtil en arrière-plan */}
      <div className="absolute inset-0 pointer-events-none opacity-[0.04] z-0 [mask-image:linear-gradient(to_bottom,transparent,black_15%,black_40%,transparent)]">
        <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="bogolan" x="0" y="0" width="80" height="80" patternUnits="userSpaceOnUse">
              <path d="M40 0 L80 40 L40 80 L0 40 Z" fill="none" stroke="currentColor" strokeWidth="1"/>
              <circle cx="40" cy="40" r="10" fill="none" stroke="currentColor" strokeWidth="1"/>
              <line x1="0" y1="40" x2="80" y2="40" stroke="currentColor" strokeWidth="0.5"/>
              <line x1="40" y1="0" x2="40" y2="80" stroke="currentColor" strokeWidth="0.5"/>
              <path d="M20 20 L25 15 M60 20 L55 15 M20 60 L25 65 M60 60 L55 65" stroke="currentColor" strokeWidth="1"/>
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#bogolan)" className="text-ink" />
        </svg>
      </div>

      <div className="relative z-10 w-full max-w-7xl mx-auto px-6 md:px-12 flex flex-col lg:flex-row items-center justify-between gap-12 lg:gap-16 mt-8 sm:mt-12 md:mt-0">
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="max-w-xl z-10 will-change-transform"
        >
          <div className="flex items-center gap-3 mb-6">
            <span className="h-[1px] w-12 bg-gold"></span>
            <span className="text-ocre text-[10px] sm:text-xs font-bold uppercase tracking-[0.3em]">Le Pays des Hommes Intègres</span>
          </div>
          
          <h1 className="text-[40px] sm:text-[56px] md:text-[72px] leading-[1.15] md:leading-[1.2] font-serif mb-6 md:mb-8 text-ink-dark">
            L'Afrique <br/>
            <span className="inline-block relative my-2 md:my-4">
              <span className="absolute inset-x-[-12px] inset-y-[-2px] bg-espoir transform -rotate-1 shadow-lg rounded-md"></span>
              <span className="relative text-white px-4 md:px-6 font-sans font-black italic">Authentique</span>
            </span><br/>
            vous attend.
          </h1>
          
          <p 
            className="text-base md:text-lg leading-relaxed text-muted mb-8 md:mb-10 max-w-md font-light"
          >
            Découvrez une terre rouge vibrante où la richesse culturelle, 
            les paysages grandioses et l'hospitalité légendaire du 
            "Pays des Hommes Intègres" promettent un voyage inoubliable.
          </p>
          
          <a 
            href="#experiences"
            className="group inline-flex items-center gap-4 bg-ocre text-white pl-6 md:pl-8 pr-2 py-2 rounded-full hover:bg-ocre-dark transition-all w-fit"
          >
            <span className="text-xs md:text-sm uppercase tracking-widest font-semibold">Découvrir nos trésors</span>
            <div className="w-8 h-8 md:w-10 md:h-10 bg-white/20 rounded-full flex items-center justify-center group-hover:bg-white/40 transition-colors">
              <ArrowRight size={18} className="text-white" />
            </div>
          </a>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1, ease: "easeOut" }}
          className="relative w-full max-w-[320px] sm:max-w-[380px] md:max-w-[420px] lg:max-w-[460px] aspect-square md:aspect-[4/4.5] lg:aspect-[4/4.8] flex-shrink-0 mx-auto lg:mx-0 mt-12 lg:mt-0 will-change-transform"
        >
          <div className="absolute inset-0 bg-gold rounded-full translate-x-8 md:translate-x-12 translate-y-8 md:translate-y-12 opacity-10 blur-2xl"></div>
          
          <div className="relative w-full h-full">
            {cards.map((card, idx) => {
              const isTop = idx === 0;
              const rotation = idx % 2 === 0 ? idx * 3 : -idx * 2;
              
              return (
                <motion.div
                  key={card.id}
                  layout
                  onClick={isTop ? handleNext : undefined}
                  initial={false}
                  animate={{
                    top: idx * 8,
                    left: idx * 8,
                    rotate: isTop ? -2 : rotation,
                    scale: 1 - (idx * 0.05),
                    zIndex: cards.length - idx,
                  }}
                  whileHover={isTop ? { scale: 1.02, rotate: 0 } : {}}
                  transition={{ type: "spring", stiffness: 300, damping: 30 }}
                  className={`absolute w-full h-full border border-espoir/20 rounded-[28px] md:rounded-[40px] shadow-2xl bg-paper/50 overflow-hidden ${
                    isTop ? 'cursor-pointer hover:shadow-ocre/20 hover:border-ocre/30' : 'pointer-events-none'
                  }`}
                  style={{
                    opacity: 1 - (idx * 0.15)
                  }}
                >
                  <div className="w-full h-full p-1.5 md:p-2 relative">
                    <img 
                      src={card.image} 
                      alt={card.title} 
                      className={`w-full h-full rounded-[24px] md:rounded-[32px] object-cover transition-all duration-700 ${isTop ? 'grayscale-0' : 'grayscale-[40%]'}`}
                    />
                    <div className="absolute bottom-1.5 md:bottom-2 left-1.5 md:left-2 right-1.5 md:right-2 p-4 md:p-6 bg-gradient-to-t from-black/80 via-black/40 to-transparent rounded-b-[24px] md:rounded-b-[32px]">
                      <div className="flex items-center justify-between">
                        <p className="text-white text-[10px] md:text-xs font-bold uppercase tracking-widest leading-relaxed drop-shadow-md pr-2">
                          {card.title}
                        </p>
                        {isTop && (
                          <div className="w-6 h-6 md:w-8 md:h-8 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center animate-pulse shrink-0">
                            <span className="text-[7px] md:text-[9px] text-white font-bold tracking-widest uppercase">Tap</span>
                          </div>
                        )}
                      </div>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </motion.div>

      </div>
    </section>
  );
}
