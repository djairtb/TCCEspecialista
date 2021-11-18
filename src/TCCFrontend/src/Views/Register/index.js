import React, { useCallback, useRef } from "react";
import Button from "../../Components/Button";
import logo from "./folha1.png";
import Input from "../../Components/Input";
import {
  Img,
  FormItem,
  RegisterLink,
  FormTitle,
  Line,
  Container,
  Opacity,
  Form,
} from "./styles";
import axios from "axios";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";

function RegisterForm() {
  const dispatch = useDispatch();
  const history = useHistory();

  const inputNameRef = useRef();
  const inputPasswordRef = useRef();
  const inputEmailRef = useRef();

  const onSubmit = useCallback(
    async (e) => {
      e.preventDefault();
      const newUserData = {
        name: inputNameRef?.current.value,
        username: inputNameRef?.current.value,
        email: inputEmailRef?.current.value,
        password: inputPasswordRef?.current.value,
      };
      await axios
        .post(`${process.env.REACT_APP_BACK_ORIGIN}/register`, newUserData)
        .then((resp) => {
          if(resp.data.criado){
            window.alert('Cadastro Realizado com Sucesso! Para Acessar o Sistema Efetue o Login!');
            axios
            .post(`${process.env.REACT_APP_BACK_ORIGIN}/login`, {
              username: newUserData.username,
              password: newUserData.password,
            });
            history.push("/login");
          }else{
            window.alert('Usuário Já existe Por favor crie um novo ou recupere sua senha!');

          }
          
        })
        .finally(() => {
          
        });
    },
    [dispatch, history]
  );

  return (
    <Container>
      <Opacity />
      <Form onSubmit={onSubmit}>
        <FormTitle><Img src={logo} alt="" />CADASTRE-SE</FormTitle>
        <Line />
        <FormItem>
          <Input
            width="261px"
            required
            type="text"
            placeholder="Digite aqui seu login (username)"
            ref={inputNameRef}
          />
        </FormItem>
        <FormItem>
          <Input
            width="261px"
            required
            type="email"
            placeholder="seu@emailaqui.com"
            ref={inputEmailRef}
          />
        </FormItem>
        <FormItem>
          <Input
            width="261px"
            required
            type="password"
            placeholder="Digite aqui sua senha"
            ref={inputPasswordRef}
          />
        </FormItem>
        <FormItem>
          <Button width="261px" type="submit">
            Cadastrar
          </Button>
        </FormItem>
        <FormItem>
          <RegisterLink to="/login">Já possui conta? Logar</RegisterLink>
        </FormItem>
      </Form>
    </Container>
  );
}

export default RegisterForm;
