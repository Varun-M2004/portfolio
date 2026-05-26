import "./styles/TechStack.css";

const skillsData = [
  {
    category: "Languages",
    items: ["Java", "Python", "JavaScript"]
  },
  {
    category: "Core Concepts",
    items: ["Object-Oriented Programming (OOP)", "Data Structures & Algorithms (DSA)"]
  },
  {
    category: "AI & Machine Learning",
    items: ["NLP", "LLMs", "RAG", "Prompt Engineering"]
  },
  {
    category: "AI Tools & Libraries",
    items: ["MediaPipe", "spaCy", "NumPy", "Pandas"]
  },
  {
    category: "Frontend",
    items: ["React.js", "HTML", "CSS"]
  },
  {
    category: "Backend",
    items: ["Node.js", "Express.js", "Flask", "REST APIs"]
  },
  {
    category: "Databases",
    items: ["SQL"]
  },
  {
    category: "Tools",
    items: ["GitHub", "Postman", "AWS", "VS Code"]
  }
];

const TechStack = () => {
  return (
    <div className="techstack-section" id="techstack">
      <div className="techstack-box">
        <h2 className="techstack-title">
          My <span>Techstack</span>
        </h2>
        
        <div className="techstack-grid-static">
          {skillsData.map((group, index) => {
            const categoryClass = group.category.toLowerCase().replace(/[^a-z0-9]/g, "-");
            return (
              <div className={`techstack-card-static ${categoryClass}`} key={index}>
                <h3 className="category-title">{group.category}</h3>
                <div className="tags-container">
                  {group.items.map((item, i) => (
                    <span className="skill-tag" key={i}>
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default TechStack;
