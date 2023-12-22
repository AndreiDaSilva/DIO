import { Box, Flex, Image, WrapItem, Avatar } from "@chakra-ui/react";
import ButtonSearch from "../../components/ButtonSearch";
import Header from "../../components/Header";
import InputSearch from "../../components/InputSearch";
import backgroundImg from "../../assets/img/logo-git-background.svg"
import CardProfile from "../../components/CardProfile";

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
            <CardProfile
              photo={
                <WrapItem>
                  <Avatar size='2xl' name='Segun Adebayo' src='https://avatars.githubusercontent.com/u/81041979?v=4' />{' '}
                </WrapItem>
              }
              name={"Andrei Robson da Silva"}
              nikename={"@andreidasilva"}
              description={"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."}
            />
          </Box>
        </Box>
      </Flex>
    </>
  );
}

export default App;
