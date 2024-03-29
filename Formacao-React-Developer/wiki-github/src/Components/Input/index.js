
import * as C from "@chakra-ui/react";
const activeLabelStyles = {
  transform: "scale(0.85) translateY(-24px)",
};
export const theme = C.extendTheme({
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
              backgroundColor: '#22272E',
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

export default function InputLabel({ label, contend, onChange, value }) {
  return (
    <C.ChakraProvider theme={theme}>
      <C.Box p={8}>
        <C.FormControl variant="floating" id="repo_user" >
          <C.InputGroup size='md'>
            <C.Input placeholder=" " border={'1px solid #999999'} onChange={onChange} value={value}/>
            <C.InputRightElement width='4.5rem'>
              {contend}
            </C.InputRightElement>
          </C.InputGroup>

          <C.FormLabel color={'#fff'} >{label}</C.FormLabel>
        </C.FormControl>
      </C.Box>
    </C.ChakraProvider>
  );
}
