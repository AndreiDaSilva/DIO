import {
  Container,
  Title,
  Column,
  Row,
  TitleLogin,
  Wrapper,
  CriarText,
  EsqueciText,
  SubTitleLogin,
} from "./styles";

import { MdEmail, MdLock } from "react-icons/md";
import { Header } from "../../components/Header";
import { Button } from "../../components/Button";
import { Input } from "../../components/Input";
import { useNavigate } from "react-router-dom";

export const Login = () => {
  const navigate = useNavigate();

  const handleClickSignIn = () => {
    navigate("/feed");
  };

  return (
    <>
      <Header />
      <Container>
        <Column>
          <Title>
            A plataforma para você aprender com experts, dominar as principais
            tecnologias e entrar mais rápido nas empresas mais desejadas.
          </Title>
        </Column>
        <Column>
          <Wrapper>
            <TitleLogin>Faça seu cadastro</TitleLogin>
            <SubTitleLogin>Faça seu login e make the change.</SubTitleLogin>
            <form action="">
              <Input placeholder="email" leftIcon={<MdEmail />} />
              <Input
                placeholder="senha"
                type="password"
                leftIcon={<MdLock />}
              />
              <Button title={"Entrar"} variant="secondary" onClick={handleClickSignIn}/>
            </form>
            <Row>
              <EsqueciText>Esqueci minha senha</EsqueciText>
              <CriarText>Crriar Conta</CriarText>
            </Row>
          </Wrapper>
        </Column>
      </Container>
    </>
  );
};
