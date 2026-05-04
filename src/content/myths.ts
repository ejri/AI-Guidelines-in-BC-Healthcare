export type Myth = {
  id: string
  myth: string
  reality: string
  takeaway: string
}

export const MYTHS: Myth[] = [
  {
    id: 'emr-access',
    myth: '“Public LLMs can’t see my EMR, so anything I type is low risk.”',
    reality:
      'Even without EMR integration, text you paste into consumer tools is processed by a third party and may be stored, logged, or reused for model training outside your hospital privacy agreements.',
    takeaway:
      'Treat public chat interfaces like a crowded room: do not enter identifiable patient information.',
  },
  {
    id: 'deid',
    myth: '“If I remove the name, it’s fine to paste the chart into an AI tool.”',
    reality:
      'De-identification is contextual. Details such as rare diagnoses, small communities, or timeline clues can be re-linked. PIPEDA/PIPA expectations still push toward minimization and controlled environments.',
    takeaway:
      'Use synthetic vignettes in this sandbox; for real charts, follow organizational privacy review.',
  },
  {
    id: 'autopilot',
    myth: '“The AI cleared it, so I’m covered professionally.”',
    reality:
      'CPSBC guidance stresses physician accountability, transparency with patients, and critical appraisal (bias reviews and monitoring included).',
    takeaway:
      'AI may inform care; it does not replace your professional judgment or documentation accountability.',
  },
  {
    id: 'scribe-passive',
    myth: '“The scribe just listens, so it’s basically dictation.”',
    reality:
      'Many scribe pipelines involve cloud vendors, retention policies, and error modes (hallucinated symptoms). Consent and accuracy obligations remain with the care team.',
    takeaway:
      'Map data flows, disclose use, and audit notes like any high-risk documentation change.',
  },
]
