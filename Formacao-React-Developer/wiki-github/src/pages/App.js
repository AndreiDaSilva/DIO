import GitHubIcon from '@mui/icons-material/GitHub';
import Input from '../components/Input';
import { Container, darkTheme } from './style'
import ListRepo from '../components/ListRepo';
import { Grid, ThemeProvider } from '@mui/material';
import { useState } from 'react';
import Button from '../components/Button';
import SearchIcon from '@mui/icons-material/Search';
import { api } from '../services/api';




function App() {

  const [repos, setRepos] = useState([]);
  const [currentRepo, setCurrentRepo] = useState('');

  const handlerSearchRepo = async () => {

    const { data } = await api.get(`repos/${currentRepo}`)

    if (data.id) {
      setRepos(prev => [...prev, data])
    }
  }


  return (
    <ThemeProvider theme={darkTheme}>
      <Container>
        <GitHubIcon sx={{ fontSize: 126 }} />
        <Input
          label={'@username'}
          margin={'normal'}
          width={'60vh'}
          value={currentRepo}
          onChange={(e) => setCurrentRepo(e.target.value)}
        />
        <Button
          icon={<SearchIcon />}
          color={'success'}
          content={'Buscar'}
          onClick={handlerSearchRepo} />
            {repos.map(repo => <ListRepo repo={repo} />)}
      </Container>
    </ThemeProvider>
  );
}

export default App;

