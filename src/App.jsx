import React, { useState, useEffect } from 'react';
import { FaEnvelope, FaPhone, FaMapMarkerAlt, FaGraduationCap, FaBriefcase } from 'react-icons/fa';
import './App.css';

function Sidebar() {
  return (
    <aside className="sidebar">
      <img src="/sandro.JPG" alt="Profile" className="profile-img" />

      <h1 className="name">Sandro Adeishvili</h1>
      <p className="role">Front-end Developer</p>

      <div className="section">
        <h2>Contact</h2>
        <p><FaEnvelope /> sadeishvili61@gmail.com</p>
        <p><FaPhone /> +995 571072104</p>
        <p><FaMapMarkerAlt /> Tbilisi, Georgia</p>
      </div>
    </aside>
  );
}

function App() {
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    document.body.className = darkMode ? 'dark' : '';
  }, [darkMode]);

  return (
    <div className="resume-container">
      <button className="theme-toggle" onClick={() => setDarkMode(!darkMode)}>
        {darkMode ? '☀️' : '🌙'}
      </button>

      <Sidebar />

      <main className="main-content">
        <section>
          <h2>About Me</h2>
          <p>
            Passionate front-end developer currently learning React, JavaScript, HTML, and CSS. Eager to build interactive, user-friendly websites and grow in the tech industry.
          </p>
        </section>

        <section>
          <h2><FaBriefcase /> Experience</h2>
          <div>
            <h3>Front-End Developer (In Training)</h3>
            <p><strong>Self-Learning</strong> | Ongoing</p>
            <p>
              Currently learning front-end development with a focus on JavaScript, React, HTML, and CSS. Working on personal projects to gain hands-on experience with modern web technologies.
            </p>
          </div>
        </section>

        <section>
          <h2><FaGraduationCap /> Education</h2>
          <div>
            <h3>Bachelor of Information Technology</h3>
            <p><strong>Business and Technology University, Tbilisi</strong> | 2024 – Present</p>
            <p>
              First-year student majoring in Information Technology. Developing a strong foundation in computer science, programming, and web development.
            </p>
          </div>
        </section>
      </main>
    </div>
  );
}

export default App;
