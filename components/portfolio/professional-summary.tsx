export function ProfessionalSummary() {
  return (
    <div>
      <h2 className="text-2xl font-bold text-primary mb-4">Professional Summary</h2>
      <div className="bg-card rounded-lg p-4 border border-border">
        <p className="text-foreground leading-relaxed mb-3">
          Aspiring Software Engineer with a demonstrated passion for developing innovative solutions that solve real-world problems. I bring a combination of technical expertise, creative problem-solving, and strong communication skills to every project. My approach focuses on understanding user needs and translating them into elegant, efficient code.
        </p>
        <div className="grid grid-cols-2 gap-4 text-sm">
          <div>
            <p className="font-semibold text-primary">Technical Focus</p>
            <p className="text-foreground">Full-stack development, Web technologies</p>
          </div>
          <div>
            <p className="font-semibold text-primary">Career Goal</p>
            <p className="text-foreground">Senior Software Engineer, Tech Lead</p>
          </div>
        </div>
      </div>
    </div>
  )
}
