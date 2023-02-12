import { useContext } from 'react'
import Head from 'next/head'

import { ComponentFirst } from '@components'
import { Switch, Typography } from '@mui/material'

import { HomeProps, Repository } from './types'
import { ThemeContext, type ThemeContextType } from '@contexts'

export default function Home({ repositories }: HomeProps) {
  const { isDark, setIsDark } = useContext(ThemeContext) as ThemeContextType

  return (
    <>
      <Head>
        <title>Index - Next01</title>
        <meta name="description index" content="Index Desc" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <Typography variant="h6">{process.env.NEXT_PUBLIC_VARIABLE}</Typography>
        <Switch checked={isDark} onChange={() => setIsDark(!isDark)} />
        <ComponentFirst />
        {repositories?.map(repo => (
          <Typography variant="body1" key={repo.id}>
            {repo.name}
          </Typography>
        ))}
      </main>
    </>
  )
}

export async function getServerSideProps() {
  const response = await fetch('https://jsonplaceholder.typicode.com/users')
  const repositories: Repository[] = await response.json()
  return {
    props: { repositories: repositories?.map(repo => ({ id: repo.id, name: repo.name })) },
  }
}
