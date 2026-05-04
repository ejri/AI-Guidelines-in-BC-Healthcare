/**
 * Teaching synthesis loosely aligned with the course workbook *From Principle to Practice*
 * (Healthcare AI Sandbox). Not legal advice. For binding duties, rely on counsel and issuer text.
 */

export type JurisdictionSpotlight = {
  id: string
  label: string
  jurisdiction: string
  /** Single line shown in the collapsed row. */
  headline: string
  structureSummary: string
  stringencyNote: string
  timelineNote: string
  enforcementNote: string
  sources: { label: string; href: string }[]
}

export type ComparisonLens = {
  /** Short academic label (shown small on the card). */
  formalName: string
  /** Friendly heading in everyday language. */
  plainTitle: string
  /** Explainer for a general audience (not legal advice). */
  explanation: string
}

export const FIVE_DIMENSIONS: ComparisonLens[] = [
  {
    formalName: 'Structural alignment',
    plainTitle: 'Same worries, different rulebooks',
    explanation:
      'Most places care about similar things: keep patients safe, protect privacy, tell patients what an AI tool is doing, and watch for unfair bias. What changes is the packaging: national AI law, medical-college standards, hospital policy, or “this counts as a medical device” approval rules.',
  },
  {
    formalName: 'Regulatory stringency',
    plainTitle: 'How hard the rules can bite',
    explanation:
      'Some places can levy very large fines or block products outright. Others lean on softer tools: guidance documents, contracting, college discipline for doctors, hospital committees, and privacy investigations; the blend varies by place.',
  },
  {
    formalName: 'Implementation timelines',
    plainTitle: 'When the clock starts',
    explanation:
      'Big cross-sector laws may phase in slowly, year by year. College guidance typically matters as soon as it is published for members. Device-style rules tend to hinge on whenever a vendor seeks clearance and what they promise after launch.',
  },
  {
    formalName: 'Enforcement pathways',
    plainTitle: 'Who actually says “stop”',
    explanation:
      'It might be AI-specific regulators in one region, a devices agency (like FDA) in another, privacy commissioners when data leaks, medical colleges when conduct is questioned, or your workplace policy unit. Usually more than one applies.',
  },
  {
    formalName: 'Clinician & hospital oversight',
    plainTitle: 'Where everyday responsibility lands',
    explanation:
      'Imported tools notwithstanding, charting and prescribing decisions generally stay with licensed clinicians. Many hospitals layer review boards, approvals, or monitoring on top of baseline national rules.',
  },
]

