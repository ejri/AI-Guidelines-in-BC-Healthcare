/**
 * BC health system entities with links to issuer sites plus short teaching notes.
 * Policies change; rely on issuer pages, not this sandbox.
 */

export type BcAuthority = {
  id: string
  name: string
  category:
    | 'regional-health-authority'
    | 'provincial-authority'
    | 'professional-college'
    | 'physician-society'
    | 'government'
  website: string
  mandate: string
  aiPrivacyNote: string
  links?: { label: string; href: string }[]
}

export const BC_HEALTH_AUTHORITIES: BcAuthority[] = [
  {
    id: 'fraser',
    name: 'Fraser Health Authority',
    category: 'regional-health-authority',
    website: 'https://www.fraserhealth.ca/',
    mandate:
      'Delivers hospital and community-based care for Fraser Valley and Lower Mainland communities (~1/3 of BC’s population).',
    aiPrivacyNote:
      'Most clinical AI procurements run through negotiated health-information networks; follow health-authority privacy, research ethics (REB where applicable), and medical staff bylaws alongside college guidance.',
    links: [
      {
        label: 'Research ethics (overview)',
        href: 'https://www.fraserhealth.ca/employees/research-and-evaluation/research-ethics-and-other-approvals',
      },
    ],
  },
  {
    id: 'vch',
    name: 'Vancouver Coastal Health',
    category: 'regional-health-authority',
    website: 'https://www.vch.ca/',
    mandate:
      'Serves coastal urban and rural populations including Metro Vancouver.',
    aiPrivacyNote:
      'Digital-health programs (portals, virtual care, documentation tools) impose enterprise privacy/security controls; clinician-facing AI must align with VCH confidentiality policies and CPSBC interim AI principles.',
    links: [
      {
        label: 'Public site',
        href: 'https://www.vch.ca/',
      },
    ],
  },
  {
    id: 'interior',
    name: 'Interior Health',
    category: 'regional-health-authority',
    website: 'https://www.interiorhealth.ca/',
    mandate:
      'Provides services across Interior BC (large geography, mixed rural/urban).',
    aiPrivacyNote:
      'Publishes explicit ethics scaffolding (clinical, research, organizational). AI projects spanning research and clinical operations should intersect with IH ethics frameworks and provincial privacy regimes.',
    links: [
      {
        label: 'Ethics at Interior Health',
        href: 'https://www.interiorhealth.ca/about-ih/accountability/ethics',
      },
    ],
  },
  {
    id: 'island',
    name: 'Island Health',
    category: 'regional-health-authority',
    website: 'https://www.islandhealth.ca/',
    mandate:
      'Covers Vancouver Island and adjacent islands: midsize hubs and coastal rural patches.',
    aiPrivacyNote:
      'Operational AI (scheduling, documentation, decision support pilots) rolls out under Island Health governance; physician accountability remains anchored in CPSBC standards even when employing third-party SaaS vendors.',
    links: [{ label: 'Public site', href: 'https://www.islandhealth.ca/' }],
  },
  {
    id: 'northern',
    name: 'Northern Health',
    category: 'regional-health-authority',
    website: 'https://www.northernhealth.ca/',
    mandate:
      'Serves sparse Northern BC populations with heightened access and equity dilemmas.',
    aiPrivacyNote:
      'Clinical AI fairness issues (training-data mismatch, linguistic or cultural mismatch) hit hard geographically; weigh AI4H equity language against local advisory input when pilots launch.',
    links: [{ label: 'Public site', href: 'https://www.northernhealth.ca/' }],
  },
  {
    id: 'phsa',
    name: 'Provincial Health Services Authority (PHSA)',
    category: 'provincial-authority',
    website: 'https://www.phsa.ca/',
    mandate:
      'Delivers provincial programs (BC Children’s, BC Women’s + BC Mental Health and Substance Use, BC Cancer, BC Centre for Disease Control assets, pathology/blood programs, trauma services).',
    aiPrivacyNote:
      'Highly visible for provincial AI pilots and analytics and lines up with PHSA Indigenous health and anti-racism accountability commitments; read those hubs on phsa.ca directly.',
    links: [
      {
        label: 'PHSA Indigenous Health',
        href: 'https://www.phsa.ca/our-services/programs-services/indigenous-health',
      },
      {
        label: 'PHSA anti-racism accountability',
        href: 'https://www.phsa.ca/about-phsa/accountability/anti-racism',
      },
    ],
  },
  {
    id: 'cpsbc',
    name: 'College of Physicians and Surgeons of BC (CPSBC)',
    category: 'professional-college',
    website: 'https://www.cpsbc.ca/',
    mandate:
      'Regulates physicians and surgeons and publishes interim professional AI expectations tying privacy, transparency, oversight, equity, consent, and accuracy into practice standards.',
    aiPrivacyNote:
      'College guidance does **not** create new statute law; it operationalizes professionalism under statutes like BC PIPA and federal pipelines when PHI crosses contexts.',
    links: [
      {
        label: 'Professional guidelines hub',
        href: 'https://www.cpsbc.ca/registrants/standards-guidelines/professional-guidelines',
      },
      {
        label: 'AI in Medicine (PDF)',
        href: 'https://www.cpsbc.ca/files/pdf/CPSBC-PG-Artificial-Intelligence.pdf',
      },
    ],
  },
  {
    id: 'doctorsbc',
    name: 'Doctors of BC',
    category: 'physician-society',
    website: 'https://www.doctorsbc.ca/',
    mandate:
      'Negotiates remuneration, advocacy, workforce programs, and distributes policy viewpoints important to practising members.',
    aiPrivacyNote:
      'Consult Doctors of BC for MSP documentation rules, contract expectations around digital tooling, emerging AI chatter, equity statements, and anti-racism priorities in parallel with CPSBC standards.',
    links: [{ label: 'Doctors of BC home', href: 'https://www.doctorsbc.ca/' }],
  },
  {
    id: 'moh-bc',
    name: 'Ministry of Health (Province of BC)',
    category: 'government',
    website: 'https://www2.gov.bc.ca/gov/content/government/organization/ministries-organizations/ministries/ministry-of-health',
    mandate:
      'Sets overarching health-system direction, stewardship of public insurance, interoperability policy, provincial digital health modernization.',
    aiPrivacyNote:
      'Clinical AI deployments often hinge on Provincial Digital Health Programs, HIS vendor contracts, and FOIPPA or health-authority sharing agreements; expect ministry or HA sign-offs beyond college documents alone.',
    links: [
      {
        label: 'Health care system accountability',
        href: 'https://www2.gov.bc.ca/gov/content/health/about-bc-s-health-care-system/accountability',
      },
    ],
  },
]
