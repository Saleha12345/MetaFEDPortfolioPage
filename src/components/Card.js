import React from "react";
import { Heading, HStack, Image, Text, VStack } from "@chakra-ui/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";

const Card = ({ title, description, imageSrc }) => {
  return (
    <VStack
      spacing={4}
      p={4}
      bg="white"
      boxShadow="md"
      borderRadius="md"
      overflow="hidden"
      maxW="400px"
      w="100%"
    >
      <Image src={imageSrc} alt={title} h="200px" objectFit="cover" />

      <VStack spacing={2} align="start">
        <Heading style={{color:'black'}}as="h2" size="md">
          {title}
        </Heading>
        <Text style={{color:'black'}}>{description}</Text>
      </VStack>

      <HStack justify="space-between" w="100%">
        <Text color="gray.500" >See more
        <FontAwesomeIcon icon={faArrowRight} size="1x" style={{color:'black', marginLeft:7}}/>
        </Text>
      </HStack>
    </VStack>
  );
};

export default Card;
