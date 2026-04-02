import { motion } from 'framer-motion';

const skills = [
  { name: "HTML/CSS/JS", level: 95 },
  { name: "React.js", level: 90 },
  { name: "Node.js & Express", level: 85 },
  { name: "MongoDB", level: 80 },
  { name: "API Integration", level: 90 },
  { name: "UI/UX & Animations", level: 85 }
];

export function Skills() {
  return (
    <section id="skills" className="py-24 px-6 relative border-t border-white/5 bg-background/50">
      <div className="container mx-auto max-w-5xl">
        <motion.div
          initial={{ opacity: 1, y: 0 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0 }}
          transition={{ duration: 0.6 }}
        >
          <div className="flex items-center gap-4 mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground">
              <span className="text-primary mr-2">03.</span>
              <span className="glitch" data-text="System_Specs">System_Specs</span>
            </h2>
            <div className="h-[1px] flex-grow bg-gradient-to-r from-primary/50 to-transparent" />
          </div>

          <div className="max-w-3xl mx-auto space-y-8">
            {skills.map((skill, index) => (
              <div key={index} className="space-y-2">
                <div className="flex justify-between text-sm font-medium">
                  <span className="text-foreground">{skill.name}</span>
                  <span className="text-primary">{skill.level}%</span>
                </div>
                <div className="h-2 w-full bg-card border border-white/10 rounded-none overflow-hidden relative">
                  <motion.div 
                    initial={{ width: `${skill.level}%` }}
                    animate={{ width: `${skill.level}%` }}
                    viewport={{ once: true, amount: 0 }}
                    transition={{ duration: 1, delay: 0.2 + (index * 0.1), ease: "easeOut" }}
                    className="h-full bg-primary relative"
                  >
                    <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAiIGhlaWdodD0iNDAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9InBhdHRlcm4iIHdpZHRoPSI0IiBoZWlnaHQ9IjQiIHBhdHRlcm5Vbml0cz0idXNlclNwYWNlT25Vc2UiPjxyZWN0IHdpZHRoPSI0IiBoZWlnaHQ9IjQiIGZpbGw9InRyYW5zcGFyZW50Ii8+PHBhdGggZD0iTTAgNEw0IDBaTTMgNEw0IDNWMk0wIDFMMCAwdjF6IiBzdHJva2U9InJnYmEoMCwwLDAsMC4yKSIgc3Ryb2tlLXdpZHRoPSIxIi8+PC9wYXR0ZXJuPjwvZGVmcz48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSJ1cmwoI3BhdHRlcm4pIi8+PC9zdmc+')] opacity-50 mix-blend-overlay" />
                  </motion.div>
                </div>
              </div>
            ))}
          </div>
          
          <div className="mt-16 flex flex-wrap justify-center gap-4">
            {['Git', 'Linux', 'Docker', 'PostgreSQL', 'TypeScript', 'TailwindCSS'].map((tech) => (
              <div key={tech} className="px-4 py-2 border border-primary/30 text-muted-foreground text-sm hover:text-primary hover:border-primary hover:neon-border transition-all duration-300 cursor-crosshair">
                {tech}
              </div>
            ))}
          </div>

        </motion.div>
      </div>
    </section>
  );
}
