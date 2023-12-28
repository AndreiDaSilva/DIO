import { Container, Text } from "@chakra-ui/react";

const Header = ({ title }) => {
  return (
    <header>
      <Container
        maxW={"100$"}
        h={"80px"}
        bg={"#2D333B"}        
        justifyContent={"center"}
        centerContent
        >
        <Text 
          fontSize={"4xl"} 
          fontFamily={"sans-serif"} 
          color={"#f4f4f4"}
        >
          {title}
        </Text>
      </Container>
    </header>
  );
};

export default Header;
