import React from 'react'
import styled from 'styled-components'

const Ol = styled.ol `
  margin: 1rem 0;
  padding: 0 0 0 2rem;

  li {
    color: ${ props => props.theme.colors.text };
    line-height: 1.625;
  }
`

export default Ol
