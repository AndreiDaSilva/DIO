import Button from "../Components/Button";
import InputLabel from "../Components/Input";
import * as I from '@chakra-ui/icons'

function App() {
  return (
    <div className="App">
      <InputLabel label={'User/Repo'} contend={<Button contend={<I.SearchIcon color={'whitesmoke'} />} />} />
    </div>
  );
}

export default App;
