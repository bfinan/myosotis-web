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

        <h2>PKM Services</h2>
        <div className={styles.grid}>
          <Link href="/services/edit">Editing</Link>
          <Link href="/services/research">Research</Link>
        </div>

        <h2>PKM Tools</h2>

        <div className={styles.grid}>
          <Link href="/tools/pacer">Pacer</Link>
          <Link href="/tools/intake">Intake</Link>
        </div>

        <div className={styles.grid}>
        <h2><Link href="/wikibump">Wikibump</Link> </h2>
        </div>

        <h2>Links</h2>
        <br></br>
        <div className={styles.grid}>
        <Link href="/log">Blog 🌸</Link>
        <Link href="https://github.com/bfinan/myosotis">Github🛠️</Link>
        <Link href="https://medium.com/@brendanfinan">Medium 🌱</Link>
        <Link href="https://twitter.com/myosotis_pkm">Twitter 🐦 </Link>
        <Link href="https://pkm.social/@myosotis">Masto 🐘</Link>
        <Link href="https://discord.gg/nf3gS677">Discord 🎙️</Link>
        </div>



      </main>
    </>
  )
}
