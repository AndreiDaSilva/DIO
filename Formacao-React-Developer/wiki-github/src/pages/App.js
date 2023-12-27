import { GitHubIcon, SendIcon } from "@mui/icons-material/GitHub";
import Input from "../components/Input";
import Container from './style';
import Button from "../components/Button";

function App() {
  return (
    <Container>
      <GitHubIcon />
      <Input label={"@username"}/>
      <Button conteund={'send'} sendIcon={<SendIcon />} />
    </Container>
  );
}

export default App;
