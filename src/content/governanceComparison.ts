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
    id: 'bc-moh-framework',
    label: 'British Columbia health system (public)',
    jurisdiction: 'MoH Responsible AI Policy Framework + OCIO + HA policies',
    headline:
      'June 2026 provincial framework for MoH, health authorities, and BC Shared Health Services — compliance expected by 31 Aug 2027.',
    structureSummary:
      'Lifecycle policy (ideation through retirement), eight principles including Indigenous rights and reconciliation, risk assessment, informed consent, named system owners, human-in-the-loop for diagnosis support, incident management, and procurement rules for third-party and open-source AI. Used alongside OCIO gen-AI policy. Does not bind private-practice-only providers.',
    stringencyNote:
      'Organizational compliance and contracting bind public entities; professional colleges and OIPC still govern individual practice and privacy.',
    timelineNote:
      'Framework PDF June 2026; public page updated 24 Sep 2026; phased compliance with initial expectation 31 August 2027.',
    enforcementNote:
      'Ministry/HA governance, incident reporting to system owners, OCIO information-security expectations, overlapping college and OIPC pathways.',
    sources: [
      {
        label: 'Responsible AI Policy Framework (gov.bc.ca)',
        href: 'https://www2.gov.bc.ca/gov/content/health/practitioner-professional-resources/responsible-artificial-intelligence-policy-framework',
      },
      {
        label: 'Framework PDF (June 2026)',
        href: 'https://www2.gov.bc.ca/assets/gov/health/practitioner-pro/responsible_ai_policy_framework_final_2026_06.pdf',
      },
      {
        label: 'OCIO generative AI policy',
        href: 'https://digital.gov.bc.ca/ai/gen-ai-policy/',
      },
    ],
  },
  {
    id: 'bc-cpsbc',
    label: 'British Columbia physicians (college)',
    jurisdiction: 'CPSBC + PIPA/FIPPA + health authority bylaws',
    headline:
      'College interim AI ethics (v1.2, Apr 2026) plus OIPC AI-scribe guidance for PIPA clinics — no stand-alone provincial AI Act for private practice.',
    structureSummary:
      'CPSBC Ethical Principles for AI in Medicine interpret professionalism duties (consent, accuracy, transparency, bias, monitoring, scribe review). OIPC PIPA AI-scribe guidance (28 Jan 2026) covers private organizations; public bodies remain under FIPPA.',
    stringencyNote:
      'For practising physicians, credentialing and discipline matter most; GDPR-class AI fines rarely mirror that pressure locally.',
    timelineNote:
      'CPSBC effective 11 Apr 2024, revised 1 Apr 2026 (v1.2). OIPC scribes guidance 28 Jan 2026.',
    enforcementNote:
      'College proceedings, health-authority corrective action, OIPC oversight for privacy breaches.',
    sources: [
      {
        label: 'CPSBC interim AI guidance (PDF)',
        href: 'https://www.cpsbc.ca/files/pdf/CPSBC-PG-Artificial-Intelligence.pdf',
      },
      {
        label: 'OIPC PIPA & AI scribes',
        href: 'https://www.oipc.bc.ca/documents/guidance-documents/3082',
      },
    ],
  },
  {
    id: 'canada-ai4h-health-canada',
    label: 'Canada (health AI policy + devices)',
    jurisdiction: 'AI4H principles + Health Canada MLMD / GMLP',
    headline:
      'Nine national AI4H principles plus April 2026 MLMD pre-market guidance; physicians still follow their college.',
    structureSummary:
      'AI4H states F/P/T principles (including Indigenous-led governance). Health Canada regulates ML-enabled medical devices with lifecycle evidence and optional PCCPs; GMLP is shared with FDA and MHRA.',
    stringencyNote:
      'Split picture: device licences and privacy statutes carry real teeth while principle documents guide procurement without matching fine schedules.',
    timelineNote:
      'AI4H principles influence procurement today; MLMD guidance dated 1 Apr 2026.',
    enforcementNote:
      'Federal device regulation + provincial privacy commissioners + Colleges + MoH/HA frameworks in BC.',
    sources: [
      {
        label: 'AI4H guiding principles',
        href: 'https://www.canada.ca/en/health-canada/corporate/transparency/health-agreements/pan-canadian-ai-guiding-principles.html',
      },
      {
        label: 'Health Canada MLMD pre-market guidance',
        href: 'https://www.canada.ca/en/health-canada/services/drugs-health-products/medical-devices/application-information/guidance-documents/pre-market-guidance-machine-learning-enabled-medical-devices.html',
      },
    ],
  },
  {
    id: 'eu-ai-act',
    label: 'European Union AI Act',
    jurisdiction: 'Regulation (EU) 2024/1689 as amended by 2026/1744',
    headline:
      'Risk-tiered EU statute; Annex I high-risk duties for many AI medical devices deferred to 2 Aug 2028.',
    structureSummary:
      'Codified risk classifications, conformity obligations for high-risk systems, prohibited practices, GPAI duties, and transparency rules. Digital Omnibus (in force 27 Jul 2026) reset high-risk Chapter III §§1–3 dates.',
    stringencyNote:
      'Among the toughest cross-sector mandates; large administrative fines for systemic violations.',
    timelineNote:
      'General application includes 2 Aug 2026. Annex III high-risk: 2 Dec 2027. Art. 6(1)/Annex I (incl. many MDR/IVDR AI devices): 2 Aug 2028.',
    enforcementNote:
      'Market surveillance authorities, EU AI Board coordination, notified bodies for product legislation, escalating penalties.',
    sources: [
      {
        label: 'AI Act (EUR-Lex)',
        href: 'https://eur-lex.europa.eu/eli/reg/2024/1689/oj',
      },
      {
        label: 'Digital Omnibus on AI (EUR-Lex)',
        href: 'https://eur-lex.europa.eu/eli/reg/2026/1744/oj',
      },
    ],
  },
  {
    id: 'us-fda-samd',
    label: 'United States (FDA AI-enabled devices)',
    jurisdiction: 'FDA CDRH + FDORA §515C PCCPs',
    headline:
      'Strong where AI is a marketed device; August 2025 PCCP guidance structures post-market model changes.',
    structureSummary:
      'Lifecycle rules for AI-enabled device software functions; Predetermined Change Control Plans let authorized modifications proceed without a new submission when implemented exactly as planned.',
    stringencyNote:
      'Mandatory for marketed devices; many physician-facing GPT wrappers fall outside FDA if not marketed as devices.',
    timelineNote:
      'PCCP final guidance issued 18 Aug 2025; product clocks run submission-by-submission.',
    enforcementNote:
      'Recalls, warning letters, injunctions, criminal referrals in egregious cases.',
    sources: [
      {
        label: 'FDA AI-enabled medical devices',
        href: 'https://www.fda.gov/medical-devices/software-medical-device-samd/artificial-intelligence-enabled-medical-devices',
      },
      {
        label: 'FDA PCCP guidance for AI-DSFs',
        href: 'https://www.fda.gov/regulatory-information/search-fda-guidance-documents/marketing-submission-recommendations-predetermined-change-control-plan-artificial-intelligence',
      },
    ],
  },
  {
    id: 'uk-mhra-airlock',
    label: 'United Kingdom (MHRA + NHS)',
    jurisdiction: 'MHRA AI Airlock + devices law + ICO privacy',
    headline:
      'Regulatory sandbox (AI Airlock) feeding future AIaMD guidance; NHS commissioning and ICO privacy sit alongside.',
    structureSummary:
      'AI Airlock pilot (2024–25) and later phases explore synthetic data, LLM validation, drift, and post-market surveillance. Not itself a UKCA pathway.',
    stringencyNote:
      'Depends on device classification, Approved Body assessment, commissioning gatekeeping, and ICO enforcement for personal data.',
    timelineNote:
      'Pilot report 16 Oct 2025; Phase 2 completed May 2026; Phase 3 applications open with PMS priority.',
    enforcementNote:
      'MHRA vigilance, contractual NHS KPIs, ICO monetary penalties.',
    sources: [
      {
        label: 'MHRA AI Airlock collection',
        href: 'https://www.gov.uk/government/collections/ai-airlock-a-regulatory-sandbox-for-ai-enabled-medical-devices',
      },
      {
        label: 'ICO guidance on AI and data protection',
        href: 'https://ico.org.uk/for-organisations/uk-gdpr-guidance-and-resources/artificial-intelligence/',
      },
    ],
  },
  {
    id: 'australia-tga',
    label: 'Australia (TGA software & AI)',
    jurisdiction: 'Therapeutic Goods Act — technology-agnostic device rules',
    headline:
      'AI/ML regulated when intended purpose meets the medical device definition; Essential Principles + GMLP evidence.',
    structureSummary:
      'ARTG inclusion before supply (unless exempt). Manufacturers need transparent evidence of model design, representative clinical data, bias/drift controls, and post-market monitoring. TGA has adopted IMDRF GMLP principles.',
    stringencyNote:
      'Pre-market assessment and post-market obligations under therapeutic goods law; sponsors share duties with manufacturers.',
    timelineNote:
      'AI medical-device software regulation pages updated into 2026; Essential Principles guidance refreshed Nov 2025.',
    enforcementNote:
      'TGA compliance and enforcement powers under the Therapeutic Goods Act; ARTG cancellation or conditions.',
    sources: [
      {
        label: 'TGA AI and medical device software',
        href: 'https://www.tga.gov.au/products/medical-devices/software-and-artificial-intelligence-ai/manufacturing/artificial-intelligence-ai-and-medical-device-software-regulation',
      },
      {
        label: 'TGA evidence requirements for software using AI',
        href: 'https://www.tga.gov.au/products/medical-devices/software-and-artificial-intelligence-ai/manufacturing/artificial-intelligence-ai-and-medical-device-software-regulation/evidence-requirements-software-using-ai',
      },
    ],
  },
  {
    id: 'who-global',
    label: 'World Health Organization',
    jurisdiction: 'Global ethics & governance guidance (non-binding)',
    headline:
      '2021 six principles plus LMM-specific guidance for generative / multi-modal health AI.',
    structureSummary:
      'Ethics and governance of AI for health (2021) and guidance on large multi-modal models set international reference principles that F/P/T and provincial frameworks explicitly aim to complement.',
    stringencyNote:
      'Soft law — influential for policy design, not directly enforceable as statute.',
    timelineNote:
      'Core guidance 28 Jun 2021; LMM guidance published 2024 (ISBN 978-92-4-008475-9).',
    enforcementNote:
      'Member-state implementation; professional and organizational adoption.',
    sources: [
      {
        label: 'WHO ethics & governance of AI for health',
        href: 'https://www.who.int/publications/i/item/9789240029200',
      },
      {
        label: 'WHO LMM guidance',
        href: 'https://www.who.int/publications/i/item/9789240084759',
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
      'Highly adaptive regulators: tightening often shows up via licensing regimes and PDPA fines more than collegiate codes alone.',
    timelineNote:
      'Pilot timelines depend on tech corridors; health pilots align with MOH digital strategy.',
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
