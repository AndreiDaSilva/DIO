import { Search2Icon } from "@chakra-ui/icons";
import { Stack, Button } from "@chakra-ui/react";

const ButtonSearch = () => {
  return (
    <Stack>
      <Button
        colorScheme="#2D333B"
        variant="outline"
        color={"#f4f4f4"}
        w={"100px"}
        borderRadius={"25px"}
        margin={"0 10px"}
      >
        <Search2Icon boxSize={4} />
      </Button>
    </Stack>
  );
};

export default ButtonSearch;
