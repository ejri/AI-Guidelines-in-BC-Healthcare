import { createFileRoute } from '@tanstack/react-router'

import { GlobalComparisonPage } from '@/pages/GlobalComparisonPage'

export const Route = createFileRoute('/global-comparison')({
  component: GlobalComparisonPage,
})
