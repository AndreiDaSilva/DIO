import {
  Card,
  CardHeader,
  CardBody,
  StackDivider,
  Heading,
  Stack,
  Box,
  Text,
  CardFooter,
  ButtonGroup,
  Button,
  Link,
} from "@chakra-ui/react";

const CardList = ({ title, description, link }) => {
  return (
    <Card
      bg={"transparent"}
      border="none"
      borderBottom={"2px solid #f4f4f4"}
      borderRadius={0}
      margin={"2rem 0"}
      boxShadow={"0"}
    >
      <CardHeader p={".5rem 1rem"}>
        <Heading size="md" color={"#539BF5"}>
          {title}
        </Heading>
      </CardHeader>
      <CardBody p={"0 1rem"} margin={"1rem 0"}>
        <Stack divider={<StackDivider />} spacing="2">
          <Box>
            <Text margin={0} pt="1" fontSize="sm" color={"#999999"}>
              {description}
            </Text>
          </Box>
        </Stack>
      </CardBody>
      <CardFooter justifyContent={"end"}>
        <ButtonGroup spacing="2">
          <Button
            border={"1px solid orange"}
            bg={"transparent"}
            color={"#999999"}
            _hover={{bg: "rgb(255, 165, 0, 0.2)", color: "#fff"}}
          >
            <Link href={link} isExternal>
              Link
            </Link>
          </Button>
        </ButtonGroup>
      </CardFooter>
    </Card>
  );
};

export default CardList;
