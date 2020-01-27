import React from 'react'
import styled from 'styled-components'

import BaseLink from './Link'
import Icon from './Icon'

const Container = styled.div `
  position: relative;
  padding: 3rem 1rem 1rem 1rem;
  margin-left: -1rem;
  margin-right: -1rem;

  border: 1px solid ${ props => props.theme.colors.primary };
  border-radius: ${ props => props.theme.border.radius };

  &::before {
    position: absolute;
    top: 0;
    left: 1rem;
    padding: 0.25rem 0.75rem;
    border-bottom-left-radius: 5px;
    border-bottom-right-radius: 5px;
    font-size: 0.8rem;
    -webkit-text-size-adjust: none;

    content: "?";
    background: ${ props => props.theme.colors.primary };
    color: white;
  }

  & > *:last-child {
    margin-bottom: 0px;
  }

  svg {
    margin-right: 0.5rem;
    height: 1.5rem;
  }
`

const Title = styled.h4 `
  margin-top: 0px;
  margin-bottom: 1rem;
  color: ${ props => props.theme.colors.text };
`

const StyledLink = styled(BaseLink) `
  display: flex;
`

const Link = ({ to, children }) => (
  <StyledLink to={ to.startsWith('#') ? `${window.location.href}${to}` : to }>
    <Icon.RightArrow />
    { children }
  </StyledLink>
)

const Question = ({ children }) => (
  <Container>
    { children }
  </Container>
)

Question.Title = Title
Question.Link = Link

export default Question
