import { Container, Column, Title, TitleHighlight } from "./styles";
import { Header } from "../../components/Header";
import { Card } from "../../components/Card";
import { UserInfo } from "../../components/UserInfo";
import React from "react";

const Feed = () => {
  return (
    <>
      <Header autenticado={true}/>
      <Container>
        <Column flex={3}>
          <Title>FEED</Title>
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
        </Column>
        <Column flex={1}>
          <TitleHighlight># RANKING 5 TOP DA SEMANA</TitleHighlight>
          <UserInfo
            percentual={95}
            nome={"Andrei Robson da Silva"}
            image={""}
          />
          <UserInfo
            percentual={85}
            nome={"Andrei Robson da Silva"}
            image={""}
          />
          <UserInfo
            percentual={65}
            nome={"Andrei Robson da Silva"}
            image={""}
          />
          <UserInfo
            percentual={35}
            nome={"Andrei Robson da Silva"}
            image={""}
          />
          <UserInfo
            percentual={5}
            nome={"Andrei Robson da Silva"}
            image={""}
          />
        </Column>
      </Container>
    </>
  );
};

export { Feed };
