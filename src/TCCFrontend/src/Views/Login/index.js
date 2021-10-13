import React, { useState } from "react";
import Button from "../../Components/Button";
import Input from "../../Components/Input";
import Axios from "axios";
import { FormItem, RegisterLink, FormTitle, Line, Container, Opacity, Form, Subtitle } from "./styles";


function LoginForm() {
  const [loginUsername, setLoginUsername] = useState("");
  const [loginPassword, setLoginPassword] = useState("");
  const login = async () => {
    await Axios({
      method: "POST",
      data: {
        username: loginUsername,
        password: loginPassword,
      },
      withCredentials: true,
      url: "http://localhost:4000/login",
    }).then((res) => {
      window.alert(res.data)
    });
  }
  return (
    <Container>
      <Opacity  />
      <Form>
        <FormTitle>LOGIN</FormTitle>
        <Line />
        <FormItem>
          <Input
            width="261px"
            required
            type="text"
            placeholder="seuLogin"
            onChange={(e) => setLoginUsername(e.target.value)}
          />
        </FormItem>
        <FormItem>
          <Input width="261px" required type="password" placeholder="****" onChange={(e) => setLoginPassword(e.target.value)}/>
        </FormItem>
        <FormItem> 
          <Button width="261px" type="submit" onClick={login}>
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
