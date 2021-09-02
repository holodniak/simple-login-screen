import React, { useState } from "react";
import styled from "styled-components";
// import imagem from "../developer.gif";
import FormLogin from "./FormLogin";
import FormRegistry from "./FormRegistry";
import Lottie from "react-lottie";
import animationData from "../lotties/developer.json";

const Coitainer = styled.div`
  width: 100vw;
  height: 100vh;
  background: transparent;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;

  @media (max-width: 480px) {
    width: 100%;
    height: 100%;
    margin: 8rem auto;
  }
`;

const Box = styled.div`
  display: flex;
  width: 60%;
  height: 60%;
  background: #cecece;
  border-radius: 8px;

  @media (max-width: 480px) {
    width: 91%;
    height: 70%;
    flex-direction: column;
    overflow: hidden;
    overflow-y: scroll;
  }
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

  @media (max-width: 480px) {
    display: flex;
    width: 101%;
    height: 100%;
    border-radius: 8px 8px 0px 0px;
  }
`;

const Image = styled.div`
  width: 70%;
  height: 70%;
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

  @media (max-width: 480px) {
    width: 100%;
    height: 100%;
  }
`;

const Title = styled.h1`
  font-size: 33px;
  text-align: center;
  margin-top: 14%;
  color: #8a2be1;
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

  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animationData,
  };

  return (
    <Coitainer>
      <Box>
        <BoxImage>
          <Image>
            <Lottie options={defaultOptions} />
          </Image>
          <Join onClick={toggle}>
            {isClicked ? "Cadastre-se agora!" : "Já sou cadastrado!"}
          </Join>
        </BoxImage>
        <BoxLogin>
          <Title>PedroTech</Title>
          <FormLogin isClicked={isClicked} />
          <FormRegistry isClicked={isClicked} />
        </BoxLogin>
      </Box>
    </Coitainer>
  );
}
