import { Link } from '@tanstack/react-router'

import { ExternalLink } from '@/components/ExternalLink'
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert'
import { Badge } from '@/components/ui/badge'
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'
import { AI4H_PRINCIPLES_SUMMARY } from '@/content/ai4h'
import {
  AI4H_PRINCIPLES,
  CPSBC_AI_PDF,
  CPSBC_PROFESSIONAL_GUIDELINES,
  DOCTORS_OF_BC,
  OIPC_BC,
  PIPEDA_OVERVIEW,
} from '@/content/external'
import { INSTITUTION_LINE, TOOLKIT_VERSION_LABEL } from '@/content/institution'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'

const CPSBC_THEMES = [
  {
    title: 'Privacy, confidentiality, and consent',
    body: 'Protect patient information; obtain meaningful consent when AI changes how information is collected, used, or disclosed.',
  },
  {
    title: 'Accuracy and reliability',
    body: 'You remain accountable for clinical decisions and documentation; critically appraise outputs and correct errors.',
  },
  {
    title: 'Transparency',
    body: 'Be clear when AI has informed care or records, and communicate limitations to patients and teams.',
  },
  {
    title: 'Interpretability',
    body: 'Understand enough about the tool to explain its role in a given decision pathway.',
  },
  {
    title: 'Bias and equity',
    body: 'Apply an EDI lens; scrutinize performance across subgroups relevant to your practice.',
  },
  {
    title: 'Monitoring and oversight',
    body: 'Monitor use over time; respond to drift, safety signals, and vendor or workflow changes.',
  },
] as const

