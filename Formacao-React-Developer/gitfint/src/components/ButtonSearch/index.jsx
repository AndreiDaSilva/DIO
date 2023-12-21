import { Search2Icon } from "@chakra-ui/icons";
import { Stack, Button } from "@chakra-ui/react";

const ButtonSearch = () => {
  return (
    <Stack>
      <Button 
        colorScheme="#2D333B" 
        variant="outline" 
        color={"#f4f4f4"}
        maxW={"85px"}  
        >
        <Search2Icon boxSize={4}/>
      </Button>
    </Stack>
  );
};

export default ButtonSearch;
