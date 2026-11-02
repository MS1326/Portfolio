import React, { useState } from "react";

const projects = [
  {
    number: "01",
    name: "Personal Portfolio",
    type: "React · Responsive design",
    description:
      "A responsive portfolio website created to bring skills, projects, experience, and contact information together in one place.",
    url: "https://github.com/MS1326/Portfolio",
    icon: "bi-window",
    tone: "lavender",
    label: "A personal home on the web",
  },
  {
    number: "02",
    name: "Digital Clock",
    type: "HTML · CSS · JavaScript",
    description:
      "A simple, interactive clock that keeps time in real time, wrapped in a clean and modern interface.",
    url: "https://github.com/MS1326/Digital_Clock",
    icon: "bi-clock",
    tone: "peach",
    label: "Time, at a glance",
  },
  {
    number: "03",
    name: "MS Music Vibez",
    type: "HTML · CSS · JavaScript",
    description:
      "A responsive music player experience, designed to make listening feel simple and enjoyable.",
    url: "https://github.com/MS1326/ms-music-vibez",
    icon: "bi-music-note-beamed",
    tone: "mint",
    label: "A little rhythm for the web",
  },
];

const skills = [ "HTML", "CSS", "Bootstrap", "JavaScript", "React", "Node.js", "Express", "SQL", "PostgreSQL", "Git", "GitHub", "VS Code", "Responsive Design"];

function ArrowIcon() {
  return <i className="bi bi-arrow-up-right" aria-hidden="true" />;
}

