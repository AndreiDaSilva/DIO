import { Container, TextContent, Title, TitleHighlight } from "./styles";
import banner from "../../assets/img/banner-dio.png";
import { Header } from "../../components/Header";
import { Button } from "../../components/Button";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();

  const handleClickSignIn = () => {
    navigate("/login");
  };

  return (
    <>
      <Header />
      <Container>
        <div>
          <Title>
            <TitleHighlight>
              Implemente
              <br />
            </TitleHighlight>
            o seu futuro global agora!
          </Title>

          <TextContent>
            Domine as tecnologias utilizadas pelas empresas mais inovadoras do
            mundo e encare seu novo desafio profissional evoluindo em comunidade
            com os melhores experts.
          </TextContent>
          <Button
            title={"Começa agora"}
            variant={"secondary"}
            onClick={handleClickSignIn}
          />
        </div>
        <div>
          <img src={banner} alt="banner dio" />
        </div>
      </Container>
    </>
  );
};

export { Home };
