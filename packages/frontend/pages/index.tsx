import type { NextPage } from "next";
import { useEffect } from "react";
import Image from "next/image";
import { Box, Flex } from "@chakra-ui/react";
import styles from "../styles/Home.module.css";
import Hero from "../components/hero";
import Features from "../components/features";
import Statistics from "../components/statistics";
import {
    getAuth,
    isSignInWithEmailLink,
    signInWithEmailLink,
} from "firebase/auth";

const Home: NextPage = () => {
    useEffect(() => {
        checkIfSignedIn();
    }, []);

    const checkIfSignedIn = () => {
        // Confirm the link is a sign-in with email link.
        const auth = getAuth();
        if (isSignInWithEmailLink(auth, window.location.href)) {
            // Additional state parameters can also be passed via URL.
            // This can be used to continue the user's intended action before triggering
            // the sign-in operation.
            // Get the email if available. This should be available if the user completes
            // the flow on the same device where they started it.
            let email = window.localStorage.getItem("emailForSignIn");
            if (!email) {
                // User opened the link on a different device. To prevent session fixation
                // attacks, ask the user to provide the associated email again. For example:
                email = window.prompt(
                    "Please provide your email for confirmation"
                );
            }
            // The client SDK will parse the code from the link for you.
            signInWithEmailLink(auth, email || "", window.location.href)
                .then((result) => {
                    // Clear email from storage.
                    window.localStorage.removeItem("emailForSignIn");
                    // You can access the new user via result.user
                    // Additional user info profile not available via:
                    // result.additionalUserInfo.profile == null
                    // You can check if the user is new or existing:
                    // result.additionalUserInfo.isNewUser
                    console.log("result: ", result);
                })
                .catch((error) => {
                    // Some error occurred, you can inspect the code: error.code
                    // Common errors could be invalid email and invalid or expired OTPs.
                    console.log("error: ", error);
                });
        }
    };

    return (
        <div className={styles.container}>
            <Hero />
            <Flex
                justifyContent="center"
                alignItems="center"
                direction="column"
            >
                <Box maxWidth="1200px" my={12}>
                    <Features />
                </Box>
                <Box maxWidth="1200px" my={12}>
                    <Statistics />
                </Box>
            </Flex>
        </div>
    );
};

export default Home;
