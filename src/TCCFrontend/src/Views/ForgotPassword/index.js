import React, { useCallback, useRef } from "react";
import Button from "../../Components/Button";
import Input from "../../Components/Input";
import {
  FormItem,
  RegisterLink,
  FormTitle,
  Line,
  Subtitle,
  Container,
  Opacity,
  Form,
} from "./styles";

function ForgotPass() {
  const inputEmailRef = useRef();

  const onSubmit = useCallback((e) => {
    e.preventDefault();
    console.log(inputEmailRef?.current.value);
  }, []);

  return (
    <Container>
      <Opacity />
      <Form>
        <FormTitle>ESQUECEU A SENHA?</FormTitle>
        <Line />
        <FormItem>
          <Subtitle>
            Digite seu e-mail abaixo. Um link será enviado para redefinição de
            senha. Siga as instruções.
          </Subtitle>
        </FormItem>

        <FormItem>
          <Input
            width="261px"
            required
            type="text"
            placeholder="Digite aqui seu e-mail"
            ref={inputEmailRef}
          />
        </FormItem>

        <FormItem>
          <Button width="261px" >
            Enviar Link
          </Button>
        </FormItem>

        <FormItem>
          <RegisterLink to="/login">Logar novamente</RegisterLink>
        </FormItem>
      </Form>
    </Container>
  );
}

export default ForgotPass;
