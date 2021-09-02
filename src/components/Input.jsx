import React, { useState } from "react";
import styled, { css } from "styled-components";

const Input = styled.input`
  width: 84%;
  position: relative;
  background: #fff;
  padding: 4%;
  border-radius: 8px;
  border: 1px solid #8a2be1;
  margin: 1%;
  -webkit-autofill: hover;
  -webkit-autofill: focus;
  -webkit-autofill:active {
    border: none;
  }
  ${(props) =>
    props.isValid &&
    css`
      border: 1px solid #02ff39;
    `}
`;

const GroupInput = styled.div`
  position: relative;
  width: 80%;
  align-items: center;
  justify-content: center;
  margin-left: auto;
  margin-right: auto;

  @media (max-width: 480px) {
    width: 100%;
  }
`;

export default function Inputs(props) {
  const [isValid] = useState(false);
  return (
    <GroupInput>
      <Input
        onChange={isValid}
        type={props.type}
        placeholder={props.placeholder}
        style={{ margin: props.margin, marginLeft: props.marginLeft }}
        {...props}
      ></Input>
      {props.icon && props.icon}
    </GroupInput>
  );
}
