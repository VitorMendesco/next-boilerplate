import { Outfit } from '@next/font/google'
import { createTheme } from '@mui/material/styles'
import { red } from '@mui/material/colors'

export const outfit = Outfit({
  weight: ['300', '400', '500', '700'],
  subsets: ['latin'],
  display: 'swap',
  fallback: ['Helvetica', 'Arial', 'sans-serif'],
})

export const baseTheme = createTheme({
  palette: {
    mode: 'light',
    primary: {
      main: '#1484ed',
    },
    secondary: {
      main: '#580505',
    },
    error: {
      main: red.A400,
    },
  },
  typography: {
    fontFamily: outfit.style.fontFamily,
  },
})

export const lightTheme = createTheme({
  palette: {
    mode: 'light',
    primary: {
      main: '#2d2d2d',
    },
    secondary: {
      main: '#ed145b',
    },
  },
})

export const darkTheme = createTheme({
  palette: {
    mode: 'dark',
    primary: {
      main: '#ed145b',
    },
    secondary: {
      main: '#2d2d2d',
    },
  },
})
