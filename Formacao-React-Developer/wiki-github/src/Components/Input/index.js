import {
  ChakraProvider,
  FormControl,
  FormLabel,
  Input,
  extendTheme,
  Box,
} from "@chakra-ui/react";
const activeLabelStyles = {
  transform: "scale(0.85) translateY(-24px)",
};
export const theme = extendTheme({
  components: {
    Form: {
      variants: {
        floating: {
          container: {
            _focusWithin: {
              label: {
                ...activeLabelStyles,
              },
            },
            "input:not(:placeholder-shown) + label, .chakra-select__wrapper + label, textarea:not(:placeholder-shown) ~ label":
              {
                ...activeLabelStyles,
              },
            label: {
              top: 0,
              left: 0,
              zIndex: 2,
              position: "absolute",
              backgroundColor: "white",
              pointerEvents: "none",
              mx: 3,
              px: 1,
              my: 2,
              transformOrigin: "left top",
            },
          },
        },
      },
    },
  },
});

export default function InputLabel({label}) {
  return (
    <ChakraProvider theme={theme}>
      <Box p={8}>
        <FormControl variant="floating" id="repo_user" >
          <Input placeholder=" " border={'1px solid #999999'}/>
          <FormLabel>{label}</FormLabel>
        </FormControl>
      </Box>
    </ChakraProvider>
  );
}
