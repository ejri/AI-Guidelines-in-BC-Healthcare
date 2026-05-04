import { Link } from '@tanstack/react-router'
import { Search } from 'lucide-react'
import { useMemo, useState } from 'react'

import { Button } from '@/components/ui/button'
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog'
import { SITE_SEARCH_INDEX } from '@/content/external'

export function SiteSearch() {
  const [open, setOpen] = useState(false)
  const [q, setQ] = useState('')

  const hits = useMemo(() => {
    const s = q.trim().toLowerCase()
    if (!s) return SITE_SEARCH_INDEX
    return SITE_SEARCH_INDEX.filter(
      (h) =>
        h.title.toLowerCase().includes(s) ||
        h.keywords.toLowerCase().includes(s),
    )
  }, [q])

  return (
    <Dialog
      open={open}
      onOpenChange={(next) => {
        setOpen(next)
        if (!next) setQ('')
      }}
    >
      <DialogTrigger
        render={
          <Button
            variant="outline"
            size="sm"
            className="gap-2 font-normal text-muted-foreground"
            aria-label="Open topic search"
          >
            <Search className="size-4 shrink-0" aria-hidden />
            <span className="hidden sm:inline">Search topics</span>
          </Button>
        }
      />
      <DialogContent className="sm:max-w-lg" showCloseButton>
        <DialogHeader>
          <DialogTitle>Search this toolkit</DialogTitle>
          <DialogDescription>
            Matches page titles and keywords only. Nothing you type is sent to a
            server.
          </DialogDescription>
        </DialogHeader>
        <div className="space-y-3">
          <label className="sr-only" htmlFor="site-search-q">
            Query
          </label>
          <input
            id="site-search-q"
            value={q}
            onChange={(e) => setQ(e.target.value)}
            autoComplete="off"
            placeholder="Try “consent”, “PIPA”, or “bias”"
            className="border-input bg-background ring-offset-background placeholder:text-muted-foreground focus-visible:ring-ring flex h-10 w-full rounded-md border px-3 text-sm focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:outline-none"
          />
          <ul className="max-h-64 space-y-1 overflow-y-auto pr-1">
            {hits.length === 0 ? (
              <li className="text-muted-foreground px-1 py-2 text-sm">
                No matches. Try another keyword.
              </li>
            ) : (
              hits.map((h) => (
                <li key={h.to}>
                  <Link
                    to={h.to}
                    onClick={() => setOpen(false)}
                    className="hover:bg-muted block rounded-md px-2 py-2 text-sm font-medium"
                  >
                    {h.title}
                  </Link>
                </li>
              ))
            )}
          </ul>
        </div>
      </DialogContent>
    </Dialog>
  )
}
