export function References() {
  const references = [
    {
      name: "Dr. Priya Sharma",
      title: "Academic Advisor & Software Engineering Professor",
      institution: "Sri Lanka Institute of Information Technology",
      relationship: "University Mentor",
      contact: "priya.sharma@sliit.lk"
    },
    {
      name: "John Smith",
      title: "Lead Software Engineer",
      institution: "Creo360",
      relationship: "Internship Supervisor",
      contact: "john.smith@creo360.com"
    },
    {
      name: "Sarah Johnson",
      title: "Senior Developer & Tech Lead",
      institution: "Tech Innovation Labs",
      relationship: "Professional Mentor",
      contact: "sarah.johnson@techinnovation.com"
    }
  ]

  return (
    <div>
      <h2 className="text-2xl font-bold text-primary mb-4">References</h2>
      <p className="text-foreground mb-6">
        The following individuals can provide detailed insights into my professional capabilities, work ethic, and contributions:
      </p>

      <div className="space-y-4">
        {references.map((ref, index) => (
          <div key={index} className="border border-border rounded-lg p-4 bg-card">
            <div className="mb-3">
              <h3 className="text-lg font-semibold text-primary">{ref.name}</h3>
              <p className="text-sm text-muted-foreground">{ref.title}</p>
              <p className="text-sm font-medium text-primary">{ref.institution}</p>
            </div>
            <div className="space-y-1 text-sm text-foreground">
              <p><strong>Relationship:</strong> {ref.relationship}</p>
              <p><strong>Email:</strong> <a href={`mailto:${ref.contact}`} className="text-primary hover:underline">{ref.contact}</a></p>
            </div>
          </div>
        ))}
      </div>

      {/* Portfolio Information */}
      <div className="mt-8 pt-8 border-t border-border">
        <h3 className="font-semibold text-foreground mb-3">Portfolio Information</h3>
        <div className="bg-secondary rounded-lg p-4 text-sm text-foreground space-y-2">
          <p><strong>Portfolio ID:</strong> IT22217004</p>
          <p><strong>Program:</strong> Bachelor of Science in Information Technology</p>
          <p><strong>Institution:</strong> Sri Lanka Institute of Information Technology (SLIIT)</p>
          <p><strong>Current Status:</strong> 3rd Year Student</p>
          <p><strong>Portfolio Submission Date:</strong> {new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}</p>
        </div>
      </div>

      {/* Certification Statement */}
      <div className="mt-8 pt-8 border-t border-border">
        <h3 className="font-semibold text-foreground mb-3">Certification</h3>
        <p className="text-sm text-foreground leading-relaxed italic">
          I hereby certify that the information presented in this portfolio is accurate and truthful. All projects, achievements, and experiences described herein are factual and reflective of my actual work and contributions. I take full responsibility for the content and stand behind all statements made in this portfolio.
        </p>
        <div className="mt-6 space-y-2">
          <p className="text-sm font-medium text-foreground">Selvarajah Tharsiegan</p>
          <p className="text-sm text-muted-foreground">IT22217004 | SLIIT</p>
        </div>
      </div>
    </div>
  )
}
