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
        <title>About</title>
        <meta name="description" content="Push" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>


          <Link href="/">Back</Link>

        <div>
          <h1>As of 2023-07-14, this website is a experiment testing how distributed teams can be used for research. Personal Knowledge Management (PKM) tools 
            are of particular interest to this project, as well as the concept of `programmable attention`.
          </h1>
        </div>


        <div>
          <h3>Also, there`s this quote from Franz Kafka:</h3>
          <h2>“I think we ought to read only the kind of books that wound or stab us. 
            If the book we&apos;re reading doesn&apos;t wake us up with a blow to the head,
            what are we reading for? So that it will make us happy, as you write? 
            Good Lord, we would be happy precisely if we had no books, and the kind of books that make us happy 
            are the kind we could write ourselves if we had to. But we need books that affect us like a disaster,
             that grieve us deeply, like the death of someone we loved more than ourselves,
              like being banished into forests far from everyone, like a suicide. 
              A book must be the axe for the frozen sea within us.”</h2>
          <h3>--Franz Kafka</h3>
        </div>


    </>
  )
}
