import { Box, Flex, Image } from "@chakra-ui/react";
import ButtonSearch from "../../components/ButtonSearch";
import Header from "../../components/Header";
import InputSearch from "../../components/InputSearch";
import backgroundImg from "../../assets/img/logo-git-background.svg"

function App() {
  return (
    <>
      <Header title={"GitFint"} />
      <Flex
        position={"relative"}
        display={"flex"}
        alignItems={"flex-start"}
        justifyContent={"flex-end"}
      >
        <Box>
          <Image src={backgroundImg} alt="logo img git" height={"100vh"} position={"absolute"} left={0} />
        </Box>
        <Box
          width={"60%"}
          mr={"95px"}
          mt={"40px"}
        >
          <Box
            display={"flex"}
          >
            <InputSearch />
            <ButtonSearch />
          </Box>
          <Box>
            <Image src="https://avatars.githubusercontent.com/u/81041979?v=4" className="profile-photo" alt="foto do usuario" />
            <Box>
              <h3 >Andrei R da Silva</h3>
              <p>Descrição</p>
            </Box>
          </Box>
        </Box>
      </Flex>
    </>
  );
}

export default App;
