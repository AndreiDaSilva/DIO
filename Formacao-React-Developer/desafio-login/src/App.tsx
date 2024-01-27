import { Box, ChakraProvider } from "@chakra-ui/react";
import Login from "./pages/Login";

function App() {
  return (
    <ChakraProvider>
      <Box p='10' bg='#ECF0F1' h='100vh'>
        <Login />
      </Box>
    </ChakraProvider>
  );
}

export default App;
