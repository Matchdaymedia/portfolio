import { motion } from 'framer-motion'

export default function About() {
  return (
    <section id="about" className="py-24 relative">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <span className="text-accent-cyan text-sm font-semibold tracking-wider uppercase mb-6 block">
              Über mich
            </span>
            
            <h2 className="text-4xl md:text-5xl font-display font-bold text-white mb-8">
              Laser Umut Akyüz
            </h2>
            
            <p className="text-xl md:text-2xl text-gray-300 leading-relaxed mb-8">
              Content Creator & Social Media Manager aus Duisburg.
              <br className="hidden md:block" />
              Alles aus einer Hand – von der Idee bis zum fertigen Projekt.
            </p>

            <div className="flex flex-wrap justify-center gap-6 text-gray-400">
              <span className="flex items-center gap-2">
                <span className="text-accent-cyan">→</span> Ein Ansprechpartner
              </span>
              <span className="flex items-center gap-2">
                <span className="text-accent-cyan">→</span> Ein Workflow
              </span>
              <span className="flex items-center gap-2">
                <span className="text-accent-cyan">→</span> Volle Kontrolle
              </span>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
