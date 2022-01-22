import { useState } from "react";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import {
    Container,
    Flex,
    Box,
    Input,
    Text,
    Button,
    InputGroup,
    InputRightElement,
} from "@chakra-ui/react";
import { NextPage } from "next";
import { useAuth } from "../context/auth";

const SignIn: NextPage = () => {
    const [email, setEmail] = useState<string>("");
    const [password, setPassword] = useState<string>("");
    const [show, setShow] = useState(false);
    const handleClick = () => setShow(!show);
    const { login } = useAuth();

    const signIn = async () => {
        // const auth = getAuth();

         await login(email, password);
         console.log("complted login");
        // signInWithEmailAndPassword(auth, email, password)
        //     .then((userCredential) => {
        //         // Signed in
        //         const user = userCredential.user;
        //         // ...
        //         console.log("signed in : ", user);

        //         sessionStorage.setItem('Auth Token', user.refreshToken)
        //     })
        //     .catch((error) => {
        //         const errorCode = error.code;
        //         const errorMessage = error.message;
        //         console.error(errorCode, errorMessage);
        //     });
    };
    return (
        <Container>
            <Flex my="12" align="center" flexDirection="column">
                <Text fontSize="4xl">Sign In</Text>
                <Box width="400px">
                    <Input
                        name="email"
                        placeholder="email"
                        my={4}
                        value={email}
                        onChange={(e: any) => setEmail(e.target.value)}
                    />
                    <InputGroup size="md" my={4}>
                        <Input
                            pr="4.5rem"
                            type={show ? "text" : "password"}
                            placeholder="password"
                            name="password"
                            value={password}
                            onChange={(e: any) => setPassword(e.target.value)}
                        />
                        <InputRightElement width="4.5rem">
                            <Button h="1.75rem" size="sm" onClick={handleClick}>
                                {show ? "Hide" : "Show"}
                            </Button>
                        </InputRightElement>
                    </InputGroup>
                </Box>
                <Button colorScheme="purple" variant="solid" onClick={signIn}>
                    Sign In
                </Button>
            </Flex>
        </Container>
    );
};

export default SignIn;
