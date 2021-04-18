import { Typography } from '@material-ui/core'
import React from 'react'
import { TopLayout } from './top-layout'

export const TopLayoutExample = () => (
  <TopLayout data-test-id="top-layout">
    <Typography>Hello, TopLayout!</Typography>
  </TopLayout>
)
