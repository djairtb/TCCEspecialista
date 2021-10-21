import React, { useCallback, useRef } from "react";
import Button from "../../Components/Button";
import Input from "../../Components/Input";
import axios from "axios";
import { useDispatch } from "react-redux";
import { loginSuccess } from "../../Redux/Actions";
import { useHistory } from "react-router-dom";
import {
  FormItem,
  RegisterLink,
  FormTitle,
  Line,
  Container,
  Opacity,
  Form,
  Subtitle,
} from "./styles";

function LoginForm() {
  const loginUsernameRef = useRef();
  const loginPasswordRef = useRef();

  const dispatch = useDispatch();
  const history = useHistory();

  const onSubmit = useCallback(async (e) => {
    e.preventDefault();
    await axios({
      method: "POST",
      data: {
        username: loginUsernameRef?.current.value,
        password: loginPasswordRef?.current.value,
      },
      withCredentials: true,
      url: "http://localhost:4000/login",
    })
      .then((userInfo) => {
        dispatch(loginSuccess(userInfo));
      })
      .finally(() => {
        history.push("/home");
      });
  }, []);

  return (
    <Container>
      <Opacity />
      <Form onSubmit={onSubmit}>
        <FormTitle>LOGIN</FormTitle>
        <Line />
        <FormItem>
          <Input
            width="261px"
            required
            type="text"
            placeholder="Seu Login"
            ref={loginUsernameRef}
          />
        </FormItem>
        <FormItem>
          <Input
            width="261px"
            required
            type="password"
            placeholder="****"
            ref={loginPasswordRef}
          />
        </FormItem>
        <FormItem>
          <Button width="261px" type="submit">
            Login
          </Button>
        </FormItem>
        <FormItem>
          <RegisterLink to="/forgotpass">Esqueci a senha</RegisterLink>
          <Subtitle>|</Subtitle>
          <RegisterLink to="/register">Cadastre-se</RegisterLink>
        </FormItem>
      </Form>
    </Container>
  );
}

export default LoginForm;
