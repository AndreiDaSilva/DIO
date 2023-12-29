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

const Header = ({ autenticado }) => {

  return (
    <Wrapper>
      <Container>
        <Row>
          <a href="/">
          <img src={logo} alt="logo dio" width={"72px"} />
          </a>
          {autenticado ? (
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
          {autenticado ? (
            <>
                <UserPicture src="" />
            </>
          ) : (
            <>
              <MenuRight href="#">Home</MenuRight>
              <Button title={"Entrar"} />
              <Button title={"Cadastrar"} />
            </>
          )}
        </Row>
      </Container>
    </Wrapper>
  );
};

export { Header };
