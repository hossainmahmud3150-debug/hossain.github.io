import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

const phrases = [
  "Building Modern Websites",
  "Developing Telegram Bots",
  "Creating REST APIs",
  "Designing Full Stack Apps",
];

export function Hero() {
  const [text, setText] = useState('');
  const [phraseIndex, setPhraseIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const current = phrases[phraseIndex];
    let delay = deleting ? 40 : 90;

    if (!deleting && charIndex === current.length) {
      delay = 2000;
      const t = setTimeout(() => setDeleting(true), delay);
      return () => clearTimeout(t);
    }
    if (deleting && charIndex === 0) {
      delay = 400;
      const t = setTimeout(() => {
        setDeleting(false);
        setPhraseIndex((i) => (i + 1) % phrases.length);
      }, delay);
      return () => clearTimeout(t);
    }

    const t = setTimeout(() => {
      setText(current.substring(0, deleting ? charIndex - 1 : charIndex + 1));
      setCharIndex((i) => (deleting ? i - 1 : i + 1));
    }, delay);
    return () => clearTimeout(t);
  }, [charIndex, deleting, phraseIndex]);

  return (
    <section
      id="home"
      style={{ minHeight: '100vh' }}
      className="flex items-center pt-20 px-6 overflow-hidden relative"
    >
      <div className="container mx-auto max-w-5xl w-full">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="flex flex-col items-start"
        >
          {/* Status badge */}
          <div
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '8px',
              padding: '6px 16px',
              border: '1px solid rgba(0,255,65,0.4)',
              marginBottom: '24px',
              background: 'rgba(0,255,65,0.05)',
            }}
          >
            <span
              style={{
                width: 8,
                height: 8,
                borderRadius: '50%',
                background: '#00ff41',
                display: 'inline-block',
                animation: 'pulse 2s infinite',
              }}
            />
            <span style={{ color: '#00ff41', fontFamily: 'monospace', fontSize: '14px' }}>
              Status: Online
            </span>
          </div>

          {/* Greeting */}
          <p
            style={{
              color: '#00e5ff',
              fontFamily: 'monospace',
              fontSize: '20px',
              marginBottom: '12px',
              letterSpacing: '0.05em',
            }}
          >
            {'>'} Hello, World. I am
          </p>

          {/* Main title */}
          <h1
            style={{
              fontSize: 'clamp(2.5rem, 9vw, 6.5rem)',
              fontWeight: 900,
              color: '#ffffff',
              lineHeight: 1.1,
              letterSpacing: '-0.03em',
              marginBottom: '24px',
              textShadow: '0 0 20px rgba(0,255,65,0.5), 0 0 40px rgba(0,255,65,0.3)',
              fontFamily: 'monospace',
            }}
          >
            Hossain Mahmud
          </h1>

          {/* Typewriter */}
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              height: '40px',
              marginBottom: '48px',
              fontFamily: 'monospace',
              fontSize: '20px',
              color: '#aaaaaa',
            }}
          >
            <span style={{ color: '#00ff41', marginRight: '8px' }}>$</span>
            <span>{text}</span>
            <span
              style={{
                width: '12px',
                height: '22px',
                background: '#00ff41',
                marginLeft: '4px',
                display: 'inline-block',
                animation: 'blink 1s step-end infinite',
              }}
            />
          </div>

          {/* CTA buttons */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6, duration: 0.8 }}
            style={{ display: 'flex', gap: '16px', flexWrap: 'wrap' }}
          >
            <a
              href="#projects"
              style={{
                padding: '12px 32px',
                background: '#00ff41',
                color: '#000',
                fontWeight: 700,
                fontFamily: 'monospace',
                fontSize: '15px',
                textDecoration: 'none',
                display: 'inline-block',
                boxShadow: '0 0 20px rgba(0,255,65,0.4)',
                letterSpacing: '0.1em',
              }}
            >
              {'[ EXECUTE ./WORK ]'}
            </a>
            <a
              href="#contact"
              style={{
                padding: '12px 32px',
                border: '1px solid #00e5ff',
                color: '#00e5ff',
                fontWeight: 700,
                fontFamily: 'monospace',
                fontSize: '15px',
                textDecoration: 'none',
                display: 'inline-block',
                boxShadow: '0 0 15px rgba(0,229,255,0.2)',
                letterSpacing: '0.1em',
              }}
            >
              {'[ PING ME ]'}
            </a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
