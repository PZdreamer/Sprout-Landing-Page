import type { Metadata } from "next";

const APP_URL = "https://sprout-dot-unifive-sprout.oa.r.appspot.com/";

export const metadata: Metadata = {
  title: "Sprout — Faz a tua comunidade florescer",
  description:
    "Descobre eventos perto de ti, conhece pessoas com os mesmos interesses e participa em iniciativas que fazem a diferença.",
};

const categories = [
  {
    name: "Ambiente",
    description: "Cuida do planeta e dos espaços à tua volta.",
    symbol: "✦",
    className: "category-environment",
  },
  {
    name: "Social",
    description: "Aproxima pessoas e fortalece a comunidade.",
    symbol: "●●",
    className: "category-social",
  },
  {
    name: "Saúde",
    description: "Atividades para o corpo e para a mente.",
    symbol: "♥",
    className: "category-health",
  },
  {
    name: "Artes",
    description: "Descobre, cria e partilha cultura.",
    symbol: "✺",
    className: "category-arts",
  },
];

const features = [
  {
    number: "01",
    title: "Descobre eventos perto de ti",
    description:
      "Encontra rapidamente iniciativas locais que combinam contigo.",
    tone: "green",
  },
  {
    number: "02",
    title: "Conquista emblemas",
    description:
      "Participa, cria impacto e acompanha o teu percurso na comunidade.",
    tone: "yellow",
  },
  {
    number: "03",
    title: "Organiza com facilidade",
    description: "Cria eventos e gere participantes num único lugar.",
    tone: "blue",
  },
  {
    number: "04",
    title: "Recebe novidades em tempo real",
    description:
      "Fica a par de convites, alterações e informações importantes.",
    tone: "red",
  },
  {
    number: "05",
    title: "Participa com amigos",
    description:
      "Vê o que os teus amigos estão a fazer e junta-te a eles.",
    tone: "purple",
  },
  {
    number: "06",
    title: "Aberta a todos",
    description:
      "Qualquer pessoa pode descobrir, criar ou participar num evento.",
    tone: "teal",
  },
];

function Brand() {
  return (
    <span className="brand" aria-label="Sprout">
      <span className="brand-mark" aria-hidden="true">
        <span className="brand-logo" />
      </span>
      <span className="brand-word">SPROUT</span>
    </span>
  );
}

function ArrowIcon() {
  return (
    <span className="button-arrow" aria-hidden="true">
      ↗
    </span>
  );
}

function AppMockup() {
  return (
    <div className="phone" aria-label="Pré-visualização da aplicação Sprout">
      <div className="phone-speaker" />
      <div className="phone-screen">
        <div className="mock-header">
          <span className="mock-mark" aria-hidden="true">
            <span className="mock-logo" />
          </span>
          <span className="mock-avatar" />
        </div>
        <div className="mock-copy">
          <span>Olá!</span>
          <strong>Descobre perto de ti</strong>
        </div>
        <div className="mock-search">⌕&nbsp;&nbsp; Procurar eventos</div>
        <div className="mock-categories">
          <span className="mock-category mock-green">✦</span>
          <span className="mock-category mock-blue">●●</span>
          <span className="mock-category mock-red">♥</span>
          <span className="mock-category mock-purple">✺</span>
        </div>
        <div className="mock-section-title">
          <strong>Eventos para ti</strong>
          <span>Ver todos</span>
        </div>
        <div className="mock-event mock-event-main">
          <div className="mock-event-image mock-event-image-green">
            <span>14</span>
            <small>AGO</small>
          </div>
          <div>
            <strong>Limpeza do parque</strong>
            <span>10:00 · Perto de ti</span>
          </div>
        </div>
        <div className="mock-event">
          <div className="mock-event-image mock-event-image-orange">
            <span>18</span>
            <small>AGO</small>
          </div>
          <div>
            <strong>Oficina comunitária</strong>
            <span>15:30 · Centro local</span>
          </div>
        </div>
        <div className="mock-nav" aria-hidden="true">
          <span className="active">●</span>
          <span>○</span>
          <span>＋</span>
          <span>♧</span>
        </div>
      </div>
    </div>
  );
}

