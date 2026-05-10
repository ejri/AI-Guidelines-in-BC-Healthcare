/**
 * Structured mirror of PHSA’s “Artificial Intelligence in Research” hub and
 * closely linked sibling pages (menu items under the same section).
 * Canonical page: https://www.phsa.ca/researcher/resources/artificial-intelligence
 */

export const PHSA_AI_RESEARCH_CANONICAL =
  'https://www.phsa.ca/researcher/resources/artificial-intelligence'

export const PHSA_GENERATIVE_AI_RESEARCHER_GUIDANCE_PDF =
  'https://www.phsa.ca/research/Documents/Generative%20AI%20Guidance%20for%20Researchers_Approved.pdf'

export const PHSA_AI_RESOURCE_TOOLKIT_PDF =
  'https://www.phsa.ca/research/Documents/AI%20Resource%20Toolkit_v2.pdf'

export const PHSA_RESEARCH_DATA_ACCESS_PRIVACY =
  'https://www.phsa.ca/researcher/data-access-privacy'

export const PHSA_RESEARCHER_CONTACT_US =
  'https://www.phsa.ca/researcher/resources/contact-us'

export const PHSA_SITE = 'https://www.phsa.ca/'

export const PHSA_AI_WORKING_GROUP_PAGE =
  'https://www.phsa.ca/researcher/resources/artificial-intelligence/ai-in-research-working-group'

export const PHSA_NAVIGATING_AI_RESEARCH_PAGE =
  'https://www.phsa.ca/researcher/resources/artificial-intelligence/navigating-ai-research'

export const PHSA_AI_LEARNING_HUB_PAGE =
  'https://www.phsa.ca/researcher/resources/artificial-intelligence/learning-hub'

export const PHSA_DIGITAL_HEALTH_INNOVATION =
  'https://www.phsa.ca/health-professionals/professional-resources/digital-health/digital-health-innovation'

/** SharePoint term-store redirect referenced from the live PHSA page. */
export const PHSA_AI_WORKING_GROUP_SHAREPOINT_REDIRECT =
  'https://www.phsa.ca/_layouts/15/FIXUPREDIRECT.ASPX?WebId=4254d457-d40c-4169-bfe8-f837101a8ead&TermSetId=c2c6ba9d-5dba-4095-b7c1-3568194dc780&TermId=6eb4daeb-4fd1-4f73-a709-a7c3a994bba7'

export const PHSA_AI_IN_RESEARCH_EMAIL = 'aiworkinggroup@phsa.ca'

export const GOOGLE_IMAGES_CA = 'https://images.google.ca'

/** Government of Canada — tri-agency genAI in grant review (linked from PHSA page; URL corrected from site copy). */
export const CANADA_TRI_AGENCY_GENAI_GRANT_REVIEW_GUIDANCE =
  'https://science.gc.ca/site/science/en/interagency-research-funding/policies-and-guidelines/use-generative-artificial-intelligence-development-and-review-research-proposals/guidance-use-artificial-intelligence-development-and-review-research-grant-proposals'

/** JMIR example referenced for CC0 / licensing in image generation (URL corrected from site copy). */
export const JMIR_TOC_IMAGE_CC0_EXAMPLE =
  'https://support.jmir.org/hc/en-us/articles/115001352988-Where-to-find-and-how-to-generate-a-TOC-image'

export const PHSA_AI_RESEARCH_INTRO = {
  title: 'Artificial Intelligence in Research',
  summary:
    'Resource hub for PHSA researchers interested in using artificial intelligence (AI) for research tasks and for conducting research to develop or use AI for healthcare.',
  supportedBy:
    'The content for this page is supported by the AI in Research Working Group. The Research Hub will be updated regularly as new information and guidance is available.',
} as const

export const PHSA_GENERATIVE_AI_GUIDANCE_SECTION = {
  heading: 'Use of generative AI in research work: PHSA researcher guidance',
  body:
    'The AI in Research Working Group developed guidance to support safe and responsible use of generative AI (genAI) as a tool to enable research work and complete research tasks. There are many potential uses of genAI in medical and health research and these uses may involve both significant risks and benefits. PHSA seeks to promote and encourage the use of innovative tools to support research, and to encourage innovative research, including in the field of AI.',
} as const

export const PHSA_USE_CASE_INTRO =
  'The following use cases further describe potential benefits and risks of using genAI as a tool to complete research tasks. In each use case, there are considerations of benefits, risks and mitigation strategies based on current knowledge.'

export type PhsaRiskMitigation = {
  risk: string
  mitigation: string
}

export type PhsaUseCase = {
  id: string
  title: string
  scenario: string
  benefitsHeading: string
  benefits: string[]
  risksHeading: string
  items: PhsaRiskMitigation[]
}

