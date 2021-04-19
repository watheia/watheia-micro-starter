import React from 'react'
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles'
import Link from '@material-ui/core/Link'
import Typography from '@material-ui/core/Typography'
import LightBulbIcon from '@watheia/demo.atoms.light-bulb'

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      margin: theme.spacing(6, 0, 3),
    },
    lightBulb: {
      verticalAlign: 'middle',
      marginRight: theme.spacing(1),
    },
  }),
)

export function ProTip() {
  const classes = useStyles()
  return (
    <Typography className={classes.root} color="textSecondary">
      <LightBulbIcon className={classes.lightBulb} />
      Pro tip: Checkout <Link href="https://watheialabs.com/">our homepage</Link>
      to find out more.
    </Typography>
  )
}

export default ProTip
