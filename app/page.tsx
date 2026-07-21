import type { Metadata } from "next";
import Image from "next/image";
import LanguageSwitcher from "./components/LanguageSwitcher";

const APP_URL = "https://unifive-sprout.oa.r.appspot.com/";

export const metadata: Metadata = {
  title: "Sprout — Faz a tua comunidade florescer",
  description:
    "Descobre eventos perto de ti, conhece pessoas com os mesmos interesses e participa em iniciativas que fazem a diferença.",
};

type CategoryKey = "environment" | "social" | "health" | "arts";

function CategoryIcon({ category }: { category: CategoryKey }) {
  if (category === "environment") {
    return (
      <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
        <path d="M6.05 8.05c-2.73 2.73-2.73 7.15-.02 9.88 1.47-3.4 4.09-6.24 7.36-7.93-2.77 2.34-4.71 5.61-5.39 9.32 2.6 1.23 5.8.78 7.95-1.37C19.43 14.47 20 4 20 4S9.53 4.57 6.05 8.05z" />
      </svg>
    );
  }

  if (category === "social") {
    return (
      <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
        <circle cx="7" cy="7" r="2.2" />
        <path d="M2.5 15.3c0-2.2 2-3.6 4.5-3.6s4.5 1.4 4.5 3.6v1.3H2.5v-1.3z" />
        <circle cx="17" cy="7" r="2.2" />
        <path d="M12.5 15.3c0-2.2 2-3.6 4.5-3.6s4.5 1.4 4.5 3.6v1.3h-9v-1.3z" />
        <circle cx="12" cy="10.5" r="2.6" />
        <path d="M7 19c0-2.5 2.2-4 5-4s5 1.5 5 4v1.5H7V19z" />
      </svg>
    );
  }

  if (category === "health") {
    return (
      <svg viewBox="0 0 24 24" fill="currentColor" fillRule="evenodd" clipRule="evenodd" aria-hidden="true">
        <path d="M12 2 4 5v6c0 5.25 3.4 10.16 8 11.5 4.6-1.34 8-6.25 8-11.5V5l-8-3zM13 8v3h3v2h-3v3h-2v-3H8v-2h3V8h2z" />
      </svg>
    );
  }

  return (
    <svg viewBox="0 0 24 24" fill="currentColor" fillRule="evenodd" clipRule="evenodd" aria-hidden="true">
      <path d="M12 3C7.03 3 3 7.03 3 12s4.03 9 9 9c.828 0 1.5-.672 1.5-1.5 0-.396-.152-.751-.398-1.02-.244-.256-.396-.6-.396-.98 0-.828.672-1.5 1.5-1.5H16c2.76 0 5-2.24 5-5 0-4.42-4.03-8-9-8zM8 11.5A1.5 1.5 0 1 0 5 11.5a1.5 1.5 0 0 0 3 0zM11 7.5A1.5 1.5 0 1 0 8 7.5a1.5 1.5 0 0 0 3 0zM16 7.5A1.5 1.5 0 1 0 13 7.5a1.5 1.5 0 0 0 3 0zM19 11.5A1.5 1.5 0 1 0 16 11.5a1.5 1.5 0 0 0 3 0z" />
    </svg>
  );
}

const categories: Array<{
  key: CategoryKey;
  name: string;
  description: string;
  className: string;
}> = [
  {
    key: "environment",
    name: "Ambiente",
    description: "Cuida do planeta e dos espaços à tua volta.",
    className: "category-environment",
  },
  {
    key: "social",
    name: "Social",
    description: "Aproxima pessoas e fortalece a comunidade.",
    className: "category-social",
  },
  {
    key: "health",
    name: "Saúde",
    description: "Atividades para o corpo e para a mente.",
    className: "category-health",
  },
  {
    key: "arts",
    name: "Artes",
    description: "Descobre, cria e partilha cultura.",
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
    <span className="brand notranslate" aria-label="Sprout" translate="no">
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
    <div
      className="phone"
      role="img"
      aria-label="Ecrã Discover da aplicação móvel Sprout, com categorias e eventos recomendados"
    >
      <Image
        className="phone-screen"
        src="/sprout-mobile-discover.png"
        alt=""
        width={367}
        height={803}
        priority
        unoptimized
      />
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
          <div className="header-actions">
            <a className="header-cta" href={APP_URL}>
              Abrir Sprout <ArrowIcon />
            </a>
            <LanguageSwitcher />
          </div>
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
                    <CategoryIcon category={category.key} />
                  </span>
                  <span className="category-watermark" aria-hidden="true">
                    <CategoryIcon category={category.key} />
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
                <span className="organization-symbol">
                  <CategoryIcon category="social" />
                </span>
              </div>
              <div className="organization-copy">
                <span className="section-kicker section-kicker-light">Para organizações</span>
                <h2>Transforma boas ideias em impacto local.</h2>
                <p>
                  Publica eventos, gere participantes e aproxima a tua organização
                  das pessoas que querem contribuir.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="final-cta">
          <div className="page-shell final-cta-inner">
            <span className="final-sprout" aria-hidden="true">
              <CategoryIcon category="environment" />
            </span>
            <div>
              <span className="section-kicker">Começa hoje</span>
              <h2>A tua comunidade começa contigo.</h2>
              <p>
                Descobre o que está a acontecer perto de ti e dá o primeiro passo
                para fazer parte da mudança.
              </p>
            </div>
          </div>
        </section>
      </main>

      <footer className="site-footer">
        <div className="page-shell footer-inner">
          <Brand />
          <p>
            Sprout © 2026 · by <strong>Unifive</strong>
          </p>
        </div>
      </footer>
    </>
  );
}
