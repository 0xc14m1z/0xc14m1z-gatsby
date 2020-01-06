import styled from 'styled-components'

const Hr = styled.hr `
  margin: 1.5rem 0;
  border: none;

  &:after {
    display: block;

    content: "${ props => props.theme.separator }";
    color: ${ props => props.theme.colors.border };
    text-align: center;
  }
`

export default Hr
