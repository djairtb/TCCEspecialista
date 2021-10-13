import React, { useState } from "react";
import Button from "../../Components/Button";
import Input from "../../Components/Input";
import Axios from "axios";
import { FormItem, RegisterLink, FormTitle, Line, Container, Opacity, Form, Subtitle } from "./styles";
import { Redirect } from "react-router";

function login (event) {
  Axios({
    method: "POST",
    data: {
      username: this.loginUsername,
      password: this.loginPassword,
    },
    withCredentials: true,
    url: "http://localhost:3000/login",
  }).then((res) => {
    
  });

};
function LoginForm() {
  const [loginUsername, setLoginUsername] = useState("");
  const [loginPassword, setLoginPassword] = useState("");
 
  return (
    <Container>
      <Opacity  />
      <Form onSubmit={login}>
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
