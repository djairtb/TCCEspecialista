import React, { useCallback, useRef } from "react";
import Button from "../../Components/Button";
import Input from "../../Components/Input";
import { useHistory } from "react-router-dom";
import axios from "axios";
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

  const history = useHistory();
  const inputEmailRef = useRef();

  const onSubmit = useCallback(async(e) => {
    e.preventDefault();
    const changeUserData = {
      email: inputEmailRef?.current.value,
    };
    await axios
        .post(`${process.env.REACT_APP_BACK_ORIGIN}/forgotten/send`, changeUserData)
        .then((resp) => {
            window.alert(
              "Solicitação enviada, acesse o link em seu email para recuperar sua senha!"
            );
            history.push("/");
        })
        .finally(() => {});
  }, []);

  return (
    <Container>
      <Opacity />
      <Form onSubmit={onSubmit}>
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
          <Button width="261px" type="submit">
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
