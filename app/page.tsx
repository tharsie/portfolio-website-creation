'use client'

import { DocumentHeader } from "@/components/portfolio/document-header"
import { SidebarNav } from "@/components/portfolio/sidebar-nav"
import { ProfileSection } from "@/components/portfolio/profile-section"
import { ProfessionalSummary } from "@/components/portfolio/professional-summary"
import { WorkExperience } from "@/components/portfolio/work-experience"
import { ProjectsHighlights } from "@/components/portfolio/projects-highlights"
import { SkillsHighlights } from "@/components/portfolio/skills-highlights"
import { EducationHighlights } from "@/components/portfolio/education-highlights"
import { ReflectiveJournal } from "@/components/portfolio/reflective-journal"
import { CareerDevelopment } from "@/components/portfolio/career-development"
import { CertificatesHighlights } from "@/components/portfolio/certificates-highlights"
import { References } from "@/components/portfolio/references"

export default function Portfolio() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Print Styles */}
      <style>{`
        @media print {
          body { margin: 0; padding: 0; }
          .no-print { display: none !important; }
          .page-break { page-break-after: always; }
          a { text-decoration: none; color: #0066cc; }
        }
      `}</style>

      <div className="flex flex-col lg:flex-row min-h-screen">
        {/* Sidebar Navigation - Hidden on Print */}
        <div className="no-print lg:w-64 bg-card border-r border-border p-6 sticky top-0 h-screen overflow-y-auto">
          <SidebarNav />
        </div>

        {/* Main Content */}
        <main className="flex-1 max-w-4xl mx-auto p-6 lg:p-10">
          {/* Document Header */}
          <DocumentHeader />

          {/* Profile Section */}
          <section id="profile" className="mb-8 pb-8 border-b border-border">
            <ProfileSection />
          </section>

          {/* Professional Summary */}
          <section id="summary" className="mb-8 pb-8 border-b border-border">
            <ProfessionalSummary />
          </section>

          {/* Work Experience */}
          <section id="experience" className="mb-8 pb-8 border-b border-border">
            <WorkExperience />
          </section>

          {/* Key Projects */}
          <section id="projects" className="mb-8 pb-8 border-b border-border">
            <ProjectsHighlights />
          </section>

          {/* Technical Skills */}
          <section id="skills" className="mb-8 pb-8 border-b border-border">
            <SkillsHighlights />
          </section>

          {/* Education */}
          <section id="education" className="mb-8 pb-8 border-b border-border">
            <EducationHighlights />
          </section>

          {/* Reflective Journal */}
          <section id="reflections" className="mb-8 pb-8 border-b border-border page-break">
            <ReflectiveJournal />
          </section>

          {/* Career Development Plan */}
          <section id="career-plan" className="mb-8 pb-8 border-b border-border">
            <CareerDevelopment />
          </section>

          {/* Certificates */}
          <section id="certificates" className="mb-8 pb-8 border-b border-border">
            <CertificatesHighlights />
          </section>

          {/* References */}
          <section id="references" className="mb-12">
            <References />
          </section>

          {/* Print Button */}
          <div className="no-print mt-12 flex gap-4 justify-center">
            <button
              onClick={() => window.print()}
              className="px-6 py-2 bg-primary text-primary-foreground rounded-lg hover:opacity-90 transition"
            >
              Print Portfolio
            </button>
            <a
              href="#"
              download="Tharsiegan_Portfolio.pdf"
              className="px-6 py-2 bg-secondary text-secondary-foreground rounded-lg hover:opacity-90 transition"
            >
              Download PDF
            </a>
          </div>
        </main>
      </div>
    </div>
  )
}
