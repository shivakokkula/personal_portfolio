import React, { useState } from "react";
import './App.css';

const App = () => {
  const [darkMode, setDarkMode] = useState(false);

  const toggleMode = () => setDarkMode(!darkMode);

  return (
    <div className={darkMode ? 'container dark' : 'container light'}>
      <header className="header">
        <img src="/banner.jpg" alt="Banner" className="banner" />
        <div className="intro">
          <h1>Shivakumar Kokkula</h1>
          <p>Full Stack Software Developer | Mumbai</p>
          <p>
            📞 8433667331 | 📧 kokkulashivakumar1@gmail.com<br />
            <a href="https://linkedin.com/in/shivakokkula01" target="_blank" rel="noopener noreferrer">LinkedIn</a> |{' '}
            <a href="https://github.com/shivakokkula" target="_blank" rel="noopener noreferrer">GitHub</a>
          </p>
          <button onClick={toggleMode} className="toggle-mode">
            Toggle {darkMode ? 'Light' : 'Dark'} Mode
          </button>
          <br />
          <a href="/Shivakumar_Kokkula_Portfolio.pdf" download className="resume-download">Download Resume (PDF)</a>
        </div>
      </header>

      <section>
        <h2>Projects</h2>
        <div className="card-grid">
          <div className="card">
            <img src="/agrismart.jpg" alt="Agrismart" />
            <h3>Agrismart</h3>
            <p>Flutter app for agriculture management with multilingual and offline support.</p>
          </div>
          <div className="card">
            <img src="/dsl.jpg" alt="DSL Services" />
            <h3>DSL Services</h3>
            <p>Flutter app with Google Sheets integration used in field service management.</p>
          </div>
          <div className="card">
            <img src="/maruti.jpg" alt="Maruti Constructions" />
            <h3>Maruti Constructions</h3>
            <p>Construction site tracking and reporting via Google Sheets.</p>
          </div>
          <div className="card">
            <h3>Mini Apps</h3>
            <p>Chat_Phat, Code_It, Scan_and_Shop, Parking_Lot — prototypes in Flutter.</p>
          </div>
        </div>
      </section>

      <section>
        <h2>Skills</h2>
        <div className="skills-grid">
          <div>
            <strong>Languages:</strong>
            <p>JavaScript, Java, Python, SQL</p>
          </div>
          <div>
            <strong>Frameworks & Tools:</strong>
            <p>Node.js, React.js, Flutter, Express, MongoDB, PostgreSQL, Spring Boot, TypeScript</p>
          </div>
          <div>
            <strong>Cloud & DevOps:</strong>
            <p>AWS, Docker, Git, GitHub Actions, Postman, CI/CD</p>
          </div>
          <div>
            <strong>Other:</strong>
            <p>JWT, REST API, DSA, ML, GenAI</p>
          </div>
        </div>
      </section>

      <section>
        <h2>Certifications</h2>
        <ul>
          <li>AWS Developer Associate – Feb 2023</li>
          <li>Microsoft Certified: Azure – Mar 2022</li>
          <li>Data Analysis with Python – IBM, Mar 2021</li>
          <li>Python for Data Science – IBM, Mar 2021</li>
        </ul>
      </section>

      <section>
        <h2>Achievements</h2>
        <ul>
          <li>Xcelerate Warrior – TCS, Jan 2023</li>
          <li>Contextual Master – TCS, Sep 2023</li>
        </ul>
      </section>

      <section>
        <h2>Education</h2>
        <p>
          Bachelor of Engineering (Computer) – Vidyalankar Institute of Technology<br />
          Jul 2018 – Jun 2022 | CGPA: 9.5/10
        </p>
      </section>
    </div>
  );
};

export default App;
