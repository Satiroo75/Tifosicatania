import { BookOpen, MessageCircle } from 'lucide-react';
import Link from 'next/link';

export default function Home() {
  return (
    <main className="home-shell">
      <header className="header">
        <Link className="brand" href="/"><div className="brand-mark" /><div className="brand-title">Tifosi del <span>Catania</span></div></Link>
        <nav className="nav"><Link className="active" href="/">Home</Link><Link href="/muro">Muro dei tifosi</Link><Link href="/regole">Regole del sito</Link><Link href="/contatti">Contatti</Link></nav>
        <div className="auth"><Link className="login" href="/login">Login</Link><Link className="register" href="/registrati">Registrati</Link></div>
      </header>
      <section className="hero">
        <div className="visual-stack"><div className="crest"><div className="crest-content"><div className="crest-kicker">Tifosi del</div><div className="crest-title">Catania</div><div className="crest-powered">Powered by</div><div className="crest-som">SOM</div></div></div></div>
        <h1 className="claim">La voce dei tifosi <span className="red">rossa</span><span className="blue">zzurri</span></h1>
        <div className="cta-row">
          <Link className="cta red-card" href="/regole"><span className="cta-icon"><BookOpen size={30}/></span><span className="cta-copy"><span className="cta-title">Regole del sito</span><span className="cta-text">Leggi il regolamento completo per vivere al meglio la community.</span></span><span className="arrow">›</span></Link>
          <Link className="cta blue-card" href="/muro"><span className="cta-icon"><MessageCircle size={30}/></span><span className="cta-copy"><span className="cta-title">Muro dei tifosi</span><span className="cta-text">Scrivi, leggi, condividi la tua passione con altri tifosi rossazzurri.</span></span><span className="arrow">›</span></Link>
        </div>
        <section className="opinion"><div className="opinion-label">☆ Opinione della settimana</div><div><div className="quote">“</div><div className="opinion-question">Qual è il giocatore che secondo te farà la differenza quest’anno per il Catania?</div><Link className="outline-btn" href="/muro">Partecipa alla discussione</Link></div><div className="opinion-info">Condividi la tua opinione e leggi quella degli altri tifosi.<strong>La tua voce conta.</strong></div></section>
        <footer className="footer"><span>© 2026 Tifosi del Catania — Tutti i diritti riservati</span><span>Powered by SOM</span></footer>
      </section>
    </main>
  );
}
