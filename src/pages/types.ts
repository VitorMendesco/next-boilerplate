import { AppProps } from 'next/app'
import { EmotionCache } from '@emotion/react'

export interface MyAppProps extends AppProps {
  emotionCache?: EmotionCache
}

export type Repository = {
  id: string
  name: string
}
export type HomeProps = {
  repositories: Repository[]
}