export const PHSA_GENAI_USE_CASES: PhsaUseCase[] = [
  {
    id: 'literature',
    title: 'Summarizing literature on a research topic',
    scenario:
      'Jill is a graduate student and working with her supervisor on a Canada Institutes of Health Research application. She is asked to draft a few paragraphs for an introduction on the topic of long-term effects of the COVID-19 pandemic restrictions on school performance. Jill decides to use ChatGPT to help her get started and get ideas about what to write.',
    benefitsHeading: 'Risks and benefits — considerations',
    benefits: ['Possible efficiency'],
    risksHeading: 'Risks',
    items: [
      {
        risk:
          'Uncertainty / misinformation: the output may be very general and lack citations. Some genAI tools allow you to upload a set of papers and ask questions specific to those sources. Output must still be carefully reviewed as hallucinations (made up facts) are always possible with these tools.',
        mitigation:
          'All listed facts or statements in the output must be verified and references found. Prompting ChatGPT to provide sources will result in a list of potential websites to review but these will not be linked to any specific statement in the output. Literature searches are more efficiently performed in a reputable database.',
      },
      {
        risk:
          'Privacy: any data input into a genAI tool may be stored by the parent company for further model development or monitoring. It is often unclear what is stored and who may get access to it.',
        mitigation:
          'Never put sensitive information into a genAI tool with unknown privacy agreement. Find an alternative strategy to achieve your goals or consider using a local/institutional genAI or a subscription that meets PHSA privacy requirements.',
      },
      {
        risk:
          'Bias: most genAI tools are developed on corpuses of information scraped from the internet and these sources are not fully disclosed. It is often unclear what the resultant bias in the output may be.',
        mitigation:
          'All outputs must be carefully considered for possible racial, gender and other biases. It is up to the end-user to take responsibility for output.',
      },
      {
        risk:
          "Plagiarism / disclosure: many genAI tools do not provide clear citations or source information and will directly copy statements from books or articles in the output. Without verifying output and identifying reputable sources you run the risk of plagiarizing other people's work.",
        mitigation:
          'All listed facts and statements in the output must be verified and appropriate references found.',
      },
    ],
  },
  {
    id: 'code',
    title: 'Code debugging or writing',
    scenario:
      'Philip is an undergraduate student working on a research project that aims to create an image classifier that can classify whether the chest x-ray shows a pneumothorax. He is familiar with training image classifiers in TensorFlow but wants to implement in PyTorch. He decides to use ChatGPT to help set up the training function.',
    benefitsHeading: 'Risk and benefit considerations',
    benefits: [
      'Efficiency: saves time by automatically writing boilerplate code',
      'Provides different approaches to a problem',
      'Can help user learn about syntax of a new programming language or libraries',
    ],
    risksHeading: 'Risks',
    items: [
      {
        risk:
          'Incorrect code: if the prompt provided is not clear in terms of what the user wants the code to do, the large language model (LLM) can produce code that provides a different logic than desired. Like hallucination in text-generation context, the LLM may produce results that incorporate non-existent libraries or tools, or incorrect logic, despite giving an appropriate prompt. In addition, the logical errors may be subtle and difficult for the user to debug.',
        mitigation: 'Always manually check the logic of the code generated by the LLM.',
      },
      {
        risk:
          "Outdated code: ChatGPT's internal knowledge base may not be the most up to date, so it may not be able to work with the newer libraries or tools. Moreover, it may propagate reliance on outdated practices or code.",
        mitigation:
          'Being aware of how frequently the LLM is updated provides a rough estimate of how up to date the code it generates could be. Users may need to refer to other documentation for the newer libraries and tools.',
      },
      {
        risk:
          'Efficiency (performance): an LLM may produce code that is logically correct, but computationally inefficient.',
        mitigation: 'Manually review code to optimize any inefficiencies.',
      },
      {
        risk:
          'Security: the LLM may suggest code that is functional but contains security vulnerabilities.',
        mitigation:
          'There are LLMs which are specifically trained to detect and fix security vulnerabilities. However, it is important to manually review and test for security vulnerabilities and consult a security expert, if required.',
      },
      {
        risk:
          'Privacy: any data input into a genAI tool may be stored by the parent company for further model development or monitoring. It is often unclear what is stored and who may get access to it.',
        mitigation:
          'Never input sensitive information into a genAI tool with an unknown privacy agreement. Find an alternative strategy to achieve your goals or consider using a local or institutional genAI or a subscription that meets PHSA privacy requirements.',
      },
    ],
  },
  {
    id: 'lay-summary',
    title: 'Writing a lay language summary of a study',
    scenario:
      'Giuseppina is putting together a grant due in a few hours. She is done with most components, but still has to write a lay summary that can be understood by the lay public. She takes the abstract for her grant and supplies it to ChatGPT with the following prompt: “Please rewrite the following scientific abstract so that it can be understood by the lay public: [inserted abstract]”',
    benefitsHeading: 'Risk and benefit considerations',
    benefits: [
      'Quickly produce a lay abstract',
      'ChatGPT supplies some ideas on how to word certain concepts in a widely accessible way',
    ],
    risksHeading: 'Risks',
    items: [
      {
        risk:
          'Inaccuracy: the output may have factual errors introduced, given that it is trained on a general language corpus and not specifically on scientific content. It may summarize concepts incorrectly or reword statements that are no longer correct.',
        mitigation: 'All output must be carefully checked for scientific accuracy.',
      },
      {
        risk:
          'Language use: the output may be rewritten to be too simple, or may still be too specific and not appropriate for a lay audience.',
        mitigation:
          "The output must be checked and compared with the tone, complexity and language use that the author would normally use. ChatGPT's judgement should not be substituted for the user's.",
      },
      {
        risk:
          'Plagiarism / disclosure: genAI may directly plagiarize others when generating its content. Even if the subject matter is specific to your grant, generated sentences could still be inadvertently plagiarized.',
        mitigation:
          'If ChatGPT has significantly reworded sentences or paragraphs, consider rewriting them in your own style, using some of the suggested wording if desired. If in doubt, online tools for plagiarism detection can be used, though these are not foolproof.',
      },
    ],
  },
  {
    id: 'figure-logo',
    title: 'Generating a figure for a grant proposal',
    scenario:
      'Jennifer is working on a proposal for an infrastructure grant that involves building a new research consortium. She wants to create a logo for the consortium to develop some branding and create a better sense of coherence. She finds an AI-based logo generator online.',
    benefitsHeading: 'Risk and benefit considerations',
    benefits: ['New logos are created quickly and easily'],
    risksHeading: 'Risks',
    items: [
      {
        risk:
          'Plagiarism: genAI-based image generators are trained on existing images. A new logo may be very similar to existing images that were used for training.',
        mitigation:
          'Use an image search engine to compare your image against others (for example, Google Images). As possible, try to avoid very simple logos that might be similar to what already exists.',
      },
      {
        risk:
          'Terms of use: image generation tools may allow images to be used with restriction and may retain rights to use the image in certain contexts.',
        mitigation:
          'Carefully examine Terms of Use for the product, noting if there are any restrictions, or if users retain full rights to the images. If in doubt, use a different product, or consult legal resources.',
      },
      {
        risk:
          'Inappropriate content: such tools are trained on images across the internet and can include a wide variety of content. Generated images may contain components that have special meanings to groups of people, even if not obvious to yourself.',
        mitigation:
          'Ensure that a wide variety of others review generated images before they are publicly shared, especially if the logo contains elements that seem distinct. Have a low threshold to replace elements that may possibly be misunderstood.',
      },
      {
        risk:
          'Bias: if your logo contains representations of humans, genAI models may portray them by furthering stereotyping with respect to gender, race, class, profession or other attributes. However, models may also try to correct for this but lead to portrayals that are incorrect.',
        mitigation:
          'Consider whether your images further both positive and negative stereotypes. Consider revising your prompt to add diversity and combat such stereotypes. Ensure that portrayals are still consistent with intention.',
      },
    ],
  },
  {
    id: 'grant-review',
    title: 'Reviewing research applications/proposals',
    scenario:
      'Jacob is reviewing several applications for a research institute graduate student travel award. He wants to use ChatGPT to select the strongest application. The rubric provided for the grant review asks reviewers to give each application a score out of 5 points in the following areas: candidate’s track record of academic performance and productivity; relevance of the travel to the trainee’s research; and quality of proposed research or training activity associated with the travel.\n\nHe copies and pastes each application with the applicant’s CV into ChatGPT before providing the following prompt: “I am going to provide you with a number of grant applications. Summarize each application using the following criteria: number of candidate’s publications; total impact factor of publications; clarity of writing; inclusion of a research or training plan in the application; and inclusion of a statement linking proposed travel to the applicant’s research goals.”',
    benefitsHeading: 'Risk and benefit considerations',
    benefits: [
      'Quickly pulls out some relevant information for review',
      'Summary statements could be used to report back on scores',
    ],
    risksHeading: 'Risks',
    items: [
      {
        risk:
          'Bias: if you include names, gender or age of applicants, models can introduce bias in how these factors are assessed due to the underlying bias in development data. This could lead to reduced scores or lower assessment of quality for applicants that are unfair.',
        mitigation:
          'Do not ask for subjective review of quality of proposals using a genAI tool. Only very clearly defined quantitative assessment categories could be used but output still needs to be double checked for accuracy.',
      },
      {
        risk:
          'Inaccuracies: there is a known issue for genAI tools to hallucinate or make up facts. The output may therefore have factual errors introduced, given that it is trained on a general language corpus and not specifically on scientific content. It may summarize concepts incorrectly or reword statements that are no longer correct.',
        mitigation: 'All outputs must be carefully checked for accuracy.',
      },
      {
        risk:
          'Lack of reducibility / transparency: the models used for genAI tools are continuously being revised making reproducibility of results often impossible even with the exact same prompt. This ongoing change in models also means we cannot fully know how the prediction or output is being generated.',
        mitigation:
          'Use of a genAI tool to support grant review should always be disclosed to the funding body. Justification for funding decisions must be clear and many funding bodies may not support the use of genAI in this process.',
      },
    ],
  },
]

