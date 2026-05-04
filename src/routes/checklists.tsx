import { createFileRoute } from '@tanstack/react-router'

import { ChecklistsPage } from '@/pages/ChecklistsPage'

export const Route = createFileRoute('/checklists')({
  component: ChecklistsPage,
})
