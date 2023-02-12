import Head from 'next/head'

import { Typography } from '@mui/material'

import { Link } from '@components/Link'

export default function About() {
  return (
    <>
      <Head>
        <title>About - Next01</title>
        <meta name="description about" content="About Desc" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <Typography>About</Typography>
        <Link href="/">HOME</Link>
      </main>
    </>
  )
}
