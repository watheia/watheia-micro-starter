import React from 'react'
import Typography from '@material-ui/core/Typography'
import Link from '@watheia/demo.atoms.link'

export function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {'Copyright © '}
      <Link color="inherit" href="https://watheialabs.com/">
        Watheia Labs, LLC.
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  )
}

export default Copyright
