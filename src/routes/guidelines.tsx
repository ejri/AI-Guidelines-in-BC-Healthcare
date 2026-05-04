import { createFileRoute } from '@tanstack/react-router'

import { GuidelinesPage } from '@/pages/GuidelinesPage'

export const Route = createFileRoute('/guidelines')({
  component: GuidelinesPage,
})
