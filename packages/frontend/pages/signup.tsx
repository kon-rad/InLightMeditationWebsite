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
import { useAuth } from '../context/auth';
import Router from 'next/router'
import { toast } from "react-toastify";

const SignUp: NextPage = () => {
    const [email, setEmail] = useState<string>("");
    const [password, setPassword] = useState<string>("");
    const [confirmPassword, setConfirmPassword] = useState<string>("");
    const [show, setShow] = useState(false);
    const [showConfirm, setShowConfirm] = useState(false);
    const handleClick = () => setShow(!show);
    const { signup } = useAuth();

    const onSignup = async () => {
        if (password !== confirmPassword) {
            toast.error('password does not match', {
                    position: "top-right",
                    autoClose: 5000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                });
            return;
        }

        try {
            await signup(email, password);
            Router.push("/");
        } catch (e: any) {
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
                <Button colorScheme="purple" variant="solid" onClick={onSignup}>
                    Sign Up
                </Button>
            </Flex>
        </Container>
    );
};

export default SignUp;
