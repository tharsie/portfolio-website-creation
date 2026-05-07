import { Card, CardContent } from "@/components/ui/card"
import { User, Target, Heart } from "lucide-react"

export function AboutSection() {
  return (
    <section id="about" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-4 text-foreground">
            About Me
          </h2>
          <div className="w-20 h-1 bg-primary mx-auto mb-12 rounded-full" />

          <div className="grid md:grid-cols-3 gap-6 mb-12">
            <Card className="bg-card border-border hover:shadow-lg transition-shadow">
              <CardContent className="p-6 text-center">
                <div className="w-12 h-12 mx-auto mb-4 rounded-full bg-primary/10 flex items-center justify-center">
                  <User className="w-6 h-6 text-primary" />
                </div>
                <h3 className="font-semibold text-foreground mb-2">Who I Am</h3>
                <p className="text-sm text-muted-foreground">
                  A dedicated Software Engineering undergraduate at SLIIT, currently in Year 4, Semester 2.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-card border-border hover:shadow-lg transition-shadow">
              <CardContent className="p-6 text-center">
                <div className="w-12 h-12 mx-auto mb-4 rounded-full bg-primary/10 flex items-center justify-center">
                  <Target className="w-6 h-6 text-primary" />
                </div>
                <h3 className="font-semibold text-foreground mb-2">My Goal</h3>
                <p className="text-sm text-muted-foreground">
                  To become a skilled Software Engineer, building scalable and user-focused applications.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-card border-border hover:shadow-lg transition-shadow">
              <CardContent className="p-6 text-center">
                <div className="w-12 h-12 mx-auto mb-4 rounded-full bg-primary/10 flex items-center justify-center">
                  <Heart className="w-6 h-6 text-primary" />
                </div>
                <h3 className="font-semibold text-foreground mb-2">My Passion</h3>
                <p className="text-sm text-muted-foreground">
                  Full-stack development, mobile app development, and creating impactful digital solutions.
                </p>
              </CardContent>
            </Card>
          </div>

          <Card className="bg-card border-border">
            <CardContent className="p-8">
              <h3 className="text-xl font-semibold text-foreground mb-4">Introduction</h3>
              <div className="space-y-4 text-muted-foreground leading-relaxed">
                <p>
                  I am Selvarajah Tharsiegan, a passionate Software Engineering undergraduate pursuing my 
                  BSc (Hons) in Information Technology at the Sri Lanka Institute of Information Technology (SLIIT). 
                  Currently in my final year, I have developed a strong foundation in software development through 
                  both academic learning and practical industry experience.
                </p>
                <p>
                  My journey in technology began during my school days at Jaffna Hindu College, where I studied 
                  Combined Mathematics in the Physical Science stream. This analytical background has helped me 
                  approach programming challenges with logical thinking and problem-solving skills.
                </p>
                <p>
                  I am currently working as a Software Engineer Intern at Creo360, where I contribute to the 
                  development of Airentosoft, a comprehensive car rental management system. This experience has 
                  given me valuable exposure to real-world product engineering, agile methodologies, and 
                  collaborative development practices.
                </p>
                <p>
                  My interests span across information technology, software development, full-stack development, 
                  and mobile app development. I am committed to continuous learning and staying updated with 
                  the latest technologies and industry practices.
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}
