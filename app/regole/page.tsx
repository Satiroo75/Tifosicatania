import Link from 'next/link';

export default function Page() {
  return (
    <main className="page">
      <header className="topbar">
        <Link className="brand" href="/"><span className="mini-crest" /><span>TIFOSI DEL <b>CATANIA</b></span></Link>
        <nav className="nav"><Link href="/">HOME</Link><Link href="/muro">MURO DEI TIFOSI</Link><Link href="/regole">REGOLE DEL SITO</Link><Link href="/contatti">CONTATTI</Link></nav>
        <div className="auth"><Link className="login" href="/login">LOGIN</Link><Link className="register" href="/registrati">REGISTRATI</Link></div>
      </header>
      <section className="panel"><h1>Regole del sito</h1><p>Questo è uno spazio libero, dove ognuno può esprimere le sue opinioni, di qualsiasi genere siano. Vige una sola regola, lo si deve fare in un contesto civile. Rispetta te stesso e gli altri e farai parte di questa comunità che da moltissimi anni segue le vicende del Catania, e si riunisce regolarmente per scambiare quattro chiacchiere tra amici.</p></section>
    </main>
  );
}
