
import React from "react";
import "./App.css";

const App = () => {
  const skills = [
    { icon: "🌐", name: "HTML5", description: "Web Structure" },
    { icon: "🎨", name: "CSS3", description: "Web Styling" },
    { icon: "⚛️", name: "React", description: "Frontend Development" },
    { icon: "💻", name: "JSX", description: "React Development" },
    { icon: "📱", name: "Responsive Design", description: "Mobile Friendly Websites" },
    { icon: "🛠️", name: "Acode / VS Code", description: "Development Tools" },
  ];

  const projects = [
  
    {
      number: "01",
      title: "Smartphone Store",
      category: "E-commerce Website",
      description: "A modern smartphone shopping website displaying different smartphone brands, product information and attractive shopping layouts.",
      image: "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?w=900",
      technologies: ["React", "HTML", "CSS"],
    },
    {
      number: "02",
      title: "Luxury Real Estate",
      category: "Real Estate Website",
      description: "A premium property website showcasing luxury homes, modern apartments and beautiful real estate photography.",
      image: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=900",
      technologies: ["React", "HTML", "CSS"],
    },
    {
      number: "03",
      title: "Modern Restaurant",
      category: "Restaurant Website",
      description: "A professional restaurant website showcasing delicious meals, food categories, chef specials and restaurant information.",
      image: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=900",
      technologies: ["React", "HTML", "CSS"],
    },
    {
      number: "04",
      title: "Luxury Cars",
      category: "Automotive Website",
      description: "A luxury automotive showcase featuring premium vehicles, sports cars and modern automotive website design.",
      image: "https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?w=900",
      technologies: ["React", "HTML", "CSS"],
    },
    {
      number: "05",
      title: "Football Players",
      category: "Sports Website",
      description: "A football players showcase presenting famous football stars, player profiles, clubs and football photography.",
      image: "https://images.unsplash.com/photo-1574629810360-7efbbe195018?w=900",
      technologies: ["React", "HTML", "CSS"],
    },
  ];

  const services = [
    {
      icon: "🖥️",
      title: "Frontend Development",
      description: "Building attractive, responsive and user-friendly website interfaces using HTML, CSS and React.",
    },
    {
      icon: "⚛️",
      title: "React Development",
      description: "Creating modern React-based web interfaces and reusable user interface components.",
    },
    {
      icon: "📱",
      title: "Responsive Web Design",
      description: "Designing websites that look professional on smartphones, tablets and desktop computers.",
    },
    {
      icon: "🎨",
      title: "UI Implementation",
      description: "Turning website design ideas into beautiful and well-structured frontend experiences.",
    },
  ];

  return (
    <div className="portfolio">

      {/* NAVIGATION */}
      <nav className="navbar">
        <a href="#home" className="logo"> <span>F</span>C.</a>

        <div className="nav-links">
          <a href="#home">Home</a>
          <a href="#about">About</a>
          <a href="#skills">Skills</a>
          <a href="#projects">Projects</a>
          <a href="#services">Services</a>
          <a href="#contact">Contact</a>
        </div>

        <a href="#contact" className="nav-btn">Hire Me ↗</a>
      </nav>

      {/* HERO */}
      <section className="hero" id="home">
        <div className="hero-content">
          <div className="availability">
            <span className="green-dot"></span>
            SOFTWARE DEVELOPER
          </div>

          <p className="hero-small">HELLO, I'M</p>

          <h1>
            Fasuel Tsuma
            <span> Chilumo.</span>
          </h1>

          <h2>
            I Build Modern
            <span> Digital Experiences.</span>
          </h2>

          <p className="hero-description">
            I'm a passionate software developer focused on building
            modern, attractive and responsive websites using HTML,
            CSS, JSX and React. I enjoy turning creative ideas into
            meaningful digital experiences.
          </p>

          <div className="hero-buttons">
            <a href="#projects" className="primary-btn">
              Explore My Projects ↗
            </a>
            <a href="#contact" className="secondary-btn">
              Contact Me
            </a>
          </div>

          <div className="hero-socials">
            <a href="https://github.com/" target="_blank" rel="noreferrer">GitHub ↗</a>
            <a href="https://www.linkedin.com/" target="_blank" rel="noreferrer">LinkedIn ↗</a>
            <a href="mailto:cfaswel@gmail.com">Email ↗</a>
          </div>
        </div>

        {/* DEVELOPER PROFILE - NO PHOTOGRAPH */}
        <div className="hero-image-area">
          <div className="image-glow"></div>

          <div className="developer-card">
            <div className="developer-top">
              <span></span>
              <span></span>
              <span></span>
            </div>

            <div className="developer-avatar">FC</div>

            <h3>Fasuel Tsuma Chilumo</h3>
            <p>Software Developer</p>

            <div className="code-preview">
              <p><span>const</span> developer = {"{"}</p>
              <p> name: <b>"Fasuel"</b>,</p>
              <p> skills: [</p>
              <p className="code-indent">"HTML", "CSS",</p>
              <p className="code-indent">"JSX", "React"</p>
              <p> ],</p>
              <p> passion: <b>"Building the Web"</b></p>
              <p>{"}"}</p>
            </div>

            <div className="developer-status">
              <span className="green-dot"></span>
              Always Learning & Creating
            </div>
          </div>

          <div className="floating-card">
            <span>⚛️</span>
            <div>
              <strong>React Developer</strong>
              <small>Frontend Development</small>
            </div>
          </div>

          <div className="experience-card">
            <strong>FC.</strong>
            <span>Creative Developer</span>
          </div>
        </div>
      </section>

      {/* STATISTICS */}
      <section className="stats">
        <div>
          <h2>06+</h2>
          <p>Portfolio Projects</p>
        </div>
        <div>
          <h2>04+</h2>
          <p>Core Technologies</p>
        </div>
        <div>
          <h2>100%</h2>
          <p>Passion for Learning</p>
        </div>
        <div>
          <h2>∞</h2>
          <p>Creative Ideas</p>
        </div>
      </section>

      {/* ABOUT */}
      <section className="section about" id="about">
        <div className="section-heading">
          <span>GET TO KNOW ME</span>
          <h2>About <span>Me</span></h2>
          <p>A little introduction about who I am and what I do.</p>
        </div>

        <div className="about-content">
          <div className="about-image">
            <div className="about-profile-card">
              <div className="about-initials">FC.</div>
              <h3>Fasuel Tsuma Chilumo</h3>
              <p>Software Developer</p>
              <div className="about-divider"></div>
              <span>DESIGNING • DEVELOPING • CREATING</span>
            </div>
          </div>

          <div className="about-text">
            <h3>
              Passionate About Building
              <span> Digital Solutions.</span>
            </h3>

            <p>
              My name is Fasuel Tsuma Chilumo, and I am an aspiring
              software developer from Kenya with a passion for
              technology, creativity and problem-solving.
            </p>

            <p>
              I have been developing my skills in HTML, CSS, JSX
              and React through practical website development
              projects. I enjoy designing modern interfaces and
              transforming ideas into responsive websites.
            </p>

            <p>
              My goal is to continue growing as a software developer,
              gain professional experience, work with innovative
              people and create digital solutions that make a difference.
            </p>

            <div className="about-details">
              <div>
                <span>Full Name:</span>
                <strong>Fasuel Tsuma Chilumo</strong>
              </div>
              <div>
                <span>Profession:</span>
                <strong>Software Developer</strong>
              </div>
              <div>
                <span>Location:</span>
                <strong>Kenya</strong>
              </div>
              <div>
                <span>Email:</span>
                <strong>cfaswel@gmail.com</strong>
              </div>
            </div>

            <a href="#contact" className="primary-btn">Let's Talk ↗</a>
          </div>
        </div>
      </section>

      {/* SKILLS */}
      <section className="section skills-section" id="skills">
        <div className="section-heading">
          <span>MY EXPERTISE</span>
          <h2>Technical <span>Skills</span></h2>
          <p>Technologies and tools I use in my development journey.</p>
        </div>

        <div className="skills-grid">
          {skills.map((skill, index) => (
            <div className="skill-card" key={index}>
              <div className="skill-icon">{skill.icon}</div>
              <h3>{skill.name}</h3>
              <p>{skill.description}</p>
              <div className="skill-line">
                <span></span>
              </div>
            </div>
          ))}
        </div>

        <div className="skills-note">
          💡 Always learning, improving and exploring new technologies.
        </div>
      </section>

      {/* PROJECTS */}
      <section className="section projects-section" id="projects">
        <div className="section-heading">
          <span>MY RECENT WORK</span>
          <h2>Featured <span>Projects</span></h2>
          <p>
            A collection of website concepts and practical projects
            developed during my learning journey.
          </p>
        </div>

        <div className="projects-grid">
          {projects.map((project) => (
            <div className="project-card" key={project.number}>
              <div className="project-image">
                <img src={project.image} alt={project.title} />
                <span className="project-number">{project.number}</span>
              </div>

              <div className="project-info">
                <span className="project-category">{project.category}</span>
                <h3>{project.title}</h3>
                <p>{project.description}</p>

                <div className="tech-list">
                  {project.technologies.map((technology, index) => (
                    <span key={index}>{technology}</span>
                  ))}
                </div>

                <div className="project-links">
                  <a href="#contact">View Project ↗</a>
                  <a href="https://github.com/" target="_blank" rel="noreferrer">
                    Source Code ↗
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* SERVICES */}
      <section className="section services-section" id="services">
        <div className="section-heading">
          <span>WHAT I CAN OFFER</span>
          <h2>My <span>Services</span></h2>
          <p>Digital services I am developing skills to provide.</p>
        </div>

        <div className="services-grid">
          {services.map((service, index) => (
            <div className="service-card" key={index}>
              <div className="service-icon">{service.icon}</div>
              <h3>{service.title}</h3>
              <p>{service.description}</p>
              <a href="#contact">Discuss a Project ↗</a>
            </div>
          ))}
        </div>
      </section>

      {/* EDUCATION AND EXPERIENCE */}
      <section className="section education-section" id="education">
        <div className="section-heading">
          <span>MY DEVELOPMENT JOURNEY</span>
          <h2>Education & <span>Experience</span></h2>
          <p>My journey towards becoming a professional developer.</p>
        </div>

        <div className="timeline">
          <div className="timeline-item">
            <div className="timeline-dot"></div>
            <div className="timeline-card">
              <span>SOFTWARE DEVELOPMENT</span>
              <h3>System Software Development Studies</h3>
              <p>
                Developing technical knowledge and practical skills
                in software development, web technologies and
                computer systems.
              </p>
            </div>
          </div>

          <div className="timeline-item">
            <div className="timeline-dot"></div>
            <div className="timeline-card">
              <span>PRACTICAL LEARNING</span>
              <h3>Frontend Web Development</h3>
              <p>
                Learning and practising HTML, CSS, JSX and React
                by creating responsive websites and real-world
                inspired projects.
              </p>
            </div>
          </div>

          <div className="timeline-item">
            <div className="timeline-dot"></div>
            <div className="timeline-card">
              <span>PERSONAL DEVELOPMENT</span>
              <h3>Building My Developer Portfolio</h3>
              <p>
                Creating personal projects, improving design
                abilities and continuously expanding my software
                development knowledge.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CALL TO ACTION */}
      <section className="cta-section">
        <div>
          <span>HAVE A PROJECT IN MIND?</span>
          <h2>Let's Build Something <span>Amazing Together.</span></h2>
          <p>
            Have an idea, a business or an opportunity?
            I would love to hear from you.
          </p>
        </div>

        <a href="#contact" className="cta-btn">
          Let's Work Together ↗
        </a>
      </section>

      {/* CONTACT */}
      <section className="section contact-section" id="contact">
        <div className="section-heading">
          <span>GET IN TOUCH</span>
          <h2>Contact <span>Me</span></h2>
          <p>Let's connect and discuss your next project or opportunity.</p>
        </div>

        <div className="contact-content">
          <div className="contact-information">
            <h3>Let's Talk About Your Project</h3>
            <p>
              I am open to discussing website development,
              collaborations, learning opportunities and
              professional connections.
            </p>

            <div className="contact-item">
              <div className="contact-icon">📞</div>
              <div>
                <span>Phone Number</span>
                <a href="tel:0741887110">0741887110</a>
              </div>
            </div>

            <div className="contact-item">
              <div className="contact-icon">✉️</div>
              <div>
                <span>Email Address</span>
                <a href="mailto:cfaswel@gmail.com">cfaswel@gmail.com</a>
              </div>
            </div>

            <div className="contact-item">
              <div className="contact-icon">📍</div>
              <div>
                <span>Location</span>
                <strong>Kenya</strong>
              </div>
            </div>

            <div className="contact-socials">
              <a href="https://github.com/" target="_blank" rel="noreferrer">GitHub</a>
              <a href="https://www.linkedin.com/" target="_blank" rel="noreferrer">LinkedIn</a>
            </div>
          </div>

          <div className="contact-form">
            <h3>Send Me a Message</h3>

            <form>
              <label>Your Name</label>
              <input type="text" placeholder="Enter your name" />

              <label>Your Email</label>
              <input type="email" placeholder="Enter your email" />

              <label>Subject</label>
              <input type="text" placeholder="What is this about?" />

              <label>Your Message</label>
              <textarea rows="5" placeholder="Write your message..."></textarea>

              <button type="button">Send Message ↗</button>
              <small>Contact form design demonstration only.</small>
            </form>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="footer">
        <div className="footer-content">
          <div className="footer-brand">
            <a href="#home" className="logo">F<span>C</span>.</a>
            <p>
              Fasuel Tsuma Chilumo — Software developer passionate
              about creating modern digital experiences.
            </p>
          </div>

          <div className="footer-links">
            <h3>Quick Links</h3>
            <a href="#home">Home</a>
            <a href="#about">About</a>
            <a href="#skills">Skills</a>
            <a href="#projects">Projects</a>
            <a href="#contact">Contact</a>
          </div>

          <div className="footer-links">
            <h3>Connect With Me</h3>
            <a href="mailto:cfaswel@gmail.com">Email</a>
            <a href="https://github.com/" target="_blank" rel="noreferrer">GitHub</a>
            <a href="https://www.linkedin.com/" target="_blank" rel="noreferrer">LinkedIn</a>
            <a href="tel:0741887110">Call Me</a>
          </div>
        </div>

        <div className="footer-bottom">
          <p>© 2026 Fasuel Tsuma Chilumo. All Rights Reserved.</p>
          <p>Designed & Built with Passion ❤️</p>
        </div>
      </footer>

    </div>
  );
};

export default App;
