import type { NextPage } from 'next'
import styles from '../styles/Home.module.css'
import Hero from '../components/hero';
import Features from '../components/features';
import LandignPage from '../components/landing-page';

const Home: NextPage = () => {
  return (
    <div>
      <LandignPage />
      <Features />
    </div>
  )
}

export default Home
