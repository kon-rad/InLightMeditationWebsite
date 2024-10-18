import React from 'react';
import {
  Box,
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
  Heading,
  Text,
  Container,
} from '@chakra-ui/react';

const faqData = [
  {
    question: "What is the AI-powered meditation coach, and how does it work?",
    answer: "The AI-powered meditation coach is a voice-guided feature designed to provide personalized meditation guidance based on your individual needs. It offers tailored advice, answers questions about your practice, and helps you overcome challenges by acting as your meditation mentor. The coach adjusts its guidance based on your preferences and progress to enhance your mindfulness journey."
  },
  {
    question: "How do I access the voice-guided AI meditation coach?",
    answer: "The voice-guided AI meditation coach is available exclusively to premium subscribers. Once you subscribe, you can activate the AI coach through the app's main menu or meditation session options."
  },
  {
    question: "What features are included with the free version of the app?",
    answer: "The free version includes essential features like a meditation timer with a bell sound, post-meditation reflection prompts, and a streak system that tracks your daily meditation practice to encourage consistency."
  },
  {
    question: "What benefits do I get from subscribing to the premium version?",
    answer: "Subscribers gain access to the AI-powered meditation coach, which provides personalized guidance, voice-led meditation sessions, and tailored advice."
  },
  {
    question: "Can I try the AI coach before subscribing?",
    answer: "At this time, the AI-powered meditation coach is only available with a subscription. However, you can explore the free features of the app to determine if the full experience aligns with your meditation needs."
  },
  {
    question: "How does the meditation timer and bell feature work?",
    answer: "The meditation timer allows you to set the length of your session, and the bell chimes at the start and end of your meditation to create a calming, mindful environment. You can adjust the sound settings in the app to suit your preferences."
  },
  {
    question: "How can I track my meditation progress in the app?",
    answer: "After each session, the app prompts you to reflect on your experience and record any insights. Your reflections and meditation streaks are saved in your personalized profile, allowing you to track your progress over time."
  },
  {
    question: "What is the streak system, and how does it motivate consistent practice?",
    answer: "The streak system tracks how many consecutive days you meditate. By maintaining a streak, you stay motivated to keep up your practice, as missing a day will reset your streak count. This gamified feature encourages long-term consistency in your mindfulness routine."
  },
  {
    question: "Is the AI meditation coach suitable for beginners?",
    answer: "Yes, the AI meditation coach is designed to accommodate all skill levels, including beginners. It provides step-by-step guidance and answers to common meditation questions, making it an excellent tool for those just starting their practice."
  },
  {
    question: "How can I write reflections after each meditation session?",
    answer: "After each meditation session, the app will automatically prompt you to write a reflection. You can jot down your thoughts, insights, or feelings about the session. These reflections are saved in your profile for you to review later."
  },
  {
    question: "What happens if I miss a day in my streak?",
    answer: "If you miss a day of meditation, your streak will reset to zero. However, you can start fresh the next day and work towards building a new streak to maintain consistent practice."
  },
  {
    question: "How is my personal information stored and protected?",
    answer: "Your personal information is securely stored in compliance with privacy regulations. We use encryption to protect your data and ensure that your personal details, reflections, and meditation history remain private. You can learn more in our Privacy Policy."
  },
  {
    question: "How do I manage or cancel my subscription?",
    answer: "You can manage or cancel your subscription through the App Store (for iOS). Go to your iPhone settings, tap on iCloud account, tap on the subscriptions section, and follow the instructions to cancel your plan."
  },
  {
    question: "Are there any guided meditations included in the free version?",
    answer: "The free version does not include guided meditations. However, you can still use the timer and bell features to guide your practice. For personalized voice guidance, you can upgrade to the premium version."
  },
  {
    question: "Can I use the app offline?",
    answer: "Yes, you can use certain feature of the app, such as the meditation timer, offline. However, access to the AI-powered meditation coach and some premium features does require an internet connection."
  },
  {
    question: "Is the app available on both iOS and Android?",
    answer: "The app is available only on iOS, and you can download it from the Apple App Store."
  },
  {
    question: "How do I reset my meditation streak if needed?",
    answer: "Currently, there isn't an option to manually reset your streak. Your streak will automatically reset if you miss a day of practice. You can then start building a new streak by meditating the following day."
  },
  {
    question: "What kind of personalized advice can the AI coach provide?",
    answer: "The AI coach can offer guidance on various aspects of meditation, such as techniques for staying focused, overcoming distractions, improving mindfulness, and managing stress. It tailors its advice to your experience level and personal progress."
  },
  {
    question: "How often is new content or updates added to the app?",
    answer: "We regularly update the app to include new features, improvements, and exclusive content for premium subscribers. You'll receive notifications when new content or updates are available to enhance your meditation practice."
  },
];

const FAQ: React.FC = () => {
  return (
    <Box bg="gray.50" py={16}>
      <Container maxW="container.xl">
        <Heading as="h2" size="xl" textAlign="center" mb={10}>
          Frequently Asked Questions
        </Heading>
        <Accordion allowMultiple>
          {faqData.map((item, index) => (
            <AccordionItem key={index}>
              <h2>
                <AccordionButton>
                  <Box flex="1" textAlign="left">
                    <Text fontWeight="semibold">{item.question}</Text>
                  </Box>
                  <AccordionIcon />
                </AccordionButton>
              </h2>
              <AccordionPanel pb={4}>
                {item.answer}
              </AccordionPanel>
            </AccordionItem>
          ))}
        </Accordion>
      </Container>
    </Box>
  );
};

export default FAQ;
