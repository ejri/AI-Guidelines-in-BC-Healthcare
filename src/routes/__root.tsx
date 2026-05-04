import { useState } from 'react'
import {
  Link,
  Outlet,
  createRootRoute,
} from '@tanstack/react-router'
import { TanStackRouterDevtools } from '@tanstack/react-router-devtools'
import { Menu, Moon, Sun } from 'lucide-react'

import { SiteSearch } from '@/components/SiteSearch'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import {
  INSTITUTION_LINE,
  TOOLKIT_VERSION_LABEL,
} from '@/content/institution'
import { cn } from '@/lib/utils'

const THEME_STORAGE_KEY = 'bc-rai-toolkit-theme'

const NAV = [
  { to: '/', label: 'Home' },
  { to: '/guidelines', label: 'Guidelines' },
  { to: '/updates', label: 'Updates' },
  { to: '/bc-health-authorities', label: 'BC health system' },
  { to: '/global-comparison', label: 'Global compare' },
  { to: '/checklists', label: 'Checklists & tools' },
  { to: '/case-studies', label: 'Case studies' },
  { to: '/myth-busting', label: 'Myth-busting' },
  { to: '/ecosystem', label: 'Ecosystem' },
  { to: '/about', label: 'About' },
] as const

export const Route = createRootRoute({
  component: RootLayout,
})

function readInitialTheme(): boolean {
  if (typeof window === 'undefined') return false
  try {
    const stored = localStorage.getItem(THEME_STORAGE_KEY)
    const prefersDark = window.matchMedia(
      '(prefers-color-scheme: dark)',
    ).matches
    const useDark =
      stored === 'dark' || (stored !== 'light' && prefersDark)
    document.documentElement.classList.toggle('dark', useDark)
    return useDark
  } catch {
    const prefersDark = window.matchMedia(
      '(prefers-color-scheme: dark)',
    ).matches
    document.documentElement.classList.toggle('dark', prefersDark)
    return prefersDark
  }
}

function RootLayout() {
  const [dark, setDark] = useState(readInitialTheme)
  const [navOpen, setNavOpen] = useState(false)

  const toggleTheme = () => {
    setDark((prev) => {
      const next = !prev
      try {
        localStorage.setItem(THEME_STORAGE_KEY, next ? 'dark' : 'light')
      } catch {
        /* storage unavailable */
      }
      document.documentElement.classList.toggle('dark', next)
      return next
    })
  }

  return (
    <div className="flex min-h-svh flex-col">
      <a
        href="#main-content"
        className={cn(
          'bg-primary text-primary-foreground',
          'focus-visible:ring-ring sr-only focus:not-sr-only focus:absolute focus:z-[100]',
          'focus:m-2 focus:inline-flex focus:rounded-md focus:px-4 focus:py-2 focus:ring-2',
        )}
      >
        Skip to main content
      </a>

      <header className="border-border bg-card/90 sticky top-0 z-40 border-b backdrop-blur-md">
        <div className="relative mx-auto flex max-w-6xl items-center justify-between gap-3 px-4 py-3">
          <div className="flex min-w-0 flex-wrap items-center gap-2">
            <Link
              to="/"
              className="text-foreground hover:text-primary text-sm font-semibold tracking-tight md:text-base"
            >
              BC AI Compliance Toolkit
            </Link>
            <Badge
              variant="outline"
              className="shrink-0 px-1.5 py-0 text-[10px] font-semibold tracking-wide uppercase"
            >
              {TOOLKIT_VERSION_LABEL}
            </Badge>
          </div>

          <div className="flex items-center gap-2">
            <SiteSearch />
            <Button
              type="button"
              variant="outline"
              size="icon-sm"
              className="md:hidden"
              aria-expanded={navOpen}
              aria-controls="site-nav"
              onClick={() => setNavOpen((o) => !o)}
            >
              <Menu className="size-4" aria-hidden />
              <span className="sr-only">Toggle menu</span>
            </Button>

            <nav
              id="site-nav"
              className={cn(
                'border-border bg-card absolute right-4 left-4 top-full z-50 mt-1 flex-col rounded-lg border p-2 shadow-lg md:static md:mt-0 md:flex md:flex-row md:items-center md:gap-0.5 md:border-0 md:bg-transparent md:p-0 md:shadow-none',
                navOpen ? 'flex' : 'hidden md:flex',
              )}
              aria-label="Primary"
            >
              {NAV.map((item) => (
                <Link
                  key={item.to}
                  to={item.to}
                  onClick={() => setNavOpen(false)}
                  activeOptions={
                    item.to === '/' ? { exact: true } : { exact: false }
                  }
                  className="text-muted-foreground hover:bg-muted hover:text-foreground rounded-md px-3 py-2 text-sm font-medium transition-colors"
                  activeProps={{
                    className:
                      'bg-muted text-foreground hover:bg-muted font-semibold',
                  }}
                >
                  {item.label}
                </Link>
              ))}
            </nav>

            <Button
              type="button"
              variant="outline"
              size="icon-sm"
              onClick={toggleTheme}
              aria-pressed={dark}
              aria-label={dark ? 'Switch to light mode' : 'Switch to dark mode'}
            >
              {dark ? (
                <Sun className="size-4" aria-hidden />
              ) : (
                <Moon className="size-4" aria-hidden />
              )}
            </Button>
          </div>
        </div>
      </header>

      <main
        id="main-content"
        className="mx-auto w-full max-w-6xl flex-1 px-4 py-8"
        tabIndex={-1}
      >
        <Outlet />
      </main>

      <footer className="border-border bg-muted/40 border-t">
        <div className="text-muted-foreground mx-auto max-w-6xl space-y-2 px-4 py-6 text-center text-xs leading-relaxed md:text-left">
          <p className="font-medium text-foreground">
            Educational sandbox only: not legal, regulatory, or clinical
            advice.
          </p>
          <p>
            No patient data; toolkit content is synthetic. Theme preference is
            stored only in your browser (localStorage). For CPSBC standards,
            consult the College directly.
          </p>
          <p className="text-pretty break-words">
            <Link
              to="/privacy"
              className="text-primary font-medium underline underline-offset-2"
            >
              Privacy notice
            </Link>
            {' · '}
            <span className="text-foreground/90">{TOOLKIT_VERSION_LABEL}</span>
            {' · '}
            {INSTITUTION_LINE} (teaching use).
          </p>
        </div>
      </footer>

      {import.meta.env.DEV ? <TanStackRouterDevtools position="bottom-right" /> : null}
    </div>
  )
}
