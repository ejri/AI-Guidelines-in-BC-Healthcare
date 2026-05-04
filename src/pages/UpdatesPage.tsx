import { Link } from '@tanstack/react-router'
import { useMemo, useState } from 'react'

import { ExternalLink } from '@/components/ExternalLink'
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert'
import { Badge, badgeVariants } from '@/components/ui/badge'
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'
import { ALL_UPDATE_TAGS, POLICY_UPDATES } from '@/content/updates'
import { cn } from '@/lib/utils'

function tagLabel(t: string) {
  return `#${t}`
}

export function UpdatesPage() {
  const [selectedTags, setSelectedTags] = useState<string[]>([])

  const visible = useMemo(() => {
    if (selectedTags.length === 0) return POLICY_UPDATES
    return POLICY_UPDATES.filter((u) =>
      selectedTags.some((t) => u.tags.includes(t)),
    )
  }, [selectedTags])

  const toggleTag = (tag: string) => {
    setSelectedTags((prev) =>
      prev.includes(tag) ? prev.filter((t) => t !== tag) : [...prev, tag],
    )
  }

  return (
    <div className="space-y-8">
      <header className="space-y-2">
        <h1 className="text-3xl font-semibold tracking-tight">
          Updates &amp; change log
        </h1>
        <p className="text-muted-foreground max-w-3xl text-sm leading-relaxed md:text-base">
          Short, non-overwhelming notes on noteworthy policy corpus movements
          affecting BC clinician AI literacy.{' '}
          <strong className="text-foreground">Always reconcile dates and editions</strong>{' '}
          on issuer sites; cards here stay short on purpose.
        </p>
      </header>

      <Alert>
        <AlertTitle>How this relates to Guidelines</AlertTitle>
        <AlertDescription>
          Long-form summaries, embeddings, or PDF anchors live under{' '}
          <Link to="/guidelines" className="text-primary font-medium underline">
            Guidelines
          </Link>
          ; this page is the “headline ticker” only.
        </AlertDescription>
      </Alert>

      <section aria-labelledby="filter-tags">
        <h2 id="filter-tags" className="sr-only">
          Filter by tag
        </h2>
        <p className="text-muted-foreground mb-2 text-xs font-semibold uppercase">
          Filter (#tags)
        </p>
        <div className="flex flex-wrap gap-2">
          <button
            type="button"
            className={cn(
              badgeVariants({
                variant: selectedTags.length === 0 ? 'default' : 'outline',
              }),
              'h-7 cursor-pointer px-3 font-semibold sm:h-8',
            )}
            onClick={() => setSelectedTags([])}
          >
            All entries
          </button>
          {ALL_UPDATE_TAGS.map((tag) => {
            const on = selectedTags.includes(tag)
            return (
              <button
                key={tag}
                type="button"
                className={cn(
                  badgeVariants({
                    variant: on ? 'default' : 'outline',
                  }),
                  'h-7 cursor-pointer px-3 font-normal sm:h-8',
                )}
                onClick={() => toggleTag(tag)}
              >
                {tagLabel(tag)}
              </button>
            )
          })}
        </div>
      </section>

      <ul className="space-y-4">
        {visible.length === 0 ? (
          <p className="text-muted-foreground text-sm">
            Nothing matches those tags. Try a different mix.
          </p>
        ) : (
          visible.map((u) => (
            <li key={u.id}>
              <Card>
                <CardHeader>
                  <CardTitle className="text-lg leading-snug">{u.title}</CardTitle>
                  <CardDescription>{u.authority}</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4 text-sm leading-relaxed">
                  <div className="text-muted-foreground flex flex-wrap gap-x-4 gap-y-1 text-xs">
                    <span>
                      <strong className="text-foreground">Effective:</strong>{' '}
                      {u.effectiveDate}
                    </span>
                    {u.revisedDate ? (
                      <span>
                        <strong className="text-foreground">Last revised:</strong>{' '}
                        {u.revisedDate}
                      </span>
                    ) : null}
                    {u.versionLabel ? (
                      <span>
                        <strong className="text-foreground">Version:</strong>{' '}
                        {u.versionLabel}
                      </span>
                    ) : null}
                  </div>
                  <p>{u.summary}</p>
                  {u.toolkitSection ? (
                    <p className="text-muted-foreground text-xs">{u.toolkitSection}</p>
                  ) : null}
                  <div className="flex flex-wrap gap-2">
                    {u.tags.map((tag) => (
                      <Badge key={tag} variant="secondary">
                        {tagLabel(tag)}
                      </Badge>
                    ))}
                  </div>
                  <div className="flex flex-wrap gap-3 text-xs">
                    {u.primaryUrl ? (
                      <ExternalLink href={u.primaryUrl}>Authoritative link</ExternalLink>
                    ) : null}
                    <Link
                      to="/guidelines"
                      className="text-primary font-medium underline underline-offset-4"
                    >
                      Open Guidelines
                    </Link>
                  </div>
                  {u.verifiedNote ? (
                    <p className="text-muted-foreground border-border border-l-2 pl-3 text-xs">
                      <strong>Note:</strong> {u.verifiedNote}
                    </p>
                  ) : null}
                </CardContent>
              </Card>
            </li>
          ))
        )}
      </ul>
    </div>
  )
}
