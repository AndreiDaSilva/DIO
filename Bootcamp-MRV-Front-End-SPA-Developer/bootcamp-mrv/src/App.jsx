import { Box, Button, Flex, Text, VStack } from "@chakra-ui/react";
import { useState } from "react";

function App() {
  const [contador, setContador] = useState(0);

  function addMaisUm() {
    setContador(contador + 1);
  }

  function menosUm() {
    setContador(contador - 1);
  }

  return (
    <VStack justify={"center"} align={"center"} height={"100vh"} width={"100%"}>
      <Box>
        {contador}
      </Box>
      <Box>
        <Button onClick={addMaisUm}>+</Button>
        <Button onClick={menosUm}>-</Button>
      </Box>
    </VStack>

    
  );
}

export default App;
