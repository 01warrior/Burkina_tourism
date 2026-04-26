import React from 'react';
import { motion } from 'motion/react';
import { ArrowUpRight } from 'lucide-react';

const experiences = [
  {
    id: 'nature',
    title: 'Nature & Aventure',
    description: 'Explorez les majestueuses Cascades de Karfiguéla, les safaris du Parc National W, et les dunes de sable mystiques du Sahel.',
    image: 'https://upload.wikimedia.org/wikipedia/commons/1/14/Cascades_de_Banfora.jpg',
    color: 'bg-espoir'
  },
  {
    id: 'culture',
    title: 'Culture & Histoire',
    description: 'Plongez dans le temps à travers les musées, les mausolées royaux, l\'architecture unique de Tiébélé, et l\'effervescence du FESPACO.',
    image: 'https://upload.wikimedia.org/wikipedia/commons/8/83/Bobo-Dioulasso_Mosque.jpg',
    color: 'bg-red-vif'
  },
  {
    id: 'art',
    title: 'Art de Vivre',
    description: 'Savourez la gastronomie locale avec le riz gras et le dolo. Admirez la maîtrise des artisans bronziers et maroquiniers.',
    image: 'https://upload.wikimedia.org/wikipedia/commons/a/a6/Pagnes_tiss%C3%A9s_faso_dan_fani.jpg',
    color: 'bg-gold'
  }
];

export default function ExperiencesSection() {
  return (
    <section id="experiences" className="py-16 md:py-24 bg-paper">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 md:mb-16 gap-6 md:gap-8">
          <div className="max-w-2xl">
            <h4 className="text-ocre font-bold uppercase tracking-widest text-[10px] mb-3 md:mb-4">Expériences Uniques</h4>
            <h2 className="text-[36px] md:text-[48px] font-serif text-ink tracking-tight leading-[1.1] md:leading-[1]">
              Trois façons de <span className="italic font-light text-ocre">ressentir</span> l'âme du Faso.
            </h2>
          </div>
          <p className="text-muted font-sans max-w-sm text-base">
            Chaque région, chaque rencontre offre une perspective différente. Laissez-vous guider par vos envies.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {experiences.map((exp, index) => (
            <motion.div 
              key={exp.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="group bg-white border border-border p-6 hover:shadow-xl hover:border-ocre/30 transition-all cursor-pointer relative overflow-hidden flex flex-col"
            >
              <div className={`absolute top-0 right-0 w-32 h-32 ${exp.color}/5 rounded-full -mr-12 -mt-12 transition-transform group-hover:scale-110`} />
              
              <div className="relative aspect-[4/3] rounded-sm overflow-hidden mb-6">
                <div className="absolute inset-0 bg-black/10 group-hover:bg-black/0 transition-colors duration-500 z-10" />
                <img 
                  src={exp.image} 
                  alt={exp.title}
                  className="w-full h-full object-cover grayscale-[30%] group-hover:grayscale-0 transition-all duration-700"
                />
              </div>
              
              <span className={`text-[10px] font-bold uppercase tracking-[0.2em] block mb-2 ${
                index === 0 ? 'text-espoir' : index === 1 ? 'text-ocre' : 'text-gold'
              }`}>
                0{index + 1}. {exp.title}
              </span>
              <h3 className="text-2xl font-serif mb-3 text-ink">{exp.title}</h3>
              <p className="text-muted font-sans text-sm leading-relaxed">
                {exp.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
