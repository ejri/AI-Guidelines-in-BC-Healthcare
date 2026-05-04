import { Link } from '@tanstack/react-router'
import { motion } from 'framer-motion'
import {
  BookOpen,
  Building2,
  ClipboardList,
  Globe2,
  Library,
  Map,
  MessageCircleQuestion,
  Newspaper,
  Search,
  Sparkles,
} from 'lucide-react'
import { useMemo, useState } from 'react'

import { Button } from '@/components/ui/button'
import {
  Card,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'
import {
  INSTITUTION_LINE,
  TOOLKIT_VERSION_LABEL,
} from '@/content/institution'
import { cn } from '@/lib/utils'

const SECTION_CARDS = [
  {
    to: '/guidelines',
    title: 'Guidelines & frameworks',
    description:
      'CPSBC expectations, Pan-Canadian AI4H principles, and BC privacy touchpoints (PIPA / OIPC).',
    icon: BookOpen,
    keywords:
      'cpsbc college physicians surgeons ai4h pipa pipeda oipc consent transparency',
  },
  {
    to: '/updates',
    title: 'Updates',
    description:
      'Concise changelog of notable policies with effective/revision hints, hashtags, and deep links.',
    icon: Newspaper,
    keywords:
      'news updates changelog cpsbc health canada oipc april 2026 version revision tags privacy consent',
  },
  {
    to: '/bc-health-authorities',
    title: 'BC health system authorities',
    description:
      'Regional health authorities plus PHSA, CPSBC, Doctors of BC, and Ministry pages; brief notes on procurement and privacy guardrails.',
    icon: Building2,
    keywords:
      'fraser vch interior northern island phsa college doctors ministry health authority british columbia',
  },
  {
    to: '/global-comparison',
    title: 'How BC compares globally',
    description:
      'Compact read on how EU/US/UK/Singapore/Canada frame health AI next to BC colleges and privacy law.',
    icon: Globe2,
    keywords:
      'comparison governance eu ai act fda who mhra pdpc timelines stringency oversight',
  },
  {
    to: '/checklists',
    title: 'Checklists & tools',
    description:
      'AI scribe consent prompts and a diagnostic-AI self-assessment; everything stays in this browser only.',
    icon: ClipboardList,
    keywords: 'checklist scribe consent assessment local storage tools',
  },
  {
    to: '/case-studies',
    title: 'Case studies',
    description:
      'Synthetic BC scenarios (e.g., rural clinic documentation, equity in model outputs) with reflection prompts.',
    icon: MessageCircleQuestion,
    keywords:
      'case study rural surrey vgh bias equity bcmj reflection indigenous cultural safety',
  },
  {
    to: '/myth-busting',
    title: 'Myth-busting',
    description:
      'Straight answers on consumer LLMs, de-identification, scribes, and who stays accountable.',
    icon: Sparkles,
    keywords:
      'myth llm chatgpt phi training emr deidentified accountability scribe',
  },
  {
    to: '/ecosystem',
    title: 'BC ecosystem',
    description:
      'Trusted links: DIGITAL, PHSA, UBC AI initiatives, Doctors of BC, and Health Canada.',
    icon: Map,
    keywords: 'digital phsa ubc doctors bc health canada training events hub',
  },
  {
    to: '/about',
    title: 'About & feedback',
    description:
      'Course context, instructor note, and how we keep this sandbox zero-retention.',
    icon: Library,
    keywords: 'about feedback instructor course privacy zero retention',
  },
] as const

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.06, delayChildren: 0.05 },
  },
}

const item = {
  hidden: { opacity: 0, y: 10 },
  show: { opacity: 1, y: 0 },
}

