import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Award, ExternalLink } from "lucide-react"

const certificates = [
  {
    title: "Web Design for Beginners",
    institution: "Centre for Open & Distance Learning (CODL), University of Moratuwa",
    skills: ["HTML", "CSS", "Web Design"],
    description: "Fundamental web design concepts and technologies conducted by the Faculty of Information Technology, University of Moratuwa.",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WebDesign-JCyTpD17ZSTggcZ1X0ff1FBFiZeLb8.png",
  },
  {
    title: "Introduction to Web Development with HTML, CSS, JavaScript",
    institution: "IBM & Coursera",
    skills: ["HTML", "CSS", "JavaScript", "Web Development"],
    description: "Online non-credit course authorized by IBM and offered through Coursera covering web development fundamentals.",
    date: "Dec 21, 2023",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WebDevelopment-O1FQaOsggovy4YnUkRtFBv9GRhPJEG.png",
  },
  {
    title: "OOPs in Java",
    institution: "Great Learning Academy",
    skills: ["Java", "OOP Concepts", "Object-Oriented Programming"],
    description: "Free online course covering object-oriented programming principles and their implementation in Java.",
    date: "June 2024",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/oops%20java-TrqE00yOmgW8YRZjefcG7g84XcKVRX.png",
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
              <Card key={index} className="bg-card border-border hover:shadow-lg transition-all hover:-translate-y-1 group overflow-hidden flex flex-col">
                {cert.image && (
                  <div className="relative w-full h-48 bg-muted overflow-hidden">
                    <img 
                      src={cert.image} 
                      alt={cert.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                )}
                <CardHeader className="pb-4 flex-grow">
                  <div className="flex items-start justify-between gap-4 mb-2">
                    <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
                      <Award className="w-5 h-5 text-primary" />
                    </div>
                    <ExternalLink className="w-4 h-4 text-muted-foreground group-hover:text-primary transition-colors" />
                  </div>
                  <CardTitle className="text-base text-foreground">{cert.title}</CardTitle>
                  <p className="text-xs text-primary font-medium">{cert.institution}</p>
                  {cert.date && <p className="text-xs text-muted-foreground mt-1">{cert.date}</p>}
                </CardHeader>
                <CardContent>
                  <p className="text-xs text-muted-foreground mb-4">
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
