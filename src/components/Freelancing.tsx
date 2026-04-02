import { motion } from 'framer-motion';
import { Briefcase } from 'lucide-react';

export function Freelancing() {
  return (
    <section className="py-24 px-6 relative border-t border-white/5 bg-background/50 overflow-hidden">
      {/* Decorative background lines */}
      <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'linear-gradient(#00ff41 1px, transparent 1px), linear-gradient(90deg, #00ff41 1px, transparent 1px)', backgroundSize: '40px 40px' }} />
      
      <div className="container mx-auto max-w-4xl relative z-10 text-center">
        <motion.div
          initial={{ opacity: 1, scale: 1 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, amount: 0 }}
          transition={{ duration: 0.6 }}
          className="border border-primary/20 bg-card/80 backdrop-blur-sm p-10 md:p-16"
        >
          <div className="flex justify-center mb-6">
            <div className="p-4 bg-primary/10 rounded-full border border-primary/30 neon-border">
              <Briefcase className="w-8 h-8 text-primary" />
            </div>
          </div>
          
          <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-4">
            Available For Hire
          </h2>
          
          <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
            I offer freelance services on platforms like <span className="text-primary font-bold">Fiverr</span> and <span className="text-primary font-bold">Upwork</span>. Need a custom site, bot, or backend? Let's negotiate a contract.
          </p>
          
          <div className="flex flex-wrap justify-center gap-6">
            <a 
              href="#" 
              className="px-8 py-3 bg-primary text-primary-foreground font-bold hover:bg-primary/90 transition-colors neon-border uppercase tracking-widest text-sm"
            >
              Hire on Upwork
            </a>
            <a 
              href="#" 
              className="px-8 py-3 border border-primary text-primary hover:bg-primary/10 transition-colors neon-border uppercase tracking-widest text-sm"
            >
              Hire on Fiverr
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
