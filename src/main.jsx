import React from "react"
import { createRoot } from "react-dom/client"
import {
  ArrowDownRight,
  ArrowUpRight,
  Code2,
  Cpu,
  Bug,
  CircleDot,
  Mail,
  Terminal,
  ExternalLink,
  Camera,
  ShieldCheck,
  Music2,
  Film,
  Gamepad2,
  Crown,
  Trophy,
  CircleDot as PoolBall,
  MapPin,
  Menu,
  X,
} from 'lucide-react'
import { motion } from 'motion/react'
import './styles.css'

const projects = [
  {
    number: '01', title: 'Fake Review Detector', type: 'ML / NLP', status: 'BUILT',
    description: 'A DistilBERT experiment for classifying potentially fake reviews, with a Gradio interface and visual analysis.',
    tags: ['Python', 'DistilBERT', 'Gradio'], icon: ShieldCheck,
    href: 'https://github.com/aman921169/fake-review-detector', featured: true,
  },
  {
    number: '02', title: 'Music Player', type: 'WEB APP', status: 'PROJECT',
    description: 'A music player with a focused interface for browsing tracks and controlling playback.',
    tags: ['Web', 'Music'], icon: Music2, href: 'https://github.com/aman921169/music-player',
  },
]

const now = [
  ['01', 'QA automation', 'ACTIVE'],
  ['02', 'Python', 'ACTIVE'],
  ['03', 'Linux', 'DAILY DRIVER'],
  ['04', 'Web security', 'EXPLORING'],
  ['05', 'AI / ML', 'EXPLORING'],
]

function Button({ children, href = '#', variant = 'primary', icon: Icon }) {
  const opensNewTab = href.startsWith('https://')
  return <a className={`button ${variant}`} href={href} target={opensNewTab ? '_blank' : undefined} rel={opensNewTab ? 'noreferrer' : undefined}>{children}{Icon && <Icon size={16} />}</a>
}

function SectionLabel({ children, number }) {
  return <span className="kicker"><span>{number}</span> / {children}</span>
}

function MagicCard({ children, className = '' }) {
  const ref = React.useRef(null)
  const handleMove = (event) => {
    const el = ref.current
    if (!el) return
    const rect = el.getBoundingClientRect()
    el.style.setProperty('--mx', `${event.clientX - rect.left}px`)
    el.style.setProperty('--my', `${event.clientY - rect.top}px`)
  }
  return <div ref={ref} onMouseMove={handleMove} className={`magic-card ${className}`}>{children}</div>
}

function TerminalWindow() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 25, rotate: 2 }}
      animate={{ opacity: 1, y: 0, rotate: 1 }}
      transition={{ duration: .8, delay: .15 }}
      className="terminal-wrap"
    >
      <div className="terminal-card">
        <div className="terminal-top">
          <div className="traffic"><i/><i/><i/></div>
          <span>aman@raipur:~/portfolio</span>
          <Terminal size={14}/>
        </div>
        <div className="terminal-body">
          <p><span className="green">aman@raipur</span><span className="dim">:</span><span className="blue">~</span><span className="dim">$</span> whoami</p>
          <p className="out">BCA student · builder · tester</p>
          <p><span className="green">aman@raipur</span><span className="dim">:</span><span className="blue">~</span><span className="dim">$</span> neofetch --mini</p>
          <div className="neo">
            <div className="ascii">  ▄▄▄▄<br/> █    █<br/>  ▀▄▄▄▀</div>
            <div><span>OS</span> Pop!_OS<br/><span>Shell</span> zsh<br/><span>Focus</span> QA / Python<br/><span>Mode</span> building</div>
          </div>
          <p><span className="green">aman@raipur</span><span className="dim">:</span><span className="blue">~</span><span className="dim">$</span> cat interests.txt</p>
          <p className="out">AI · Automation · Security · Open Source · Linux</p>
          <p><span className="green">aman@raipur</span><span className="dim">:</span><span className="blue">~</span><span className="dim">$</span> <span className="cursor" /></p>
        </div>
      </div>
      <div className="orbit orbit-one" />
      <div className="orbit orbit-two" />
      <div className="float-chip chip-one"><Code2 size={13}/> Python</div>
      <div className="float-chip chip-two"><Bug size={13}/> QA</div>
      <div className="float-chip chip-three"><Cpu size={13}/> AI</div>
    </motion.div>
  )
}

