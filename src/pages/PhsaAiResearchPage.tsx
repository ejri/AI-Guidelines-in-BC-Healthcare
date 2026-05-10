import { ChevronDown } from 'lucide-react'
import { useState } from 'react'

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
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from '@/components/ui/collapsible'
import { Separator } from '@/components/ui/separator'
import {
  CANADA_TRI_AGENCY_GENAI_GRANT_REVIEW_GUIDANCE,
  GOOGLE_IMAGES_CA,
  JMIR_TOC_IMAGE_CC0_EXAMPLE,
  PHSA_AI_CONTACT_BLOCKS,
  PHSA_AI_HUB_RELATED_PAGES,
  PHSA_AI_RESEARCH_CANONICAL,
  PHSA_AI_RESEARCH_INTRO,
  PHSA_AI_RESOURCE_TOOLKIT_PDF,
  PHSA_AI_WORKING_GROUP_SHAREPOINT_REDIRECT,
  PHSA_AI_WORKING_GROUP_PAGE,
  PHSA_DIGITAL_HEALTH_INNOVATION,
  PHSA_GENERATIVE_AI_GUIDANCE_SECTION,
  PHSA_GENERATIVE_AI_RESEARCHER_GUIDANCE_PDF,
  PHSA_GENAI_TIPS,
  PHSA_GENAI_USE_CASES,
  PHSA_QUESTIONS_SECTION,
  PHSA_RESEARCH_DATA_ACCESS_PRIVACY,
  PHSA_USE_CASE_INTRO,
  PHSA_RESEARCHER_CONTACT_US,
  PHSA_SITE,
  PHSA_AI_IN_RESEARCH_EMAIL,
} from '@/content/phsaAiResearch'
import { cn } from '@/lib/utils'

function UseCaseCollapsible({
  id,
  title,
  scenario,
  benefitsHeading,
  benefits,
  risksHeading,
  items,
  defaultOpen,
}: (typeof PHSA_GENAI_USE_CASES)[number] & { defaultOpen?: boolean }) {
  const [open, setOpen] = useState(Boolean(defaultOpen))

  return (
    <Collapsible open={open} onOpenChange={setOpen}>
      <Card>
        <CollapsibleTrigger
          className={cn(
            'flex w-full items-center justify-between gap-3 rounded-t-xl px-6 py-4 text-left',
            'hover:bg-muted/50 focus-visible:ring-ring outline-none focus-visible:ring-2',
          )}
        >
          <div className="min-w-0 space-y-1">
            <p className="text-muted-foreground text-xs font-medium tracking-wide uppercase">
              genAI use case
            </p>
            <CardTitle className="text-base leading-snug">{title}</CardTitle>
          </div>
          <ChevronDown
            className={cn(
              'text-muted-foreground size-5 shrink-0 transition-transform',
              open && 'rotate-180',
            )}
            aria-hidden
          />
        </CollapsibleTrigger>
        <CollapsibleContent>
          <CardContent className="space-y-6 border-t pt-6">
            <div>
              <h4 className="text-foreground mb-2 text-sm font-semibold">
                Scenario
              </h4>
              <p className="text-muted-foreground text-sm leading-relaxed">
                {scenario}
              </p>
            </div>
            <div>
              <h4 className="text-foreground mb-2 text-sm font-semibold">
                {benefitsHeading}
              </h4>
              <p className="text-foreground mb-2 text-sm font-medium">Benefits</p>
              <ul className="text-muted-foreground list-inside list-disc space-y-1 text-sm leading-relaxed">
                {benefits.map((b) => (
                  <li key={b}>{b}</li>
                ))}
              </ul>
            </div>
            <div>
              <h4 className="text-foreground mb-2 text-sm font-semibold">
                {risksHeading}
              </h4>
              <ul className="space-y-4">
                {items.map((row, idx) => (
                  <li
                    key={`${id}-risk-${idx}`}
                    className="border-border rounded-lg border bg-muted/20 p-4 text-sm"
                  >
                    <p className="text-foreground font-medium">{row.risk}</p>
                    <p className="text-muted-foreground mt-2 leading-relaxed">
                      <span className="text-foreground font-medium">
                        Mitigation:{' '}
                      </span>
                      {row.mitigation}
                    </p>
                  </li>
                ))}
              </ul>
            </div>
          </CardContent>
        </CollapsibleContent>
      </Card>
    </Collapsible>
  )
}

