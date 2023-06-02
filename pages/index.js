import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div>
      <Head>
        <title>Ricky Alves</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <h1>
          Hello, I'm Ricky Alves
        </h1>

        {/* Social media links */}
        <div>
          <a href="https://twitter.com/rickyalves">Twitter</a>
          <a href="https://linkedin.com/in/rickyalves">LinkedIn</a>
          <a href="https://github.com/rickyalves">GitHub</a>
        </div>

      </main>

      <footer>
        © Ricky Alves, 2023
      </footer>
    </div>
  )
}
