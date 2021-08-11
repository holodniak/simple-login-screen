import React, { useState } from "react";
import styled from "styled-components";

const Button = styled.button`
  width: 60%;
  height: 13%;
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
`;

export default function Buttons(props) {
  return <Button>{props.text}</Button>;
}
