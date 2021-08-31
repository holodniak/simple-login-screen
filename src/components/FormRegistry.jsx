import React, { useState } from "react";
import styled, { css } from "styled-components";
import VisibilityOffIcon from "@material-ui/icons/VisibilityOff";
import VisibilityIcon from "@material-ui/icons/Visibility";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import Input from "./Input";
import Button from "./Button";
import InputRegistry from "./InputRegistry";

const BoxActions = styled.div`
  height: 68%;
  margin: 3%;
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
  const [passwords, setValue] = useState({
    email: "",
    phone: "",
    password: "",
    confirmPassword: "",
  });

  const [isVisible, setIsVisible] = useState(false);

  const visible = () => {
    setIsVisible(!isVisible);
  };

  const notify = () => {
    let inputs = { ...passwords };
    let isValid = passwords.password === passwords.confirmPassword;
    const notValid = Object.keys(inputs)
      .map((key) => inputs[key])
      .filter((input) => input === "");

    if (notValid.length === 0 && isValid) {
      toast.success("Login Cadastrado com Sucesso!", {
        position: "bottom-right",
        autoClose: 4000,
        hideProgressBar: true,
        closeOnClick: false,
        pauseOnHover: false,
        draggable: true,
        progress: undefined,
      });
    } else {
      toast.error("Preencha todas as informações!", {
        position: "bottom-right",
        autoClose: 4000,
        hideProgressBar: true,
        closeOnClick: false,
        pauseOnHover: false,
        draggable: true,
        progress: undefined,
      });
    }
  };

  return (
    <BoxActions isClicked={props.isClicked}>
      <Input
        placeholder="E-mail"
        type="text"
        margin="1%"
        marginLeft="4%"
        onChange={(e) => {
          setValue({ ...passwords, email: e.target.value });
        }}
      ></Input>
      <Input
        placeholder="Telefone"
        type="text"
        margin="1%"
        marginLeft="4%"
        onChange={(e) => {
          setValue({ ...passwords, phone: e.target.value });
        }}
      ></Input>
      <InputRegistry
        placeholder="Senha"
        type={isVisible ? "text" : "password"}
        margin="1%"
        marginLeft="4%"
        isValid={
          passwords.password === passwords.confirmPassword &&
          passwords.password !== ""
        }
        onChange={(e) => {
          setValue({ ...passwords, password: e.target.value });
        }}
        icon={
          isVisible ? (
            <VisibilityIcon
              style={{
                position: "absolute",
                right: "7%",
                top: "28%",
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
                top: "28%",
                cursor: "pointer",
                color: "#8a2be1",
              }}
              onClick={visible}
            />
          )
        }
      ></InputRegistry>
      <InputRegistry
        placeholder="Confirmar Senha"
        type={isVisible ? "text" : "password"}
        margin="1%"
        marginLeft="4%"
        isValid={
          passwords.password === passwords.confirmPassword &&
          passwords.password !== ""
        }
        onChange={(e) => {
          setValue({ ...passwords, confirmPassword: e.target.value });
        }}
        icon={
          isVisible ? (
            <VisibilityIcon
              style={{
                position: "absolute",
                right: "7%",
                top: "28%",
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
                top: "28%",
                cursor: "pointer",
                color: "#8a2be1",
              }}
              onClick={visible}
            />
          )
        }
      ></InputRegistry>
      <Button onClick={notify} text="Cadastrar"></Button>
      <ToastContainer
        position="bottom-right"
        autoClose={4000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick={false}
        rtl={false}
        pauseOnFocusLoss={false}
        draggable
        pauseOnHover
      />
    </BoxActions>
  );
}
