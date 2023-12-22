import { Card, Text, Stack, CardBody, Heading } from "@chakra-ui/react";

const CardProfile = ({ photo, name, nikename, description }) => {
  return (
    <Card
      direction={{ base: "column", sm: "row" }}
      overflow="hidden"
      variant="outline"
      bg={"transparent"}
      color={"#999999"}
      mt={"2rem"}
      border={"none"}
      borderBottom={"2px"}
      padding={"1rem"}
    >
      <Stack
        display={"flex"}
        minH={"200px"}
        objectFit={"cover"}
        maxW={{ base: "100%", sm: "200px" }}
        alignContent={"center"}
        justifyContent={"center"}
        margin={"auto"}
      >
        {photo}
      </Stack>
      <Stack>
        <CardBody>
          <Heading size="md">{name}</Heading>
          <Heading size="xs">{nikename}</Heading>

          <Text py="2">{description}</Text>
        </CardBody>
      </Stack>
    </Card>
  );
};

export default CardProfile;
