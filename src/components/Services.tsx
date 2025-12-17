import { motion } from 'framer-motion'

const services = [
  {
    icon: '📱',
    title: 'Social Media Betreuung',
    description: 'Ganzheitliche Betreuung von Instagram- und TikTok-Kanälen. Content-Planung, Posting, Analyse und kontinuierlicher Reichweitenaufbau.',
    highlight: 'Mehrere Kanäle erfolgreich skaliert',
    color: 'from-pink-500 to-rose-500',
  },
  {
    icon: '🎬',
    title: 'Foto & Video Produktion',
    description: 'Professionelle Foto- und Videoaufnahmen für Social Media, Websites und digitale Kampagnen.',
    highlight: 'Gefilmt, fotografiert & umgesetzt von mir',
    color: 'from-cyan-500 to-blue-500',
  },
  {
    icon: '✂️',
    title: 'Schnitt & Postproduktion',
    description: 'Moderner Videoschnitt, Colorgrading und Feinschliff – optimiert für Plattform-Algorithmen.',
    highlight: 'Algorithmus-optimiert',
    color: 'from-purple-500 to-violet-500',
  },
  {
    icon: '🔥',
    title: 'Reels & TikToks',
    description: 'Performance-orientierter Kurzformat-Content mit starken Hooks und dynamischem Editing.',
    highlight: 'Reichweite & Interaktion',
    color: 'from-orange-500 to-amber-500',
  },
  {
    icon: '🎨',
    title: 'Grafik & Design',
    description: 'Unternehmensgrafiken und Social-Media-Visuals mit klarem, zeitgemäßem Design.',
    highlight: 'Modern & professionell',
    color: 'from-green-500 to-emerald-500',
  },
]

export default function Services() {
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { staggerChildren: 0.1 }
    }
  }

  const item = {
    hidden: { opacity: 0, y: 30 },
    show: { opacity: 1, y: 0 }
  }

  return (
    <section id="services" className="py-20 relative">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="text-accent-cyan text-sm font-semibold tracking-wider uppercase mb-4 block">
            Leistungen
          </span>
          <h2 className="text-4xl md:text-5xl font-display font-bold text-white mb-4">
            Was ich <span className="text-gradient">anbiete</span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Von der Idee bis zur Veröffentlichung – alles aus einer Hand.
          </p>
        </motion.div>

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {services.map((service) => (
            <motion.div
              key={service.title}
              variants={item}
              className="group relative"
            >
              <div className="absolute inset-0 bg-gradient-to-br opacity-0 group-hover:opacity-20 rounded-2xl blur-xl transition-opacity duration-500" 
                   style={{ backgroundImage: `linear-gradient(to bottom right, var(--tw-gradient-stops))` }} />
              
              <div className="relative glass rounded-2xl p-6 h-full border border-white/5 group-hover:border-white/20 transition-all duration-300">
                <div className={`inline-flex items-center justify-center w-14 h-14 rounded-xl bg-gradient-to-br ${service.color} mb-5`}>
                  <span className="text-2xl">{service.icon}</span>
                </div>
                
                <h3 className="text-xl font-display font-bold text-white mb-3 group-hover:text-accent-cyan transition-colors">
                  {service.title}
                </h3>
                
                <p className="text-gray-400 mb-4 leading-relaxed">
                  {service.description}
                </p>
                
                <span className="inline-block px-3 py-1 text-xs font-medium text-accent-cyan bg-accent-cyan/10 rounded-full">
                  {service.highlight}
                </span>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

