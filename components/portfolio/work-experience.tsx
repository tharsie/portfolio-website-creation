export function WorkExperience() {
  return (
    <div>
      <h2 className="text-2xl font-bold text-primary mb-4">Work Experience</h2>
      
      <div className="space-y-6">
        {/* Current/Most Recent */}
        <div className="border-l-4 border-primary pl-4">
          <div className="flex justify-between items-start mb-2">
            <h3 className="text-lg font-semibold text-foreground">Junior Software Engineer Intern</h3>
            <span className="text-sm font-medium text-muted-foreground">2024 - Present</span>
          </div>
          <p className="font-medium text-primary mb-2">Creo360</p>
          <p className="text-foreground mb-3">
            Contributing to the development of innovative software solutions with a focus on web technologies and user experience. Working in an agile environment with a talented team of developers and designers.
          </p>
          <div className="text-sm text-foreground space-y-1">
            <p><strong>Key Responsibilities:</strong></p>
            <ul className="list-disc list-inside ml-2 space-y-1">
              <li>Develop and maintain full-stack web applications</li>
              <li>Implement RESTful APIs using ASP.NET Core and Node.js</li>
              <li>Collaborate with UI/UX designers to create responsive interfaces</li>
              <li>Write clean, maintainable code following best practices</li>
              <li>Participate in code reviews and quality assurance processes</li>
            </ul>
            <p className="mt-2"><strong>Technologies:</strong> React.js, ASP.NET Core, Node.js, SQL Server, Git</p>
          </div>
        </div>

        {/* Previous Experience Note */}
        <div className="bg-secondary rounded-lg p-3 text-sm">
          <p className="text-muted-foreground">
            While at university, I have been actively building projects and contributing to open-source initiatives to strengthen my technical skills and stay updated with industry trends.
          </p>
        </div>
      </div>
    </div>
  )
}
