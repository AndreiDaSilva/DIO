import GitHubIcon from '@mui/icons-material/GitHub';
import Input from '../components/Input';
import {Container, darkTheme} from './style'
import ListRepo from '../components/ListRepo';
import { ThemeProvider } from '@mui/material';




function App() {
  return (
    <ThemeProvider theme={darkTheme}>
      <Container>
        <GitHubIcon sx={{ fontSize: 126 }} />
        <Input label={'@username'} margin={'normal'} width={'60vh'} />
        <ListRepo title={"Andrei"} description={"Comprador, unibox atacarejo"} />
      </Container>
    </ThemeProvider>
  );
}

export default App;
