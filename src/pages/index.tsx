import Head from 'next/head'
import { ComponentFirst } from '@components/ComponentFirst'

import { Outfit } from '@next/font/google'

const outfit = Outfit({ subsets: ['latin'], preload: true, weight: '500' })

export default function Home() {
  return (
    <>
      <Head>
        <title>Next 01</title>
        <meta name="description" content="Desc" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <ComponentFirst className={outfit.className} />
      </main>
    </>
  )
}
