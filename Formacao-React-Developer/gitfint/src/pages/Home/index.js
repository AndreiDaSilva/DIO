import { Box, Flex, Image, WrapItem, Avatar, Text } from "@chakra-ui/react";
import ButtonSearch from "../../components/ButtonSearch";
import Header from "../../components/Header";
import InputSearch from "../../components/InputSearch";
import backgroundImg from "../../assets/img/logo-git-background.svg"
import CardProfile from "../../components/CardProfile";
import CardList from "../../components/CardList";
import { useState } from "react";

function App() {
  const [user, setUser] = useState('');
  const [currentUser, setCurrentUser] = useState(null);
  const [repos, setRepos] = useState(null);

  const handleGetDados = async () => {
    const userData = await fetch(`https://api.github.com/users/${user}`);
    const newUser = await userData.json();

    if (userData.name) {
      const { avatar_url, name, bio } = newUser;
      setCurrentUser({ avatar_url, name, bio })

      const reposData = await fetch(`https://api.github.com/users/${user}/repos`);
      const newRepos = await userData.json();

      if (newRepos.length) {
        
      }
    }
  }

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
            <InputSearch
              placeholder={"@usuario"}
              value={user}
              onChange={event => setUser(event.target.value)} />
            <ButtonSearch onClick={handleGetDados} />
          </Box>
          <Box>
            <CardProfile
              photo={
                <WrapItem>
                  <Avatar
                    border={"1px solid #999999"}
                    boxShadow={"1px  1px 10px"}
                    size='2xl'
                    name='Segun Adebayo'
                    src='https://avatars.githubusercontent.com/u/81041979?v=4' />{' '}
                </WrapItem>
              }
              name={"Andrei Robson da Silva"}
              nikename={"@andreidasilva"}
              description={"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s"}
            />
          </Box>
          <Box display={"flex"} justifyContent={"center"} margin={"2rem 0"}>
            <Text fontWeight={"900"} fontSize={"4xl"} color={"#f4f4f4"} >Repositórios</Text>
          </Box>
          <Box className="ListCards">
            <CardList title={"Title do Projeto"} description={"Descrição do projeto"} />
            <CardList title={"Title do Projeto"} description={"Descrição do projeto"} />
            <CardList title={"Title do Projeto"} description={"Descrição do projeto"} />
            <CardList title={"Title do Projeto"} description={"Descrição do projeto"} />
          </Box>
        </Box>
      </Flex>
    </>
  );
}

export default App;
