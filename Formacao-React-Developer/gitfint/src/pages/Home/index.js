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

    if (newUser.name) {
      const { avatar_url, name, bio, login } = newUser;
      setCurrentUser({ avatar_url, name, bio, login });

      const reposData = await fetch(`https://api.github.com/users/${user}/repos`);
      const newRepos = await reposData.json();

      console.log(repos)
      if (newRepos.length) {
        setRepos(newRepos);
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
          {currentUser?.name ? <>
            <Box>
              <CardProfile
                photo={
                  <WrapItem>
                    <Avatar
                      border={"1px solid #999999"}
                      boxShadow={"1px  1px 10px"}
                      size='2xl'
                      name='Segun Adebayo'
                      src={currentUser.avatar_url} />{' '}
                  </WrapItem>
                }
                name={currentUser.name}
                nikename={"@" + currentUser.login}
                description={currentUser.bio}
              />
            </Box>
            <Box display={"flex"} justifyContent={"center"} margin={"2rem 0"}>
              <Text fontWeight={"900"} fontSize={"4xl"} color={"#f4f4f4"} >Repositórios</Text>
            </Box>
          </> : null}
          {repos?.length ? (
            <Box>
              {repos.map(repo => (
                <CardList title={repo.name} description={repo.description} link={repo.html_url} />
              ))}
            </Box>) : null}
        </Box>
      </Flex>
    </>
  );
}

export default App;