export default function Home() {
  return (
    <>
      <header className="site-header">
        <div className="header-inner">
          <a className="brand-link" href="#inicio" aria-label="Sprout — início">
            <Brand />
          </a>
          <nav className="desktop-nav" aria-label="Navegação principal">
            <a href="#descobrir">Descobrir</a>
            <a href="#funcionalidades">Funcionalidades</a>
            <a href="#organizacoes">Para organizações</a>
          </nav>
          <a className="header-cta" href={APP_URL} target="_blank" rel="noreferrer">
            Abrir Sprout <ArrowIcon />
          </a>
        </div>
      </header>

      <main>
        <section className="hero" id="inicio">
          <div className="hero-glow hero-glow-one" />
          <div className="hero-glow hero-glow-two" />
          <div className="page-shell hero-grid">
            <div className="hero-copy">
              <div className="eyebrow">
                <span className="eyebrow-dot" />
                Eventos locais · Pessoas reais
              </div>
              <h1>
                Faz a tua comunidade <em>florescer.</em>
              </h1>
              <p className="hero-text">
                Descobre eventos perto de ti, conhece pessoas com os mesmos
                interesses e participa em iniciativas que fazem a diferença.
              </p>
              <div className="hero-actions">
                <a className="button button-primary" href={APP_URL} target="_blank" rel="noreferrer">
                  Explorar eventos <ArrowIcon />
                </a>
                <a className="button button-secondary" href="#funcionalidades">
                  Como funciona
                </a>
              </div>
              <div className="hero-note" aria-label="Vantagens">
                <span>Gratuito</span>
                <span>Aberto a todos</span>
                <span>Feito para a comunidade</span>
              </div>
            </div>

            <div className="hero-visual">
              <div
                className="community-photo"
                role="img"
                aria-label="Pessoas reunidas num evento da comunidade ao ar livre"
              >
                <div className="photo-label">
                  <span className="photo-label-icon">♥</span>
                  <span>
                    <strong>Impacto local</strong>
                    <small>feito em conjunto</small>
                  </span>
                </div>
              </div>
              <AppMockup />
              <div className="hero-badge hero-badge-top">
                <span className="badge-pulse" />
                <span>
                  <strong>Novos eventos</strong>
                  <small>perto de ti</small>
                </span>
              </div>
              <div className="hero-badge hero-badge-bottom">
                <strong>+ comunidade</strong>
              </div>
            </div>
          </div>
        </section>

        <section className="category-section" id="descobrir">
          <div className="page-shell">
            <div className="section-heading split-heading">
              <div>
                <span className="section-kicker">Explora por categoria</span>
                <h2>Há sempre uma forma de participar.</h2>
              </div>
              <p>
                Encontra atividades alinhadas com aquilo de que gostas e com o
                impacto que queres criar.
              </p>
            </div>
            <div className="category-grid">
              {categories.map((category) => (
                <article className={`category-card ${category.className}`} key={category.name}>
                  <span className="category-symbol" aria-hidden="true">
                    {category.symbol}
                  </span>
                  <div>
                    <h3>{category.name}</h3>
                    <p>{category.description}</p>
                  </div>
                  <span className="category-arrow" aria-hidden="true">↗</span>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="features-section" id="funcionalidades">
          <div className="page-shell">
            <div className="section-heading centered-heading">
              <span className="section-kicker">Tudo num só lugar</span>
              <h2>Tudo o que precisas para participar.</h2>
              <p>
                Do primeiro evento a uma comunidade inteira, a Sprout mantém
                tudo simples.
              </p>
            </div>
            <div className="features-grid">
              {features.map((feature) => (
                <article className={`feature-card feature-${feature.tone}`} key={feature.number}>
                  <div className="feature-topline">
                    <span className="feature-number">{feature.number}</span>
                    <span className="feature-mark" aria-hidden="true" />
                  </div>
                  <h3>{feature.title}</h3>
                  <p>{feature.description}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="organizations-section" id="organizacoes">
          <div className="page-shell">
            <div className="organization-panel">
              <div className="organization-decoration" aria-hidden="true">
                <span className="organization-ring organization-ring-one" />
                <span className="organization-ring organization-ring-two" />
                <span className="organization-leaf">✦</span>
              </div>
              <div className="organization-copy">
                <span className="section-kicker section-kicker-light">Para organizações</span>
                <h2>Transforma boas ideias em impacto local.</h2>
                <p>
                  Publica eventos, gere participantes e aproxima a tua organização
                  das pessoas que querem contribuir.
                </p>
                <a className="button button-light" href={APP_URL} target="_blank" rel="noreferrer">
                  Publicar um evento <ArrowIcon />
                </a>
              </div>
              <div className="organization-benefits">
                <div>
                  <span aria-hidden="true">01</span>
                  <strong>Criação e gestão de eventos</strong>
                </div>
                <div>
                  <span aria-hidden="true">02</span>
                  <strong>Comunicação com participantes</strong>
                </div>
                <div>
                  <span aria-hidden="true">03</span>
                  <strong>Mais visibilidade na comunidade</strong>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="final-cta">
          <div className="page-shell final-cta-inner">
            <span className="final-sprout" aria-hidden="true">✦</span>
            <div>
              <span className="section-kicker">Começa hoje</span>
              <h2>A tua comunidade começa contigo.</h2>
              <p>
                Descobre o que está a acontecer perto de ti e dá o primeiro passo
                para fazer parte da mudança.
              </p>
            </div>
            <a className="button button-dark" href={APP_URL} target="_blank" rel="noreferrer">
              Começar agora <ArrowIcon />
            </a>
          </div>
        </section>
      </main>

      <footer className="site-footer">
        <div className="page-shell footer-inner">
          <Brand />
          <p>Eventos locais. Pessoas reais. Impacto positivo.</p>
          <a href={APP_URL} target="_blank" rel="noreferrer">
            Abrir aplicação <span aria-hidden="true">↗</span>
          </a>
        </div>
      </footer>
    </>
  );
}
