import React from 'react'
import t from 'prop-types'
import styled from 'styled-components'

const Ul = styled.ul `
  margin: 0;
  padding: 0;
`

const Tag = styled.li `
  display: inline-block;
  padding: 0.3rem 0.5rem;
  font-family: 'Source Code Pro', monospace;
  font-size: 0.75em;
  line-height: 1;
  background: ${ props => props.theme.colors.background };
  color: ${ props => props.theme.colors.lightText };
  margin-right: 0.5rem;
  margin-bottom: 0.5rem;
  border-radius: 5px;
  list-style-type: none;
`

const Tags = ({ tags }) => (
  tags.length > 0 &&
  <Ul>
    { tags.map(tag => <Tag key={ tag }>{ tag }</Tag>) }
  </Ul>
)

Tags.defaultProps = {
  tags: []
}

Tags.propTypes = {
  tags: t.arrayOf(String)
}

export default Tags
