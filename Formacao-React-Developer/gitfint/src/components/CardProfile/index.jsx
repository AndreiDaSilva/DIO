import { Flex, Box, Text } from "@chakra-ui/react";

const CardProfile = ({ photo, name, nikename, description }) => {
  return (
    <Flex color={"#999999"} mt={"2rem"}>
      <Box
        border={"1px solid #F4F4F4"}
        borderRadius={"50%"}
        boxShadow={"1px  1px 10px"}
      >
        {photo}
      </Box>
      <Flex direction={"column"} ml={"4"}>
        <Text fontSize={"4xl"} mb={"0"}>{name}</Text>
        <Text fontSize={"xs"} mt={"0"}>{nikename}</Text>
        <Text fontSize={"md"} noOfLines={"2"}>{description}</Text>
      </Flex>
    </Flex>
  );
};

export default CardProfile;
