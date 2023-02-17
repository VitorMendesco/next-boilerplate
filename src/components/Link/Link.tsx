import { forwardRef } from 'react'
import { usePathname } from 'next/navigation'

import NextLink from 'next/link'
import MuiLink from '@mui/material/Link'

import { styled } from '@mui/material/styles'
import clsx from 'clsx'

import { NextLinkComposedProps, LinkProps } from './types'

const Anchor = styled('a')({})

const NextLinkComposed = forwardRef<HTMLAnchorElement, NextLinkComposedProps>(function NextLinkComposed(
  props,
  ref
) {
  const { to, linkAs, replace, scroll, shallow, prefetch, legacyBehavior = true, locale, ...other } = props
  return (
    <NextLink
      href={to}
      prefetch={prefetch}
      as={linkAs}
      replace={replace}
      scroll={scroll}
      shallow={shallow}
      passHref
      locale={locale}
      legacyBehavior={legacyBehavior}
    >
      <Anchor ref={ref} {...other} />
    </NextLink>
  )
})

const Link = forwardRef<HTMLAnchorElement, LinkProps>(function Link(props, ref) {
  const {
    activeClassName = 'active',
    as,
    className: classNameProps,
    href,
    legacyBehavior,
    linkAs: linkAsProp,
    locale,
    noLinkStyle,
    prefetch,
    replace,
    scroll,
    shallow,
    ...other
  } = props

  const path = usePathname()
  const pathname = typeof href === 'string' ? href : href.pathname
  const className = clsx(classNameProps, {
    [activeClassName]: path === pathname && activeClassName,
  })

  const isExternal = typeof href === 'string' && (href.indexOf('http') === 0 || href.indexOf('mailto:') === 0)

  if (isExternal) {
    if (noLinkStyle) {
      return <Anchor className={className} href={href} ref={ref} {...other} />
    }

    return <MuiLink className={className} href={href} ref={ref} {...other} />
  }

  const linkAs = linkAsProp || as
  const nextjsProps = {
    to: href,
    linkAs,
    replace,
    scroll,
    shallow,
    prefetch,
    legacyBehavior,
    locale,
  }

  if (noLinkStyle) {
    return <NextLinkComposed className={className} ref={ref} {...nextjsProps} {...other} />
  }

  return <MuiLink component={NextLinkComposed} className={className} ref={ref} {...nextjsProps} {...other} />
})

export { Link, NextLinkComposed }