export type PhsaTipCategory = {
  id: string
  title: string
  bullets: string[]
}

export const PHSA_GENAI_TIPS: PhsaTipCategory[] = [
  {
    id: 'writing',
    title: 'Writing and editing',
    bullets: [
      'Ask a genAI tool to provide a list of references, including hyperlinks, to be able to quickly assess accuracy and quality of source information (possible in some tools).',
      'When editing, ask for bullet point suggestions for edits rather than a direct re-write of provided text. This allows you to maintain control of all changes and verify the quality of the final written product.',
    ],
  },
  {
    id: 'coding',
    title: 'Coding',
    bullets: [
      'Describe your data in the prompt and ask for example code that would work with the type of variables your dataset includes.',
    ],
  },
  {
    id: 'summarizing',
    title: 'Summarizing text',
    bullets: [
      'Use specific language to describe the audience for the intended output.',
      'Use an iterative process to keep refining the results until the desired result is achieved.',
    ],
  },
  {
    id: 'images',
    title: 'Creating images or logos',
    bullets: [
      'For some image generators you can specify the licensing type you are interested in. For use in public or scholarly communication this should typically be for public use/domain, or “Creative Commons” known as a Creative Commons Zero (CC0) license type. See the JMIR support article for an example of this.',
    ],
  },
  {
    id: 'grant-review',
    title: 'Supporting grant review',
    bullets: [
      'Check with the funding body first if they will accept review supported by genAI. The Government of Canada released guidance prohibiting the use of genAI for grant reviews for tri-agency programs.',
      'Only include clear and quantitative categories of review so that output can be verified and checked for accuracy.',
    ],
  },
]

