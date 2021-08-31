import React from "react";
import styled from "styled-components";
import Input from "./Input";

const ModalCard = styled.div`
  display: block;
  width: 500px;
  height: 300px;
  background-color: lightgray;
  border-radius: 5px;
`;

const HeaderCard = styled.div`
  position: relative;
  width: 100%;
  height: 14%;
  background-color: #8a2be1;
  font-size: 18px;
  text-align: center;
  font-family: fontWeb;
  font-weight: bold;
`;

const SendEmail = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  bottom: 0;
`;

const ContentCard = styled.div`
  height: 30%;
  text-align: center;
  font-size: 19px;
  margin-top: 2%;
`;

const Button = styled.button`
  position: relative;
  background: #8a2be1;
  padding: 3%;
  margin: 4%;
  border-radius: 8px;
  border: none;
  color: #fff;
  font-size: 16px;
  text-align: center;
  font-family: sans-serif;
  cursor: pointer;

  :hover {
    background: #300844;
  }
`;

export default function ModalPassword(props) {
  return (
    <ModalCard>
      <HeaderCard>Esqueceu sua senha?</HeaderCard>
      <ContentCard>
        Digite o seu e-mail cadastrado para receber um o link de redefinição de
        senha
      </ContentCard>
      <SendEmail>
        <Input
          placeholder="Digite seu Email"
          type="text"
          margin="4%"
          marginLeft="4%"
        ></Input>
        <Button>Enviar Email</Button>
      </SendEmail>
    </ModalCard>
  );
}
