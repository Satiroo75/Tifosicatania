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
        <h1>Registrati</h1>
        <p>Registrazione in preparazione.</p>
      </section>
    </main>
  );
}
