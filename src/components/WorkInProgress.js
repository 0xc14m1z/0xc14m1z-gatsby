import React from 'react'
import styled from 'styled-components'

const Container = styled.span `
  display: inline-block;
  font-size: 10px;
  padding: 0.25rem 0.5rem calc(0.25rem - 2px);
  background: ${ props => props.theme.colors.workInProgress };
  color: ${ props => props.theme.colors.lightText };
  border-radius: 5px;
  text-transform: uppercase;
`

const WorkInProgress = ({ className }) => (
  <Container className={ className }>
    Work in progress
  </Container>
)

export default WorkInProgress
