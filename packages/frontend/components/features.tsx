import { ReactElement, useState } from "react";
import {
    Box,
    Input,
    Image,
    HStack,
    VStack,
    Icon,
    Text,
    Stack,
    Flex,
    Button,
} from "@chakra-ui/react";
import { FcAssistant, FcDonate, FcInTransit } from "react-icons/fc";
import { toast } from "react-toastify";
import { collection, addDoc, getFirestore } from "firebase/firestore";

const db: any = getFirestore();

interface FeatureProps {
    title: string;
    text: string;
    icon: ReactElement;
}

export default function Features() {
    // const [name, setName] = useState<string>("");
    const [email, setEmail] = useState<string>("");

    const handleSubmit = async () => {
        if (!email) {
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
                // name,
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
            // setName("");
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
        <Box p={4}>
            <HStack justify="center" mb="8" mt="4">
                <Box>
                    <Image
                        src="images/features-1.png"
                        height="450px"
                        objectFit="contain"
                    />
                </Box>
                <Box>
                    <Image
                        src="images/features-2.png"
                        height="450px"
                        objectFit="contain"
                    />
                </Box>
                <Box>
                    <Image
                        src="images/features-3.png"
                        height="450px"
                        objectFit="contain"
                    />
                </Box>
            </HStack>
            <VStack justify="center" m="6">
                <Stack
                    spacing={{ base: 4, sm: 6 }}
                    direction={{ base: "column", sm: "row" }}
                >
                    <Input
                      style={{
                        'fontFamily': 'Quicksand',
                        color: "brand.600",
                        backgroundColor: "brand.700",
                      }}
                        width="300px"
                        name="email"
                        value={email}
                        onChange={(e: any) => setEmail(e.target.value)}
                        placeholder="enter your email"
                    />
                </Stack>
                <Button
                    style={{
                      'fontFamily': 'Quicksand'
                    }}
                    borderRadius="8px"
                    size={"lg"}
                    fontWeight={"normal"}
                    backgroundColor={"brand.500"}
                    color={"white"}
                    width={"220px"}
                    px={6}
                    onClick={handleSubmit}
                >
                    Join the Community
                </Button>
            </VStack>
        </Box>
    );
}
