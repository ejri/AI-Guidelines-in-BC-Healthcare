import { Link } from '@tanstack/react-router'
import { ChevronDown, Globe2, Shield } from 'lucide-react'

import { ExternalLink } from '@/components/ExternalLink'
import { Button } from '@/components/ui/button'
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'
import { Separator } from '@/components/ui/separator'
import {
  FIVE_DIMENSIONS,
  GLOBAL_JURISDICTIONS,
} from '@/content/governanceComparison'
import { cn } from '@/lib/utils'

export function GlobalComparisonPage() {
  return (
    <div className="mx-auto max-w-3xl space-y-10">
      <header className="space-y-4">
        <div className="flex items-start gap-3">
          <span className="bg-primary/12 text-primary ring-border mt-1 inline-flex size-11 shrink-0 items-center justify-center rounded-xl ring-1">
            <Globe2 className="size-6" aria-hidden />
          </span>
          <div className="min-w-0 space-y-2">
            <h1 className="text-balance text-3xl font-semibold tracking-tight">
              How BC compares globally
            </h1>
            <p className="text-muted-foreground text-sm leading-relaxed">
              Other jurisdictions layer statutes, commissioners, regulators, and college
              rules differently. Scan the columns first, then open each region&apos;s issuer
              links when you need exact wording.
            </p>
          </div>
        </div>

        <div className="border-border bg-muted/25 flex flex-wrap items-center gap-3 rounded-xl border px-4 py-3 text-sm">
          <span className="text-muted-foreground shrink">
            Bringing this back home? BC-aligned links below.
          </span>
          <Button
            nativeButton={false}
            variant="outline"
            size="sm"
            className="ml-auto shrink-0"
            render={<Link to="/guidelines" />}
          >
            CPSBC hub
          </Button>
          <Button
            nativeButton={false}
            variant="secondary"
            size="sm"
            className="shrink-0"
            render={<Link to="/checklists" />}
          >
            Tools
          </Button>
        </div>
      </header>

      <section aria-labelledby="glance-heading">
        <h2 id="glance-heading" className="mb-3 text-lg font-semibold tracking-tight">
          At a glance
        </h2>
        <p className="text-muted-foreground mb-4 text-xs">
          Tap a jurisdiction below, or read the table once for orientation.
        </p>
        <div className="overflow-x-auto rounded-xl border shadow-sm">
          <table className="w-full min-w-[280px] text-left text-sm md:min-w-full">
            <caption className="sr-only">
              Regions and their governance headline in one line each
            </caption>
            <thead>
              <tr className="bg-muted/50 border-b text-xs tracking-wide uppercase">
                <th className="text-foreground px-4 py-3 font-semibold">Region</th>
                <th className="text-foreground px-4 py-3 font-semibold">
                  Plain-language headline
                </th>
              </tr>
            </thead>
            <tbody>
              {GLOBAL_JURISDICTIONS.map((j, idx) => (
                <tr
                  key={j.id}
                  className={cn(
                    'border-border hover:bg-muted/30 border-b transition-colors last:border-b-0',
                    idx % 2 === 0 ? 'bg-card' : 'bg-muted/15',
                  )}
                >
                  <td className="text-foreground px-4 py-3 align-top font-medium">
                    {j.label}
                  </td>
                  <td className="text-muted-foreground px-4 py-3 align-top leading-snug">
                    {j.headline}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      <Separator />

      <section aria-labelledby="dimensions-heading" className="space-y-4">
        <div className="space-y-2">
          <h2 id="dimensions-heading" className="text-lg font-semibold tracking-tight">
            Five ways we line regions up
          </h2>
          <p className="text-muted-foreground text-sm leading-relaxed">
            Each card names one axis reviewers use when reading foreign frameworks side by
            side. None of them replace statute text or college advice on their own.
          </p>
        </div>
        <ul className="grid gap-4 sm:grid-cols-2">
          {FIVE_DIMENSIONS.map((row, idx) => (
            <li key={row.formalName}>
              <Card className="border-border h-full shadow-sm">
                <CardHeader className="space-y-3 pb-2">
                  <div className="flex items-start gap-3">
                    <span
                      className="bg-primary/12 text-primary ring-border flex size-9 shrink-0 items-center justify-center rounded-full text-sm font-bold ring-1"
                      aria-hidden
                    >
                      {idx + 1}
                    </span>
                    <div className="min-w-0 space-y-1">
                      <CardTitle className="text-base font-semibold leading-snug">
                        {row.plainTitle}
                      </CardTitle>
                      <CardDescription className="text-xs font-normal">
                        Also called: {row.formalName}
                      </CardDescription>
                    </div>
                  </div>
                </CardHeader>
                <CardContent className="text-muted-foreground pt-0 text-sm leading-relaxed">
                  {row.explanation}
                </CardContent>
              </Card>
            </li>
          ))}
        </ul>
      </section>

      <Separator />

      <section aria-labelledby="jurisdictions-heading" className="space-y-3">
        <h2 id="jurisdictions-heading" className="text-lg font-semibold tracking-tight">
          By jurisdiction
        </h2>
        <ul className="flex flex-col gap-3">
          {GLOBAL_JURISDICTIONS.map((j) => (
            <li key={j.id}>
              <details className="border-border bg-card group rounded-xl border">
                <summary className="hover:bg-muted/35 cursor-pointer list-none rounded-xl [&::-webkit-details-marker]:hidden">
                  <div className="flex items-start gap-3 px-4 py-4">
                    <Shield className="text-primary mt-0.5 size-4 shrink-0 opacity-80" />
                    <div className="min-w-0 flex-1">
                      <p className="text-foreground text-sm font-semibold leading-snug">
                        {j.label}
                      </p>
                      <p className="text-muted-foreground mt-1 text-xs leading-snug">
                        {j.headline}
                      </p>
                    </div>
                    <ChevronDown className="text-muted-foreground mt-1 size-4 shrink-0 transition-transform group-open:rotate-180" />
                  </div>
                </summary>
                <div className="border-border space-y-4 border-t px-4 py-4 pl-11 text-sm md:px-6 md:pl-14">
                  <p className="text-muted-foreground text-xs font-medium uppercase">
                    {j.jurisdiction}
                  </p>
                  <dl className="grid gap-4 sm:grid-cols-2">
                    <div>
                      <dt className="text-foreground text-xs font-semibold">
                        Structure
                      </dt>
                      <dd className="text-muted-foreground mt-1 leading-relaxed">
                        {j.structureSummary}
                      </dd>
                    </div>
                    <div>
                      <dt className="text-foreground text-xs font-semibold">
                        Stringency
                      </dt>
                      <dd className="text-muted-foreground mt-1 leading-relaxed">
                        {j.stringencyNote}
                      </dd>
                    </div>
                    <div>
                      <dt className="text-foreground text-xs font-semibold">
                        Timing
                      </dt>
                      <dd className="text-muted-foreground mt-1 leading-relaxed">
                        {j.timelineNote}
                      </dd>
                    </div>
                    <div>
                      <dt className="text-foreground text-xs font-semibold">
                        Enforcement
                      </dt>
                      <dd className="text-muted-foreground mt-1 leading-relaxed">
                        {j.enforcementNote}
                      </dd>
                    </div>
                  </dl>
                  <div className="flex flex-wrap gap-x-4 gap-y-2">
                    {j.sources.map((s) => (
                      <ExternalLink
                        key={s.href}
                        href={s.href}
                        className="text-xs font-medium"
                      >
                        {s.label}
                      </ExternalLink>
                    ))}
                  </div>
                </div>
              </details>
            </li>
          ))}
        </ul>
      </section>

      <Card className="border-dashed">
        <CardHeader className="pb-2">
          <CardTitle className="text-base">Why this matters in BC</CardTitle>
          <CardDescription>
            Tools you buy may carry FDA, EU, or UK clearance even when your college
            rules are the main day-to-day guardrail.
          </CardDescription>
        </CardHeader>
        <CardContent className="text-muted-foreground flex flex-wrap gap-3 text-sm">
          <Button
            nativeButton={false}
            variant="link"
            className="h-auto p-0 text-sm"
            render={<Link to="/guidelines" />}
          >
            Guidelines
          </Button>
          <span aria-hidden>·</span>
          <Button
            nativeButton={false}
            variant="link"
            className="h-auto p-0 text-sm"
            render={<Link to="/checklists" />}
          >
            Checklists
          </Button>
        </CardContent>
      </Card>
    </div>
  )
}
