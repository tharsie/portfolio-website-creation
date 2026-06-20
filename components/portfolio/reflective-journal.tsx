export function ReflectiveJournal() {
  const reflections = [
    {
      title: "Importance of Clear Communication",
      learning: "Through PPW module, I learned how to communicate complex technical concepts in simple, understandable language. This skill has been invaluable in team meetings and client presentations."
    },
    {
      title: "Professional Business Writing",
      learning: "Mastering formal business writing has improved my email communication and documentation. I now draft clear, concise, and professional correspondence that conveys information effectively."
    },
    {
      title: "Presentation Skills Enhancement",
      learning: "Developing confident presentation abilities has boosted my confidence in sharing project findings. I learned to structure ideas logically and engage audiences with compelling visuals."
    },
    {
      title: "Collaboration and Teamwork",
      learning: "Working on group projects taught me the value of diverse perspectives and collaborative problem-solving. I now understand how to leverage team strengths effectively."
    },
    {
      title: "Time Management and Organization",
      learning: "Juggling coursework, internship, and personal projects has refined my time management skills. I've learned to prioritize tasks and maintain work-life balance."
    },
    {
      title: "Continuous Learning Mindset",
      learning: "The PPW module emphasized lifelong learning. I now actively seek knowledge, adapt to new technologies, and view challenges as opportunities for growth."
    }
  ]

  return (
    <div>
      <h2 className="text-2xl font-bold text-primary mb-4">Reflective Journal - Personal Professional Growth</h2>
      <p className="text-foreground mb-6">
        During the Personal Professional Workshop (PPW) module, I have gained valuable insights into professional development that have shaped my approach to both technical and interpersonal challenges.
      </p>

      <div className="space-y-4">
        {reflections.map((reflection, index) => (
          <div key={index} className="border-l-4 border-primary pl-4 py-2">
            <h3 className="font-semibold text-primary mb-2">{reflection.title}</h3>
            <p className="text-foreground text-sm leading-relaxed">{reflection.learning}</p>
          </div>
        ))}
      </div>

      {/* Overall Reflection */}
      <div className="mt-8 bg-primary/10 border border-primary/30 rounded-lg p-4">
        <h3 className="font-semibold text-primary mb-3">Overall Impact</h3>
        <p className="text-foreground text-sm leading-relaxed">
          The PPW module has been transformative in shaping my professional identity. It has taught me that being a successful software engineer is not just about technical prowess, but also about effective communication, ethical decision-making, and continuous personal growth. I am now better equipped to navigate the challenges of the tech industry while maintaining strong professional values and relationships.
        </p>
      </div>
    </div>
  )
}
