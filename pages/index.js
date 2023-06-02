import Head from 'next/head'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Ricky Alves</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1>
          Hello, I'm Ricky Alves
        </h1>

        {/* Social media links can be added here */}
        <div className={styles.links}>
          <a href="https://twitter.com/henriquesuper">Twitter</a>
          <a href="https://linkedin.com/in/henriquesuper">LinkedIn</a>
          <a href="https://github.com/henriquesuper">GitHub</a>
        </div>

      </main>

      <footer className={styles.footer}>
        © Ricky Alves, 2023
      </footer>
    </div>
  )
}
