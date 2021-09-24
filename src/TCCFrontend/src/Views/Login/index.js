import React, { useState } from "react";
import Button from "../../Components/Button";
import Input from "../../Components/Input";
import { FormItem, RegisterLink, FormTitle, Line, Container, Opacity, Form, Subtitle } from "./styles";


function LoginForm() {
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");

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
            placeholder="contato@htmlecsspro.com"
          />
        </FormItem>
        <FormItem>
          <Input width="261px" required type="password" placeholder="1234" />
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
