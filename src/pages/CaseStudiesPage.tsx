import { CASE_STUDIES } from '@/content/caseStudies'
import { Badge } from '@/components/ui/badge'
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'
export function CaseStudiesPage() {
  return (
    <div className="space-y-8">
      <header className="space-y-2">
        <h1 className="text-3xl font-semibold tracking-tight">Case studies</h1>
        <p className="text-muted-foreground max-w-3xl text-sm leading-relaxed md:text-base">
          Synthetic, de-identified narratives grounded in BC-relevant themes
          (coastal/rural practice, urban specialty care, Indigenous cultural
          safety, and workforce equity). For facilitated teaching only, not direct
          patient care decisions.
        </p>
      </header>

      <ul className="space-y-4">
        {CASE_STUDIES.map((c) => (
          <li key={c.id}>
            <Card>
              <CardHeader>
                <div className="flex flex-wrap items-start justify-between gap-2">
                  <div>
                    <CardTitle className="text-lg">{c.title}</CardTitle>
                    <CardDescription className="mt-1">{c.setting}</CardDescription>
                  </div>
                  <Badge variant="secondary" className="shrink-0">
                    Teaching scenario
                  </Badge>
                </div>
              </CardHeader>
              <CardContent className="space-y-4 text-sm leading-relaxed">
                <p>{c.synopsis}</p>
                <p className="text-foreground font-medium">Tension</p>
                <p className="text-muted-foreground">{c.tension}</p>
                <div className="flex flex-wrap gap-2">
                  {c.frameworks.map((f) => (
                    <Badge key={f} variant="outline" className="font-normal">
                      {f}
                    </Badge>
                  ))}
                </div>
                <details className="border-border bg-muted/30 rounded-lg border">
                  <summary className="cursor-pointer px-3 py-2 text-sm font-medium">
                    Reflection prompts
                  </summary>
                  <ul className="border-border bg-card list-inside list-disc space-y-2 border-t p-4 text-sm">
                    {c.reflection.map((q) => (
                      <li key={q}>{q}</li>
                    ))}
                  </ul>
                </details>
              </CardContent>
            </Card>
          </li>
        ))}
      </ul>

      <p className="text-muted-foreground text-center text-xs md:text-left">
        Inspired by pedagogical approaches in the course research notes (e.g.,
        BCMJ-style tensions, cultural safety vs. competence, ITP equity). Final
        clinical scenarios should be co-reviewed with Indigenous health leads
        where possible.
      </p>
    </div>
  )
}
