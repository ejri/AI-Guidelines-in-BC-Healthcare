import { createFileRoute } from '@tanstack/react-router'

import { CaseStudiesPage } from '@/pages/CaseStudiesPage'

export const Route = createFileRoute('/case-studies')({
  component: CaseStudiesPage,
})
