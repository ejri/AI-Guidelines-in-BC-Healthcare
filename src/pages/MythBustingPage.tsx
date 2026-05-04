import { Link } from '@tanstack/react-router'

import { MYTHS } from '@/content/myths'
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert'
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'

export function MythBustingPage() {
  return (
    <div className="space-y-8">
      <header className="space-y-2">
        <h1 className="text-3xl font-semibold tracking-tight">Myth-busting</h1>
        <p className="text-muted-foreground max-w-3xl text-sm leading-relaxed md:text-base">
          Targeted corrections for common misconceptions about public LLMs,
          de-identification, accountability, and scribes, tied to CPSBC interim AI text
          and PIPEDA/PIPA coursework notes.
        </p>
      </header>

      <Alert>
        <AlertTitle>Still unsure?</AlertTitle>
        <AlertDescription>
          Pair this module with the{' '}
          <Link to="/checklists" className="text-primary font-medium underline">
            checklists
          </Link>{' '}
          and official CPSBC / OIPC publications before changing practice.
        </AlertDescription>
      </Alert>

      <div className="grid gap-4 md:grid-cols-2">
        {MYTHS.map((m) => (
          <Card key={m.id} className="flex flex-col">
            <CardHeader>
              <CardDescription className="text-foreground text-sm font-semibold">
                Myth
              </CardDescription>
              <CardTitle className="text-base leading-snug">{m.myth}</CardTitle>
            </CardHeader>
            <CardContent className="mt-auto space-y-3 text-sm leading-relaxed">
              <div>
                <p className="text-muted-foreground font-medium">Reality</p>
                <p className="mt-1">{m.reality}</p>
              </div>
              <div>
                <p className="text-muted-foreground font-medium">Takeaway</p>
                <p className="mt-1">{m.takeaway}</p>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  )
}
