import React from 'react'
import { storiesOf } from '@storybook/react'

import { Ring, Ripple, Ellipsis } from '../src'
storiesOf('Spinners', module)
  .add('Ellipsis', () => <Ellipsis />)
  .add('Ring', () => <Ring />)
  .add('Ripple', () => <Ripple />)
