import { createMuiTheme } from '@material-ui/core/styles'

const theme = createMuiTheme({
    typography: {
      useNextVariants: true,
    },
    palette: {
      primary: {
      light: '#fff',
      main: '#1260cc',
      dark: '#373737',
      contrastText: '#1260cc',
    },
    secondary: {
      light: '#ffad42',
      main: '#1260cc',
      dark: '#bb4d00',
      contrastText: '#fffde7',
    },
      openTitle: '#455a64',
      protectedTitle: '#f57c00',
      type: 'light'
    }
  })

  export default theme