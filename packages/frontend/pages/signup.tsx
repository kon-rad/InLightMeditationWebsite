import { useState } from "react";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
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
const auth = getAuth();

const SignUp: NextPage = () => {
    const [email, setEmail] = useState<string>("");
    const [password, setPassword] = useState<string>("");
    const [confirmPassword, setConfirmPassword] = useState<string>("");
    const [show, setShow] = useState(false);
    const [showConfirm, setShowConfirm] = useState(false);
    const handleClick = () => setShow(!show);

    // const signup = async (email, password) => {
    //     const user = await firebase.auth().createUserWithEmailAndPassword(email, password)
    //     await user.user.sendEmailVerification()
    //     return `Check your email for verification mail before logging in`
    //   };
    const signup = () => {
        createUserWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                // Signed in
                const user = userCredential.user;
                // ...
                console.log("signed up: ", user);
            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                // ..
                console.error(`Error: ${errorCode} ${errorMessage}`)
            });
    };
    return (
        <Container>
            <Flex my="12" align="center" flexDirection="column">
                <Text fontSize="4xl">Sign Up</Text>
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
                    <InputGroup size="md" my={4}>
                        <Input
                            pr="4.5rem"
                            type={showConfirm ? "text" : "password"}
                            placeholder="confirm password"
                            name="confirmPassword"
                            value={confirmPassword}
                            onChange={(e: any) => setConfirmPassword(e.target.value)}
                        />
                        <InputRightElement width="4.5rem">
                            <Button h="1.75rem" size="sm" onClick={() => setShowConfirm(!showConfirm)}>
                                {show ? "Hide" : "Show"}
                            </Button>
                        </InputRightElement>
                    </InputGroup>
                </Box>
                <Button colorScheme="purple" variant="solid" onClick={signup}>
                    Sign In
                </Button>
            </Flex>
        </Container>
    );
};

export default SignUp;
