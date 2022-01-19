import { useState } from 'react';
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { Container, Flex, Box, Input, Text, Button,InputGroup,InputRightElement } from '@chakra-ui/react';
import { NextPage } from 'next';

const SignIn: NextPage = () => {
    const [email, setEmail] = useState<string>("");
    const [password, setPassword] = useState<string>("");
    const [show, setShow] = useState(false)
    const handleClick = () => setShow(!show)
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
    console.log(show);
    return (
        <Container>
            <Text fontSize='4xl'>Sign In</Text>
            <Flex items="center">
                <Box width="400px">
                    <Input name="email" value={email} onChange={(e: any) => setEmail(e.target.value)}/>
                    <InputGroup size='md'>
                        <Input
                            pr='4.5rem'
                            type={show ? 'text' : 'password'}
                            placeholder='Enter password'
                            name="password"
                            value={password}
                            onChange={(e: any) => setPassword(e.target.value)}
                        />
                        <InputRightElement width='4.5rem'>
                            <Button h='1.75rem' size='sm' onClick={handleClick}>
                            {show ? 'Hide' : 'Show'}
                            </Button>
                        </InputRightElement>
                    </InputGroup>
                    <Button colorScheme='purple' variant='solid' onClick={signIn}>Sign In</Button>
                </Box>
            </Flex>
        </Container>
    )
}

export default SignIn;