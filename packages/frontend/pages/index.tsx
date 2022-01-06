import type { NextPage } from 'next'
import Image from 'next/image'
import { Box, Flex } from '@chakra-ui/react';
import styles from '../styles/Home.module.css'
import Hero from '../components/hero';
import Features from '../components/features';
import Statistics from '../components/statistics';
import { gql, useQuery } from '@apollo/client'

const AllUsersQuery = gql`
  query {
    users {
      name
    }
    session {
      title
      datetime
    }
  }
`

const Home: NextPage = () => {
  const { data, loading, error } = useQuery(AllUsersQuery)

  return (
    <div className={styles.container}>
      <Hero />
      {data && data.users?.map((elem: any) => <h1>{elem.name}</h1>)}
      {data && data.session?.map((elem: any) => <h1>{elem.title}</h1>)}
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
