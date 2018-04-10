import React from "react";
import styled from "styled-components";

const Root = styled.div`
  background-color: ${props => props.color};
  color: white;
`;

export default ({ display, color, handleClick }) => (
  <Root onClick={handleClick} color={color}>
    <p>{display}</p>
  </Root>
);
