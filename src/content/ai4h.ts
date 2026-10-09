/** Summaries aligned with Health Canada’s nine AI4H guiding principles; confirm wording on Canada.ca. */

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
      'The well-being and diverse perspectives of people in Canada, including specific populations, are central to decisions about AI adoption and the health data AI relies on.',
    practicePrompt:
      'Who benefits from this tool in my panel, and who might be left out if workflows change?',
  },
  {
    id: 'edi',
    title: 'Equity, diversity, and inclusion',
    summary:
      'AI should support fair, culturally appropriate access to high-quality care while minimizing bias and reducing health inequities.',
    practicePrompt:
      'Was the model validated on populations that resemble my community, including rural, Indigenous, and racialized patients?',
  },
  {
    id: 'privacy-security',
    title: 'Privacy and security',
    summary:
      'Health data used with AI is protected through consent, de-identification, safeguards, and clear stewardship under applicable privacy law.',
    practicePrompt:
      'Where does patient information go (jurisdiction, subprocessors), and is my health authority comfortable with that flow?',
  },
  {
    id: 'safety-oversight',
    title: 'Safety and oversight',
    summary:
      'AI is developed and used safely with multi-stakeholder oversight, lifecycle monitoring, evidence-based benchmarks, and clear regulatory or procurement frameworks.',
    practicePrompt:
      'What is my plan when the tool is wrong? How will I spot it fast and document who owned the call?',
  },
  {
    id: 'accountability',
    title: 'Accountability and responsibility',
    summary:
      'Developers, purchasers, operators, and regulators share clear accountability for ethical development, adoption, use, and oversight.',
    practicePrompt:
      'Who at my site owns policy, privacy review, and quality checks for this deployment?',
  },
  {
    id: 'transparency',
    title: 'Transparency and understandability',
    summary:
      'The public, professionals, and patients know how, when, and where AI supports decisions and what impacts may follow.',
    practicePrompt:
      'Can I explain to a patient, in plain language, when and why AI influenced their care?',
  },
  {
    id: 'literacy',
    title: 'AI literacy',
    summary:
      'People and professionals receive education appropriate to their roles so they can make informed decisions and use AI responsibly.',
    practicePrompt:
      'What literacy gap exists on my team before we go live, and how will we close it?',
  },
  {
    id: 'data-practices',
    title: 'Robust data and data practices',
    summary:
      'Governments and partners improve quality, secure access, and exchange of representative health data aligned with the Pan-Canadian Health Data Charter.',
    practicePrompt:
      'Is the training and monitoring data representative of the patients this tool will actually see?',
  },
  {
    id: 'indigenous-governance',
    title: 'Indigenous-led governance and data sovereignty',
    summary:
      'All AI4H principles must respect Indigenous-led governance frameworks and Indigenous Peoples’ rights to self-determination and data sovereignty.',
    practicePrompt:
      'Have Indigenous partners been engaged where data, design, or deployment affect Indigenous communities?',
  },
]
