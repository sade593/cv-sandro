import React from 'react';
import './App.css';

function Sidebar() {
  return (
    <div className="sidebar">
      <img
        src="https://via.placeholder.com/100"
        alt="Profile"
        className="profile-img"
      />
      <h1 className="name">Sandro Johnson</h1>
      <p className="role">Front web Developer</p>

      <div className="sidebar-section">
        <h2>Contact</h2>
        <p>📧 sadeishvili61@gmail.com</p>
        <p>📞 +995 571072104</p>
        <p>📍 Tbilisi, Georgia</p>
      </div>

      <div className="sidebar-section">
        <h2>Skills</h2>
        <ul>
          <li>JavaScript</li>
          <li>React</li>
          <li>html</li>
          <li>css</li>
          <li>bootstrap</li>
        </ul>
      </div>

      <div className="sidebar-section">
        <h2>Languages</h2>
        <ul>
          <li>English</li>
          <li>Georgian</li>
          <li>german</li>
        </ul>
      </div>
    </div>
  );
}

function App() {
  return (
    <div className="app-container">
      <Sidebar />
      <div className="main-content">
        <h2>Main Resume Content</h2>
        <p>This will contain experience, education, etc.</p>
      </div>
    </div>
  );
}

export default App;
