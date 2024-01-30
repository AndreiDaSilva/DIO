import React from "react";
import logo from "../../assets/img/LOGO-DIO-COLOR.png";

import {
  BuscarInputContainer,
  Container,
  Input,
  Menu,
  MenuRight,
  Row,
  UserPicture,
  Wrapper,
} from "./styles";
import { Button } from "../Button";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../../hooks/useAuth";

const Header = () => {

  const { user, handleSignOut } = useAuth();

  const navigate = useNavigate();
  const handleClickSignIn = () => {
    navigate("/login");
  };
  const handleClickSignUp = () => {
    navigate("/register");
  };

  return (
    <Wrapper>
      <Container>
        <Row>
          <Link to={"/"}>
            <img src={logo} alt="logo dio" width={"72px"} />
          </Link>

          {user.id ? (
            <>
              <BuscarInputContainer>
                <Input placeholder="Buscar..." />
              </BuscarInputContainer>
              <Menu>Live Code</Menu>
              <Menu>Global</Menu>
            </>
          ) : null}
        </Row>
        <Row>
          {user.id ? (
            <>
              <UserPicture src="" />
              <Link to="/" onClick={handleSignOut}>
                Sair
              </Link>
            </>
          ) : (
            <>
              <Link to={"/"}>
                <MenuRight >Home</MenuRight>
              </Link>
              <Button title={"Entrar"} onClick={handleClickSignIn} />
              <Button title={"Cadastrar"} onClick={handleClickSignUp} />
            </>
          )}
        </Row>
      </Container>
    </Wrapper>
  );
};

export { Header };
