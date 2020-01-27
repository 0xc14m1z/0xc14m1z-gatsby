import React from 'react'
import styled, { css } from 'styled-components'

import { Link as BaseLink } from 'gatsby'

const style = css `
  text-decoration: none;
  word-break: break-word;
  line-height: 1.625;

  @media (hover: hover) {
    &:hover {
      text-decoration: underline;
    }
  }
`

const StyledA = styled.a `
  ${ style }
  color: ${ props => props.theme.colors.primary };
`
const StyledLink = styled(BaseLink) `
  ${ style }
  color: ${ props => props.theme.colors.primary };
`

const isExternal = url =>
  url.startsWith('http')

const Link = ({ to, href, ...props }) => {
  const destination = to || href
  return (
    isExternal(destination)
      ? <StyledA href={ destination } { ...props } />
    : <StyledLink to={ destination } { ...props } />
  )
}

export default Link
