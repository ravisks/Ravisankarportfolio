import React, { useState } from 'react';
import { createRoot } from 'react-dom/client';
import {
  ArrowDown, ArrowDownRight, ArrowRight, ArrowUpRight, Menu, X,
  Github, Linkedin, Mail, MapPin, Code2, Layers3, Database, Globe2, ExternalLink,
  Braces, Server, Smartphone, CheckCircle2
} from 'lucide-react';
import './styles.css';

const profile = {
  name: 'Ravi Sankar',
  title: 'Full Stack Developer',
  email: 'ravisk8701@gmail.com',
  phone: '9994787014',
  address: '4/65 A Anna Street, Kalkurichi',
  github: 'https://github.com/ravisks',
  linkedin: 'https://in.linkedin.com/in/ravi-sankar-42b3223a3',
  location: 'Kalkurichi, Tamil Nadu, India'
};

const projects = [
  {
    number: '01',
    title: 'Easy Track Africa',
    category: 'Tracking & Logistics',
    description: 'A web application focused on container and truck tracking, including pickup and delivery workflows.',
    tags: ['React', 'MUI', 'REST API', 'Node.js'],
    visual: 'tracking',
    color: 'blue',
    details: 'Tracking-focused screens and data-driven workflows designed to help users follow logistics activity and manage pickup and delivery information.'
  },
  {
    number: '02',
    title: 'Workarm',
    category: 'Tools & Material Information',
    description: 'A clear, organized interface for presenting tools and material pricing information.',
    tags: ['React', 'Node.js', 'Express', 'MongoDB'],
    visual: 'tools',
    color: 'gold',
    details: 'A product-information experience centered on organized tool listings, material details, and readable price presentation.'
  },
  {
    number: '03',
    title: 'WooCommerce Dress Shop',
    category: 'E-commerce',
    description: 'An online dress shop featuring a catalog of more than 1,000 products.',
    tags: ['E-commerce', 'WooCommerce', 'UI', 'Responsive'],
    visual: 'fashion',
    color: 'rose',
    details: 'A fashion storefront with a large product catalog and a responsive browsing experience. Platform-specific implementation details can be added to match the live project.'
  },
  {
    number: '04',
    title: 'RSR Cricket Academy',
    category: 'Sports Management',
    description: 'A cricket academy management application for teams, players, attendance, match reports, and an AI assistant.',
    tags: ['React', 'Node.js', 'Express', 'MongoDB'],
    visual: 'cricket',
    color: 'green',
    details: 'A management-oriented application bringing team and player information, coach attendance, match reporting, and AI assistant functionality into one place.'
  }
];

const skills = [
  { title: 'Frontend', icon: Code2, items: ['React.js', 'JavaScript ES6+', 'HTML5', 'CSS3', 'Material UI', 'Responsive UI'] },
  { title: 'Backend', icon: Server, items: ['Node.js', 'Express.js', 'REST APIs', 'CRUD Operations', 'API Integration'] },
  { title: 'Database', icon: Database, items: ['MongoDB', 'Aggregation', 'Querying', 'Indexing Basics'] },
  { title: 'Tools & Workflow', icon: Layers3, items: ['Git', 'GitHub', 'npm', 'Debugging', 'Component Architecture'] }
];

function ProjectPreview({ type }) {
  return (
    <div className={`project-preview preview-${type}`} aria-hidden="true">
      <div className="mock-sidebar">
        <span className="mock-mark">●</span>
        <i></i><i></i><i></i><i></i>
      </div>
      <div className="mock-main">
        <div className="mock-top"><span></span><span></span><b></b></div>
        {type === 'tracking' && <>
          <div className="mock-heading">Live tracking <small>Overview</small></div>
          <div className="mock-map"><div className="route route-a"></div><div className="route route-b"></div><span className="pin pin-a"></span><span className="pin pin-b"></span><span className="pin pin-c"></span></div>
          <div className="mock-bottom"><span></span><span></span><span></span></div>
        </>}
        {type === 'tools' && <>
          <div className="mock-heading">Product catalog <small>View all</small></div>
          <div className="tool-grid">{['🔧','🛠️','🔩','🔨'].map((x,i)=><div key={i}><strong>{x}</strong><span></span><b></b></div>)}</div>
        </>}
        {type === 'fashion' && <>
          <div className="fashion-banner"><div><small>NEW COLLECTION</small><strong>Style that<br/>speaks.</strong><span>EXPLORE COLLECTION</span></div><div className="fashion-person">✦</div></div>
          <div className="fashion-row"><i></i><i></i><i></i></div>
        </>}
        {type === 'cricket' && <>
          <div className="mock-heading">Academy dashboard <small>Today</small></div>
          <div className="cricket-stat"><div><small>Players</small><b>128</b></div><div><small>Attendance</small><b>92%</b></div></div>
          <div className="cricket-list"><i></i><i></i><i></i></div>
        </>}
      </div>
      <span className="preview-corner"><ArrowUpRight size={17}/></span>
    </div>
  );
}

