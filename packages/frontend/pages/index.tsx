import type { NextPage } from 'next'
import styles from '../styles/Home.module.css'
import Hero from '../components/hero';

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <Hero />
    </div>
  )
}

export default Home
