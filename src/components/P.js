import styled from 'styled-components'

const P = styled.p `
  font-size: 1rem;
  color: ${ props => props.theme.colors.text };
  line-height: 1.625;
  margin-bottom: 1rem;
  text-align: justify;
`

export default P
