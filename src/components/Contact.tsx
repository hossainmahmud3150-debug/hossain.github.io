import { motion } from 'framer-motion';
import { Terminal, Send, Mail } from 'lucide-react';
import { useState } from 'react';

function TelegramIcon({ size = 20 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
      <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm5.894 8.221l-1.97 9.28c-.145.658-.537.818-1.084.508l-3-2.21-1.447 1.394c-.16.16-.295.295-.605.295l.213-3.053 5.56-5.023c.242-.213-.054-.333-.373-.12l-6.871 4.326-2.962-.924c-.643-.204-.657-.643.136-.953l11.57-4.461c.537-.194 1.006.131.833.941z"/>
    </svg>
  );
}

export function Contact() {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [status, setStatus] = useState<'idle' | 'sending' | 'sent'>('idle');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('sending');
    // Simulate API call
    setTimeout(() => {
      setStatus('sent');
      setFormData({ name: '', email: '', message: '' });
      setTimeout(() => setStatus('idle'), 3000);
    }, 1500);
  };

  return (
    <section id="contact" className="py-24 px-6 border-t border-white/5 bg-background">
      <div className="container mx-auto max-w-4xl">
        <motion.div
          initial={{ opacity: 1, y: 0 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0 }}
          transition={{ duration: 0.6 }}
        >
          <div className="text-center mb-16">
            <p className="text-primary font-mono mb-2">05. What's Next?</p>
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
              <span className="glitch" data-text="Get_In_Touch">Get_In_Touch</span>
            </h2>
            <p className="text-muted-foreground max-w-xl mx-auto">
              Feel free to contact me for any project or collaboration opportunities. My inbox is always open. Whether you have a question or just want to say hi, I'll try my best to get back to you!
            </p>
          </div>

          {/* Social quick-links — icons only */}
          <div className="flex justify-center gap-8 mb-10">
            <a
              href="https://t.me/cyperxploit"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Telegram"
              title="Telegram: @cyperxploit"
              style={{ color: '#444', transition: 'color 0.2s, filter 0.2s' }}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLAnchorElement).style.color = '#0088cc';
                (e.currentTarget as HTMLAnchorElement).style.filter = 'drop-shadow(0 0 8px #0088cc)';
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLAnchorElement).style.color = '#444';
                (e.currentTarget as HTMLAnchorElement).style.filter = 'none';
              }}
            >
              <TelegramIcon size={28} />
            </a>
            <a
              href="mailto:hossainmahmud523@gmail.com"
              aria-label="Email"
              title="Email: hossainmahmud523@gmail.com"
              style={{ color: '#444', transition: 'color 0.2s, filter 0.2s' }}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLAnchorElement).style.color = '#00ff41';
                (e.currentTarget as HTMLAnchorElement).style.filter = 'drop-shadow(0 0 8px #00ff41)';
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLAnchorElement).style.color = '#444';
                (e.currentTarget as HTMLAnchorElement).style.filter = 'none';
              }}
            >
              <Mail size={28} />
            </a>
          </div>

          <div className="border border-white/10 bg-card p-1">
            <div className="flex items-center gap-2 px-4 py-2 border-b border-white/10 bg-black/50">
              <Terminal className="w-4 h-4 text-muted-foreground" />
              <span className="text-xs text-muted-foreground font-mono">send_message.sh</span>
            </div>
            
            <form onSubmit={handleSubmit} className="p-6 space-y-6">
              <div className="space-y-4">
                <div className="flex flex-col sm:flex-row gap-4">
                  <div className="flex-1 space-y-2">
                    <label className="text-xs text-primary font-mono block">VAR NAME =</label>
                    <input 
                      type="text" 
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({...formData, name: e.target.value})}
                      className="w-full bg-black/50 border border-white/10 p-3 text-foreground font-mono focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all"
                      placeholder="John Doe"
                    />
                  </div>
                  <div className="flex-1 space-y-2">
                    <label className="text-xs text-primary font-mono block">VAR EMAIL =</label>
                    <input 
                      type="email" 
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({...formData, email: e.target.value})}
                      className="w-full bg-black/50 border border-white/10 p-3 text-foreground font-mono focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all"
                      placeholder="john@example.com"
                    />
                  </div>
                </div>
                
                <div className="space-y-2">
                  <label className="text-xs text-primary font-mono block">VAR MESSAGE =</label>
                  <textarea 
                    required
                    rows={5}
                    value={formData.message}
                    onChange={(e) => setFormData({...formData, message: e.target.value})}
                    className="w-full bg-black/50 border border-white/10 p-3 text-foreground font-mono focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all resize-none"
                    placeholder="Hello, I'd like to discuss a project..."
                  />
                </div>
              </div>

              <div className="flex justify-between items-center pt-4">
                <div className="text-xs font-mono text-muted-foreground">
                  {status === 'sending' && <span className="text-secondary animate-pulse">Establishing secure connection...</span>}
                  {status === 'sent' && <span className="text-primary">Payload delivered successfully.</span>}
                </div>
                <button 
                  type="submit" 
                  disabled={status !== 'idle'}
                  className="flex items-center gap-2 px-6 py-2 border border-primary text-primary hover:bg-primary hover:text-black transition-colors neon-border disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  <Send className="w-4 h-4" />
                  {status === 'idle' ? 'EXECUTE' : status === 'sending' ? 'TRANSMITTING...' : 'DONE'}
                </button>
              </div>
            </form>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
