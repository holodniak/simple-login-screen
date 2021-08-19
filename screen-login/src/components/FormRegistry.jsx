import React, { useState } from "react";
import styled, { css } from "styled-components";
import imagem from "../version_control.svg";
import Input from "./Input";
import Button from "./Button";
import VisibilityOffIcon from "@material-ui/icons/VisibilityOff";

const BoxActions = styled.div`
  height: 68%;
  margin: 3%;
  margin-top: 6%;
  display: flex;
  flex-direction: column;
  align-items: center;
  opacity: 1;
  transition: opacity 0.5s linear;
  position: absolute;
  width: 94%;

  ${(props) =>
    props.isClicked &&
    css`
      opacity: 0;
      pointer-events: none;
    `}
`;

export default function FormRegistry(props) {
  return (
    <BoxActions isClicked={props.isClicked}>
      <Input placeholder="E-mail" type="text" margin="1%"></Input>
      <Input placeholder="Telefone" type="text" margin="1%"></Input>
      <Input placeholder="Senha" type="password" margin="1%"></Input>
      <Input placeholder="Confirmar Senha" type="password" margin="1%"></Input>
      <Button text="Cadastrar"></Button>
    </BoxActions>
  );
}
