import { ExternalLink } from '@/components/ExternalLink'
import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'
import { Separator } from '@/components/ui/separator'
import { ECOSYSTEM_SECTIONS } from '@/content/ecosystem'

export function EcosystemPage() {
  return (
    <div className="space-y-10">
      <header className="space-y-2">
        <h1 className="text-3xl font-semibold tracking-tight">
          BC ecosystem &amp; resources
        </h1>
        <p className="text-muted-foreground max-w-3xl text-sm leading-relaxed md:text-base">
          Curated authority and community links for continued learning. Opening a
          link leaves this static site; review each destination’s privacy
          notice.
        </p>
      </header>

      {ECOSYSTEM_SECTIONS.map((section, i) => (
        <section key={section.id} aria-labelledby={`eco-${section.id}`}>
          {i > 0 ? <Separator className="mb-8" /> : null}
          <h2 id={`eco-${section.id}`} className="mb-2 text-xl font-semibold">
            {section.title}
          </h2>
          <p className="text-muted-foreground mb-4 max-w-3xl text-sm">
            {section.description}
          </p>
          <ul className="grid gap-4 md:grid-cols-2">
            {section.links.map((l) => (
              <li key={l.href}>
                <Card className="h-full">
                  <CardHeader>
                    <CardTitle className="text-base leading-snug">
                      <ExternalLink href={l.href}>{l.label}</ExternalLink>
                    </CardTitle>
                    <CardDescription>{l.description}</CardDescription>
                  </CardHeader>
                </Card>
              </li>
            ))}
          </ul>
        </section>
      ))}
    </div>
  )
}
