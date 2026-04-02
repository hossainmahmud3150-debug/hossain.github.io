import { Github, Mail } from 'lucide-react';

function TelegramIcon({ size = 20 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
      <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm5.894 8.221l-1.97 9.28c-.145.658-.537.818-1.084.508l-3-2.21-1.447 1.394c-.16.16-.295.295-.605.295l.213-3.053 5.56-5.023c.242-.213-.054-.333-.373-.12l-6.871 4.326-2.962-.924c-.643-.204-.657-.643.136-.953l11.57-4.461c.537-.194 1.006.131.833.941z"/>
    </svg>
  );
}

const socialLinks = [
  {
    label: 'Telegram',
    href: 'https://t.me/cyperxploit',
    icon: <TelegramIcon size={20} />,
    color: '#0088cc',
  },
  {
    label: 'Email',
    href: 'mailto:hossainmahmud523@gmail.com',
    icon: <Mail size={20} />,
    color: '#00ff41',
  },
  {
    label: 'GitHub',
    href: '#',
    icon: <Github size={20} />,
    color: '#aaaaaa',
  },
];

export function Footer() {
  return (
    <footer className="py-8 px-6 border-t border-white/5 bg-black text-center relative z-10">
      <div className="container mx-auto flex flex-col items-center">
        <div className="flex gap-6 mb-6">
          {socialLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              target={link.href.startsWith('http') ? '_blank' : undefined}
              rel={link.href.startsWith('http') ? 'noopener noreferrer' : undefined}
              aria-label={link.label}
              title={link.label}
              style={{ color: '#555', transition: 'color 0.2s, filter 0.2s' }}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLAnchorElement).style.color = link.color;
                (e.currentTarget as HTMLAnchorElement).style.filter = `drop-shadow(0 0 6px ${link.color})`;
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLAnchorElement).style.color = '#555';
                (e.currentTarget as HTMLAnchorElement).style.filter = 'none';
              }}
            >
              {link.icon}
            </a>
          ))}
        </div>
        <p className="text-xs font-mono text-muted-foreground">
          Built by <span className="text-primary">Hossain Mahmud</span>. Running on localhost.
        </p>
      </div>
    </footer>
  );
}
