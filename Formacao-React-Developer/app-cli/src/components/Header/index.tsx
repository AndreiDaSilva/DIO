import React, { useContext } from "react";
import {AuthContext} from '../../context/auth'
import * as logo from "../../assets/img/LOGO-DIO-COLOR.png";

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
import { useNavigate } from "react-router-dom";

const Header = () => {

  const { user } = useContext(AuthContext);
  
  const navigate = useNavigate();
  const handleClickSignIn = () => {
    navigate("/login");
  };
  const handleClickSignUp = () => {
    navigate("/register");
  };

  const handleClickHome = () => {
    navigate("/");
  };

  return (
    <Wrapper>
      <Container>
        <Row>
          <a onClick={handleClickHome}>
            <img src={logo} alt="logo dio" width={"72px"} />
          </a>
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
            </>
          ) : (
            <>
              <MenuRight onClick={handleClickHome}>Home</MenuRight>
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
