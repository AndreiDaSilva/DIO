import GitHubIcon from '@mui/icons-material/GitHub';
import Input from '../components/Input';
import Container from './style'
import ListRepo from '../components/ListRepo';



function App() {
  return (
    <Container>
      <GitHubIcon sx={{ fontSize: 126 }} />
      <Input label={'@username'} margin={'normal'} width={'60vh'} />
      <ListRepo title={"Andrei"} description={"Comprador, unibox atacarejo"}/>
      <ListRepo title={"Tana"} description={"Analista de Rh, Unibox atarejo"}/>
      <ListRepo title={"Paulo"} description={"Coordenador de Rh, Unibox atacarejo"}/>
    </Container>
  );
}

export default App;
