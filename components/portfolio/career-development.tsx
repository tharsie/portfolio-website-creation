export function CareerDevelopment() {
  const goals = {
    "Short-term (1-2 years)": [
      "Complete my B.Sc. IT degree with distinction",
      "Gain hands-on experience in enterprise-level application development",
      "Develop expertise in cloud technologies (AWS/Azure)",
      "Build a strong professional network in the tech industry",
      "Contribute to open-source projects",
      "Obtain relevant certifications (AWS Solutions Architect, etc.)"
    ],
    "Medium-term (3-5 years)": [
      "Transition to a mid-level Software Engineer / Senior Developer role",
      "Lead small development teams or mentor junior developers",
      "Specialize in full-stack development or DevOps",
      "Build personal projects that demonstrate innovation",
      "Establish thought leadership through blogging or speaking",
      "Develop expertise in emerging technologies (AI/ML, blockchain)"
    ],
    "Long-term (5+ years)": [
      "Become a Tech Lead or Engineering Manager",
      "Lead architectural decisions for complex systems",
      "Establish a successful startup or lead innovation initiatives",
      "Contribute significantly to the software development community",
      "Mentor and develop the next generation of engineers",
      "Achieve recognition as an expert in my field"
    ]
  }

  return (
    <div>
      <h2 className="text-2xl font-bold text-primary mb-4">Career Development Plan</h2>
      <p className="text-foreground mb-6">
        My career development plan is structured around continuous learning, technical excellence, and leadership growth. I am committed to building a career that creates meaningful impact while maintaining professional integrity and work-life balance.
      </p>

      <div className="space-y-6">
        {Object.entries(goals).map(([timeframe, goalList]) => (
          <div key={timeframe} className="border border-border rounded-lg p-4">
            <h3 className="font-semibold text-primary mb-3 text-lg">{timeframe}</h3>
            <ul className="space-y-2">
              {goalList.map((goal, index) => (
                <li key={index} className="flex gap-3">
                  <span className="text-primary font-bold text-lg leading-tight">✓</span>
                  <span className="text-foreground">{goal}</span>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      {/* Development Strategy */}
      <div className="mt-6 bg-secondary rounded-lg p-4 space-y-4">
        <h3 className="font-semibold text-foreground text-lg">Development Strategy</h3>
        
        <div>
          <p className="font-medium text-primary mb-2">1. Technical Growth</p>
          <p className="text-sm text-foreground">
            Focus on mastering new frameworks, tools, and technologies. Dedicate time weekly to learning through courses, documentation, and hands-on projects.
          </p>
        </div>

        <div>
          <p className="font-medium text-primary mb-2">2. Professional Development</p>
          <p className="text-sm text-foreground">
            Attend industry conferences, webinars, and networking events. Build relationships with mentors and peers in the industry.
          </p>
        </div>

        <div>
          <p className="font-medium text-primary mb-2">3. Leadership Skills</p>
          <p className="text-sm text-foreground">
            Develop communication, decision-making, and team management skills. Seek opportunities to lead projects and mentor others.
          </p>
        </div>

        <div>
          <p className="font-medium text-primary mb-2">4. Portfolio Building</p>
          <p className="text-sm text-foreground">
            Create diverse, impactful projects that showcase different skill sets. Contribute to open-source and share knowledge through blogs or talks.
          </p>
        </div>

        <div>
          <p className="font-medium text-primary mb-2">5. Personal Wellness</p>
          <p className="text-sm text-foreground">
            Maintain work-life balance, develop soft skills like public speaking and emotional intelligence, and invest in health and well-being.
          </p>
        </div>
      </div>

      {/* Success Metrics */}
      <div className="mt-6 bg-card border border-border rounded-lg p-4">
        <h3 className="font-semibold text-foreground mb-3">Success Metrics</h3>
        <div className="grid grid-cols-2 gap-4 text-sm">
          <div>
            <p className="font-medium text-primary">Technical Excellence</p>
            <p className="text-muted-foreground">Code quality, project delivery, problem-solving</p>
          </div>
          <div>
            <p className="font-medium text-primary">Leadership Impact</p>
            <p className="text-muted-foreground">Team growth, mentoring, recognition</p>
          </div>
          <div>
            <p className="font-medium text-primary">Community Contribution</p>
            <p className="text-muted-foreground">Open-source, speaking, knowledge sharing</p>
          </div>
          <div>
            <p className="font-medium text-primary">Personal Satisfaction</p>
            <p className="text-muted-foreground">Work-life balance, continuous learning</p>
          </div>
        </div>
      </div>
    </div>
  )
}
