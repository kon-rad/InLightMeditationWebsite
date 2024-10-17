import React from 'react';
import Image from 'next/image';
import { Box, VStack, Heading, Text, Button, Link, Flex } from '@chakra-ui/react';

const LandingPage: React.FC = () => {
  return (
    <Box minH="100vh" p={4} bg="gray.100">
      <VStack spacing={8} align="center" justify="center">
        <Heading as="h1" size="2xl" textAlign="center" color="indigo.800">
          InLight Meditation AI Coach
        </Heading>

        <Box borderRadius="40px" overflow="hidden" boxShadow="xl" position="relative" width="300px" height="600px">
          <Image
            src="/screenshot-1.png"
            alt="InLight Meditation App Screenshot"
            layout="fill"
            objectFit="cover"
            style={{ borderRadius: '40px' }}
          />
        </Box>

        <Text fontSize="lg" textAlign="center" maxW="2xl" color="gray.700">
          Embark on a transformative journey of mindfulness with our innovative meditation app. 
          Featuring a user-friendly timer, consciousness-raising bell sounds, reflection prompts, 
          and a gamified streak system. Stay motivated with your personalized profile and 
          customizable intention reminders. Upgrade to our premium AI-powered meditation coach 
          for personalized advice and support on your mindfulness journey.
        </Text>

        <Box border="" p={2}>
          <Button
            as="a"
            href="https://apps.apple.com/us/app/inlight-meditation-timer/id1590699795"
            size="lg"
            colorScheme="indigo"
            fontWeight="semibold"
            borderRadius="full"
            _hover={{ transform: 'scale(1.05)' }}
            transition="all 0.3s ease-in-out"
            background="black"
          >
            Download the App
          </Button>
        </Box>

        <Flex fontSize="sm" color="gray.600" mt={8}>
          <Link href="https://www.apple.com/legal/internet-services/itunes/dev/stdeula/" textDecoration="underline" mr={2}>
            Terms of Use
          </Link>
          {' | '}
          <Link href="https://www.inlightmeditation.com/privacy-policy" textDecoration="underline" ml={2}>
            Privacy Policy
          </Link>
        </Flex>
      </VStack>
    </Box>
  );
};

export default LandingPage;
