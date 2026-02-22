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
          <h1>SHIVAKUMAR KOKKULA</h1>
          <p>Software Engineer (Backend) | India</p>
          <p>
            📞 +91 XXXXXXXX | 📧 kokkulashivakumar1@gmail.com<br />
            <a href="https://linkedin.com/in/xxxx" target="_blank" rel="noopener noreferrer">LinkedIn</a> |{' '}
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
        <h2>Professional Summary</h2>
        <p>
          Backend Software Engineer with 4+ years of experience building high-performance, production-grade systems using Node.js, Python, and PostgreSQL. Specialized in designing REST APIs, microservices, and cloud-native applications on AWS. Proven record of improving system performance (20%), reducing production defects (15%), and leading small engineering teams to deliver secure, scalable fintech and enterprise platforms.
        </p>
      </section>

      <section>
        <h2>Technical Skills</h2>
        <ul>
          <li><strong>Languages:</strong> Node.js, TypeScript, Python, JavaScript (ES6+), Java</li>
          <li><strong>Backend:</strong> Express.js, REST APIs, Microservices, JWT, Authentication Systems</li>
          <li><strong>Databases:</strong> PostgreSQL, AWS RDS, Query Optimization, Indexing Strategies</li>
          <li><strong>Cloud & DevOps:</strong> AWS (EC2, S3, RDS), Docker, CI/CD, Git</li>
          <li><strong>Frontend Exposure:</strong> React, Angular</li>
          <li><strong>Engineering Practices:</strong> Clean Architecture, Unit Testing, Code Reviews, Agile/Scrum</li>
        </ul>
      </section>

      <section>
        <h2>Professional Experience</h2>
        <div className="experience">
          <h3>ISS STOXX – Software Engineer</h3>
          <p>Dec 2024 – Present</p>
          <ul>
            <li>Designed and maintained backend services powering 5+ internal enterprise applications serving cross-functional teams.</li>
            <li>Engineered a domain security scoring simulation system improving vulnerability prioritization accuracy to 99.9%.</li>
            <li>Increased API performance by 20% through PostgreSQL query tuning, indexing strategies, and caching mechanisms.</li>
            <li>Reduced production bugs by 15% by establishing structured code review standards and improving testing workflows.</li>
            <li>Collaborated with product and security teams to convert high-level business requirements into scalable backend designs.</li>
          </ul>

          <h3>Tata Consultancy Services (TCS) – Software Engineer</h3>
          <p>Mar 2022 – Dec 2024</p>
          <ul>
            <li>Developed and optimized secure RESTful APIs across 4 enterprise-grade applications used by global stakeholders.</li>
            <li>Implemented JWT-based authentication and automated debugging workflows, reducing deployment errors by 10%.</li>
            <li>Improved application load time by 15% by refactoring legacy middleware and optimizing database queries.</li>
            <li>Led a 3-member engineering team and delivered 10+ major feature releases on schedule across US and EU projects.</li>
            <li>Awarded Contextual Master for technical contribution and delivery excellence.</li>
          </ul>
        </div>
      </section>

      <section>
        <h2>Projects</h2>
        <div className="card-grid">
          <div className="card">
            <h3>EventX – Event Management Platform (MERN + PostgreSQL + AWS)</h3>
            <ul>
              <li>Built secure backend APIs with JWT-based authentication and role-based access control.</li>
              <li>Deployed via Docker-based CI/CD pipeline on AWS EC2.</li>
              <li>Optimized concurrency handling to support 1,000+ simulated concurrent users without latency spikes.</li>
            </ul>
          </div>
          <div className="card">
            <h3>Attendance System – Face Recognition Automation (Python + OpenCV)</h3>
            <ul>
              <li>Developed automated facial recognition pipeline reducing manual attendance time by 90%.</li>
              <li>Designed SQL-based storage and real-time Excel export for administrative reporting.</li>
              <li>Implemented logging mechanisms to track recognition edge cases and improve accuracy.</li>
            </ul>
          </div>
          <div className="card">
            <h3>DreamShop – E-commerce Backend (Node.js + AWS S3)</h3>
            <ul>
              <li>Developed backend services for product management and checkout flow.</li>
              <li>Integrated AWS S3 for secure media storage.</li>
              <li>Performed structured test case validation for order lifecycle reliability.</li>
            </ul>
          </div>
        </div>
      </section>

      <section>
        <h2>Certifications</h2>
        <ul>
          <li>AWS Certified Developer – Associate (2023)</li>
          <li>Microsoft Azure Fundamentals (2022)</li>
          <li>IBM Data Analysis Using Python (2021)</li>
          <li>Contextual Master Award – TCS (2023)</li>
        </ul>
      </section>

      <section>
        <h2>Education</h2>
        <p>
          Bachelor of Engineering – Computer Science (2018–2022)<br />
          Vidyalankar Institute of Technology<br />
          GPA: 9.5 / 10
        </p>
      </section>
    </div>
  );
};

export default App;
