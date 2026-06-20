import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ExternalLink, Folder } from "lucide-react"

const projects = [
  {
    title: "Hotel Management System - Transport Module",
    description: "A Transport Management System subsystem of the Hotel Management System developed using the MERN stack. It facilitates the management of guest transport services, allowing the hotel to schedule and track transport options such as airport pickups and local tours.",
    technologies: ["MongoDB", "Express.js", "React", "Node.js"],
    period: "2022 September - Present",
  },
  {
    title: "E-Commerce System with Sales Forecasting",
    description: "A full-featured online dress shop developed with user and admin functionality. Customers can browse and purchase products, while shop owners manage inventory, apply discounts, and view sales forecasts using AI/ML models.",
    technologies: ["React.js", "Node.js", "MongoDB", "Python (AI/ML)", "Tailwind CSS"],
    period: "Academic Project",
  },
  {
    title: "Social Media Application",
    description: "Social networking app built with React and Spring Boot, featuring posts, likes, comments, and shares, with MongoDB for scalable data storage.",
    technologies: ["React.js", "Spring Boot", "MongoDB"],
    period: "Academic Project",
  },
  {
    title: "TopCoin Mobile App",
    description: "Digital transactions and rewards app developed in Flutter and Dart as a NaviCode project. Features real-time balance viewing and points redemption capabilities for users.",
    technologies: ["Flutter", "Dart"],
    period: "NaviCode Project",
  },
  {
    title: "Identity Issuing System",
    description: "Streamlines ID issuance by allowing users to submit requests, track ID status, and receive notifications. Provides an efficient digital platform for identity management.",
    technologies: ["PHP", "HTML", "CSS", "JavaScript", "MySQL"],
    period: "Academic Project",
  },
  {
    title: "Online Customer Care System",
    description: "A web application built to improve customer support. It enables users to submit queries, access FAQs, and communicate with support staff through chat or ticketing systems.",
    technologies: ["HTML", "CSS", "JavaScript", "Java"],
    period: "OOP Project",
  },
  {
    title: "Blood Donation System",
    description: "A web-based platform to streamline the process of blood donation. It allows donors to register, update their profiles, and hospitals to request blood based on type and availability.",
    technologies: ["HTML", "CSS", "JavaScript", "PHP", "MySQL"],
    period: "IWT Project",
  },
  {
    title: "TODO Mobile Application",
    description: "A mobile application developed in Android Studio with Kotlin and SQLite, offering an intuitive interface for managing tasks, allowing users to add, edit, and delete tasks with local data storage.",
    technologies: ["Kotlin", "Android Studio", "SQLite"],
    period: "MAD Project",
  },
]

export function ProjectsSection() {
  return (
    <section id="projects" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-4 text-foreground">
            Projects
          </h2>
          <div className="w-20 h-1 bg-primary mx-auto mb-12 rounded-full" />

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects.map((project, index) => (
              <Card key={index} className="bg-card border-border hover:shadow-lg transition-all hover:-translate-y-1 group">
                <CardHeader className="pb-4">
                  <div className="flex items-start justify-between gap-4">
                    <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
                      <Folder className="w-5 h-5 text-primary" />
                    </div>
                    <ExternalLink className="w-5 h-5 text-muted-foreground group-hover:text-primary transition-colors" />
                  </div>
                  <CardTitle className="text-lg text-foreground mt-4">{project.title}</CardTitle>
                  <p className="text-xs text-primary font-medium">{project.period}</p>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground mb-4 line-clamp-4">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech, techIndex) => (
                      <Badge key={techIndex} variant="outline" className="text-xs">
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
