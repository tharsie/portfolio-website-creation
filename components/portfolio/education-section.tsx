import { Card, CardContent } from "@/components/ui/card"
import { GraduationCap, School, Calendar } from "lucide-react"

export function EducationSection() {
  return (
    <section id="education" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-4 text-foreground">
            Education
          </h2>
          <div className="w-20 h-1 bg-primary mx-auto mb-12 rounded-full" />

          <div className="space-y-6">
            <Card className="bg-card border-border hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <div className="flex flex-col md:flex-row md:items-start gap-4">
                  <div className="w-14 h-14 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
                    <GraduationCap className="w-7 h-7 text-primary" />
                  </div>
                  <div className="flex-1">
                    <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-2 mb-2">
                      <div>
                        <h3 className="text-xl font-semibold text-foreground">
                          BSc (Hons) in Information Technology
                        </h3>
                        <p className="text-primary font-medium">
                          Specializing in Information Technology
                        </p>
                      </div>
                      <div className="flex items-center gap-2 text-sm text-muted-foreground">
                        <Calendar className="w-4 h-4" />
                        <span>2021 - Present</span>
                      </div>
                    </div>
                    <p className="text-muted-foreground">
                      Sri Lanka Institute of Information Technology (SLIIT) - Malabe
                    </p>
                    <p className="text-sm text-muted-foreground mt-2">
                      Currently in Year 4, Semester 2
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-card border-border hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <div className="flex flex-col md:flex-row md:items-start gap-4">
                  <div className="w-14 h-14 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
                    <School className="w-7 h-7 text-primary" />
                  </div>
                  <div className="flex-1">
                    <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-2 mb-2">
                      <div>
                        <h3 className="text-xl font-semibold text-foreground">
                          GCE Advanced Level
                        </h3>
                        <p className="text-primary font-medium">
                          Physical Science Stream
                        </p>
                      </div>
                      <div className="flex items-center gap-2 text-sm text-muted-foreground">
                        <Calendar className="w-4 h-4" />
                        <span>2017 - 2020</span>
                      </div>
                    </div>
                    <p className="text-muted-foreground">
                      Jaffna Hindu College
                    </p>
                    <p className="text-sm text-muted-foreground mt-2">
                      Combined Mathematics | Batch: 2020
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  )
}
