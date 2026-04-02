import { motion } from 'framer-motion';
import { ExternalLink, Github, FolderGit2 } from 'lucide-react';

const projects = [
  {
    title: "Portfolio CMS Generator",
    desc: "A full-stack application that allows users to generate and host their own customizable portfolios. Features dynamic routing and a custom CMS interface.",
    tech: ["React", "Node.js", "Express", "MongoDB"],
    type: "Web Application"
  },
  {
    title: "Telegram Crypto Tracker Bot",
    desc: "An automated bot that tracks crypto prices, sends alerts for massive dips/spikes, and allows users to manage a virtual portfolio via inline keyboards.",
    tech: ["Node.js", "Telegraf API", "REST APIs"],
    type: "Automation Bot"
  },
  {
    title: "Secure Contact Form API",
    desc: "A headless REST API service for handling contact form submissions across multiple domains with spam protection and email notifications.",
    tech: ["Express", "MongoDB", "Nodemailer"],
    type: "Backend API"
  },
  {
    title: "Admin Dashboard Interface",
    desc: "A cinematic, dark-themed admin dashboard for managing users, tracking metrics, and viewing real-time server logs.",
    tech: ["React", "TailwindCSS", "Recharts"],
    type: "Frontend UI"
  }
];

export function Projects() {
  return (
    <section id="projects" className="py-24 px-6 border-t border-white/5 bg-background">
      <div className="container mx-auto max-w-5xl">
        <motion.div
          initial={{ opacity: 1, y: 0 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0 }}
          transition={{ duration: 0.6 }}
        >
          <div className="flex items-center gap-4 mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground">
              <span className="text-primary mr-2">04.</span>
              <span className="glitch" data-text="Executables">Executables</span>
            </h2>
            <div className="h-[1px] flex-grow bg-gradient-to-r from-primary/50 to-transparent" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {projects.map((project, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 1, y: 0 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0 }}
                transition={{ duration: 0.4, delay: i * 0.1 }}
                className="group relative border border-white/10 bg-card p-6 flex flex-col justify-between hover:border-secondary/50 transition-colors duration-300"
              >
                <div>
                  <div className="flex justify-between items-center mb-6">
                    <FolderGit2 className="w-8 h-8 text-secondary group-hover:neon-text-cyan transition-all" />
                    <div className="flex gap-3">
                      <a href="#" className="text-muted-foreground hover:text-secondary transition-colors"><Github className="w-5 h-5" /></a>
                      <a href="#" className="text-muted-foreground hover:text-secondary transition-colors"><ExternalLink className="w-5 h-5" /></a>
                    </div>
                  </div>
                  
                  <p className="text-xs font-mono text-secondary mb-2">{project.type}</p>
                  <h3 className="text-xl font-bold text-foreground mb-3 group-hover:text-secondary transition-colors">{project.title}</h3>
                  <p className="text-sm text-muted-foreground mb-6 line-clamp-3 group-hover:text-foreground/80 transition-colors">
                    {project.desc}
                  </p>
                </div>
                
                <div className="flex flex-wrap gap-2 font-mono text-xs">
                  {project.tech.map((t) => (
                    <span key={t} className="text-primary/70">{t}</span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
          
        </motion.div>
      </div>
    </section>
  );
}
