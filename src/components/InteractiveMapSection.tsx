import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { MapPin } from 'lucide-react';

const regions = [
  { id: 'hauts-bassins', name: 'Hauts-Bassins', top: '70%', left: '25%', info: 'La capitale économique Bobo-Dioulasso, ses vieilles mosquées et la musique envoûtante.' },
  { id: 'centre', name: 'Centre', top: '55%', left: '50%', info: 'Ouagadougou, cœur battant du pays, berceau du FESPACO et du SIAO.' },
  { id: 'sahel', name: 'Sahel', top: '25%', left: '60%', info: 'Porte du désert, marchés aux bestiaux vibrants et paysages de dunes à l\'infini.' },
  { id: 'cascades', name: 'Cascades', top: '80%', left: '15%', info: 'Les spectaculaires dômes de Fabedougou et les rafraîchissantes cascades de Karfiguéla.' },
  { id: 'est', name: 'Est', top: '60%', left: '80%', info: 'Les vastes réserves naturelles et l\'incroyable biodiversité du Parc W.' }
];

export default function InteractiveMapSection() {
  const [activeRegion, setActiveRegion] = useState(regions[1]);
  
  return (
    <section id="map" className="py-24 bg-ink-dark text-paper relative overflow-hidden">
      {/* Abstract Background pattern */}
      <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)', backgroundSize: '40px 40px' }} />
      
      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        <div className="text-center mb-16">
          <h4 className="text-ocre-light font-bold uppercase tracking-[0.3em] text-[10px] mb-4">Exploration</h4>
          <h2 className="text-[48px] font-serif leading-[1]">
            Parcourez une terre <span className="italic font-light text-ocre-light">de contrastes</span>.
          </h2>
        </div>

        <div className="flex flex-col lg:flex-row gap-12 items-center">
          {/* Map Area Placeholder */}
          <div className="w-full lg:w-2/3 aspect-[4/3] md:aspect-[3/2] bg-ink border border-white/5 rounded-none relative overflow-hidden flex items-center justify-center p-8">
            <div className="text-white/10 font-serif text-2xl absolute tracking-widest uppercase">Carte Interactive</div>
            
            {/* Simulated Burkina outline (very rough abstract representation) */}
            <div className="relative w-full max-w-[600px] aspect-square bg-white/5 rotate-[15deg]">
              
              {/* Plot regions */}
              {regions.map((region) => (
                <button
                  key={region.id}
                  className={`absolute w-6 h-6 -ml-3 -mt-3 transform -rotate-[15deg] transition-all duration-300 z-10 ${
                    activeRegion.id === region.id ? 'scale-125' : 'hover:scale-110 opacity-60 hover:opacity-100'
                  }`}
                  style={{ top: region.top, left: region.left }}
                  onClick={() => setActiveRegion(region)}
                >
                  <div className="relative flex items-center justify-center">
                    {activeRegion.id === region.id && (
                      <motion.div 
                        initial={{ scale: 0.8, opacity: 1 }}
                        animate={{ scale: 2.5, opacity: 0 }}
                        transition={{ repeat: Infinity, duration: 1.5 }}
                        className="absolute w-full h-full bg-ocre rounded-full pointer-events-none"
                      />
                    )}
                    <MapPin 
                      className={activeRegion.id === region.id ? 'text-ocre drop-shadow-md' : 'text-paper'} 
                      size={24} 
                    />
                  </div>
                </button>
              ))}
            </div>
          </div>

          {/* Region Info Panel */}
          <div className="w-full lg:w-1/3 min-h-[300px] flex flex-col justify-center">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeRegion.id}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.3 }}
                className="bg-white/5 backdrop-blur-md p-8 border border-white/10 relative"
              >
                <div className="inline-flex items-center gap-2 text-gold mb-6 text-[10px] font-bold tracking-[0.2em] uppercase">
                  <span className="w-8 h-[1px] bg-gold" />
                  Région
                </div>
                <h3 className="font-serif text-3xl mb-4 text-paper">{activeRegion.name}</h3>
                <p className="text-white/60 font-sans leading-relaxed mb-8 text-sm">
                  {activeRegion.info}
                </p>
                <button className="text-[10px] uppercase tracking-[0.2em] font-semibold border-b border-white/20 pb-1 hover:border-gold hover:text-gold transition-colors inline-block max-w-max">
                  Explorer la région
                </button>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
}
