/** Curated authority links (each opens outside this site). */

export const MOH_RESPONSIBLE_AI_PAGE =
  'https://www2.gov.bc.ca/gov/content/health/practitioner-professional-resources/responsible-artificial-intelligence-policy-framework'

export const MOH_RESPONSIBLE_AI_PDF =
  'https://www2.gov.bc.ca/assets/gov/health/practitioner-pro/responsible_ai_policy_framework_final_2026_06.pdf'

export const OCIO_GEN_AI_POLICY = 'https://digital.gov.bc.ca/ai/gen-ai-policy/'

export const OCIO_AI_PRINCIPLES =
  'https://digital.gov.bc.ca/ai/draft-responsible-use-principles/'

export const CPSBC_AI_PDF =
  'https://www.cpsbc.ca/files/pdf/CPSBC-PG-Artificial-Intelligence.pdf'

export const CPSBC_PROFESSIONAL_GUIDELINES =
  'https://www.cpsbc.ca/registrants/standards-guidelines/professional-guidelines'

export const AI4H_PRINCIPLES =
  'https://www.canada.ca/en/health-canada/corporate/transparency/health-agreements/pan-canadian-ai-guiding-principles.html'

export const HEALTH_CANADA_MLMD =
  'https://www.canada.ca/en/health-canada/services/drugs-health-products/medical-devices/application-information/guidance-documents/pre-market-guidance-machine-learning-enabled-medical-devices.html'

export const HEALTH_CANADA_GMLP =
  'https://www.canada.ca/en/health-canada/services/drugs-health-products/medical-devices/good-machine-learning-practice-medical-device-development.html'

export const OIPC_BC = 'https://www.oipc.bc.ca/'

export const OIPC_AI_SCRIBES =
  'https://www.oipc.bc.ca/documents/guidance-documents/3082'

export const OIPC_AI_SCRIBES_NEWS =
  'https://www.oipc.bc.ca/documents/news-releases/3083'

export const OIPC_GENAI_TIPS =
  'https://oipc.bc.ca/documents/guidance-documents/3229'

export const BCCNM_DOCUMENTATION_AI =
  'https://www.bccnm.ca/RN/PracticeStandards/Pages/documentation.aspx'

export const BCCNM_AI_LEARNING =
  'https://www.bccnm.ca/RM/learning/artificial-intelligence/Pages/Default.aspx'

export const DOCTORS_BC_AI_SCRIBES =
  'https://www.doctorsofbc.ca/advice-support/doctors-technology-office/ai-scribe-technologies/practical-considerations-using-ai'

export const HEALTH_CANADA_MLMD_TRANSPARENCY =
  'https://www.canada.ca/en/health-canada/services/drugs-health-products/medical-devices/transparency-machine-learning-guiding-principles.html'

export const CMA_SENATE_AI_BRIEF_2026 =
  'https://sencanada.ca/Content/Sen/Committee/451/SOCI/briefs/2026-05-11_SOCI_SS-2_Brief_CMA_e.pdf'

export const GETTING_AHEAD_OF_THE_CURVE =
  'https://bcombudsperson.ca/assets/media/OMB-GettingAheadoftheCurve-v6.pdf'

export const PIPEDA_OVERVIEW =
  'https://www.priv.gc.ca/en/privacy-topics/privacy-laws-in-canada/the-personal-information-protection-and-electronic-documents-act-pipeda/'

export const HEALTH_CANADA_AI_MEDICAL_DEVICES =
  'https://www.canada.ca/en/health-canada/services/drugs-health-products/medical-devices/ai-machine-learning.html'

export const DOCTORS_OF_BC =
  'https://www.doctorsofbc.ca/advocacy-policy/policy/artificial-intelligence-health-care'

export const PHSA_AI_RESEARCH_HUB =
  'https://www.phsa.ca/researcher/resources/artificial-intelligence'

export const PHSA_INDIGENOUS_HEALTH =
  'https://www.phsa.ca/our-services/programs-services/indigenous-health'

export const PHSA_ANTI_RACISM =
  'https://www.phsa.ca/about-phsa/accountability/anti-racism'

export const DIGITAL_SUPERCLUSTER = 'https://www.digitalsupercluster.ca/'

export const BC_AI_ECOSYSTEM = 'https://bc-ai.ca/'

export const UBC_FACULTY_MEDICINE = 'https://www.med.ubc.ca/'

/** Data Science and Health (DASH) Cluster, UBC Faculty of Medicine. */
export const UBC_DASH_CLUSTER = 'https://datascienceandhealth.ubc.ca/'

export const UBC_CPD = 'https://cpd.med.ubc.ca/'

export const WHO_AI_ETHICS =
  'https://www.who.int/publications/i/item/9789240029200'

export const WHO_LMM_GUIDANCE =
  'https://www.who.int/publications/i/item/9789240084759'

export const EU_AI_ACT = 'https://eur-lex.europa.eu/eli/reg/2024/1689/oj'

export const EU_AI_ACT_OMNIBUS =
  'https://eur-lex.europa.eu/eli/reg/2026/1744/oj'

export const FDA_AI_DEVICES =
  'https://www.fda.gov/medical-devices/software-medical-device-samd/artificial-intelligence-enabled-medical-devices'

export const FDA_PCCP =
  'https://www.fda.gov/regulatory-information/search-fda-guidance-documents/marketing-submission-recommendations-predetermined-change-control-plan-artificial-intelligence'

export const MHRA_AI_AIRLOCK =
  'https://www.gov.uk/government/collections/ai-airlock-a-regulatory-sandbox-for-ai-enabled-medical-devices'

export const TGA_AI_MD =
  'https://www.tga.gov.au/products/medical-devices/software-and-artificial-intelligence-ai/manufacturing/artificial-intelligence-ai-and-medical-device-software-regulation'

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
      'dashboard overview bc physicians residents zero retention sandbox ministry responsible ai',
  },
  {
    title: 'Guidelines',
    to: '/guidelines',
    keywords:
      'cpsbc college ai4h pipa pipeda oipc privacy consent transparency bias oversight canada health moh responsible framework ocio',
  },
  {
    title: 'PHSA AI research',
    to: '/phsa-ai-research',
    keywords:
      'phsa generative genai research working group grant review chatgpt literature lay summary code pytorch tensorflow bias privacy plagiarism mitigation toolkit navigating learning hub tri-agency',
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
      'news changelog releases cpsbc policy revision effective date tags filter moh eu omnibus',
  },
  {
    title: 'BC health system',
    to: '/bc-health-authorities',
    keywords:
      'fraser health vch interior northern island phsa ministry doctors bc regional authority shared health services',
  },
  {
    title: 'Global compare',
    to: '/global-comparison',
    keywords:
      'comparison eu ai act fda who singapore uk nhs mhra tga stringency timelines enforcement accountability omnibus',
  },
]
