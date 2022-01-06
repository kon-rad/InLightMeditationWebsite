import type { NextPage } from 'next'
import Image from 'next/image'
import { Box, Flex } from '@chakra-ui/react';
import styles from '../styles/Home.module.css'
import Hero from '../components/hero';
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
      {data && data.session?.map((elem: any) => <h1>{elem.title}</h1>)}
    </div>
  )
}

export default Home
