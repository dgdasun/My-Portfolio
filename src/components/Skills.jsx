import "../styles/Skills.css";

const skills = [
  "Java",
  "Spring Boot",
  "React",
  "JavaScript",
  "HTML5",
  "CSS3",
  "MySQL",
  "Git",
  "GitHub",
  "REST API",
  "Postman",
  "Figma",
];

function Skills() {
  return (
    <section className="skills" id="skills">
      <div className="skills-container">
        <p className="skills-subtitle">TECH STACK</p>

        <h2>Technologies I Work With</h2>

        <div className="skills-grid">
          {skills.map((skill, index) => (
            <div className="skill-card" key={index}>
              {skill}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Skills;