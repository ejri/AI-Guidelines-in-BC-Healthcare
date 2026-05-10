import { createFileRoute } from '@tanstack/react-router'

import { PhsaAiResearchPage } from '@/pages/PhsaAiResearchPage'

export const Route = createFileRoute('/phsa-ai-research')({
  component: PhsaAiResearchPage,
})
