import { motion } from 'framer-motion';
import { Globe, Bot, Server, Database, MonitorSmartphone, Layers } from 'lucide-react';

const services = [
  {
    icon: <Globe className="w-8 h-8" />,
    title: "Modern Portfolio Design",
    desc: "Sleek, cinematic presentation sites that leave a lasting impression.",
    color: "group-hover:text-primary"
  },
  {
    icon: <Bot className="w-8 h-8" />,
    title: "Telegram Bot Development",
    desc: "Automated scripts and interactive bots for Telegram ecosystems.",
    color: "group-hover:text-secondary"
  },
  {
    icon: <Server className="w-8 h-8" />,
    title: "REST API Development",
    desc: "Robust, secure backend services and endpoints for web consumption.",
    color: "group-hover:text-purple-400"
  },
  {
    icon: <Database className="w-8 h-8" />,
    title: "Database Integration",
    desc: "MongoDB schemas, models, and fast data retrieval architectures.",
    color: "group-hover:text-green-500"
  },
  {
    icon: <MonitorSmartphone className="w-8 h-8" />,
    title: "Responsive UI/UX",
    desc: "Interfaces that adapt flawlessly across all devices and screen sizes.",
    color: "group-hover:text-blue-400"
  },
  {
    icon: <Layers className="w-8 h-8" />,
    title: "Full Stack Web Apps",
    desc: "End-to-end development bridging interactive frontends with powerful backends.",
    color: "group-hover:text-yellow-400"
  }
];

export function Services() {
  return (
    <section id="services" className="py-24 px-6 border-t border-white/5 bg-background">
      <div className="container mx-auto max-w-5xl">
        <motion.div
          initial={{ opacity: 1, y: 0 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0 }}
          transition={{ duration: 0.6 }}
        >
          <div className="flex items-center gap-4 mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground">
              <span className="text-primary mr-2">02.</span>
              <span className="glitch" data-text="Services">Services</span>
            </h2>
            <div className="h-[1px] flex-grow bg-gradient-to-r from-primary/50 to-transparent" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((svc, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 1, y: 0 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0 }}
                transition={{ duration: 0.4, delay: i * 0.1 }}
                className="group relative border border-white/10 bg-card/50 p-6 hover:bg-card hover:border-primary/50 transition-all duration-300"
              >
                <div className="absolute inset-0 bg-primary/5 opacity-0 group-hover:opacity-100 transition-opacity" />
                
                <div className={`mb-4 text-muted-foreground ${svc.color} transition-colors duration-300`}>
                  {svc.icon}
                </div>
                
                <h3 className="text-lg font-bold text-foreground mb-2 group-hover:neon-text transition-all duration-300">
                  {svc.title}
                </h3>
                
                <p className="text-sm text-muted-foreground group-hover:text-foreground/80 transition-colors">
                  {svc.desc}
                </p>
                
                <div className="absolute bottom-0 left-0 h-[2px] bg-primary w-0 group-hover:w-full transition-all duration-500 ease-out" />
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
