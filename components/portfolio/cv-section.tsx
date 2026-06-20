"use client"

import { FileText, Download, Mail, Phone, MapPin, Linkedin, Github, Calendar, Building2, GraduationCap, Award, Wrench } from "lucide-react"

export function CVSection() {
  return (
    <section id="cv" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Curriculum Vitae
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            A comprehensive overview of my professional background, education, and qualifications
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          {/* CV Document Style Container */}
          <div className="bg-card border border-border rounded-xl shadow-lg overflow-hidden">
            {/* CV Header */}
            <div className="bg-primary text-primary-foreground p-8">
              <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                <div>
                  <h3 className="text-2xl md:text-3xl font-bold">SELVARAJAH THARSIEGAN</h3>
                  <p className="text-primary-foreground/90 text-lg mt-1">Software Engineer</p>
                </div>
                <a
                  href="#"
                  className="inline-flex items-center gap-2 bg-primary-foreground text-primary px-4 py-2 rounded-lg font-medium hover:bg-primary-foreground/90 transition-colors w-fit"
                >
                  <Download size={18} />
                  Download CV
                </a>
              </div>
            </div>

            {/* Contact Information Bar */}
            <div className="bg-primary/5 border-b border-border p-4">
              <div className="flex flex-wrap justify-center gap-4 md:gap-6 text-sm">
                <a href="mailto:tharsiegan@gmail.com" className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors">
                  <Mail size={16} />
                  tharsiegan@gmail.com
                </a>
                <a href="tel:+94779aborets49" className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors">
                  <Phone size={16} />
                  +94 77 123 4567
                </a>
                <span className="flex items-center gap-2 text-muted-foreground">
                  <MapPin size={16} />
                  Jaffna, Sri Lanka
                </span>
                <a href="https://linkedin.com/in/tharsiegan" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors">
                  <Linkedin size={16} />
                  LinkedIn
                </a>
                <a href="https://github.com/tharsie" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors">
                  <Github size={16} />
                  GitHub
                </a>
              </div>
            </div>

            {/* CV Content */}
            <div className="p-6 md:p-8 space-y-8">
              {/* Profile Summary */}
              <div>
                <div className="flex items-center gap-2 mb-4">
                  <FileText className="text-primary" size={20} />
                  <h4 className="text-lg font-semibold text-foreground">Professional Summary</h4>
                </div>
                <p className="text-muted-foreground leading-relaxed pl-7">
                  Motivated and detail-oriented Software Engineering undergraduate at SLIIT with hands-on experience in full-stack development. 
                  Proficient in React.js, ASP.NET Core, Node.js, and Next.js. Strong foundation in building scalable web applications 
                  and a passion for creating innovative solutions. Excellent communication and teamwork skills developed through 
                  collaborative projects and internship experience.
                </p>
              </div>

              {/* Work Experience */}
              <div>
                <div className="flex items-center gap-2 mb-4">
                  <Building2 className="text-primary" size={20} />
                  <h4 className="text-lg font-semibold text-foreground">Work Experience</h4>
                </div>
                <div className="pl-7 space-y-4">
                  <div className="border-l-2 border-primary/30 pl-4">
                    <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-1">
                      <h5 className="font-semibold text-foreground">Software Engineer Intern</h5>
                      <span className="flex items-center gap-1 text-sm text-muted-foreground">
                        <Calendar size={14} />
                        Oct 2025 - Present
                      </span>
                    </div>
                    <p className="text-primary font-medium text-sm">Creo360 (Pvt) Ltd, Colombo</p>
                    <ul className="mt-2 text-muted-foreground text-sm space-y-1">
                      <li className="flex items-start gap-2">
                        <span className="text-primary mt-1">•</span>
                        Developed and maintained web applications using React.js and ASP.NET Core
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-primary mt-1">•</span>
                        Collaborated with cross-functional teams to deliver features on schedule
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-primary mt-1">•</span>
                        Implemented RESTful APIs and integrated third-party services
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-primary mt-1">•</span>
                        Participated in code reviews and agile development practices
                      </li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* Education */}
              <div>
                <div className="flex items-center gap-2 mb-4">
                  <GraduationCap className="text-primary" size={20} />
                  <h4 className="text-lg font-semibold text-foreground">Education</h4>
                </div>
                <div className="pl-7 space-y-4">
                  <div className="border-l-2 border-primary/30 pl-4">
                    <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-1">
                      <h5 className="font-semibold text-foreground">BSc (Hons) in Information Technology</h5>
                      <span className="flex items-center gap-1 text-sm text-muted-foreground">
                        <Calendar size={14} />
                        2022 - Present
                      </span>
                    </div>
                    <p className="text-primary font-medium text-sm">Sri Lanka Institute of Information Technology (SLIIT)</p>
                    <p className="text-muted-foreground text-sm mt-1">Specializing in Software Engineering</p>
                  </div>
                  <div className="border-l-2 border-primary/30 pl-4">
                    <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-1">
                      <h5 className="font-semibold text-foreground">GCE Advanced Level - Physical Science</h5>
                      <span className="flex items-center gap-1 text-sm text-muted-foreground">
                        <Calendar size={14} />
                        2019 - 2021
                      </span>
                    </div>
                    <p className="text-primary font-medium text-sm">Jaffna Hindu College, Jaffna</p>
                  </div>
                </div>
              </div>

              {/* Technical Skills */}
              <div>
                <div className="flex items-center gap-2 mb-4">
                  <Wrench className="text-primary" size={20} />
                  <h4 className="text-lg font-semibold text-foreground">Technical Skills</h4>
                </div>
                <div className="pl-7 grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <h6 className="font-medium text-foreground text-sm mb-2">Programming Languages</h6>
                    <div className="flex flex-wrap gap-2">
                      {["JavaScript", "TypeScript", "Java", "C#", "Python", "Kotlin"].map((skill) => (
                        <span key={skill} className="px-2 py-1 bg-primary/10 text-primary text-xs rounded-md">
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                  <div>
                    <h6 className="font-medium text-foreground text-sm mb-2">Frontend Technologies</h6>
                    <div className="flex flex-wrap gap-2">
                      {["React.js", "Next.js", "HTML5", "CSS3", "Tailwind CSS", "Bootstrap"].map((skill) => (
                        <span key={skill} className="px-2 py-1 bg-primary/10 text-primary text-xs rounded-md">
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                  <div>
                    <h6 className="font-medium text-foreground text-sm mb-2">Backend Technologies</h6>
                    <div className="flex flex-wrap gap-2">
                      {["Node.js", "Express.js", "ASP.NET Core", "Spring Boot"].map((skill) => (
                        <span key={skill} className="px-2 py-1 bg-primary/10 text-primary text-xs rounded-md">
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                  <div>
                    <h6 className="font-medium text-foreground text-sm mb-2">Databases & Tools</h6>
                    <div className="flex flex-wrap gap-2">
                      {["MongoDB", "MySQL", "PostgreSQL", "Firebase", "Git", "Docker"].map((skill) => (
                        <span key={skill} className="px-2 py-1 bg-primary/10 text-primary text-xs rounded-md">
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              {/* Certifications */}
              <div>
                <div className="flex items-center gap-2 mb-4">
                  <Award className="text-primary" size={20} />
                  <h4 className="text-lg font-semibold text-foreground">Certifications</h4>
                </div>
                <div className="pl-7 space-y-2">
                  <div className="flex items-center gap-2 text-sm">
                    <span className="text-primary">•</span>
                    <span className="text-muted-foreground">Web Design for Beginners - University of Moratuwa</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm">
                    <span className="text-primary">•</span>
                    <span className="text-muted-foreground">Introduction to Web Development - IBM</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm">
                    <span className="text-primary">•</span>
                    <span className="text-muted-foreground">Object Oriented Programming with Java - University of Moratuwa</span>
                  </div>
                </div>
              </div>

              {/* References */}
              <div>
                <div className="flex items-center gap-2 mb-4">
                  <FileText className="text-primary" size={20} />
                  <h4 className="text-lg font-semibold text-foreground">References</h4>
                </div>
                <div className="pl-7 grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="bg-muted/50 rounded-lg p-4">
                    <h6 className="font-semibold text-foreground">Mr. Saman Perera</h6>
                    <p className="text-sm text-primary">Senior Software Engineer</p>
                    <p className="text-sm text-muted-foreground">Creo360 (Pvt) Ltd</p>
                    <p className="text-sm text-muted-foreground mt-1">saman@creo360.com</p>
                  </div>
                  <div className="bg-muted/50 rounded-lg p-4">
                    <h6 className="font-semibold text-foreground">Dr. Kumar Rajasinghe</h6>
                    <p className="text-sm text-primary">Senior Lecturer</p>
                    <p className="text-sm text-muted-foreground">SLIIT, Faculty of Computing</p>
                    <p className="text-sm text-muted-foreground mt-1">kumar.r@sliit.lk</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
