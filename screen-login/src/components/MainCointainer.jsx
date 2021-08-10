import React, { useState } from "react";
import styled from "styled-components";
import imagem from "../version_control.svg";

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

export default function MainContainer() {
  return (
    <Coitainer>
      <Box>
        <BoxImage>
          <Image src={imagem} />
        </BoxImage>
      </Box>
    </Coitainer>
  );
}
