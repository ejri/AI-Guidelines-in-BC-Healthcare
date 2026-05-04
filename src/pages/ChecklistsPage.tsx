import { useCallback } from 'react'

import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert'
import { Button } from '@/components/ui/button'
import { Checkbox } from '@/components/ui/checkbox'
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'
import { Label } from '@/components/ui/label'
import { ScrollArea } from '@/components/ui/scroll-area'
import { Separator } from '@/components/ui/separator'
import {
  DIAGNOSTIC_AI_ITEMS,
  SCRIBE_CONSENT_ITEMS,
  STORAGE_KEYS,
} from '@/content/checklists'
import { useLocalStorageJson } from '@/hooks/useLocalStorageJson'

type Checks = Record<string, boolean>

function emptyChecks(): Checks {
  return {}
}

function ChecklistBlock({
  title,
  description,
  storageKey,
  items,
}: {
  title: string
  description: string
  storageKey: string
  items: { id: string; label: string; hint?: string }[]
}) {
  const { value, set, reset } = useLocalStorageJson<Checks>(
    storageKey,
    emptyChecks(),
  )

  const toggle = useCallback(
    (id: string, checked: boolean) => {
      set((prev) => ({ ...prev, [id]: checked }))
    },
    [set],
  )

  const done = items.filter((i) => value[i.id]).length

  return (
    <Card>
      <CardHeader>
        <CardTitle>{title}</CardTitle>
        <CardDescription>{description}</CardDescription>
        <p className="text-muted-foreground text-xs">
          Progress: {done}/{items.length} (saved only in this browser)
        </p>
      </CardHeader>
      <CardContent>
        <ScrollArea className="h-[min(420px,55vh)] pr-3">
          <ul className="space-y-3">
            {items.map((item) => {
              const id = `chk-${storageKey}-${item.id}`
              return (
                <li
                  key={item.id}
                  className="border-border flex gap-3 rounded-lg border p-3"
                >
                  <Checkbox
                    id={id}
                    checked={value[item.id] === true}
                    onCheckedChange={(c) => toggle(item.id, c === true)}
                    aria-describedby={item.hint ? `${id}-hint` : undefined}
                  />
                  <div className="min-w-0 space-y-1">
                    <Label htmlFor={id} className="text-sm leading-snug">
                      {item.label}
                    </Label>
                    {item.hint ? (
                      <p
                        id={`${id}-hint`}
                        className="text-muted-foreground text-xs leading-relaxed"
                      >
                        {item.hint}
                      </p>
                    ) : null}
                  </div>
                </li>
              )
            })}
          </ul>
        </ScrollArea>
      </CardContent>
      <CardFooter className="justify-end gap-2">
        <Button type="button" variant="outline" size="sm" onClick={reset}>
          Clear saved answers
        </Button>
      </CardFooter>
    </Card>
  )
}

export function ChecklistsPage() {
  return (
    <div className="space-y-8">
      <header className="space-y-2">
        <h1 className="text-3xl font-semibold tracking-tight">
          Checklists &amp; tools
        </h1>
        <p className="text-muted-foreground max-w-3xl text-sm leading-relaxed md:text-base">
          Interactive prompts based on CPSBC AI themes and common deployment
          risks. Not legal advice; confirm with your health authority, privacy
          office, and the College.
        </p>
      </header>

      <Alert variant="destructive">
        <AlertTitle>Not a substitute for CPSBC standards</AlertTitle>
        <AlertDescription>
          These checklists support reflection and teaching only. If your
          proposed workflow involves identifiable patient information leaving
          your controlled record environment, complete a formal privacy review
          before proceeding.
        </AlertDescription>
      </Alert>

      <div className="grid gap-8 lg:grid-cols-2">
        <ChecklistBlock
          title="AI scribe consent &amp; documentation readiness"
          description="Consent, data flows, accuracy review, culturally responsive documentation, and oversight."
          storageKey={STORAGE_KEYS.scribe}
          items={SCRIBE_CONSENT_ITEMS}
        />
        <ChecklistBlock
          title="Diagnostic AI self-assessment"
          description="Indication match, validation evidence, override pathways, equity, transparency, and monitoring."
          storageKey={STORAGE_KEYS.diagnostic}
          items={DIAGNOSTIC_AI_ITEMS}
        />
      </div>

      <Separator />

      <section className="space-y-2" aria-labelledby="storage-note">
        <h2 id="storage-note" className="text-lg font-semibold">
          How saving works
        </h2>
        <p className="text-muted-foreground text-sm leading-relaxed">
          Answers are written to <strong>localStorage</strong> on this device
          only. Clearing site data or using a different browser profile will
          reset them. Nothing is transmitted to Netlify or a custom backend
          from these controls.
        </p>
      </section>
    </div>
  )
}