export const GLOBAL_JURISDICTIONS: JurisdictionSpotlight[] = [
  {
    id: 'bc-cpsbc',
    label: 'British Columbia physicians',
    jurisdiction: 'CPSBC + PIPA/FOIPPA + health authority bylaws',
    headline:
      'College interprets AI under existing privacy law; there is no stand-alone provincial “AI Act.”',
    structureSummary:
      'College guidance interprets AI through professionalism duties atop privacy statutes rather than issuing a provincial AI statute.',
    stringencyNote:
      'For practising physicians, credentialing and discipline matter most; GDPR-class AI fines rarely mirror that pressure locally.',
    timelineNote:
      'Interim College guidance becomes operative upon publication pending formal standard adoption.',
    enforcementNote:
      'College proceedings, overlapping health-authority corrective action, OPC/OIPC oversight for privacy breaches.',
    sources: [
      {
        label: 'CPSBC interim AI guidance (PDF)',
        href: 'https://www.cpsbc.ca/files/pdf/CPSBC-PG-Artificial-Intelligence.pdf',
      },
    ],
  },
  {
    id: 'canada-ai4h-health-canada',
    label: 'Canada (health AI policy layer)',
    jurisdiction: 'Health Canada / AI4H + provincial health law',
    headline:
      'National principles plus provincial law; physicians still follow their college.',
    structureSummary:
      'AI4H states national principles; provinces operationalize consent, licensing, interoperability; CPSBC complements for physicians.',
    stringencyNote:
      'Split picture: privacy statutes carry real teeth while national AI principle documents may lack fines that match.',
    timelineNote:
      'Principles influence procurement today; statutes vary by domain (devices vs clinical documentation SaaS).',
    enforcementNote:
      'Federal device regulation + provincial privacy commissioners + Colleges.',
    sources: [
      {
        label: 'AI4H guiding principles',
        href: 'https://www.canada.ca/en/health-canada/corporate/transparency/health-agreements/pan-canadian-ai-guiding-principles.html',
      },
    ],
  },
  {
    id: 'eu-ai-act',
    label: 'European Union AI Act framing',
    jurisdiction: 'Cross-sector statutory instrument (risk tiers)',
    headline: 'EU-wide risk tiers, conformity duties, and large potential fines.',
    structureSummary:
      'Codified risk classifications, conformity obligations for high-risk systems, prohibited practices outright banned.',
    stringencyNote:
      'Among the toughest cross-sector mandates; massive administrative fines loom for systemic violations.',
    timelineNote:
      'Phased applicability with multi-year ramps for high-risk requirements (consult current EU Official Journal timelines).',
    enforcementNote:
      'Market surveillance authorities, EU Artificial Intelligence Board coordination, escalating penalties.',
    sources: [
      {
        label: 'EU regulatory framework portal',
        href: 'https://digital-strategy.ec.europa.eu/en/policies/regulatory-framework-ai',
      },
    ],
  },
  {
    id: 'us-fda-samd',
    label: 'United States (FDA software as medical device track)',
    jurisdiction: 'FDA Center for Devices and Radiological Health',
    headline:
      'Strong where AI is a marketed device; many chat-style tools sit outside that box.',
    structureSummary:
      'Lifecycle rules for marketed AI-enabled device software functions, plus evolving guidance on post-market changes.',
    stringencyNote:
      'Mandatory for marketed devices; many physician-facing GPT wrappers fall outside FDA if not marketed as devices.',
    timelineNote:
      'Approval clocks run product by product; there is no one statutory start date like EU AI Act chapter rollouts.',
    enforcementNote:
      'Recalls, warning letters, injunctions, criminal referrals in egregious cases.',
    sources: [
      {
        label: 'FDA AI-enabled SaMD landing page',
        href: 'https://www.fda.gov/medical-devices/software-medical-device-samd/artificial-intelligence-enabled-medical-devices',
      },
    ],
  },
  {
    id: 'uk-nhs-assurance',
    label: 'United Kingdom NHS ecosystem',
    jurisdiction: 'NHS England assurance + MHRA devices + ICO privacy',
    headline:
      'NHS commissioning sits alongside MHRA devices and ICO privacy oversight. The mix differs from BC’s college-heavy setup.',
    structureSummary:
      'Commissioning assurance layers (including AI readiness work) intersect with SaMD vigilance expectations. That pairing is unlike a single provincial college codebook.',
    stringencyNote:
      'Depends on procurement gatekeeping + device classification + ICO enforcement for personal data misuse.',
    timelineNote:
      'Trust-by-trust rollout of AI tools under NHS commissioning guidance.',
    enforcementNote:
      'Contractual KPIs between NHS commissioners and trusts, MHRA vigilance actions, ICO monetary penalties.',
    sources: [
      {
        label: 'NHS England transformation knowledge',
        href: 'https://transform.england.nhs.uk/key-tools-and-information/digital-health-knowledge-library/',
      },
      {
        label: 'ICO guidance on AI and data protection',
        href: 'https://ico.org.uk/for-organisations/uk-gdpr-guidance-and-resources/artificial-intelligence/',
      },
    ],
  },
  {
    id: 'singapore-ai-governance',
    label: 'Singapore sandbox model',
    jurisdiction: 'IMDA AI governance testing + PDPC privacy + MOH stewardship',
    headline:
      'Pilot-friendly national posture: sandboxes, PDPA, and sector licensing.',
    structureSummary:
      'National sandboxes/co-regulatory experimentation pair with pragmatic advertising of AI accountability measures for digital health entrants.',
    stringencyNote:
      'Highly adaptive regulators: tightening often shows up via licensing regimes and PDP Act fines more than collegiate codes alone.',
    timelineNote:
      'Pilot timelines depend on Monetary Authority/Tech corridors (health pilots align with MOH digital strategy).',
    enforcementNote:
      'PDPA financial penalties / sector regulators / licensing conditions tied to approvals.',
    sources: [
      {
        label: 'IMDA Artificial Intelligence governance',
        href: 'https://www.imda.gov.sg/how-we-can-help/icm-and-digital-trade/Artificial-intelligence',
      },
      {
        label: 'PDPC Singapore',
        href: 'https://www.pdpc.gov.sg/',
      },
    ],
  },
]
