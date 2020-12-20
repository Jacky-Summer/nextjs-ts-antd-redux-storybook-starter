import React, { FC, MouseEvent, AnchorHTMLAttributes } from 'react'
import Link, { LinkProps as NextLinkProps } from 'next/link'
import { isExternalLink } from 'src/utils/url'

export interface Props
  extends NextLinkProps,
    Pick<AnchorHTMLAttributes<HTMLAnchorElement>, 'target'> {
  openInNewTab?: boolean
  title?: string
  onClick?: (e: MouseEvent) => void
  className?: string
}

const NextLink: FC<Props> = ({
  href,
  title,
  target,
  onClick,
  className,
  children,
  ...restProps
}) => {
  const openInNewTab = target === '_blank'
  const rel = openInNewTab ? 'noreferrer noopener' : undefined

  const handleClick = (e: MouseEvent) => {
    if (onClick) {
      onClick(e)
    }
  }

  if (openInNewTab || isExternalLink) {
    return (
      <a
        className={className}
        href={href as string}
        title={title}
        target={target}
        rel={rel}
        onClick={handleClick}
      >
        {children}
      </a>
    )
  }

  return (
    <Link href={href} {...restProps}>
      <a onClick={handleClick}>{children}</a>
    </Link>
  )
}

export default NextLink
