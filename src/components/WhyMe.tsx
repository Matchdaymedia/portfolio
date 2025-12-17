import { motion } from 'framer-motion'

const tools = [
  'Premiere Pro',
  'Photoshop',
  'Lightroom',
  'Canva',
  'CapCut',
]

export default function WhyMe() {
  return (
    <section id="why-me" className="py-24 relative">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <span className="text-accent-purple text-sm font-semibold tracking-wider uppercase mb-4 block">
              Mein Ansatz
            </span>
            <h2 className="text-4xl md:text-5xl font-display font-bold text-white mb-6">
              Effizient. Strukturiert. Ergebnisorientiert.
            </h2>
            <p className="text-xl text-gray-400">
              Content, der nicht nur gut aussieht, sondern performt.
            </p>
          </motion.div>

          {/* Workflow Steps */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex flex-wrap justify-center gap-4 mb-16"
          >
            {['Analyse', 'Strategie', 'Produktion', 'Optimierung', 'Veröffentlichung'].map((step, i) => (
              <div key={step} className="flex items-center gap-3">
                <span className="glass px-4 py-2 rounded-full text-white text-sm font-medium">
                  {step}
                </span>
                {i < 4 && <span className="text-gray-600 hidden md:block">→</span>}
              </div>
            ))}
          </motion.div>

          {/* Tools */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <p className="text-gray-500 text-sm mb-4">Tools</p>
            <div className="flex flex-wrap justify-center gap-3">
              {tools.map((tool) => (
                <span key={tool} className="px-4 py-2 glass rounded-full text-gray-300 text-sm">
                  {tool}
                </span>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