function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeProject, setActiveProject] = useState(null);
  const [copied, setCopied] = useState(false);

  const closeMenu = () => setMenuOpen(false);
  const copyEmail = async () => {
    try {
      await navigator.clipboard.writeText(profile.email);
      setCopied(true);
      window.setTimeout(() => setCopied(false), 1800);
    } catch {
      window.location.href = `mailto:${profile.email}`;
    }
  };

  return (
    <>
      <header className="site-header">
        <a className="wordmark" href="#home" onClick={closeMenu} aria-label="Ravi Sankar home">RAVI <span>SANKAR.</span></a>
        <button className="mobile-toggle" onClick={() => setMenuOpen(!menuOpen)} aria-label={menuOpen ? 'Close navigation' : 'Open navigation'}>
          {menuOpen ? <X size={22}/> : <Menu size={22}/>}
        </button>
        <nav className={menuOpen ? 'main-nav nav-open' : 'main-nav'} aria-label="Main navigation">
          {[['Home','#home'],['About','#about'],['Skills','#skills'],['Projects','#projects'],['Experience','#experience'],['Contact','#contact']].map(([label, href]) =>
            <a key={label} href={href} onClick={closeMenu}>{label}</a>
          )}
        </nav>
        <a className="header-cta" href="#contact">LET'S TALK <ArrowUpRight size={15}/></a>
      </header>

      <main>
        <section className="hero section-wrap" id="home">
          <div className="hero-copy">
            <div className="availability"><span className="status-dot"></span> OPEN TO OPPORTUNITIES</div>
            <p className="eyebrow">HELLO, I'M RAVI SANKAR</p>
            <h1>FULL STACK<br/><span>DEVELOPER.</span></h1>
            <p className="hero-description">I build reliable, scalable web experiences<br className="desktop-break"/> from frontend to backend.</p>
            <p className="hero-stack">React.js <b>·</b> Node.js <b>·</b> Express.js <b>·</b> MongoDB</p>
            <div className="hero-actions">
              <a className="button button-red" href="#projects">VIEW MY WORK <ArrowRight size={17}/></a>
            </div>
            <div className="hero-metrics">
              <div className="metric"><strong>05<span>+</span></strong><div>YEARS OF<br/>EXPERIENCE</div></div>
              <div className="metric-divider"></div>
              <div className="metric"><strong>04</strong><div>FEATURED<br/>PROJECTS</div></div>
            </div>
          </div>
          <div className="hero-art">
            <div className="orbit orbit-one"></div><div className="orbit orbit-two"></div>
            <div className="red-disc"></div><div className="red-dot"></div><div className="red-spark"></div>
            <div className="portrait-frame"><img src="/images/ravi-sankar.jpg" alt="Portrait of Ravi Sankar" /></div>
            <div className="stack-card">
              <div className="stack-card-title"><span className="status-dot"></span> MY EVERYDAY STACK</div>
              <div className="stack-items">
                <div><Braces className="stack-react" size={25}/><span>React</span></div>
                <div><Server className="stack-node" size={25}/><span>Node.js</span></div>
                <div><Database className="stack-db" size={25}/><span>MongoDB</span></div>
              </div>
            </div>
            <div className="floating-code"><Code2 size={17}/><span>const builder = "Ravi";</span></div>
          </div>
        </section>

        <section className="work-section" id="projects">
          <div className="section-wrap">
            <div className="section-heading work-heading">
              <div><p className="section-kicker">SELECTED WORK <span></span></p><h2>Things I've <span>built.</span></h2></div>
              <a className="text-link" href="#contact">HAVE A PROJECT? <ArrowUpRight size={16}/></a>
            </div>
            <div className="project-grid">
              {projects.map(project => (
                <article className="project-card" key={project.number}>
                  <button className="project-open" onClick={() => setActiveProject(project)} aria-label={`View details for ${project.title}`}>
                    <ProjectPreview type={project.visual}/>
                  </button>
                  <div className="project-content">
                    <div className="project-title-row"><span className="project-number">{project.number}</span><h3>{project.title}</h3><button className="round-arrow" onClick={() => setActiveProject(project)} aria-label={`More about ${project.title}`}><ArrowUpRight size={17}/></button></div>
                    <p className="project-category"><span></span>{project.category}</p>
                    <p className="project-description">{project.description}</p>
                    <div className="tag-list">{project.tags.map(tag => <span key={tag}>{tag}</span>)}</div>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="about-section section-wrap" id="about">
          <div className="about-label"><p className="section-kicker">A LITTLE ABOUT ME <span></span></p><div className="about-big-number">01<span>/04</span></div></div>
          <div className="about-main">
            <h2>Thoughtful code.<br/><span>Useful products.</span></h2>
            <p className="about-lead">I'm a Full Stack Developer who enjoys turning real-world requirements into dependable, user-friendly web applications.</p>
            <p className="about-text">My work spans React interfaces, backend APIs, MongoDB integrations, and application workflows for logistics, e-commerce, product information, and sports management. I care about readable code, practical solutions, and building experiences that make sense to the people using them.</p>
            <a className="inline-link" href="#contact">LET'S CONNECT <ArrowUpRight size={16}/></a>
          </div>
          <div className="about-aside">
            <div className="aside-icon"><Globe2 size={23}/></div><strong>Web experiences</strong><p>Responsive interfaces built around real user needs.</p>
            <div className="aside-line"></div>
            <div className="aside-icon"><Layers3 size={23}/></div><strong>End-to-end thinking</strong><p>From the first UI component to API and data integration.</p>
          </div>
        </section>

        <section className="skills-section" id="skills">
          <div className="section-wrap">
            <div className="section-heading"><div><p className="section-kicker">MY TOOLKIT <span></span></p><h2>Tools of the <span>trade.</span></h2></div><p className="heading-note">The technologies I use to design,<br/>build, connect, and improve web apps.</p></div>
            <div className="skills-grid">
              {skills.map(({title, icon: Icon, items}, i) => <article className="skill-card" key={title}>
                <div className="skill-card-top"><div className="skill-icon"><Icon size={22}/></div><span>0{i+1}</span></div>
                <h3>{title}</h3><div className="skill-tags">{items.map(item => <span key={item}>{item}</span>)}</div>
              </article>)}
            </div>
          </div>
        </section>

        <section className="experience-section section-wrap" id="experience">
          <div className="experience-intro"><p className="section-kicker">THE JOURNEY <span></span></p><h2>Experience that<br/><span>keeps evolving.</span></h2><p>About five years of hands-on software development, contributing to web applications and features across different problem spaces.</p></div>
          <div className="timeline">
            <div className="timeline-item"><div className="timeline-marker"></div><div className="timeline-meta">SOFTWARE DEVELOPMENT <span>~5 YEARS</span></div><h3>Full Stack / Web Development</h3><p>Frontend development with React, API integration, backend work with Node.js and Express, MongoDB data operations, and ongoing application improvements.</p><div className="tag-list"><span>React.js</span><span>Node.js</span><span>Express.js</span><span>MongoDB</span></div></div>
            <div className="timeline-note"><CheckCircle2 size={18}/><p>Employment dates and company details can be added here from your verified resume.</p></div>
          </div>
        </section>

        <section className="contact-section" id="contact">
          <div className="section-wrap contact-wrap">
            <div className="contact-top"><p className="section-kicker">HAVE SOMETHING IN MIND? <span></span></p><span className="contact-number">LET'S BUILD</span></div>
            <h2>Good work starts<br/>with a <span>conversation.</span></h2>
            <p className="contact-description">I'm open to Full Stack Developer, React Developer, and Web Developer opportunities. Have a role or project in mind? Let's connect.</p>
            <div className="contact-actions"><a className="button button-red" href={`mailto:${profile.email}`}>SAY HELLO <Mail size={17}/></a><button className="button button-outline" onClick={copyEmail}>{copied ? 'EMAIL COPIED' : 'COPY EMAIL'} {copied ? <CheckCircle2 size={16}/> : <ArrowDownRight size={17}/>}</button></div>
            <div className="contact-details">
              <div><Mail size={16}/><a href={`mailto:${profile.email}`}>{profile.email}</a></div>
              <div><Smartphone size={16}/><a href={`tel:${profile.phone}`}>{profile.phone}</a></div>
              <div><MapPin size={16}/><span>{profile.address}</span></div>
            </div>
            <div className="contact-bottom"><div><MapPin size={15}/>{profile.location}</div><div className="social-links"><a href={profile.github} target="_blank" rel="noreferrer" aria-label="GitHub"><Github size={18}/></a><a href={profile.linkedin} target="_blank" rel="noreferrer" aria-label="LinkedIn"><Linkedin size={18}/></a><a href={`mailto:${profile.email}`} aria-label="Email"><Mail size={18}/></a></div></div>
          </div>
        </section>
      </main>

      <footer className="site-footer"><a className="wordmark" href="#home">RAVI <span>SANKAR.</span></a><p>Designed with intention. Built with code.</p><a href="#home" className="back-top">BACK TO TOP <ArrowDown size={14}/></a><small>© {new Date().getFullYear()} Ravi Sankar. All rights reserved.</small></footer>

      {activeProject && <div className="modal-backdrop" role="presentation" onClick={() => setActiveProject(null)}>
        <div className="project-modal" role="dialog" aria-modal="true" aria-labelledby="modal-title" onClick={e => e.stopPropagation()}>
          <button className="modal-close" onClick={() => setActiveProject(null)} aria-label="Close project details"><X size={20}/></button>
          <ProjectPreview type={activeProject.visual}/>
          <p className="section-kicker">PROJECT {activeProject.number} <span></span></p>
          <h2 id="modal-title">{activeProject.title}</h2><p className="project-category"><span></span>{activeProject.category}</p>
          <p>{activeProject.details}</p>
          <div className="tag-list">{activeProject.tags.map(tag => <span key={tag}>{tag}</span>)}</div>
          <p className="modal-footnote">Add a live demo or public repository link when available.</p>
          <a className="button button-red" href="#contact" onClick={() => setActiveProject(null)}>ASK ME ABOUT THIS PROJECT <ArrowRight size={16}/></a>
        </div>
      </div>}
    </>
  );
}

createRoot(document.getElementById('root')).render(<App />);