export const PHSA_QUESTIONS_SECTION = {
  heading: 'Questions, comments or ideas?',
  body: 'Please reach out to PHSA’s AI in Research Working Group.',
} as const

/** Elements listed on PHSA’s sibling pages and footer blocks that contextualize the hub. */
export const PHSA_AI_HUB_RELATED_PAGES = [
  {
    href: PHSA_AI_WORKING_GROUP_PAGE,
    label: 'AI in Research Working Group',
    description:
      'Purpose, consultation, guidance releases (including the genAI PDF and AI Research Toolkit), and REB-related AI submission support.',
  },
  {
    href: PHSA_NAVIGATING_AI_RESEARCH_PAGE,
    label: 'Navigating AI Research at PHSA',
    description:
      'Framework for responsible AI research, the three-phase AI research lifecycle, links to the AI Research Toolkit, and engagement with Digital Health / PDHIS where applicable.',
  },
  {
    href: PHSA_AI_LEARNING_HUB_PAGE,
    label: 'AI in Research Learning Hub',
    description:
      'Curated readings on bias, transparency, equity, ethics, privacy, governance, and generative AI engineering — with space for suggestions to the Working Group.',
  },
] as const

export const PHSA_AI_CONTACT_BLOCKS = [
  {
    title: 'Research-related AI questions?',
    body: 'Contact the AI in Research Working Group.',
    email: PHSA_AI_IN_RESEARCH_EMAIL,
  },
  {
    title: 'General AI-related questions?',
    body: 'Contact PHSA Digital Health Innovation.',
    href: PHSA_DIGITAL_HEALTH_INNOVATION,
  },
  {
    title: 'POD Artificial Intelligence',
    body:
      'PHSA’s intranet (POD) hosts an Artificial Intelligence workplace resource area. Access requires PHSA network / account as applicable.',
    href: null as string | null,
  },
  {
    title: 'Feedback or content ideas?',
    body:
      'PHSA describes this hub as a living resource. If you have research-related AI resources or ideas for additional use cases, you can share them with the AI in Research Working Group.',
    email: PHSA_AI_IN_RESEARCH_EMAIL,
  },
] as const
