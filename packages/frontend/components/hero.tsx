import { Container, Flex, Image, useMediaQuery } from "@chakra-ui/react";

export default function Hero() {
    const [isMobile] = useMediaQuery("(max-width: 600px)");
    const width = isMobile ? '100%' : '600px';
    return (
        <Container maxW={"7xl"}>
            <Flex justify="center" align="center" my="8">
                <Image
                    src="/images/headline.png"
                    height="200px"
                    width={width}
                    objectFit="contain"
                />
            </Flex>
        </Container>
    );
}
