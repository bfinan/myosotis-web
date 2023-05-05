import Head from 'next/head'
import Image from 'next/image'
import { Inter } from 'next/font/google'
import styles from '@/src/styles/Home.module.css'
import Link from 'next/link'


const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
      <Head>
        <title>Myosotis</title>
        <meta name="description" content="Push" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.main}>


        <h1>Myosotis</h1>

        <h2>PKM tools</h2>

        <div className={styles.grid}>
          <Link href="/tools/pacer">Pacer</Link>
          <Link href="/tools/intake">Intake</Link>
          <Link href="/log">Log</Link>
          <Link href="/games/tic-tac-toe">Tic Tac Toe</Link>
          <Link href="/wikibump">Wikibump</Link>
          <Link href="https://github.com/bfinan/myosotis">Project Github</Link>

        </div>

      </main>
    </>
  )
}
