import React from 'react';
import { motion } from 'motion/react';
import { ArrowRight } from 'lucide-react';

const stories = [
  {
    id: 1,
    category: 'Artisanat',
    title: 'Le secret du Faso Dan Fani, la fierté tissée',
    excerpt: 'Découvrez comment les artisanes perpétuent cet art ancestral du coton tissé main, véritable emblème de l\'indépendance culturelle.',
    image: 'https://upload.wikimedia.org/wikipedia/commons/a/a6/Pagnes_tiss%C3%A9s_faso_dan_fani.jpg'
  },
  {
    id: 2,
    category: 'Tradition',
    title: 'Mystères et puissance des Masques Bobo',
    excerpt: 'Une plongée intime dans les rites de passage et les cérémonies où les masques prennent vie pour relier les hommes aux esprits.',
    image: 'https://upload.wikimedia.org/wikipedia/commons/1/16/Masque_Bobo-Burkina_Faso.jpg'
  },
  {
    id: 3,
    category: 'Portrait',
    title: 'La mémoire du bronze à Ouagadougou',
    excerpt: 'Rencontre avec Ousmane, maître bronzier qui façonne le métal selon la technique ancestrale de la cire perdue.',
    image: 'https://upload.wikimedia.org/wikipedia/commons/8/87/Abou_Traor%C3%A9%2C_bronzier.jpg'
  }
];

export default function StoriesSection() {
  return (
    <section id="stories" className="py-16 md:py-24 bg-paper bg-opacity-50">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 md:mb-16 gap-6 md:gap-8">
          <div className="max-w-2xl">
            <h4 className="text-ocre font-bold uppercase tracking-[0.3em] text-[10px] mb-3 md:mb-4">Histoires & Rencontres</h4>
            <h2 className="text-[36px] md:text-[48px] font-serif text-ink tracking-tight leading-[1.1] md:leading-[1]">
              Le cœur du Burkina <br/><span className="italic font-light text-ocre">bat dans ses hommes</span>.
            </h2>
          </div>
          <button className="text-[10px] font-bold uppercase tracking-[0.2em] border-b border-ink/30 pb-1 hover:border-ink hover:text-ocre transition-colors inline-block max-w-max mt-4 md:mt-0">
            Voir le journal
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-12">
          {/* Main Story */}
          <div className="md:col-span-7">
            <motion.article 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="group cursor-pointer h-full flex flex-col"
            >
              <div className="relative aspect-[4/3] rounded-none overflow-hidden mb-8 border border-border shadow-sm p-2 bg-white">
                <motion.img 
                  whileHover={{ scale: 1.02 }}
                  transition={{ duration: 0.6, ease: "easeOut" }}
                  src={stories[0].image} 
                  alt={stories[0].title}
                  className="w-full h-full object-cover grayscale-[15%] group-hover:grayscale-0 transition-all duration-700"
                />
              </div>
              <div className="flex items-center gap-4 mb-4">
                <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-ocre">{stories[0].category}</span>
                <span className="w-12 h-[1px] bg-ink/20" />
                <span className="text-[10px] text-muted uppercase tracking-[0.2em]">5 min de lecture</span>
              </div>
              <h3 className="font-serif text-3xl md:text-4xl mb-4 group-hover:text-ocre transition-colors">{stories[0].title}</h3>
              <p className="text-muted font-sans leading-relaxed mb-6 max-w-xl text-base">
                {stories[0].excerpt}
              </p>
            </motion.article>
          </div>

          {/* Secondary Stories */}
          <div className="md:col-span-5 flex flex-col gap-12 justify-between">
            {stories.slice(1).map((story, idx) => (
              <motion.article 
                key={story.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 + (idx * 0.2) }}
                className="group cursor-pointer flex flex-col pt-6 border-t border-border"
              >
                <div className="flex items-center gap-3 mb-3">
                  <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-gold">{story.category}</span>
                  <span className="w-8 h-[1px] bg-ink/20" />
                </div>
                <h3 className="font-serif text-xl md:text-2xl mb-3 group-hover:text-ocre transition-colors">{story.title}</h3>
                <p className="text-muted font-sans text-sm leading-relaxed mb-4">
                  {story.excerpt}
                </p>
                <div className="mt-auto relative aspect-[16/9] rounded-none overflow-hidden border border-border p-1 bg-white">
                  <motion.img 
                    whileHover={{ scale: 1.05 }}
                    transition={{ duration: 0.6, ease: "easeOut" }}
                    src={story.image} 
                    alt={story.title}
                    className="w-full h-full object-cover grayscale-[15%] group-hover:grayscale-0 transition-all duration-700"
                  />
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
