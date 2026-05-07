import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { BookOpen, MessageSquare, Mail, Presentation, Phone, FileText, Users, PenTool } from "lucide-react"

const reflections = [
  {
    title: "Business Writing",
    icon: PenTool,
    content: "Through the PPW module, I learned the importance of clear, concise, and professional business writing. I now understand how to structure business documents effectively, use appropriate tone, and communicate complex ideas in a straightforward manner. This skill is essential for writing project documentation, proposals, and professional correspondence.",
  },
  {
    title: "Formal Email Writing",
    icon: Mail,
    content: "I gained valuable insights into crafting professional emails with proper structure, including appropriate greetings, clear subject lines, and professional closings. Understanding email etiquette has improved my workplace communication significantly, helping me convey messages effectively while maintaining professionalism.",
  },
  {
    title: "Memo Writing",
    icon: FileText,
    content: "Learning to write effective memos taught me how to communicate internal messages concisely. I now understand the standard memo format, including the header, body, and how to present information in a scannable manner for quick comprehension in a professional setting.",
  },
  {
    title: "Presentation Skills",
    icon: Presentation,
    content: "The module enhanced my ability to create and deliver impactful presentations. I learned about structuring content logically, using visual aids effectively, managing presentation anxiety, and engaging with the audience. These skills have been invaluable for academic and professional presentations.",
  },
  {
    title: "Interview Preparation",
    icon: Users,
    content: "PPW provided comprehensive guidance on interview preparation, including researching companies, preparing for common questions, dressing appropriately, and following up after interviews. I learned techniques for presenting myself confidently and articulating my skills and experiences effectively.",
  },
  {
    title: "Non-verbal Communication & Body Language",
    icon: MessageSquare,
    content: "I discovered the significant role non-verbal cues play in communication. Understanding eye contact, posture, gestures, and facial expressions has helped me become more aware of how I present myself and how to read others better in professional interactions.",
  },
  {
    title: "Telephone Etiquette",
    icon: Phone,
    content: "The module covered professional telephone communication, including proper greeting techniques, maintaining a professional tone, active listening, and handling difficult conversations. These skills are essential for client communication and maintaining professional relationships.",
  },
  {
    title: "Report Writing",
    icon: BookOpen,
    content: "I developed skills in writing comprehensive technical and business reports with proper structure, including executive summaries, methodology sections, findings, and recommendations. This knowledge is particularly valuable for documenting project outcomes and presenting research findings.",
  },
]

export function ReflectiveJournalSection() {
  return (
    <section id="reflections" className="py-20">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-4 text-foreground">
            Reflective Journal
          </h2>
          <p className="text-center text-muted-foreground mb-4 max-w-2xl mx-auto">
            Reflections on what I learned in IT4070 - Preparation for Professional World (PPW)
          </p>
          <div className="w-20 h-1 bg-primary mx-auto mb-12 rounded-full" />

          <Card className="bg-card border-border mb-8">
            <CardContent className="p-8">
              <h3 className="text-xl font-semibold text-foreground mb-4">Overview</h3>
              <p className="text-muted-foreground leading-relaxed">
                The IT4070 Preparation for Professional World module has been instrumental in preparing me 
                for the transition from academic life to the professional workplace. Through various topics 
                covered in this course, I have developed essential soft skills that complement my technical 
                abilities. The module emphasized the importance of effective communication, professional 
                conduct, and workplace readiness - skills that are crucial for success in the IT industry.
              </p>
            </CardContent>
          </Card>

          <div className="grid md:grid-cols-2 gap-6">
            {reflections.map((reflection, index) => (
              <Card key={index} className="bg-card border-border hover:shadow-lg transition-shadow">
                <CardHeader className="pb-4">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                      <reflection.icon className="w-5 h-5 text-primary" />
                    </div>
                    <CardTitle className="text-lg text-foreground">{reflection.title}</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {reflection.content}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>

          <Card className="bg-card border-border mt-8">
            <CardContent className="p-8">
              <h3 className="text-xl font-semibold text-foreground mb-4">Conclusion</h3>
              <p className="text-muted-foreground leading-relaxed">
                The PPW module has significantly contributed to my professional development. The combination 
                of communication skills, workplace etiquette, and career preparation techniques has given me 
                confidence to enter the professional world. I now understand that technical skills alone are 
                not sufficient for career success - soft skills and professional conduct are equally important. 
                I am grateful for the practical insights gained from this module and am committed to applying 
                these learnings throughout my career journey.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}
