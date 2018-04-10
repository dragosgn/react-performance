import React from "react";
import styled from "styled-components";

const Root = styled.button`
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 5rem;
  height: 5rem;
  margin: 0.5rem;
  cursor: pointer;
  border: 1px solid grey;
  font-size: 1.3rem;
  border-radius: 3px;
  :hover {
    background-color: red;
  }
`;

export default ({ display, color, handleClick }) => (
  <Root
    onClick={handleClick}
    value={color.color}
    style={{ backgroundColor: `${color.color}` }}
  >
    {display}
  </Root>
);
