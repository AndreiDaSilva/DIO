import React from "react";
import { Header } from "../../components/Header";
import {
  Container,
  Title,
  Column,
  Wrapper,
  TitleLogin,
  SubTitleLogin,
  Row,
  LinkDinamic,
  LoginText,
  Text,
} from "./styles";
import { Input } from "../../components/Input";
import { FaRegUser } from "react-icons/fa";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { MdEmail, MdLock } from "react-icons/md";
import { Button } from "../../components/Button";
import { useNavigate } from "react-router-dom";
import { api } from "../../services/api";

const schema = yup
  .object({
    user: yup
      .string()
      .min(6, "Digite seu nome completo")
      .required("Campo obrigatorio"),
    email: yup
      .string()
      .email("Email não é valido")
      .required("Campo obrigatorio"),
    password: yup
      .string()
      .min(8, "Digite um senha valida")
      .required("Campo obrigatorio"),
    confirmPassword: yup
      .string()
      .oneOf([yup.ref("password"), null], "Senha não são iguais"),
  })
  .required();

const Registro = () => {
  const navigate = useNavigate();

  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
    mode: "onChange",
  });

  const handleClickSignIn = () => {
    navigate("/login");
  };

  const onSubmit = async (formData) => {
    try {
      const { data } = await api.get(`users?email=${formData.email}`);
      if (data.length === 1) {
        alert("Usuário já cadastrado");
      } else {
        const newUser = {
          name: formData.user,
          email: formData.email,
          senha: formData.password, // Mantendo consistência com os outros usuários
        };

        const updatedUsers = [newUser];

        await api.post(`users`, newUser);

        // Adicione uma mensagem de sucesso na interface do usuário
        alert("Registro concluído com sucesso");

        // Redirecione o usuário para a página de login ou outra página desejada
        navigate("/login");
      }
    } catch (error) {
      alert("Houve um erro, tente novamente.");
    }
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
            <TitleLogin>Comece agora grátis</TitleLogin>
            <SubTitleLogin>Crie um conta e make the change</SubTitleLogin>
            <form onSubmit={handleSubmit(onSubmit)}>
              <Input
                name="user"
                errorMessage={errors?.user?.message}
                control={control}
                placeholder="Nome completo"
                leftIcon={<FaRegUser />}
              />
              <Input
                name="email"
                errorMessage={errors?.email?.message}
                control={control}
                placeholder="Digte seu email"
                leftIcon={<MdEmail />}
              />

              <Input
                name="password"
                errorMessage={errors?.password?.message}
                control={control}
                placeholder="Digite um senha"
                type="password"
                leftIcon={<MdLock />}
              />
              <Input
                name="confirmPassword"
                errorMessage={errors?.confirmPassword?.message}
                control={control}
                placeholder="Confirme a senha"
                type="password"
                leftIcon={<MdLock />}
              />
              <Button
                title={"Criar minha conta"}
                variant="secondary"
                type="submit"
              />
            </form>
            <Row>
              <SubTitleLogin>
                Ao clicar em "criar minha conta", declaro que aceito as
                Políticas de Privacidade e os Termos de Uso da Dio
                <Text>
                  Já tenho um conta.
                  <LinkDinamic onClick={handleClickSignIn}>
                    {" "}
                    Fazer Login
                  </LinkDinamic>
                </Text>
              </SubTitleLogin>
            </Row>
          </Wrapper>
        </Column>
      </Container>
    </>
  );
};

export { Registro };
