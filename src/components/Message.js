import React from 'react'
import t from 'prop-types'
import styled from 'styled-components'

const Container = styled.div `
  display: flex;
  flex-direction: column;
  align-items: center;
  border: 2px dashed #EEE;
  padding: 3em;
`

const Icon = styled.div `
  font-size: 5em;
  color: ${ props => props.theme.colors.primary }
`

const Text = styled.p `
  text-align: center;
  color: ${ props => props.theme.colors.text };
  margin-bottom: 0;
`

const Message = ({ icon, children, ...props }) => (
  <Container { ...props }>
    { icon && <Icon>{ icon }</Icon> }
    <Text>{ children }</Text>
  </Container>
)

Message.propTypes = {
  icon: t.node,
  text: t.node.isRequired
}

export default Message
