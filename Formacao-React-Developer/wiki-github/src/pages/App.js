import { GitHubIcon } from "@mui/icons-material/GitHub";
import Input from "../components/Input";
import Container from './style';

function App() {
  return (
    <Container>
      <GitHubIcon />
      <Input label={"@username"}/>
    </Container>
  );
}

export default App;
