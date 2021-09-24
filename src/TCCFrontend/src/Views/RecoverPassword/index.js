import React, { useCallback, useRef } from "react";
import Button from "../../Components/Button";
import Input from "../../Components/Input";
import { FormItem, RegisterLink, FormTitle, Line, Container, Opacity, Form, Subtitle } from "./styles";



function RecoverPass() {
  const inputPasswordRef = useRef();
  const inputPasswordTwoRef = useRef();

  const onSubmit = useCallback((e) => {
    e.preventDefault();
    console.log(inputPasswordRef?.current.value);
    console.log(inputPasswordTwoRef?.current.value);
  }, []);
  
  return (
    <Container>
    <Opacity  />
    <Form>
      <FormTitle>REDEFINIR SENHA</FormTitle>
      <Line />
      <FormItem>
  
     </FormItem>

      <FormItem>
        <Input 
            width="261px"
            required
            type="password"
            placeholder="Digite sua senha nova senha"
            ref={inputPasswordRef} 
        />
      </FormItem>

      <FormItem>
      <Input 
            width="261px"
            required
            type="password"
            placeholder="Repita sua senha nova senha"
            ref={inputPasswordTwoRef} 
        />
      </FormItem>

      <FormItem>
        <Button width="261px" type="submit">Redefinir</Button>
      </FormItem>
    
      <FormItem>
        <RegisterLink to="/login">Logar novamente</RegisterLink>

     
      </FormItem>

    </Form>

  </Container>
);
}

export default RecoverPass;
