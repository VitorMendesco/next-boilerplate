import { useState, useEffect } from 'react'
import Head from 'next/head'

import { Paper, Switch } from '@mui/material'
import CssBaseline from '@mui/material/CssBaseline'
import { ThemeProvider, Theme } from '@mui/material/styles'

import { CacheProvider } from '@emotion/react'
import { createEmotionCache } from '@utils/styles/createEmotionCache'

import { baseTheme, lightTheme, darkTheme } from '@styles/theme'

import { ThemeContext } from '@contexts'

import { MyAppProps } from './types'

const clientSideEmotionCache = createEmotionCache()

export default function MyApp(props: MyAppProps) {
  const { Component, emotionCache = clientSideEmotionCache, pageProps } = props

  const [isDark, setIsDark] = useState<boolean>(false)
  const [theme, setTheme] = useState<Theme>(baseTheme)

  useEffect(() => {
    setTheme({ ...baseTheme, ...(isDark ? darkTheme : lightTheme) })
  }, [isDark])

  return (
    <CacheProvider value={emotionCache}>
      <Head>
        <meta name="viewport" content="initial-scale=1, width=device-width" />
      </Head>
      <ThemeProvider theme={theme}>
        <Paper>
          <CssBaseline />
          <Switch checked={isDark} onChange={() => setIsDark(v => !v)} />
          <ThemeContext.Provider value={{ isDark, setIsDark }}>
            <Component {...pageProps} />
          </ThemeContext.Provider>
        </Paper>
      </ThemeProvider>
    </CacheProvider>
  )
}
