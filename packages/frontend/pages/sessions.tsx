import type { NextPage } from 'next'
import Image from 'next/image'
import { Box, Flex } from '@chakra-ui/react';
import styles from '../styles/Home.module.css'
import Hero from '../components/hero';

const Home: NextPage = () => {

  return (
    <div className={styles.container}>
      <Hero />
      <h1>Sessions</h1>
    </div>
  )
}

export default Home
