export function ProjectsHighlights() {
  const projects = [
    {
      title: "E-Commerce Platform",
      description: "Full-stack e-commerce application with product catalog, shopping cart, and payment integration",
      tech: ["React.js", "Node.js", "MongoDB", "Stripe"],
      achievements: ["Implemented secure payment gateway", "Optimized database queries", "80%+ page load speed improvement"]
    },
    {
      title: "Real-time Chat Application",
      description: "WebSocket-based chat application with user authentication and message persistence",
      tech: ["React.js", "Node.js", "Socket.io", "PostgreSQL"],
      achievements: ["Real-time messaging", "User authentication", "Message encryption"]
    },
    {
      title: "Task Management Dashboard",
      description: "Web application for managing tasks with team collaboration features",
      tech: ["Next.js", "React", "Tailwind CSS", "Firebase"],
      achievements: ["Responsive design", "Real-time updates", "User role management"]
    },
    {
      title: "Content Management System",
      description: "CMS built with ASP.NET Core with user roles, permissions, and content versioning",
      tech: ["ASP.NET Core", "SQL Server", "React.js"],
      achievements: ["Role-based access control", "Version control", "RESTful API design"]
    },
    {
      title: "Weather Forecasting Application",
      description: "Mobile-responsive weather app with real-time data and interactive visualizations",
      tech: ["React.js", "Weather API", "Chart.js", "Axios"],
      achievements: ["Real-time weather updates", "Location-based services", "Data visualization"]
    },
    {
      title: "Social Media Analytics Tool",
      description: "Analytics dashboard for tracking social media metrics and engagement",
      tech: ["Next.js", "Python", "MongoDB", "D3.js"],
      achievements: ["Advanced analytics", "Data visualization", "Performance optimization"]
    }
  ]

  return (
    <div>
      <h2 className="text-2xl font-bold text-primary mb-4">Key Projects</h2>
      
      <div className="space-y-4">
        {projects.map((project, index) => (
          <div key={index} className="border border-border rounded-lg p-4 hover:bg-secondary transition">
            <div className="flex justify-between items-start mb-2">
              <h3 className="text-lg font-semibold text-foreground">{project.title}</h3>
              <span className="text-xs font-medium text-primary bg-primary/10 px-2 py-1 rounded">
                Project {index + 1}
              </span>
            </div>
            <p className="text-foreground mb-2">{project.description}</p>
            <div className="flex gap-2 flex-wrap mb-2">
              {project.tech.map((tech) => (
                <span key={tech} className="text-xs bg-primary/15 text-primary px-2 py-1 rounded">
                  {tech}
                </span>
              ))}
            </div>
            <div className="text-sm text-muted-foreground">
              <p className="font-medium mb-1">Key Achievements:</p>
              <ul className="list-disc list-inside space-y-0.5">
                {project.achievements.map((achievement) => (
                  <li key={achievement}>{achievement}</li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
