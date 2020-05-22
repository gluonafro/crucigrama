import React from "react";
import styled from "styled-components";

const Button = (props) => {
  return <SButton onClick={props.func}>{props.text}</SButton>;
};

export default Button;

const SButton = styled.button`
  background: #fff;
  box-shadow: 1px 1px 5px rgba(0, 0, 0, 0.5);
  border: 0;
  border-radius: 3px;
  width: 100px;
  padding: 8px 0;
  :hover {
    box-shadow: 0px 0px 3px rgba(0, 0, 0, 0.9);
  }
`;
