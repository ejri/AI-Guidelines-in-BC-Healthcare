import { ExternalLink } from '@/components/ExternalLink'
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'

export function PrivacyPage() {
  return (
    <div className="space-y-8">
      <header className="space-y-2">
        <h1 className="text-3xl font-semibold tracking-tight">Privacy notice</h1>
        <p className="text-muted-foreground max-w-3xl text-sm leading-relaxed md:text-base">
          Plain-language summary for the BC AI Compliance Toolkit (static
          educational site). This is not a legal instrument; consult privacy
          counsel for organizational compliance questions.
        </p>
      </header>

      <Card>
        <CardHeader>
          <CardTitle>What this site does not collect</CardTitle>
          <CardDescription>Zero server-side retention of learner inputs</CardDescription>
        </CardHeader>
        <CardContent className="space-y-3 text-sm leading-relaxed">
          <p>
            There is no login, no custom API, and no database operated by this
            project for your checklist answers, free-text notes, or searches.
            Topic search and home filters run entirely in your browser.
          </p>
          <p className="text-muted-foreground">
            Aligns with the teaching mandate described in the course research
            notes: synthetic scenarios only; no patient health information is
            requested or stored by our static host.
          </p>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Browser storage (localStorage)</CardTitle>
          <CardDescription>PIPA-aligned transparency about the device</CardDescription>
        </CardHeader>
        <CardContent className="space-y-3 text-sm leading-relaxed">
          <p>
            Checklist selections and dark/light theme preference may be written
            to <strong>localStorage</strong> so you can resume between sessions.
            You can clear them anytime via the checklist “Clear saved answers”
            buttons or your browser’s site-data settings.
          </p>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Analytics (optional)</CardTitle>
          <CardDescription>Fathom loads only when the deploy sets a site ID</CardDescription>
        </CardHeader>
        <CardContent className="space-y-3 text-sm leading-relaxed">
          <p>
            When <code className="bg-muted rounded px-1 py-0.5 text-xs">VITE_FATHOM_SITE_ID</code>{' '}
            is provided at build time, the site may load Fathom’s script for
            aggregate page analytics. Fathom markets a privacy-focused approach;
            verify their current disclosures before enabling in production.
          </p>
          <p>
            Learn more:{' '}
            <ExternalLink href="https://usefathom.com/">Fathom Analytics</ExternalLink>
            .
          </p>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>External sites &amp; embedded documents</CardTitle>
          <CardDescription>Separate controllers</CardDescription>
        </CardHeader>
        <CardContent className="text-sm leading-relaxed">
          <p>
            When you follow outbound links or load an embedded PDF from the
            College of Physicians and Surgeons of BC, those organizations
            process interactions under their own notices.
          </p>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Further reading</CardTitle>
        </CardHeader>
        <CardContent className="flex flex-col gap-2 text-sm">
          <ExternalLink href="https://www.oipc.bc.ca/">OIPC BC</ExternalLink>
          <ExternalLink href="https://www.priv.gc.ca/en/privacy-topics/privacy-laws-in-canada/the-personal-information-protection-and-electronic-documents-act-pipeda/">
            OPC: PIPEDA overview
          </ExternalLink>
        </CardContent>
      </Card>
    </div>
  )
}
