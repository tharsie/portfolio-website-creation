export function EducationHighlights() {
  return (
    <div>
      <h2 className="text-2xl font-bold text-primary mb-4">Education</h2>
      
      <div className="space-y-6">
        {/* Tertiary Education */}
        <div className="border-l-4 border-primary pl-4">
          <div className="flex justify-between items-start mb-2">
            <h3 className="text-lg font-semibold text-foreground">Bachelor of Science in Information Technology</h3>
            <span className="text-sm font-medium text-muted-foreground">2022 - 2025</span>
          </div>
          <p className="font-medium text-primary mb-2">Sri Lanka Institute of Information Technology (SLIIT)</p>
          <div className="text-sm text-foreground space-y-1">
            <p><strong>Current Year:</strong> 3rd Year</p>
            <p><strong>GPA:</strong> 3.6/4.0 (Excellent Standing)</p>
            <p><strong>Specialization:</strong> Software Engineering</p>
            <p className="mt-2"><strong>Relevant Coursework:</strong></p>
            <ul className="list-disc list-inside ml-2 space-y-0.5">
              <li>Software Engineering</li>
              <li>Database Management Systems</li>
              <li>Web Application Development</li>
              <li>Mobile Application Development</li>
              <li>Advanced Object-Oriented Programming</li>
            </ul>
          </div>
        </div>

        {/* Secondary Education */}
        <div className="border-l-4 border-secondary pl-4">
          <div className="flex justify-between items-start mb-2">
            <h3 className="text-lg font-semibold text-foreground">Advanced Level (A/L) - Physical Science Stream</h3>
            <span className="text-sm font-medium text-muted-foreground">Completed 2022</span>
          </div>
          <p className="font-medium text-secondary mb-2">Jaffna Hindu College, Jaffna</p>
          <div className="text-sm text-foreground">
            <p><strong>Results:</strong> A in Mathematics, Physics, and Chemistry</p>
            <p className="mt-2">Achieved distinction in science subjects, demonstrating strong analytical and problem-solving skills from an early stage.</p>
          </div>
        </div>

        {/* Additional Education */}
        <div className="bg-secondary rounded-lg p-4">
          <p className="font-semibold text-foreground mb-2">Continuous Learning</p>
          <p className="text-sm text-foreground">
            Regularly participate in online courses, workshops, and webinars to stay updated with latest technologies and industry best practices. Completed multiple certifications in web development and cloud technologies.
          </p>
        </div>
      </div>
    </div>
  )
}
