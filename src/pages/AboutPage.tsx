import { Link } from '@tanstack/react-router'

import { ExternalLink } from '@/components/ExternalLink'
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'
import { UBC_DASH_CLUSTER, UBC_FACULTY_MEDICINE } from '@/content/external'
import {
  DASH_MISSION,
  INSTITUTION_LINE,
  TOOLKIT_VERSION_LABEL,
} from '@/content/institution'

const FEEDBACK_MAILTO =
  (import.meta.env.VITE_FEEDBACK_MAILTO as string | undefined) ?? ''

export function AboutPage() {
  const feedbackHref =
    FEEDBACK_MAILTO ||
    'mailto:?subject=BC%20AI%20Compliance%20Toolkit%20-%20feedback&body='

  return (
    <div className="space-y-8">
      <header className="space-y-3">
        <div className="flex flex-wrap items-center gap-2">
          <h1 className="text-3xl font-semibold tracking-tight">About</h1>
          <Badge variant="secondary">{TOOLKIT_VERSION_LABEL}</Badge>
        </div>
        <p className="text-muted-foreground max-w-3xl text-sm leading-relaxed md:text-base">
          Teaching-oriented sandbox developed for learners at{' '}
          <span className="text-foreground font-medium">{INSTITUTION_LINE}</span>
          . It translates national and BC-specific frameworks into interactive
          checklists and scenarios without collecting user-generated content on
          a server.
        </p>
        <p className="text-muted-foreground max-w-3xl text-sm">
          Official context:{' '}
          <ExternalLink href={UBC_FACULTY_MEDICINE}>
            UBC Faculty of Medicine
          </ExternalLink>
          {' · '}
          <ExternalLink href={UBC_DASH_CLUSTER}>
            Data Science and Health (DASH) Cluster
          </ExternalLink>
          .
        </p>
      </header>

      <Card>
        <CardHeader>
          <CardTitle>DASH Cluster mission</CardTitle>
          <CardDescription>
            How this teaching tool sits alongside broader FoM data science
            priorities
          </CardDescription>
        </CardHeader>
        <CardContent>
          <p className="text-sm leading-relaxed md:text-base">{DASH_MISSION}</p>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Zero server-side retention</CardTitle>
          <CardDescription>
            How this site differs from clinical or analytics-heavy apps
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-3 text-sm leading-relaxed">
          <p>
            Checklist answers and theme preference are stored with{' '}
            <strong>localStorage</strong> in your browser only. This static build
            does not include a custom backend, authentication, or database for
            learner inputs.
          </p>
          <p className="text-muted-foreground">
            Optional privacy-preserving analytics (Fathom) may load only when a
            site ID is configured; see the{' '}
            <Link to="/privacy" className="text-primary font-medium underline">
              privacy notice
            </Link>
            .
          </p>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Feedback</CardTitle>
          <CardDescription>
            Anonymous to this website; your mail client may still identify you to the
            recipient.
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4 text-sm leading-relaxed">
          <p>
            This page does not host a feedback form that posts to a server. Use
            the button below to open your email client with a prepared subject
            line. Add your course contact in the “To” field (or set{' '}
            <code className="bg-muted rounded px-1 py-0.5 text-xs">
              VITE_FEEDBACK_MAILTO
            </code>{' '}
            at build time for a one-click recipient).
          </p>
          <Button nativeButton={false} render={<a href={feedbackHref} />}>
            Draft feedback email
          </Button>
        </CardContent>
      </Card>

      <Alert>
        <AlertTitle>Indigenous cultural safety</AlertTitle>
        <AlertDescription>
          Case studies aim to centre structural analysis (cultural safety vs.
          competence) and avoid deficit-based narratives. Content should be
          reviewed periodically with Indigenous health leads and community
          partners, as recommended in the research toolkit.
        </AlertDescription>
      </Alert>
    </div>
  )
}
