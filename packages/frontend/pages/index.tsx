import type { NextPage } from 'next'
import styles from '../styles/Home.module.css'
import Hero from '../components/hero';
import Features from '../components/features';
import Roadmap from '../components/roadmap';

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <Hero />
      <Features />
      <Roadmap />
    </div>
  )
}

export default Home
