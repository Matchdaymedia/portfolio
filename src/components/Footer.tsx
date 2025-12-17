import { motion } from 'framer-motion'

export default function Footer() {
  return (
    <footer id="contact" className="relative py-20 mt-20 border-t border-white/5">
      {/* Background glow */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-accent-purple/10 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-accent-cyan/10 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4 relative">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-display font-bold text-white mb-4">
            Lass uns <span className="text-gradient">zusammenarbeiten</span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Hast du ein Projekt? Ich freue mich auf deine Nachricht!
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="flex flex-wrap justify-center gap-4 mb-16"
        >
          <a
            href="mailto:kontakt@matchdaymedia.de"
            className="group px-8 py-4 bg-accent-cyan text-dark-900 font-semibold rounded-full hover:scale-105 transition-transform flex items-center gap-3"
          >
            <span>📧</span>
            <span>E-Mail schreiben</span>
          </a>
          <a
            href="https://instagram.com/matchdaymedia"
            target="_blank"
            rel="noopener noreferrer"
            className="px-8 py-4 glass glass-hover rounded-full font-semibold text-white flex items-center gap-3"
          >
            <span>📱</span>
            <span>Instagram</span>
          </a>
        </motion.div>

        {/* Tools section */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className="text-center mb-12"
        >
          <p className="text-gray-500 text-sm mb-4">Ich arbeite mit</p>
          <div className="flex flex-wrap justify-center gap-6">
            {[
              { name: 'Photoshop', icon: '🖼️' },
              { name: 'Premiere Pro', icon: '🎞️' },
              { name: 'CapCut', icon: '✂️' },
              { name: 'Canva', icon: '🎨' },
            ].map((tool) => (
              <div key={tool.name} className="flex items-center gap-2 text-gray-400">
                <span className="text-xl">{tool.icon}</span>
                <span>{tool.name}</span>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Copyright */}
        <div className="text-center text-gray-500 text-sm">
          <p>© {new Date().getFullYear()} MATCHDAYMEDIA. Alle Rechte vorbehalten.</p>
        </div>
      </div>
    </footer>
  )
}

