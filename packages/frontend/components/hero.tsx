import {
    Container,
    Stack,
    Flex,
    Box,
    Heading,
    Text,
    Button,
    Image,
    Icon,
    IconButton,
    createIcon,
    IconProps,
    useColorModeValue,
    Input,
    ListItem,
    List,
    ListIcon,
    OrderedList,
} from "@chakra-ui/react";
import { toast } from "react-toastify";
import { collection, addDoc, getFirestore } from "firebase/firestore";
import { useState } from "react";

const db: any = getFirestore();

export default function Hero() {
    const [name, setName] = useState<string>("");
    const [email, setEmail] = useState<string>("");

    const handleSubmit = async () => {
        if (!name || !email) {
            toast.error(`Make sure to enter your name and email!`, {
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
            await addDoc(collection(db, "landingpage"), {
                name,
                email,
            });
            toast(`You're signed up!`, {
                position: "top-right",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
            });
            setName("");
            setEmail("");
        } catch (e) {
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
        <Container maxW={"7xl"}>
            <Stack
                align={"center"}
                spacing={{ base: 8, md: 10 }}
                py={{ base: 20, md: 28 }}
                direction={{ base: "column", md: "row" }}
            >
                <Stack flex={1} spacing={{ base: 5, md: 10 }}>
                    <Heading
                        lineHeight={1.1}
                        fontWeight={600}
                        fontSize={{ base: "3xl", sm: "4xl", lg: "6xl" }}
                    >
                        <Text
                            as={"h1"}
                            position={"relative"}
                            color={"brand.100"}
                        >
                            InLight Meditation
                        </Text>
                    </Heading>
                    <Box p="4">
                        <Text color={"gray.500"}>
                            Meditation has many benefits; from physical health,
                            to improvements in education, to better life
                            decisions and greater self awareness. The
                            scienctific research on this is in agreement,
                            meditation has great benefits. It is so easy to do
                            and simple. This app aims to help you stick with
                            this practice, through three simple means:
                        </Text>
                        <OrderedList spacing={3}>
                            <ListItem color={"gray.500"}>
                                an easy to use, practical meditation timer
                            </ListItem>
                            <ListItem color={"gray.500"}>
                                staking of monetary amounts in order to fulfill
                                a pre set goal
                            </ListItem>
                            <ListItem color={"gray.500"}>
                                building a long term community through regular
                                group meditation
                            </ListItem>
                        </OrderedList>
                    </Box>
                    <Text fontSize="xl">Sign up to get notified when InLight App launches!</Text>

                    <Stack
                        spacing={{ base: 4, sm: 6 }}
                        direction={{ base: "column", sm: "row" }}
                    >
                        <Input
                            name="email"
                            value={email}
                            onChange={(e: any) => setEmail(e.target.value)}
                            placeholder="email"
                        />
                        <Input
                            name="name"
                            value={name}
                            onChange={(e: any) => setName(e.target.value)}
                            placeholder="name"
                        />
                    </Stack>
                    <Button
                        rounded={"full"}
                        size={"lg"}
                        fontWeight={"normal"}
                        backgroundColor={"brand.300"}
                        color={"black.600"}
                        width={"120px"}
                        px={6}
                        onClick={handleSubmit}
                    >
                        Notify me
                    </Button>
                </Stack>
                <Flex
                    flex={1}
                    justify={"center"}
                    align={"center"}
                    position={"relative"}
                    w={"full"}
                >
                    <Blob
                        w={"150%"}
                        h={"150%"}
                        position={"absolute"}
                        top={"-20%"}
                        left={0}
                        zIndex={-1}
                        color={useColorModeValue("red.50", "red.400")}
                    />
                    <Box
                        position={"relative"}
                        height={"300px"}
                        rounded={"2xl"}
                        boxShadow={"2xl"}
                        width={"full"}
                        overflow={"hidden"}
                    >
                        <Image
                            alt={"Hero Image"}
                            fit={"cover"}
                            align={"center"}
                            w={"100%"}
                            h={"100%"}
                            src={
                                "https://images.unsplash.com/photo-1474418397713-7ede21d49118?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1153&q=80"
                            }
                        />
                    </Box>
                </Flex>
            </Stack>
        </Container>
    );
}

export const Blob = (props: IconProps) => {
    return (
        <Icon
            width={"100%"}
            viewBox="0 0 578 440"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            {...props}
        >
            <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M239.184 439.443c-55.13-5.419-110.241-21.365-151.074-58.767C42.307 338.722-7.478 282.729.938 221.217c8.433-61.644 78.896-91.048 126.871-130.712 34.337-28.388 70.198-51.348 112.004-66.78C282.34 8.024 325.382-3.369 370.518.904c54.019 5.115 112.774 10.886 150.881 49.482 39.916 40.427 49.421 100.753 53.385 157.402 4.13 59.015 11.255 128.44-30.444 170.44-41.383 41.683-111.6 19.106-169.213 30.663-46.68 9.364-88.56 35.21-135.943 30.551z"
                fill="#81B29A"
            />
        </Icon>
    );
};
