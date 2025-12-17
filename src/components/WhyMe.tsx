import { motion } from 'framer-motion'

const reasons = [
  {
    icon: '🎯',
    title: 'Content & Social Media aus einer Hand',
    description: 'Keine Abstimmung zwischen verschiedenen Dienstleistern nötig.',
  },
  {
    icon: '📈',
    title: 'Nachweisbare Erfahrung im Kanalaufbau',
    description: 'Mehrere Kanäle erfolgreich skaliert und sichtbar gepusht.',
  },
  {
    icon: '💬',
    title: 'Direkte Kommunikation',
    description: 'Ein Ansprechpartner, schnelle Abstimmung, klare Prozesse.',
  },
  {
    icon: '✨',
    title: 'Moderne Ästhetik mit Performance-Fokus',
    description: 'Content, der nicht nur gut aussieht, sondern auch performt.',
  },
  {
    icon: '⚡',
    title: 'Zuverlässige Umsetzung ohne Umwege',
    description: 'Effizient, strukturiert und ergebnisorientiert.',
  },
]

const workflow = [
  { step: '01', title: 'Analyse & Zieldefinition', icon: '🔍' },
  { step: '02', title: 'Content-Strategie', icon: '📋' },
  { step: '03', title: 'Foto- & Video-Produktion', icon: '🎬' },
  { step: '04', title: 'Schnitt & Optimierung', icon: '✂️' },
  { step: '05', title: 'Veröffentlichung & Weiterentwicklung', icon: '🚀' },
]

export default function WhyMe() {
  return (
    <section id="why-me" className="py-20 relative">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-dark-900 via-dark-800/50 to-dark-900" />
      
      <div className="container mx-auto px-4 relative">
        {/* Why Me */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="text-accent-cyan text-sm font-semibold tracking-wider uppercase mb-4 block">
            Warum ich
          </span>
          <h2 className="text-4xl md:text-5xl font-display font-bold text-white mb-4">
            Was mich <span className="text-gradient">auszeichnet</span>
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-20">
          {reasons.map((reason, index) => (
            <motion.div
              key={reason.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="glass rounded-xl p-6 border border-white/5 hover:border-accent-cyan/30 transition-all duration-300"
            >
              <div className="text-3xl mb-4">{reason.icon}</div>
              <h3 className="text-lg font-display font-bold text-white mb-2">
                {reason.title}
              </h3>
              <p className="text-gray-400 text-sm">
                {reason.description}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Workflow */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <span className="text-accent-purple text-sm font-semibold tracking-wider uppercase mb-4 block">
            Arbeitsweise
          </span>
          <h2 className="text-3xl md:text-4xl font-display font-bold text-white mb-4">
            Mein <span className="text-gradient">Workflow</span>
          </h2>
          <p className="text-gray-400">
            Effizient. Strukturiert. Ergebnisorientiert.
          </p>
        </motion.div>

        <div className="flex flex-wrap justify-center gap-4">
          {workflow.map((step, index) => (
            <motion.div
              key={step.step}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="relative"
            >
              <div className="glass rounded-xl p-5 text-center min-w-[180px] border border-white/5 hover:border-accent-purple/30 transition-all duration-300">
                <div className="text-3xl mb-2">{step.icon}</div>
                <div className="text-accent-purple text-xs font-bold mb-1">STEP {step.step}</div>
                <div className="text-white text-sm font-medium">{step.title}</div>
              </div>
              {index < workflow.length - 1 && (
                <div className="hidden lg:block absolute top-1/2 -right-3 text-gray-600">→</div>
              )}
            </motion.div>
          ))}
        </div>

        {/* Tools */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mt-20 text-center"
        >
          <p className="text-gray-500 text-sm mb-6">Meine Tools</p>
          <div className="flex flex-wrap justify-center gap-4">
            {[
              { name: 'Adobe Premiere Pro', icon: '🎞️' },
              { name: 'Adobe Photoshop', icon: '🖼️' },
              { name: 'Adobe Lightroom', icon: '📷' },
              { name: 'Canva', icon: '🎨' },
              { name: 'CapCut', icon: '✂️' },
            ].map((tool) => (
              <div key={tool.name} className="glass rounded-full px-5 py-2 flex items-center gap-2 text-gray-300 text-sm">
                <span>{tool.icon}</span>
                <span>{tool.name}</span>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}

