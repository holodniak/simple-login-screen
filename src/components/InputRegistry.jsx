import React, { useState } from "react";
import styled, { css } from "styled-components";

const InputRegistry = styled.input`
  width: 84%;
  position: relative;
  background: #fff;
  padding: 4%;
  border-radius: 8px;
  border: 1px solid #ff0000;
  margin: 1%;
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
`;

export default function InputsRegistry(props) {
  const [isValid] = useState(false);
  return (
    <GroupInput>
      <InputRegistry
        onChange={isValid}
        type={props.type}
        placeholder={props.placeholder}
        style={{ margin: props.margin, marginLeft: props.marginLeft }}
        {...props}
      ></InputRegistry>
      {props.icon && props.icon}
    </GroupInput>
  );
}
