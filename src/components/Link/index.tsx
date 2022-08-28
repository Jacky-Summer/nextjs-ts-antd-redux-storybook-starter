import React, { FC, MouseEvent, AnchorHTMLAttributes } from 'react'
import Link, { LinkProps as NextLinkProps } from 'next/link'
import { isExternalLink } from 'src/utils/url'

export interface IProps
  extends NextLinkProps,
    Pick<AnchorHTMLAttributes<HTMLAnchorElement>, 'target'> {
  openInNewTab?: boolean
  title?: string
  onClick?: (e: MouseEvent) => void
  className?: string
}

const NextLink: FC<IProps> = ({
  href,
  title,
  target,
  onClick,
  className,
  children,
  ...restProps
}) => {
  const openInNewTab = target === '_blank'
  const isExternal = isExternalLink(href)
  const rel = openInNewTab ? 'noreferrer noopener' : undefined

  const handleClick = (e: MouseEvent) => {
    onClick?.(e)
  }

  if (isExternal || openInNewTab) {
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
