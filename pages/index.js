import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Header from '../components/Header'
import { useSession } from 'next-auth/react'

export default function Home() {
  const { data: session, status } = useSession()
  const loading = status === "loading"

  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header/> 
      <main className={styles.main}>
        <h1 className={styles.title}>Authentication in Next.js app using Next-Auth</h1>
        <div className={styles.user}>
           {loading && <div className={styles.title}>Loading...</div>}
           {
            session &&
              <>
               <p style={{ marginBottom: '10px' }}> Welcome, {session.user.name ?? session.user.email}</p> <br />
               <img src={session.user.image} alt="" className={styles.avatar} />
              </>
            }
           {
            !session &&
              <>
               <p className={styles.title}>Please Sign in</p>
               <img src="https://64.media.tumblr.com/df9fb4cabea8fbdefdc68f730f09cb87/tumblr_mrw4mfjNoB1r2xsveo1_400.gifv" alt="" className={styles.avatar} />
              </>
           }
         </div>
      </main>
    </div>
  )
}
