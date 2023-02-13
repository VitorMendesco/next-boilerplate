import { Outfit } from '@next/font/google'
import { createTheme } from '@mui/material/styles'

import { baseTheme as base, lightTheme as light, darkTheme as dark } from '@mendesco/react-component-lib'

export const outfit = Outfit({
  weight: ['300', '400', '500', '700'],
  subsets: ['latin'],
  display: 'swap',
  fallback: ['Helvetica', 'Arial', 'sans-serif'],
})

export const baseTheme = createTheme({
  ...base,
  typography: {
    fontFamily: outfit.style.fontFamily,
  },
})

export const lightTheme = createTheme({
  ...baseTheme,
  ...light,
})

export const darkTheme = createTheme({
  ...baseTheme,
  ...dark,
})
