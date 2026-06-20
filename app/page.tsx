"use client"

import { useState } from "react"
import { Navigation } from "@/components/portfolio/navigation"
import { HeroSection } from "@/components/portfolio/hero-section"
import { AboutSection } from "@/components/portfolio/about-section"
import { ExperienceSection } from "@/components/portfolio/experience-section"
import { ProjectsSection } from "@/components/portfolio/projects-section"
import { SkillsSection } from "@/components/portfolio/skills-section"
import { EducationSection } from "@/components/portfolio/education-section"
import { ReflectiveJournalSection } from "@/components/portfolio/reflective-journal-section"
import { CareerPlanSection } from "@/components/portfolio/career-plan-section"
import { CertificatesSection } from "@/components/portfolio/certificates-section"
import { CVSection } from "@/components/portfolio/cv-section"
import { ContactSection } from "@/components/portfolio/contact-section"
import { Footer } from "@/components/portfolio/footer"

export default function Portfolio() {
  const [activeSection, setActiveSection] = useState("home")

  return (
    <div className="min-h-screen bg-background">
      <Navigation activeSection={activeSection} setActiveSection={setActiveSection} />
      <main>
        <HeroSection />
        <AboutSection />
        <ExperienceSection />
        <ProjectsSection />
        <SkillsSection />
        <EducationSection />
        <ReflectiveJournalSection />
        <CareerPlanSection />
        <CertificatesSection />
        <CVSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  )
}
