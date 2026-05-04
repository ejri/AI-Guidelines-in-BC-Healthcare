import type { ComponentProps } from 'react'

import { cn } from '@/lib/utils'

type ExternalLinkProps = Omit<ComponentProps<'a'>, 'target' | 'rel'> & {
  className?: string
}

export function ExternalLink({ className, children, ...rest }: ExternalLinkProps) {
  return (
    <a
      {...rest}
      target="_blank"
      rel="noopener noreferrer"
      className={cn(
        'text-primary font-medium underline underline-offset-4 hover:opacity-90',
        className,
      )}
    >
      {children}
    </a>
  )
}
