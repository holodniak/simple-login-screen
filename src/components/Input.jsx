import React from "react";
import styled from "styled-components";

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
`;

const GroupInput = styled.div`
  position: relative;
  width: 80%;
  align-items: center;
  justify-content: center;
  margin-left: auto;
  margin-right: auto;
`;

export default function Inputs(props) {
  return (
    <GroupInput>
      <Input
        type={props.type}
        placeholder={props.placeholder}
        style={{ margin: props.margin, marginLeft: props.marginLeft }}
        {...props}
      ></Input>
      {props.icon && props.icon}
    </GroupInput>
  );
}
