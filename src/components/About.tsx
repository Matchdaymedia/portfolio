import { motion } from 'framer-motion'

export default function About() {
  return (
    <section id="about" className="py-20 relative">
      {/* Background glow */}
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-accent-purple/10 rounded-full blur-3xl -translate-y-1/2" />
      
      <div className="container mx-auto px-4 relative">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left side - Photo/Visual */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="relative aspect-square max-w-md mx-auto">
              {/* Decorative elements */}
              <div className="absolute inset-0 bg-gradient-to-br from-accent-cyan/20 to-accent-purple/20 rounded-3xl blur-2xl" />
              <div className="relative glass rounded-3xl p-8 h-full flex flex-col justify-center items-center text-center border border-white/10">
                <div className="text-8xl mb-6">👨‍💻</div>
                <h3 className="text-2xl font-display font-bold text-white mb-2">Laser Umut Akyüz</h3>
                <p className="text-gray-400 mb-4">Content Creator & Social Media Manager</p>
                <div className="flex flex-wrap justify-center gap-3 text-sm">
                  <span className="px-3 py-1 glass rounded-full text-accent-cyan">📍 Duisburg</span>
                  <span className="px-3 py-1 glass rounded-full text-accent-purple">🎂 23.02.2000</span>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right side - Text */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <span className="text-accent-cyan text-sm font-semibold tracking-wider uppercase mb-4 block">
              Über mich
            </span>
            <h2 className="text-3xl md:text-4xl font-display font-bold text-white mb-6">
              Vielseitiger Creator mit <span className="text-gradient">Performance-Fokus</span>
            </h2>
            
            <div className="space-y-4 text-gray-400 leading-relaxed">
              <p>
                Ich bin ein vielseitiger <span className="text-white">Content Creator</span> und <span className="text-white">Social-Media-Manager</span> mit Fokus auf visuelle Kommunikation und Reichweitenaufbau.
              </p>
              <p>
                Mein Anspruch ist es, Inhalte zu erstellen, die nicht nur gut aussehen, sondern <span className="text-accent-cyan">messbar performen</span>.
              </p>
              <p>
                Ich begleite Projekte ganzheitlich – von der Konzeption über Foto- und Videoaufnahmen bis hin zur finalen Bearbeitung und Veröffentlichung.
              </p>
              <p className="text-white font-medium">
                Alles wird von mir selbst umgesetzt.
              </p>
            </div>

            {/* Key points */}
            <div className="mt-8 grid grid-cols-1 sm:grid-cols-3 gap-4">
              {[
                { icon: '👤', title: 'Ein Ansprechpartner' },
                { icon: '⚡', title: 'Ein Workflow' },
                { icon: '🎯', title: 'Volle Kontrolle' },
              ].map((item) => (
                <div key={item.title} className="glass rounded-xl p-4 text-center">
                  <div className="text-2xl mb-2">{item.icon}</div>
                  <div className="text-sm text-gray-300 font-medium">{item.title}</div>
                </div>
              ))}
            </div>

            {/* Motto */}
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="mt-8 p-4 border-l-2 border-accent-cyan"
            >
              <p className="text-lg italic text-gray-300">
                "Every day better than yesterday."
              </p>
              <p className="text-sm text-gray-500 mt-1">– Mein Motto</p>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

