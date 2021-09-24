import React, { useCallback, useRef } from "react";
import Button from "../../Components/Button";
import Input from "../../Components/Input";
import { FormItem, RegisterLink, FormTitle, Line, Container, Opacity, Form } from "./styles";


function RegisterForm() {
  const inputNameRef = useRef();
  const inputPasswordRef = useRef();
  const inputEmailRef = useRef();

  const onSubmit = useCallback((e) => {
    e.preventDefault();
    console.log(inputNameRef?.current.value);
    console.log(inputEmailRef?.current.value);
    console.log(inputPasswordRef?.current.value);
  }, []);
  
  return (
    <Container>
      <Opacity  />
      <Form>
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
          <Button width="261px" type="submit">Cadastrar</Button>
        </FormItem>
      
        <FormItem>
          <RegisterLink to="/login">Já possui conta? Logar</RegisterLink>

       
        </FormItem>

      </Form>

    </Container>
  );
}


export default RegisterForm;
