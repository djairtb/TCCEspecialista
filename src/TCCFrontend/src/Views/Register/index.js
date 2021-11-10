import React, { useCallback, useRef } from "react";
import Button from "../../Components/Button";
import Input from "../../Components/Input";
import {
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
import { loginSuccess } from "../../Redux/Actions";

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
        .post("http://localhost:4000/register", newUserData)
        .then(() => {
          dispatch(loginSuccess(newUserData));
        })
        .finally(() => {
          history.push("/home");
        });
    },
    [dispatch, history]
  );

  return (
    <Container>
      <Opacity />
      <Form onSubmit={onSubmit}>
        <FormTitle>CADASTRE-SE</FormTitle>
        <Line />
        <FormItem>
          <Input
            width="261px"
            required
            type="text"
            placeholder="Digite aqui seu nome"
            ref={inputNameRef}
          />
        </FormItem>
        <FormItem>
          <Input
            width="261px"
            required
            type="email"
            placeholder="contato@htmlecsspro.com"
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
