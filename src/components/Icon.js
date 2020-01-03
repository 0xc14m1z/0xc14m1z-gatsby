import React from 'react'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { library } from '@fortawesome/fontawesome-svg-core'

import {
  faHome,
  faInfoCircle,
  faEmptySet,
  faFrownOpen
} from '@fortawesome/pro-light-svg-icons'

import { faGithub } from '@fortawesome/free-brands-svg-icons'

library.add(faHome, faInfoCircle, faEmptySet, faFrownOpen, faGithub)

const Icon = ({ name, ...props }) => <FontAwesomeIcon icon={name} {...props} />

Icon.Home = props => <Icon name={['fal', 'home']} {...props} />

Icon.Info = props => <Icon name={['fal', 'info-circle']} {...props} />

Icon.GitHub = props => <Icon name={['fab', 'github']} {...props} />

Icon.Empty = props => <Icon name={['fal', 'empty-set']} {...props} />

Icon.NotFound = props => <Icon name={['fal', 'frown-open']} {...props} />

export default Icon
