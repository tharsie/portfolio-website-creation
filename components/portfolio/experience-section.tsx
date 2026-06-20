import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Briefcase, Calendar, MapPin } from "lucide-react"

export function ExperienceSection() {
  return (
    <section id="experience" className="py-20">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-4 text-foreground">
            Work Experience
          </h2>
          <div className="w-20 h-1 bg-primary mx-auto mb-12 rounded-full" />

          <div className="space-y-6">
            <Card className="bg-card border-border hover:shadow-lg transition-shadow">
              <CardHeader className="pb-4">
                <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
                      <Briefcase className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <CardTitle className="text-xl text-foreground">Software Engineer Intern</CardTitle>
                      <p className="text-primary font-medium mt-1">Creo360 (Pvt) Ltd</p>
                    </div>
                  </div>
                  <div className="flex flex-col gap-2 text-sm text-muted-foreground md:text-right">
                    <div className="flex items-center gap-2 md:justify-end">
                      <Calendar className="w-4 h-4" />
                      <span>Feb 2025 - Present</span>
                    </div>
                    <div className="flex items-center gap-2 md:justify-end">
                      <MapPin className="w-4 h-4" />
                      <span>Colombo, Sri Lanka (On Site)</span>
                    </div>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3 text-muted-foreground mb-6">
                  <li className="flex items-start gap-3">
                    <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2 shrink-0" />
                    <span>Contributing to the development of Airentosoft, a full-featured car rental management system used by rental agencies</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2 shrink-0" />
                    <span>Integrated backend APIs using ASP.NET Core, Node.js/Express, and MSSQL with stored procedures for optimized data operations</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2 shrink-0" />
                    <span>Built and maintained key frontend components using React with TypeScript and MUI to improve booking flow and user experience</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2 shrink-0" />
                    <span>Worked on the custom Reservation plugin using React and ASP.NET to manage vehicle bookings with dynamic form validation and API integration</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2 shrink-0" />
                    <span>Developed and maintained the Airentosoft portfolio website using Next.js to showcase product features and improve client engagement</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2 shrink-0" />
                    <span>Collaborated with the team in an agile environment using Azure DevOps for Git version control and Jira for issue tracking</span>
                  </li>
                </ul>

                <div className="flex flex-wrap gap-2">
                  <Badge variant="secondary">React.js</Badge>
                  <Badge variant="secondary">Next.js</Badge>
                  <Badge variant="secondary">ASP.NET Core</Badge>
                  <Badge variant="secondary">Node.js</Badge>
                  <Badge variant="secondary">Express.js</Badge>
                  <Badge variant="secondary">MSSQL</Badge>
                  <Badge variant="secondary">TypeScript</Badge>
                  <Badge variant="secondary">Tailwind CSS</Badge>
                  <Badge variant="secondary">MUI</Badge>
                  <Badge variant="secondary">Git</Badge>
                  <Badge variant="secondary">REST APIs</Badge>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-card border-border hover:shadow-lg transition-shadow">
              <CardHeader className="pb-4">
                <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
                      <Briefcase className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <CardTitle className="text-xl text-foreground">Software Engineer Intern</CardTitle>
                      <p className="text-primary font-medium mt-1">Navicode</p>
                    </div>
                  </div>
                  <div className="flex flex-col gap-2 text-sm text-muted-foreground md:text-right">
                    <div className="flex items-center gap-2 md:justify-end">
                      <Calendar className="w-4 h-4" />
                      <span>Jan 2025 - Jul 2025</span>
                    </div>
                    <div className="flex items-center gap-2 md:justify-end">
                      <MapPin className="w-4 h-4" />
                      <span>Jaffna, Sri Lanka</span>
                    </div>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-6">
                  Strong understanding of software development concepts with hands-on experience in full-stack web development. Proficient in JavaScript, Spring boot with experience in React.js, Next.js, and Node.js (Express.js).
                </p>

                <div className="flex flex-wrap gap-2">
                  <Badge variant="secondary">JavaScript</Badge>
                  <Badge variant="secondary">React.js</Badge>
                  <Badge variant="secondary">Next.js</Badge>
                  <Badge variant="secondary">Node.js</Badge>
                  <Badge variant="secondary">Express.js</Badge>
                  <Badge variant="secondary">Spring Boot</Badge>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  )
}
