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
          <span className="text-accent-cyan text-sm font-semibold tracking-wider uppercase mb-4 block">
            Kontakt
          </span>
          <h2 className="text-4xl md:text-5xl font-display font-bold text-white mb-4">
            Interesse an einer <span className="text-gradient">Zusammenarbeit?</span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Lass uns über dein Projekt sprechen. Ich freue mich auf deine Nachricht!
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
            href="mailto:kontakt@example.de"
            className="group px-8 py-4 bg-accent-cyan text-dark-900 font-semibold rounded-full hover:scale-105 transition-transform flex items-center gap-3"
          >
            <span>📧</span>
            <span>Kontakt aufnehmen</span>
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

        {/* Info Cards */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="grid md:grid-cols-3 gap-6 mb-16"
        >
          <div className="glass rounded-xl p-6 text-center border border-white/5">
            <div className="text-3xl mb-3">👤</div>
            <h3 className="text-white font-semibold mb-1">Laser Umut Akyüz</h3>
            <p className="text-gray-400 text-sm">Content Creator & Social Media Manager</p>
          </div>
          <div className="glass rounded-xl p-6 text-center border border-white/5">
            <div className="text-3xl mb-3">📍</div>
            <h3 className="text-white font-semibold mb-1">Standort</h3>
            <p className="text-gray-400 text-sm">Duisburg, Deutschland</p>
          </div>
          <div className="glass rounded-xl p-6 text-center border border-white/5">
            <div className="text-3xl mb-3">⚡</div>
            <h3 className="text-white font-semibold mb-1">Verfügbarkeit</h3>
            <p className="text-gray-400 text-sm">Offen für neue Projekte</p>
          </div>
        </motion.div>

        {/* Quote */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className="text-center mb-12"
        >
          <p className="text-2xl font-display text-white italic mb-2">
            "Every day better than yesterday."
          </p>
          <p className="text-gray-500 text-sm">– Mein Motto</p>
        </motion.div>

        {/* Copyright */}
        <div className="text-center text-gray-500 text-sm border-t border-white/5 pt-8">
          <p>© {new Date().getFullYear()} Laser Umut Akyüz. Alle Rechte vorbehalten.</p>
          <p className="mt-2 text-gray-600">Content Creator • Social Media Manager • Duisburg</p>
        </div>
      </div>
    </footer>
  )
}
