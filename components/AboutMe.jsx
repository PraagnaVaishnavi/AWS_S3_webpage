import React from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa";

export default function AboutMe() {
  const containerStyle = {
    padding: "2rem",
    fontFamily: "Arial, sans-serif",
    background: "linear-gradient(to right, #e0e7ff, #ffffff)",
    minHeight: "100vh",
  };

  const cardStyle = {
    background: "#fff",
    padding: "1.5rem",
    borderRadius: "12px",
    boxShadow: "0 4px 12px rgba(0,0,0,0.1)",
    marginBottom: "1.5rem",
  };

  const headingStyle = {
    textAlign: "center",
    color: "#3730a3",
    fontSize: "2rem",
    marginBottom: "1.5rem",
  };

  const linkStyle = {
    textDecoration: "none",
    color: "#fff",
    padding: "0.75rem 1.5rem",
    borderRadius: "8px",
    display: "inline-flex",
    alignItems: "center",
    gap: "0.5rem",
    margin: "0.5rem",
  };

  return (
    <div style={containerStyle}>
      <h1 style={headingStyle}>Hello! I'm Praagna Vaishnavi</h1>

      <div style={cardStyle}>
        <p>
          I’m a 3rd-year Computer Science Engineering student at SJCE,
          passionate about full-stack development, AI/ML, and solving
          real-world problems through code.
        </p>
        <p style={{ marginTop: "1rem" }}>
          I’ve worked on projects like a Mental Health Predictor, Unilink Project, OTT Platform
          Clone, and Real Estate Price Predictor using React, Node.js, and
          Python.
        </p>
      </div>

      <div style={{ display: "flex", gap: "2rem", flexWrap: "wrap" }}>
        <div style={cardStyle}>
          <h2 style={{ color: "#4338ca" }}>Education</h2>
          <p>Kendriya Vidyalaya Mysore (Schooling)</p>
          <p>BASE PU College (High School)</p>
          <p>SJCE (CSE, 3rd year)</p>
        </div>

        <div style={cardStyle}>
          <h2 style={{ color: "#4338ca" }}>Technical Skills</h2>
          <ul>
            <li>React, Node.js, Express</li>
            <li>MongoDB, MySQL</li>
            <li>Python, Scikit-learn, Pandas</li>
            <li>HTML, CSS, JS</li>
          </ul>
        </div>
      </div>

      <div style={{ textAlign: "center", marginTop: "2rem" }}>
        <a
          href="https://github.com/PraagnaVaishnavi"
          target="_blank"
          rel="noopener noreferrer"
          style={{ ...linkStyle, backgroundColor: "#1f2937" }}
        >
          <FaGithub /> GitHub
        </a>
        <a
          href="https://www.linkedin.com/in/praagna-vaishnavi-9ba5a5258/"
          target="_blank"
          rel="noopener noreferrer"
          style={{ ...linkStyle, backgroundColor: "#2563eb" }}
        >
          <FaLinkedin /> LinkedIn
        </a>
      </div>
    </div>
  );
}

