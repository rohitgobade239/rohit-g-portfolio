'use client'

import { useState } from 'react'
import {
  ArrowDownRight,
  ArrowUpRight,
  Check,
  Cloud,
  Code2,
  Container,
  Download,
  GitBranch,
  Globe2,
  Mail,
  Menu,
  Phone,
  Moon,
  Network,
  Server,
  ShieldCheck,
  Sparkles,
  Sun,
  Terminal,
  X,
} from 'lucide-react'

const skills = [
  { name: 'AWS', detail: 'EC2 · EKS · RDS · S3 · IAM · VPC · CloudWatch', icon: Cloud },
  { name: 'Azure & GCP', detail: 'Entra ID · RBAC · Azure Monitor · Compute Engine · Cloud Storage', icon: Globe2 },
  { name: 'Infrastructure as Code', detail: 'Terraform · Ansible · repeatable provisioning', icon: Network },
  { name: 'Containers', detail: 'Docker · Kubernetes', icon: Container },
  { name: 'CI/CD', detail: 'Jenkins · GitHub Actions · GitLab', icon: GitBranch },
  { name: 'Observability', detail: 'Prometheus · Grafana · CloudWatch', icon: Sparkles },
  { name: 'Systems & Scripting', detail: 'Linux · Ubuntu · RHEL · Bash · Python · PowerShell', icon: Terminal },
  { name: 'AI-assisted DevOps', detail: 'Copilot · ChatGPT · Amazon Q · Cursor · runbooks', icon: Sparkles },
  { name: 'Frontend & Hosting', detail: 'React · Next.js · JavaScript · WordPress · Vercel · Netlify · cPanel', icon: Code2 },
]

const projects = [
  {
    number: '01',
    title: 'Cloud infrastructure automation',
    description: 'Supported EC2, VPC, S3, IAM and RDS infrastructure with Terraform provisioning, Ansible configuration, DNS, network access, and production troubleshooting across environments.',
    tags: ['AWS', 'Terraform', 'Ansible'],
    color: 'cyan',
  },
  {
    number: '02',
    title: 'Container delivery platform',
    description: 'Built CI/CD workflows for checkout, build, test, Docker image creation, controlled deployments, Kubernetes workloads, approvals, rollback planning, and pipeline troubleshooting.',
    tags: ['Jenkins', 'Docker', 'Kubernetes'],
    color: 'violet',
  },
  {
    number: '03',
    title: 'Production reliability toolkit',
    description: 'Configured CloudWatch, Prometheus, and Grafana dashboards and alerts; investigated logs, resource usage, production incidents, and documented repeatable operational runbooks.',
    tags: ['Prometheus', 'Grafana', 'CloudWatch'],
    color: 'lime',
  },
]

const timeline = [
  { year: 'Mar 2023 — Present', role: 'DevOps Engineer', company: 'Chittlesoft Solutions Pvt. Ltd.', body: 'Built Jenkins and GitHub Actions CI/CD pipelines; provisioned AWS EC2, RDS, S3, VPC and IAM with Terraform and Ansible; supported Docker and Kubernetes releases; configured CloudWatch, Prometheus and Grafana; managed DNS, load balancers, IAM, RBAC, Entra ID, SSO and MFA; partnered with application teams on build failures, releases and environment issues; supported Vercel, Netlify, cPanel, Hostinger and GoDaddy hosting workflows; used AI-assisted troubleshooting with manual validation.' },
  { year: 'May 2020 — Mar 2023', role: 'Frontend Developer', company: 'Vsynergize Pvt. Ltd.', body: 'Developed and maintained responsive interfaces and websites with HTML, CSS, JavaScript, React.js, Next.js and WordPress; implemented UI components, responsive layouts and browser fixes; collaborated with design and application teams; used Git-based version control and supported website updates, hosting and release coordination.' },
]

function SectionLabel({ children }: { children: React.ReactNode }) {
  return <p className="section-label"><span className="section-dot" />{children}</p>
}

