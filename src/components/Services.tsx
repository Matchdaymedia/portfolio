import { motion } from 'framer-motion'

const services = [
  {
    icon: '📱',
    title: 'Social Media',
    description: 'Content-Planung, Posting & Reichweitenaufbau',
  },
  {
    icon: '🎬',
    title: 'Video Produktion',
    description: 'Professionelle Videos für alle Plattformen',
  },
  {
    icon: '📸',
    title: 'Fotografie',
    description: 'Produkt- und Content-Fotografie',
  },
  {
    icon: '✂️',
    title: 'Schnitt & Edit',
    description: 'Moderner Schnitt, optimiert für Algorithmen',
  },
  {
    icon: '🔥',
    title: 'Reels & TikToks',
    description: 'Performance-Content mit starken Hooks',
  },
  {
    icon: '🎨',
    title: 'Grafik Design',
    description: 'Professionelle Visuals für Social Media',
  },
]

export default function Services() {
  return (
    <section id="services" className="py-24 relative">
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
          <h2 className="text-4xl md:text-5xl font-display font-bold text-white">
            Was ich anbiete
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="glass rounded-2xl p-6 text-center border border-white/5 hover:border-accent-cyan/30 transition-all duration-300"
            >
              <div className="text-4xl mb-4">{service.icon}</div>
              <h3 className="text-xl font-display font-bold text-white mb-2">
                {service.title}
              </h3>
              <p className="text-gray-400 text-sm">
                {service.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
