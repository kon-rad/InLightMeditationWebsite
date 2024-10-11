import type { NextPage } from 'next'
import styles from '../styles/Home.module.css'
import { Box, Container, Heading, Text } from '@chakra-ui/react'

const PrivacyPolicy = () => {
  return (
    <Container maxW="container.xl">
      <Box my={6}>
        <div className={styles.container}>
          <Heading as="h1" size="2xl" mb={6}><strong>Privacy Policy for InLight Meditation</strong></Heading>
          <Text as="em" mb={8}>Last updated: October 8, 2024</Text>

          <Heading as="h2" size="xl" mt={8} mb={4}>1. Introduction</Heading>
          <Text>InLight Meditation (&quot;we,&quot; &quot;our,&quot; or &quot;us&quot;) is committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you use our InLight Meditation Timer app and AI Meditation Coach service (the &quot;Service&quot;).</Text>

          <Heading as="h2" size="xl" mt={8} mb={4}>2. Information We Collect</Heading>
          <Text>We collect several types of information for various purposes to provide and improve our Service to you:</Text>

          <Heading as="h3" size="lg" mt={6} mb={3}>2.1 Personal Information</Heading>
          <ul>
            <li>Contact information (e.g., email address)</li>
            <li>User profile information</li>
            <li>Subscription and payment details</li>
          </ul>

          <Heading as="h3" size="lg" mt={6} mb={3}>2.2 Usage Data</Heading>
          <ul>
            <li>Meditation session data</li>
            <li>Interactions with the AI Meditation Coach</li>
            <li>App usage statistics</li>
          </ul>

          <Heading as="h3" size="lg" mt={6} mb={3}>2.3 Device Information</Heading>
          <ul>
            <li>Device type and operating system</li>
            <li>Unique device identifiers</li>
          </ul>

          <Heading as="h2" size="xl" mt={8} mb={4}>3. How We Use Your Information</Heading>
          <Text>We use the collected data for various purposes:</Text>
          <ul>
            <li>To provide and maintain our Service</li>
            <li>To notify you about changes to our Service</li>
            <li>To provide customer support</li>
            <li>To gather analysis or valuable information so that we can improve our Service</li>
            <li>To monitor the usage of our Service</li>
            <li>To detect, prevent and address technical issues</li>
            <li>To provide personalized meditation coaching through our AI feature</li>
          </ul>

          <Heading as="h2" size="xl" mt={8} mb={4}>4. Data Retention and Deletion</Heading>
          <Text>We retain your personal information only for as long as necessary to provide you with our Service and as described in this Privacy Policy. You can request deletion of your data by contacting us at [contact email].</Text>

          <Heading as="h2" size="xl" mt={8} mb={4}>5. Data Security</Heading>
          <Text>We implement appropriate technical and organizational measures to protect the security of your personal information. However, please note that no method of transmission over the Internet or method of electronic storage is 100% secure.</Text>

          <Heading as="h2" size="xl" mt={8} mb={4}>6. Third-party Service Providers</Heading>
          <Text>We may employ third-party companies and individuals due to the following reasons:</Text>
          <ul>
            <li>To facilitate our Service</li>
            <li>To provide the Service on our behalf</li>
            <li>To perform Service-related services</li>
            <li>To assist us in analyzing how our Service is used</li>
          </ul>
          <Text>These third parties have access to your Personal Information only to perform these tasks on our behalf and are obligated not to disclose or use it for any other purpose.</Text>

          <Heading as="h2" size="xl" mt={8} mb={4}>7. Children&apos;s Privacy</Heading>
          <Text>Our Service does not address anyone under the age of 18 (&quot;Children&quot;). If you are under 18, please do not use the subscription features of our Service without parental consent.</Text>

          <Heading as="h2" size="xl" mt={8} mb={4}>8. Changes to This Privacy Policy</Heading>
          <Text>We may update our Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page and updating the &quot;Last updated&quot; date.</Text>

          <Heading as="h2" size="xl" mt={8} mb={4}>9. Your Rights</Heading>
          <Text>Depending on your location, you may have certain rights regarding your personal information, such as the right to access, correct, or delete your data. Please contact us to exercise these rights.</Text>

          <Heading as="h2" size="xl" mt={8} mb={4}>10. Contact Us</Heading>
          <Text>If you have any questions about this Privacy Policy, please contact us at:</Text>
          <Text>Email: <a href="mailto:synducer@gmail.com">synducer@gmail.com</a></Text>

          <Text mt={8}>By using our Service, you agree to the collection and use of information in accordance with this Privacy Policy.</Text>
        </div>
      </Box>
    </Container>
  )
}

export default PrivacyPolicy