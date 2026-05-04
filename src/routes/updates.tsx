import { createFileRoute } from '@tanstack/react-router'

import { UpdatesPage } from '@/pages/UpdatesPage'

export const Route = createFileRoute('/updates')({
  component: UpdatesPage,
})
