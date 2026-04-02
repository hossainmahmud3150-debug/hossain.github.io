import { motion } from 'framer-motion';
import { Terminal, Code2, Database } from 'lucide-react';

export function About() {
  return (
    <section id="about" className="py-24 px-6 relative border-t border-white/5 bg-background/50">
      <div className="container mx-auto max-w-5xl">
        <motion.div
          initial={{ opacity: 1, y: 0 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0 }}
          transition={{ duration: 0.6 }}
        >
          <div className="flex items-center gap-4 mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground">
              <span className="text-primary mr-2">01.</span>
              <span className="glitch" data-text="About_Me">About_Me</span>
            </h2>
            <div className="h-[1px] flex-grow bg-gradient-to-r from-primary/50 to-transparent" />
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6 text-muted-foreground leading-relaxed">
              <p>
                <span className="text-primary">{'>'}</span> Passionate Web Developer building modern, responsive, professional websites and web applications.
              </p>
              <p>
                <span className="text-primary">{'>'}</span> I specialize in both Frontend and Backend development, operating in the shadows to craft seamless digital experiences that run with terminal-like efficiency.
              </p>
              <p>
                <span className="text-primary">{'>'}</span> Whether it's a glowing neon UI or a complex data pipeline, I engineer solutions that are fast, secure, and visually unforgettable.
              </p>
              
              <div className="flex flex-wrap gap-4 mt-8">
                <div className="flex items-center gap-2 text-sm border border-white/10 px-3 py-1.5 bg-black/50">
                  <Code2 className="w-4 h-4 text-secondary" /> Frontend
                </div>
                <div className="flex items-center gap-2 text-sm border border-white/10 px-3 py-1.5 bg-black/50">
                  <Database className="w-4 h-4 text-primary" /> Backend
                </div>
                <div className="flex items-center gap-2 text-sm border border-white/10 px-3 py-1.5 bg-black/50">
                  <Terminal className="w-4 h-4 text-purple-500" /> CLI & Bots
                </div>
              </div>
            </div>

            <div className="relative group">
              <div className="absolute -inset-1 bg-gradient-to-r from-primary to-secondary rounded-sm opacity-20 group-hover:opacity-50 blur transition duration-1000 group-hover:duration-200" />
              <div className="relative border border-primary/20 bg-card p-6 h-full flex flex-col justify-center">
                <div className="flex gap-2 mb-4 border-b border-white/10 pb-4">
                  <div className="w-3 h-3 rounded-full bg-red-500/50" />
                  <div className="w-3 h-3 rounded-full bg-yellow-500/50" />
                  <div className="w-3 h-3 rounded-full bg-green-500/50" />
                </div>
                <div className="font-mono text-sm space-y-2">
                  <p className="text-secondary">root@sys:~$ cat profile.json</p>
                  <p className="text-foreground">{'{'}</p>
                  <p className="text-muted-foreground pl-4">"class": <span className="text-primary">"Full Stack Developer"</span>,</p>
                  <p className="text-muted-foreground pl-4">"focus": <span className="text-primary">["Web Apps", "APIs", "Bots"]</span>,</p>
                  <p className="text-muted-foreground pl-4">"fuel": <span className="text-primary">"Caffeine & Dark Mode"</span></p>
                  <p className="text-foreground">{'}'}</p>
                  <p className="text-secondary mt-4 animate-pulse">root@sys:~$ _</p>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
