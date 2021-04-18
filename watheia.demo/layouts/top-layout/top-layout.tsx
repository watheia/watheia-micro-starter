import React, { ReactNode } from 'react'
import Copyright from '@watheia/demo.molecules.copyright'
import { CssBaseline, ThemeProvider } from '@material-ui/core'
import theme from '@watheia/demo.theme'

export type TopLayoutProps = {
  children?: ReactNode
} & Record<string, unknown>

export const TopLayout = ({ children, ...rest }: TopLayoutProps) => (
  <div {...rest}>
    <main>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        {children}
      </ThemeProvider>
    </main>
    <footer>
      <Copyright />
    </footer>
  </div>
)

export default TopLayout
