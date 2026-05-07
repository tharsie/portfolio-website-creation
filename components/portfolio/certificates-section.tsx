import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Award, ExternalLink } from "lucide-react"

const certificates = [
  {
    title: "Web Design for Beginners",
    institution: "University of Moratuwa",
    skills: ["HTML", "CSS", "JavaScript"],
    description: "Fundamental web design concepts and technologies for building modern websites.",
  },
  {
    title: "Introduction to Web Development",
    institution: "IBM",
    skills: ["HTML", "CSS", "JavaScript"],
    description: "Comprehensive introduction to web development fundamentals and best practices.",
  },
  {
    title: "Object-Oriented Programming in Java",
    institution: "Great Learning Academy",
    skills: ["Java", "OOP Concepts"],
    description: "Core object-oriented programming principles and their implementation in Java.",
  },
]

export function CertificatesSection() {
  return (
    <section id="certificates" className="py-20">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-4 text-foreground">
            Certifications
          </h2>
          <p className="text-center text-muted-foreground mb-4 max-w-2xl mx-auto">
            Professional certifications and courses completed to enhance my technical skills
          </p>
          <div className="w-20 h-1 bg-primary mx-auto mb-12 rounded-full" />

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {certificates.map((cert, index) => (
              <Card key={index} className="bg-card border-border hover:shadow-lg transition-all hover:-translate-y-1 group">
                <CardHeader className="pb-4">
                  <div className="flex items-start justify-between gap-4">
                    <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
                      <Award className="w-6 h-6 text-primary" />
                    </div>
                    <ExternalLink className="w-5 h-5 text-muted-foreground group-hover:text-primary transition-colors" />
                  </div>
                  <CardTitle className="text-lg text-foreground mt-4">{cert.title}</CardTitle>
                  <p className="text-sm text-primary font-medium">{cert.institution}</p>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground mb-4">
                    {cert.description}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {cert.skills.map((skill, skillIndex) => (
                      <Badge key={skillIndex} variant="outline" className="text-xs">
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          <Card className="bg-muted/50 border-dashed border-2 border-border mt-8">
            <CardContent className="p-8 text-center">
              <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-primary/10 flex items-center justify-center">
                <Award className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-lg font-semibold text-foreground mb-2">
                Additional Certificates
              </h3>
              <p className="text-muted-foreground text-sm max-w-md mx-auto">
                This section will be updated with additional certificates and evidence of skills 
                improved through online or physical courses completed within the last year.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}
