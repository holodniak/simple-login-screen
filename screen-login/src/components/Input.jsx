import React from "react";
import styled from "styled-components";

const Input = styled.input`
  width: 70%;
  height: 6%;
  position: relative;
  background: #fff;
  padding: 3%;
  border-radius: 8px;
  border: 1px solid #8a2be1;
`;

export default function Inputs(props) {
  return (
    <Input
      type={props.type}
      placeholder={props.placeholder}
      style={{ margin: props.margin }}
    ></Input>
  );
}
