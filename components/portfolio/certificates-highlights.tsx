export function CertificatesHighlights() {
  const certificates = [
    {
      title: "Web Design Fundamentals",
      issuer: "Professional Development Institute",
      date: "2023",
      description: "Comprehensive course covering responsive design, UI/UX principles, and modern CSS techniques",
      skills: ["UI Design", "Responsive Design", "CSS", "Figma"]
    },
    {
      title: "IBM Full Stack Web Development",
      issuer: "IBM & Coursera",
      date: "2023",
      description: "Full-stack development specialization covering frontend, backend, databases, and deployment",
      skills: ["React", "Node.js", "MongoDB", "Docker"]
    },
    {
      title: "Java Object-Oriented Programming",
      issuer: "Academy of Technology",
      date: "2022",
      description: "Advanced OOP concepts including design patterns, SOLID principles, and enterprise development",
      skills: ["Java", "OOP", "Design Patterns", "Spring Framework"]
    }
  ]

  return (
    <div>
      <h2 className="text-2xl font-bold text-primary mb-4">Certifications & Courses</h2>
      <p className="text-foreground mb-6">
        I am committed to continuous professional development and have completed several industry-recognized certifications to enhance my technical skills.
      </p>

      <div className="space-y-4">
        {certificates.map((cert, index) => (
          <div key={index} className="border border-border rounded-lg p-4 hover:bg-secondary transition">
            <div className="flex justify-between items-start mb-2">
              <div>
                <h3 className="text-lg font-semibold text-primary">{cert.title}</h3>
                <p className="text-sm text-muted-foreground">{cert.issuer}</p>
              </div>
              <span className="text-sm font-medium text-muted-foreground bg-secondary px-3 py-1 rounded">
                {cert.date}
              </span>
            </div>
            <p className="text-foreground text-sm mb-3">{cert.description}</p>
            <div className="flex flex-wrap gap-2">
              {cert.skills.map((skill) => (
                <span key={skill} className="text-xs bg-primary/10 text-primary px-2 py-1 rounded">
                  {skill}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>

      {/* Future Certifications */}
      <div className="mt-6 bg-card border border-border rounded-lg p-4">
        <h3 className="font-semibold text-foreground mb-3">Planned Certifications</h3>
        <ul className="space-y-2 text-sm">
          <li className="flex items-center gap-2">
            <span className="text-primary font-bold">→</span>
            <span className="text-foreground">AWS Solutions Architect Associate (2024)</span>
          </li>
          <li className="flex items-center gap-2">
            <span className="text-primary font-bold">→</span>
            <span className="text-foreground">Google Cloud Professional Developer (2024)</span>
          </li>
          <li className="flex items-center gap-2">
            <span className="text-primary font-bold">→</span>
            <span className="text-foreground">Kubernetes Application Developer (2025)</span>
          </li>
        </ul>
      </div>
    </div>
  )
}
