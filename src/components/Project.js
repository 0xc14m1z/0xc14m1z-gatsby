import React from 'react'
import t from 'prop-types'
import styled from 'styled-components'

import Tags from './Tags'
import P from './P'

const Container = styled.div `
  margin: 0;
  &:not(:last-child):after {
    display: block;
    margin: 1.5rem 0;
    content: "${ props => props.theme.separator }";
    color: ${ props => props.theme.colors.border };
    text-align: center;
  }
`

const Period = styled.span `
  color: ${ props => props.theme.colors.text };
  @media screen and (max-width: ${ props => props.theme.viewport.breakpoints.xs }) {
    display: block;
  }
`

const Status = styled.span `
  margin-left: 1rem;
  display: inline-block;
  color: ${ props => props.theme.colors.lightText };

  @media screen and (max-width: ${ props => props.theme.viewport.breakpoints.xs }) {
    margin-left: 0;
  }
`

const PrivateApplication = styled.span.attrs({ children: 'private application' }) `
  color: ${ props => props.theme.colors.lightText };
  &:before {
    content: ", ";
  }
`

const Role = styled.h3 `
  color: ${ props => props.theme.colors.text };
  margin: 0.4rem 0;
`

const ClientName = styled(P) `
  margin-top: 0;
`

const ClientDescription = styled(P) `
  font-size: 0.8rem;
  margin-top: -0.8rem;
  color: ${ props => props.theme.colors.lightText };
`

const Description = ({ lines }) =>
  lines.map((line, index) => <P key={ index }>{ line }</P>)

const Project = ({
  slug,
  period,
  status,
  isPrivate,
  role,
  client,
  description,
  tags
}) => (
  <Container>
    <Period>{ period }</Period>
    { status && <Status>{ status }</Status> }
    { isPrivate && <PrivateApplication /> }
    <Role>{ role }</Role>
    <ClientName>{ client.name }</ClientName>
    <ClientDescription>{ client.description }</ClientDescription>
    <Description lines={ description } />
    <Tags tags={ tags } />
  </Container>
)

Project.propTypes = {
  slug: t.string.isRequired,
  period: t.string.isRequired,
  status: t.string,
  isPrivate:   t.bool.isRequired,
  role: t.string.isRequired,
  client: t.shape({
    name: t.string.isRequired,
    description: t.string.isRequired
  }),
  description: t.arrayOf(t.string),
  tags: t.arrayOf(t.string)
}

export default Project
