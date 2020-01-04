import React from 'react'
import styled, { css } from 'styled-components'

import { Link as BaseLink } from 'gatsby'

const style = css `
  text-decoration: none;

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

const Link = ({ to, ...props }) =>
  isExternal(to)
    ? <StyledA href={ to } { ...props } />
    : <StyledLink to={ to } { ...props } />

export default Link
