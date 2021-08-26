import React from "react";
import styled, { css } from "styled-components";

import Input from "./Input";
import Button from "./Button";

const BoxActions = styled.div`
  height: 68%;
  margin: 3%;
  margin-top: 3%;
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
  // const [passwords, setValue] = useState({
  //   password: "",
  //   confirmPassword: "",
  //   colorPassword: "red !important",
  //   colorConfirmPassword: "red !important",
  // });

  return (
    <BoxActions isClicked={props.isClicked}>
      <Input
        placeholder="E-mail"
        type="text"
        margin="1%"
        marginLeft="4%"
      ></Input>
      <Input
        placeholder="Telefone"
        type="text"
        margin="1%"
        marginLeft="4%"
      ></Input>
      <Input
        placeholder="Senha"
        type="password"
        margin="1%"
        marginLeft="4%"
        // value={passwords.password}
        //borderColor={passwords.colorPassword}
        // onChange={(e) => {
        //   setValue({ password: e.target.value });
        // }}
      ></Input>
      <Input
        placeholder="Confirmar Senha"
        type="password"
        margin="1%"
        marginLeft="4%"
        // value={passwords.confirmPassword}
        // borderColor={passwords.colorConfirmPassword}
        // onChange={(e) => {
        //   setValue({ confirmPassword: e.target.value });
        //   if (passwords.confirmPassword === passwords.password) {
        //     setValue({ colorConfirmPassword: "green", colorPassword: "green" });
        //   } else
        //     setValue({ colorConfirmPassword: "red", colorPassword: "red" });
        // }}
      ></Input>
      <Button text="Cadastrar"></Button>
    </BoxActions>
  );
}
