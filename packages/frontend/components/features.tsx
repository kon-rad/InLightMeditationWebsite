import { ReactElement, useState, useEffect } from "react";
import {
    Box,
    Input,
    Image,
    VStack,
    useMediaQuery,
    Flex,
    Button,
} from "@chakra-ui/react";
import { toast } from "react-toastify";
import { collection, addDoc, getFirestore } from "firebase/firestore";

const db: any = getFirestore();

interface FeatureProps {
    title: string;
    text: string;
    icon: ReactElement;
}

export default function Features() {
    const [mediaQuery] = useMediaQuery("(max-width: 600px)");
    const [email, setEmail] = useState<string>("");
    const [isMobile, setIsMobile] = useState(false)
    // const [isMinWidthMedium, setIsMinWidthMedium] = useState(false);
    // const mediaQuery = useMediaQuery("(min-width: 768px)");
  
    useEffect(() => {
      if(mediaQuery !== isMobile){
        setIsMobile(mediaQuery);
      }
    }, [mediaQuery])

    const handleSubmit = async () => {
        if (!email) {
            toast.error(`Make sure to enter your email!`, {
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

    const direction = isMobile ? "column" : "row";
    const width = isMobile ? "100%" : "360px";
    return (
        <Box p={4} bg="gray.100">
            <VStack justify="center" m="6">
                <Input
                    style={{
                        fontFamily: "Quicksand",
                        color: "brand.600",
                        backgroundColor: "brand.700",
                    }}
                    width={width}
                    name="email"
                    value={email}
                    onChange={(e: any) => setEmail(e.target.value)}
                    placeholder="enter your email"
                />
                <Button
                    style={{
                        fontFamily: "Quicksand",
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
