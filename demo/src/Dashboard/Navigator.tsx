import React from 'react'
import AppBar from '@material-ui/core/AppBar'
import Button from '@material-ui/core/Button'
import Toolbar from '@material-ui/core/Toolbar'
import Typography from '@material-ui/core/Typography'
import Link from '../components/Link'
import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles((theme) => ({
  '@global': {
    ul: {
      margin: 0,
      padding: 0,
      listStyle: 'none',
    },
  },
  appBar: {
    borderBottom: `1px solid ${theme.palette.divider}`,
  },
  toolbar: {
    flexWrap: 'wrap',
  },
  toolbarTitle: {
    flexGrow: 1,
  },
  link: {
    margin: theme.spacing(1, 1.5),
  },
}))

export const Header = () => {
  const classes = useStyles()

  return (
    <AppBar position="static" color="default" elevation={0} className={classes.appBar}>
      <Toolbar className={classes.toolbar}>
        <Typography variant="h6" color="inherit" noWrap className={classes.toolbarTitle}>
          Watheia-Micro Starter
        </Typography>
        <nav>
          <Link variant="button" color="textPrimary" href="/" className={classes.link}>
            Home
          </Link>
          <Link
            variant="button"
            color="textPrimary"
            href="/demo"
            className={classes.link}
          >
            Demo
          </Link>
          <Link
            variant="button"
            color="textPrimary"
            href="/blog"
            className={classes.link}
          >
            Blog
          </Link>
        </nav>
        <Button href="#" color="primary" variant="outlined" className={classes.link}>
          Login
        </Button>
      </Toolbar>
    </AppBar>
  )
}

export default Header
