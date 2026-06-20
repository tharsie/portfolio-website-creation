export function SkillsHighlights() {
  const skills = {
    "Programming Languages": ["JavaScript", "TypeScript", "Python", "Java", "C#"],
    "Frontend": ["React.js", "Next.js", "Tailwind CSS", "HTML/CSS", "Redux", "Vue.js"],
    "Backend": ["Node.js", "ASP.NET Core", "Express.js", "Django", "RESTful APIs"],
    "Database": ["SQL Server", "PostgreSQL", "MongoDB", "Firebase", "Firestore"],
    "Tools & DevOps": ["Git", "GitHub", "Docker", "VS Code", "Postman", "Jira"],
    "Soft Skills": ["Problem Solving", "Team Collaboration", "Communication", "Time Management", "Adaptability"]
  }

  return (
    <div>
      <h2 className="text-2xl font-bold text-primary mb-4">Technical Skills</h2>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {Object.entries(skills).map(([category, skillList]) => (
          <div key={category} className="border border-border rounded-lg p-4">
            <h3 className="font-semibold text-primary mb-3">{category}</h3>
            <div className="flex flex-wrap gap-2">
              {skillList.map((skill) => (
                <span
                  key={skill}
                  className="text-sm bg-primary/10 text-primary px-3 py-1 rounded-full border border-primary/20"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>

      {/* Proficiency Summary */}
      <div className="mt-6 bg-card border border-border rounded-lg p-4">
        <h3 className="font-semibold text-foreground mb-3">Proficiency Levels</h3>
        <div className="space-y-3 text-sm">
          <div className="flex justify-between items-center">
            <span className="font-medium text-foreground">Advanced</span>
            <div className="text-muted-foreground">React.js, JavaScript, HTML/CSS, Git</div>
          </div>
          <div className="flex justify-between items-center">
            <span className="font-medium text-foreground">Intermediate</span>
            <div className="text-muted-foreground">Node.js, ASP.NET Core, SQL, TypeScript</div>
          </div>
          <div className="flex justify-between items-center">
            <span className="font-medium text-foreground">Learning</span>
            <div className="text-muted-foreground">Kubernetes, AWS, Machine Learning</div>
          </div>
        </div>
      </div>
    </div>
  )
}
