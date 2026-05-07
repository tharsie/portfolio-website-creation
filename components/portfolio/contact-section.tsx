import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Mail, Phone, MapPin, Linkedin, Github, Send } from "lucide-react"

const references = [
  {
    name: "Ms. Sanjeevi Chandrasiri",
    title: "Senior Lecturer - Department of Information Technology",
    qualifications: "M.Sc. (IT) (SLIIT), B.Sc.(Hons)(IT) (SLIIT), MIEEE, MBCS, MIET",
    organization: "SLIIT - Malabe",
    role: "Year 1 Course Leader, Faculty of Computing",
    phone: "0117 544 4144",
    email: "sanji.c@sliit.lk",
  },
  {
    name: "Mrs. Thulakshiga Thananjayan",
    title: "Senior Software Engineer",
    qualifications: "B.Sc (Hons)(IT) - SLIIT",
    organization: "Creo360 (Pvt) Ltd",
    phone: "0773244549",
    email: "thulakshiga@creo360.net",
  },
]

export function ContactSection() {
  return (
    <section id="contact" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-4 text-foreground">
            Contact Me
          </h2>
          <p className="text-center text-muted-foreground mb-4 max-w-2xl mx-auto">
            {"Feel free to reach out if you'd like to discuss opportunities or collaborations"}
          </p>
          <div className="w-20 h-1 bg-primary mx-auto mb-12 rounded-full" />

          <div className="grid lg:grid-cols-2 gap-8">
            <div>
              <Card className="bg-card border-border h-full">
                <CardHeader>
                  <CardTitle className="text-xl text-foreground">Get in Touch</CardTitle>
                </CardHeader>
                <CardContent className="space-y-6">
                  <a 
                    href="mailto:tharsiegan2001@gmail.com"
                    className="flex items-center gap-4 p-4 rounded-lg bg-muted/50 hover:bg-primary/10 transition-colors group"
                  >
                    <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                      <Mail className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground">Email</p>
                      <p className="text-foreground font-medium">tharsiegan2001@gmail.com</p>
                    </div>
                  </a>

                  <a 
                    href="tel:+94764291954"
                    className="flex items-center gap-4 p-4 rounded-lg bg-muted/50 hover:bg-primary/10 transition-colors group"
                  >
                    <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                      <Phone className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground">Phone</p>
                      <p className="text-foreground font-medium">+94 76 429 1954</p>
                    </div>
                  </a>

                  <div className="flex items-center gap-4 p-4 rounded-lg bg-muted/50">
                    <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center">
                      <MapPin className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground">Location</p>
                      <p className="text-foreground font-medium">Colombo / Jaffna, Sri Lanka</p>
                    </div>
                  </div>

                  <div className="flex gap-4 pt-4">
                    <Button asChild className="flex-1">
                      <a href="https://linkedin.com/in/tharsiegan" target="_blank" rel="noopener noreferrer">
                        <Linkedin className="w-4 h-4 mr-2" />
                        LinkedIn
                      </a>
                    </Button>
                    <Button variant="outline" asChild className="flex-1">
                      <a href="https://github.com/tharsie" target="_blank" rel="noopener noreferrer">
                        <Github className="w-4 h-4 mr-2" />
                        GitHub
                      </a>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </div>

            <div>
              <Card className="bg-card border-border">
                <CardHeader>
                  <CardTitle className="text-xl text-foreground">References</CardTitle>
                </CardHeader>
                <CardContent className="space-y-6">
                  {references.map((ref, index) => (
                    <div key={index} className="p-4 rounded-lg bg-muted/50">
                      <h4 className="font-semibold text-foreground">{ref.name}</h4>
                      <p className="text-sm text-primary font-medium">{ref.title}</p>
                      <p className="text-xs text-muted-foreground mb-2">{ref.qualifications}</p>
                      <p className="text-sm text-muted-foreground">{ref.organization}</p>
                      {ref.role && (
                        <p className="text-xs text-muted-foreground">{ref.role}</p>
                      )}
                      <div className="flex flex-wrap gap-4 mt-3 text-sm">
                        <a href={`tel:${ref.phone}`} className="flex items-center gap-1 text-muted-foreground hover:text-primary transition-colors">
                          <Phone className="w-3 h-3" />
                          {ref.phone}
                        </a>
                        <a href={`mailto:${ref.email}`} className="flex items-center gap-1 text-muted-foreground hover:text-primary transition-colors">
                          <Mail className="w-3 h-3" />
                          {ref.email}
                        </a>
                      </div>
                    </div>
                  ))}
                </CardContent>
              </Card>

              <Card className="bg-primary text-primary-foreground mt-6">
                <CardContent className="p-6 flex items-center justify-between">
                  <div>
                    <h3 className="font-semibold text-lg">Ready to Connect?</h3>
                    <p className="text-sm opacity-90">{"Let's discuss how I can contribute to your team"}</p>
                  </div>
                  <Button variant="secondary" asChild>
                    <a href="mailto:tharsiegan2001@gmail.com">
                      <Send className="w-4 h-4 mr-2" />
                      Send Email
                    </a>
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
