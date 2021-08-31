import React from "react";
import styled from "styled-components";

const ModalCard = styled.div`
  display: block;
  width: 300px;
  height: 300px;
  background-color: lightgray;
  border-radius: 5px;
`;

export default function ModalPassword(props) {
  return <ModalCard />;
}
