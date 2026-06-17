import Link from 'next/link';

export default function Page() {
  return (
    <main className="page">
      <header className="topbar">
        <Link className="brand" href="/"><span className="mini-crest" /><span>TIFOSI DEL <b>CATANIA</b></span></Link>
        <nav className="nav"><Link href="/">HOME</Link><Link href="/muro">MURO DEI TIFOSI</Link><Link href="/regole">REGOLE DEL SITO</Link><Link href="/contatti">CONTATTI</Link></nav>
        <div className="auth"><Link className="login" href="/login">LOGIN</Link><Link className="register" href="/registrati">REGISTRATI</Link></div>
      </header>
      <section className="panel"><h1>Contatti</h1><p>Pagina contatti in preparazione.</p></section>
    </main>
  );
}
