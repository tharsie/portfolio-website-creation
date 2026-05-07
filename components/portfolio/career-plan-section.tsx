import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Target, Clock, Calendar, Rocket } from "lucide-react"

const shortTermGoals = [
  "Complete final year successfully with a strong GPA",
  "Improve full-stack development skills (React, Node.js, ASP.NET)",
  "Strengthen problem-solving and data structures knowledge",
  "Build portfolio projects showcasing technical abilities",
  "Apply for software engineering internship/entry-level roles",
  "Obtain relevant certifications in web development",
]

const mediumTermGoals = [
  "Gain industry experience as a junior software engineer",
  "Improve expertise in React, Node.js, databases, and cloud technologies",
  "Learn software architecture patterns and best practices",
  "Contribute to real-world development teams and projects",
  "Improve professional communication and teamwork skills",
  "Build a strong professional network in the IT industry",
]

const longTermGoals = [
  "Become a skilled full-stack software engineer",
  "Work on scalable and user-focused software systems",
  "Take leadership responsibilities in software projects",
  "Continue learning new technologies and industry practices",
  "Contribute to open-source projects",
  "Mentor junior developers and give back to the community",
]

export function CareerPlanSection() {
  return (
    <section id="career-plan" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-4 text-foreground">
            Career Development Plan
          </h2>
          <p className="text-center text-muted-foreground mb-4 max-w-2xl mx-auto">
            My roadmap to becoming a successful Software Engineer
          </p>
          <div className="w-20 h-1 bg-primary mx-auto mb-12 rounded-full" />

          <Card className="bg-card border-border mb-8">
            <CardContent className="p-8">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                  <Target className="w-5 h-5 text-primary" />
                </div>
                <h3 className="text-xl font-semibold text-foreground">Career Goal</h3>
              </div>
              <p className="text-muted-foreground leading-relaxed">
                My ultimate career goal is to become a skilled and versatile Software Engineer who can 
                design, develop, and maintain high-quality software solutions. I aim to work on projects 
                that make a positive impact on users and contribute to technological advancement. I am 
                committed to continuous learning and professional growth to stay relevant in the 
                ever-evolving field of software development.
              </p>
            </CardContent>
          </Card>

          <div className="grid md:grid-cols-3 gap-6">
            <Card className="bg-card border-border hover:shadow-lg transition-shadow">
              <CardHeader className="pb-4">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                    <Clock className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <CardTitle className="text-lg text-foreground">Short-term Goals</CardTitle>
                    <p className="text-xs text-muted-foreground">0-1 Year</p>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3">
                  {shortTermGoals.map((goal, index) => (
                    <li key={index} className="flex items-start gap-2 text-sm text-muted-foreground">
                      <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2 shrink-0" />
                      <span>{goal}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>

            <Card className="bg-card border-border hover:shadow-lg transition-shadow">
              <CardHeader className="pb-4">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                    <Calendar className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <CardTitle className="text-lg text-foreground">Medium-term Goals</CardTitle>
                    <p className="text-xs text-muted-foreground">1-3 Years</p>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3">
                  {mediumTermGoals.map((goal, index) => (
                    <li key={index} className="flex items-start gap-2 text-sm text-muted-foreground">
                      <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2 shrink-0" />
                      <span>{goal}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>

            <Card className="bg-card border-border hover:shadow-lg transition-shadow">
              <CardHeader className="pb-4">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                    <Rocket className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <CardTitle className="text-lg text-foreground">Long-term Goals</CardTitle>
                    <p className="text-xs text-muted-foreground">3-5+ Years</p>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3">
                  {longTermGoals.map((goal, index) => (
                    <li key={index} className="flex items-start gap-2 text-sm text-muted-foreground">
                      <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2 shrink-0" />
                      <span>{goal}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          </div>

          <Card className="bg-card border-border mt-8">
            <CardContent className="p-8">
              <h3 className="text-xl font-semibold text-foreground mb-4">Action Plan</h3>
              <p className="text-muted-foreground leading-relaxed mb-4">
                To achieve these goals, I am committed to the following actions:
              </p>
              <ul className="space-y-2 text-muted-foreground">
                <li className="flex items-start gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2 shrink-0" />
                  <span>Dedicate time daily to coding practice and learning new technologies</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2 shrink-0" />
                  <span>Complete online courses and certifications to validate my skills</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2 shrink-0" />
                  <span>Build personal projects to showcase my abilities</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2 shrink-0" />
                  <span>Network with professionals through LinkedIn and tech events</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2 shrink-0" />
                  <span>Seek mentorship and guidance from experienced developers</span>
                </li>
              </ul>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}
