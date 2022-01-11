import { useState } from 'react';
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { Container, Flex, Box, Input, Text, Button } from '@chakra-ui/react';
import { NextPage } from 'next';

const SignIn: NextPage = () => {
    const [email, setEmail] = useState<string>("");
    const [password, setPassword] = useState<string>("");
    const signIn = () => {

        const auth = getAuth();
        signInWithEmailAndPassword(auth, email, password)
          .then((userCredential) => {
            // Signed in 
            const user = userCredential.user;
            // ...
            console.log("signed in : ", user);
          })
          .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            console.error(errorCode, errorMessage);
          });
    }
    return (
        <Container>
            <Text fontSize='4xl'>Sign In</Text>
            <Flex items="center">
                <Box width="400px">
                    <Input name="email" value={email} onChange={(e: any) => setEmail(e.target.value)}/>
                    <Input name="password" value={password} onChange={(e: any) => setPassword(e.target.value)}/>
                    <Button colorScheme='purple' variant='solid' onClick={signIn}>Sign In</Button>
                </Box>
            </Flex>
        </Container>
    )
}

export default SignIn;