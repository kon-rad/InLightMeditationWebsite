import type { NextPage } from 'next'
import Image from 'next/image'
import { Box, Flex } from '@chakra-ui/react';
import styles from '../styles/Home.module.css'
import Hero from '../components/hero';
import Features from '../components/features';
import Statistics from '../components/statistics';

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <Hero />
      <Flex justifyContent="center" alignItems="center" direction="column">
        <Box maxWidth="1200px" my={12}>
          <Features />
        </Box>
        <Box maxWidth="1200px" my={12}>
          <Statistics />
        </Box>
      </Flex>
    </div>
  )
}

export default Home
