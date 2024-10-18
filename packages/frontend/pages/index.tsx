import type { NextPage } from 'next'
import styles from '../styles/Home.module.css'
import Hero from '../components/hero';
import Features from '../components/features';
import LandingPage from '../components/landing-page';
import FAQ from '../components/faq';

const Home: NextPage = () => {
  return (
    <div>
      <LandingPage />
      <Features />
      <FAQ />
    </div>
  )
}

export default Home
