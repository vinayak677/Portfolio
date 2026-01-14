import React from "react";
import "./Experience.css";

const experiences = [
  {
    title: "React.js Developer",
    company: "Dotsoft Pvt. Ltd | Hyderabad",
    period: "Jun 2025 – Oct 2025",
    highlights: [
      "Transformed complex Figma designs into scalable, reusable UI components using React.js and TypeScript.",
      "Refactored and optimized existing code to improve performance and maintainability.",
      "Ensured responsive layouts and consistent design using Material-UI.",
    ],
    stack: ["React.js", "TypeScript", "Material-UI", "REST APIs", "Git"],
  },
  {
    title: "React.js Developer",
    company: "Alpha OBS LLP | Pune",
    period: "Feb 2024 – Dec 2024",
    highlights: [
      "Collaborated on a logistics & CRM CMS for All My Sons Moving and Storage (branches, vehicles, payments, discounts).",
      "Worked on Spio C Pass, a centralized platform aggregating reviews from Google Maps, Instagram, Facebook and YouTube.",
      "Built template-based flows for managing comprehensive school admission data and business sites like Vencer Paints and Varsha Road Carriers.",
    ],
    stack: [
      "React.js",
      "TypeScript",
      "Material-UI",
      "Redux / State Management",
      "REST APIs",
      "AWS CodeCommit",
    ],
  },
  {
    title: "React.js Developer",
    company: "Astria Digital Pvt. Ltd | Bangalore",
    period: "Jan 2023 – Jul 2023",
    highlights: [
      "Converted complex Figma UI designs into clean, reusable React components.",
      "Integrated REST APIs and handled client-side data flows and UI states.",
      "Implemented responsive layouts using HTML5, CSS3, Bootstrap and React.js.",
    ],
    stack: [
      "React.js",
      "JavaScript (ES6+)",
      "HTML5",
      "CSS3",
      "Bootstrap",
      "REST APIs",
      "AWS CodeCommit",
    ],
  },
  {
    title: "Software Engineer",
    company: "Axis Cades | Bangalore",
    period: "Mar 2019 – Jan 2022",
    highlights: [
      "Worked as a Software Engineer on engineering-focused projects, collaborating with cross-functional teams.",
      "Contributed to delivering reliable solutions while gradually transitioning towards front-end development.",
    ],
    stack: ["JavaScript", "Problem Solving", "Collaboration"],
  },
];

const quickWins = [
  { label: "Experience", value: "4.9+ yrs" },
  { label: "Projects", value: "15+" },
  { label: "Focus", value: "React UI" },
  { label: "Strength", value: "Performance" },
];

const education = {
  degree: "M.S. Engineering (Mechanical)",
  institute: "",
  period: "Jun 2012 – Jun 2016",
};

export default function Experience() {
  return (
    <section className="exp-page">
      <div className="container">
        <div className="exp-header">
          <span className="exp-pill">Career</span>
          <h1 className="exp-title">Experience</h1>
          <p className="exp-subtitle">
            A quick timeline of roles, impact, and the technologies I use most.
          </p>
        </div>

        <div className="exp-stats">
          {quickWins.map((item) => (
            <div key={item.label} className="exp-stat">
              <div className="exp-stat-value">{item.value}</div>
              <div className="exp-stat-label">{item.label}</div>
            </div>
          ))}
        </div>

        <div className="exp-timeline">
          {experiences.map((exp) => (
            <div key={`${exp.title}-${exp.period}`} className="exp-card">
              <div className="exp-card-top">
                <div>
                  <h3 className="exp-role">{exp.title}</h3>
                  <div className="exp-meta">
                    <span className="exp-company">{exp.company}</span>
                    <span className="exp-dot">•</span>
                    <span className="exp-period">{exp.period}</span>
                  </div>
                </div>
                <div className="exp-badge">Impact</div>
              </div>

              <ul className="exp-list">
                {exp.highlights.map((h) => (
                  <li key={h}>{h}</li>
                ))}
              </ul>

              <div className="exp-stack">
                {exp.stack.map((s) => (
                  <span key={s} className="exp-chip">
                    {s}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="exp-education">
          <h2 className="exp-edu-title">Education</h2>
          <div className="exp-edu-card">
            <div>
              <div className="exp-edu-degree">{education.degree}</div>
              {education.institute && (
                <div className="exp-edu-inst">{education.institute}</div>
              )}
            </div>
            <div className="exp-edu-period">{education.period}</div>
          </div>
        </div>
      </div>
    </section>
  );
}

