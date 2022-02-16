import { useState } from "react";
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
import { getAuth, sendSignInLinkToEmail } from "firebase/auth";
import Router from "next/router";
import { toast } from "react-toastify";

const actionCodeSettings = {
    // URL you want to redirect back to. The domain (www.example.com) for this
    // URL must be in the authorized domains list in the Firebase Console.
    url: "http://localhost:3004",
    // This must be true.
    handleCodeInApp: true,
    // dynamicLinkDomain: "https://inlight.signin.link",
};

const SignIn: NextPage = () => {
    const [email, setEmail] = useState<string>("");

    const onLogIn = async () => {
        const auth = getAuth();

        try {
            sendSignInLinkToEmail(auth, email, actionCodeSettings)
                .then(() => {
                    window.localStorage.setItem("emailForSignIn", email);
                    Router.push("/");
                })
                .catch((error) => {
                    const errorCode = error.code;
                    const errorMessage = error.message;
                    toast.error(`${errorCode}: ${errorMessage}`, {
                        position: "top-right",
                        autoClose: 5000,
                        hideProgressBar: false,
                        closeOnClick: true,
                        pauseOnHover: true,
                        draggable: true,
                        progress: undefined,
                    });
                    return;
                });
        } catch(e: any) {
            toast.error(`${e}`, {
                position: "top-right",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
            });
        }
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
                </Box>
                <Button colorScheme="purple" variant="solid" onClick={onLogIn}>
                    Sign In
                </Button>
            </Flex>
        </Container>
    );
};

export default SignIn;
