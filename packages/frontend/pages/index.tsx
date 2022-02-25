import type { NextPage } from 'next'
import styles from '../styles/Home.module.css'
import Hero from '../components/hero';
import Features from '../components/features';

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <Hero />
      <Features />
    </div>
  )
}

export default Home
