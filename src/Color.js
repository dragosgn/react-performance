import React from "react";
import styled from "styled-components";

const Root = styled.div`
  background-color: ${props => props.color};
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 5rem;
  height: 5rem;
  margin: 0.5rem;
  cursor: pointer;
  :hover {
    background-color: red;
  }
`;

const Id = styled.p`
  font-size: 1.3rem;
  font-weight: 400;
`;

export default ({ display, color, handleClick }) => (
  <Root onClick={handleClick} color={color}>
    <Id>{display}</Id>
  </Root>
);
