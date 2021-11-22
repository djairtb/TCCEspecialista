import React, { useCallback, useRef } from "react";
import Button from "../../Components/Button";
import Input from "../../Components/Input";
import axios from "axios";
import { useHistory,useLocation } from "react-router-dom";
import {
  FormItem,
  RegisterLink,
  FormTitle,
  Line,
  Container,
  Opacity,
  Form,
} from "./styles";

function RecoverPass() {
  const inputPasswordRef = useRef();
  const inputPasswordTwoRef = useRef();
  const search = useLocation().search;
  const username = new URLSearchParams(search).get('username');
  const id =  new URLSearchParams(search).get('id');
  const history = useHistory();

  const onSubmit = useCallback(async(e) => {
    e.preventDefault();
    
    if(inputPasswordTwoRef?.current.value==inputPasswordRef?.current.value){
      
      const changeUserData = {
        username: username,
        id: id,
        password: inputPasswordRef?.current.value,
      };
      await axios
        .post(`${process.env.REACT_APP_BACK_ORIGIN}/forgotten/change`, changeUserData)
        .then((resp) => {
          console.log(resp.data)
          if (resp.data.alterado) {
            window.alert(
              "Senha alterada com sucesso! Para Acessar o Sistema Efetue o Login!"
            );
            axios.post(`${process.env.REACT_APP_BACK_ORIGIN}/login`, {
              username: changeUserData.username,
              password: changeUserData.password,
            });
            history.push("/login");
          } else {
            window.alert(
              "Erro ao alterar a senha! Contate o Suporte do CDR!"
            );
          }
        })
        .finally(() => {});
    }
  }, []);

  return (
    <Container>
      <Opacity />
      <Form onSubmit={onSubmit}>
        <FormTitle>REDEFINIR SENHA</FormTitle>
        <Line />
        <FormItem></FormItem>

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
          <Button width="261px" type="submit">
            Redefinir
          </Button>
        </FormItem>

        <FormItem>
          <RegisterLink to="/login">Logar novamente</RegisterLink>
        </FormItem>
      </Form>
    </Container>
  );
}

export default RecoverPass;
