import React, { useState } from "react";
import styled, { css } from "styled-components";
import imagem from "../version_control.svg";
import Input from "./Input";
import Button from "./Button";
import VisibilityOffIcon from "@material-ui/icons/VisibilityOff";

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
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const Image = styled.img`
  width: 60%;
  height: 60%;
  position: relative;
  display: block;
  margin: 0 auto;
  top: 5%;
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
  opacity: 1;
  transition: opacity 0.5s linear;

  ${(props) =>
    !props.isClicked &&
    css`
      opacity: 0;
      pointer-events: none;
    `}
`;

const ForgotPassword = styled.a`
  cursor: pointer;
  font-family: sans-serif;
  color: #300844;
  :hover {
    color: #8a2be1;
  }
`;

const Join = styled.button`
  width: 60%;
  position: relative;
  background: #fff;
  padding: 3%;
  margin: 4%;
  border-radius: 8px;
  border: none;
  color: #8a2be1;
  font-size: 16px;
  text-align: center;
  font-family: sans-serif;
  cursor: pointer;

  :hover {
    background: #300844;
    color: #fff;
  }
`;

export default function MainContainer() {
  const [isClicked, setIsClicked] = useState(true);

  const toggle = () => {
    setIsClicked(!isClicked);
  };

  return (
    <Coitainer>
      <Box>
        <BoxImage>
          <Image src={imagem} />
          <Join onClick={toggle}>
            {isClicked ? "Cadastre-se agora!" : "Já sou cadastrado!"}
          </Join>
        </BoxImage>
        <BoxLogin>
          <Title>PedroTech</Title>
          <BoxActions isClicked={isClicked}>
            <Input placeholder="E-mail" type="text"></Input>
            <Input placeholder="Senha" type="password">
              <VisibilityOffIcon style="visibility:hidden"></VisibilityOffIcon>
            </Input>
            <Button text="Login"></Button>
            <ForgotPassword>Esqueci minha senha!</ForgotPassword>
          </BoxActions>
        </BoxLogin>
      </Box>
    </Coitainer>
  );
}
