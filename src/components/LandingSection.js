import React from "react";
import { Avatar, Heading, VStack } from "@chakra-ui/react";
import FullScreenSection from "./FullScreenSection";
import myAvatar from "../images/avatar.png"; 

const greeting = "Hello, I am Saleha!";
const bio1 = "A frontend developer";
const bio2 = "Specialized in React";

const LandingSection = () => (
  <FullScreenSection
    justifyContent="center"
    alignItems="center"
    isDarkBackground
    backgroundColor="#2A4365"
  >
    <VStack spacing={4} align="center">
      <Avatar size="xl" name="Pete" src={myAvatar} />
      <Heading as="h1" size="sm" color="white">
        {greeting}
      </Heading>
      <Heading as="h2" size="xl" color="white">
        {bio1}
      </Heading>
      <Heading as="h2" size="xl" color="white">
        {bio2}
      </Heading>
    </VStack>
  </FullScreenSection>
);

export default LandingSection;
