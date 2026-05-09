import './App.css'
import { useInViewOnce } from './hooks/useInViewOnce'
import { useEffect, useState } from 'react'

import mePhoto from './assets/photos/me.png'
import logoFisioprime from './assets/logos/logo_fisioprime.png'
import logoUangcek from './assets/logos/logo_uangcek.png'
import logoKolamguard from './assets/logos/logo_kolamguard.png'

import iconMail from './assets/icons/icon_mail.png'
import iconLinkedin from './assets/icons/icon_linkedin.png'
import iconGithub from './assets/icons/icon_github.png'

type Link = { label: string; href: string }

type Project = {
  title: string
  description: string
  tags: string[]
  href?: string
  logoSrc?: string
  logoAlt?: string
}

type TimelineItem = {
  title: string
  subtitle: string
  period: string
  bullets: string[]
}

type EducationItem = {
  school: string
  degree: string
  period: string
}

const profile = {
  name: 'Gideon Christ Gilberio Ginting, S.Kom',
  headline: 'Full‑Stack & Mobile Developer • Software Engineer • Database Engineer ',
  location: 'Medan, Indonesia',
  availability: 'Open to collaboration — freelance or full‑time',
  summary:
    'Full‑stack engineer with a strong mobile focus, experienced in building reliable products end‑to‑end—clean UX on the client, consistent business logic, and data‑aware backend integrations. I enjoy turning requirements into production releases with performance, security, and maintainability in mind.',
  links: [
    { label: 'GitHub', href: 'https://github.com/zfphantoms' },
    { label: 'LinkedIn', href: 'https://www.linkedin.com/in/zfphantoms/' },
    { label: 'Email', href: 'mailto:gidlqaz@gmail.com' },
  ] satisfies Link[],
}

const skills = [
  {
    group: 'Mobile Engineering',
    items: ['Flutter', 'Kotlin (Android)', 'Cross‑platform UX', 'State management', 'Performance tuning'],
  },
  {
    group: 'Backend & Integration',
    items: ['REST APIs', 'Laravel', 'Authentication', 'Payment gateway integration'],
  },
  {
    group: 'Data / Database',
    items: ['Database engineering', 'Data modeling', 'Query design', 'Analytics basics'],
  },
  {
    group: 'Applied AI (Projects)',
    items: ['Python', 'CNN (classification)', 'Sensor data pipelines (IoT)'],
  },
]

const projects: Project[] = [
  {
    title: 'Fisioprime (Health‑tech Mobile App)',
    description:
      'Health‑tech mobile app for physiotherapy home‑visit services: core business logic, booking flow, and secure payment gateway integration. Started on native Android (Kotlin) and later migrated to Flutter for a consistent cross‑platform experience.',
    tags: ['Flutter', 'Kotlin', 'Payments', 'Health‑tech'],
    logoSrc: logoFisioprime,
    logoAlt: 'Fisioprime logo',
  },
  {
    title: 'Counterfeit Banknote Detection (IoT + CNN) — Flutter App',
    description:
      'Flutter mobile app for counterfeit detection using IoT sensors (infrared + color sensor). Sensor readings are classified using a CNN approach and presented as clear pass/fail results in the app.',
    tags: ['Flutter', 'IoT', 'Infrared', 'Color Sensor', 'CNN'],
    logoSrc: logoUangcek,
    logoAlt: 'UangCek logo',
  },
  {
    title: 'Real‑Time Water Turbidity Monitoring — Flutter Dashboard',
    description:
      'Flutter app for real‑time water turbidity monitoring with quick status updates and a field‑friendly dashboard for continuous observation.',
    tags: ['Flutter', 'Real‑time', 'Monitoring', 'Dashboard'],
    logoSrc: logoKolamguard,
    logoAlt: 'KolamGuard logo',
  },
]

const experience: TimelineItem[] = [
  {
    title: 'Mobile Apps Developer',
    subtitle: 'PT HOME VISIT INDONESIA',
    period: 'Jun 2023 — Apr 2026',
    bullets: [
      'Core developer of Fisioprime (health‑tech) and led the early development phase.',
      'Started with native Android (Kotlin) for performance, then pioneered a migration to Flutter for a unified cross‑platform experience.',
      'Designed and implemented business logic for physiotherapy home‑visit services.',
      'Integrated a secure payment gateway and optimized application performance.',
      'Worked closely with stakeholders to translate service needs into reliable UI/UX and product flows.',
    ],
  },
]

const education: EducationItem[] = [
  {
    school: 'Universitas Sumatera Utara',
    degree: 'S‑1 Teknologi Informasi',
    period: 'Aug 2019 — Jan 2026',
  },
]

