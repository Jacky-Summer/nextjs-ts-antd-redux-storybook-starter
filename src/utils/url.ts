import { LinkProps } from 'next/link'

export const isExternalLink = (href?: LinkProps['href']): boolean =>
  !href || (typeof href === 'string' && /^(https?:)?\/\//.test(href))