export default function Page() {
  const [dark, setDark] = useState(true)
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <div className={dark ? 'site-shell dark' : 'site-shell'}>
      <header className="site-header">
        <a href="#top" className="brand" aria-label="Rohit Gobade home">
          <span className="brand-mark"><span /></span>
          <span>Rohit <span className="brand-role">DevOps</span><span className="brand-dot">.</span></span>
        </a>
        <nav className={menuOpen ? 'main-nav is-open' : 'main-nav'} aria-label="Main navigation">
          {['about', 'work', 'experience', 'contact'].map((item) => <a key={item} href={`#${item}`} onClick={() => setMenuOpen(false)}>{item}</a>)}
        </nav>
        <div className="header-actions">
          <button className="theme-toggle" onClick={() => setDark(!dark)} aria-label={dark ? 'Switch to light mode' : 'Switch to dark mode'}>{dark ? <Sun /> : <Moon />}</button>
          <a className="header-cta" href="#contact">Let&apos;s talk <ArrowUpRight /></a>
          <button className="menu-toggle" onClick={() => setMenuOpen(!menuOpen)} aria-label="Toggle navigation">{menuOpen ? <X /> : <Menu />}</button>
        </div>
      </header>

      <main id="top">
        <section className="hero section-wrap">
          <div className="hero-copy">
            <div className="availability"><span className="pulse" /> Available for DevOps &amp; SRE opportunities <strong>· Immediate joining</strong></div>
            <h1>Ship better.<br /><em>Sleep better.</em></h1>
            <p className="hero-intro">I&apos;m Rohit Gobade — a DevOps Engineer turning cloud complexity into calm, repeatable systems.</p>
            <div className="hero-actions"><a className="button button-primary" href="#work">Explore my work <ArrowDownRight /></a><a className="text-link" href="/Rohit-Gobade-Resume.pdf" download>Download resume <Download /></a></div>
          </div>
          <div className="hero-visual" aria-label="Cloud infrastructure system diagram">
            <div className="orbit orbit-one" /><div className="orbit orbit-two" /><div className="orbit orbit-three" />
            <div className="core-node"><Server /><span>production<br />ready</span></div>
            <div className="node node-a"><Cloud /><span>AWS</span></div><div className="node node-b"><Container /><span>Docker</span></div><div className="node node-c"><GitBranch /><span>CI/CD</span></div><div className="node node-d"><ShieldCheck /><span>secure</span></div>
            <div className="visual-caption"><span>01 / 04</span><span>systems in motion</span></div>
          </div>
        </section>

        <section className="stats-strip section-wrap" aria-label="Career highlights"><div><strong>6+</strong><span>years in IT</span></div><div><strong>3.5</strong><span>years in DevOps</span></div><div><strong>3</strong><span>cloud ecosystems</span></div><div><strong>∞</strong><span>curiosity to learn</span></div></section>

        <section id="about" className="about section-wrap section-block"><div className="section-heading"><SectionLabel>01 — about</SectionLabel><h2>Infrastructure is<br /><span>human work.</span></h2></div><div className="about-content"><p className="lead">The best systems are the ones that make people feel confident. I build the automation, guardrails, and visibility that help teams move quickly without guessing.</p><p>With a foundation in frontend development and a focus on cloud operations, I bring both sides of the product conversation together. My approach is practical: automate the repeatable, observe the important, and document what future-you will thank you for.</p><div className="about-pills"><span><Check /> Manual validation, always</span><span><Check /> Calm incident response</span><span><Check /> Clear handovers</span></div></div></section>

        <section id="work" className="section-wrap section-block"><div className="section-heading row-heading"><div><SectionLabel>02 — selected work</SectionLabel><h2>Built to <span>hold up.</span></h2></div><span className="section-note">Selected capability areas</span></div><div className="project-grid">{projects.map((project) => <article className={`project-card ${project.color}`} key={project.number}><div className="project-top"><span>{project.number}</span><Code2 aria-hidden="true" /></div><div className="project-visual"><div className="mini-grid" /><div className="project-glyph">{project.number === '01' ? <Cloud /> : project.number === '02' ? <Container /> : <Sparkles />}</div></div><div className="project-info"><h3>{project.title}</h3><p>{project.description}</p><div className="tag-row">{project.tags.map(tag => <span key={tag}>{tag}</span>)}</div><span className="project-link project-link-muted">Hands-on experience <Check /></span></div></article>)}</div></section>

        <section className="skills section-wrap section-block"><div className="section-heading"><SectionLabel>03 — toolbox</SectionLabel><h2>The stack behind<br /><span>the calm.</span></h2></div><div className="skills-grid">{skills.map(({ name, detail, icon: Icon }) => <div className="skill-card" key={name}><Icon /><div><h3>{name}</h3><p>{detail}</p></div><ArrowUpRight className="skill-arrow" /></div>)}</div></section>

        <section id="experience" className="experience section-wrap section-block"><div className="section-heading"><SectionLabel>04 — experience</SectionLabel><h2>A timeline of<br /><span>shipping.</span></h2></div><div className="timeline">{timeline.map(item => <article className="timeline-item" key={item.year}><div className="timeline-year">{item.year}</div><div className="timeline-line"><span /></div><div><p className="eyebrow">{item.role}</p><h3>{item.company}</h3><p>{item.body}</p></div></article>)}</div></section>

        <section className="credentials section-wrap section-block"><div className="credential-card"><SectionLabel>05 — education</SectionLabel><h2>Learning is<br /><span>the leverage.</span></h2><div className="credential-list"><div><strong>MCA</strong><span>Savitribai Phule Pune University · 64%</span></div><div><strong>BCA</strong><span>Swami Ramanand Teerth Marathwada University · 61%</span></div><div><strong>HSC</strong><span>Maharashtra State Board · 65%</span></div><div><strong>SSC</strong><span>Maharashtra State Board · 69.60%</span></div></div></div><div className="credential-card cert-card"><SectionLabel>certification</SectionLabel><div className="cert-icon"><ShieldCheck /></div><h3>AWS Certified<br />Solutions Architect</h3><p>Associate · Exam preparation in progress</p><span className="status-chip"><span /> In progress</span></div></section>

        <section className="profile-notes section-wrap section-block"><div className="section-heading"><SectionLabel>06 — working style</SectionLabel><h2>Practical systems.<br /><span>Verified outcomes.</span></h2></div><div className="profile-note-grid"><article><h3>Multi-cloud ready</h3><p>AWS-focused with working exposure to Azure and GCP across deployment, IAM, monitoring, networking, and troubleshooting.</p></article><article><h3>AI, with judgment</h3><p>Uses AI-assisted analysis for logs, scripts, Terraform suggestions, runbooks, and documentation — always reviewed and manually validated.</p></article><article><h3>Open to impact</h3><p>Open to DevOps Engineer, SRE, and Cloud Engineer roles, including remote opportunities.</p></article></div></section>

        <section id="contact" className="contact section-wrap section-block"><div><SectionLabel>07 — contact</SectionLabel><h2>Have a system<br />to <span>improve?</span></h2></div><div className="contact-card"><p>Whether you&apos;re scaling a platform, untangling a deployment, or building your first cloud workflow — I&apos;d love to hear about it.</p><a className="button button-primary" href="mailto:rohitgobade239@gmail.com">Start a conversation <Mail /></a><div className="contact-links"><a href="mailto:rohitgobade239@gmail.com"><Mail /> rohitgobade239@gmail.com</a><a href="tel:+917447711239"><Phone /> +91 74477 11239</a><span><Globe2 /> Pune, India · Open to remote opportunities</span><span className="reference-note">References available on request</span></div></div></section>
      </main>

      <footer className="site-footer section-wrap"><span>© 2026 Rohit Gobade</span><span>Built with intention <span className="footer-dot">●</span></span><a href="#top">Back to top <ArrowUpRight /></a></footer>
    </div>
  )
}
