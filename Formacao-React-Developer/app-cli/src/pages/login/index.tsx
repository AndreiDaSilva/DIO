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
  LinkDinamic,
} from "./styles";

import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { useForm } from "react-hook-form";
import { MdEmail, MdLock } from "react-icons/md";
import { Header } from "../../components/Header";
import { Button } from "../../components/Button";
import { Input } from "../../components/Input";
import { AuthContext } from "../../context/auth"
import { IFormDate } from "./types";
import React, { useContext } from "react";

const schema = yup
  .object({
    email: yup
      .string()
      .email("Email não é valido")
      .required("Campo obrigatorio"),
    password: yup
      .string()
      .min(8, "No minimo 8 caracteres")
      .required("Campo obrigatorio"),
  })
  .required();

const Login = () => {
  const { handleLogin } = useContext(AuthContext);

  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<IFormDate>({
    resolver: yupResolver(schema),
    mode: "onChange",
  });

  const onSubmit = async (formData: IFormDate) => {
    handleLogin(formData)
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
            <form onSubmit={handleSubmit(onSubmit)}>
              <Input
                name="email"
                errorMessage={errors?.email?.message}
                control={control}
                placeholder="email"
                leftIcon={<MdEmail />}
              />
              <Input
                name="password"
                errorMessage={errors?.password?.message}
                control={control}
                placeholder="senha"
                type="password"
                leftIcon={<MdLock />}
              />
              <Button title={"Entrar"} variant="secondary" type="submit" />
            </form>
            <Row>
              <EsqueciText>Esqueci minha senha</EsqueciText>
              <CriarText>
                <LinkDinamic>Criar Conta</LinkDinamic>
              </CriarText>
            </Row>
          </Wrapper>
        </Column>
      </Container>
    </>
  );
};

export { Login };