function App() {
  const [menuOpen, setMenuOpen] = useState(false);

  const closeMenu = () => setMenuOpen(false);

  return (
    <>
      <header className="site-header">
        <nav className="navbar navbar-expand-lg container site-nav" aria-label="Main navigation">
          <a className="navbar-brand brand-mark" href="#home" onClick={closeMenu}>
            M<span>S</span>
          </a>
          <button
            className="navbar-toggler nav-toggle"
            type="button"
            aria-label={menuOpen ? "Close navigation" : "Open navigation"}
            aria-expanded={menuOpen}
            onClick={() => setMenuOpen((open) => !open)}
          >
            <i className={`bi ${menuOpen ? "bi-x-lg" : "bi-list"}`} aria-hidden="true" />
          </button>
          <div className={`collapse navbar-collapse ${menuOpen ? "show" : ""}`}>
            <div className="navbar-nav ms-auto align-items-lg-center gap-lg-4">
              <a className="nav-link" href="#home" onClick={closeMenu}>Home</a>
              <a className="nav-link" href="#work" onClick={closeMenu}>Work</a>
              <a className="nav-link" href="#about" onClick={closeMenu}>About</a>
              <a className="nav-link" href="#contact" onClick={closeMenu}>Contact</a>
              <a
                className="nav-link nav-github"
                href="https://github.com/MS1326"
                target="_blank"
                rel="noreferrer"
                onClick={closeMenu}
              >
                GitHub <ArrowIcon />
              </a>
            </div>
          </div>
        </nav>
      </header>

      <main>
        <section className="hero-section" id="home">
          <div className="container">
            <div className="row align-items-center hero-row">
              <div className="col-lg-7 hero-copy">
                <p className="eyebrow"><span className="status-dot" /> WEB DEVELOPER</p>
                <h1>
                  Hey, I’m MAGESH<span className="accent">.</span>
                  <br />
                  I build for the <span className="headline-highlight">web.</span>
                </h1>
                <p className="hero-description">
                  I enjoy turning ideas into clean, responsive experiences — from
                  useful little tools to personal projects with a bit of personality.
                </p>
                <div className="hero-actions">
                  <a className="btn btn-ink" href="#work">
                    Explore my work <ArrowIcon />
                  </a>
                  <a
                    className="text-link"
                    href="https://www.linkedin.com/in/magesh-s-261b75296/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    Find me on LinkedIn <ArrowIcon />
                  </a>
                </div>
                <div className="hero-socials" aria-label="Social profiles">
                  <a href="https://github.com/MS1326" target="_blank" rel="noreferrer" aria-label="GitHub">
                    <i className="bi bi-github" aria-hidden="true" />
                  </a>
                  <a
                    href="https://www.linkedin.com/in/magesh-s-261b75296/"
                    target="_blank"
                    rel="noreferrer"
                    aria-label="LinkedIn"
                  >
                    <i className="bi bi-linkedin" aria-hidden="true" />
                  </a>
                  <span className="social-caption">Let’s build something good.</span>
                </div>
              </div>

              <div className="col-lg-5 hero-visual-wrap">
                <div className="hero-visual" aria-label="A playful web developer illustration">
                  <div className="visual-orbit orbit-one" />
                  <div className="visual-orbit orbit-two" />
                  <div className="visual-sun" />
                  <div className="visual-card">
                    <div className="visual-card-top">
                      <span /><span /><span />
                      <small>hello-world.jsx</small>
                    </div>
                    <div className="code-lines" aria-hidden="true">
                      <p><span className="code-purple">const</span> <span className="code-blue">developer</span> = {"{"}</p>
                      <p className="code-indent"><span className="code-green">name</span>: <span className="code-orange">"MAGESH"</span>,</p>
                      <p className="code-indent"><span className="code-green">makes</span>: <span className="code-orange">"Web things"</span>,</p>
                      <p className="code-indent"><span className="code-green">status</span>: <span className="code-orange">"Building"</span></p>
                      <p>{"};"}</p>
                    </div>
                    <div className="visual-card-footer"><span /> Turning ideas into interfaces</div>
                  </div>
                  <div className="visual-sticker sticker-top">✳</div>
                  <div className="visual-sticker sticker-bottom"><i className="bi bi-code-slash" /></div>
                  <span className="visual-caption">Curiosity → creation</span>
                </div>
              </div>
            </div>
            <a className="scroll-cue" href="#work">
              <span className="scroll-line" /> SCROLL TO EXPLORE
            </a>
          </div>
        </section>

        <section className="work-section section-space" id="work">
          <div className="container">
            <div className="section-heading d-flex flex-wrap justify-content-between align-items-end">
              <div>
                <p className="eyebrow">A FEW THINGS I’VE MADE</p>
                <h2>Selected work<span className="accent">.</span></h2>
              </div>
              <a className="text-link all-projects-link" href="https://github.com/MS1326?tab=repositories" target="_blank" rel="noreferrer">
                More on GitHub <ArrowIcon />
              </a>
            </div>

            <div className="row g-4 project-grid">
              {projects.map((project) => (
                <div className="col-md-6 col-lg-4" key={project.number}>
                  <article className="project-card">
                    <a
                      className={`project-art ${project.tone}`}
                      href={project.url}
                      target="_blank"
                      rel="noreferrer"
                      aria-label={`View ${project.name} on GitHub`}
                    >
                      <span className="project-number">{project.number} / 03</span>
                      <span className="project-art-icon"><i className={`bi ${project.icon}`} aria-hidden="true" /></span>
                      <span className="project-art-label">{project.label}</span>
                      <span className="project-art-arrow"><ArrowIcon /></span>
                    </a>
                    <div className="project-info">
                      <div className="project-title-row">
                        <h3>{project.name}</h3>
                        <a href={project.url} target="_blank" rel="noreferrer" aria-label={`Open ${project.name} repository`}>
                          <ArrowIcon />
                        </a>
                      </div>
                      <p className="project-type">{project.type}</p>
                      <p className="project-description">{project.description}</p>
                    </div>
                  </article>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="about-section section-space" id="about">
          <div className="container">
            <div className="row g-4 align-items-start">
              <div className="col-lg-5">
                <p className="eyebrow">A LITTLE ABOUT ME</p>
                <h2>Made with curiosity<span className="accent">.</span></h2>
                <p className="about-copy">
                  I’m MAGESH, a developer who likes making things for the web.
                  My projects range from interactive JavaScript experiments to
                  responsive React experiences. I care about keeping things
                  approachable, useful, and enjoyable to use.
                </p>
                <a className="text-link" href="https://github.com/MS1326" target="_blank" rel="noreferrer">
                  See what I’m building <ArrowIcon />
                </a>
              </div>
              <div className="col-lg-6 offset-lg-1">
                <div className="skills-panel">
                  <p className="eyebrow">TOOLS IN MY TOOLKIT</p>
                  <div className="skill-list">
                    {skills.map((skill) => <span className="skill-pill" key={skill}>{skill}</span>)}
                  </div>
                  <div className="skills-note">
                    <span className="note-icon"><i className="bi bi-lightbulb" aria-hidden="true" /></span>
                    <p>Always learning, always making the next idea a little better.</p>
                    <span className="note-spark">✳</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="contact-section" id="contact">
          <div className="container">
            <div className="contact-card">
              <div>
                <p className="eyebrow">HAVE A PROJECT IN MIND?</p>
                <h2>Let’s make it<br />happen<span className="accent">.</span></h2>
                <p className="contact-copy">I’m always happy to connect and talk about ideas, code, and what’s next.</p>
              </div>
              <div className="contact-links">
                <a className="btn btn-light contact-button" href="https://www.linkedin.com/in/magesh-s-261b75296/" target="_blank" rel="noreferrer">
                  Say hello on LinkedIn <ArrowIcon />
                </a>
                <a className="contact-github" href="https://github.com/MS1326" target="_blank" rel="noreferrer">
                  Or explore my GitHub <ArrowIcon />
                </a>
              </div>
              <span className="contact-decoration" aria-hidden="true">✳</span>
            </div>
          </div>
        </section>
      </main>

      <footer className="site-footer">
        <div className="container d-flex flex-wrap justify-content-between align-items-center gap-3">
          <a className="brand-mark footer-brand" href="#home">M<span>S</span></a>
          <p>Designed &amp; built with curiosity by MAGESH S</p>
          <a className="back-top" href="#home">Back to top ↑</a>
        </div>
      </footer>
    </>
  );
}

export default App;