export function HomePage() {
  const [query, setQuery] = useState('')

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase()
    if (!q) return SECTION_CARDS
    return SECTION_CARDS.filter(
      (c) =>
        c.title.toLowerCase().includes(q) ||
        c.description.toLowerCase().includes(q) ||
        c.keywords.includes(q),
    )
  }, [query])

  return (
    <div className="space-y-12">
      <section
        className="relative overflow-hidden rounded-2xl border bg-gradient-to-br from-primary/10 via-background to-accent/30 px-6 py-12 md:px-10 md:py-16"
        aria-labelledby="hero-heading"
      >
        <div
          className="pointer-events-none absolute inset-0 opacity-40"
          aria-hidden
          style={{
            backgroundImage:
              'radial-gradient(circle at 20% 20%, oklch(0.55 0.12 200 / 0.25), transparent 45%), radial-gradient(circle at 80% 0%, oklch(0.5 0.1 240 / 0.2), transparent 40%)',
          }}
        />
        <div className="relative mx-auto max-w-3xl space-y-5 text-center md:text-left">
          <p className="text-primary text-xs font-semibold tracking-wide uppercase sm:text-sm">
            {TOOLKIT_VERSION_LABEL} · {INSTITUTION_LINE}
          </p>
          <p className="text-muted-foreground text-xs font-medium tracking-wide uppercase">
            BC physicians &amp; residents
          </p>
          <h1
            id="hero-heading"
            className="text-3xl font-semibold tracking-tight text-balance md:text-4xl lg:text-5xl"
          >
            BC AI Compliance Toolkit
          </h1>
          <p className="text-muted-foreground text-base leading-relaxed text-pretty md:text-lg">
            A zero-data-retention educational sandbox to practise responsible
            clinical AI habits: privacy, transparency, equity, Indigenous cultural
            safety, and physician oversight, drawing on CPSBC, AI4H, and BC
            privacy wording. Not a clinical decision-support system.
          </p>
          <div className="flex flex-col gap-3 sm:flex-row sm:flex-wrap sm:justify-center md:justify-start">
            <Button nativeButton={false} render={<Link to="/checklists" />}>
              Open checklists
            </Button>
            <Button
              variant="outline"
              nativeButton={false}
              render={<Link to="/guidelines" />}
            >
              Read frameworks
            </Button>
          </div>
        </div>
      </section>

      <section aria-labelledby="topics-heading" className="space-y-4">
        <div className="flex flex-col gap-2 md:flex-row md:items-end md:justify-between">
          <div>
            <h2
              id="topics-heading"
              className="text-xl font-semibold tracking-tight"
            >
              Explore topics
            </h2>
            <p className="text-muted-foreground text-sm">
              Keyword filter only; searches never leave your browser.
            </p>
          </div>
          <div className="relative w-full md:max-w-xs">
            <label htmlFor="topic-search" className="sr-only">
              Search topics
            </label>
            <Search
              className="text-muted-foreground pointer-events-none absolute top-1/2 left-3 size-4 -translate-y-1/2"
              aria-hidden
            />
            <input
              id="topic-search"
              type="search"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="e.g., consent, PIPA, bias"
              autoComplete="off"
              className={cn(
                'border-input bg-background ring-offset-background',
                'placeholder:text-muted-foreground focus-visible:ring-ring',
                'h-10 w-full rounded-lg border py-2 pr-3 pl-10 text-sm',
                'focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:outline-none',
              )}
            />
          </div>
        </div>

        {filtered.length === 0 ? (
          <p className="text-muted-foreground text-sm" role="status">
            No sections match that search. Try &quot;consent&quot;,
            &quot;privacy&quot;, or &quot;bias&quot;.
          </p>
        ) : (
          <motion.ul
            className="grid gap-4 sm:grid-cols-2"
            variants={container}
            initial="hidden"
            animate="show"
            key={query}
          >
            {filtered.map((card) => {
              const Icon = card.icon
              return (
                <motion.li key={card.to} variants={item} layout="position">
                  <Card className="h-full transition-shadow hover:shadow-md">
                    <CardHeader>
                      <div className="flex items-start gap-3">
                        <span className="bg-primary/15 text-primary inline-flex size-10 shrink-0 items-center justify-center rounded-lg">
                          <Icon className="size-5" aria-hidden />
                        </span>
                        <div className="min-w-0 space-y-1">
                          <CardTitle className="text-lg leading-snug">
                            {card.title}
                          </CardTitle>
                          <CardDescription>{card.description}</CardDescription>
                        </div>
                      </div>
                    </CardHeader>
                    <CardFooter className="mt-auto justify-end border-t-0 pt-0">
                      <Button
                        variant="secondary"
                        size="sm"
                        nativeButton={false}
                        render={<Link to={card.to} />}
                      >
                        Go to section
                      </Button>
                    </CardFooter>
                  </Card>
                </motion.li>
              )
            })}
          </motion.ul>
        )}
      </section>

      <section
        className="border-border bg-muted/30 rounded-xl border p-6"
        aria-labelledby="myth-heading"
      >
        <h2 id="myth-heading" className="text-lg font-semibold tracking-tight">
          Myth-busting (quick read)
        </h2>
        <p className="text-muted-foreground mt-2 text-sm leading-relaxed">
          Public large language models are not appropriate places to paste
          identifiable patient information. Even &quot;de-identified&quot; text
          can sometimes be re-linked when combined with other data, so follow
          organizational policies and CPSBC / PIPA expectations for any tool
          that leaves your controlled clinical record environment.
        </p>
        <div className="mt-4">
          <Button
            variant="secondary"
            size="sm"
            nativeButton={false}
            render={<Link to="/myth-busting" />}
          >
            Open full myth-busting module
          </Button>
        </div>
      </section>
    </div>
  )
}
