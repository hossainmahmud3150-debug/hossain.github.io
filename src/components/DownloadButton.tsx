import { useState } from 'react';

const CORRECT_PASSWORD = '11223344';

export function DownloadButton() {
  const [open, setOpen] = useState(false);
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [success, setSuccess] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (password === CORRECT_PASSWORD) {
      setError('');
      setSuccess(true);
      const link = document.createElement('a');
      link.href = `${import.meta.env.BASE_URL}portfolio-source.tar.gz`;
      link.download = 'hossain-mahmud-portfolio.tar.gz';
      link.click();
      setTimeout(() => {
        setOpen(false);
        setPassword('');
        setSuccess(false);
      }, 2000);
    } else {
      setError('ACCESS DENIED: Invalid key');
      setPassword('');
    }
  };

  return (
    <>
      {/* Floating download icon */}
      <button
        onClick={() => { setOpen(true); setError(''); setPassword(''); setSuccess(false); }}
        title="Download Source Code"
        style={{
          position: 'fixed',
          bottom: '32px',
          right: '32px',
          width: '52px',
          height: '52px',
          background: '#000',
          border: '1px solid #00ff41',
          color: '#00ff41',
          borderRadius: '0',
          cursor: 'pointer',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          boxShadow: '0 0 16px rgba(0,255,65,0.5)',
          zIndex: 9999,
          transition: 'all 0.2s',
        }}
        onMouseEnter={(e) => {
          (e.currentTarget as HTMLButtonElement).style.background = '#00ff41';
          (e.currentTarget as HTMLButtonElement).style.color = '#000';
        }}
        onMouseLeave={(e) => {
          (e.currentTarget as HTMLButtonElement).style.background = '#000';
          (e.currentTarget as HTMLButtonElement).style.color = '#00ff41';
        }}
      >
        {/* Download icon SVG */}
        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="square">
          <path d="M21 15v4a2 2 0 01-2 2H5a2 2 0 01-2-2v-4"/>
          <polyline points="7 10 12 15 17 10"/>
          <line x1="12" y1="15" x2="12" y2="3"/>
        </svg>
      </button>

      {/* Modal overlay */}
      {open && (
        <div
          onClick={(e) => { if (e.target === e.currentTarget) setOpen(false); }}
          style={{
            position: 'fixed',
            inset: 0,
            background: 'rgba(0,0,0,0.85)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            zIndex: 99999,
            backdropFilter: 'blur(4px)',
          }}
        >
          <div
            style={{
              background: '#0a0a0a',
              border: '1px solid #00ff41',
              padding: '32px',
              width: '360px',
              maxWidth: '90vw',
              boxShadow: '0 0 40px rgba(0,255,65,0.3)',
              fontFamily: 'monospace',
            }}
          >
            {/* Terminal title bar */}
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '20px', paddingBottom: '12px', borderBottom: '1px solid rgba(0,255,65,0.2)' }}>
              <div style={{ width: 10, height: 10, borderRadius: '50%', background: 'rgba(255,59,48,0.6)' }} />
              <div style={{ width: 10, height: 10, borderRadius: '50%', background: 'rgba(255,204,0,0.6)' }} />
              <div style={{ width: 10, height: 10, borderRadius: '50%', background: 'rgba(40,205,65,0.6)' }} />
              <span style={{ color: '#555', fontSize: '12px', marginLeft: '8px' }}>secure_download.sh</span>
            </div>

            <p style={{ color: '#00ff41', fontSize: '13px', marginBottom: '6px' }}>
              root@sys:~$ ./download --auth-required
            </p>
            <p style={{ color: '#888', fontSize: '13px', marginBottom: '20px' }}>
              Enter access key to download source code:
            </p>

            {success ? (
              <div style={{ color: '#00ff41', fontSize: '14px', textAlign: 'center', padding: '12px 0' }}>
                ✓ ACCESS GRANTED — Download starting...
              </div>
            ) : (
              <form onSubmit={handleSubmit}>
                <div style={{ display: 'flex', alignItems: 'center', border: '1px solid rgba(0,255,65,0.3)', padding: '10px 14px', marginBottom: '12px', background: 'rgba(0,255,65,0.04)' }}>
                  <span style={{ color: '#00ff41', marginRight: '8px', fontSize: '14px' }}>$</span>
                  <input
                    type="password"
                    value={password}
                    onChange={(e) => { setPassword(e.target.value); setError(''); }}
                    autoFocus
                    placeholder="enter access key..."
                    style={{
                      background: 'transparent',
                      border: 'none',
                      outline: 'none',
                      color: '#00ff41',
                      fontFamily: 'monospace',
                      fontSize: '14px',
                      flex: 1,
                      letterSpacing: '0.1em',
                    }}
                  />
                </div>
                {error && (
                  <p style={{ color: '#ff3b30', fontSize: '13px', marginBottom: '12px' }}>{error}</p>
                )}
                <div style={{ display: 'flex', gap: '10px' }}>
                  <button
                    type="submit"
                    style={{
                      flex: 1,
                      padding: '10px',
                      background: '#00ff41',
                      color: '#000',
                      border: 'none',
                      fontFamily: 'monospace',
                      fontWeight: 700,
                      fontSize: '14px',
                      cursor: 'pointer',
                      letterSpacing: '0.05em',
                    }}
                  >
                    EXECUTE
                  </button>
                  <button
                    type="button"
                    onClick={() => setOpen(false)}
                    style={{
                      padding: '10px 16px',
                      background: 'transparent',
                      color: '#666',
                      border: '1px solid #333',
                      fontFamily: 'monospace',
                      fontSize: '14px',
                      cursor: 'pointer',
                    }}
                  >
                    EXIT
                  </button>
                </div>
              </form>
            )}
          </div>
        </div>
      )}
    </>
  );
}
