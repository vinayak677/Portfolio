import React from "react";
import "./Tech.css";

const technologies = [
  "React.js",
  "JavaScript",
  "HTML5 / CSS3",
  "Redux",
  "Tailwind CSS",
  "Bootstrap",
  "Ant Design",
  "Context API",
  "Git & GitHub",
  "RESTful APIs",
  "Webpack",
  "ES6+",
  "Responsive Design",
  "Figma",
  "VS Code",
  "NPM/Yarn",
  "lazy loading",
  "React Router",
  "Axios",
  "Jira",
  "State Management",
  "Code Splitting",
  "Unit Testing",
];


const Tech = () => {
  return (
    <section className="tech-section">
      <div className="container">
        <div className="row align-items-center">

          {/* Image */}
          <div className="col-md-6 text-center mb-4">
            <img
              src="../assets/images/technologies.svg"
              alt="Technologies"
              className="tech-image"
            />
          </div>

          {/* Tech List */}
          <div className="col-md-6">
            <h2 className="tech-title">Technologies</h2>

            <div className="tech-list">
              {technologies.map((tech) => (
                <span key={tech} className="tech-badge">
                  {tech}
                </span>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Tech;
