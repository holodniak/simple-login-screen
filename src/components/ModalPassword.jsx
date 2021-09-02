import React, { useState } from "react";
import styled from "styled-components";
import Input from "./Input";
import { ToastContainer, toast } from "react-toastify";

const ModalCard = styled.div`
  display: block;
  width: 500px;
  height: 300px;
  background-color: lightgray;
  border-radius: 5px;

  @media (max-width: 480px) {
    width: 90%;
    height: 35%;
  }
`;

const HeaderCard = styled.div`
  position: relative;
  width: 100%;
  height: 14%;
  background-color: #8a2be1;
  font-size: 18px;
  text-align: center;
  font-weight: 600;
  border-radius: 4px 4px 0 0;
`;

const SendEmail = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  bottom: 0;
  margin-top: 10px;
`;

const TextCard = styled.div`
  height: 30%;
  text-align: center;
  font-size: 19px;
  margin-top: 2%;
  font-family: sans-serif;
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

const ContentCard = styled.div`
  padding: 8%;
`;

export default function ModalPassword() {
  const [email, setValue] = useState({
    email: "",
  });

  const notify = () => {
    if (email.email !== "") {
      toast.success("Email enviado com Sucesso!", {
        position: "bottom-right",
        autoClose: 4000,
        hideProgressBar: true,
        closeOnClick: false,
        pauseOnHover: false,
        draggable: true,
        progress: undefined,
      });
    } else {
      toast.error("Digite um email para enviar!", {
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
    <ModalCard>
      <HeaderCard>Esqueceu sua senha?</HeaderCard>
      <ContentCard>
        <TextCard>
          Digite o seu e-mail cadastrado para receber um o link de redefinição
          de senha
        </TextCard>
        <SendEmail>
          <Input
            placeholder="Digite seu Email"
            type="text"
            margin="4%"
            marginLeft="4%"
            onChange={(e) => {
              setValue({ ...email, email: e.target.value });
            }}
          ></Input>
          <Button onClick={notify}>Enviar Email</Button>
        </SendEmail>
      </ContentCard>
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
    </ModalCard>
  );
}