export function GuidelinesPage() {
  return (
    <div className="space-y-8">
      <header className="space-y-2">
        <h1 className="text-3xl font-semibold tracking-tight">Guidelines</h1>
        <p className="text-muted-foreground max-w-3xl text-sm leading-relaxed md:text-base">
          Interpretive summaries for teaching; always open issuer sources
          (CPSBC, Health Canada, OIPC) before relying on this material for
          practice decisions. For short “what changed” notes, visit{' '}
          <Link to="/updates" className="text-primary font-medium underline">
            Updates
          </Link>
          ; for multi-jurisdiction comparison, visit{' '}
          <Link
            to="/global-comparison"
            className="text-primary font-medium underline"
          >
            Global compare
          </Link>
          .
        </p>
      </header>

      <Tabs defaultValue="cpsbc" className="gap-4">
        <div className="overflow-x-auto pb-1">
          <TabsList variant="line" className="min-w-max gap-1">
            <TabsTrigger value="cpsbc">CPSBC</TabsTrigger>
            <TabsTrigger value="ai4h">AI4H</TabsTrigger>
            <TabsTrigger value="privacy">PIPA / PIPEDA / OIPC</TabsTrigger>
            <TabsTrigger value="community">Doctors of BC</TabsTrigger>
            <TabsTrigger value="formats">Formats (PDF vs web)</TabsTrigger>
          </TabsList>
        </div>

        <TabsContent value="formats" className="space-y-4">
          <Alert>
            <AlertTitle>Are there PDFs for AI4H, PIPA / PIPEDA / OIPC, Doctors of BC?</AlertTitle>
            <AlertDescription>
              Not always. Formats vary by issuer. Below is how this toolkit buckets
              each pillar (still confirm issuer HTML/PDF links before citing).
            </AlertDescription>
          </Alert>
          <div className="grid gap-4 md:grid-cols-2">
            <Card>
              <CardHeader>
                <CardTitle>Pan-Canadian AI4H principles</CardTitle>
                <CardDescription>Health Canada</CardDescription>
              </CardHeader>
              <CardContent className="space-y-2 text-sm leading-relaxed">
                <p>
                  Primary publication is normally a bilingual{' '}
                  <strong className="text-foreground">HTML page</strong> on{' '}
                  <ExternalLink href={AI4H_PRINCIPLES}>Canada.ca</ExternalLink>.
                  Ancillary PDF summaries sometimes circulate informally; treat the Crown
                  page as authoritative.
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>PIPA (BC)</CardTitle>
                <CardDescription>Statute consolidation</CardDescription>
              </CardHeader>
              <CardContent className="space-y-2 text-sm leading-relaxed">
                <p>
                  Legislative text (&amp; updates) publishes as statutes / consolidations,
                  commonly offered as downloadable <strong className="text-foreground">PDF</strong>{' '}
                  through{' '}
                  <ExternalLink href="https://www.bclaws.gov.bc.ca/">
                    BC Laws (legislative consolidations; search by statute name)
                  </ExternalLink>
                  ; have counsel confirm amendments against current filings.
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>PIPEDA &amp; federal AI/privacy interpretations</CardTitle>
                <CardDescription>OPC Canada</CardDescription>
              </CardHeader>
              <CardContent className="space-y-2 text-sm leading-relaxed">
                <p>
                  Guidance toggles between online articles and downloadable PDF bulletins/
                  commissioner findings. Explore{' '}
                  <ExternalLink href="https://www.priv.gc.ca/en/privacy-topics/technology-artificial-intelligence/">
                    OPC technology &amp; AI topic hub
                  </ExternalLink>.
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>OIPC BC</CardTitle>
                <CardDescription>Investigations &amp; guidance corpus</CardDescription>
              </CardHeader>
              <CardContent className="space-y-2 text-sm leading-relaxed">
                <p>
                  Frequently publishes commissioner orders and guidance dossiers. Many arrive as{' '}
                  <strong className="text-foreground">PDF-backed reports</strong> plus HTML
                  digests via{' '}
                  <ExternalLink href={OIPC_BC}>oipc.bc.ca</ExternalLink>.
                </p>
              </CardContent>
            </Card>
            <Card className="md:col-span-2">
              <CardHeader>
                <CardTitle>Doctors of BC</CardTitle>
                <CardDescription>Member-facing policies &amp; newsroom assets</CardDescription>
              </CardHeader>
              <CardContent className="space-y-2 text-sm leading-relaxed">
                <p>
                  Mix of webpages, bulletin PDFs for certain campaigns, downloadable member
                  toolkits, so authenticate through{' '}
                  <ExternalLink href={DOCTORS_OF_BC}>doctorsbc.ca</ExternalLink> rather than
                  third-party repositories.
                </p>
              </CardContent>
            </Card>
          </div>
        </TabsContent>

        <TabsContent value="cpsbc" className="space-y-4">
          <Alert>
            <AlertTitle>College of Physicians and Surgeons of BC</AlertTitle>
            <AlertDescription>
              Interim guidance:{' '}
              <ExternalLink href={CPSBC_AI_PDF}>
                Ethical Principles for Artificial Intelligence in Medicine (PDF)
              </ExternalLink>
              . Professional standards hub:{' '}
              <ExternalLink href={CPSBC_PROFESSIONAL_GUIDELINES}>
                CPSBC professional guidelines
              </ExternalLink>
              .
            </AlertDescription>
          </Alert>
          <div className="grid gap-3 sm:grid-cols-2">
            {CPSBC_THEMES.map((t) => (
              <Card key={t.title}>
                <CardHeader>
                  <CardTitle className="text-base">{t.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {t.body}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
          <div>
            <h2 className="mb-2 text-sm font-semibold tracking-wide uppercase">
              Embedded PDF (may be blocked by your browser)
            </h2>
            <iframe
              title="CPSBC Ethical Principles for Artificial Intelligence in Medicine"
              className="border-border bg-muted/20 h-[min(70vh,720px)] w-full rounded-lg border"
              src={`${CPSBC_AI_PDF}#view=FitH`}
            />
            <p className="text-muted-foreground mt-2 text-xs">
              If the frame is blank, open the PDF directly from the link above.
            </p>
          </div>
        </TabsContent>

        <TabsContent value="ai4h" className="space-y-4">
          <Alert>
            <AlertTitle>Pan-Canadian AI for Health (AI4H)</AlertTitle>
            <AlertDescription>
              Official guiding principles:{' '}
              <ExternalLink href={AI4H_PRINCIPLES}>
                Health Canada: Pan-Canadian AI for Health
              </ExternalLink>
              .
            </AlertDescription>
          </Alert>
          <div className="grid gap-4 md:grid-cols-2">
            {AI4H_PRINCIPLES_SUMMARY.map((p) => (
              <Card key={p.id}>
                <CardHeader>
                  <div className="flex items-start justify-between gap-2">
                    <CardTitle className="text-base leading-snug">
                      {p.title}
                    </CardTitle>
                    <Badge variant="outline" className="shrink-0 text-xs">
                      Reflect
                    </Badge>
                  </div>
                  <CardDescription className="text-sm leading-relaxed">
                    {p.summary}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-foreground text-sm font-medium">
                    Practice prompt
                  </p>
                  <p className="text-muted-foreground mt-1 text-sm leading-relaxed">
                    {p.practicePrompt}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </TabsContent>

        <TabsContent value="privacy" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>BC: PIPA &amp; OIPC</CardTitle>
              <CardDescription>
                Provincial expectations around transparency, accountability, and
                lawful collection/use of personal information.
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-3 text-sm leading-relaxed">
              <p>
                <ExternalLink href={OIPC_BC}>
                  Office of the Information and Privacy Commissioner for BC
                </ExternalLink>{' '}
                publishes guidance for public bodies and private-sector
                organizations on consent, safeguards, and accountability.
              </p>
              <p className="text-muted-foreground">
                This toolkit stores checklist progress and theme preference only
                in your browser, with no user-generated content transmitted to
                our static host, although any PDF or external site carries its own
                privacy posture.
              </p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle>Federal: PIPEDA</CardTitle>
              <CardDescription>
                Applies to private-sector organizations in provinces without
                substantially similar legislation; informs baseline privacy
                principles nationally.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-sm leading-relaxed">
                Overview from the Office of the Privacy Commissioner of Canada:{' '}
                <ExternalLink href={PIPEDA_OVERVIEW}>PIPEDA summary</ExternalLink>
                .
              </p>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="community" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Doctors of BC</CardTitle>
              <CardDescription>
                Mirrors physician-policy themes around governance, equity, and
                cultural humility as published on Doctors of BC.
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-3 text-sm leading-relaxed">
              <p>
                Visit{' '}
                <ExternalLink href={DOCTORS_OF_BC}>Doctors of BC</ExternalLink>{' '}
                for current member resources. When your division adopts AI
                tools, pair College expectations with organizational privacy and
                equity reviews.
              </p>
              <p className="text-muted-foreground">
                This page is not endorsed by Doctors of BC; it is an educational
                summary for {INSTITUTION_LINE} learners ({TOOLKIT_VERSION_LABEL}{' '}
                teaching build).
              </p>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  )
}
