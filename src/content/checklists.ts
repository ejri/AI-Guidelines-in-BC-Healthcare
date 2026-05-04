export type ChecklistItem = {
  id: string
  label: string
  hint?: string
}

/** Themes distilled from CPSBC interim AI guidance; still read the College PDF. */
export const SCRIBE_CONSENT_ITEMS: ChecklistItem[] = [
  {
    id: 'purpose',
    label:
      'Patients (or substitute decision-makers) understand why audio, dictation, or AI-assisted documentation is used.',
    hint: 'Align with organizational consent workflows and CPSBC expectations for meaningful consent.',
  },
  {
    id: 'privacy-flow',
    label:
      'I can describe where voice or text goes (on-device, hospital-managed, vendor cloud) and retention/deletion.',
  },
  {
    id: 'accuracy-review',
    label:
      'I will review AI-generated notes before signing or sharing them; I know how to correct errors promptly.',
  },
  {
    id: 'sensitive-topics',
    label:
      'There is a plan for sensitive portions of visits (e.g., trauma, stigma) if recording or cloud processing is inappropriate.',
  },
  {
    id: 'equity-language',
    label:
      'I have considered whether the scribe handles names, pronouns, community terms, and culturally specific content respectfully.',
  },
  {
    id: 'oversight',
    label:
      'My site has a point person or policy for scribe incidents (mis-transcription, privacy concern, vendor change).',
  },
]

export const DIAGNOSTIC_AI_ITEMS: ChecklistItem[] = [
  {
    id: 'indication',
    label:
      'The intended use matches my clinical question; I am not relying on a tool cleared for a different purpose.',
  },
  {
    id: 'validation',
    label:
      'I have reviewed validation evidence and limitations, especially for subgroups relevant to BC practice.',
  },
  {
    id: 'override',
    label:
      'There is a clear, low-friction path for me to disagree with the model and document clinical reasoning.',
  },
  {
    id: 'bias-edi',
    label:
      'I have considered equity impacts (skin tone, sex/gender, age, comorbidity spectrum) and Indigenous data sovereignty where applicable.',
  },
  {
    id: 'consent-transparency',
    label:
      'Patients are informed when AI materially influences diagnosis or testing decisions, per local policy and CPSBC themes.',
  },
  {
    id: 'monitoring',
    label:
      'Quality metrics or chart audits exist (or are planned) to catch drift, underperformance, or safety signals.',
  },
]

export const STORAGE_KEYS = {
  scribe: 'bc-rai-checklist-scribe-v1',
  diagnostic: 'bc-rai-checklist-diagnostic-v1',
} as const
