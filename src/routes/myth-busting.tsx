import { createFileRoute } from '@tanstack/react-router'

import { MythBustingPage } from '@/pages/MythBustingPage'

export const Route = createFileRoute('/myth-busting')({
  component: MythBustingPage,
})
