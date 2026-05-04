/** Summaries aligned with Health Canada’s AI4H guiding principles; confirm wording on Canada.ca. */

export type Ai4hPrinciple = {
  id: string
  title: string
  summary: string
  practicePrompt: string
}

export const AI4H_PRINCIPLES_SUMMARY: Ai4hPrinciple[] = [
  {
    id: 'person-centricity',
    title: 'Person-centricity',
    summary:
      'The well-being of people in Canada, including equity-seeking groups, should shape how AI is adopted, governed, and evaluated in health settings.',
    practicePrompt:
      'Who benefits from this tool in my panel, and who might be left out if workflows change?',
  },
  {
    id: 'edi',
    title: 'Equity, diversity, and inclusion',
    summary:
      'AI should narrow gaps, not widen them. Check training data, validation cohorts, and downstream access and quality effects.',
    practicePrompt:
      'Was the model validated on populations that resemble my community, including rural, Indigenous, and racialized patients?',
  },
  {
    id: 'privacy-security',
    title: 'Privacy and security',
    summary:
      'Health information used with AI must be protected through appropriate consent, minimization, safeguards, and clear accountability.',
    practicePrompt:
      'Where does patient information go (jurisdiction, subprocessors), and is my health authority comfortable with that flow?',
  },
  {
    id: 'safety-assurance',
    title: 'Safety and assurance',
    summary:
      'AI systems should be sufficiently safe for their intended use, with monitoring, incident learning, and human oversight when stakes are high.',
    practicePrompt:
      'What is my plan when the tool is wrong? How will I spot it fast and document who owned the call?',
  },
  {
    id: 'transparency',
    title: 'Transparency and explainability',
    summary:
      'People affected by AI-assisted decisions should receive understandable information about how AI is used, its limits, and how to ask questions.',
    practicePrompt:
      'Can I explain to a patient, in plain language, when and why AI influenced their care?',
  },
  {
    id: 'accountability',
    title: 'Accountability and oversight',
    summary:
      'Roles and responsibilities across vendors, organizations, and clinicians should be clear, with governance that can adapt as technology changes.',
    practicePrompt:
      'Who at my site owns policy, privacy review, and quality checks for this deployment?',
  },
]
