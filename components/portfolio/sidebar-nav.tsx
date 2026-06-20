'use client'

import { useState } from 'react'
import Link from 'next/link'
import { ChevronDown } from 'lucide-react'

const navItems = [
  { label: 'Profile', href: '#profile' },
  { label: 'Summary', href: '#summary' },
  { label: 'Experience', href: '#experience' },
  { label: 'Projects', href: '#projects' },
  { label: 'Skills', href: '#skills' },
  { label: 'Education', href: '#education' },
  { label: 'Reflections', href: '#reflections' },
  { label: 'Career Plan', href: '#career-plan' },
  { label: 'Certificates', href: '#certificates' },
  { label: 'References', href: '#references' },
]

export function SidebarNav() {
  const [activeSection, setActiveSection] = useState('profile')

  return (
    <nav className="space-y-1">
      <h2 className="text-lg font-bold text-primary mb-6">Navigation</h2>
      <ul className="space-y-2">
        {navItems.map((item) => (
          <li key={item.href}>
            <Link
              href={item.href}
              onClick={() => setActiveSection(item.href)}
              className={`block px-4 py-2 rounded-lg transition ${
                activeSection === item.href
                  ? 'bg-primary text-primary-foreground font-semibold'
                  : 'text-foreground hover:bg-secondary'
              }`}
            >
              {item.label}
            </Link>
          </li>
        ))}
      </ul>

      {/* Quick Stats */}
      <div className="mt-12 pt-8 border-t border-border">
        <h3 className="font-semibold text-primary mb-4">Quick Info</h3>
        <div className="space-y-3 text-sm">
          <div>
            <p className="font-medium text-foreground">Education</p>
            <p className="text-muted-foreground">SLIIT, B.Sc IT</p>
          </div>
          <div>
            <p className="font-medium text-foreground">Year</p>
            <p className="text-muted-foreground">3rd Year</p>
          </div>
          <div>
            <p className="font-medium text-foreground">Location</p>
            <p className="text-muted-foreground">Colombo, Sri Lanka</p>
          </div>
        </div>
      </div>
    </nav>
  )
}