function App() {
  const [open, setOpen] = React.useState(false)
  const close = () => setOpen(false)

  return (
    <div className="site-shell">
      <div className="noise" />
      <header className="nav-wrap">
        <nav className="nav">
          <a className="brand" href="#top" onClick={close}><span className="brand-dot" />AK<span className="brand-muted">/dev</span></a>
          <div className={`nav-links ${open ? 'open' : ''}`}>
            {[['projects', 'projects'], ['now', 'currently'], ['about', 'about'], ['interests', 'interests']].map(([item, label]) => <a key={item} href={`#${item}`} onClick={close}>{label}</a>)}
            <a href="#contact" onClick={close}>contact</a>
          </div>
          <button className="menu-button" onClick={() => setOpen(v => !v)} aria-label="Toggle navigation">{open ? <X/> : <Menu/>}</button>
        </nav>
      </header>

      <main id="top">
        <section className="hero section">
          <div className="hero-grid" />
          <div className="hero-copy">
            <motion.div initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: .5 }} className="eyebrow"><span className="pulse"/> AVAILABLE FOR SMALL TECH PROJECTS</motion.div>
            <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: .65, delay: .08 }}>
              I build things.<br/><span>Then I break them</span><br/>to learn why.
            </motion.h1>
            <motion.p initial={{ opacity: 0, y: 18 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: .65, delay: .16 }} className="hero-sub">
              I'm Aman, a BCA student from Raipur exploring <b>QA automation</b>, Python, AI, web security and Linux. I like turning curiosity into small, useful experiments.
            </motion.p>
            <motion.div initial={{ opacity: 0, y: 18 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: .65, delay: .24 }} className="hero-actions">
              <Button href="#now" icon={ArrowDownRight}>What I'm learning</Button>
              <Button href="https://www.instagram.com/4m4nkaurav/" variant="ghost" icon={Camera}>Instagram</Button>
              <Button href="https://github.com/aman921169" variant="ghost" icon={Code2}>GitHub</Button>
              <Button href="https://www.linkedin.com/in/amankaurav/" variant="ghost" icon={ExternalLink}>LinkedIn</Button>
            </motion.div>
            <div className="hero-meta"><span><CircleDot size={12}/> Raipur, India</span><span>BUILDING SINCE 2026</span></div>
          </div>
          <TerminalWindow />
          <div className="scroll-hint"><span/> scroll to explore</div>
        </section>

        <section id="projects" className="section section-pad">
          <div className="section-heading">
            <div><SectionLabel number="01">PROJECTS</SectionLabel><h2>Things I've built.</h2></div>
            <p>A couple of projects I've been working on.</p>
          </div>
          <div className="project-grid">
            {projects.map((project, i) => {
              const Icon = project.icon
              return <motion.div key={project.title} initial={{ opacity: 0, y: 22 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: .15 }} transition={{ delay: i * .07 }}>
                <a className="project-card-link" href={project.href} target="_blank" rel="noreferrer" aria-label={`Open ${project.title} repository`}>
                <MagicCard className={`project-card ${project.featured ? 'featured' : ''}`}>
                  <div className="project-top"><span className="project-number">{project.number}</span><div className="card-icon"><Icon size={19}/></div><span className="project-type">{project.type}</span></div>
                  <div className="project-meta"><span className="status"><i/>{project.status}</span></div>
                  <h3>{project.title}</h3>
                  <p>{project.description}</p>
                  <div className="tag-row">{project.tags.map(t => <span key={t}>{t}</span>)}</div>
                  <span className="card-link">View on GitHub <ArrowUpRight size={15}/></span>
                  <div className="card-glow" />
                </MagicCard>
                </a>
              </motion.div>
            })}
          </div>
        </section>

        <section id="now" className="section section-pad now-section">
          <div className="now-card">
            <div className="now-intro"><SectionLabel number="02">CURRENTLY</SectionLabel><h2>What I'm messing with <em>right now.</em></h2><p>Skills aren't percentages. They're things I'm actively using, learning and testing.</p></div>
            <div className="now-list">
              {now.map(([n, name, status]) => <div className="now-item" key={name}><span>{n}</span><b>{name}</b><span className="now-status">● {status}</span></div>)}
            </div>
          </div>
        </section>

        <section id="about" className="section section-pad about-section">
          <div className="about-grid">
            <div><SectionLabel number="03">ABOUT</SectionLabel><h2>Still figuring it out.<br/><em>That's the point.</em></h2></div>
            <div className="about-copy"><p>I'm Aman, a BCA student based in Raipur. I like understanding how systems work by building small versions of them, testing them, and occasionally breaking them.</p><p>Right now my path is moving toward QA automation and security, while keeping AI/ML and weird side projects in the mix.</p><div className="location"><MapPin size={15}/> Raipur, Chhattisgarh · India</div></div>
          </div>
          <div className="stack-strip"><span>PYTHON</span><span>PLAYWRIGHT</span><span>LINUX</span><span>GIT</span><span>AI / ML</span><span>WEB</span><span>QA</span></div>
        </section>

        <section id="interests" className="section section-pad interests-section">
          <div className="interest-intro">
            <SectionLabel number="04">OFF THE CLOCK</SectionLabel>
            <h2>A little more<br/>than code.</h2>
            <p>Movies, games, friendly competition, and the occasional battle over the chessboard.</p>
          </div>
          <div className="interest-grid">
            {[
              ['01', 'Movies', Film],
              ['02', 'Video games', Gamepad2],
              ['03', 'Chess', Crown],
              ['04', 'Football', Trophy],
              ['05', 'Pool', PoolBall],
              ['06', 'Music', Music2],
            ].map(([number, name, Icon]) => (
              <article className="interest-card" key={name}>
                <span className="interest-number">{number}</span>
                <Icon className="interest-icon" size={24} strokeWidth={1.6}/>
                <h3>{name}</h3>
              </article>
            ))}
          </div>
        </section>

        <section id="contact" className="section contact-section">
          <div className="contact-grid-bg"/>
          <div className="contact-glow"/>
          <SectionLabel number="05">CONTACT</SectionLabel>
          <h2>Got something worth building?</h2>
          <p>I'm open to small tech projects, collaborations, testing work and internships.</p>
          <a className="contact-email" href="mailto:amankaurav@hotmail.com">amankaurav@hotmail.com</a>
          <div className="contact-actions"><Button href="mailto:amankaurav@hotmail.com" icon={Mail}>Email me</Button><Button href="https://www.linkedin.com/in/amankaurav/" variant="ghost" icon={ExternalLink}>LinkedIn</Button></div>
          <div className="contact-note"><span/> No corporate speak required.</div>
        </section>
      </main>

      <footer className="footer"><span>© 2026 Aman Kaurav</span><span>Built on Linux · with too much curiosity</span><span><a href="#top">back to top ↑</a></span></footer>
    </div>
  )
}

createRoot(document.getElementById('root')).render(<App />)
  
