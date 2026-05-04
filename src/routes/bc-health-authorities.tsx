import { createFileRoute } from '@tanstack/react-router'

import { BcHealthAuthoritiesPage } from '@/pages/BcHealthAuthoritiesPage'

export const Route = createFileRoute('/bc-health-authorities')({
  component: BcHealthAuthoritiesPage,
})