export function PhsaAiResearchPage() {
  return (
    <div className="space-y-10">
      <header className="space-y-3">
        <div className="flex flex-wrap items-center gap-2">
          <Badge variant="secondary">PHSA researcher hub</Badge>
          <Badge variant="outline">genAI in research</Badge>
        </div>
        <h1 className="text-3xl font-semibold tracking-tight">
          {PHSA_AI_RESEARCH_INTRO.title}
        </h1>
        <p className="text-muted-foreground max-w-3xl text-sm leading-relaxed md:text-base">
          {PHSA_AI_RESEARCH_INTRO.summary}
        </p>
      </header>

      <Alert>
        <AlertTitle>Educational mirror — verify on PHSA</AlertTitle>
        <AlertDescription className="space-y-2">
          <p>
            This toolkit page organizes the same topics and wording published on
            PHSA’s researcher site for teaching navigation. Always treat the
            official page as authoritative:{' '}
            <ExternalLink href={PHSA_AI_RESEARCH_CANONICAL}>
              Artificial Intelligence in Research (PHSA)
            </ExternalLink>
            .
          </p>
        </AlertDescription>
      </Alert>

      <Card>
        <CardHeader>
          <CardTitle className="text-lg">Conducting Research at PHSA</CardTitle>
          <CardDescription>
            Breadcrumb-style links that appear on the live PHSA research hub.
          </CardDescription>
        </CardHeader>
        <CardContent className="flex flex-wrap gap-x-4 gap-y-2 text-sm">
          <ExternalLink href={PHSA_SITE}>Return to the PHSA site</ExternalLink>
          <span className="text-muted-foreground hidden sm:inline" aria-hidden>
            ·
          </span>
          <ExternalLink href={PHSA_RESEARCH_DATA_ACCESS_PRIVACY}>
            Data Access &amp; Privacy
          </ExternalLink>
          <span className="text-muted-foreground hidden sm:inline" aria-hidden>
            ·
          </span>
          <ExternalLink href={PHSA_RESEARCHER_CONTACT_US}>
            Researcher Contact Us
          </ExternalLink>
        </CardContent>
      </Card>

      <section className="space-y-3" aria-labelledby="phsa-supported-by">
        <h2 id="phsa-supported-by" className="text-lg font-semibold">
          Working group &amp; living resource
        </h2>
        <p className="text-muted-foreground max-w-3xl text-sm leading-relaxed">
          {PHSA_AI_RESEARCH_INTRO.supportedBy}{' '}
          <ExternalLink href={PHSA_AI_WORKING_GROUP_PAGE}>
            AI in Research Working Group (PHSA)
          </ExternalLink>
          . The public page also exposes a SharePoint term redirect used for
          taxonomy navigation:{' '}
          <ExternalLink href={PHSA_AI_WORKING_GROUP_SHAREPOINT_REDIRECT}>
            FIXUPREDIRECT (term store)
          </ExternalLink>
          .
        </p>
      </section>

      <section className="space-y-4" aria-labelledby="phsa-genai-guidance">
        <h2 id="phsa-genai-guidance" className="text-lg font-semibold">
          {PHSA_GENERATIVE_AI_GUIDANCE_SECTION.heading}
        </h2>
        <p className="text-muted-foreground max-w-3xl text-sm leading-relaxed">
          {PHSA_GENERATIVE_AI_GUIDANCE_SECTION.body}
        </p>
        <div className="flex flex-wrap gap-3">
          <ExternalLink href={PHSA_GENERATIVE_AI_RESEARCHER_GUIDANCE_PDF}>
            Generative AI Guidance for Researchers (PDF)
          </ExternalLink>
          <ExternalLink href={PHSA_AI_RESOURCE_TOOLKIT_PDF}>
            AI Research Toolkit &amp; bias/fairness guidance (PDF)
          </ExternalLink>
        </div>
        <div>
          <h3 className="text-foreground mb-2 text-sm font-semibold tracking-wide uppercase">
            Embedded PDF (may be blocked by your browser)
          </h3>
          <iframe
            title="PHSA Generative AI Guidance for Researchers"
            className="border-border bg-muted/20 h-[min(70vh,720px)] w-full rounded-lg border"
            src={`${PHSA_GENERATIVE_AI_RESEARCHER_GUIDANCE_PDF}#view=FitH`}
          />
          <p className="text-muted-foreground mt-2 text-xs">
            If the frame is blank, open the PDF directly from the link above.
          </p>
        </div>
      </section>

      <Separator />

      <section className="space-y-4" aria-labelledby="phsa-use-cases">
        <h2 id="phsa-use-cases" className="text-lg font-semibold">
          genAI use case examples
        </h2>
        <p className="text-muted-foreground max-w-3xl text-sm leading-relaxed">
          {PHSA_USE_CASE_INTRO} Expand each panel to read the full scenario and
          risk table.
        </p>
        <div className="space-y-3">
          {PHSA_GENAI_USE_CASES.map((uc, i) => (
            <UseCaseCollapsible key={uc.id} {...uc} defaultOpen={i === 0} />
          ))}
        </div>
      </section>

      <Separator />

      <section className="space-y-4" aria-labelledby="phsa-tips">
        <h2 id="phsa-tips" className="text-lg font-semibold">
          Tips for using genAI in research tasks
        </h2>
        <div className="grid gap-4 md:grid-cols-2">
          {PHSA_GENAI_TIPS.map((cat) => (
            <Card key={cat.id}>
              <CardHeader>
                <CardTitle className="text-base">{cat.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="text-muted-foreground list-inside list-disc space-y-2 text-sm leading-relaxed">
                  {cat.bullets.map((b) => (
                    <li key={b}>{b}</li>
                  ))}
                </ul>
                {cat.id === 'images' ? (
                  <p className="text-muted-foreground mt-3 text-xs leading-relaxed">
                    Example (CC0 / table-of-contents imagery):{' '}
                    <ExternalLink href={JMIR_TOC_IMAGE_CC0_EXAMPLE}>
                      JMIR knowledge base article
                    </ExternalLink>
                    . Compare generated logos with image search (e.g.{' '}
                    <ExternalLink href={GOOGLE_IMAGES_CA}>
                      images.google.ca
                    </ExternalLink>
                    ) as described in the PHSA use case on figures.
                  </p>
                ) : null}
                {cat.id === 'grant-review' ? (
                  <p className="text-muted-foreground mt-3 text-xs leading-relaxed">
                    Government of Canada tri-agency guidance:{' '}
                    <ExternalLink
                      href={CANADA_TRI_AGENCY_GENAI_GRANT_REVIEW_GUIDANCE}
                    >
                      Use of generative AI in the development and review of
                      research grant proposals
                    </ExternalLink>
                    .
                  </p>
                ) : null}
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      <Separator />

      <section className="space-y-4" aria-labelledby="phsa-questions">
        <h2 id="phsa-questions" className="text-lg font-semibold">
          {PHSA_QUESTIONS_SECTION.heading}
        </h2>
        <p className="text-muted-foreground text-sm leading-relaxed">
          {PHSA_QUESTIONS_SECTION.body}{' '}
          <a
            className="text-primary font-medium underline underline-offset-2"
            href={`mailto:${PHSA_AI_IN_RESEARCH_EMAIL}`}
          >
            {PHSA_AI_IN_RESEARCH_EMAIL}
          </a>
        </p>
      </section>

      <section className="space-y-4" aria-labelledby="phsa-related">
        <h2 id="phsa-related" className="text-lg font-semibold">
          Related pages under “Artificial Intelligence” (PHSA menu)
        </h2>
        <p className="text-muted-foreground max-w-3xl text-sm leading-relaxed">
          The live site nests additional resources alongside this hub. Open each
          on PHSA for full detail, PDFs, and intranet-only links.
        </p>
        <ul className="grid gap-4 md:grid-cols-3">
          {PHSA_AI_HUB_RELATED_PAGES.map((p) => (
            <li key={p.href}>
              <Card className="h-full">
                <CardHeader>
                  <CardTitle className="text-base leading-snug">
                    <ExternalLink href={p.href}>{p.label}</ExternalLink>
                  </CardTitle>
                  <CardDescription className="text-sm leading-relaxed">
                    {p.description}
                  </CardDescription>
                </CardHeader>
              </Card>
            </li>
          ))}
        </ul>
      </section>

      <section className="space-y-4" aria-labelledby="phsa-contact-blocks">
        <h2 id="phsa-contact-blocks" className="text-lg font-semibold">
          Contacts &amp; feedback (as listed on PHSA hub pages)
        </h2>
        <div className="grid gap-4 md:grid-cols-2">
          {PHSA_AI_CONTACT_BLOCKS.map((block) => (
            <Card key={block.title}>
              <CardHeader>
                <CardTitle className="text-base">{block.title}</CardTitle>
                <CardDescription className="text-sm leading-relaxed">
                  {block.body}
                </CardDescription>
              </CardHeader>
              <CardContent className="text-sm">
                {'email' in block && block.email ? (
                  <a
                    className="text-primary font-medium underline underline-offset-2"
                    href={`mailto:${block.email}`}
                  >
                    {block.email}
                  </a>
                ) : null}
                {'href' in block && block.href ? (
                  <ExternalLink href={block.href}>Open on PHSA</ExternalLink>
                ) : null}
                {!('email' in block && block.email) &&
                !('href' in block && block.href) ? (
                  <p className="text-muted-foreground text-xs leading-relaxed">
                    No public URL bundled in the hub copy; use PHSA POD /
                    workplace resources when authenticated.
                  </p>
                ) : null}
              </CardContent>
            </Card>
          ))}
        </div>
        <p className="text-muted-foreground text-xs leading-relaxed">
          General digital health innovation inquiries may route through the PHSA
          Digital Health Innovation professional resource page:{' '}
          <ExternalLink href={PHSA_DIGITAL_HEALTH_INNOVATION}>
            Digital Health Innovation
          </ExternalLink>
          .
        </p>
      </section>
    </div>
  )
}
