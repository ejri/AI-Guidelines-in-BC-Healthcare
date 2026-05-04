/** Curated authority links (each opens outside this site). */

export const CPSBC_AI_PDF =
  'https://www.cpsbc.ca/files/pdf/CPSBC-PG-Artificial-Intelligence.pdf'

export const CPSBC_PROFESSIONAL_GUIDELINES =
  'https://www.cpsbc.ca/registrants/standards-guidelines/professional-guidelines'

export const AI4H_PRINCIPLES =
  'https://www.canada.ca/en/health-canada/corporate/transparency/health-agreements/pan-canadian-ai-guiding-principles.html'

export const OIPC_BC = 'https://www.oipc.bc.ca/'

export const PIPEDA_OVERVIEW =
  'https://www.priv.gc.ca/en/privacy-topics/privacy-laws-in-canada/the-personal-information-protection-and-electronic-documents-act-pipeda/'

export const HEALTH_CANADA_AI_MEDICAL_DEVICES =
  'https://www.canada.ca/en/health-canada/services/drugs-health-products/medical-devices/ai-machine-learning.html'

export const DOCTORS_OF_BC = 'https://www.doctorsbc.ca/'

export const PHSA_INDIGENOUS_HEALTH = 'https://www.phsa.ca/our-services/programs-services/indigenous-health'

export const PHSA_ANTI_RACISM = 'https://www.phsa.ca/about-phsa/accountability/anti-racism'

export const DIGITAL_SUPERCLUSTER = 'https://www.digitalsupercluster.ca/'

export const BC_AI_ECOSYSTEM = 'https://bc-ai.ca/'

export const UBC_FACULTY_MEDICINE = 'https://www.med.ubc.ca/'

/** Data Science and Health (DASH) Cluster, UBC Faculty of Medicine. */
export const UBC_DASH_CLUSTER = 'https://datascienceandhealth.ubc.ca/'

export const UBC_CPD = 'https://cpd.med.ubc.ca/'

export const WHO_AI_ETHICS =
  'https://www.who.int/publications/i/item/ethics-and-governance-of-artificial-intelligence-for-health'

export const BCMJ = 'https://www.bcmj.org/'

export type SearchHit = {
  title: string
  to: string
  keywords: string
}

/** Client-side search index (no network). */
export const SITE_SEARCH_INDEX: SearchHit[] = [
  {
    title: 'Home',
    to: '/',
    keywords:
      'dashboard overview bc physicians residents zero retention sandbox',
  },
  {
    title: 'Guidelines',
    to: '/guidelines',
    keywords:
      'cpsbc college ai4h pipa pipeda oipc privacy consent transparency bias oversight canada health',
  },
  {
    title: 'Checklists & tools',
    to: '/checklists',
    keywords:
      'scribe consent diagnostic self assessment checklist localstorage session tools',
  },
  {
    title: 'Case studies',
    to: '/case-studies',
    keywords:
      'scenarios bcmj rural surrey vgh indigenous bias internationally trained physician itp cultural safety',
  },
  {
    title: 'Myth-busting',
    to: '/myth-busting',
    keywords:
      'llm chatgpt phi training data emr misconceptions myths public model',
  },
  {
    title: 'Ecosystem',
    to: '/ecosystem',
    keywords:
      'digital supercluster phsa ubc cpd doctors bc training events hubs',
  },
  {
    title: 'About',
    to: '/about',
    keywords:
      'ubc faculty medicine dash data science health cluster feedback course instructor contact email version',
  },
  {
    title: 'Privacy',
    to: '/privacy',
    keywords:
      'policy pipeda pipa fathom plausible analytics robots no cookies retention',
  },
  {
    title: 'Updates',
    to: '/updates',
    keywords:
      'news changelog releases cpsbc policy revision effective date tags filter',
  },
  {
    title: 'BC health system',
    to: '/bc-health-authorities',
    keywords:
      'fraser health vch interior northern island phsa ministry doctors bc regional authority',
  },
  {
    title: 'Global compare',
    to: '/global-comparison',
    keywords:
      'comparison eu ai act fda who singapore uk nhs mhra stringency timelines enforcement accountability',
  },
]
