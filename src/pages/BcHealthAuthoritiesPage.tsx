import type { ReactNode } from 'react'

import { ExternalLink } from '@/components/ExternalLink'
import { Badge } from '@/components/ui/badge'
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'
import { Separator } from '@/components/ui/separator'
import { BC_HEALTH_AUTHORITIES } from '@/content/bc-health-authorities'

const CATEGORY_LABELS: Record<
  (typeof BC_HEALTH_AUTHORITIES)[number]['category'],
  string
> = {
  'regional-health-authority': 'Regional health authorities',
  'provincial-authority': 'Provincial health services',
  'professional-college': 'College / regulators',
  'physician-society': 'Medical association',
  government: 'Provincial government',
}

export function BcHealthAuthoritiesPage() {
  const grouped = BC_HEALTH_AUTHORITIES.reduce(
    (acc, auth) => {
      acc[auth.category] = acc[auth.category] ?? []
      acc[auth.category].push(auth)
      return acc
    },
    {} as Record<string, typeof BC_HEALTH_AUTHORITIES>,
  )

  return (
    <div className="space-y-10">
      <header className="space-y-3">
        <h1 className="text-3xl font-semibold tracking-tight">
          BC health authorities &amp; stewardship bodies
        </h1>
        <p className="text-muted-foreground max-w-3xl text-sm leading-relaxed md:text-base">
          British Columbia organizes most population-based delivery across{' '}
          <strong className="text-foreground">
            five regional health authorities
          </strong>{' '}
          plus{' '}
          <strong className="text-foreground">
            Provincial Health Services Authority (PHSA)
          </strong>{' '}
          for provincial programs, layered alongside{' '}
          <strong className="text-foreground">
            CPSBC regulatory standards for physicians
          </strong>{' '}
          and advocacy / policy work led by{' '}
          <strong className="text-foreground">Doctors of BC</strong>. Provincial
          direction also flows from BC&apos;s Ministry of Health.
        </p>
      </header>

      <AlertTeaching />

      {([
        'regional-health-authority',
        'provincial-authority',
        'professional-college',
        'physician-society',
        'government',
      ] as const).reduce<ReactNode[]>((nodes, cat) => {
        const authorities = grouped[cat]
        if (!authorities?.length) return nodes

        if (nodes.length > 0) {
          nodes.push(
            <Separator key={`separator-${cat}`} className="my-8" />,
          )
        }

        nodes.push(
          <section key={cat} aria-labelledby={`cat-${cat}`}>
            <h2
              id={`cat-${cat}`}
              className="mb-3 text-xl font-semibold tracking-tight"
            >
              {CATEGORY_LABELS[cat]}
            </h2>
            <div className="grid gap-4 md:grid-cols-2">
              {authorities.map((a) => (
                <Card key={a.id} className="h-full">
                  <CardHeader className="space-y-3">
                    <div className="flex flex-wrap items-center gap-2">
                      <Badge variant="secondary">{a.category}</Badge>
                    </div>
                    <CardTitle className="text-lg leading-snug">
                      <ExternalLink href={a.website}>{a.name}</ExternalLink>
                    </CardTitle>
                    <CardDescription>{a.mandate}</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-3 text-sm leading-relaxed">
                    <p>{a.aiPrivacyNote}</p>
                    {a.links?.length ? (
                      <div className="flex flex-wrap gap-x-4 gap-y-2 text-xs">
                        {a.links.map((l) => (
                          <ExternalLink key={l.href} href={l.href}>
                            {l.label}
                          </ExternalLink>
                        ))}
                      </div>
                    ) : null}
                  </CardContent>
                </Card>
              ))}
            </div>
          </section>,
        )

        return nodes
      }, [])}
    </div>
  )
}

function AlertTeaching() {
  return (
    <div
      role="note"
      className="border-border bg-muted/40 text-muted-foreground rounded-lg border p-4 text-sm leading-relaxed"
    >
      <p className="text-foreground font-medium">Teaching scope</p>
      <p className="mt-2">
        This page maps mandates and sample AI governance hooks for class. It is not
        a substitute for bargaining agreements, health authority policies, CPSBC bylaws,
        or privacy-office opinions. Procurement teams classify clinical vs
        administrative AI differently inside each statutory instrument.
      </p>
    </div>
  )
}
