export type EcosystemLink = {
  label: string
  href: string
  description: string
}

export type EcosystemSection = {
  id: string
  title: string
  description: string
  links: EcosystemLink[]
}

export const ECOSYSTEM_SECTIONS: EcosystemSection[] = [
  {
    id: 'college-privacy',
    title: 'College, privacy, and federal regulators',
    description:
      'Primary standards and privacy commissioners referenced throughout the toolkit.',
    links: [
      {
        label: 'CPSBC: Professional guidelines',
        href: 'https://www.cpsbc.ca/registrants/standards-guidelines/professional-guidelines',
        description: 'College standards hub (includes AI interim guidance links).',
      },
      {
        label: 'CPSBC: AI in medicine (PDF)',
        href: 'https://www.cpsbc.ca/files/pdf/CPSBC-PG-Artificial-Intelligence.pdf',
        description: 'Ethical principles for artificial intelligence in medicine.',
      },
      {
        label: 'OIPC BC',
        href: 'https://www.oipc.bc.ca/',
        description: 'BC information and privacy commissioner guidance.',
      },
      {
        label: 'Office of the Privacy Commissioner of Canada (PIPEDA)',
        href: 'https://www.priv.gc.ca/en/privacy-topics/privacy-laws-in-canada/the-personal-information-protection-and-electronic-documents-act-pipeda/',
        description: 'Federal private-sector privacy law overview.',
      },
      {
        label: 'Health Canada: AI4H guiding principles',
        href: 'https://www.canada.ca/en/health-canada/corporate/transparency/health-agreements/pan-canadian-ai-guiding-principles.html',
        description: 'National FPT principles for responsible AI in health.',
      },
      {
        label: 'Health Canada: AI and medical devices',
        href: 'https://www.canada.ca/en/health-canada/services/drugs-health-products/medical-devices/ai-machine-learning.html',
        description: 'Regulatory context for AI-enabled medical devices.',
      },
    ],
  },
  {
    id: 'ubc-bc',
    title: 'UBC, provincial associations, and BC hubs',
    description:
      'Training, faculty resources, and networks named in the course design brief.',
    links: [
      {
        label: 'UBC Faculty of Medicine',
        href: 'https://www.med.ubc.ca/',
        description: 'Home faculty for this educational sandbox.',
      },
      {
        label: 'DASH: Data Science and Health Cluster',
        href: 'https://datascienceandhealth.ubc.ca/',
        description:
          'FoM cluster linking health research data in BC for discovery and better outcomes.',
      },
      {
        label: 'UBC Continuing Professional Development',
        href: 'https://cpd.med.ubc.ca/',
        description: 'CPD offerings for practicing clinicians.',
      },
      {
        label: 'Doctors of BC',
        href: 'https://www.doctorsbc.ca/',
        description: 'Provincial medical association policies and advocacy.',
      },
      {
        label: 'DIGITAL Supercluster',
        href: 'https://www.digitalsupercluster.ca/',
        description: 'National digital technology cluster with BC participation.',
      },
      {
        label: 'BC + AI Ecosystem',
        href: 'https://bc-ai.ca/',
        description: 'Grassroots BC AI community, ethics programming, and events.',
      },
    ],
  },
  {
    id: 'cultural-equity',
    title: 'Cultural safety, PHSA, and global ethics framing',
    description:
      'Resources supporting Indigenous cultural safety, anti-racism, and WHO ethics framing cited in the research toolkit.',
    links: [
      {
        label: 'PHSA: Indigenous Health',
        href: 'https://www.phsa.ca/our-services/programs-services/indigenous-health',
        description: 'Provincial programs and cultural safety materials.',
      },
      {
        label: 'PHSA: Anti-racism accountability',
        href: 'https://www.phsa.ca/about-phsa/accountability/anti-racism',
        description: 'Institutional commitments and learning resources.',
      },
      {
        label: 'BC Medical Journal',
        href: 'https://www.bcmj.org/',
        description: 'Provincial discourse for clinically grounded scenarios.',
      },
      {
        label: 'WHO: Ethics and governance of AI for health',
        href: 'https://www.who.int/publications/i/item/ethics-and-governance-of-artificial-intelligence-for-health',
        description: 'Global reference for autonomy, safety, and equity.',
      },
    ],
  },
]
