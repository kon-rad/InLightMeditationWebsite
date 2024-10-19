import type { NextPage } from 'next'
import Head from 'next/head'
import { Box, Heading, Text, Link, VStack, Container } from '@chakra-ui/react'

import FAQ from '../components/faq';

const Support: NextPage = () => {
  return (
    <Box minHeight="100vh" display="flex" alignItems="center" justifyContent="center">
      <Head>
        <title>Request Support</title>
        <meta name="description" content="Request support page" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <VStack>
        <Container centerContent maxW="container.md" py={24}>
          <VStack spacing={12} textAlign="center">
            <Heading as="h1" size="2xl" my={8}>
              Request Support
            </Heading>
            <Text fontSize="xl" fontWeight="bold" mb={8}>
              Send an email with your questions, request or comment to{' '}
              <Link href="mailto:KonradMGnat@gmail.com" color="blue.500" textDecoration="underline">
                KonradMGnat@gmail.com
              </Link>
            </Text>
          </VStack>

        </Container>
        <FAQ />
      </VStack>
    </Box>
  )
}

export default Support
