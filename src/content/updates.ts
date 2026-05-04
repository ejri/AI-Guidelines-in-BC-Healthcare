import { CPSBC_AI_PDF } from '@/content/external'

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
    id: 'cpsbc-ai-ethics-core',
    title: 'Ethical Principles for Artificial Intelligence in Medicine',
    authority: 'College of Physicians and Surgeons of BC (CPSBC)',
    effectiveDate: 'April 11, 2024',
    revisedDate: 'April 1, 2026 (verify on CPSBC before citing)',
    versionLabel: 'Version 1.2 (confirm current edition)',
    summary:
      'Interim College guidance spelling out privacy/consent, accuracy, transparency/interpretability, bias and monitoring expectations when physicians integrate AI, covering documentation tools such as scribes.',
    tags: ['consent', 'privacy', 'bias', 'oversight', 'professionalism'],
    toolkitSection:
      'Guidelines → CPSBC tab (embedded PDF) + Doctors of BC contextual tab.',
    primaryUrl: CPSBC_AI_PDF,
    verifiedNote:
      'Publication metadata (effective / revised / version) MUST be reconciled against CPSBC’s live PDF/HTML before external communication.',
  },
  {
    id: 'ai4h-national',
    title: 'Pan-Canadian AI for Health (AI4H) guiding principles',
    authority: 'Health Canada (with F/P/T Ministers)',
    effectiveDate: 'Rolling (confirm milestone dates with Canada.ca news releases)',
    summary:
      'National person-centricity / EDI / privacy / safety / accountability language that provinces and health entities reference when structuring AI procurements.',
    tags: ['governance', 'equity', 'privacy', 'safety'],
    toolkitSection: 'Guidelines → AI4H tab.',
    primaryUrl:
      'https://www.canada.ca/en/health-canada/corporate/transparency/health-agreements/pan-canadian-ai-guiding-principles.html',
    verifiedNote:
      'HTML guidance route: Canada.ca publishes many updates online without distributing a stationary “official PDF”.',
  },
  {
    id: 'oipc-bc-guidance-ai',
    title: 'OIPC interpretations & commissioner guidance affecting digital health vendors',
    authority: 'Office of the Information & Privacy Commissioner for BC',
    effectiveDate: 'Rolling (guidance corpus updated continuously)',
    summary:
      'Clarifies how BC private- and public-sector privacy instruments attach when SaaS transcription, analytics clouds, or subprocessors touch health data even when CPSBC interim AI wording omits that nuance.',
    tags: ['privacy', 'breach-response', 'transparency'],
    toolkitSection: 'Guidelines → PIPA/OIPC tab.',
    primaryUrl: 'https://www.oipc.bc.ca/',
  },
  {
    id: 'pipeda-ai-commerce',
    title: 'PIPEDA & related OPC guidance impacting commercial health SaaS processors',
    authority: 'Office of the Privacy Commissioner of Canada',
    effectiveDate: 'Rolling (interpretations evolve with AI commerce)',
    summary:
      'Explains lawful basis, accountability, and algorithmic transparency hooks for federally regulated pipelines; overlaps with wording in provincial health-authority SaaS clauses.',
    tags: ['privacy', 'commerce', 'algorithms'],
    toolkitSection:
      'Guidelines → Privacy tab references + Links to OPC resources.',
    primaryUrl:
      'https://www.priv.gc.ca/en/privacy-topics/technology-artificial-intelligence/',
  },
  {
    id: 'doctorsbc-equity-ai',
    title: 'Doctors of BC policy currents on systemic racism / equity juxtaposed against AI rollout',
    authority: 'Doctors of BC',
    effectiveDate: 'Review site for dated bulletins affecting practice',
    summary:
      'States association expectations for professionalism and equitable care that sit alongside CPSBC equity or bias language when AI changes documentation workflows or referrals.',
    tags: ['equity', 'anti-racism', 'cultural-safety'],
    toolkitSection: 'Guidelines → Doctors of BC tab.',
    primaryUrl: 'https://www.doctorsbc.ca/',
  },
]

export const ALL_UPDATE_TAGS = Array.from(
  new Set(POLICY_UPDATES.flatMap((u) => u.tags)),
).sort()
