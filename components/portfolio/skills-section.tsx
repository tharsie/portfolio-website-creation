import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Code, Layout, Database, Wrench, Users } from "lucide-react"

const skillCategories = [
  {
    title: "Programming Languages",
    icon: Code,
    skills: ["JavaScript", "C#", "C", "C++", "Java", "TypeScript"],
  },
  {
    title: "Frontend",
    icon: Layout,
    skills: ["React.js", "Next.js", "HTML", "CSS", "MUI", "Tailwind CSS"],
  },
  {
    title: "Backend",
    icon: Database,
    skills: ["Node.js", "Express.js", "ASP.NET Core", "Spring Boot"],
  },
  {
    title: "Database",
    icon: Database,
    skills: ["MySQL", "MongoDB", "MSSQL", "SQLite"],
  },
  {
    title: "Tools & Technologies",
    icon: Wrench,
    skills: ["VS Code", "Android Studio", "Eclipse", "Visual Studio", "MSSMS", "Postman", "Git", "Azure DevOps", "Jira"],
  },
]

const softSkills = [
  "Problem-solving and analytical thinking",
  "Time management and task prioritization",
  "Team collaboration and communication",
  "Fast learner and adaptable to new technologies",
  "Attention to detail and code quality",
  "Critical thinking and decision-making",
]

export function SkillsSection() {
  return (
    <section id="skills" className="py-20">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-4 text-foreground">
            Skills
          </h2>
          <div className="w-20 h-1 bg-primary mx-auto mb-12 rounded-full" />

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
            {skillCategories.map((category, index) => (
              <Card key={index} className="bg-card border-border hover:shadow-lg transition-shadow">
                <CardHeader className="pb-4">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                      <category.icon className="w-5 h-5 text-primary" />
                    </div>
                    <CardTitle className="text-lg text-foreground">{category.title}</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2">
                    {category.skills.map((skill, skillIndex) => (
                      <Badge key={skillIndex} variant="secondary">
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}

            <Card className="bg-card border-border hover:shadow-lg transition-shadow md:col-span-2 lg:col-span-1">
              <CardHeader className="pb-4">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                    <Users className="w-5 h-5 text-primary" />
                  </div>
                  <CardTitle className="text-lg text-foreground">Soft Skills</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  {softSkills.map((skill, index) => (
                    <li key={index} className="flex items-start gap-2 text-sm text-muted-foreground">
                      <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2 shrink-0" />
                      <span>{skill}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  )
}
