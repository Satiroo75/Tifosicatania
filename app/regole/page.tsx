import Link from 'next/link';

export default function Page() {
  return (
    <main className="page">
      <header className="header">
        <Link className="brand" href="/"><div className="brand-mark" /><div className="brand-title">Tifosi del <span>Catania</span></div></Link>
        <nav className="nav">
          <Link href="/">Home</Link>
          <Link href="/muro">Muro dei tifosi</Link>
          <Link href="/regole">Regole del sito</Link>
          <Link href="/contatti">Contatti</Link>
        </nav>
        <div className="auth"><Link className="login" href="/login">Login</Link><Link className="register" href="/registrati">Registrati</Link></div>
      </header>
      <section className="panel">
        <h1>Regole del sito</h1>
        <p>Questo è uno spazio libero, dove ognuno può esprimere le sue opinioni, di qualsiasi genere siano. Vige una sola regola, lo si deve fare in un contesto civile. Rispetta te stesso e gli altri e farai parte di questa comunità che da moltissimi anni segue le vicende del Catania, e si riunisce regolarmente per scambiare quattro chiacchiere tra amici.</p>
      </section>
    </main>
  );
}
