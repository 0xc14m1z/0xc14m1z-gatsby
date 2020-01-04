import React from 'react'

import Message from './Message'
import Icon from './Icon'
import Project from './Project'

const EmptyList = () => (
  <Message icon={ <Icon.Empty /> }>
    No projects here.
  </Message>
)

const List = ({ projects }) =>
  projects.map(project =>
    <Project
      key={ project.slug }
      { ...project }
    />
  )

const ProjectsList = ({ projects }) =>
  projects.length === 0
    ? <EmptyList />
    : <List projects={ projects } />

export default ProjectsList
