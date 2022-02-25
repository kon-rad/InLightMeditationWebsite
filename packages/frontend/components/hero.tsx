import { Container, Flex, Image } from "@chakra-ui/react";

export default function Hero() {
    return (
        <Container maxW={"7xl"}>
            <Flex justify="center" align="center" m="8">
                <Image
                    src="/images/headline.png"
                    width="600px"
                    height="200px"
                />
            </Flex>
        </Container>
    );
}
