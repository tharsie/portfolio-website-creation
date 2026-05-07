import { Mail, Phone, MapPin, Github, Linkedin } from "lucide-react"
import { Button } from "@/components/ui/button"

export function HeroSection() {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center pt-20 pb-16">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <div className="mb-8">
            <div className="w-32 h-32 mx-auto mb-6 rounded-full bg-primary/10 border-4 border-primary flex items-center justify-center">
              <span className="text-4xl font-bold text-primary">ST</span>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-4 text-balance">
              Selvarajah Tharsiegan
            </h1>
            <p className="text-xl md:text-2xl text-primary font-medium mb-2">
              Software Engineer
            </p>
            <p className="text-lg text-muted-foreground mb-6">
              BSc (Hons) in Information Technology | SLIIT
            </p>
          </div>

          <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-8 leading-relaxed">
            Passionate Software Engineering undergraduate with hands-on experience in full-stack development 
            and real-world product engineering. Strong focus on clean code, problem-solving, and delivering 
            user-friendly digital solutions.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-4 mb-8">
            <div className="flex items-center gap-2 text-muted-foreground">
              <Mail className="w-4 h-4 text-primary" />
              <span className="text-sm">tharsiegan2001@gmail.com</span>
            </div>
            <div className="flex items-center gap-2 text-muted-foreground">
              <Phone className="w-4 h-4 text-primary" />
              <span className="text-sm">+94764291954</span>
            </div>
            <div className="flex items-center gap-2 text-muted-foreground">
              <MapPin className="w-4 h-4 text-primary" />
              <span className="text-sm">Colombo, Sri Lanka</span>
            </div>
          </div>

          <div className="flex items-center justify-center gap-4">
            <Button asChild>
              <a href="#contact">Get in Touch</a>
            </Button>
            <Button variant="outline" asChild>
              <a href="#projects">View Projects</a>
            </Button>
            <div className="flex items-center gap-2 ml-4">
              <a
                href="https://linkedin.com/in/tharsiegan"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-full bg-muted hover:bg-primary/10 hover:text-primary transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-5 h-5" />
              </a>
              <a
                href="https://github.com/tharsie"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-full bg-muted hover:bg-primary/10 hover:text-primary transition-colors"
                aria-label="GitHub"
              >
                <Github className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
