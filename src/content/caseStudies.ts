export type CaseStudy = {
  id: string
  title: string
  setting: string
  synopsis: string
  tension: string
  reflection: string[]
  frameworks: string[]
}

/** Synthetic scenarios for teaching only (not live patients or real sites). */

export const CASE_STUDIES: CaseStudy[] = [
  {
    id: 'rural-scribe',
    title: 'AI scribe in a small coastal clinic',
    setting: 'Fictional family practice serving a rural Vancouver Island community',
    synopsis:
      'Dr. Sam enables an AI scribe to draft visit notes after long days of back-to-back appointments. Patients appreciate shorter visits, but one patient did not realize audio was being processed by a vendor outside Canada.',
    tension:
      'Efficiency gains versus transparent consent, data residency expectations, and the need to review AI drafts before signing.',
    reflection: [
      'What would meaningful consent sound like for your panel?',
      'Where is audio processed, for how long, and who is accountable if the note is wrong?',
    ],
    frameworks: ['CPSBC AI guidance themes', 'PIPA / OIPC transparency', 'AI4H privacy & person-centricity'],
  },
  {
    id: 'diagnostic-bias',
    title: 'Dermatology classifier and skin tone',
    setting: 'Fictional specialist clinic in Metro Vancouver',
    synopsis:
      'A diagnostic support tool was trained predominantly on lighter skin tones. Several patients with richly pigmented skin receive lower-confidence scores for the same morphology seen during exam.',
    tension:
      'Statistical validation on narrow cohorts can quietly worsen outcomes for equity-seeking groups.',
    reflection: [
      'What subgroup performance evidence would you demand before adopting?',
      'How would you document a decision to ignore or override the model?',
    ],
    frameworks: ['AI4H equity & safety', 'CPSBC bias & EDI lens', 'WHO AI ethics (well-being & autonomy)'],
  },
  {
    id: 'indigenous-documentation',
    title: 'Traditional wellness and the EMR template',
    setting: 'Fictional interdisciplinary team in Northern BC',
    synopsis:
      'An AI documentation assistant suggests templated phrases that flatten a patient’s description of cultural practices into generic “lifestyle” language, losing clinically and spiritually relevant context.',
    tension:
      'Cultural safety means naming power and systemic racism, not ticking box labels on intake forms. Standard templates erase nuance fast.',
    reflection: [
      'How might AI documentation reinforce deficit-based narratives?',
      'Who should review templates and scribe outputs from an Indigenous-led lens?',
    ],
    frameworks: [
      'Cultural safety vs. competence (self-reflection & systems)',
      'PHSA Indigenous health & anti-racism resources',
      'AI4H person-centricity',
    ],
  },
  {
    id: 'itp-credentialing',
    title: 'Credentialing analytics and internationally trained physicians',
    setting: 'Fictional health authority workforce program',
    synopsis:
      'A vendor proposes an AI-assisted dashboard ranking applicants using training data from prior cohorts. Historically, those cohorts under-represent successful internationally trained physicians (ITPs).',
    tension:
      'Even “neutral” metrics can inherit structural bias; new technology can speed up unfair gates.',
    reflection: [
      'Which fairness checks would you require before procurement?',
      'How can physician-led governance protect due process?',
    ],
    frameworks: ['Doctors of BC equity priorities', 'AI4H accountability', 'EDI in hiring analytics'],
  },
]
