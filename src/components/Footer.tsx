import { motion } from 'framer-motion'

export default function Footer() {
  return (
    <footer id="contact" className="py-24 relative border-t border-white/5">
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
          className="text-center max-w-2xl mx-auto"
        >
          <h2 className="text-4xl md:text-5xl font-display font-bold text-white mb-6">
            Let's work together.
          </h2>
          
          <p className="text-xl text-gray-400 mb-10">
            Interesse an einer Zusammenarbeit?
          </p>

          <div className="flex flex-wrap justify-center gap-4 mb-16">
            <a
              href="mailto:kontakt@example.de"
              className="px-8 py-4 bg-accent-cyan text-dark-900 font-semibold rounded-full hover:scale-105 transition-transform text-lg"
            >
              Kontakt aufnehmen
            </a>
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-4 glass glass-hover rounded-full font-semibold text-white text-lg"
            >
              Instagram
            </a>
          </div>

          {/* Info */}
          <div className="text-gray-500 text-sm space-y-2">
            <p className="text-white font-medium">Laser Umut Akyüz</p>
            <p>Content Creator • Duisburg, Deutschland</p>
            <p className="text-gray-600 mt-6">© {new Date().getFullYear()} Alle Rechte vorbehalten.</p>
          </div>
        </motion.div>
      </div>
    </footer>
  )
}
