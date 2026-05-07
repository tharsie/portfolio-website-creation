import { Heart } from "lucide-react"

export function Footer() {
  return (
    <footer className="py-8 border-t border-border bg-card">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-muted-foreground text-sm mb-2">
            Yours Sincerely,
          </p>
          <p className="text-foreground font-semibold text-lg mb-4">
            Selvarajah Tharsiegan
          </p>
          <div className="flex items-center justify-center gap-1 text-sm text-muted-foreground">
            <span>Made with</span>
            <Heart className="w-4 h-4 text-primary fill-primary" />
            <span>for IT4070 PPW Portfolio</span>
          </div>
          <p className="text-xs text-muted-foreground mt-2">
            &copy; {new Date().getFullYear()} Selvarajah Tharsiegan. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}
