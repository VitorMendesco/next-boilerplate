import Head from 'next/head'

import { ComponentFirst } from '@components/ComponentFirst'
import { Typography } from '@mui/material'

import { HomeProps, Repository } from './types'

export default function Home({ repositories }: HomeProps) {
  return (
    <>
      <Head>
        <title>Next 01</title>
        <meta name="description" content="Desc" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <Typography variant="h6">{process.env.NEXT_PUBLIC_VARIABLE}</Typography>
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
