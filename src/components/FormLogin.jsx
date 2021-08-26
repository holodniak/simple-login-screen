import React, { useState } from "react";
import styled, { css } from "styled-components";
import Input from "./Input";
import Button from "./Button";
import VisibilityOffIcon from "@material-ui/icons/VisibilityOff";
import VisibilityIcon from "@material-ui/icons/Visibility";

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

export default function FormLogin(props) {
  const [isVisible, setIsVisible] = useState(false);

  const visible = () => {
    setIsVisible(!isVisible);
  };
  return (
    <BoxActions isClicked={props.isClicked}>
      <Input
        placeholder="E-mail"
        type="text"
        margin="4%"
        marginLeft="4%"
      ></Input>
      <Input
        placeholder="Senha"
        type={isVisible ? "text" : "password"}
        margin="4%"
        marginLeft="4%"
        icon={
          isVisible ? (
            <VisibilityIcon
              style={{
                position: "absolute",
                right: "7%",
                top: "34%",
                cursor: "pointer",
                color: "#8a2be1",
              }}
              onClick={visible}
            />
          ) : (
            <VisibilityOffIcon
              style={{
                position: "absolute",
                right: "7%",
                top: "34%",
                cursor: "pointer",
                color: "#8a2be1",
              }}
              onClick={visible}
            />
          )
        }
      ></Input>
      <Button text="Login"></Button>
      <ForgotPassword>Esqueci minha senha!</ForgotPassword>
    </BoxActions>
  );
}
