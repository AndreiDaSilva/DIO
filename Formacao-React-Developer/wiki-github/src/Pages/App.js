import Button from "../Components/Button";
import Header from "../Components/Header";
import InputLabel from "../Components/Input";
import * as I from '@chakra-ui/icons'
import ListRepo from "../Components/ListRepo";
import { Box, SimpleGrid } from "@chakra-ui/react";
import { useState } from "react";
import { api } from '../services/api'

function App() {
  const [repos, setRepos] = useState([]);
  const [currentRepo, setCurrentRepo] = useState('');

  const handlerSearchRepo = async () => {
    try {

      const { data } = await api.get(`repos/${currentRepo}`)

      if (data.id) {

        const isExist = repos.find(repo => repo.id === data.id)
        

        if (!isExist) {
          setRepos(prev => [...prev, data])
          setCurrentRepo('')
          return
        } 
        setCurrentRepo('')
        alert("Repositorio já existente na lista");
      }
    } catch (error) {
      console.error("Erro ao buscar repositorio:", error)
    }
  }

  const handleRemoveRepo = (id) => {
    setRepos(prevRepos => prevRepos.filter(repo => repo.id !== id))
    console.log('Removendo registro', id)

  }

  return (

    <Box maxW={'100vh'} margin={'auto'}>
      <Header />
      <InputLabel
        label={'User/Repo'}
        contend={<Button
          contend={<I.SearchIcon
            color={'whitesmoke'}
            onClick={handlerSearchRepo} />}
          colorScheme={'teal'} />}
        value={currentRepo}
        onChange={(e) => setCurrentRepo(e.target.value)} />
      <SimpleGrid spacing={3} templateColumns={'repeat(auto-fill, minmax(200px, 1fr))'} >
        {repos.map(repo => <ListRepo handleRemoveRepo={handleRemoveRepo} repo={repo} />)}
      </SimpleGrid>
    </Box>

  );
}

export default App;
