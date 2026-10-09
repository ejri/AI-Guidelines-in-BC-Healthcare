import {
  CPSBC_AI_PDF,
  HEALTH_CANADA_MLMD,
  MOH_RESPONSIBLE_AI_PAGE,
  MOH_RESPONSIBLE_AI_PDF,
  OCIO_GEN_AI_POLICY,
  OIPC_AI_SCRIBES,
  EU_AI_ACT_OMNIBUS,
  FDA_PCCP,
  WHO_LMM_GUIDANCE,
} from '@/content/external'

export type PolicyUpdate = {
  id: string
  title: string
  authority: string
  effectiveDate: string
  revisedDate?: string
  versionLabel?: string
  summary: string
  tags: string[]
  /** Where to study the authoritative text in this toolkit */
  toolkitSection?: string
  primaryUrl?: string
  /** Verification note (always reconcile with issuer text). */
  verifiedNote?: string
}

/** Curated pedagogical changelog. Dates/versions MUST be reconciled against issuer sites before relying on them. */
export const POLICY_UPDATES: PolicyUpdate[] = [
  {
    id: 'moh-responsible-ai-2026',
    title: 'Responsible AI Policy Framework for the B.C. Health Sector',
    authority: 'BC Ministry of Health',
    effectiveDate: 'June 2026 (PDF); public page updated 24 September 2026',
    versionLabel: 'Final PDF June 2026',
    summary:
      'Lifecycle governance, eight principles (including Indigenous rights and reconciliation), risk management, informed consent, named system owners, human-in-the-loop for diagnosis support, incident management, and procurement rules for MoH, health authorities, and BC Shared Health Services. Initial compliance expectation 31 August 2027. Does not apply to private-practice-only providers.',
    tags: [
      'governance',
      'lifecycle',
      'indigenous',
      'procurement',
      'consent',
      'oversight',
    ],
    toolkitSection: 'Guidelines → MoH Responsible AI Framework.',
    primaryUrl: MOH_RESPONSIBLE_AI_PDF,
    verifiedNote:
      'Landing page: ' +
      MOH_RESPONSIBLE_AI_PAGE +
      ' — contact HealthAI.Policy@gov.bc.ca.',
  },
  {
    id: 'eu-ai-act-omnibus-2026',
    title: 'EU AI Act Digital Omnibus — high-risk medical device deferral',
    authority: 'European Union (Regulation (EU) 2026/1744)',
    effectiveDate: '27 July 2026 (entry into force)',
    summary:
      'Amends Regulation (EU) 2024/1689. Chapter III §§1–3 high-risk duties apply from 2 December 2027 for Annex III systems and 2 August 2028 for Article 6(1)/Annex I systems (including many AI-enabled MDR/IVDR devices). General application / Article 50 transparency remains tied to 2 August 2026 unless a specific transition applies.',
    tags: ['regulation', 'devices', 'timeline', 'eu'],
    toolkitSection: 'Global compare → EU AI Act.',
    primaryUrl: EU_AI_ACT_OMNIBUS,
  },
  {
    id: 'cpsbc-ai-ethics-core',
    title: 'Ethical Principles for Artificial Intelligence in Medicine',
    authority: 'College of Physicians and Surgeons of BC (CPSBC)',
    effectiveDate: 'April 11, 2024',
    revisedDate: 'April 1, 2026',
    versionLabel: 'Version 1.2',
    summary:
      'Interim College guidance on privacy/consent, accuracy, transparency/interpretability, bias, monitoring, and AI-scribe expectations (informed consent, audio storage awareness, review before chart entry, licensee liability).',
    tags: ['consent', 'privacy', 'bias', 'oversight', 'professionalism', 'scribes'],
    toolkitSection:
      'Guidelines → CPSBC tab (embedded PDF) + Doctors of BC contextual tab.',
    primaryUrl: CPSBC_AI_PDF,
  },
  {
    id: 'health-canada-mlmd-2026',
    title: 'Pre-market guidance for machine learning-enabled medical devices',
    authority: 'Health Canada',
    effectiveDate: 'April 1, 2026',
    summary:
      'Lifecycle evidence expectations for Class II–IV MLMD licence applications, including GMLP, data governance, clinical validation, transparency, post-market monitoring, and Predetermined Change Control Plans (PCCPs).',
    tags: ['devices', 'safety', 'pccp', 'federal'],
    toolkitSection: 'Guidelines → Health Canada MLMD.',
    primaryUrl: HEALTH_CANADA_MLMD,
  },
  {
    id: 'oipc-bc-ai-scribes',
    title: 'PIPA and AI scribes: best practices for healthcare organizations in BC',
    authority: 'Office of the Information & Privacy Commissioner for BC',
    effectiveDate: 'January 28, 2026',
    summary:
      'Guidance and checklist for PIPA organizations (private practices / most primary-care clinics). Express consent, vendor accountability, human-in-the-loop, cross-border assessment. Does not apply to FIPPA public bodies.',
    tags: ['privacy', 'scribes', 'consent', 'pipa'],
    toolkitSection: 'Guidelines → PIPA/OIPC tab.',
    primaryUrl: OIPC_AI_SCRIBES,
  },
  {
    id: 'ocio-genai-2025',
    title: 'Policy on the use of generative AI (BC Public Service)',
    authority: 'BC Office of the Chief Information Officer',
    effectiveDate: 'May 9, 2025',
    summary:
      'Confidential/personal information only in approved enterprise tools (e.g. Copilot Chat with IDIR); never in public ChatGPT-class tools. Mandatory output review for accuracy and inclusive style. Companion to the MoH health-sector framework.',
    tags: ['generative-ai', 'privacy', 'public-service'],
    toolkitSection: 'Guidelines → OCIO gen-AI policy.',
    primaryUrl: OCIO_GEN_AI_POLICY,
  },
  {
    id: 'fda-pccp-2025',
    title: 'Marketing submission recommendations for AI-enabled PCCPs',
    authority: 'U.S. Food and Drug Administration',
    effectiveDate: 'August 18, 2025',
    summary:
      'Final guidance on Predetermined Change Control Plans for AI-enabled device software functions (description of modifications, modification protocol, impact assessment) in 510(k), De Novo, and PMA pathways.',
    tags: ['fda', 'pccp', 'devices'],
    toolkitSection: 'Global compare → FDA.',
    primaryUrl: FDA_PCCP,
  },
  {
    id: 'who-lmm',
    title: 'Ethics and governance of AI for health: large multi-modal models',
    authority: 'World Health Organization',
    effectiveDate: '2024 (ISBN 978-92-4-008475-9)',
    summary:
      'WHO guidance on benefits, risks, and governance of large multi-modal / generative models in health, building on the 2021 six principles.',
    tags: ['who', 'generative-ai', 'ethics'],
    toolkitSection: 'Global compare → WHO.',
    primaryUrl: WHO_LMM_GUIDANCE,
  },
  {
    id: 'ai4h-national',
    title: 'Pan-Canadian AI for Health (AI4H) guiding principles',
    authority: 'Health Canada (with F/P/T Ministers)',
    effectiveDate: 'Rolling (confirm milestone dates with Canada.ca)',
    summary:
      'Nine shared principles from person-centricity through Indigenous-led governance and data sovereignty; Quebec maintains autonomy over its health system planning.',
    tags: ['governance', 'equity', 'privacy', 'safety', 'indigenous'],
    toolkitSection: 'Guidelines → AI4H tab.',
    primaryUrl:
      'https://www.canada.ca/en/health-canada/corporate/transparency/health-agreements/pan-canadian-ai-guiding-principles.html',
  },
]

export const ALL_UPDATE_TAGS = Array.from(
  new Set(POLICY_UPDATES.flatMap((u) => u.tags)),
).sort()
