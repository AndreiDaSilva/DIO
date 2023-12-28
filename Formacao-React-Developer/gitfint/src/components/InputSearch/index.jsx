import { Input } from "@chakra-ui/react";

const InputSearch = ({ value, onChange, placeholder}) => {
  return (
    <>
      <Input
        placeholder={placeholder}
        w={"80%"}
        borderRadius={"25px"}
        color={"#F4F4F4"}
        value={value}
        onChange={onChange}
      />
    </>
  );
};

export default InputSearch;
