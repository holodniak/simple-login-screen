import React, { useState } from "react";
import styled from "styled-components";
import imagem from "../version_control.svg";
import Input from "./Input";
import Button from "./Button";

const Coitainer = styled.div`
  width: 100vw;
  height: 100vh;
  background: transparent;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;

const Box = styled.div`
  display: flex;
  width: 60%;
  height: 60%;
  background: #cecece;
  border-radius: 8px;
`;

const BoxImage = styled.div`
  position: relative;
  left: 0;
  width: 50%;
  height: 100%;
  border-radius: 8px 0px 0px 8px;
  background: blueviolet;
`;

const Image = styled.img`
  width: 60%;
  height: 60%;
  position: relative;
  display: block;
  margin: 0 auto;
  top: 20%;
`;

const BoxLogin = styled.div`
  position: relative;
  right: 0;
  width: 50%;
  height: 100%;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;

const Title = styled.h1`
  font-size: 30px;
  text-align: center;
  margin-top: 14%;
  font-family: sans-serif;
  color: #8a2be1;
`;

const BoxActions = styled.div`
  height: 68%;
  margin: 3%;
  margin-top: 6%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const ForgotPassword = styled.a`
  cursor: pointer;
  font-family: sans-serif;
  color: #300844;
  :hover {
    color: #8a2be1;
  }
`;

export default function MainContainer() {
  return (
    <Coitainer>
      <Box>
        <BoxImage>
          <Image src={imagem} />
        </BoxImage>
        <BoxLogin>
          <Title>PedroTech</Title>
          <BoxActions>
            <Input placeholder="E-mail" type="text"></Input>
            <Input placeholder="Senha" type="password"></Input>
            <Button text="Login"></Button>
            <ForgotPassword>Esqueci minha senha!</ForgotPassword>
          </BoxActions>
        </BoxLogin>
      </Box>
    </Coitainer>
  );
}