function Chip({ children }: { children: React.ReactNode }) {
  return <span className="chip">{children}</span>
}

function ExternalLink({ href, label }: { href: string; label: string }) {
  return (
    <a className="btn" href={href} target="_blank" rel="noreferrer">
      {label}
      <span className="btnIcon" aria-hidden="true">
        ↗
      </span>
    </a>
  )
}

function App() {
  const skillsView = useInViewOnce<HTMLElement>()
  const projectsView = useInViewOnce<HTMLElement>()
  const experienceView = useInViewOnce<HTMLElement>()
  const educationView = useInViewOnce<HTMLElement>()
  const contactView = useInViewOnce<HTMLElement>()

  const [showBackToTop, setShowBackToTop] = useState(false)

  useEffect(() => {
    const onScroll = () => {
      const doc = document.documentElement
      const scrollTop = window.scrollY || doc.scrollTop
      const max = Math.max(1, doc.scrollHeight - doc.clientHeight)
      setShowBackToTop(scrollTop / max >= 0.3)
    }

    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const emailHref = profile.links.find((l) => l.label === 'Email')?.href ?? 'mailto:gidlqaz@gmail.com'
  const linkedinHref =
    profile.links.find((l) => l.label === 'LinkedIn')?.href ?? 'https://www.linkedin.com/in/zfphantoms/'

  return (
    <div className="page">
      <header className="nav">
        <a className="brand" href="#top" aria-label="Home">
          <span className="brandMark" aria-hidden="true">
            {'</>'}
          </span>
          <span className="brandText">{profile.name}</span>
        </a>

        <nav className="navLinks" aria-label="Primary">
          <a href="#projects">Projects</a>
          <a href="#skills">Skills</a>
          <a href="#experience">Experience</a>
          <a href="#education">Education</a>
          <a href="#contact">Contact</a>
        </nav>

        <div className="navCta" />
      </header>

      <main id="top" className="main">
        <section className="hero">
          <div className="heroGrid">
            <div className="heroLeft">
              <div className="kicker">
                <span className="pulse" aria-hidden="true" />
                <span>{profile.availability}</span>
              </div>

              <div style={{ display: 'flex', alignItems: 'center', gap: 16, marginTop: 18 }}>
                <div
                  style={{
                    position: 'relative',
                    width: 'clamp(96px, 9vw, 124px)',
                    height: 'clamp(96px, 9vw, 124px)',
                    borderRadius: 28,
                    padding: 3,
                    background:
                      'linear-gradient(135deg, rgba(168, 85, 247, 0.85), rgba(34, 211, 238, 0.75))',
                    boxShadow:
                      '0 0 0 1px rgba(255,255,255,0.1), 0 18px 46px rgba(168, 85, 247, 0.16), 0 18px 46px rgba(34, 211, 238, 0.12)',
                    flex: '0 0 auto',
                  }}
                >
                  <img
                    src={mePhoto}
                    alt="Portrait of Gideon"
                    width={110}
                    height={110}
                    style={{
                      width: '100%',
                      height: '100%',
                      borderRadius: 26,
                      objectFit: 'cover',
                      border: '1px solid rgba(255,255,255,0.14)',
                      boxShadow: '0 22px 54px rgba(0,0,0,0.45)',
                      display: 'block',
                      background: 'rgba(0,0,0,0.2)',
                    }}
                  />

                  <div
                    aria-hidden="true"
                    style={{
                      position: 'absolute',
                      left: 10,
                      bottom: 10,
                      padding: '6px 10px',
                      borderRadius: 999,
                      border: '1px solid rgba(255,255,255,0.16)',
                      background: 'rgba(8, 9, 20, 0.55)',
                      backdropFilter: 'blur(10px)',
                      boxShadow: '0 12px 24px rgba(0,0,0,0.35)',
                      fontFamily: 'var(--mono)',
                      fontSize: 12,
                      color: 'rgba(255,255,255,0.86)',
                      letterSpacing: '-0.2px',
                      userSelect: 'none',
                    }}
                  >
                    S.Kom
                  </div>
                </div>

                <div style={{ flex: 1, minWidth: 0 }}>
                  <h1 className="heroTitle" style={{ marginTop: 0 }}>
                    {profile.name}
                  </h1>
                  <p className="heroHeadline">{profile.headline}</p>
                </div>
              </div>

              <p className="heroSummary">{profile.summary}</p>

              <div className="metaRow">
                <span className="metaItem">📍 {profile.location}</span>
                <span className="metaDivider" aria-hidden="true" />
                <span className="metaItem">⚡ Build → Validate → Ship</span>
              </div>

              <div className="ctaRow">
                <a className="btnPrimary" href="#projects">
                  View projects
                </a>
                <a className="btnGhost" href="#contact">
                  Contact
                </a>
              </div>

              <div className="linkRow" aria-label="Social links">
                {profile.links.map((l) => (
                  <ExternalLink key={l.label} href={l.href} label={l.label} />
                ))}
              </div>
            </div>

            <div className="heroRight" aria-hidden="true">
              <div className="card3d">
                <div className="card3dInner">
                  <div className="cardTop">
                    <div className="cardDot" />
                    <div className="cardDot" />
                    <div className="cardDot" />
                    <div className="cardTitle">terminal</div>
                  </div>

                  <div
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: 12,
                      padding: '14px 10px 0',
                    }}
                    aria-hidden="true"
                  >
                    <img
                      src={mePhoto}
                      alt=""
                      width={58}
                      height={58}
                      style={{
                        borderRadius: 18,
                        objectFit: 'cover',
                        border: '1px solid rgba(255,255,255,0.14)',
                      }}
                    />
                    <div style={{ display: 'grid', gap: 2 }}>
                      <div style={{ fontFamily: 'var(--mono)', fontSize: 12, color: 'rgba(255,255,255,0.82)' }}>
                        identity
                      </div>
                      <div style={{ fontWeight: 650, color: 'rgba(255,255,255,0.92)' }}>{profile.name}</div>
                    </div>
                  </div>

                  <pre className="terminal">
                    <code>
                      {`$ profile\nfull-stack + mobile developer\n\n$ focus\nflutter · kotlin · laravel · database\n\n$ product\nfisioprime (home-visit physiotherapy app)\n`}
                    </code>
                  </pre>
                </div>
              </div>

              <div className="glassStat statA">
                <div className="statLabel">Primary</div>
                <div className="statValue">Mobile Engineering</div>
              </div>
              <div className="glassStat statB">
                <div className="statLabel">Domain</div>
                <div className="statValue">Health‑tech</div>
              </div>
            </div>
          </div>
        </section>

        <section
          id="skills"
          ref={skillsView.ref}
          className={`section reveal ${skillsView.inView ? 'is-visible' : ''}`}
        >
          <div className="sectionHead">
            <h2>Skills</h2>
            <p>Tools and technologies I use to ship production-ready apps.</p>
          </div>

          <div className="skillGrid">
            {skills.map((s) => (
              <article key={s.group} className="panel">
                <h3>{s.group}</h3>
                <div className="chipRow">
                  {s.items.map((it) => (
                    <Chip key={it}>{it}</Chip>
                  ))}
                </div>
              </article>
            ))}
          </div>
        </section>

        <section
          id="projects"
          ref={projectsView.ref}
          className={`section reveal ${projectsView.inView ? 'is-visible' : ''}`}
        >
          <div className="sectionHead">
            <h2>Projects</h2>
            <p>Selected work across mobile, IoT, and applied ML.</p>
          </div>

          <div className="projectGrid">
            {projects.map((p) => (
              <article key={p.title} className="project">
                <div className="projectTop">
                  <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
                    {p.logoSrc ? (
                      <img
                        src={p.logoSrc}
                        alt={p.logoAlt ?? ''}
                        width={28}
                        height={28}
                        style={{ borderRadius: 8, objectFit: 'cover', border: '1px solid rgba(255,255,255,0.12)' }}
                        loading="lazy"
                      />
                    ) : null}
                    <h3 style={{ margin: 0 }}>{p.title}</h3>
                  </div>

                  {p.href ? (
                    <a className="projectLink" href={p.href} target="_blank" rel="noreferrer">
                      Open ↗
                    </a>
                  ) : null}
                </div>
                <p className="projectDesc">{p.description}</p>
                <div className="chipRow">
                  {p.tags.map((t) => (
                    <Chip key={t}>{t}</Chip>
                  ))}
                </div>
              </article>
            ))}
          </div>
        </section>

        <section
          id="experience"
          ref={experienceView.ref}
          className={`section reveal ${experienceView.inView ? 'is-visible' : ''}`}
        >
          <div className="sectionHead">
            <h2>Experience</h2>
            <p>Highlights of roles and impact.</p>
          </div>

          <div className="timeline">
            {experience.map((e) => (
              <div key={`${e.title}-${e.period}`} className="timelineItem">
                <div className="timelineDot" aria-hidden="true" />
                <div>
                  <div className="timelineTitle">
                    {e.title} • {e.subtitle}
                  </div>
                  <div className="timelineBody" style={{ marginTop: 4, color: 'rgba(255,255,255,0.72)' }}>
                    {e.period}
                  </div>
                  <div className="timelineBody">
                    <ul style={{ margin: '10px 0 0', paddingLeft: 18 }}>
                      {e.bullets.map((b) => (
                        <li key={b} style={{ margin: '6px 0' }}>
                          {b}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        <section
          id="education"
          ref={educationView.ref}
          className={`section reveal ${educationView.inView ? 'is-visible' : ''}`}
        >
          <div className="sectionHead">
            <h2>Education</h2>
            <p>Academic background.</p>
          </div>

          <div className="timeline">
            {education.map((ed) => (
              <div key={`${ed.school}-${ed.period}`} className="timelineItem">
                <div className="timelineDot" aria-hidden="true" />
                <div>
                  <div className="timelineTitle">{ed.degree}</div>
                  <div className="timelineBody" style={{ marginTop: 4, color: 'rgba(255,255,255,0.72)' }}>
                    {ed.school} • {ed.period}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        <section
          id="contact"
          ref={contactView.ref}
          className={`section reveal ${contactView.inView ? 'is-visible' : ''}`}
        >
          <div className="ctaCard">
            <div>
              <h2>Let’s connect.</h2>
              <p>For collaboration or opportunities, reach out via email or LinkedIn.</p>
            </div>

            <div className="ctaActions">
              <a className="btnPrimary" href={emailHref}>
                Email
              </a>
              <a className="btnGhost" href={linkedinHref} target="_blank" rel="noreferrer">
                LinkedIn
              </a>
            </div>
          </div>
        </section>
      </main>

      <footer className="footer">
        <div className="footerInner" style={{ justifyContent: 'space-between', gap: 16 }}>
          <div style={{ display: 'flex', flexWrap: 'wrap', alignItems: 'center', gap: 10 }}>
            <span className="brandMark" aria-hidden="true" style={{ borderRadius: 10 }}>
              {'</>'}
            </span>
            <span className="footerMuted" style={{ fontFamily: 'var(--mono)' }}>
              {profile.name}
            </span>
            <span className="footerSep" aria-hidden="true" />
            <span className="footerMuted" style={{ fontFamily: 'var(--mono)' }}>
              Shipping reliable mobile products with clean UX, secure integrations, and solid data foundations.
            </span>
          </div>

          <div style={{ display: 'flex', flexWrap: 'wrap', alignItems: 'center', gap: 10 }}>
            <a className="btn" href="#projects" aria-label="Projects">
              [PROJECTS]
            </a>
            <a className="btn" href="#skills" aria-label="Skills">
              [SKILLS]
            </a>
            <a className="btn" href="#experience" aria-label="Experience">
              [EXPERIENCE]
            </a>
            <a className="btn" href="#education" aria-label="Education">
              [EDUCATION]
            </a>
            <a className="btn" href="#contact" aria-label="Contact">
              [CONTACT]
            </a>

            <span className="footerSep" aria-hidden="true" />

            <a
              className="btn"
              href={emailHref}
              aria-label="Email"
              title="Email"
              style={{ width: 42, paddingInline: 0, justifyContent: 'center' }}
            >
              <img src={iconMail} alt="" width={18} height={18} style={{ opacity: 0.9 }} />
            </a>
            <a
              className="btn"
              href={linkedinHref}
              target="_blank"
              rel="noreferrer"
              aria-label="LinkedIn"
              title="LinkedIn"
              style={{ width: 42, paddingInline: 0, justifyContent: 'center' }}
            >
              <img src={iconLinkedin} alt="" width={18} height={18} style={{ opacity: 0.9 }} />
            </a>
            <a
              className="btn"
              href={'https://github.com/zfphantoms'}
              target="_blank"
              rel="noreferrer"
              aria-label="GitHub"
              title="GitHub"
              style={{ width: 42, paddingInline: 0, justifyContent: 'center' }}
            >
              <img src={iconGithub} alt="" width={18} height={18} style={{ opacity: 0.9 }} />
            </a>
          </div>
        </div>

        <div className="footerInner" style={{ paddingTop: 0, opacity: 0.9, justifyContent: 'space-between' }}>
          <span>
            © {new Date().getFullYear()} {profile.name}. All rights reserved.
          </span>
          <span className="footerMuted" style={{ fontFamily: 'var(--mono)', whiteSpace: 'nowrap' }}>
            Built with a lot of ☕
          </span>
        </div>
      </footer>

      {showBackToTop ? (
        <a
          className="btn"
          href="#top"
          aria-label="Back to top"
          title="Back to top"
          style={{
            position: 'fixed',
            right: 18,
            bottom: 18,
            width: 52,
            height: 52,
            borderRadius: 14,
            justifyContent: 'center',
            paddingInline: 0,
            zIndex: 60,
          }}
        >
          ^
        </a>
      ) : null}
    </div>
  )
}

export default App
